# HairSim AI - Feature Implementation Guide

## 개요

이 문서는 맞춤 치료 경로, 신뢰 지표, 커뮤니티 기능의 구현 가이드입니다.

---

## Phase 1: 맞춤 치료 경로 추천 엔진

### 1.1 치료 플랜 추천 알고리즘

```javascript
// 치료 플랜 생성 로직 (Pseudo Code)
function generateTreatmentPlans(diagnosis, userPreferences) {
  const { stage_score, density_score, follicles_needed } = diagnosis;
  const { budget, time_available_months } = userPreferences;
  
  const plans = [];
  
  // Plan 1: 3개월 단기 플랜 (약물 치료)
  if (stage_score <= 50) {
    plans.push({
      duration_months: 3,
      type: 'medication',
      cost: 1500000,
      effectiveness_score: 2,
      bcr_score: calculateBCR(2, 1500000),
      recovery_weeks: 12,
      treatment_details: {
        medications: ['피나스테리드 1mg', '미녹시딜 5%'],
        schedule: '1일 1회 복용, 두피 도포',
        expected_results: '탈모 진행 억제, 밀도 5-10% 증가'
      }
    });
  }
  
  // Plan 2: 6개월 중기 플랜 (수술 + 약물)
  if (stage_score >= 30 && follicles_needed >= 1500) {
    const surgery_cost = follicles_needed * 2500;
    plans.push({
      duration_months: 6,
      type: 'surgery',
      cost: surgery_cost,
      effectiveness_score: 4,
      bcr_score: calculateBCR(4, surgery_cost),
      recovery_weeks: 24,
      treatment_details: {
        surgery: {
          method: 'FUE',
          follicles: follicles_needed,
          sessions: 1,
          recovery: '24주'
        },
        post_surgery: ['피나스테리드 유지', '두피 케어']
      }
    });
  }
  
  // Plan 3: 12개월 장기 플랜 (복합 치료)
  if (stage_score >= 50) {
    const total_cost = follicles_needed * 3000 + 2000000;
    plans.push({
      duration_months: 12,
      type: 'combination',
      cost: total_cost,
      effectiveness_score: 5,
      bcr_score: calculateBCR(5, total_cost),
      recovery_weeks: 48,
      treatment_details: {
        phase1: 'PRP 치료 3회 (1-3개월)',
        phase2: 'FUE 수술 (4개월)',
        phase3: '약물 유지 + 모니터링 (5-12개월)'
      }
    });
  }
  
  // 병원 매칭
  plans.forEach(plan => {
    plan.matched_hospitals = matchHospitals(plan, diagnosis);
  });
  
  return plans;
}

function calculateBCR(effectiveness, cost) {
  return effectiveness / (cost / 1000000);
}

function matchHospitals(plan, diagnosis) {
  // 병원 데이터베이스 쿼리
  const hospitals = getHospitals({
    methods: plan.type === 'surgery' ? ['FUE', 'FUT'] : null,
    min_rating: 4.0,
    verified: true
  });
  
  // 매칭 점수 계산
  return hospitals.map(hospital => ({
    hospital_id: hospital.id,
    name: hospital.name,
    matching_score: calculateMatchingScore(hospital, plan, diagnosis),
    estimated_cost: hospital.price_per_follicle * diagnosis.follicles_needed
  }))
  .sort((a, b) => b.matching_score - a.matching_score)
  .slice(0, 3);
}

function calculateMatchingScore(hospital, plan, diagnosis) {
  let score = 0;
  
  // 경험 점수 (0-30)
  score += Math.min(hospital.experience_years / 20 * 30, 30);
  
  // 성공률 점수 (0-30)
  score += hospital.success_rate / 100 * 30;
  
  // 수술 건수 점수 (0-20)
  score += Math.min(hospital.surgery_count / 10000 * 20, 20);
  
  // 평점 점수 (0-20)
  score += hospital.rating / 5 * 20;
  
  return Math.round(score);
}
```

### 1.2 회복 타임라인 생성

