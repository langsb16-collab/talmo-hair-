import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// API Routes
app.get('/api/diagnose', async (c) => {
  // AI 탈모 진단 API (모의 데이터)
  return c.json({
    success: true,
    data: {
      hairLossType: 'M자형',
      stage: 'Norwood 3단계',
      density: 65,
      folliclesNeeded: 2500,
      progressionRisk: 'medium',
      recommendation: 'surgery'
    }
  })
})

app.post('/api/simulate', async (c) => {
  // 가상 시뮬레이션 API (모의 데이터)
  const body = await c.req.json()
  return c.json({
    success: true,
    data: {
      simulationType: body.type,
      beforeImage: body.imageUrl,
      afterImage: '/static/images/simulation-result.jpg',
      expectedCost: '5,000,000 ~ 7,000,000원',
      successRate: 92,
      recoveryTime: '6개월'
    }
  })
})

app.get('/api/hospitals', (c) => {
  // 병원 목록 API (모의 데이터)
  return c.json({
    success: true,
    data: [
      {
        id: 1,
        name: '강남헤어클리닉',
        doctor: '김○○ 원장',
        experience: '15년',
        surgeryCount: 5000,
        successRate: 95,
        pricePerFollicle: 3000,
        location: '서울 강남구',
        rating: 4.8
      },
      {
        id: 2,
        name: '서울모발이식센터',
        doctor: '이○○ 원장',
        experience: '12년',
        surgeryCount: 3800,
        successRate: 93,
        pricePerFollicle: 2800,
        location: '서울 서초구',
        rating: 4.6
      },
      {
        id: 3,
        name: '신사탈모클리닉',
        doctor: '박○○ 원장',
        experience: '18년',
        surgeryCount: 6200,
        successRate: 96,
        pricePerFollicle: 3500,
        location: '서울 강남구',
        rating: 4.9
      }
    ]
  })
})

app.post('/api/treatment-plans', async (c) => {
  // 맞춤 치료 플랜 추천 API
  const body = await c.req.json()
  const { stage, budget, timeframe, goals } = body
  
  // 플랜 계산 로직 (모의 데이터)
  const plans = {
    '3months': {
      duration: '3개월',
      totalCost: budget * 0.3,
      treatments: ['약물치료', '메조테라피', 'PRP'],
      effectiveness: 65,
      bcrScore: 2.1,
      followUps: 6,
      expectedResult: '탈모 진행 지연'
    },
    '6months': {
      duration: '6개월',
      totalCost: budget * 0.6,
      treatments: ['약물치료', '메조테라피', 'PRP', '저출력 레이저'],
      effectiveness: 78,
      bcrScore: 2.8,
      followUps: 12,
      expectedResult: '중등도 개선'
    },
    '12months': {
      duration: '12개월',
      totalCost: budget,
      treatments: ['모발이식', '약물치료', 'PRP', '줄기세포치료'],
      effectiveness: 92,
      bcrScore: 3.5,
      followUps: 24,
      expectedResult: '최대 개선'
    }
  }
  
  return c.json({
    success: true,
    data: {
      patientInfo: { stage, budget, timeframe, goals },
      plans,
      recommendedPlan: '12months',
      matchedHospitals: [1, 2, 3]
    }
  })
})

app.get('/api/recovery-timeline', (c) => {
  // 회복 일정 시뮬레이션 API
  const weeks = [
    { week: 1, status: '수술 직후', recovery: 10, symptoms: '부기, 통증', activities: '안정' },
    { week: 2, status: '초기 회복', recovery: 25, symptoms: '가벼운 부기', activities: '가벼운 일상' },
    { week: 4, status: '중기 회복', recovery: 50, symptoms: '가려움', activities: '정상 활동' },
    { week: 8, status: '후기 회복', recovery: 75, symptoms: '최소', activities: '모든 활동' },
    { week: 12, status: '안정기', recovery: 90, symptoms: '없음', activities: '정상' },
    { week: 24, status: '최종 결과', recovery: 100, symptoms: '없음', activities: '정상' }
  ]
  
  return c.json({
    success: true,
    data: { timeline: weeks }
  })
})

