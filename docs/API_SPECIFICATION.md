# HairSim AI - API Specification

## API 개요

### Base URL
- **Production**: `https://ico.ai.kr/api`
- **Staging**: `https://hairsim-ai.pages.dev/api`

### 인증
```
Authorization: Bearer {access_token}
```

### 응답 형식
```json
{
  "success": true,
  "data": {},
  "message": "Success",
  "timestamp": "2025-12-21T05:00:00Z"
}
```

### 에러 응답
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  },
  "timestamp": "2025-12-21T05:00:00Z"
}
```

---

## 1. 인증 API (Authentication)

### 1.1 회원가입
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123!",
  "username": "john_doe",
  "full_name": "John Doe",
  "phone": "010-1234-5678"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "username": "john_doe",
      "points": 0,
      "membership_tier": "free"
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "refresh_token_here"
  }
}
```

### 1.2 로그인
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123!"
}
```

---

## 2. AI 진단 API (Diagnosis)

### 2.1 AI 진단 요청
```http
POST /api/diagnose
Authorization: Bearer {token}
Content-Type: multipart/form-data

front_image: (file)
left_image: (file)
top_image: (file)
age: 35
gender: M
symptoms: [itching, thinning]
```

**Response:**
```json
{
  "success": true,
  "data": {
    "diagnosis_id": 123,
    "hair_loss_type": "M자형",
    "stage": "Norwood 3단계",
    "stage_score": 65,
    "density_score": 72,
    "follicles_needed": 2500,
    "progression_risk": "medium",
    
    "confidence_score": 0.87,
    "model_version": "v2.1",
    
    "recommendation": "surgery",
    "estimated_cost_min": 5000000,
    "estimated_cost_max": 7000000,
    
    "image_urls": {
      "front": "https://r2.cloudflare.com/...",
      "left": "https://r2.cloudflare.com/...",
      "top": "https://r2.cloudflare.com/..."
    },
    
    "created_at": "2025-12-21T05:00:00Z"
  }
}
```

### 2.2 진단 기록 조회
```http
GET /api/diagnoses
Authorization: Bearer {token}
```

**Query Parameters:**
- `page`: 페이지 번호 (default: 1)
- `limit`: 페이지당 항목 수 (default: 10)

---

## 3. 맞춤 치료 경로 API (Treatment Plans)

### 3.1 치료 플랜 추천 생성
```http
POST /api/treatment-plans/recommend
Authorization: Bearer {token}
Content-Type: application/json

{
  "diagnosis_id": 123,
  "budget": 10000000,
  "time_available_months": 12,
  "goal_period": 6
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "plans": [
      {
        "id": 1,
        "plan_duration_months": 3,
        "plan_type": "medication",
        "estimated_cost": 1500000,
        "effectiveness_score": 2,
        "bcr_score": 1.33,
        "recovery_timeline_weeks": 12,
        "matched_hospitals": [
          {
            "hospital_id": 1,
            "matching_score": 91,
            "name": "강남헤어클리닉"
          }
        ]
      },
      {
        "id": 2,
        "plan_duration_months": 6,
        "plan_type": "surgery",
        "estimated_cost": 6000000,
        "effectiveness_score": 4,
        "bcr_score": 0.67,
        "recovery_timeline_weeks": 24,
        "matched_hospitals": [...]
      },
      {
        "id": 3,
        "plan_duration_months": 12,
        "plan_type": "combination",
        "estimated_cost": 8000000,
        "effectiveness_score": 5,
        "bcr_score": 0.625,
        "recovery_timeline_weeks": 48,
        "matched_hospitals": [...]
      }
    ],
    "recommendation": {
      "best_plan_id": 2,
      "reason": "최적의 비용 대비 효과"
    }
  }
}
```

### 3.2 치료 플랜 수락
```http
POST /api/treatment-plans/{id}/accept
Authorization: Bearer {token}
```

### 3.3 회복 타임라인 조회
```http
GET /api/treatment-plans/{id}/timeline
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "weekly_progress": [
      {"week": 1, "progress": 10, "description": "수술 직후, 붓기 시작"},
      {"week": 2, "progress": 15, "description": "붓기 감소, 딱지 형성"},
      {"week": 4, "progress": 25, "description": "딱지 탈락, 모발 일부 탈락"},
      {"week": 8, "progress": 40, "description": "새 모발 성장 시작"},
      {"week": 12, "progress": 60, "description": "눈에 띄는 밀도 증가"},
      {"week": 24, "progress": 100, "description": "최종 결과 확인 가능"}
    ]
  }
}
```

---

## 4. 시뮬레이션 API (Simulations)

### 4.1 시뮬레이션 생성
```http
POST /api/simulate
Authorization: Bearer {token}
Content-Type: application/json

