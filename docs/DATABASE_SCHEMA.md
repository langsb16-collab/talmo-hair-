# HairSim AI - Database Schema (ERD)

## 데이터베이스 설계 개요

### 기술 스택
- **Database**: Cloudflare D1 (SQLite)
- **ORM**: Drizzle ORM (선택사항)
- **Migration**: Wrangler D1 Migrations

---

## 테이블 구조

### 1. Users (사용자)
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  username TEXT UNIQUE,
  full_name TEXT,
  phone TEXT,
  birth_date DATE,
  gender TEXT CHECK(gender IN ('M', 'F', 'O')),
  profile_image_url TEXT,
  points INTEGER DEFAULT 0,
  membership_tier TEXT DEFAULT 'free' CHECK(membership_tier IN ('free', 'premium', 'vip')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login_at DATETIME,
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'suspended', 'deleted'))
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
```

### 2. Diagnoses (AI 진단 기록)
```sql
CREATE TABLE diagnoses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  
  -- 진단 결과
  hair_loss_type TEXT, -- 'M자형', 'O형', 'U형', 'M+O형'
  stage TEXT, -- 'Norwood 1', 'Norwood 2', ..., 'Ludwig I', 'Ludwig II'
  stage_score INTEGER CHECK(stage_score BETWEEN 0 AND 100),
  density_score INTEGER CHECK(density_score BETWEEN 0 AND 100),
  follicles_needed INTEGER,
  progression_risk TEXT CHECK(progression_risk IN ('low', 'medium', 'high')),
  
  -- AI 신뢰도 (신규)
  confidence_score REAL CHECK(confidence_score BETWEEN 0 AND 1),
  model_version TEXT,
  
  -- 추천 치료
  recommendation TEXT, -- 'surgery', 'medication', 'treatment', 'combination'
  estimated_cost_min INTEGER,
  estimated_cost_max INTEGER,
  
  -- 업로드 이미지
  front_image_url TEXT,
  left_image_url TEXT,
  top_image_url TEXT,
  
  -- 메타데이터
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_diagnoses_user_id ON diagnoses(user_id);
CREATE INDEX idx_diagnoses_created_at ON diagnoses(created_at);
```

### 3. Treatment_Plans (맞춤 치료 경로)
```sql
CREATE TABLE treatment_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  diagnosis_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  
  -- 플랜 정보
  plan_duration_months INTEGER, -- 3, 6, 12
  plan_type TEXT, -- 'surgery', 'medication', 'treatment', 'combination'
  
  -- 비용 및 효과
  estimated_cost INTEGER,
  effectiveness_score INTEGER CHECK(effectiveness_score BETWEEN 0 AND 5),
  bcr_score REAL, -- Benefit-Cost Ratio
  
  -- 회복 일정
  recovery_timeline_weeks INTEGER,
  weekly_progress_data TEXT, -- JSON: [{week: 1, progress: 10}, ...]
  
  -- 매칭 병원
  matched_hospital_ids TEXT, -- JSON: [1, 3, 5]
  matching_scores TEXT, -- JSON: [91, 86, 82]
  
  -- 상태
  status TEXT DEFAULT 'proposed' CHECK(status IN ('proposed', 'accepted', 'in_progress', 'completed')),
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (diagnosis_id) REFERENCES diagnoses(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_treatment_plans_user_id ON treatment_plans(user_id);
CREATE INDEX idx_treatment_plans_status ON treatment_plans(status);
```

### 4. Hospitals (병원 정보)
```sql
CREATE TABLE hospitals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  
  -- 병원 정보
  doctor_name TEXT,
  experience_years INTEGER,
  surgery_count INTEGER DEFAULT 0,
  success_rate REAL CHECK(success_rate BETWEEN 0 AND 100),
  
  -- 비용 정보
  price_per_follicle INTEGER,
  min_price INTEGER,
  max_price INTEGER,
  
  -- 위치 정보
  location TEXT,
  address TEXT,
  latitude REAL,
  longitude REAL,
  
  -- 신뢰 지표 (신규)
  verified BOOLEAN DEFAULT 0,
  certification_badges TEXT, -- JSON: ['certified', 'experienced', 'premium']
  verification_date DATE,
  
  -- 평가 정보
  rating REAL CHECK(rating BETWEEN 0 AND 5),
  review_count INTEGER DEFAULT 0,
  
  -- 특징 태그
  features TEXT, -- JSON: ['비절개전문', '여성탈모전문', '재수술전문']
  
  -- 메타데이터
  phone TEXT,
  website TEXT,
  image_url TEXT,
  description TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'inactive', 'suspended'))
);