// Main Pages
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HairSim AI - 탈모 수술 시뮬레이션 플랫폼</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/i18n.js"></script>
        <style>
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .hero-section {
            min-height: 600px;
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          }
          /* Mobile optimization */
          @media (max-width: 768px) {
            nav {
              height: auto !important;
              min-height: 48px;
            }
            nav .flex {
              height: 48px !important;
            }
            nav i {
              font-size: 1rem !important;
              margin-right: 0.25rem !important;
            }
            nav span {
              font-size: 0.9rem !important;
            }
            nav a {
              font-size: 0.75rem !important;
              padding: 0.25rem 0.5rem;
            }
            .hero-section {
              min-height: 400px !important;
              padding: 2rem 0 !important;
            }
            .hero-section h1 {
              font-size: 1.5rem !important;
              line-height: 1.3 !important;
              margin-bottom: 1rem !important;
            }
            .hero-section p {
              font-size: 0.875rem !important;
              line-height: 1.4 !important;
              margin-bottom: 1.5rem !important;
            }
            .hero-section .flex {
              flex-direction: column !important;
              gap: 0.75rem !important;
            }
            .hero-section a {
              font-size: 0.875rem !important;
              padding: 0.75rem 1.5rem !important;
              width: 100%;
            }
            .hero-section .grid {
              margin-top: 2rem !important;
              gap: 1rem !important;
            }
            .hero-section .grid > div {
              padding: 1rem !important;
            }
            .hero-section .grid i {
              font-size: 2rem !important;
              margin-bottom: 0.5rem !important;
            }
            .hero-section .grid h3 {
              font-size: 1rem !important;
              margin-bottom: 0.5rem !important;
            }
            .hero-section .grid p {
              font-size: 0.75rem !important;
            }
            section h2 {
              font-size: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
            section h3 {
              font-size: 1rem !important;
            }
            section p {
              font-size: 0.875rem !important;
            }
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div class="flex justify-between h-16 sm:h-14 md:h-16">
                    <div class="flex items-center">
                        <i class="fas fa-brain text-blue-600 text-xl sm:text-lg md:text-2xl mr-1 sm:mr-2"></i>
                        <span class="text-lg sm:text-base md:text-xl font-bold text-gray-800">HairSim AI</span>
                    </div>
                    <div class="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
                        <a href="/" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600" data-i18n="nav.home">홈</a>
                        <a href="/diagnosis" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600" data-i18n="nav.diagnosis">진단</a>
                        <a href="/simulation" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 hidden sm:inline" data-i18n="nav.simulation">시뮬</a>
                        <a href="/hospitals" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600" data-i18n="nav.hospitals">병원</a>
                        <a href="/reviews" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 hidden sm:inline" data-i18n="nav.reviews">후기</a>
                        
                        <!-- Language Selector -->
                        <div class="relative">
                            <button id="langBtn" class="flex items-center space-x-1 text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 focus:outline-none">
                                <i class="fas fa-globe"></i>
                                <span class="current-lang">🇰🇷 한국어</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langMenu" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <a href="#" data-lang="ko" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-lg">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇰🇷 한국어
                                </a>
                                <a href="#" data-lang="en" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇺🇸 English
                                </a>
                                <a href="#" data-lang="zh" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇨🇳 简体中文
                                </a>
                                <a href="#" data-lang="ja" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇯🇵 日本語
                                </a>
                                <a href="#" data-lang="th" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇹🇭 ไทย
                                </a>
                                <a href="#" data-lang="vi" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇻🇳 Tiếng Việt
                                </a>
                                <a href="#" data-lang="es" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇪🇸 Español
                                </a>
                                <a href="#" data-lang="de" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-lg">
                                    <i class="fas fa-check text-blue-600 mr-2"></i>🇩🇪 Deutsch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-section text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div class="text-center">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                        내 얼굴로 미리 보는<br/>
                        <span class="text-yellow-300">탈모 수술 결과</span>
                    </h1>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-blue-100 leading-relaxed">
                        AI 기반 가상 시뮬레이션으로<br class="sm:hidden"/> 수술 전 결과를 확인하세요<br/>
                        <span class="text-xs sm:text-sm md:text-base">사진 분석 → 맞춤 진단 → 결과 예측 → 병원 매칭</span>
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
                        <a href="/diagnosis" class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg shadow-lg transform transition hover:scale-105">
                            <i class="fas fa-camera mr-2"></i>
                            무료 AI 진단
                        </a>
                        <a href="/simulation" class="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg shadow-lg transform transition hover:scale-105">
                            <i class="fas fa-magic mr-2"></i>
                            시뮬레이션
                        </a>
                    </div>
                </div>

                <!-- Feature Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
                    <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                        <i class="fas fa-brain text-yellow-300 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4"></i>
                        <h3 class="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">AI 정밀 분석</h3>
                        <p class="text-xs sm:text-sm md:text-base text-blue-100">탈모 유형, 진행도, 필요 모낭 수 자동 계산</p>
                    </div>
                    <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                        <i class="fas fa-eye text-yellow-300 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4"></i>
                        <h3 class="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">실제 결과 예측</h3>
                        <p class="text-xs sm:text-sm md:text-base text-blue-100">내 얼굴 사진으로 수술 후 모습 미리보기</p>
                    </div>
                    <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                        <i class="fas fa-hospital text-yellow-300 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4"></i>
                        <h3 class="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">신뢰 병원 매칭</h3>
                        <p class="text-xs sm:text-sm md:text-base text-blue-100">실력 검증된 병원 비교 및 상담 연결</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">
                    <i class="fas fa-route text-blue-600 mr-2"></i>
                    이용 방법
                </h2>
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl font-bold text-blue-600">1</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">사진 업로드</h3>
                        <p class="text-gray-600">정면, 측면, 정수리 사진을 업로드합니다</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl font-bold text-blue-600">2</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">AI 분석</h3>
                        <p class="text-gray-600">탈모 유형과 진행도를 정밀 분석합니다</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl font-bold text-blue-600">3</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">결과 시뮬레이션</h3>
                        <p class="text-gray-600">수술/시술 후 예상 모습을 확인합니다</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl font-bold text-blue-600">4</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">병원 선택</h3>
                        <p class="text-gray-600">적합한 병원과 상담을 진행합니다</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Simulation Types -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">
                    <i class="fas fa-layer-group text-blue-600 mr-2"></i>
                    시뮬레이션 종류
                </h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                        <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                            <i class="fas fa-cut text-3xl mb-2"></i>
                            <h3 class="text-2xl font-bold">모발이식 수술</h3>
                        </div>
                        <div class="p-6">
                            <ul class="space-y-2 text-gray-600">
                                <li><i class="fas fa-check text-green-500 mr-2"></i>1,500 ~ 4,000모 옵션</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>절개 / 비절개 비교</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>헤어라인 디자인 3안</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>6개월/12개월 후 예측</li>
                            </ul>
                            <div class="mt-6 text-center">
                                <a href="/simulation?type=surgery" class="text-blue-600 font-bold hover:underline">
                                    자세히 보기 →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                        <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                            <i class="fas fa-syringe text-3xl mb-2"></i>
                            <h3 class="text-2xl font-bold">비수술 시술</h3>
                        </div>
                        <div class="p-6">
                            <ul class="space-y-2 text-gray-600">
                                <li><i class="fas fa-check text-green-500 mr-2"></i>PRP 주사</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>줄기세포 치료</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>메조테라피</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>밀도 증가 시각화</li>
                            </ul>
                            <div class="mt-6 text-center">
                                <a href="/simulation?type=treatment" class="text-purple-600 font-bold hover:underline">
                                    자세히 보기 →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                        <div class="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                            <i class="fas fa-pills text-3xl mb-2"></i>
                            <h3 class="text-2xl font-bold">약물 치료</h3>
                        </div>
                        <div class="p-6">
                            <ul class="space-y-2 text-gray-600">
                                <li><i class="fas fa-check text-green-500 mr-2"></i>피나스테리드</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>두타스테리드</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>미녹시딜</li>
                                <li><i class="fas fa-check text-green-500 mr-2"></i>1년/2년 유지 예측</li>
                            </ul>
                            <div class="mt-6 text-center">
                                <a href="/simulation?type=medication" class="text-green-600 font-bold hover:underline">
                                    자세히 보기 →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats -->
        <section class="py-20 gradient-bg text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div class="text-5xl font-bold mb-2">15,000+</div>
                        <div class="text-blue-100">시뮬레이션 생성</div>
                    </div>
                    <div>
                        <div class="text-5xl font-bold mb-2">3,200+</div>
                        <div class="text-blue-100">수술 성공 사례</div>
                    </div>
                    <div>
                        <div class="text-5xl font-bold mb-2">150+</div>
                        <div class="text-blue-100">파트너 병원</div>
                    </div>
                    <div>
                        <div class="text-5xl font-bold mb-2">96%</div>
                        <div class="text-blue-100">만족도</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold text-gray-800 mb-6">
                    지금 바로 시작하세요
                </h2>
                <p class="text-xl text-gray-600 mb-8">
                    무료 AI 진단으로 나에게 맞는 탈모 솔루션을 찾아보세요
                </p>
                <a href="/diagnosis" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
                    <i class="fas fa-arrow-right mr-2"></i>
                    무료 진단 시작하기
                </a>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center mb-4">
                            <i class="fas fa-brain text-2xl mr-2"></i>
                            <span class="text-xl font-bold">HairSim AI</span>
                        </div>
                        <p class="text-gray-400">
                            AI 기반 탈모 수술<br/>시뮬레이션 플랫폼
                        </p>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">서비스</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="/diagnosis">AI 진단</a></li>
                            <li><a href="/simulation">시뮬레이션</a></li>
                            <li><a href="/hospitals">병원 찾기</a></li>
                            <li><a href="/reviews">후기</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">정보</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#">탈모 가이드</a></li>
                            <li><a href="#">비용 안내</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">고객센터</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">회사</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#">회사 소개</a></li>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인정보처리방침</a></li>
                            <li><a href="#">파트너 신청</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 HairSim AI. All rights reserved.</p>
                    <p class="text-sm mt-2">본 플랫폼의 시뮬레이션 결과는 예측 결과이며 실제 수술 결과를 보장하지 않습니다.</p>
                </div>
            </div>
        </footer>
        
        <script>
        // Language Switcher
        document.addEventListener('DOMContentLoaded', function() {
            const langBtn = document.getElementById('langBtn');
            const langMenu = document.getElementById('langMenu');
            const currentLang = document.getElementById('currentLang');
            const langOptions = document.querySelectorAll('.lang-option');
            
            // Load saved language
            const savedLang = localStorage.getItem('language') || 'ko';
            setLanguage(savedLang);
            
            // Toggle dropdown
            if (langBtn && langMenu) {
                langBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    langMenu.classList.toggle('hidden');
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', function(e) {
                    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
                        langMenu.classList.add('hidden');
                    }
                });
            }
            
            // Language selection
            langOptions.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    const lang = this.dataset.lang;
                    setLanguage(lang);
                    localStorage.setItem('language', lang);
                    langMenu.classList.add('hidden');
                });
            });
            
            function setLanguage(lang) {
                // Update current language display
                const langMap = {
                    'ko': 'KO',
                    'en': 'EN',
                    'zh': 'CN',
                    'ja': 'JP'
                };
                if (currentLang) {
                    currentLang.textContent = langMap[lang] || 'KO';
                }
                
                // Update checkmarks
                langOptions.forEach(opt => {
                    const check = opt.querySelector('.fa-check');
                    if (check) {
                        if (opt.dataset.lang === lang) {
                            check.style.display = 'inline';
                        } else {
                            check.style.display = 'none';
                        }
                    }
                });
                
                // TODO: Implement actual translation logic here
                // For now, just store the preference
            }
        });
        </script>
    </body>
    </html>
  `)
})

app.get('/diagnosis', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI 탈모 진단 - HairSim AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div class="flex justify-between h-16 sm:h-14 md:h-16">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <i class="fas fa-brain text-blue-600 text-xl sm:text-lg md:text-2xl mr-1 sm:mr-2"></i>
                            <span class="text-lg sm:text-base md:text-xl font-bold text-gray-800">HairSim AI</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
                        <a href="/" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600">홈</a>
                        <a href="/diagnosis" class="text-xs sm:text-sm md:text-base text-blue-600 font-bold">진단</a>
                        <a href="/simulation" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 hidden sm:inline">시뮬</a>
                        <a href="/hospitals" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600">병원</a>
                        <a href="/reviews" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 hidden sm:inline">후기</a>
                        
                        <!-- Language Selector -->
                        <div class="relative">
                            <button id="langBtn" class="flex items-center space-x-1 text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 focus:outline-none">
                                <i class="fas fa-globe"></i>
                                <span id="currentLang">KO</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langMenu" class="hidden absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <a href="#" data-lang="ko" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>한국어
                                </a>
                                <a href="#" data-lang="en" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>English
                                </a>
                                <a href="#" data-lang="zh" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>中文
                                </a>
                                <a href="#" data-lang="ja" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>日本語
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-brain text-blue-600 mr-2"></i>
                    AI 탈모 진단
                </h1>
                <p class="text-xl text-gray-600">
                    사진을 업로드하면 AI가 탈모 상태를 정밀 분석합니다
                </p>
            </div>

            <!-- Upload Section -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-2xl font-bold mb-6">
                    <i class="fas fa-camera text-blue-600 mr-2"></i>
                    사진 업로드
                </h2>
                <p class="text-gray-600 mb-6">
                    정확한 분석을 위해 다음 각도의 사진을 업로드해주세요
                </p>

                <div class="grid md:grid-cols-3 gap-6" id="uploadArea">
                    <!-- Front Photo -->
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer">
                        <input type="file" id="frontPhoto" accept="image/*" class="hidden">
                        <label for="frontPhoto" class="cursor-pointer">
                            <i class="fas fa-user text-4xl text-gray-400 mb-2"></i>
                            <p class="font-bold text-gray-700">정면</p>
                            <p class="text-sm text-gray-500">이마가 잘 보이게</p>
                            <div id="frontPreview" class="mt-4 hidden">
                                <img class="w-full h-48 object-cover rounded-lg">
                            </div>
                        </label>
                    </div>

                    <!-- Side Photo -->
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer">
                        <input type="file" id="sidePhoto" accept="image/*" class="hidden">
                        <label for="sidePhoto" class="cursor-pointer">
                            <i class="fas fa-user text-4xl text-gray-400 mb-2"></i>
                            <p class="font-bold text-gray-700">측면</p>
                            <p class="text-sm text-gray-500">옆모습</p>
                            <div id="sidePreview" class="mt-4 hidden">
                                <img class="w-full h-48 object-cover rounded-lg">
                            </div>
                        </label>
                    </div>

                    <!-- Top Photo -->
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer">
                        <input type="file" id="topPhoto" accept="image/*" class="hidden">
                        <label for="topPhoto" class="cursor-pointer">
                            <i class="fas fa-user text-4xl text-gray-400 mb-2"></i>
                            <p class="font-bold text-gray-700">정수리</p>
                            <p class="text-sm text-gray-500">위에서 촬영</p>
                            <div id="topPreview" class="mt-4 hidden">
                                <img class="w-full h-48 object-cover rounded-lg">
                            </div>
                        </label>
                    </div>
                </div>

                <div class="mt-8 text-center">
                    <button id="analyzeBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                        <i class="fas fa-brain mr-2"></i>
                        AI 분석 시작
                    </button>
                </div>
            </div>

            <!-- Results Section (Hidden by default) -->
            <div id="resultsSection" class="hidden">
                <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 class="text-2xl font-bold mb-6">
                        <i class="fas fa-chart-line text-green-600 mr-2"></i>
                        진단 결과
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Left: Analysis Results -->
                        <div>
                            <div class="space-y-6">
                                <div class="border-l-4 border-blue-500 pl-4">
                                    <h3 class="font-bold text-gray-700 mb-1">탈모 유형</h3>
                                    <p class="text-2xl font-bold text-blue-600" id="hairLossType">M자형</p>
                                </div>
                                <div class="border-l-4 border-purple-500 pl-4">
                                    <h3 class="font-bold text-gray-700 mb-1">진행 단계</h3>
                                    <p class="text-2xl font-bold text-purple-600" id="stage">Norwood 3단계</p>
                                </div>
                                <div class="border-l-4 border-green-500 pl-4">
                                    <h3 class="font-bold text-gray-700 mb-1">모발 밀도</h3>
                                    <p class="text-2xl font-bold text-green-600" id="density">65점 / 100점</p>
                                    <div class="w-full bg-gray-200 rounded-full h-3 mt-2">
                                        <div class="bg-green-500 h-3 rounded-full" style="width: 65%"></div>
                                    </div>
                                </div>
                                <div class="border-l-4 border-red-500 pl-4">
                                    <h3 class="font-bold text-gray-700 mb-1">예상 필요 모낭</h3>
                                    <p class="text-2xl font-bold text-red-600" id="folliclesNeeded">약 2,500모</p>
                                </div>
                            </div>
                        </div>

                        <!-- Right: Recommendation -->
                        <div>
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h3 class="font-bold text-xl mb-4 text-blue-800">
                                    <i class="fas fa-lightbulb mr-2"></i>
                                    권장 치료
                                </h3>
                                <div class="space-y-3">
                                    <div class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <div>
                                            <p class="font-bold">모발이식 수술</p>
                                            <p class="text-sm text-gray-600">비절개 방식 권장</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <div>
                                            <p class="font-bold">약물 치료 병행</p>
                                            <p class="text-sm text-gray-600">피나스테리드 복용</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                                        <div>
                                            <p class="font-bold">예상 비용</p>
                                            <p class="text-sm text-gray-600">500만원 ~ 700만원</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 space-y-3">
                                <a href="/simulation" class="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center">
                                    <i class="fas fa-magic mr-2"></i>
                                    수술 결과 시뮬레이션 보기
                                </a>
                                <a href="/hospitals" class="block w-full bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold py-3 px-6 rounded-lg text-center">
                                    <i class="fas fa-hospital mr-2"></i>
                                    적합한 병원 찾기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Progress Prediction -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold mb-6">
                        <i class="fas fa-chart-area text-orange-600 mr-2"></i>
                        향후 진행 예측
                    </h2>
                    <div class="text-center py-12 text-gray-500">
                        <i class="fas fa-chart-line text-6xl mb-4"></i>
                        <p>치료하지 않을 경우 1년, 3년, 5년 후 예상 그래프</p>
                        <p class="text-sm mt-2">(차트 라이브러리 연동 시 표시)</p>
                    </div>
                </div>
            </div>
        </div>

        <script>
          // Image preview handlers
          ['front', 'side', 'top'].forEach(type => {
            const input = document.getElementById(type + 'Photo');
            const preview = document.getElementById(type + 'Preview');
            
            input.addEventListener('change', (e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  preview.classList.remove('hidden');
                  preview.querySelector('img').src = e.target.result;
                };
                reader.readAsDataURL(file);
              }
            });
          });

          // Analyze button
          document.getElementById('analyzeBtn').addEventListener('click', async () => {
            const btn = document.getElementById('analyzeBtn');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>분석 중...';

            // Simulate API call
            setTimeout(() => {
              document.getElementById('resultsSection').classList.remove('hidden');
              document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
              btn.disabled = false;
              btn.innerHTML = '<i class="fas fa-brain mr-2"></i>AI 분석 시작';
            }, 2000);
          });
        </script>
    </body>
    </html>
  `)
})