{
  "diagnosis_id": 123,
  "simulation_type": "transplant",
  "follicle_count": 3000,
  "treatment_method": "FUE",
  "prediction_period_months": 12
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "simulation_id": 456,
    "before_image_url": "https://r2.cloudflare.com/before.jpg",
    "after_image_url": "https://r2.cloudflare.com/after.jpg",
    
    "results": {
      "engraft_rate": 92,
      "recovery_time_weeks": 24,
      "surgery_time_hours": 6.5,
      "expected_cost": 6500000
    },
    
    "risks": [
      {"type": "engraft_failure", "probability": 0.08, "severity": "medium"},
      {"type": "infection", "probability": 0.02, "severity": "low"}
    ],
    
    "confidence_score": 0.85,
    "created_at": "2025-12-21T05:00:00Z"
  }
}
```

---

## 5. 병원 API (Hospitals)

### 5.1 병원 목록 조회
```http
GET /api/hospitals
```

**Query Parameters:**
- `region`: 지역 필터 (예: '서울 강남구')
- `method`: 수술 방식 (예: 'FUE', 'FUT')
- `price_min`: 최소 가격
- `price_max`: 최대 가격
- `verified_only`: true/false
- `sort`: 정렬 기준 ('rating', 'price', 'experience')
- `page`: 페이지 번호
- `limit`: 페이지당 항목 수

**Response:**
```json
{
  "success": true,
  "data": {
    "hospitals": [
      {
        "id": 1,
        "name": "강남헤어클리닉",
        "doctor_name": "김○○",
        "experience_years": 15,
        "surgery_count": 5000,
        "success_rate": 95,
        "price_per_follicle": 3000,
        "location": "서울 강남구",
        "rating": 4.8,
        "review_count": 234,
        "verified": true,
        "certification_badges": ["certified", "experienced"],
        "features": ["비절개전문", "여성탈모전문"],
        "image_url": "https://...",
        "matching_score": 91
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 150
    }
  }
}
```

### 5.2 병원 상세 정보
```http
GET /api/hospitals/{id}
```

### 5.3 병원 팔로우
```http
POST /api/hospitals/{id}/follow
Authorization: Bearer {token}
```

### 5.4 병원 팔로우 취소
```http
DELETE /api/hospitals/{id}/follow
Authorization: Bearer {token}
```

---

## 6. 후기 API (Reviews)

### 6.1 후기 목록 조회
```http
GET /api/reviews
```

**Query Parameters:**
- `hospital_id`: 병원별 필터
- `verified_only`: 검증된 후기만
- `sort`: 정렬 ('latest', 'helpful', 'rating')
- `page`, `limit`

### 6.2 후기 작성
```http
POST /api/reviews
Authorization: Bearer {token}
Content-Type: multipart/form-data

hospital_id: 1
simulation_id: 456
title: "6개월 경과 - 매우 만족"
content: "상세 후기 내용..."
rating: 5
accuracy_score: 95
period_months: 6
before_image: (file)
after_image: (file)
hashtags: ["생착률우수", "자연스러움"]
```

**Response:**
```json
{
  "success": true,
  "data": {
    "review_id": 789,
    "points_earned": 50,
    "new_total_points": 150
  }
}
```

### 6.3 후기 도움됨 표시
```http
POST /api/reviews/{id}/helpful
Authorization: Bearer {token}
```

---

## 7. 커뮤니티 API (Community)

### 7.1 게시글 목록 조회
```http
GET /api/community/posts
```

**Query Parameters:**
- `category`: 카테고리 ('experience', 'question', 'tip', 'ama')
- `is_best`: 베스트 게시글만
- `sort`: 정렬 ('latest', 'popular', 'comments')
- `page`, `limit`

### 7.2 게시글 작성
```http
POST /api/community/posts
Authorization: Bearer {token}
Content-Type: application/json

{
  "category": "experience",
  "title": "FUE 수술 후기",
  "content": "상세 내용...",
  "images": ["url1", "url2"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "post_id": 101,
    "points_earned": 10,
    "new_total_points": 160
  }
}
```

### 7.3 댓글 작성
```http
POST /api/community/posts/{id}/comments
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "댓글 내용...",
  "parent_comment_id": null
}
```

### 7.4 게시글 좋아요
```http
POST /api/community/posts/{id}/like
Authorization: Bearer {token}
```

---

## 8. 개인 대시보드 API (Dashboard)

### 8.1 대시보드 개요
```http
GET /api/dashboard
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "username": "john_doe",
      "points": 160,
      "membership_tier": "free"
    },
    "statistics": {
      "total_diagnoses": 3,
      "active_treatment_plan": {
        "id": 2,
        "progress": 45,
        "days_remaining": 90
      },
      "simulations_count": 5,
      "reviews_count": 2,
      "posts_count": 8
    },
    "recent_activity": [
      {
        "type": "diagnosis",
        "date": "2025-12-20",
        "description": "AI 진단 완료"
      },
      {
        "type": "review",
        "date": "2025-12-15",
        "description": "후기 작성 (+50 points)"
      }
    ]
  }
}
```

### 8.2 치료 경과 추적 기록
```http
POST /api/progress-tracking
Authorization: Bearer {token}
Content-Type: multipart/form-data