CREATE INDEX idx_hospitals_location ON hospitals(location);
CREATE INDEX idx_hospitals_verified ON hospitals(verified);
CREATE INDEX idx_hospitals_rating ON hospitals(rating);
```

### 5. Simulations (시뮬레이션 기록)
```sql
CREATE TABLE simulations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  diagnosis_id INTEGER,
  
  -- 시뮬레이션 설정
  simulation_type TEXT, -- 'transplant', 'non_surgical', 'medication'
  follicle_count INTEGER,
  treatment_method TEXT,
  prediction_period_months INTEGER, -- 6, 12, 24
  
  -- 결과 데이터
  before_image_url TEXT,
  after_image_url TEXT,
  
  -- 상세 결과
  engraft_rate REAL,
  recovery_time_weeks INTEGER,
  surgery_time_hours REAL,
  expected_cost INTEGER,
  
  -- 리스크 분석
  risks TEXT, -- JSON: [{type: 'engraft_failure', probability: 0.1}, ...]
  
  -- AI 신뢰도 (신규)
  confidence_score REAL CHECK(confidence_score BETWEEN 0 AND 1),
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (diagnosis_id) REFERENCES diagnoses(id) ON DELETE SET NULL
);

CREATE INDEX idx_simulations_user_id ON simulations(user_id);
CREATE INDEX idx_simulations_created_at ON simulations(created_at);
```

### 6. Reviews (후기 및 실제 데이터)
```sql
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  hospital_id INTEGER,
  simulation_id INTEGER,
  
  -- 후기 내용
  title TEXT,
  content TEXT,
  rating INTEGER CHECK(rating BETWEEN 1 AND 5),
  
  -- 이미지
  before_image_url TEXT,
  simulation_image_url TEXT,
  after_image_url TEXT,
  
  -- 시뮬레이션 정확도
  accuracy_score INTEGER CHECK(accuracy_score BETWEEN 0 AND 100),
  period_months INTEGER, -- 경과 기간
  
  -- 해시태그
  hashtags TEXT, -- JSON: ['생착률우수', '자연스러움', '빠른회복']
  
  -- 검증 상태
  verified BOOLEAN DEFAULT 0,
  verification_date DATE,
  
  -- 통계
  helpful_count INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'published' CHECK(status IN ('draft', 'published', 'hidden', 'deleted')),
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id) ON DELETE SET NULL,
  FOREIGN KEY (simulation_id) REFERENCES simulations(id) ON DELETE SET NULL
);

CREATE INDEX idx_reviews_hospital_id ON reviews(hospital_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_verified ON reviews(verified);
CREATE INDEX idx_reviews_created_at ON reviews(created_at);
```

### 7. Community_Posts (커뮤니티 게시판)
```sql
CREATE TABLE community_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  
  -- 게시글 정보
  category TEXT, -- 'experience', 'question', 'tip', 'ama'
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  
  -- 이미지 및 미디어
  images TEXT, -- JSON: ['url1', 'url2']
  
  -- 통계
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  
  -- 베스트 표시
  is_best BOOLEAN DEFAULT 0,
  best_date DATE,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'published' CHECK(status IN ('draft', 'published', 'hidden', 'deleted')),
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_community_posts_category ON community_posts(category);
CREATE INDEX idx_community_posts_created_at ON community_posts(created_at);
CREATE INDEX idx_community_posts_is_best ON community_posts(is_best);
```

### 8. Community_Comments (커뮤니티 댓글)
```sql
CREATE TABLE community_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  parent_comment_id INTEGER, -- 대댓글용
  
  content TEXT NOT NULL,
  
  like_count INTEGER DEFAULT 0,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'published' CHECK(status IN ('published', 'hidden', 'deleted')),
  
  FOREIGN KEY (post_id) REFERENCES community_posts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (parent_comment_id) REFERENCES community_comments(id) ON DELETE CASCADE
);

CREATE INDEX idx_community_comments_post_id ON community_comments(post_id);
CREATE INDEX idx_community_comments_user_id ON community_comments(user_id);
```

### 9. User_Activities (사용자 활동 로그)
```sql
CREATE TABLE user_activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  
  activity_type TEXT, -- 'review', 'post', 'comment', 'like', 'follow'
  points_earned INTEGER DEFAULT 0,
  
  -- 관련 엔티티
  related_id INTEGER, -- review_id, post_id, comment_id 등
  related_type TEXT, -- 'review', 'post', 'comment'
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_activities_user_id ON user_activities(user_id);
CREATE INDEX idx_user_activities_created_at ON user_activities(created_at);
```

### 10. Hospital_Follows (병원 팔로우)
```sql
CREATE TABLE hospital_follows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  hospital_id INTEGER NOT NULL,
  
  notification_enabled BOOLEAN DEFAULT 1,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id) ON DELETE CASCADE,
  
  UNIQUE(user_id, hospital_id)
);