```javascript
function generateRecoveryTimeline(plan) {
  const timelines = {
    medication: [
      { week: 1, progress: 5, description: '약물 복용 시작, 초기 적응' },
      { week: 4, progress: 10, description: '탈모 진행 둔화 시작' },
      { week: 8, progress: 20, description: '모발 굵기 증가 감지' },
      { week: 12, progress: 30, description: '밀도 5% 증가 확인' }
    ],
    surgery: [
      { week: 1, progress: 10, description: '수술 직후, 붓기 및 통증' },
      { week: 2, progress: 15, description: '붓기 감소, 딱지 형성' },
      { week: 4, progress: 25, description: '딱지 탈락, 모발 일부 탈락 (정상)' },
      { week: 8, progress: 40, description: '새 모발 성장 시작' },
      { week: 12, progress: 60, description: '눈에 띄는 밀도 증가' },
      { week: 24, progress: 100, description: '최종 결과 확인 가능, 생착 완료' }
    ],
    combination: [
      { week: 1, progress: 5, description: 'PRP 1차 시술' },
      { week: 4, progress: 10, description: 'PRP 2차 시술, 두피 개선' },
      { week: 8, progress: 15, description: 'PRP 3차 시술, 밀도 증가' },
      { week: 16, progress: 30, description: 'FUE 수술 실시' },
      { week: 20, progress: 45, description: '수술 부위 회복' },
      { week: 28, progress: 65, description: '새 모발 성장 시작' },
      { week: 36, progress: 80, description: '밀도 크게 증가' },
      { week: 48, progress: 100, description: '최종 결과, 유지 단계' }
    ]
  };
  
  return timelines[plan.type] || [];
}
```

---

## Phase 2: 신뢰 지표 & 투명성 모듈

### 2.1 AI 신뢰도 점수 계산

```javascript
function calculateConfidenceScore(imageAnalysis, inputData) {
  // 모델 확실성 (0-1)
  const modelCertainty = imageAnalysis.prediction_confidence;
  
  // 이미지 품질 점수 (0-1)
  const imageQuality = (
    imageAnalysis.resolution_score * 0.3 +
    imageAnalysis.lighting_score * 0.3 +
    imageAnalysis.angle_score * 0.4
  );
  
  // 데이터 완성도 (0-1)
  const dataCompleteness = (
    (inputData.age ? 0.25 : 0) +
    (inputData.symptoms ? 0.25 : 0) +
    (inputData.history ? 0.25 : 0) +
    (inputData.all_angles_uploaded ? 0.25 : 0)
  );
  
  // 최종 신뢰도 계산
  const confidence = (
    modelCertainty * 0.4 +
    imageQuality * 0.3 +
    dataCompleteness * 0.3
  );
  
  return {
    score: confidence,
    breakdown: {
      model_certainty: modelCertainty,
      image_quality: imageQuality,
      data_completeness: dataCompleteness
    },
    recommendation: confidence >= 0.8 ? 'high' : confidence >= 0.6 ? 'medium' : 'low'
  };
}
```

### 2.2 신뢰도 표시 UI 컴포넌트

```html
<!-- 신뢰도 표시 카드 -->
<div class="confidence-card bg-white rounded-lg shadow-md p-6 mb-6">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-xl font-bold">AI 분석 신뢰도</h3>
    <div class="flex items-center">
      <div class="confidence-score text-3xl font-bold text-blue-600">87%</div>
      <i class="fas fa-check-circle text-green-500 ml-2"></i>
    </div>
  </div>
  
  <!-- 신뢰도 세부 항목 -->
  <div class="confidence-breakdown space-y-3">
    <div class="flex items-center justify-between">
      <span class="text-gray-600">모델 확실성</span>
      <div class="flex items-center">
        <div class="progress-bar w-24 h-2 bg-gray-200 rounded-full mr-2">
          <div class="progress-fill h-full bg-blue-600 rounded-full" style="width: 90%"></div>
        </div>
        <span class="text-sm font-semibold">90%</span>
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <span class="text-gray-600">이미지 품질</span>
      <div class="flex items-center">
        <div class="progress-bar w-24 h-2 bg-gray-200 rounded-full mr-2">
          <div class="progress-fill h-full bg-blue-600 rounded-full" style="width: 85%"></div>
        </div>
        <span class="text-sm font-semibold">85%</span>
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <span class="text-gray-600">데이터 완성도</span>
      <div class="flex items-center">
        <div class="progress-bar w-24 h-2 bg-gray-200 rounded-full mr-2">
          <div class="progress-fill h-full bg-blue-600 rounded-full" style="width: 86%"></div>
        </div>
        <span class="text-sm font-semibold">86%</span>
      </div>
    </div>
  </div>
  
  <!-- 안내 문구 -->
  <div class="mt-4 p-3 bg-blue-50 rounded-lg">
    <div class="flex items-start">
      <i class="fas fa-info-circle text-blue-600 mt-1 mr-2"></i>
      <div class="text-sm text-gray-700">
        <p class="font-semibold mb-1">예측 정확도 안내</p>
        <p>본 분석 결과는 AI 기반 예측이며, 실제 의료 진단이 아닙니다. 
        정확한 진단과 치료는 의료 전문가와 상담하시기 바랍니다.</p>
      </div>
    </div>
  </div>
</div>
```