treatment_plan_id: 2
tracking_date: 2025-12-21
week_number: 8
progress_percentage: 45
photo: (file)
density_improvement: 30
satisfaction_score: 4
notes: "밀도가 눈에 띄게 증가했습니다"
```

### 8.3 경과 추적 조회
```http
GET /api/progress-tracking
Authorization: Bearer {token}
```

**Query Parameters:**
- `treatment_plan_id`: 특정 치료 플랜
- `from_date`: 시작 날짜
- `to_date`: 종료 날짜

**Response:**
```json
{
  "success": true,
  "data": {
    "progress_records": [
      {
        "id": 1,
        "tracking_date": "2025-10-01",
        "week_number": 1,
        "progress_percentage": 10,
        "photo_url": "https://...",
        "density_improvement": 5,
        "satisfaction_score": 3,
        "notes": "..."
      },
      {
        "id": 2,
        "tracking_date": "2025-12-01",
        "week_number": 8,
        "progress_percentage": 45,
        "photo_url": "https://...",
        "density_improvement": 30,
        "satisfaction_score": 4,
        "notes": "..."
      }
    ],
    "chart_data": {
      "weeks": [1, 2, 4, 8, 12],
      "progress": [10, 15, 25, 45, 60]
    }
  }
}
```

---

## 9. 상담 예약 API (Consultations)

### 9.1 상담 예약 요청
```http
POST /api/consultations
Authorization: Bearer {token}
Content-Type: application/json

{
  "hospital_id": 1,
  "diagnosis_id": 123,
  "treatment_plan_id": 2,
  "consultation_type": "offline",
  "preferred_date": "2025-12-25",
  "preferred_time": "14:00",
  "contact_phone": "010-1234-5678",
  "message": "평일 오후 시간 희망합니다"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "consultation_id": 999,
    "status": "requested",
    "hospital_name": "강남헤어클리닉",
    "message": "상담 요청이 접수되었습니다. 병원에서 24시간 내 연락드릴 예정입니다."
  }
}
```

### 9.2 상담 예약 목록
```http
GET /api/consultations
Authorization: Bearer {token}
```

---

## 10. 포인트 & 활동 API (Points & Activities)

### 10.1 활동 내역 조회
```http
GET /api/activities
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "activities": [
      {
        "id": 1,
        "activity_type": "review",
        "points_earned": 50,
        "description": "후기 작성",
        "created_at": "2025-12-15T10:00:00Z"
      },
      {
        "id": 2,
        "activity_type": "post",
        "points_earned": 10,
        "description": "게시글 작성",
        "created_at": "2025-12-18T15:30:00Z"
      }
    ],
    "total_points": 160
  }
}
```

---

## 11. 통계 API (Statistics)

### 11.1 플랫폼 통계
```http
GET /api/statistics
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total_simulations": 15420,
    "successful_cases": 3284,
    "partner_hospitals": 152,
    "average_satisfaction": 96,
    "average_accuracy": 89,
    "total_reviews": 1547
  }
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `AUTH_REQUIRED` | 401 | 인증 필요 |
| `INVALID_TOKEN` | 401 | 유효하지 않은 토큰 |
| `FORBIDDEN` | 403 | 권한 없음 |
| `NOT_FOUND` | 404 | 리소스를 찾을 수 없음 |
| `VALIDATION_ERROR` | 400 | 입력 검증 실패 |
| `DUPLICATE_ENTRY` | 409 | 중복 데이터 |
| `RATE_LIMIT_EXCEEDED` | 429 | 요청 한도 초과 |
| `SERVER_ERROR` | 500 | 서버 오류 |

---

## Rate Limiting

- **Anonymous**: 100 requests / hour
- **Authenticated**: 1000 requests / hour
- **Premium**: 5000 requests / hour

---

## Webhooks (향후 구현)

### Hospital Response Webhook
```http
POST {webhook_url}
Content-Type: application/json

{
  "event": "consultation_confirmed",
  "consultation_id": 999,
  "confirmed_date": "2025-12-25",
  "confirmed_time": "14:00",
  "message": "상담이 확정되었습니다"
}
```

---

## 다국어 지원

모든 API는 `Accept-Language` 헤더를 지원합니다:

```http
Accept-Language: ko-KR
Accept-Language: en-US
Accept-Language: zh-CN
Accept-Language: ja-JP
```

응답 메시지는 요청된 언어로 반환됩니다.
