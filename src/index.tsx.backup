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
                        <a href="/" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600">홈</a>
                        <a href="/diagnosis" class="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600">진단</a>
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