### 2.3 병원 검증 배지 시스템

```javascript
// 병원 검증 배지 정의
const VERIFICATION_BADGES = {
  certified: {
    label: '인증 병원',
    icon: 'fa-certificate',
    color: 'blue',
    description: '의료 기관 인증 완료'
  },
  experienced: {
    label: '경력 10년+',
    icon: 'fa-award',
    color: 'purple',
    description: '10년 이상 경력 원장'
  },
  high_volume: {
    label: '다수술 병원',
    icon: 'fa-users',
    color: 'green',
    description: '연간 500건 이상 수술'
  },
  premium: {
    label: '프리미엄',
    icon: 'fa-star',
    color: 'yellow',
    description: '평점 4.8 이상 우수 병원'
  },
  ai_verified: {
    label: 'AI 검증',
    icon: 'fa-robot',
    color: 'indigo',
    description: 'AI 매칭 정확도 검증'
  }
};

function renderBadges(hospital) {
  const badges = hospital.certification_badges || [];
  return badges.map(badge => {
    const config = VERIFICATION_BADGES[badge];
    return `
      <span class="badge inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${config.color}-100 text-${config.color}-800 mr-2" 
            title="${config.description}">
        <i class="fas ${config.icon} mr-1"></i>
        ${config.label}
      </span>
    `;
  }).join('');
}
```

---

## Phase 3: 커뮤니티 & 후기 시스템

### 3.1 포인트 시스템 구현

```javascript
const POINT_RULES = {
  review_create: 50,
  review_best: 200,
  post_create: 10,
  comment_create: 5,
  like_received: 2,
  consultation_completed: 30,
  daily_login: 1,
  profile_complete: 20
};

async function awardPoints(userId, activityType, relatedId) {
  const points = POINT_RULES[activityType] || 0;
  
  if (points > 0) {
    // 포인트 추가
    await db.execute(`
      UPDATE users 
      SET points = points + ? 
      WHERE id = ?
    `, [points, userId]);
    
    // 활동 기록
    await db.execute(`
      INSERT INTO user_activities 
      (user_id, activity_type, points_earned, related_id, related_type) 
      VALUES (?, ?, ?, ?, ?)
    `, [userId, activityType, points, relatedId, getRelatedType(activityType)]);
    
    // 멤버십 티어 업데이트 체크
    await checkMembershipTierUpgrade(userId);
  }
  
  return points;
}

async function checkMembershipTierUpgrade(userId) {
  const user = await db.query('SELECT points FROM users WHERE id = ?', [userId]);
  
  let new_tier = 'free';
  if (user.points >= 10000) new_tier = 'vip';
  else if (user.points >= 1000) new_tier = 'premium';
  
  if (new_tier !== user.membership_tier) {
    await db.execute(`
      UPDATE users 
      SET membership_tier = ? 
      WHERE id = ?
    `, [new_tier, userId]);
  }
}
```

### 3.2 커뮤니티 게시판 UI

