// 다국어 지원 시스템
const translations = {
  ko: {
    nav: {
      home: '홈',
      diagnosis: 'AI 진단',
      simulation: '시뮬레이션',
      hospitals: '병원 매칭',
      reviews: '후기'
    },
    hero: {
      title: 'AI 기반 탈모 수술 결과 예측',
      subtitle: '실제 사진으로 가상 시뮬레이션을 경험하고, 믿을 수 있는 병원을 찾아보세요',
      ctaDiagnosis: '무료 AI 진단',
      ctaSimulation: '시뮬레이션 체험'
    },
    features: {
      title: '왜 HairSim AI 인가요?',
      aiPrecision: { title: 'AI 정밀 분석', desc: '딥러닝으로 탈모 유형과 단계를 정확히 진단합니다' },
      realResults: { title: '실제 결과 예측', desc: '내 얼굴에 직접 적용된 수술 후 모습을 미리 확인하세요' },
      hospitalMatch: { title: '신뢰할 수 있는 병원', desc: '검증된 병원과 실제 후기로 안전한 선택을 도와드립니다' }
    },
    howItWorks: {
      title: '이용 방법',
      step1: { title: '사진 업로드', desc: '3방향 탈모 사진을 업로드하세요' },
      step2: { title: 'AI 분석', desc: 'AI가 탈모 유형과 단계를 진단합니다' },
      step3: { title: '결과 시뮬레이션', desc: '수술 후 예상 결과를 확인하세요' },
      step4: { title: '병원 선택', desc: '최적의 병원을 추천받고 상담 예약하세요' }
    },
    simTypes: {
      title: '시뮬레이션 종류',
      hairTransplant: {
        title: '모발이식 수술',
        features: ['1,500 ~ 4,000모 이식 시뮬레이션', '절개 / 비절개 방식 비교', '헤어라인 디자인 옵션', '6개월 / 12개월 예측 결과']
      },
      nonSurgical: {
        title: '비수술 시술',
        features: ['PRP, 줄기세포 치료 효과', '메조테라피 결과 예측', '두피 건강 개선 시뮬레이션', '밀도 증가 시각화']
      },
      medication: {
        title: '약물 치료',
        features: ['피나스테리드, 두타스테리드 효과', '미녹시딜 사용 결과', '1년 / 2년 장기 예측', '유지 치료 시뮬레이션']
      }
    },
    stats: {
      simulations: '누적 시뮬레이션',
      cases: '성공 사례',
      hospitals: '제휴 병원',
      satisfaction: '만족도'
    },
    footer: {
      services: '서비스',
      information: '정보',
      company: '회사',
      copyright: '본 플랫폼의 시뮬레이션 결과는 예측 결과이며 실제 수술 결과를 보장하지 않습니다.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      diagnosis: 'AI Diagnosis',
      simulation: 'Simulation',
      hospitals: 'Hospitals',
      reviews: 'Reviews'
    },
    hero: {
      title: 'AI-Powered Hair Transplant Result Prediction',
      subtitle: 'Experience virtual simulation with your real photos and find trusted hospitals',
      ctaDiagnosis: 'Free AI Diagnosis',
      ctaSimulation: 'Try Simulation'
    },
    features: {
      title: 'Why HairSim AI?',
      aiPrecision: { title: 'AI Precision Analysis', desc: 'Deep learning accurately diagnoses hair loss type and stage' },
      realResults: { title: 'Real Result Prediction', desc: 'Preview post-surgery results applied directly to your face' },
      hospitalMatch: { title: 'Trusted Hospitals', desc: 'Find verified hospitals with real reviews for safe choices' }
    },
    howItWorks: {
      title: 'How It Works',
      step1: { title: 'Upload Photos', desc: 'Upload hair loss photos from 3 angles' },
      step2: { title: 'AI Analysis', desc: 'AI diagnoses hair loss type and stage' },
      step3: { title: 'Result Simulation', desc: 'Check expected post-surgery results' },
      step4: { title: 'Choose Hospital', desc: 'Get recommendations and book consultations' }
    },
    simTypes: {
      title: 'Simulation Types',
      hairTransplant: {
        title: 'Hair Transplant Surgery',
        features: ['1,500 ~ 4,000 grafts simulation', 'FUT / FUE method comparison', 'Hairline design options', '6 / 12 month prediction']
      },
      nonSurgical: {
        title: 'Non-Surgical Treatment',
        features: ['PRP, stem cell therapy effects', 'Mesotherapy result prediction', 'Scalp health improvement', 'Density increase visualization']
      },
      medication: {
        title: 'Medication Treatment',
        features: ['Finasteride, Dutasteride effects', 'Minoxidil usage results', '1 / 2 year long-term prediction', 'Maintenance therapy simulation']
      }
    },
    stats: {
      simulations: 'Total Simulations',
      cases: 'Success Cases',
      hospitals: 'Partner Hospitals',
      satisfaction: 'Satisfaction'
    },
    footer: {
      services: 'Services',
      information: 'Information',
      company: 'Company',
      copyright: 'Simulation results are predictions and do not guarantee actual surgical outcomes.'
    }
  },
  zh: {
    nav: { home: '首页', diagnosis: 'AI诊断', simulation: '模拟', hospitals: '医院匹配', reviews: '评价' },
    hero: {
      title: '基于AI的植发手术结果预测',
      subtitle: '使用真实照片体验虚拟模拟，找到可信赖的医院',
      ctaDiagnosis: '免费AI诊断',
      ctaSimulation: '体验模拟'
    },
    features: {
      title: '为什么选择 HairSim AI？',
      aiPrecision: { title: 'AI精准分析', desc: '深度学习精确诊断脱发类型和阶段' },
      realResults: { title: '真实结果预测', desc: '预览直接应用于您面部的术后效果' },
      hospitalMatch: { title: '可信赖的医院', desc: '通过真实评价找到经过验证的医院' }
    },
    howItWorks: {
      title: '使用方法',
      step1: { title: '上传照片', desc: '上传3个角度的脱发照片' },
      step2: { title: 'AI分析', desc: 'AI诊断脱发类型和阶段' },
      step3: { title: '结果模拟', desc: '查看预期的术后效果' },
      step4: { title: '选择医院', desc: '获取推荐并预约咨询' }
    },
    simTypes: {
      title: '模拟类型',
      hairTransplant: { title: '植发手术', features: ['1,500 ~ 4,000毛囊移植模拟', 'FUT / FUE方式对比', '发际线设计选项', '6个月 / 12个月预测结果'] },
      nonSurgical: { title: '非手术治疗', features: ['PRP、干细胞治疗效果', '中胚层疗法结果预测', '头皮健康改善模拟', '密度增加可视化'] },
      medication: { title: '药物治疗', features: ['非那雄胺、度他雄胺效果', '米诺地尔使用结果', '1年 / 2年长期预测', '维持治疗模拟'] }
    },
    stats: { simulations: '累计模拟', cases: '成功案例', hospitals: '合作医院', satisfaction: '满意度' },
    footer: { services: '服务', information: '信息', company: '公司', copyright: '本平台的模拟结果是预测结果，不保证实际手术效果。' }
  },
  ja: {
    nav: { home: 'ホーム', diagnosis: 'AI診断', simulation: 'シミュレーション', hospitals: '病院マッチング', reviews: 'レビュー' },
    hero: {
      title: 'AIベースの植毛手術結果予測',
      subtitle: '実際の写真でバーチャルシミュレーションを体験',
      ctaDiagnosis: '無料AI診断',
      ctaSimulation: 'シミュレーション体験'
    },
    features: {
      title: 'なぜHairSim AIか？',
      aiPrecision: { title: 'AI精密分析', desc: 'ディープラーニングで脱毛タイプと段階を正確に診断' },
      realResults: { title: '実際の結果予測', desc: 'あなたの顔に直接適用された術後の姿を事前に確認' },
      hospitalMatch: { title: '信頼できる病院', desc: '検証済みの病院と実際のレビューで安全な選択をサポート' }
    },
    howItWorks: {
      title: 'ご利用方法',
      step1: { title: '写真アップロード', desc: '3方向から撮影した脱毛写真をアップロード' },
      step2: { title: 'AI分析', desc: 'AIが脱毛タイプと段階を診断' },
      step3: { title: '結果シミュレーション', desc: '手術後の予想結果を確認' },
      step4: { title: '病院選択', desc: '最適な病院の推薦とカウンセリング予約' }
    },
    simTypes: {
      title: 'シミュレーションタイプ',
      hairTransplant: { title: '植毛手術', features: ['1,500〜4,000株の移植シミュレーション', 'FUT / FUE方式比較', 'ヘアラインデザインオプション', '6ヶ月 / 12ヶ月予測結果'] },
      nonSurgical: { title: '非手術施術', features: ['PRP、幹細胞治療効果', 'メソセラピー結果予測', '頭皮健康改善シミュレーション', '密度増加の視覚化'] },
      medication: { title: '薬物治療', features: ['フィナステリド、デュタステリド効果', 'ミノキシジル使用結果', '1年 / 2年長期予測', '維持治療シミュレーション'] }
    },
    stats: { simulations: '累積シミュレーション', cases: '成功事例', hospitals: '提携病院', satisfaction: '満足度' },
    footer: { services: 'サービス', information: '情報', company: '会社', copyright: '本プラットフォームのシミュレーション結果は予測結果であり、実際の手術結果を保証するものではありません。' }
  },
  th: {
    nav: { home: 'หน้าแรก', diagnosis: 'การวินิจฉัย AI', simulation: 'จำลอง', hospitals: 'โรงพยาบาล', reviews: 'รีวิว' },
    hero: {
      title: 'การทำนายผลการปลูกผมด้วย AI',
      subtitle: 'ลองจำลองเสมือนจริงด้วยภาพถ่ายจริงของคุณ',
      ctaDiagnosis: 'การวินิจฉัย AI ฟรี',
      ctaSimulation: 'ทดลองจำลอง'
    },
    features: {
      title: 'ทำไมต้อง HairSim AI?',
      aiPrecision: { title: 'การวิเคราะห์แม่นยำด้วย AI', desc: 'Deep Learning วินิจฉัยประเภทและระดับของผมร่วงอย่างแม่นยำ' },
      realResults: { title: 'ทำนายผลที่แท้จริง', desc: 'ดูตัวอย่างผลหลังผ่าตัดที่ใช้กับใบหน้าของคุณโดยตรง' },
      hospitalMatch: { title: 'โรงพยาบาลที่เชื่อถือได้', desc: 'ค้นหาโรงพยาบาลที่ได้รับการรับรองพร้อมรีวิวจริง' }
    },
    howItWorks: {
      title: 'วิธีการใช้งาน',
      step1: { title: 'อัปโหลดภาพถ่าย', desc: 'อัปโหลดภาพถ่ายผมร่วงจาก 3 มุม' },
      step2: { title: 'วิเคราะห์ด้วย AI', desc: 'AI วินิจฉัยประเภทและระดับของผมร่วง' },
      step3: { title: 'จำลองผล', desc: 'ตรวจสอบผลที่คาดหวังหลังผ่าตัด' },
      step4: { title: 'เลือกโรงพยาบาล', desc: 'รับคำแนะนำและนัดหมายปรึกษา' }
    },
    simTypes: {
      title: 'ประเภทการจำลอง',
      hairTransplant: { title: 'การผ่าตัดปลูกผม', features: ['จำลองการปลูกผม 1,500 ~ 4,000 กราฟท์', 'เปรียบเทียบวิธี FUT / FUE', 'ตัวเลือกออกแบบเส้นผม', 'ผลทำนาย 6 / 12 เดือน'] },
      nonSurgical: { title: 'การรักษาแบบไม่ผ่าตัด', features: ['ผลของ PRP, การรักษาด้วยเซลล์ต้นกำเนิด', 'ทำนายผลของ Mesotherapy', 'จำลองการปรับปรุงสุขภาพหนังศีรษะ', 'แสดงภาพการเพิ่มความหนาแน่น'] },
      medication: { title: 'การรักษาด้วยยา', features: ['ผลของ Finasteride, Dutasteride', 'ผลการใช้ Minoxidil', 'ทำนายระยะยาว 1 / 2 ปี', 'จำลองการรักษาเพื่อรักษาสภาพ'] }
    },
    stats: { simulations: 'การจำลองทั้งหมด', cases: 'กรณีที่ประสบความสำเร็จ', hospitals: 'โรงพยาบาลพันธมิตร', satisfaction: 'ความพึงพอใจ' },
    footer: { services: 'บริการ', information: 'ข้อมูล', company: 'บริษัท', copyright: 'ผลการจำลองของแพลตฟอร์มนี้เป็นผลการทำนาย' }
  },
  vi: {
    nav: { home: 'Trang chủ', diagnosis: 'Chẩn đoán AI', simulation: 'Mô phỏng', hospitals: 'Bệnh viện', reviews: 'Đánh giá' },
    hero: {
      title: 'Dự đoán kết quả cấy tóc bằng AI',
      subtitle: 'Trải nghiệm mô phỏng ảo với ảnh thật của bạn',
      ctaDiagnosis: 'Chẩn đoán AI miễn phí',
      ctaSimulation: 'Thử mô phỏng'
    },
    features: {
      title: 'Tại sao chọn HairSim AI?',
      aiPrecision: { title: 'Phân tích chính xác bằng AI', desc: 'Deep learning chẩn đoán chính xác loại và giai đoạn rụng tóc' },
      realResults: { title: 'Dự đoán kết quả thực', desc: 'Xem trước kết quả sau phẫu thuật áp dụng trực tiếp' },
      hospitalMatch: { title: 'Bệnh viện đáng tin cậy', desc: 'Tìm bệnh viện đã được xác minh với đánh giá thực' }
    },
    howItWorks: {
      title: 'Cách sử dụng',
      step1: { title: 'Tải ảnh lên', desc: 'Tải ảnh rụng tóc từ 3 góc độ' },
      step2: { title: 'Phân tích AI', desc: 'AI chẩn đoán loại và giai đoạn rụng tóc' },
      step3: { title: 'Mô phỏng kết quả', desc: 'Kiểm tra kết quả dự kiến sau phẫu thuật' },
      step4: { title: 'Chọn bệnh viện', desc: 'Nhận đề xuất và đặt lịch tư vấn' }
    },
    simTypes: {
      title: 'Loại mô phỏng',
      hairTransplant: { title: 'Phẫu thuật cấy tóc', features: ['Mô phỏng cấy 1,500 ~ 4,000 nang tóc', 'So sánh phương pháp FUT / FUE', 'Tùy chọn thiết kế đường viền tóc', 'Dự đoán 6 / 12 tháng'] },
      nonSurgical: { title: 'Điều trị không phẫu thuật', features: ['Hiệu quả của PRP, liệu pháp tế bào gốc', 'Dự đoán kết quả Mesotherapy', 'Mô phỏng cải thiện sức khỏe da đầu', 'Trực quan hóa tăng độ dày'] },
      medication: { title: 'Điều trị bằng thuốc', features: ['Hiệu quả của Finasteride, Dutasteride', 'Kết quả sử dụng Minoxidil', 'Dự đoán dài hạn 1 / 2 năm', 'Mô phỏng điều trị duy trì'] }
    },
    stats: { simulations: 'Tổng số mô phỏng', cases: 'Trường hợp thành công', hospitals: 'Bệnh viện đối tác', satisfaction: 'Sự hài lòng' },
    footer: { services: 'Dịch vụ', information: 'Thông tin', company: 'Công ty', copyright: 'Kết quả mô phỏng là dự đoán và không đảm bảo kết quả phẫu thuật thực tế.' }
  },
  es: {
    nav: { home: 'Inicio', diagnosis: 'Diagnóstico AI', simulation: 'Simulación', hospitals: 'Hospitales', reviews: 'Reseñas' },
    hero: {
      title: 'Predicción de resultados de trasplante capilar con IA',
      subtitle: 'Experimenta la simulación virtual con tus fotos reales',
      ctaDiagnosis: 'Diagnóstico AI gratuito',
      ctaSimulation: 'Probar simulación'
    },
    features: {
      title: '¿Por qué HairSim AI?',
      aiPrecision: { title: 'Análisis preciso con IA', desc: 'Deep learning diagnostica con precisión el tipo y etapa de pérdida de cabello' },
      realResults: { title: 'Predicción de resultados reales', desc: 'Previsualiza los resultados postoperatorios aplicados directamente' },
      hospitalMatch: { title: 'Hospitales confiables', desc: 'Encuentra hospitales verificados con reseñas reales' }
    },
    howItWorks: {
      title: 'Cómo funciona',
      step1: { title: 'Subir fotos', desc: 'Sube fotos de pérdida de cabello desde 3 ángulos' },
      step2: { title: 'Análisis de IA', desc: 'La IA diagnostica el tipo y etapa de pérdida de cabello' },
      step3: { title: 'Simulación de resultados', desc: 'Verifica los resultados esperados postoperatorios' },
      step4: { title: 'Elegir hospital', desc: 'Obtén recomendaciones y reserva consultas' }
    },
    simTypes: {
      title: 'Tipos de simulación',
      hairTransplant: { title: 'Cirugía de trasplante capilar', features: ['Simulación de trasplante de 1,500 ~ 4,000 injertos', 'Comparación de métodos FUT / FUE', 'Opciones de diseño de línea capilar', 'Predicción de 6 / 12 meses'] },
      nonSurgical: { title: 'Tratamiento no quirúrgico', features: ['Efectos de PRP, terapia con células madre', 'Predicción de resultados de mesoterapia', 'Simulación de mejora de salud del cuero cabelludo', 'Visualización de aumento de densidad'] },
      medication: { title: 'Tratamiento con medicamentos', features: ['Efectos de Finasteride, Dutasteride', 'Resultados del uso de Minoxidil', 'Predicción a largo plazo de 1 / 2 años', 'Simulación de terapia de mantenimiento'] }
    },
    stats: { simulations: 'Simulaciones totales', cases: 'Casos de éxito', hospitals: 'Hospitales asociados', satisfaction: 'Satisfacción' },
    footer: { services: 'Servicios', information: 'Información', company: 'Empresa', copyright: 'Los resultados de simulación son predicciones y no garantizan resultados quirúrgicos reales.' }
  },
  de: {
    nav: { home: 'Startseite', diagnosis: 'KI-Diagnose', simulation: 'Simulation', hospitals: 'Krankenhäuser', reviews: 'Bewertungen' },
    hero: {
      title: 'KI-gestützte Haartransplantations-Ergebnisprognose',
      subtitle: 'Erleben Sie virtuelle Simulation mit Ihren echten Fotos',
      ctaDiagnosis: 'Kostenlose KI-Diagnose',
      ctaSimulation: 'Simulation ausprobieren'
    },
    features: {
      title: 'Warum HairSim AI?',
      aiPrecision: { title: 'Präzise KI-Analyse', desc: 'Deep Learning diagnostiziert Haarausfalltyp und -stadium präzise' },
      realResults: { title: 'Echte Ergebnisprognose', desc: 'Vorschau von postoperativen Ergebnissen direkt auf Ihr Gesicht angewendet' },
      hospitalMatch: { title: 'Vertrauenswürdige Krankenhäuser', desc: 'Finden Sie verifizierte Krankenhäuser mit echten Bewertungen' }
    },
    howItWorks: {
      title: 'So funktioniert es',
      step1: { title: 'Fotos hochladen', desc: 'Laden Sie Haarausfallfotos aus 3 Winkeln hoch' },
      step2: { title: 'KI-Analyse', desc: 'KI diagnostiziert Haarausfalltyp und -stadium' },
      step3: { title: 'Ergebnissimulation', desc: 'Überprüfen Sie erwartete postoperative Ergebnisse' },
      step4: { title: 'Krankenhaus wählen', desc: 'Erhalten Sie Empfehlungen und buchen Sie Beratungen' }
    },
    simTypes: {
      title: 'Simulationstypen',
      hairTransplant: { title: 'Haartransplantationschirurgie', features: ['Simulation von 1.500 ~ 4.000 Grafts', 'Vergleich von FUT / FUE-Methoden', 'Haarlinien-Design-Optionen', 'Prognose für 6 / 12 Monate'] },
      nonSurgical: { title: 'Nicht-chirurgische Behandlung', features: ['Effekte von PRP, Stammzelltherapie', 'Mesotherapie-Ergebnisprognose', 'Verbesserung der Kopfhautgesundheit', 'Visualisierung der Dichteerhöhung'] },
      medication: { title: 'Medikamentöse Behandlung', features: ['Effekte von Finasterid, Dutasterid', 'Minoxidil-Anwendungsergebnisse', 'Langfristige Prognose für 1 / 2 Jahre', 'Erhaltungstherapie-Simulation'] }
    },
    stats: { simulations: 'Gesamtsimulationen', cases: 'Erfolgsfälle', hospitals: 'Partnerkrankenhäuser', satisfaction: 'Zufriedenheit' },
    footer: { services: 'Dienste', information: 'Information', company: 'Unternehmen', copyright: 'Die Simulationsergebnisse sind Vorhersagen und garantieren keine tatsächlichen chirurgischen Ergebnisse.' }
  }
};