CREATE INDEX idx_hospital_follows_user_id ON hospital_follows(user_id);
CREATE INDEX idx_hospital_follows_hospital_id ON hospital_follows(hospital_id);
```

### 11. Consultations (상담 예약)
```sql
CREATE TABLE consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  hospital_id INTEGER NOT NULL,
  diagnosis_id INTEGER,
  treatment_plan_id INTEGER,
  
  -- 상담 정보
  consultation_type TEXT, -- 'online', 'offline', 'phone'
  preferred_date DATE,
  preferred_time TIME,
  status TEXT DEFAULT 'requested' CHECK(status IN ('requested', 'confirmed', 'completed', 'cancelled')),
  
  -- 연락 정보
  contact_phone TEXT,
  contact_email TEXT,
  message TEXT,
  
  -- 병원 응답
  hospital_response TEXT,
  confirmed_date DATE,
  confirmed_time TIME,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id) ON DELETE CASCADE,
  FOREIGN KEY (diagnosis_id) REFERENCES diagnoses(id) ON DELETE SET NULL,
  FOREIGN KEY (treatment_plan_id) REFERENCES treatment_plans(id) ON DELETE SET NULL
);

CREATE INDEX idx_consultations_user_id ON consultations(user_id);
CREATE INDEX idx_consultations_hospital_id ON consultations(hospital_id);
CREATE INDEX idx_consultations_status ON consultations(status);
```

### 12. Progress_Tracking (치료 경과 추적)
```sql
CREATE TABLE progress_tracking (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  treatment_plan_id INTEGER,
  
  -- 경과 기록
  tracking_date DATE NOT NULL,
  week_number INTEGER,
  progress_percentage INTEGER CHECK(progress_percentage BETWEEN 0 AND 100),
  
  -- 사진 기록
  photo_url TEXT,
  
  -- 증상 기록
  density_improvement INTEGER,
  satisfaction_score INTEGER CHECK(satisfaction_score BETWEEN 1 AND 5),
  side_effects TEXT, -- JSON: ['itching', 'redness']
  notes TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (treatment_plan_id) REFERENCES treatment_plans(id) ON DELETE SET NULL
);

CREATE INDEX idx_progress_tracking_user_id ON progress_tracking(user_id);
CREATE INDEX idx_progress_tracking_plan_id ON progress_tracking(treatment_plan_id);
CREATE INDEX idx_progress_tracking_date ON progress_tracking(tracking_date);
```

---

## ERD 다이어그램 (텍스트 표현)

```
Users (1) ─── (M) Diagnoses
Users (1) ─── (M) Treatment_Plans
Users (1) ─── (M) Simulations
Users (1) ─── (M) Reviews
Users (1) ─── (M) Community_Posts
Users (1) ─── (M) Community_Comments
Users (1) ─── (M) User_Activities
Users (1) ─── (M) Hospital_Follows
Users (1) ─── (M) Consultations
Users (1) ─── (M) Progress_Tracking

Diagnoses (1) ─── (M) Treatment_Plans
Diagnoses (1) ─── (M) Simulations
Diagnoses (1) ─── (M) Consultations

Treatment_Plans (1) ─── (M) Progress_Tracking
Treatment_Plans (1) ─── (M) Consultations

Hospitals (1) ─── (M) Reviews
Hospitals (1) ─── (M) Hospital_Follows
Hospitals (1) ─── (M) Consultations

Simulations (1) ─── (M) Reviews

Community_Posts (1) ─── (M) Community_Comments
Community_Comments (1) ─── (M) Community_Comments (self-referencing)
```

---

## 주요 비즈니스 로직

### 1. 포인트 시스템
```sql
-- 활동별 포인트
- 후기 작성: +50 points
- 베스트 후기: +200 points
- 게시글 작성: +10 points
- 댓글 작성: +5 points
- 좋아요 받기: +2 points
- 상담 완료: +30 points
```

### 2. 신뢰도 점수 계산
```sql
-- AI 신뢰도 (Confidence Score)
confidence_score = (
  model_certainty * 0.4 +
  image_quality * 0.3 +
  data_completeness * 0.3
)
```

### 3. BCR (Benefit-Cost Ratio) 계산
```sql
bcr_score = effectiveness_score / (estimated_cost / 1000000)
```

---

## 초기 데이터 시드

### 병원 샘플 데이터
```sql
INSERT INTO hospitals (name, doctor_name, experience_years, surgery_count, success_rate, price_per_follicle, location, verified, rating) VALUES
('강남헤어클리닉', '김○○', 15, 5000, 95, 3000, '서울 강남구', 1, 4.8),
('서울모발이식센터', '이○○', 12, 3800, 93, 2800, '서울 서초구', 1, 4.6),
('신사탈모클리닉', '박○○', 18, 6200, 96, 3500, '서울 강남구', 1, 4.9);
```

---

## 마이그레이션 전략

### 1. 초기 마이그레이션
```bash
# migrations/0001_create_core_tables.sql
# 모든 핵심 테이블 생성

# migrations/0002_add_indexes.sql
# 인덱스 추가

# migrations/0003_seed_initial_data.sql
# 초기 데이터 시드
```

### 2. 배포
```bash
# 로컬
wrangler d1 migrations apply hairsim-ai-production --local

# 프로덕션
wrangler d1 migrations apply hairsim-ai-production
```