```html
<!-- 커뮤니티 메인 페이지 -->
<div class="community-container max-w-7xl mx-auto px-4 py-8">
  <!-- 헤더 -->
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">커뮤니티</h1>
    <button class="btn-primary bg-blue-600 text-white px-6 py-3 rounded-lg">
      <i class="fas fa-pen mr-2"></i>글쓰기
    </button>
  </div>
  
  <!-- 카테고리 탭 -->
  <div class="category-tabs flex space-x-4 mb-6 border-b">
    <button class="tab active px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-semibold">
      전체
    </button>
    <button class="tab px-4 py-2 text-gray-600 hover:text-blue-600">
      수술 후기
    </button>
    <button class="tab px-4 py-2 text-gray-600 hover:text-blue-600">
      Q&A
    </button>
    <button class="tab px-4 py-2 text-gray-600 hover:text-blue-600">
      팁/정보
    </button>
    <button class="tab px-4 py-2 text-gray-600 hover:text-blue-600">
      의사 AMA
    </button>
  </div>
  
  <!-- 베스트 게시글 -->
  <div class="best-posts mb-8 bg-yellow-50 rounded-lg p-6">
    <h2 class="text-xl font-bold mb-4 flex items-center">
      <i class="fas fa-crown text-yellow-500 mr-2"></i>
      베스트 게시글
    </h2>
    <div class="space-y-3">
      <div class="best-post-item bg-white rounded-lg p-4 flex items-center justify-between">
        <div class="flex items-center flex-1">
          <span class="badge bg-red-100 text-red-600 px-2 py-1 rounded text-sm mr-3">HOT</span>
          <h3 class="font-semibold mr-3">FUE 수술 6개월 후기 - 생착률 95%!</h3>
          <span class="text-gray-500 text-sm">john_doe</span>
        </div>
        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <span><i class="fas fa-eye mr-1"></i>1,234</span>
          <span><i class="fas fa-heart mr-1"></i>89</span>
          <span><i class="fas fa-comment mr-1"></i>45</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 게시글 목록 -->
  <div class="posts-list space-y-4">
    <!-- 게시글 아이템 -->
    <div class="post-item bg-white rounded-lg shadow p-6">
      <div class="flex items-start">
        <!-- 작성자 정보 -->
        <div class="author-info mr-4">
          <img src="/static/avatar.png" class="w-12 h-12 rounded-full" alt="avatar">
          <div class="text-xs text-gray-500 mt-1 text-center">
            <i class="fas fa-medal text-yellow-500"></i> Premium
          </div>
        </div>
        
        <!-- 게시글 내용 -->
        <div class="post-content flex-1">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center">
              <span class="font-bold mr-2">john_doe</span>
              <span class="text-gray-500 text-sm">2시간 전</span>
            </div>
            <span class="badge bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">수술 후기</span>
          </div>
          
          <h3 class="text-lg font-semibold mb-2">비절개 FUE 3개월 경과 - 상세 후기</h3>
          <p class="text-gray-700 mb-3">
            3개월 전 강남 ○○클리닉에서 FUE 수술을 받았습니다. 
            2,800모 이식했고, 현재 생착률은 약 90% 정도로 추정됩니다...
          </p>
          
          <!-- 이미지 미리보기 -->
          <div class="images-preview flex space-x-2 mb-3">
            <img src="/static/before.jpg" class="w-24 h-24 rounded object-cover" alt="before">
            <img src="/static/after.jpg" class="w-24 h-24 rounded object-cover" alt="after">
          </div>
          
          <!-- 통계 및 액션 -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <span><i class="fas fa-eye mr-1"></i>456</span>
              <span><i class="fas fa-heart mr-1 text-red-500"></i>23</span>
              <span><i class="fas fa-comment mr-1"></i>12</span>
            </div>
            <div class="flex items-center space-x-2">
              <button class="btn-icon text-gray-500 hover:text-red-500">
                <i class="fas fa-heart"></i>
              </button>
              <button class="btn-icon text-gray-500 hover:text-blue-500">
                <i class="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 페이지네이션 -->
  <div class="pagination flex justify-center mt-8 space-x-2">
    <button class="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">&laquo;</button>
    <button class="px-3 py-2 rounded bg-blue-600 text-white">1</button>
    <button class="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">2</button>
    <button class="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">3</button>
    <button class="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">&raquo;</button>
  </div>
</div>
```

---

## Phase 4: 개인 대시보드

### 4.1 대시보드 메인 화면

