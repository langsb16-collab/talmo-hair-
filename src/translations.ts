// 다국어 번역 데이터
export const translations = {
  ko: {
    // 헤더 & 네비게이션
    nav: {
      home: '홈',
      diagnosis: 'AI 진단',
      simulation: '시뮬레이션',
      hospitals: '병원 매칭',
      reviews: '후기'
    },
    
    // 메인 페이지
    hero: {
      title: 'AI 기반 탈모 수술 결과 예측',
      subtitle: '실제 사진으로 가상 시뮬레이션을 경험하고, 믿을 수 있는 병원을 찾아보세요',
      ctaDiagnosis: '무료 AI 진단',
      ctaSimulation: '시뮬레이션 체험'
    },
    
    features: {
      title: '왜 HairSim AI 인가요?',
      aiPrecision: {
        title: 'AI 정밀 분석',
        desc: '딥러닝으로 탈모 유형과 단계를 정확히 진단합니다'
      },
      realResults: {
        title: '실제 결과 예측',
        desc: '내 얼굴에 직접 적용된 수술 후 모습을 미리 확인하세요'
      },
      hospitalMatch: {
        title: '신뢰할 수 있는 병원',
        desc: '검증된 병원과 실제 후기로 안전한 선택을 도와드립니다'
      }
    },
    
    howItWorks: {
      title: '이용 방법',
      step1: {
        title: '사진 업로드',
        desc: '3방향 탈모 사진을 업로드하세요'
      },
      step2: {
        title: 'AI 분석',
        desc: 'AI가 탈모 유형과 단계를 진단합니다'
      },
      step3: {
        title: '결과 시뮬레이션',
        desc: '수술 후 예상 결과를 확인하세요'
      },
      step4: {
        title: '병원 선택',
        desc: '최적의 병원을 추천받고 상담 예약하세요'
      }
    },
    
    simTypes: {
      title: '시뮬레이션 종류',
      hairTransplant: {
        title: '모발이식 수술',
        features: [
          '1,500 ~ 4,000모 이식 시뮬레이션',
          '절개 / 비절개 방식 비교',
          '헤어라인 디자인 옵션',
          '6개월 / 12개월 예측 결과'
        ]
      },
      nonSurgical: {
        title: '비수술 시술',
        features: [
          'PRP, 줄기세포 치료 효과',
          '메조테라피 결과 예측',
          '두피 건강 개선 시뮬레이션',
          '밀도 증가 시각화'
        ]
      },
      medication: {
        title: '약물 치료',
        features: [
          '피나스테리드, 두타스테리드 효과',
          '미녹시딜 사용 결과',
          '1년 / 2년 장기 예측',
          '유지 치료 시뮬레이션'
        ]
      }
    },
    
    stats: {
      simulations: '누적 시뮬레이션',
      cases: '성공 사례',
      hospitals: '제휴 병원',
      satisfaction: '만족도'
    },
    
    // AI 진단 페이지
    diagnosisPage: {
      title: 'AI 탈모 진단',
      subtitle: '사진만으로 AI가 탈모 상태를 정밀하게 분석해드립니다',
      uploadGuide: '정확한 분석을 위해 아래 각도에서 촬영한 사진을 업로드해주세요',
      frontView: '정면',
      leftView: '좌측 45도',
      topView: '상단',
      uploadBtn: '사진 업로드',
      analyzeBtn: 'AI 분석 시작',
      results: {
        title: '진단 결과',
        type: '탈모 유형',
        stage: '진행 단계',
        density: '모발 밀도',
        folliclesNeeded: '예상 필요 모낭',
        recommendation: '권장 치료',
        estimatedCost: '예상 비용',
        riskLevel: '진행 위험도',
        nextSteps: '다음 단계',
        simulationBtn: '시뮬레이션 진행',
        hospitalBtn: '병원 찾기'
      }
    },
    
    // 시뮬레이션 페이지
    simulationPage: {
      title: '가상 시뮬레이션',
      subtitle: '다양한 치료 방법의 결과를 미리 체험해보세요',
      selectType: '시뮬레이션 유형 선택',
      transplantType: '모발이식',
      nonSurgicalType: '비수술 시술',
      medicationType: '약물 치료',
      follicleCount: '이식 모낭 수',
      treatmentMethod: '치료 방식',
      predictionPeriod: '예측 기간',
      months6: '6개월',
      months12: '12개월',
      months24: '24개월',
      startSimulation: '시뮬레이션 시작',
      results: {
        title: '시뮬레이션 결과',
        before: '이전',
        after: '이후',
        details: '상세 결과',
        engraftRate: '생착률',
        recovery: '회복 기간',
        surgeryTime: '수술 시간',
        cost: '예상 비용',
        risks: '주의사항',
        savePdf: 'PDF 저장',
        findHospital: '병원 찾기'
      }
    },
    
    // 병원 매칭 페이지
    hospitalsPage: {
      title: '병원 찾기',
      subtitle: '검증된 전문 병원을 찾아보세요',
      filters: {
        region: '지역',
        method: '수술 방식',
        priceRange: '가격대',
        all: '전체'
      },
      hospitalCard: {
        experience: '경력',
        surgeries: '수술 건수',
        successRate: '생착률',
        pricePerFollicle: '모낭당 가격',
        aiMatch: 'AI 매칭',
        features: '특징',
        consultBtn: '상담 신청'
      }
    },
    
    // 후기 페이지
    reviewsPage: {
      title: '시뮬레이션 후기 & 실제 데이터',
      subtitle: '실제 사용자들의 경험을 확인하세요',
      stats: {
        avgAccuracy: '평균 정확도',
        satisfaction: '만족도',
        totalReviews: '전체 후기',
        verified: '검증된 사례'
      },
      reviewCard: {
        verified: '검증됨',
        simulation: '시뮬레이션',
        actual: '실제 결과',
        accuracy: '정확도',
        period: '경과 기간'
      }
    },
    
    // 푸터
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
      aiPrecision: {
        title: 'AI Precision Analysis',
        desc: 'Deep learning accurately diagnoses hair loss type and stage'
      },
      realResults: {
        title: 'Real Result Prediction',
        desc: 'Preview post-surgery results applied directly to your face'
      },
      hospitalMatch: {
        title: 'Trusted Hospitals',
        desc: 'Find verified hospitals with real reviews for safe choices'
      }
    },
    
    howItWorks: {
      title: 'How It Works',
      step1: {
        title: 'Upload Photos',
        desc: 'Upload hair loss photos from 3 angles'
      },
      step2: {
        title: 'AI Analysis',
        desc: 'AI diagnoses hair loss type and stage'
      },
      step3: {
        title: 'Result Simulation',
        desc: 'Check expected post-surgery results'
      },
      step4: {
        title: 'Choose Hospital',
        desc: 'Get recommendations and book consultations'
      }
    },
    
    simTypes: {
      title: 'Simulation Types',
      hairTransplant: {
        title: 'Hair Transplant Surgery',
        features: [
          '1,500 ~ 4,000 grafts simulation',
          'FUT / FUE method comparison',
          'Hairline design options',
          '6 / 12 month prediction'
        ]
      },
      nonSurgical: {
        title: 'Non-Surgical Treatment',
        features: [
          'PRP, stem cell therapy effects',
          'Mesotherapy result prediction',
          'Scalp health improvement',
          'Density increase visualization'
        ]
      },
      medication: {
        title: 'Medication Treatment',
        features: [
          'Finasteride, Dutasteride effects',
          'Minoxidil usage results',
          '1 / 2 year long-term prediction',
          'Maintenance therapy simulation'
        ]
      }
    },
    
    stats: {
      simulations: 'Total Simulations',
      cases: 'Success Cases',
      hospitals: 'Partner Hospitals',
      satisfaction: 'Satisfaction'
    },
    
    diagnosisPage: {
      title: 'AI Hair Loss Diagnosis',
      subtitle: 'AI precisely analyzes your hair loss condition from photos',
      uploadGuide: 'Please upload photos taken from the following angles for accurate analysis',
      frontView: 'Front View',
      leftView: 'Left 45°',
      topView: 'Top View',
      uploadBtn: 'Upload Photo',
      analyzeBtn: 'Start AI Analysis',
      results: {
        title: 'Diagnosis Results',
        type: 'Hair Loss Type',
        stage: 'Progress Stage',
        density: 'Hair Density',
        folliclesNeeded: 'Estimated Grafts Needed',
        recommendation: 'Recommended Treatment',
        estimatedCost: 'Estimated Cost',
        riskLevel: 'Progression Risk',
        nextSteps: 'Next Steps',
        simulationBtn: 'Start Simulation',
        hospitalBtn: 'Find Hospitals'
      }
    },
    
    simulationPage: {
      title: 'Virtual Simulation',
      subtitle: 'Experience results of various treatment methods in advance',
      selectType: 'Select Simulation Type',
      transplantType: 'Hair Transplant',
      nonSurgicalType: 'Non-Surgical',
      medicationType: 'Medication',
      follicleCount: 'Graft Count',
      treatmentMethod: 'Treatment Method',
      predictionPeriod: 'Prediction Period',
      months6: '6 Months',
      months12: '12 Months',
      months24: '24 Months',
      startSimulation: 'Start Simulation',
      results: {
        title: 'Simulation Results',
        before: 'Before',
        after: 'After',
        details: 'Detailed Results',
        engraftRate: 'Engraftment Rate',
        recovery: 'Recovery Period',
        surgeryTime: 'Surgery Time',
        cost: 'Estimated Cost',
        risks: 'Precautions',
        savePdf: 'Save PDF',
        findHospital: 'Find Hospitals'
      }
    },
    
    hospitalsPage: {
      title: 'Find Hospitals',
      subtitle: 'Discover verified specialist hospitals',
      filters: {
        region: 'Region',
        method: 'Surgery Method',
        priceRange: 'Price Range',
        all: 'All'
      },
      hospitalCard: {
        experience: 'Experience',
        surgeries: 'Surgery Count',
        successRate: 'Success Rate',
        pricePerFollicle: 'Price/Graft',
        aiMatch: 'AI Match',
        features: 'Features',
        consultBtn: 'Request Consultation'
      }
    },
    
    reviewsPage: {
      title: 'Simulation Reviews & Real Data',
      subtitle: 'Check real user experiences',
      stats: {
        avgAccuracy: 'Avg Accuracy',
        satisfaction: 'Satisfaction',
        totalReviews: 'Total Reviews',
        verified: 'Verified Cases'
      },
      reviewCard: {
        verified: 'Verified',
        simulation: 'Simulation',
        actual: 'Actual Result',
        accuracy: 'Accuracy',
        period: 'Period'
      }
    },
    
    footer: {
      services: 'Services',
      information: 'Information',
      company: 'Company',
      copyright: 'Simulation results are predictions and do not guarantee actual surgical outcomes.'
    }
  },
  
  zh: {
    nav: {
      home: '首页',
      diagnosis: 'AI诊断',
      simulation: '模拟',
      hospitals: '医院匹配',
      reviews: '评价'
    },
    
    hero: {
      title: '基于AI的植发手术结果预测',
      subtitle: '使用真实照片体验虚拟模拟，找到可信赖的医院',
      ctaDiagnosis: '免费AI诊断',
      ctaSimulation: '体验模拟'
    },
    
    features: {
      title: '为什么选择 HairSim AI？',
      aiPrecision: {
        title: 'AI精准分析',
        desc: '深度学习精确诊断脱发类型和阶段'
      },
      realResults: {
        title: '真实结果预测',
        desc: '预览直接应用于您面部的术后效果'
      },
      hospitalMatch: {
        title: '可信赖的医院',
        desc: '通过真实评价找到经过验证的医院，做出安全选择'
      }
    },
    
    howItWorks: {
      title: '使用方法',
      step1: {
        title: '上传照片',
        desc: '上传3个角度的脱发照片'
      },
      step2: {
        title: 'AI分析',
        desc: 'AI诊断脱发类型和阶段'
      },
      step3: {
        title: '结果模拟',
        desc: '查看预期的术后效果'
      },
      step4: {
        title: '选择医院',
        desc: '获取推荐并预约咨询'
      }
    },
    
    simTypes: {
      title: '模拟类型',
      hairTransplant: {
        title: '植发手术',
        features: [
          '1,500 ~ 4,000毛囊移植模拟',
          'FUT / FUE方式对比',
          '发际线设计选项',
          '6个月 / 12个月预测结果'
        ]
      },
      nonSurgical: {
        title: '非手术治疗',
        features: [
          'PRP、干细胞治疗效果',
          '中胚层疗法结果预测',
          '头皮健康改善模拟',
          '密度增加可视化'
        ]
      },
      medication: {
        title: '药物治疗',
        features: [
          '非那雄胺、度他雄胺效果',
          '米诺地尔使用结果',
          '1年 / 2年长期预测',
          '维持治疗模拟'
        ]
      }
    },
    
    stats: {
      simulations: '累计模拟',
      cases: '成功案例',
      hospitals: '合作医院',
      satisfaction: '满意度'
    },
    
    diagnosisPage: {
      title: 'AI脱发诊断',
      subtitle: 'AI仅通过照片精准分析您的脱发状况',
      uploadGuide: '为了精确分析，请上传从以下角度拍摄的照片',
      frontView: '正面',
      leftView: '左侧45°',
      topView: '顶部',
      uploadBtn: '上传照片',
      analyzeBtn: '开始AI分析',
      results: {
        title: '诊断结果',
        type: '脱发类型',
        stage: '进展阶段',
        density: '毛发密度',
        folliclesNeeded: '预计所需毛囊',
        recommendation: '推荐治疗',
        estimatedCost: '预估费用',
        riskLevel: '进展风险',
        nextSteps: '下一步',
        simulationBtn: '开始模拟',
        hospitalBtn: '查找医院'
      }
    },
    
    simulationPage: {
      title: '虚拟模拟',
      subtitle: '提前体验各种治疗方法的效果',
      selectType: '选择模拟类型',
      transplantType: '植发',
      nonSurgicalType: '非手术',
      medicationType: '药物',
      follicleCount: '移植毛囊数',
      treatmentMethod: '治疗方式',
      predictionPeriod: '预测期',
      months6: '6个月',
      months12: '12个月',
      months24: '24个月',
      startSimulation: '开始模拟',
      results: {
        title: '模拟结果',
        before: '之前',
        after: '之后',
        details: '详细结果',
        engraftRate: '成活率',
        recovery: '恢复期',
        surgeryTime: '手术时间',
        cost: '预估费用',
        risks: '注意事项',
        savePdf: '保存PDF',
        findHospital: '查找医院'
      }
    },
    
    hospitalsPage: {
      title: '查找医院',
      subtitle: '发现经过验证的专科医院',
      filters: {
        region: '地区',
        method: '手术方式',
        priceRange: '价格范围',
        all: '全部'
      },
      hospitalCard: {
        experience: '经验',
        surgeries: '手术次数',
        successRate: '成功率',
        pricePerFollicle: '每毛囊价格',
        aiMatch: 'AI匹配',
        features: '特点',
        consultBtn: '申请咨询'
      }
    },
    
    reviewsPage: {
      title: '模拟评价和实际数据',
      subtitle: '查看真实用户体验',
      stats: {
        avgAccuracy: '平均准确度',
        satisfaction: '满意度',
        totalReviews: '总评价',
        verified: '已验证案例'
      },
      reviewCard: {
        verified: '已验证',
        simulation: '模拟',
        actual: '实际结果',
        accuracy: '准确度',
        period: '经过期间'
      }
    },
    
    footer: {
      services: '服务',
      information: '信息',
      company: '公司',
      copyright: '本平台的模拟结果是预测结果，不保证实际手术效果。'
    }
  },
  
  ja: {
    nav: {
      home: 'ホーム',
      diagnosis: 'AI診断',
      simulation: 'シミュレーション',
      hospitals: '病院マッチング',
      reviews: 'レビュー'
    },
    
    hero: {
      title: 'AIベースの植毛手術結果予測',
      subtitle: '実際の写真でバーチャルシミュレーションを体験し、信頼できる病院を見つけましょう',
      ctaDiagnosis: '無料AI診断',
      ctaSimulation: 'シミュレーション体験'
    },
    
    features: {
      title: 'なぜHairSim AIか？',
      aiPrecision: {
        title: 'AI精密分析',
        desc: 'ディープラーニングで脱毛タイプと段階を正確に診断'
      },
      realResults: {
        title: '実際の結果予測',
        desc: 'あなたの顔に直接適用された術後の姿を事前に確認'
      },
      hospitalMatch: {
        title: '信頼できる病院',
        desc: '検証済みの病院と実際のレビューで安全な選択をサポート'
      }
    },
    
    howItWorks: {
      title: 'ご利用方法',
      step1: {
        title: '写真アップロード',
        desc: '3方向から撮影した脱毛写真をアップロード'
      },
      step2: {
        title: 'AI分析',
        desc: 'AIが脱毛タイプと段階を診断'
      },
      step3: {
        title: '結果シミュレーション',
        desc: '手術後の予想結果を確認'
      },
      step4: {
        title: '病院選択',
        desc: '最適な病院の推薦とカウンセリング予約'
      }
    },
    
    simTypes: {
      title: 'シミュレーションタイプ',
      hairTransplant: {
        title: '植毛手術',
        features: [
          '1,500〜4,000株の移植シミュレーション',
          'FUT / FUE方式比較',
          'ヘアラインデザインオプション',
          '6ヶ月 / 12ヶ月予測結果'
        ]
      },
      nonSurgical: {
        title: '非手術施術',
        features: [
          'PRP、幹細胞治療効果',
          'メソセラピー結果予測',
          '頭皮健康改善シミュレーション',
          '密度増加の視覚化'
        ]
      },
      medication: {
        title: '薬物治療',
        features: [
          'フィナステリド、デュタステリド効果',
          'ミノキシジル使用結果',
          '1年 / 2年長期予測',
          '維持治療シミュレーション'
        ]
      }
    },
    
    stats: {
      simulations: '累積シミュレーション',
      cases: '成功事例',
      hospitals: '提携病院',
      satisfaction: '満足度'
    },
    
    diagnosisPage: {
      title: 'AI脱毛診断',
      subtitle: '写真だけでAIが脱毛状態を精密に分析',
      uploadGuide: '正確な分析のため、以下の角度から撮影した写真をアップロードしてください',
      frontView: '正面',
      leftView: '左側45°',
      topView: '上部',
      uploadBtn: '写真アップロード',
      analyzeBtn: 'AI分析開始',
      results: {
        title: '診断結果',
        type: '脱毛タイプ',
        stage: '進行段階',
        density: '毛髪密度',
        folliclesNeeded: '推定必要毛包',
        recommendation: '推奨治療',
        estimatedCost: '推定費用',
        riskLevel: '進行リスク',
        nextSteps: '次のステップ',
        simulationBtn: 'シミュレーション開始',
        hospitalBtn: '病院を探す'
      }
    },
    
    simulationPage: {
      title: 'バーチャルシミュレーション',
      subtitle: '様々な治療方法の結果を事前に体験',
      selectType: 'シミュレーションタイプ選択',
      transplantType: '植毛',
      nonSurgicalType: '非手術',
      medicationType: '薬物',
      follicleCount: '移植毛包数',
      treatmentMethod: '治療方式',
      predictionPeriod: '予測期間',
      months6: '6ヶ月',
      months12: '12ヶ月',
      months24: '24ヶ月',
      startSimulation: 'シミュレーション開始',
      results: {
        title: 'シミュレーション結果',
        before: '前',
        after: '後',
        details: '詳細結果',
        engraftRate: '生着率',
        recovery: '回復期間',
        surgeryTime: '手術時間',
        cost: '推定費用',
        risks: '注意事項',
        savePdf: 'PDF保存',
        findHospital: '病院を探す'
      }
    },
    
    hospitalsPage: {
      title: '病院を探す',
      subtitle: '検証済みの専門病院を発見',
      filters: {
        region: '地域',
        method: '手術方式',
        priceRange: '価格帯',
        all: '全て'
      },
      hospitalCard: {
        experience: '経歴',
        surgeries: '手術件数',
        successRate: '生着率',
        pricePerFollicle: '毛包あたりの価格',
        aiMatch: 'AIマッチング',
        features: '特徴',
        consultBtn: 'カウンセリング申請'
      }
    },
    
    reviewsPage: {
      title: 'シミュレーションレビューと実際のデータ',
      subtitle: '実際のユーザー体験を確認',
      stats: {
        avgAccuracy: '平均精度',
        satisfaction: '満足度',
        totalReviews: '全体レビュー',
        verified: '検証済み事例'
      },
      reviewCard: {
        verified: '検証済み',
        simulation: 'シミュレーション',
        actual: '実際の結果',
        accuracy: '精度',
        period: '経過期間'
      }
    },
    
    footer: {
      services: 'サービス',
      information: '情報',
      company: '会社',
      copyright: '本プラットフォームのシミュレーション結果は予測結果であり、実際の手術結果を保証するものではありません。'
    }
  },
  
  th: {
    nav: {
      home: 'หน้าแรก',
      diagnosis: 'การวินิจฉัย AI',
      simulation: 'จำลอง',
      hospitals: 'โรงพยาบาล',
      reviews: 'รีวิว'
    },
    
    hero: {
      title: 'การทำนายผลการปลูกผมด้วย AI',
      subtitle: 'ลองจำลองเสมือนจริงด้วยภาพถ่ายจริงของคุณ และค้นหาโรงพยาบาลที่เชื่อถือได้',
      ctaDiagnosis: 'การวินิจฉัย AI ฟรี',
      ctaSimulation: 'ทดลองจำลอง'
    },
    
    features: {
      title: 'ทำไมต้อง HairSim AI?',
      aiPrecision: {
        title: 'การวิเคราะห์แม่นยำด้วย AI',
        desc: 'Deep Learning วินิจฉัยประเภทและระดับของผมร่วงอย่างแม่นยำ'
      },
      realResults: {
        title: 'ทำนายผลที่แท้จริง',
        desc: 'ดูตัวอย่างผลหลังผ่าตัดที่ใช้กับใบหน้าของคุณโดยตรง'
      },
      hospitalMatch: {
        title: 'โรงพยาบาลที่เชื่อถือได้',
        desc: 'ค้นหาโรงพยาบาลที่ได้รับการรับรองพร้อมรีวิวจริงเพื่อการเลือกที่ปลอดภัย'
      }
    },
    
    howItWorks: {
      title: 'วิธีการใช้งาน',
      step1: {
        title: 'อัปโหลดภาพถ่าย',
        desc: 'อัปโหลดภาพถ่ายผมร่วงจาก 3 มุม'
      },
      step2: {
        title: 'วิเคราะห์ด้วย AI',
        desc: 'AI วินิจฉัยประเภทและระดับของผมร่วง'
      },
      step3: {
        title: 'จำลองผล',
        desc: 'ตรวจสอบผลที่คาดหวังหลังผ่าตัด'
      },
      step4: {
        title: 'เลือกโรงพยาบาล',
        desc: 'รับคำแนะนำและนัดหมายปรึกษา'
      }
    },
    
    simTypes: {
      title: 'ประเภทการจำลอง',
      hairTransplant: {
        title: 'การผ่าตัดปลูกผม',
        features: [
          'จำลองการปลูกผม 1,500 ~ 4,000 กราฟท์',
          'เปรียบเทียบวิธี FUT / FUE',
          'ตัวเลือกออกแบบเส้นผม',
          'ผลทำนาย 6 / 12 เดือน'
        ]
      },
      nonSurgical: {
        title: 'การรักษาแบบไม่ผ่าตัด',
        features: [
          'ผลของ PRP, การรักษาด้วยเซลล์ต้นกำเนิด',
          'ทำนายผลของ Mesotherapy',
          'จำลองการปรับปรุงสุขภาพหนังศีรษะ',
          'แสดงภาพการเพิ่มความหนาแน่น'
        ]
      },
      medication: {
        title: 'การรักษาด้วยยา',
        features: [
          'ผลของ Finasteride, Dutasteride',
          'ผลการใช้ Minoxidil',
          'ทำนายระยะยาว 1 / 2 ปี',
          'จำลองการรักษาเพื่อรักษาสภาพ'
        ]
      }
    },
    
    stats: {
      simulations: 'การจำลองทั้งหมด',
      cases: 'กรณีที่ประสบความสำเร็จ',
      hospitals: 'โรงพยาบาลพันธมิตร',
      satisfaction: 'ความพึงพอใจ'
    },
    
    diagnosisPage: {
      title: 'การวินิจฉัยผมร่วงด้วย AI',
      subtitle: 'AI วิเคราะห์สภาพผมร่วงของคุณอย่างแม่นยำจากภาพถ่าย',
      uploadGuide: 'โปรดอัปโหลดภาพถ่ายที่ถ่ายจากมุมต่อไปนี้เพื่อการวิเคราะห์ที่แม่นยำ',
      frontView: 'ด้านหน้า',
      leftView: 'ซ้าย 45°',
      topView: 'ด้านบน',
      uploadBtn: 'อัปโหลดภาพถ่าย',
      analyzeBtn: 'เริ่มวิเคราะห์ด้วย AI',
      results: {
        title: 'ผลการวินิจฉัย',
        type: 'ประเภทผมร่วง',
        stage: 'ระดับความคืบหน้า',
        density: 'ความหนาแน่นของผม',
        folliclesNeeded: 'กราฟท์ที่คาดว่าต้องการ',
        recommendation: 'การรักษาที่แนะนำ',
        estimatedCost: 'ค่าใช้จ่ายโดยประมาณ',
        riskLevel: 'ความเสี่ยงของการคืบหน้า',
        nextSteps: 'ขั้นตอนถัดไป',
        simulationBtn: 'เริ่มจำลอง',
        hospitalBtn: 'ค้นหาโรงพยาบาล'
      }
    },
    
    simulationPage: {
      title: 'การจำลองเสมือนจริง',
      subtitle: 'ลองผลของวิธีการรักษาต่างๆ ล่วงหน้า',
      selectType: 'เลือกประเภทการจำลอง',
      transplantType: 'ปลูกผม',
      nonSurgicalType: 'ไม่ผ่าตัด',
      medicationType: 'ยา',
      follicleCount: 'จำนวนกราฟท์',
      treatmentMethod: 'วิธีการรักษา',
      predictionPeriod: 'ระยะเวลาทำนาย',
      months6: '6 เดือน',
      months12: '12 เดือน',
      months24: '24 เดือน',
      startSimulation: 'เริ่มจำลอง',
      results: {
        title: 'ผลการจำลอง',
        before: 'ก่อน',
        after: 'หลัง',
        details: 'ผลโดยละเอียด',
        engraftRate: 'อัตราการเกาะของรากผม',
        recovery: 'ระยะเวลาฟื้นตัว',
        surgeryTime: 'เวลาผ่าตัด',
        cost: 'ค่าใช้จ่ายโดยประมาณ',
        risks: 'ข้อควรระวัง',
        savePdf: 'บันทึก PDF',
        findHospital: 'ค้นหาโรงพยาบาล'
      }
    },
    
    hospitalsPage: {
      title: 'ค้นหาโรงพยาบาล',
      subtitle: 'ค้นพบโรงพยาบาลผู้เชี่ยวชาญที่ได้รับการรับรอง',
      filters: {
        region: 'ภูมิภาค',
        method: 'วิธีการผ่าตัด',
        priceRange: 'ช่วงราคา',
        all: 'ทั้งหมด'
      },
      hospitalCard: {
        experience: 'ประสบการณ์',
        surgeries: 'จำนวนผ่าตัด',
        successRate: 'อัตราความสำเร็จ',
        pricePerFollicle: 'ราคา/กราฟท์',
        aiMatch: 'AI จับคู่',
        features: 'คุณสมบัติ',
        consultBtn: 'ขอปรึกษา'
      }
    },
    
    reviewsPage: {
      title: 'รีวิวการจำลองและข้อมูลจริง',
      subtitle: 'ตรวจสอบประสบการณ์ของผู้ใช้จริง',
      stats: {
        avgAccuracy: 'ความแม่นยำเฉลี่ย',
        satisfaction: 'ความพึงพอใจ',
        totalReviews: 'รีวิวทั้งหมด',
        verified: 'กรณีที่ตรวจสอบแล้ว'
      },
      reviewCard: {
        verified: 'ตรวจสอบแล้ว',
        simulation: 'การจำลอง',
        actual: 'ผลจริง',
        accuracy: 'ความแม่นยำ',
        period: 'ระยะเวลา'
      }
    },
    
    footer: {
      services: 'บริการ',
      information: 'ข้อมูล',
      company: 'บริษัท',
      copyright: 'ผลการจำลองของแพลตฟอร์มนี้เป็นผลการทำนายและไม่รับประกันผลการผ่าตัดจริง'
    }
  },
  
  vi: {
    nav: {
      home: 'Trang chủ',
      diagnosis: 'Chẩn đoán AI',
      simulation: 'Mô phỏng',
      hospitals: 'Bệnh viện',
      reviews: 'Đánh giá'
    },
    
    hero: {
      title: 'Dự đoán kết quả cấy tóc bằng AI',
      subtitle: 'Trải nghiệm mô phỏng ảo với ảnh thật của bạn và tìm bệnh viện uy tín',
      ctaDiagnosis: 'Chẩn đoán AI miễn phí',
      ctaSimulation: 'Thử mô phỏng'
    },
    
    features: {
      title: 'Tại sao chọn HairSim AI?',
      aiPrecision: {
        title: 'Phân tích chính xác bằng AI',
        desc: 'Deep learning chẩn đoán chính xác loại và giai đoạn rụng tóc'
      },
      realResults: {
        title: 'Dự đoán kết quả thực',
        desc: 'Xem trước kết quả sau phẫu thuật áp dụng trực tiếp lên khuôn mặt của bạn'
      },
      hospitalMatch: {
        title: 'Bệnh viện đáng tin cậy',
        desc: 'Tìm bệnh viện đã được xác minh với đánh giá thực để lựa chọn an toàn'
      }
    },
    
    howItWorks: {
      title: 'Cách sử dụng',
      step1: {
        title: 'Tải ảnh lên',
        desc: 'Tải ảnh rụng tóc từ 3 góc độ'
      },
      step2: {
        title: 'Phân tích AI',
        desc: 'AI chẩn đoán loại và giai đoạn rụng tóc'
      },
      step3: {
        title: 'Mô phỏng kết quả',
        desc: 'Kiểm tra kết quả dự kiến sau phẫu thuật'
      },
      step4: {
        title: 'Chọn bệnh viện',
        desc: 'Nhận đề xuất và đặt lịch tư vấn'
      }
    },
    
    simTypes: {
      title: 'Loại mô phỏng',
      hairTransplant: {
        title: 'Phẫu thuật cấy tóc',
        features: [
          'Mô phỏng cấy 1,500 ~ 4,000 nang tóc',
          'So sánh phương pháp FUT / FUE',
          'Tùy chọn thiết kế đường viền tóc',
          'Dự đoán 6 / 12 tháng'
        ]
      },
      nonSurgical: {
        title: 'Điều trị không phẫu thuật',
        features: [
          'Hiệu quả của PRP, liệu pháp tế bào gốc',
          'Dự đoán kết quả Mesotherapy',
          'Mô phỏng cải thiện sức khỏe da đầu',
          'Trực quan hóa tăng độ dày'
        ]
      },
      medication: {
        title: 'Điều trị bằng thuốc',
        features: [
          'Hiệu quả của Finasteride, Dutasteride',
          'Kết quả sử dụng Minoxidil',
          'Dự đoán dài hạn 1 / 2 năm',
          'Mô phỏng điều trị duy trì'
        ]
      }
    },
    
    stats: {
      simulations: 'Tổng số mô phỏng',
      cases: 'Trường hợp thành công',
      hospitals: 'Bệnh viện đối tác',
      satisfaction: 'Sự hài lòng'
    },
    
    diagnosisPage: {
      title: 'Chẩn đoán rụng tóc bằng AI',
      subtitle: 'AI phân tích chính xác tình trạng rụng tóc của bạn từ ảnh',
      uploadGuide: 'Vui lòng tải lên ảnh chụp từ các góc độ sau để phân tích chính xác',
      frontView: 'Mặt trước',
      leftView: 'Trái 45°',
      topView: 'Phía trên',
      uploadBtn: 'Tải ảnh lên',
      analyzeBtn: 'Bắt đầu phân tích AI',
      results: {
        title: 'Kết quả chẩn đoán',
        type: 'Loại rụng tóc',
        stage: 'Giai đoạn tiến triển',
        density: 'Mật độ tóc',
        folliclesNeeded: 'Nang tóc cần ước tính',
        recommendation: 'Điều trị được đề xuất',
        estimatedCost: 'Chi phí ước tính',
        riskLevel: 'Nguy cơ tiến triển',
        nextSteps: 'Bước tiếp theo',
        simulationBtn: 'Bắt đầu mô phỏng',
        hospitalBtn: 'Tìm bệnh viện'
      }
    },
    
    simulationPage: {
      title: 'Mô phỏng ảo',
      subtitle: 'Trải nghiệm kết quả của các phương pháp điều trị khác nhau trước',
      selectType: 'Chọn loại mô phỏng',
      transplantType: 'Cấy tóc',
      nonSurgicalType: 'Không phẫu thuật',
      medicationType: 'Thuốc',
      follicleCount: 'Số lượng nang tóc',
      treatmentMethod: 'Phương pháp điều trị',
      predictionPeriod: 'Thời gian dự đoán',
      months6: '6 tháng',
      months12: '12 tháng',
      months24: '24 tháng',
      startSimulation: 'Bắt đầu mô phỏng',
      results: {
        title: 'Kết quả mô phỏng',
        before: 'Trước',
        after: 'Sau',
        details: 'Kết quả chi tiết',
        engraftRate: 'Tỷ lệ ghép',
        recovery: 'Thời gian hồi phục',
        surgeryTime: 'Thời gian phẫu thuật',
        cost: 'Chi phí ước tính',
        risks: 'Lưu ý',
        savePdf: 'Lưu PDF',
        findHospital: 'Tìm bệnh viện'
      }
    },
    
    hospitalsPage: {
      title: 'Tìm bệnh viện',
      subtitle: 'Khám phá các bệnh viện chuyên khoa đã được xác minh',
      filters: {
        region: 'Khu vực',
        method: 'Phương pháp phẫu thuật',
        priceRange: 'Phạm vi giá',
        all: 'Tất cả'
      },
      hospitalCard: {
        experience: 'Kinh nghiệm',
        surgeries: 'Số ca phẫu thuật',
        successRate: 'Tỷ lệ thành công',
        pricePerFollicle: 'Giá/nang tóc',
        aiMatch: 'Khớp AI',
        features: 'Tính năng',
        consultBtn: 'Yêu cầu tư vấn'
      }
    },
    
    reviewsPage: {
      title: 'Đánh giá mô phỏng và dữ liệu thực',
      subtitle: 'Kiểm tra trải nghiệm người dùng thực',
      stats: {
        avgAccuracy: 'Độ chính xác trung bình',
        satisfaction: 'Sự hài lòng',
        totalReviews: 'Tổng đánh giá',
        verified: 'Trường hợp đã xác minh'
      },
      reviewCard: {
        verified: 'Đã xác minh',
        simulation: 'Mô phỏng',
        actual: 'Kết quả thực tế',
        accuracy: 'Độ chính xác',
        period: 'Thời gian'
      }
    },
    
    footer: {
      services: 'Dịch vụ',
      information: 'Thông tin',
      company: 'Công ty',
      copyright: 'Kết quả mô phỏng của nền tảng này là dự đoán và không đảm bảo kết quả phẫu thuật thực tế.'
    }
  },
  
  es: {
    nav: {
      home: 'Inicio',
      diagnosis: 'Diagnóstico AI',
      simulation: 'Simulación',
      hospitals: 'Hospitales',
      reviews: 'Reseñas'
    },
    
    hero: {
      title: 'Predicción de resultados de trasplante capilar con IA',
      subtitle: 'Experimenta la simulación virtual con tus fotos reales y encuentra hospitales de confianza',
      ctaDiagnosis: 'Diagnóstico AI gratuito',
      ctaSimulation: 'Probar simulación'
    },
    
    features: {
      title: '¿Por qué HairSim AI?',
      aiPrecision: {
        title: 'Análisis preciso con IA',
        desc: 'Deep learning diagnostica con precisión el tipo y etapa de pérdida de cabello'
      },
      realResults: {
        title: 'Predicción de resultados reales',
        desc: 'Previsualiza los resultados postoperatorios aplicados directamente a tu rostro'
      },
      hospitalMatch: {
        title: 'Hospitales confiables',
        desc: 'Encuentra hospitales verificados con reseñas reales para elecciones seguras'
      }
    },
    
    howItWorks: {
      title: 'Cómo funciona',
      step1: {
        title: 'Subir fotos',
        desc: 'Sube fotos de pérdida de cabello desde 3 ángulos'
      },
      step2: {
        title: 'Análisis de IA',
        desc: 'La IA diagnostica el tipo y etapa de pérdida de cabello'
      },
      step3: {
        title: 'Simulación de resultados',
        desc: 'Verifica los resultados esperados postoperatorios'
      },
      step4: {
        title: 'Elegir hospital',
        desc: 'Obtén recomendaciones y reserva consultas'
      }
    },
    
    simTypes: {
      title: 'Tipos de simulación',
      hairTransplant: {
        title: 'Cirugía de trasplante capilar',
        features: [
          'Simulación de trasplante de 1,500 ~ 4,000 injertos',
          'Comparación de métodos FUT / FUE',
          'Opciones de diseño de línea capilar',
          'Predicción de 6 / 12 meses'
        ]
      },
      nonSurgical: {
        title: 'Tratamiento no quirúrgico',
        features: [
          'Efectos de PRP, terapia con células madre',
          'Predicción de resultados de mesoterapia',
          'Simulación de mejora de salud del cuero cabelludo',
          'Visualización de aumento de densidad'
        ]
      },
      medication: {
        title: 'Tratamiento con medicamentos',
        features: [
          'Efectos de Finasteride, Dutasteride',
          'Resultados del uso de Minoxidil',
          'Predicción a largo plazo de 1 / 2 años',
          'Simulación de terapia de mantenimiento'
        ]
      }
    },
    
    stats: {
      simulations: 'Simulaciones totales',
      cases: 'Casos de éxito',
      hospitals: 'Hospitales asociados',
      satisfaction: 'Satisfacción'
    },
    
    diagnosisPage: {
      title: 'Diagnóstico de pérdida de cabello con IA',
      subtitle: 'La IA analiza con precisión tu condición de pérdida de cabello a partir de fotos',
      uploadGuide: 'Por favor, sube fotos tomadas desde los siguientes ángulos para un análisis preciso',
      frontView: 'Vista frontal',
      leftView: 'Izquierda 45°',
      topView: 'Vista superior',
      uploadBtn: 'Subir foto',
      analyzeBtn: 'Iniciar análisis de IA',
      results: {
        title: 'Resultados del diagnóstico',
        type: 'Tipo de pérdida de cabello',
        stage: 'Etapa de progresión',
        density: 'Densidad capilar',
        folliclesNeeded: 'Injertos estimados necesarios',
        recommendation: 'Tratamiento recomendado',
        estimatedCost: 'Costo estimado',
        riskLevel: 'Riesgo de progresión',
        nextSteps: 'Próximos pasos',
        simulationBtn: 'Iniciar simulación',
        hospitalBtn: 'Buscar hospitales'
      }
    },
    
    simulationPage: {
      title: 'Simulación virtual',
      subtitle: 'Experimenta los resultados de varios métodos de tratamiento por adelantado',
      selectType: 'Seleccionar tipo de simulación',
      transplantType: 'Trasplante capilar',
      nonSurgicalType: 'No quirúrgico',
      medicationType: 'Medicación',
      follicleCount: 'Cantidad de injertos',
      treatmentMethod: 'Método de tratamiento',
      predictionPeriod: 'Período de predicción',
      months6: '6 meses',
      months12: '12 meses',
      months24: '24 meses',
      startSimulation: 'Iniciar simulación',
      results: {
        title: 'Resultados de simulación',
        before: 'Antes',
        after: 'Después',
        details: 'Resultados detallados',
        engraftRate: 'Tasa de injerto',
        recovery: 'Período de recuperación',
        surgeryTime: 'Tiempo de cirugía',
        cost: 'Costo estimado',
        risks: 'Precauciones',
        savePdf: 'Guardar PDF',
        findHospital: 'Buscar hospitales'
      }
    },
    
    hospitalsPage: {
      title: 'Buscar hospitales',
      subtitle: 'Descubre hospitales especialistas verificados',
      filters: {
        region: 'Región',
        method: 'Método de cirugía',
        priceRange: 'Rango de precios',
        all: 'Todos'
      },
      hospitalCard: {
        experience: 'Experiencia',
        surgeries: 'Cantidad de cirugías',
        successRate: 'Tasa de éxito',
        pricePerFollicle: 'Precio/injerto',
        aiMatch: 'Coincidencia de IA',
        features: 'Características',
        consultBtn: 'Solicitar consulta'
      }
    },
    
    reviewsPage: {
      title: 'Reseñas de simulación y datos reales',
      subtitle: 'Verifica las experiencias de usuarios reales',
      stats: {
        avgAccuracy: 'Precisión promedio',
        satisfaction: 'Satisfacción',
        totalReviews: 'Reseñas totales',
        verified: 'Casos verificados'
      },
      reviewCard: {
        verified: 'Verificado',
        simulation: 'Simulación',
        actual: 'Resultado real',
        accuracy: 'Precisión',
        period: 'Período'
      }
    },
    
    footer: {
      services: 'Servicios',
      information: 'Información',
      company: 'Empresa',
      copyright: 'Los resultados de simulación de esta plataforma son predicciones y no garantizan resultados quirúrgicos reales.'
    }
  },
  
  de: {
    nav: {
      home: 'Startseite',
      diagnosis: 'KI-Diagnose',
      simulation: 'Simulation',
      hospitals: 'Krankenhäuser',
      reviews: 'Bewertungen'
    },
    
    hero: {
      title: 'KI-gestützte Haartransplantations-Ergebnisprognose',
      subtitle: 'Erleben Sie virtuelle Simulation mit Ihren echten Fotos und finden Sie vertrauenswürdige Krankenhäuser',
      ctaDiagnosis: 'Kostenlose KI-Diagnose',
      ctaSimulation: 'Simulation ausprobieren'
    },
    
    features: {
      title: 'Warum HairSim AI?',
      aiPrecision: {
        title: 'Präzise KI-Analyse',
        desc: 'Deep Learning diagnostiziert Haarausfalltyp und -stadium präzise'
      },
      realResults: {
        title: 'Echte Ergebnisprognose',
        desc: 'Vorschau von postoperativen Ergebnissen direkt auf Ihr Gesicht angewendet'
      },
      hospitalMatch: {
        title: 'Vertrauenswürdige Krankenhäuser',
        desc: 'Finden Sie verifizierte Krankenhäuser mit echten Bewertungen für sichere Entscheidungen'
      }
    },
    
    howItWorks: {
      title: 'So funktioniert es',
      step1: {
        title: 'Fotos hochladen',
        desc: 'Laden Sie Haarausfallfotos aus 3 Winkeln hoch'
      },
      step2: {
        title: 'KI-Analyse',
        desc: 'KI diagnostiziert Haarausfalltyp und -stadium'
      },
      step3: {
        title: 'Ergebnissimulation',
        desc: 'Überprüfen Sie erwartete postoperative Ergebnisse'
      },
      step4: {
        title: 'Krankenhaus wählen',
        desc: 'Erhalten Sie Empfehlungen und buchen Sie Beratungen'
      }
    },
    
    simTypes: {
      title: 'Simulationstypen',
      hairTransplant: {
        title: 'Haartransplantationschirurgie',
        features: [
          'Simulation von 1.500 ~ 4.000 Grafts',
          'Vergleich von FUT / FUE-Methoden',
          'Haarlinien-Design-Optionen',
          'Prognose für 6 / 12 Monate'
        ]
      },
      nonSurgical: {
        title: 'Nicht-chirurgische Behandlung',
        features: [
          'Effekte von PRP, Stammzelltherapie',
          'Mesotherapie-Ergebnisprognose',
          'Verbesserung der Kopfhautgesundheit',
          'Visualisierung der Dichteerhöhung'
        ]
      },
      medication: {
        title: 'Medikamentöse Behandlung',
        features: [
          'Effekte von Finasterid, Dutasterid',
          'Minoxidil-Anwendungsergebnisse',
          'Langfristige Prognose für 1 / 2 Jahre',
          'Erhaltungstherapie-Simulation'
        ]
      }
    },
    
    stats: {
      simulations: 'Gesamtsimulationen',
      cases: 'Erfolgsfälle',
      hospitals: 'Partnerkrankenhäuser',
      satisfaction: 'Zufriedenheit'
    },
    
    diagnosisPage: {
      title: 'KI-Haarausfall-Diagnose',
      subtitle: 'KI analysiert Ihren Haarausfall-Zustand präzise aus Fotos',
      uploadGuide: 'Bitte laden Sie Fotos hoch, die aus folgenden Winkeln aufgenommen wurden, für eine genaue Analyse',
      frontView: 'Frontansicht',
      leftView: 'Links 45°',
      topView: 'Draufsicht',
      uploadBtn: 'Foto hochladen',
      analyzeBtn: 'KI-Analyse starten',
      results: {
        title: 'Diagnoseergebnisse',
        type: 'Haarausfalltyp',
        stage: 'Fortschrittsstadium',
        density: 'Haardichte',
        folliclesNeeded: 'Geschätzte benötigte Grafts',
        recommendation: 'Empfohlene Behandlung',
        estimatedCost: 'Geschätzte Kosten',
        riskLevel: 'Fortschrittsrisiko',
        nextSteps: 'Nächste Schritte',
        simulationBtn: 'Simulation starten',
        hospitalBtn: 'Krankenhäuser finden'
      }
    },
    
    simulationPage: {
      title: 'Virtuelle Simulation',
      subtitle: 'Erleben Sie die Ergebnisse verschiedener Behandlungsmethoden im Voraus',
      selectType: 'Simulationstyp wählen',
      transplantType: 'Haartransplantation',
      nonSurgicalType: 'Nicht-chirurgisch',
      medicationType: 'Medikation',
      follicleCount: 'Graft-Anzahl',
      treatmentMethod: 'Behandlungsmethode',
      predictionPeriod: 'Prognosezeitraum',
      months6: '6 Monate',
      months12: '12 Monate',
      months24: '24 Monate',
      startSimulation: 'Simulation starten',
      results: {
        title: 'Simulationsergebnisse',
        before: 'Vorher',
        after: 'Nachher',
        details: 'Detaillierte Ergebnisse',
        engraftRate: 'Anwachsrate',
        recovery: 'Erholungszeit',
        surgeryTime: 'Operationszeit',
        cost: 'Geschätzte Kosten',
        risks: 'Vorsichtsmaßnahmen',
        savePdf: 'PDF speichern',
        findHospital: 'Krankenhäuser finden'
      }
    },
    
    hospitalsPage: {
      title: 'Krankenhäuser finden',
      subtitle: 'Entdecken Sie verifizierte Fachkrankenhäuser',
      filters: {
        region: 'Region',
        method: 'Operationsmethode',
        priceRange: 'Preisspanne',
        all: 'Alle'
      },
      hospitalCard: {
        experience: 'Erfahrung',
        surgeries: 'Operationsanzahl',
        successRate: 'Erfolgsrate',
        pricePerFollicle: 'Preis/Graft',
        aiMatch: 'KI-Übereinstimmung',
        features: 'Merkmale',
        consultBtn: 'Beratung anfragen'
      }
    },
    
    reviewsPage: {
      title: 'Simulationsbewertungen und echte Daten',
      subtitle: 'Überprüfen Sie echte Nutzererfahrungen',
      stats: {
        avgAccuracy: 'Durchschn. Genauigkeit',
        satisfaction: 'Zufriedenheit',
        totalReviews: 'Gesamtbewertungen',
        verified: 'Verifizierte Fälle'
      },
      reviewCard: {
        verified: 'Verifiziert',
        simulation: 'Simulation',
        actual: 'Tatsächliches Ergebnis',
        accuracy: 'Genauigkeit',
        period: 'Zeitraum'
      }
    },
    
    footer: {
      services: 'Dienste',
      information: 'Information',
      company: 'Unternehmen',
      copyright: 'Die Simulationsergebnisse dieser Plattform sind Vorhersagen und garantieren keine tatsächlichen chirurgischen Ergebnisse.'
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.ko;