app.get('/simulation', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>가상 시뮬레이션 - HairSim AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          .slider-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            overflow: hidden;
          }
          .slider-images {
            position: relative;
            height: 400px;
          }
          .slider-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .slider-after {
            clip-path: inset(0 0 0 50%);
          }
          .slider-handle {
            position: absolute;
            top: 0;
            left: 50%;
            width: 4px;
            height: 100%;
            background: white;
            cursor: ew-resize;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
          .slider-handle-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <i class="fas fa-brain text-blue-600 text-2xl mr-2"></i>
                            <span class="text-xl font-bold text-gray-800">HairSim AI</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-8">
                        <a href="/" class="text-gray-700 hover:text-blue-600">홈</a>
                        <a href="/diagnosis" class="text-gray-700 hover:text-blue-600">AI 진단</a>
                        <a href="/simulation" class="text-blue-600 font-bold">시뮬레이션</a>
                        <a href="/hospitals" class="text-gray-700 hover:text-blue-600">병원 매칭</a>
                        <a href="/reviews" class="text-gray-700 hover:text-blue-600">후기</a>
                        
                        <!-- Language Selector -->
                        <div class="relative">
                            <button id="langBtn" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 focus:outline-none">
                                <i class="fas fa-globe"></i>
                                <span id="currentLang">KO</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langMenu" class="hidden absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <a href="#" data-lang="ko" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>한국어
                                </a>
                                <a href="#" data-lang="en" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>English
                                </a>
                                <a href="#" data-lang="zh" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>中文
                                </a>
                                <a href="#" data-lang="ja" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>日本語
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-magic text-blue-600 mr-2"></i>
                    가상 시뮬레이션
                </h1>
                <p class="text-xl text-gray-600">
                    수술·시술 후 예상 결과를 실제 내 얼굴로 확인하세요
                </p>
            </div>

            <!-- Simulation Options -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-2xl font-bold mb-6">
                    <i class="fas fa-sliders-h text-blue-600 mr-2"></i>
                    시뮬레이션 옵션 선택
                </h2>

                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                        <label class="block font-bold text-gray-700 mb-2">시술 종류</label>
                        <select class="w-full border border-gray-300 rounded-lg p-3">
                            <option>모발이식 (비절개)</option>
                            <option>모발이식 (절개)</option>
                            <option>PRP 주사</option>
                            <option>줄기세포 치료</option>
                            <option>메조테라피</option>
                            <option>약물 치료</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-bold text-gray-700 mb-2">이식 모낭 수</label>
                        <select class="w-full border border-gray-300 rounded-lg p-3">
                            <option>1,500모</option>
                            <option>2,000모</option>
                            <option selected>2,500모</option>
                            <option>3,000모</option>
                            <option>4,000모</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-bold text-gray-700 mb-2">예측 기간</label>
                        <select class="w-full border border-gray-300 rounded-lg p-3">
                            <option>6개월 후</option>
                            <option selected>12개월 후</option>
                            <option>24개월 후</option>
                        </select>
                    </div>
                </div>

                <div class="text-center">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg transform transition hover:scale-105">
                        <i class="fas fa-magic mr-2"></i>
                        시뮬레이션 생성
                    </button>
                </div>
            </div>

            <!-- Before/After Comparison -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-2xl font-bold mb-6">
                    <i class="fas fa-exchange-alt text-green-600 mr-2"></i>
                    Before / After 비교
                </h2>

                <div class="mb-6 flex justify-center space-x-4">
                    <button class="bg-blue-100 text-blue-600 font-bold py-2 px-6 rounded-lg">
                        <i class="fas fa-user mr-2"></i>정면
                    </button>
                    <button class="bg-gray-100 text-gray-600 font-bold py-2 px-6 rounded-lg">
                        <i class="fas fa-user mr-2"></i>측면
                    </button>
                    <button class="bg-gray-100 text-gray-600 font-bold py-2 px-6 rounded-lg">
                        <i class="fas fa-user mr-2"></i>정수리
                    </button>
                </div>

                <!-- Image Slider -->
                <div class="slider-container bg-gray-100 rounded-lg">
                    <div class="slider-images">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center">
                                <i class="fas fa-image text-6xl text-gray-300 mb-4"></i>
                                <p class="text-gray-500">시뮬레이션 이미지가 여기에 표시됩니다</p>
                                <p class="text-sm text-gray-400 mt-2">슬라이더를 좌우로 움직여 Before/After를 비교하세요</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4 mt-6">
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-1">BEFORE</p>
                        <p class="font-bold text-gray-700">현재 상태</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-1">AFTER</p>
                        <p class="font-bold text-green-600">12개월 후 예상</p>
                    </div>
                </div>
            </div>

            <!-- Simulation Details -->
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Expected Results -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold mb-6">
                        <i class="fas fa-clipboard-list text-purple-600 mr-2"></i>
                        예상 결과
                    </h2>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center border-b pb-3">
                            <span class="text-gray-700">이식 모낭 수</span>
                            <span class="font-bold text-blue-600">2,500모</span>
                        </div>
                        <div class="flex justify-between items-center border-b pb-3">
                            <span class="text-gray-700">생착률</span>
                            <span class="font-bold text-green-600">92%</span>
                        </div>
                        <div class="flex justify-between items-center border-b pb-3">
                            <span class="text-gray-700">회복 기간</span>
                            <span class="font-bold">6개월</span>
                        </div>
                        <div class="flex justify-between items-center border-b pb-3">
                            <span class="text-gray-700">수술 시간</span>
                            <span class="font-bold">6~8시간</span>
                        </div>
                        <div class="flex justify-between items-center border-b pb-3">
                            <span class="text-gray-700">예상 비용</span>
                            <span class="font-bold text-red-600">500~700만원</span>
                        </div>
                    </div>
                </div>

                <!-- Risk Analysis -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold mb-6">
                        <i class="fas fa-exclamation-triangle text-orange-600 mr-2"></i>
                        리스크 분석
                    </h2>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">생착 실패 가능성</span>
                                <span class="font-bold text-green-600">낮음 (8%)</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 8%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">흉터 가능성</span>
                                <span class="font-bold text-green-600">낮음 (5%)</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 5%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">재수술 필요성</span>
                                <span class="font-bold text-yellow-600">보통 (15%)</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-yellow-500 h-2 rounded-full" style="width: 15%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p class="text-sm text-orange-800">
                            <i class="fas fa-info-circle mr-2"></i>
                            본 시뮬레이션은 AI 예측 결과이며, 실제 수술 결과는 개인의 두피 상태, 집도의 기술, 
                            사후 관리 등에 따라 달라질 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-8 text-center space-x-4">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg">
                    <i class="fas fa-download mr-2"></i>
                    결과 PDF 저장
                </button>
                <a href="/hospitals" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg">
                    <i class="fas fa-hospital mr-2"></i>
                    적합한 병원 찾기
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

app.get('/hospitals', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>병원 매칭 - HairSim AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <i class="fas fa-brain text-blue-600 text-2xl mr-2"></i>
                            <span class="text-xl font-bold text-gray-800">HairSim AI</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-8">
                        <a href="/" class="text-gray-700 hover:text-blue-600">홈</a>
                        <a href="/diagnosis" class="text-gray-700 hover:text-blue-600">AI 진단</a>
                        <a href="/simulation" class="text-gray-700 hover:text-blue-600">시뮬레이션</a>
                        <a href="/hospitals" class="text-blue-600 font-bold">병원 매칭</a>
                        <a href="/reviews" class="text-gray-700 hover:text-blue-600">후기</a>
                        
                        <!-- Language Selector -->
                        <div class="relative">
                            <button id="langBtn" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 focus:outline-none">
                                <i class="fas fa-globe"></i>
                                <span id="currentLang">KO</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langMenu" class="hidden absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <a href="#" data-lang="ko" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>한국어
                                </a>
                                <a href="#" data-lang="en" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>English
                                </a>
                                <a href="#" data-lang="zh" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>中文
                                </a>
                                <a href="#" data-lang="ja" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>日本語
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-hospital text-blue-600 mr-2"></i>
                    병원 매칭
                </h1>
                <p class="text-xl text-gray-600">
                    나에게 맞는 최적의 병원을 찾아보세요
                </p>
            </div>

            <!-- Filters -->
            <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div class="grid md:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">지역</label>
                        <select class="w-full border border-gray-300 rounded-lg p-2">
                            <option>전체</option>
                            <option>서울 강남구</option>
                            <option>서울 서초구</option>
                            <option>서울 용산구</option>
                            <option>경기 분당</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">수술 방식</label>
                        <select class="w-full border border-gray-300 rounded-lg p-2">
                            <option>전체</option>
                            <option>비절개 (FUE)</option>
                            <option>절개 (FUT)</option>
                            <option>로봇 수술</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">가격대</label>
                        <select class="w-full border border-gray-300 rounded-lg p-2">
                            <option>전체</option>
                            <option>300만원 이하</option>
                            <option>300~500만원</option>
                            <option>500~700만원</option>
                            <option>700만원 이상</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">정렬</label>
                        <select class="w-full border border-gray-300 rounded-lg p-2">
                            <option>추천순</option>
                            <option>평점 높은순</option>
                            <option>수술 건수 많은순</option>
                            <option>가격 낮은순</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Hospital List -->
            <div id="hospitalList" class="space-y-6">
                <!-- Hospital Card 1 -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <div class="md:flex">
                        <div class="md:w-1/4 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white flex items-center justify-center">
                            <div class="text-center">
                                <i class="fas fa-hospital text-6xl mb-4"></i>
                                <div class="text-3xl font-bold mb-2">4.9</div>
                                <div class="text-sm">평점</div>
                            </div>
                        </div>
                        <div class="md:w-3/4 p-8">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-2">신사탈모클리닉</h3>
                                    <p class="text-gray-600">박○○ 원장 | 경력 18년</p>
                                </div>
                                <span class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                                    AI 매칭률 96%
                                </span>
                            </div>
                            
                            <div class="grid md:grid-cols-3 gap-4 mb-4">
                                <div class="border-l-4 border-green-500 pl-3">
                                    <p class="text-sm text-gray-600">수술 건수</p>
                                    <p class="font-bold text-lg">6,200건</p>
                                </div>
                                <div class="border-l-4 border-purple-500 pl-3">
                                    <p class="text-sm text-gray-600">생착률</p>
                                    <p class="font-bold text-lg">96%</p>
                                </div>
                                <div class="border-l-4 border-red-500 pl-3">
                                    <p class="text-sm text-gray-600">모낭 단가</p>
                                    <p class="font-bold text-lg">3,500원</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>비절개 전문
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>무이자 할부
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>재수술 보증
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-map-marker-alt mr-1"></i>서울 강남구
                                </span>
                            </div>

                            <div class="flex space-x-3">
                                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                                    <i class="fas fa-comment mr-2"></i>상담 신청
                                </button>
                                <button class="flex-1 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold py-3 rounded-lg">
                                    <i class="fas fa-info-circle mr-2"></i>상세 정보
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hospital Card 2 -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <div class="md:flex">
                        <div class="md:w-1/4 bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white flex items-center justify-center">
                            <div class="text-center">
                                <i class="fas fa-hospital text-6xl mb-4"></i>
                                <div class="text-3xl font-bold mb-2">4.8</div>
                                <div class="text-sm">평점</div>
                            </div>
                        </div>
                        <div class="md:w-3/4 p-8">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-2">강남헤어클리닉</h3>
                                    <p class="text-gray-600">김○○ 원장 | 경력 15년</p>
                                </div>
                                <span class="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                                    AI 매칭률 94%
                                </span>
                            </div>
                            
                            <div class="grid md:grid-cols-3 gap-4 mb-4">
                                <div class="border-l-4 border-green-500 pl-3">
                                    <p class="text-sm text-gray-600">수술 건수</p>
                                    <p class="font-bold text-lg">5,000건</p>
                                </div>
                                <div class="border-l-4 border-purple-500 pl-3">
                                    <p class="text-sm text-gray-600">생착률</p>
                                    <p class="font-bold text-lg">95%</p>
                                </div>
                                <div class="border-l-4 border-red-500 pl-3">
                                    <p class="text-sm text-gray-600">모낭 단가</p>
                                    <p class="font-bold text-lg">3,000원</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>절개/비절개
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>로봇 수술
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>PRP 병행
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-map-marker-alt mr-1"></i>서울 강남구
                                </span>
                            </div>

                            <div class="flex space-x-3">
                                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                                    <i class="fas fa-comment mr-2"></i>상담 신청
                                </button>
                                <button class="flex-1 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold py-3 rounded-lg">
                                    <i class="fas fa-info-circle mr-2"></i>상세 정보
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hospital Card 3 -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <div class="md:flex">
                        <div class="md:w-1/4 bg-gradient-to-br from-green-500 to-green-600 p-8 text-white flex items-center justify-center">
                            <div class="text-center">
                                <i class="fas fa-hospital text-6xl mb-4"></i>
                                <div class="text-3xl font-bold mb-2">4.6</div>
                                <div class="text-sm">평점</div>
                            </div>
                        </div>
                        <div class="md:w-3/4 p-8">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-2">서울모발이식센터</h3>
                                    <p class="text-gray-600">이○○ 원장 | 경력 12년</p>
                                </div>
                                <span class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                                    AI 매칭률 91%
                                </span>
                            </div>
                            
                            <div class="grid md:grid-cols-3 gap-4 mb-4">
                                <div class="border-l-4 border-green-500 pl-3">
                                    <p class="text-sm text-gray-600">수술 건수</p>
                                    <p class="font-bold text-lg">3,800건</p>
                                </div>
                                <div class="border-l-4 border-purple-500 pl-3">
                                    <p class="text-sm text-gray-600">생착률</p>
                                    <p class="font-bold text-lg">93%</p>
                                </div>
                                <div class="border-l-4 border-red-500 pl-3">
                                    <p class="text-sm text-gray-600">모낭 단가</p>
                                    <p class="font-bold text-lg">2,800원</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>비절개 전문
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>가격 경쟁력
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-check mr-1"></i>사후관리 우수
                                </span>
                                <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                    <i class="fas fa-map-marker-alt mr-1"></i>서울 서초구
                                </span>
                            </div>

                            <div class="flex space-x-3">
                                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                                    <i class="fas fa-comment mr-2"></i>상담 신청
                                </button>
                                <button class="flex-1 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold py-3 rounded-lg">
                                    <i class="fas fa-info-circle mr-2"></i>상세 정보
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `)
})


app.get('/treatment-plans', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title data-i18n="treatmentPlans.title">맞춤 치료 플랜 - HairSim AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/static/i18n.js"></script>
        <style>
          .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .plan-card { transition: all 0.3s ease; }
          .plan-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
          .plan-card.recommended { border: 3px solid #667eea; position: relative; }
          .recommended-badge {
            position: absolute;
            top: -15px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 5px 20px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.875rem;
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Header/Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/" class="flex items-center space-x-2">
                        <i class="fas fa-brain text-3xl text-purple-600"></i>
                        <span class="text-xl font-bold text-gray-800">HairSim AI</span>
                    </a>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="/" class="text-gray-700 hover:text-purple-600 transition" data-i18n="nav.home">홈</a>
                        <a href="/diagnosis" class="text-gray-700 hover:text-purple-600 transition" data-i18n="nav.diagnosis">AI 진단</a>
                        <a href="/simulation" class="text-gray-700 hover:text-purple-600 transition" data-i18n="nav.simulation">가상 시뮬레이션</a>
                        <a href="/treatment-plans" class="text-purple-600 font-semibold" data-i18n="nav.treatmentPlans">맞춤 치료</a>
                        <a href="/hospitals" class="text-gray-700 hover:text-purple-600 transition" data-i18n="nav.hospitals">병원 찾기</a>
                        <a href="/reviews" class="text-gray-700 hover:text-purple-600 transition" data-i18n="nav.reviews">후기</a>
                    </div>

                    <!-- Language Selector -->
                    <div class="relative language-selector">
                        <button class="lang-button flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                            <i class="fas fa-globe"></i>
                            <span class="current-lang">🇰🇷 한국어</span>
                            <i class="fas fa-chevron-down text-sm"></i>
                        </button>
                        <div class="lang-dropdown hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                            <a href="#" data-lang="ko" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 rounded-t-lg"><i class="fas fa-check text-purple-600 mr-2"></i>🇰🇷 한국어</a>
                            <a href="#" data-lang="en" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇺🇸 English</a>
                            <a href="#" data-lang="zh" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇨🇳 简体中文</a>
                            <a href="#" data-lang="ja" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇯🇵 日本語</a>
                            <a href="#" data-lang="th" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇹🇭 ไทย</a>
                            <a href="#" data-lang="vi" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇻🇳 Tiếng Việt</a>
                            <a href="#" data-lang="es" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇪🇸 Español</a>
                            <a href="#" data-lang="de" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 rounded-b-lg"><i class="fas fa-check text-purple-600 mr-2 invisible"></i>🇩🇪 Deutsch</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="gradient-bg text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="treatmentPlans.hero.title">
                    당신을 위한 맞춤 치료 플랜
                </h1>
                <p class="text-xl md:text-2xl opacity-90" data-i18n="treatmentPlans.hero.subtitle">
                    AI 분석 기반 최적의 치료 경로를 찾아드립니다
                </p>
            </div>
        </div>

        <!-- AI Analysis Results -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <i class="fas fa-chart-line text-purple-600 mr-3"></i>
                    <span data-i18n="treatmentPlans.analysis.title">AI 진단 결과</span>
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="text-center p-6 bg-purple-50 rounded-xl">
                        <div class="text-4xl font-bold text-purple-600 mb-2">3단계</div>
                        <div class="text-gray-600" data-i18n="treatmentPlans.analysis.stage">탈모 진행 단계</div>
                        <div class="mt-2 text-sm text-gray-500">Norwood Scale</div>
                    </div>
                    <div class="text-center p-6 bg-blue-50 rounded-xl">
                        <div class="text-4xl font-bold text-blue-600 mb-2">65%</div>
                        <div class="text-gray-600" data-i18n="treatmentPlans.analysis.density">모낭 밀도</div>
                        <div class="mt-2 text-sm text-gray-500">Normal: 80-100%</div>
                    </div>
                    <div class="text-center p-6 bg-green-50 rounded-xl">
                        <div class="text-4xl font-bold text-green-600 mb-2">92%</div>
                        <div class="text-gray-600" data-i18n="treatmentPlans.analysis.confidence">AI 신뢰도</div>
                        <div class="mt-2 text-sm text-gray-500">High Accuracy</div>
                    </div>
                    <div class="text-center p-6 bg-orange-50 rounded-xl">
                        <div class="text-4xl font-bold text-orange-600 mb-2">2,500</div>
                        <div class="text-gray-600" data-i18n="treatmentPlans.analysis.follicles">필요 모낭수</div>
                        <div class="mt-2 text-sm text-gray-500">Estimated</div>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="mb-6">
                    <div class="flex justify-between mb-2">
                        <span class="text-sm font-medium text-gray-700" data-i18n="treatmentPlans.analysis.progressLabel">탈모 진행도</span>
                        <span class="text-sm font-medium text-purple-600">3/7 단계</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-4">
                        <div class="bg-gradient-to-r from-purple-500 to-purple-700 h-4 rounded-full" style="width: 43%"></div>
                    </div>
                </div>

                <!-- Risk Assessment -->
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div class="flex items-center">
                        <i class="fas fa-exclamation-triangle text-yellow-600 mr-3"></i>
                        <div>
                            <p class="font-semibold text-gray-800" data-i18n="treatmentPlans.analysis.riskTitle">진행 위험도: 중등도</p>
                            <p class="text-sm text-gray-600" data-i18n="treatmentPlans.analysis.riskDesc">6-12개월 내 적극적인 치료가 권장됩니다</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Treatment Plans Comparison -->
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
                <span data-i18n="treatmentPlans.comparison.title">치료 플랜 비교</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <!-- 3 Month Plan -->
                <div class="plan-card bg-white rounded-2xl shadow-lg p-8">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="treatmentPlans.plans.short.title">단기 플랜</h3>
                        <div class="text-4xl font-bold text-purple-600 mb-2">3개월</div>
                        <p class="text-gray-600" data-i18n="treatmentPlans.plans.short.subtitle">빠른 개선</p>
                    </div>

                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600" data-i18n="treatmentPlans.plans.cost">예상 비용</span>
                            <span class="font-bold text-gray-800">₩2,000,000</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600" data-i18n="treatmentPlans.plans.effectiveness">효과</span>
                            <span class="font-bold text-gray-800">65%</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600">BCR Score</span>
                            <span class="font-bold text-purple-600">2.1</span>
                        </div>
                    </div>

                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-3" data-i18n="treatmentPlans.plans.treatments">포함 치료</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.short.treatment1">약물치료 (피나스테리드)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.short.treatment2">메조테라피 (6회)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.short.treatment3">PRP 치료 (3회)</span>
                            </li>
                        </ul>
                    </div>

                    <button class="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-6 rounded-lg transition">
                        <span data-i18n="treatmentPlans.plans.selectBtn">선택하기</span>
                    </button>
                </div>

                <!-- 6 Month Plan -->
                <div class="plan-card bg-white rounded-2xl shadow-lg p-8">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="treatmentPlans.plans.medium.title">중기 플랜</h3>
                        <div class="text-4xl font-bold text-blue-600 mb-2">6개월</div>
                        <p class="text-gray-600" data-i18n="treatmentPlans.plans.medium.subtitle">균형잡힌 치료</p>
                    </div>

                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600" data-i18n="treatmentPlans.plans.cost">예상 비용</span>
                            <span class="font-bold text-gray-800">₩4,000,000</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600" data-i18n="treatmentPlans.plans.effectiveness">효과</span>
                            <span class="font-bold text-gray-800">78%</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600">BCR Score</span>
                            <span class="font-bold text-blue-600">2.8</span>
                        </div>
                    </div>

                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-3" data-i18n="treatmentPlans.plans.treatments">포함 치료</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.medium.treatment1">약물치료 (복합)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.medium.treatment2">메조테라피 (12회)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.medium.treatment3">PRP 치료 (6회)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.medium.treatment4">저출력 레이저 (24회)</span>
                            </li>
                        </ul>
                    </div>

                    <button class="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-6 rounded-lg transition">
                        <span data-i18n="treatmentPlans.plans.selectBtn">선택하기</span>
                    </button>
                </div>

                <!-- 12 Month Plan (Recommended) -->
                <div class="plan-card recommended bg-white rounded-2xl shadow-lg p-8">
                    <div class="recommended-badge">
                        <i class="fas fa-star mr-1"></i>
                        <span data-i18n="treatmentPlans.plans.recommended">추천</span>
                    </div>
                    
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="treatmentPlans.plans.long.title">장기 플랜</h3>
                        <div class="text-4xl font-bold text-green-600 mb-2">12개월</div>
                        <p class="text-gray-600" data-i18n="treatmentPlans.plans.long.subtitle">최고의 결과</p>
                    </div>

                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600" data-i18n="treatmentPlans.plans.cost">예상 비용</span>
                            <span class="font-bold text-gray-800">₩7,000,000</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600" data-i18n="treatmentPlans.plans.effectiveness">효과</span>
                            <span class="font-bold text-gray-800">92%</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="text-gray-600">BCR Score</span>
                            <span class="font-bold text-green-600">3.5</span>
                        </div>
                    </div>

                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-3" data-i18n="treatmentPlans.plans.treatments">포함 치료</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.long.treatment1">모발이식 수술</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.long.treatment2">약물치료 (12개월)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.long.treatment3">PRP 치료 (12회)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.long.treatment4">줄기세포치료 (6회)</span>
                            </li>
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-check text-green-500 mr-2"></i>
                                <span data-i18n="treatmentPlans.plans.long.treatment5">저출력 레이저 (48회)</span>
                            </li>
                        </ul>
                    </div>

                    <button class="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-lg transition">
                        <i class="fas fa-star mr-2"></i>
                        <span data-i18n="treatmentPlans.plans.selectRecommended">추천 플랜 선택</span>
                    </button>
                </div>
            </div>

            <!-- BCR Score Explanation -->
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
                <h3 class="font-bold text-gray-800 mb-2 flex items-center">
                    <i class="fas fa-info-circle text-blue-600 mr-2"></i>
                    <span data-i18n="treatmentPlans.bcr.title">BCR Score란?</span>
                </h3>
                <p class="text-gray-700" data-i18n="treatmentPlans.bcr.description">
                    Benefit-Cost Ratio(비용 대비 효과 지수)는 치료 비용 대비 기대 효과를 나타내는 지표입니다. 
                    3.0 이상이면 매우 효율적, 2.0-3.0은 양호, 2.0 미만은 보통 수준입니다.
                </p>
            </div>

            <!-- Recovery Timeline -->
            <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <i class="fas fa-calendar-alt text-purple-600 mr-3"></i>
                    <span data-i18n="treatmentPlans.timeline.title">회복 일정 시뮬레이션</span>
                </h2>
                
                <div class="relative">
                    <!-- Timeline -->
                    <div class="space-y-6">
                        <!-- Week 1 -->
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-24 text-right pr-4">
                                <span class="font-bold text-purple-600">1주차</span>
                            </div>
                            <div class="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-1"></div>
                            <div class="flex-1 ml-4 pb-8 border-l-2 border-gray-200 pl-4">
                                <h4 class="font-semibold text-gray-800 mb-1" data-i18n="treatmentPlans.timeline.week1.title">수술 직후</h4>
                                <div class="text-sm text-gray-600 mb-2">
                                    <span data-i18n="treatmentPlans.timeline.recovery">회복도:</span> 10%
                                </div>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week1.symptoms">증상: 부기, 가벼운 통증</p>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week1.activities">활동: 절대 안정</p>
                            </div>
                        </div>

                        <!-- Week 2 -->
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-24 text-right pr-4">
                                <span class="font-bold text-purple-600">2주차</span>
                            </div>
                            <div class="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                            <div class="flex-1 ml-4 pb-8 border-l-2 border-gray-200 pl-4">
                                <h4 class="font-semibold text-gray-800 mb-1" data-i18n="treatmentPlans.timeline.week2.title">초기 회복</h4>
                                <div class="text-sm text-gray-600 mb-2">
                                    <span data-i18n="treatmentPlans.timeline.recovery">회복도:</span> 25%
                                </div>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week2.symptoms">증상: 가벼운 부기</p>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week2.activities">활동: 가벼운 일상 활동</p>
                            </div>
                        </div>

                        <!-- Week 4 -->
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-24 text-right pr-4">
                                <span class="font-bold text-blue-600">4주차</span>
                            </div>
                            <div class="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                            <div class="flex-1 ml-4 pb-8 border-l-2 border-gray-200 pl-4">
                                <h4 class="font-semibold text-gray-800 mb-1" data-i18n="treatmentPlans.timeline.week4.title">중기 회복</h4>
                                <div class="text-sm text-gray-600 mb-2">
                                    <span data-i18n="treatmentPlans.timeline.recovery">회복도:</span> 50%
                                </div>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week4.symptoms">증상: 가벼운 가려움</p>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week4.activities">활동: 정상 활동 가능</p>
                            </div>
                        </div>

                        <!-- Week 8 -->
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-24 text-right pr-4">
                                <span class="font-bold text-green-600">8주차</span>
                            </div>
                            <div class="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                            <div class="flex-1 ml-4 pb-8 border-l-2 border-gray-200 pl-4">
                                <h4 class="font-semibold text-gray-800 mb-1" data-i18n="treatmentPlans.timeline.week8.title">후기 회복</h4>
                                <div class="text-sm text-gray-600 mb-2">
                                    <span data-i18n="treatmentPlans.timeline.recovery">회복도:</span> 75%
                                </div>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week8.symptoms">증상: 최소</p>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week8.activities">활동: 모든 활동 가능</p>
                            </div>
                        </div>

                        <!-- Week 12 -->
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-24 text-right pr-4">
                                <span class="font-bold text-green-600">12주차</span>
                            </div>
                            <div class="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-1"></div>
                            <div class="flex-1 ml-4 pb-8 border-l-2 border-gray-200 pl-4">
                                <h4 class="font-semibold text-gray-800 mb-1" data-i18n="treatmentPlans.timeline.week12.title">안정기</h4>
                                <div class="text-sm text-gray-600 mb-2">
                                    <span data-i18n="treatmentPlans.timeline.recovery">회복도:</span> 90%
                                </div>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week12.symptoms">증상: 없음</p>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week12.activities">활동: 완전 정상</p>
                            </div>
                        </div>

                        <!-- Week 24 -->
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-24 text-right pr-4">
                                <span class="font-bold text-green-700">24주차</span>
                            </div>
                            <div class="flex-shrink-0 w-4 h-4 bg-green-700 rounded-full mt-1"></div>
                            <div class="flex-1 ml-4 pl-4">
                                <h4 class="font-semibold text-gray-800 mb-1" data-i18n="treatmentPlans.timeline.week24.title">최종 결과</h4>
                                <div class="text-sm text-gray-600 mb-2">
                                    <span data-i18n="treatmentPlans.timeline.recovery">회복도:</span> 100%
                                </div>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week24.symptoms">증상: 없음</p>
                                <p class="text-sm text-gray-600" data-i18n="treatmentPlans.timeline.week24.activities">활동: 완전한 결과 확인</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Matched Hospitals -->
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <i class="fas fa-hospital text-purple-600 mr-3"></i>
                    <span data-i18n="treatmentPlans.hospitals.title">추천 병원</span>
                </h2>

                <div class="space-y-4">
                    <!-- Hospital 1 -->
                    <div class="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <div class="flex items-center mb-2">
                                    <h3 class="text-xl font-bold text-gray-800 mr-3">강남헤어클리닉</h3>
                                    <span class="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                                        <span data-i18n="treatmentPlans.hospitals.match">매칭도:</span> 95%
                                    </span>
                                </div>
                                <p class="text-gray-600 mb-3">김○○ 원장 | 경력 15년 | 수술 5,000건</p>
                                <div class="flex items-center space-x-4 text-sm">
                                    <span class="flex items-center text-yellow-500">
                                        <i class="fas fa-star mr-1"></i>
                                        4.8
                                    </span>
                                    <span class="text-gray-600">성공률 95%</span>
                                    <span class="text-gray-600">모당 ₩3,000</span>
                                </div>
                            </div>
                            <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition">
                                <span data-i18n="treatmentPlans.hospitals.consultBtn">상담 예약</span>
                            </button>
                        </div>
                    </div>

                    <!-- Hospital 2 -->
                    <div class="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <div class="flex items-center mb-2">
                                    <h3 class="text-xl font-bold text-gray-800 mr-3">서울모발이식센터</h3>
                                    <span class="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                                        <span data-i18n="treatmentPlans.hospitals.match">매칭도:</span> 88%
                                    </span>
                                </div>
                                <p class="text-gray-600 mb-3">이○○ 원장 | 경력 12년 | 수술 3,800건</p>
                                <div class="flex items-center space-x-4 text-sm">
                                    <span class="flex items-center text-yellow-500">
                                        <i class="fas fa-star mr-1"></i>
                                        4.6
                                    </span>
                                    <span class="text-gray-600">성공률 93%</span>
                                    <span class="text-gray-600">모당 ₩2,800</span>
                                </div>
                            </div>
                            <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition">
                                <span data-i18n="treatmentPlans.hospitals.consultBtn">상담 예약</span>
                            </button>
                        </div>
                    </div>

                    <!-- Hospital 3 -->
                    <div class="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <div class="flex items-center mb-2">
                                    <h3 class="text-xl font-bold text-gray-800 mr-3">신사탈모클리닉</h3>
                                    <span class="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                                        <span data-i18n="treatmentPlans.hospitals.match">매칭도:</span> 92%
                                    </span>
                                </div>
                                <p class="text-gray-600 mb-3">박○○ 원장 | 경력 18년 | 수술 6,200건</p>
                                <div class="flex items-center space-x-4 text-sm">
                                    <span class="flex items-center text-yellow-500">
                                        <i class="fas fa-star mr-1"></i>
                                        4.9
                                    </span>
                                    <span class="text-gray-600">성공률 96%</span>
                                    <span class="text-gray-600">모당 ₩3,500</span>
                                </div>
                            </div>
                            <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition">
                                <span data-i18n="treatmentPlans.hospitals.consultBtn">상담 예약</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-8">
                    <a href="/hospitals" class="inline-block bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 font-bold py-3 px-8 rounded-lg transition">
                        <span data-i18n="treatmentPlans.hospitals.viewAllBtn">모든 병원 보기</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="gradient-bg text-white rounded-2xl p-12 text-center mt-12">
                <h2 class="text-3xl font-bold mb-4" data-i18n="treatmentPlans.cta.title">지금 바로 시작하세요</h2>
                <p class="text-xl mb-8 opacity-90" data-i18n="treatmentPlans.cta.subtitle">AI 분석으로 당신의 최적 치료 경로를 찾아보세요</p>
                <div class="flex justify-center space-x-4">
                    <a href="/diagnosis" class="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
                        <i class="fas fa-microscope mr-2"></i>
                        <span data-i18n="treatmentPlans.cta.diagnosisBtn">AI 진단 시작</span>
                    </a>
                    <a href="/simulation" class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-lg transition">
                        <i class="fas fa-magic mr-2"></i>
                        <span data-i18n="treatmentPlans.cta.simulationBtn">시뮬레이션 보기</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-12 mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p class="text-gray-400">&copy; 2024 HairSim AI. All rights reserved.</p>
            </div>
        </footer>
    </body>
    </html>
  `)
})
app.get('/reviews', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>후기 & 데이터 - HairSim AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <i class="fas fa-brain text-blue-600 text-2xl mr-2"></i>
                            <span class="text-xl font-bold text-gray-800">HairSim AI</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-8">
                        <a href="/" class="text-gray-700 hover:text-blue-600">홈</a>
                        <a href="/diagnosis" class="text-gray-700 hover:text-blue-600">AI 진단</a>
                        <a href="/simulation" class="text-gray-700 hover:text-blue-600">시뮬레이션</a>
                        <a href="/hospitals" class="text-gray-700 hover:text-blue-600">병원 매칭</a>
                        <a href="/reviews" class="text-blue-600 font-bold">후기</a>
                        
                        <!-- Language Selector -->
                        <div class="relative">
                            <button id="langBtn" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 focus:outline-none">
                                <i class="fas fa-globe"></i>
                                <span id="currentLang">KO</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langMenu" class="hidden absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <a href="#" data-lang="ko" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>한국어
                                </a>
                                <a href="#" data-lang="en" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>English
                                </a>
                                <a href="#" data-lang="zh" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>中文
                                </a>
                                <a href="#" data-lang="ja" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-lg">
                                    <i class="fas fa-check text-blue-600 mr-2" style="display:none;"></i>日本語
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">
                    <i class="fas fa-star text-yellow-500 mr-2"></i>
                    수술 후기 & 데이터
                </h1>
                <p class="text-xl text-gray-600">
                    실제 수술 사례와 시뮬레이션 정확도를 확인하세요
                </p>
            </div>

            <!-- Stats Overview -->
            <div class="grid md:grid-cols-4 gap-6 mb-12">
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <i class="fas fa-users text-4xl text-blue-600 mb-3"></i>
                    <div class="text-3xl font-bold text-gray-800">3,200+</div>
                    <div class="text-gray-600">수술 완료</div>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <i class="fas fa-percentage text-4xl text-green-600 mb-3"></i>
                    <div class="text-3xl font-bold text-gray-800">94%</div>
                    <div class="text-gray-600">시뮬레이션 정확도</div>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <i class="fas fa-heart text-4xl text-red-600 mb-3"></i>
                    <div class="text-3xl font-bold text-gray-800">96%</div>
                    <div class="text-gray-600">만족도</div>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                    <i class="fas fa-redo text-4xl text-purple-600 mb-3"></i>
                    <div class="text-3xl font-bold text-gray-800">8%</div>
                    <div class="text-gray-600">재수술률</div>
                </div>
            </div>

            <!-- Review List -->
            <div class="space-y-6">
                <!-- Review 1 -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <div class="flex items-center mb-2">
                                <div class="text-yellow-500 mr-2">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="font-bold text-gray-800">5.0</span>
                            </div>
                            <p class="text-gray-600">김**님 | 32세 남성 | M자형 탈모</p>
                            <p class="text-sm text-gray-500">신사탈모클리닉 | 2,500모 이식 | 2023.06</p>
                        </div>
                        <span class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                            시뮬 정확도 96%
                        </span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-4 mb-4">
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-image text-4xl text-gray-400"></i>
                                <p class="text-xs text-gray-500 mt-2">수술 전</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-magic text-4xl text-blue-500"></i>
                                <p class="text-xs text-gray-500 mt-2">시뮬레이션</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-check-circle text-4xl text-green-500"></i>
                                <p class="text-xs text-gray-500 mt-2">12개월 후</p>
                            </div>
                        </div>
                    </div>

                    <p class="text-gray-700 mb-4">
                        시뮬레이션으로 미리 결과를 보고 수술을 결정했습니다. 실제 결과가 시뮬레이션과 거의 일치해서 
                        놀랐어요. 생착률도 높고 자연스럽게 잘 나왔습니다. 박 원장님께 감사드립니다.
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #비절개수술
                        </span>
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #생착률높음
                        </span>
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #시뮬정확
                        </span>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <div class="flex items-center mb-2">
                                <div class="text-yellow-500 mr-2">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <span class="font-bold text-gray-800">4.5</span>
                            </div>
                            <p class="text-gray-600">박**님 | 38세 남성 | 정수리 탈모</p>
                            <p class="text-sm text-gray-500">강남헤어클리닉 | 3,000모 이식 | 2023.08</p>
                        </div>
                        <span class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                            시뮬 정확도 92%
                        </span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-4 mb-4">
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-image text-4xl text-gray-400"></i>
                                <p class="text-xs text-gray-500 mt-2">수술 전</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-magic text-4xl text-blue-500"></i>
                                <p class="text-xs text-gray-500 mt-2">시뮬레이션</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-check-circle text-4xl text-green-500"></i>
                                <p class="text-xs text-gray-500 mt-2">12개월 후</p>
                            </div>
                        </div>
                    </div>

                    <p class="text-gray-700 mb-4">
                        정수리 부분에 3,000모를 이식했습니다. 시뮬레이션보다는 약간 덜 풍성하지만 
                        그래도 만족스럽습니다. 가격 대비 훌륭한 결과였어요.
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #정수리이식
                        </span>
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #가성비좋음
                        </span>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <div class="flex items-center mb-2">
                                <div class="text-yellow-500 mr-2">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <span class="font-bold text-gray-800">4.0</span>
                            </div>
                            <p class="text-gray-600">이**님 | 29세 남성 | M자형 탈모</p>
                            <p class="text-sm text-gray-500">서울모발이식센터 | 2,000모 이식 | 2023.09</p>
                        </div>
                        <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                            시뮬 정확도 88%
                        </span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-4 mb-4">
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-image text-4xl text-gray-400"></i>
                                <p class="text-xs text-gray-500 mt-2">수술 전</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-magic text-4xl text-blue-500"></i>
                                <p class="text-xs text-gray-500 mt-2">시뮬레이션</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-gray-100 rounded-lg p-4 mb-2">
                                <i class="fas fa-check-circle text-4xl text-green-500"></i>
                                <p class="text-xs text-gray-500 mt-2">12개월 후</p>
                            </div>
                        </div>
                    </div>

                    <p class="text-gray-700 mb-4">
                        가격이 저렴해서 선택했습니다. 결과는 괜찮은데 시뮬레이션보다는 약간 차이가 있네요. 
                        그래도 전반적으로 만족합니다.
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #가격저렴
                        </span>
                        <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            #초기탈모
                        </span>
                    </div>
                </div>
            </div>

            <!-- Load More -->
            <div class="text-center mt-8">
                <button class="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold py-3 px-12 rounded-lg">
                    <i class="fas fa-plus mr-2"></i>
                    더 많은 후기 보기
                </button>
            </div>
        </div>
    </body>
    </html>
  `)
})

export default app