```html
<!-- 개인 대시보드 -->
<div class="dashboard-container max-w-7xl mx-auto px-4 py-8">
  <!-- 헤더 -->
  <div class="dashboard-header mb-8">
    <h1 class="text-3xl font-bold mb-2">내 대시보드</h1>
    <p class="text-gray-600">안녕하세요, john_doe님! 🎉</p>
  </div>
  
  <!-- 통계 카드 -->
  <div class="stats-grid grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    <div class="stat-card bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-600">총 포인트</span>
        <i class="fas fa-coins text-yellow-500 text-2xl"></i>
      </div>
      <div class="text-3xl font-bold text-blue-600">1,250 P</div>
      <div class="text-sm text-gray-500 mt-1">Premium 회원</div>
    </div>
    
    <div class="stat-card bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-600">AI 진단</span>
        <i class="fas fa-brain text-purple-500 text-2xl"></i>
      </div>
      <div class="text-3xl font-bold">3</div>
      <div class="text-sm text-gray-500 mt-1">+1 최근 7일</div>
    </div>
    
    <div class="stat-card bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-600">작성 후기</span>
        <i class="fas fa-star text-yellow-500 text-2xl"></i>
      </div>
      <div class="text-3xl font-bold">2</div>
      <div class="text-sm text-gray-500 mt-1">평균 4.5점</div>
    </div>
    
    <div class="stat-card bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-600">상담 예약</span>
        <i class="fas fa-calendar text-green-500 text-2xl"></i>
      </div>
      <div class="text-3xl font-bold">1</div>
      <div class="text-sm text-gray-500 mt-1">진행 중</div>
    </div>
  </div>
  
  <!-- 현재 치료 경로 -->
  <div class="current-treatment bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow p-6 text-white mb-8">
    <h2 class="text-2xl font-bold mb-4">진행 중인 치료 경로</h2>
    <div class="treatment-info flex items-center justify-between">
      <div>
        <p class="text-lg mb-1">6개월 플랜 - FUE 수술</p>
        <p class="text-sm opacity-90">시작일: 2025-10-01 | 경과: 12주</p>
      </div>
      <div class="text-right">
        <div class="text-4xl font-bold mb-1">45%</div>
        <div class="text-sm opacity-90">진행률</div>
      </div>
    </div>
    
    <!-- 진행률 바 -->
    <div class="progress-bar w-full h-3 bg-white bg-opacity-30 rounded-full mt-4">
      <div class="progress-fill h-full bg-white rounded-full" style="width: 45%"></div>
    </div>
    
    <div class="flex items-center justify-between mt-4">
      <span class="text-sm">다음 경과 기록: 3일 후</span>
      <button class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">
        경과 기록하기
      </button>
    </div>
  </div>
  
  <!-- 최근 활동 -->
  <div class="recent-activity bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-bold mb-4">최근 활동</h2>
    <div class="activity-list space-y-3">
      <div class="activity-item flex items-center justify-between py-3 border-b">
        <div class="flex items-center">
          <div class="icon-circle bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <i class="fas fa-brain"></i>
          </div>
          <div>
            <p class="font-semibold">AI 진단 완료</p>
            <p class="text-sm text-gray-500">2025-12-20</p>
          </div>
        </div>
        <button class="text-blue-600 hover:underline">보기</button>
      </div>
      
      <div class="activity-item flex items-center justify-between py-3 border-b">
        <div class="flex items-center">
          <div class="icon-circle bg-yellow-100 text-yellow-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <i class="fas fa-star"></i>
          </div>
          <div>
            <p class="font-semibold">후기 작성 (+50 points)</p>
            <p class="text-sm text-gray-500">2025-12-15</p>
          </div>
        </div>
        <button class="text-blue-600 hover:underline">보기</button>
      </div>
    </div>
  </div>
</div>
```

---

## 구현 우선순위

### MVP (0-90일)
1. ✅ AI 진단 (완료)
2. 🔄 치료 경로 추천 (진행 중)
3. 🔄 신뢰도 표시 (진행 중)
4. ⏳ 기본 커뮤니티 게시판
5. ⏳ 후기 시스템

### Beta (90-180일)
1. ⏳ 개인 대시보드
2. ⏳ 경과 추적 시스템
3. ⏳ 포인트 & 리워드
4. ⏳ 병원 팔로우
5. ⏳ 상담 예약 시스템

### Scale (180일+)
1. ⏳ 모바일 앱 (PWA)
2. ⏳ 결제 시스템
3. ⏳ AR 미리보기
4. ⏳ AI 챗봇 상담
5. ⏳ 구독 서비스

---

## 다음 단계

1. **Database Migration 실행**
   ```bash
   wrangler d1 create hairsim-ai-production
   wrangler d1 migrations apply hairsim-ai-production --local
   ```

2. **API Endpoints 구현**
   - `/api/treatment-plans/recommend`
   - `/api/community/posts`
   - `/api/dashboard`

3. **Frontend 페이지 추가**
   - `/treatment-plans` 
   - `/community`
   - `/dashboard`

4. **테스트 및 배포**
   - Unit Tests
   - Integration Tests
   - Production Deployment