// 언어 감지 및 전환 시스템
const i18n = {
  currentLang: 'ko',
  
  // 언어 맵핑 (브라우저 언어 코드 → 앱 언어 코드)
  langMap: {
    'ko': 'ko', 'ko-KR': 'ko',
    'en': 'en', 'en-US': 'en', 'en-GB': 'en',
    'zh': 'zh', 'zh-CN': 'zh', 'zh-TW': 'zh',
    'ja': 'ja', 'ja-JP': 'ja',
    'th': 'th', 'th-TH': 'th',
    'vi': 'vi', 'vi-VN': 'vi',
    'es': 'es', 'es-ES': 'es', 'es-MX': 'es',
    'de': 'de', 'de-DE': 'de'
  },
  
  // 초기화
  init() {
    // 1. URL 파라미터에서 언어 확인 (/en, /zh 등)
    const urlLang = this.getLanguageFromURL();
    if (urlLang) {
      this.currentLang = urlLang;
      localStorage.setItem('language', urlLang);
      return;
    }
    
    // 2. localStorage에서 저장된 언어 확인
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      this.currentLang = savedLang;
      return;
    }
    
    // 3. 브라우저 언어 자동 감지
    const browserLang = navigator.language || navigator.userLanguage;
    const detectedLang = this.langMap[browserLang] || this.langMap[browserLang.split('-')[0]] || 'ko';
    this.currentLang = detectedLang;
    localStorage.setItem('language', detectedLang);
  },
  
  // URL에서 언어 코드 추출
  getLanguageFromURL() {
    const path = window.location.pathname;
    const match = path.match(/^\/(ko|en|zh|ja|th|vi|es|de)(\/|$)/);
    return match ? match[1] : null;
  },
  
  // 언어 변경
  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.updatePage();
    
    // URL 업데이트 (선택사항)
    const currentPath = window.location.pathname;
    const newPath = `/${lang}${currentPath.replace(/^\/(ko|en|zh|ja|th|vi|es|de)/, '')}`;
    // history.pushState({}, '', newPath); // 주석 처리: 새로고침 없이 URL만 변경
  },
  
  // 번역 가져오기
  t(key) {
    const keys = key.split('.');
    let value = translations[this.currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  },
  
  // 페이지 텍스트 업데이트
  updatePage() {
    // data-i18n 속성을 가진 모든 요소 찾기
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (Array.isArray(translation)) {
        // 배열인 경우 (features 리스트 등)
        el.innerHTML = translation.map(item => `<li class="mb-2">${item}</li>`).join('');
      } else {
        el.textContent = translation;
      }
    });
    
    // 언어 선택 드롭다운 업데이트
    this.updateLanguageSelector();
  },
  
  // 언어 선택 드롭다운 업데이트
  updateLanguageSelector() {
    const langNames = {
      ko: '🇰🇷 한국어',
      en: '🇺🇸 English',
      zh: '🇨🇳 简体中文',
      ja: '🇯🇵 日本語',
      th: '🇹🇭 ไทย',
      vi: '🇻🇳 Tiếng Việt',
      es: '🇪🇸 Español',
      de: '🇩🇪 Deutsch'
    };
    
    document.querySelectorAll('.current-lang').forEach(el => {
      el.textContent = langNames[this.currentLang];
    });
    
    // 체크 마크 업데이트
    document.querySelectorAll('[data-lang]').forEach(el => {
      const lang = el.getAttribute('data-lang');
      const checkIcon = el.querySelector('.fa-check');
      if (checkIcon) {
        checkIcon.style.display = lang === this.currentLang ? 'inline-block' : 'none';
      }
    });
  }
};

// DOM 로드 후 초기화
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
    i18n.updatePage();
    
    // 언어 변경 이벤트 리스너
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = el.getAttribute('data-lang');
        i18n.setLanguage(lang);
      });
    });
  });
}
