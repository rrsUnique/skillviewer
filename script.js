const skillTableConfig = {
    0: [
        {
            skillIndex: 3,
            displayName: "와일드댄스",
            iconId: 4,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "타격 범위", baseIndex: 426, scale: 100 },
                { label: "타격 횟수", baseIndex: 109, scale: 100 }
            ]
        },
        {
            skillIndex: 4,
            displayName: "검압",
            iconId: 5,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "사정거리", baseIndex: 426, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 }
            ]
        },
        {
            skillIndex: 14,
            displayName: "트월링 프로텍트",
            iconId: 15,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex2: 160, valueType: "rangeText2", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 }
            ]
        },
        {
            skillIndex: 19,
            displayName: "워 크라이",
            iconId: 20,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex2: 160, valueType: "rangeText2", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 }
            ]
        }
    ],
    1: [
        {
            skillIndex: 27,
            displayName: "브로드 블레이드",
            iconId: 28,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 495, perLevelIndex: 496, scale: 100, maxIndex: 494, maxScale: false },
                { label: "추가 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 }
            ]
        },
        {
            skillIndex: 36,
            displayName: "드래곤 트위스터",
            iconId: 37,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "물 데미지", baseIndex: 150, perLevelIndex: 151, rangeWidthIndex2: 152, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", text: "5초간 5회", valueType: "text" },
                { label: "비고", text: "쿨타임 제거", valueType: "text" },
            ]
        },
    ],
    2: [
        {
            skillIndex: 54,
            displayName: "메테오 샤워",
            iconId: 55,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
           ]
        },
        {
            skillIndex: 63,
            displayName: "라이트닝 썬더",
            iconId: 64,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "초당 소비 CP", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex2: 160, valueType: "rangeText2", scale: 100 },
                { label: "빛 데미지", baseIndex: 171, perLevelIndex: 172, rangeWidthIndex2: 174, valueType: "rangeText2", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 109, scale: 100 },
                { label: "비고", text: "온/오프 스킬", valueType: "text" },
           ]
        },
        {
            skillIndex: 74,
            displayName: "크리티컬 힛",
            iconId: 75,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "치명타 발동 확율", baseIndex: 436, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 }
            ]
        },
        {
            skillIndex: 52,
            displayName: "핫 인챈팅",
            iconId: 53,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "불 속성 추가 데미지", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
            ]
        },
        {
            skillIndex: 55,
            displayName: "미스틱 포그",
            iconId: 56,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "회피율", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
            ]
        },
        {
            skillIndex: 58,
            displayName: "파운틴 배리어",
            iconId: 59,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "방어력", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "방어력%", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "지속시간", baseIndex: 502, perLevelIndex: 503, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
            ]
        },
        {
            skillIndex: 64,
            displayName: "헤이스트",
            iconId: 65,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "공격속도 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "이동속도 증가", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
            ]
        },
    ],
    3: [
        {
            skillIndex: 78,
            displayName: "그랜드 클로",
            iconId: 79,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", text: "1", valueType: "text" },
           ]
        },
        {
            skillIndex: 79,
            displayName: "체인드 클로",
            iconId: 80,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "비고", text: "즉시 타격", valueType: "text" },
           ]
        },
        {
            skillIndex: 87,
            displayName: "버닝 오브",
            iconId: 88,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "불 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 }
           ]
        },
        {
            skillIndex: 94,
            displayName: "하울링 블래스트",
            iconId: 95,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "불 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 }
           ]
        },
    ],
   4: [
        {
            skillIndex: 103,
            displayName: "가즈 핸드",
            iconId: 104,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "빛 데미지", baseIndex: 215, perLevelIndex: 216, rangeWidthIndex2: 218, valueType: "rangeText2", scale: 100 },
                { label: "언데드·악마 치명타 확률", baseIndex: 440, scale: 100 },
                { label: "타격 범위", baseIndex: 426, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "빛 타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 }
           ]
        },
        {
            skillIndex: 116,
            displayName: "축복",
            iconId: 117,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "최대 HP 증가율", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "이상계 저항 증가율", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "빛 속성 추가 데미지", baseIndex: 237, perLevelIndex: 238, rangeWidthIndex: 239, valueType: "rangeText", scale: 100 },
                { label: "지속시간", baseIndex: 502, perLevelIndex: 503, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
           ]
        },
        {
            skillIndex: 117,
            displayName: "프로텍팅 이블",
            iconId: 118,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "방어력 상승률", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "저하계 저항 증가율", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "지속시간", baseIndex: 502, perLevelIndex: 503, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
           ]
        },
        {
            skillIndex: 119,
            displayName: "프로텍팅 엘레멘탈",
            iconId: 120,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "마법 공격 증가율", baseIndex: 281, perLevelIndex: 282, maxIndex: 283, scale: 100 },
                { label: "이상계 저항 증가율", baseIndex: 193, scale: 100 },
                { label: "저하계 저항 증가율", baseIndex: 215, scale: 100 },
                { label: "저주계 저항 증가율", baseIndex: 237, scale: 100 }
           ]
        },
        {
            skillIndex: 120,
            displayName: "디바인 아치",
            iconId: 121,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "스킬 레벨 증가", baseIndex: 281, perLevelIndex: 282, maxIndex: 283, scale: 100 },
                { label: "이상계 저항 증가율", baseIndex: 193, scale: 100 },
                { label: "저하계 저항 증가율", baseIndex: 215, scale: 100 },
                { label: "저주계 저항 증가율", baseIndex: 237, scale: 100 }
           ]
        },
    ],
   6: [
        {
            skillIndex: 151,
            displayName: "독 단도",
            iconId: 152,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "대지 데미지", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "타격 범위", baseIndex: 426, scale: 100 },
                { label: "비고", text: "1초당 1타", valueType: "text" },
           ]
        },
        {
            skillIndex: 152,
            displayName: "더블 드로잉",
            iconId: 153,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "명중률", baseIndex: 428, perLevelIndex: 429, scale: 100 },
                { label: "타격 횟수", baseIndex: 495, perLevelIndex: 496, scale: 100, maxIndex: 494, maxScale: false },
           ]
        },
        {
            skillIndex: 153,
            displayName: "체인 타겟",
            iconId: 154,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "명중률", baseIndex: 428, perLevelIndex: 429, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "동시 타격수", baseIndex: 491, perLevelIndex: 492, scale: 100 },
           ]
        },
        {
            skillIndex: 154,
            displayName: "다팅 피버",
            iconId: 155,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "공격속도 증가", baseIndex: 416, perLevelIndex: 417, scale: 100 },
                { label: "명중률", baseIndex: 428, perLevelIndex: 429, scale: 100 },
                { label: "타격 범위", baseIndex: 426, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 495, perLevelIndex: 496, scale: 100, maxIndex: 494, maxScale: false },
                { label: "동시 타격수", baseIndex: 491, perLevelIndex: 492, scale: 100 },
           ]
        },
        {
            skillIndex: 163,
            displayName: "폭발 함정 설치",
            iconId: 164,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "불 타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 },
           ]
        },
        {
            skillIndex: 164,
            displayName: "독 함정 설치",
            iconId: 165,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "대지 데미지", baseIndex: 164, perLevelIndex: 165, rangeWidthIndex: 166, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "1초당 1타 (7초 지속)", valueType: "text" },
           ]
        },
    ],
    7: [
        {
            skillIndex: 183,
            displayName: "힘껏찍기",
            iconId: 184,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", text: "1", valueType: "text" },
                { label: "스킬 레벨 상승", text: "오른발 스킬 레벨 2 상승 (3초)", valueType: "text" },
           ]
        },
        {
            skillIndex: 184,
            displayName: "뒤돌려 차기",
            iconId: 185,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", text: "1", valueType: "text" },
                { label: "스킬 레벨 상승", text: "왼손 스킬 레벨 3 상승 (3초)", valueType: "text" },
           ]
        },
        {
            skillIndex: 185,
            displayName: "날아 찍기",
            iconId: 186,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
                { label: "타격 횟수", text: "1", valueType: "text" },
                { label: "오른발 스킬 레벨 상승", baseIndex: 193, perLevelIndex: 194, scale: 100 },         
           ]
        },
        {
            skillIndex: 186,
            displayName: "삼단 돌려차기",
            iconId: 187,            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },            
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "사정거리", baseIndex: 426, scale: 100 },        
                { label: "물리 타격 횟수", baseIndex: 241, perLevelIndex: 242, scale: 100, maxIndex: 243 },
                { label: "스킬 레벨 상승", text: "오른손 스킬 레벨 4 상승 (2초)", valueType: "text" }
           ]
        },
        {
            skillIndex: 199,
            displayName: "장풍",
            iconId: 200,            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },  
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex: 159, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },   
                { label: "물리 타격 횟수", baseIndex: 241, perLevelIndex: 242, scale: 100, maxIndex: 243 },
                { label: "바람 타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 },
           ]
        },
    ],
   8: [
        {
            skillIndex: 243,
            displayName: "파이어 & 아이스",
            iconId: 244,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "물 데미지", baseIndex: 150, perLevelIndex: 151, rangeWidthIndex: 152, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },  
                { label: "타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221, combineWith: { baseIndex: 241, perLevelIndex: 242, scale: 100, maxIndex: 243 }, combineBaseIndex: 241 }
           ]
        },
        {
            skillIndex: 249,
            displayName: "신념",
            iconId: 250,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "공격력 상승률", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "마법 공격 증가율", baseIndex: 215, perLevelIndex: 216, maxIndex: 217, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
    ],
   9: [
        {
            skillIndex: 215,
            displayName: "스프레드 애로우",
            iconId: 216,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "사정 거리", baseIndex: 419, scale: 100 },
                { label: "타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "비고", text: "360도 전방향 타격", valueType: "text" }
            ]
        },
    ],
   10: [
        {
            skillIndex: 268,
            displayName: "꾸짖기",
            iconId: 269,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 경험치 증가율", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "펫 마법 공격 증가율", baseIndex: 281, perLevelIndex: 282, scale: 100 },
                { label: "마법 저항 증가량", baseIndex: 303, perLevelIndex: 304, maxIndex: 305, scale: 100 },
                { label: "이상계 저항 증가율", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "저하계 저항 증가율", baseIndex: 236, perLevelIndex: 237, scale: 100 },
                { label: "저주계 저항 증가율", baseIndex: 258, perLevelIndex: 259, scale: 100 },
                { label: "갱신시간", baseIndex: 109, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "모든 타입의 펫에게 적용", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
        {
            skillIndex: 269,
            displayName: "고추 먹이기",
            iconId: 270,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "펫 능력치 상승률", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "지속 시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "사용 횟수", baseIndex: 195, perLevelIndex: 196, maxIndex:197, scale: 100 }
            ]
        },
        {
            skillIndex: 270,
            displayName: "우울한 날",
            iconId: 271,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "펫 대지 공격력 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "펫 물리 공격력 증가량", baseIndex: 215, perLevelIndex: 216, scale: 100, combineWith: { baseIndex: 237, perLevelIndex: 238, scale: 100 }, combineBaseIndex: 237 },
                { label: "갱신시간", baseIndex: 109, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "모든 타입의 펫에게 적용", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
        {
            skillIndex: 271,
            displayName: "안개 낀 아침",
            iconId: 272,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "펫 물 공격력 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "펫 명중률 증가량", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "펫 회피율 증가량", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "갱신시간", baseIndex: 109, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "모든 타입의 펫에게 적용", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
        {
            skillIndex: 272,
            displayName: "비바람 부는 날",
            iconId: 273,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "펫 바람 공격력 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "펫 방어력 증가량", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "펫 공격속도 증가량", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "갱신시간", baseIndex: 109, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "모든 타입의 펫에게 적용", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
        {
            skillIndex: 273,
            displayName: "화창한 하루",
            iconId: 274,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "펫 불 공격력 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "펫 체력 증가량", baseIndex: 215, perLevelIndex: 216, scale: 100, combineWith: { baseIndex: 237, perLevelIndex: 238, scale: 100 }, combineBaseIndex: 237 },
                { label: "갱신시간", baseIndex: 109, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "모든 타입의 펫에게 적용", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
        {
            skillIndex: 274,
            displayName: "변덕스러운 날",
            iconId: 275,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "펫 어둠 공격력 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "펫 마법 저항 증가량", baseIndex: 215, perLevelIndex: 216, scale: 100, combineWith: { baseIndex: 237, perLevelIndex: 238, scale: 100 }, combineBaseIndex: 237 },
                { label: "갱신시간", baseIndex: 109, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "모든 타입의 펫에게 적용", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
    ],
   11: [
        {
            skillIndex: 281,
            displayName: "인시너레이트",
            iconId: 282,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "1초당 1회 발동", valueType: "text" },
                { label: "비고", text: "온/오프 스킬", valueType: "text" }
           ]
        },
    ],
   12: [
        {
            skillIndex: 304,
            displayName: "골리앗 슬레이어",
            iconId: 305,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "비고", text: "자기 중심으로 타격", valueType: "text" },
           ]
        },
        {
            skillIndex: 305,
            displayName: "병던지기",
            iconId: 306,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "불 데미지", baseIndex: 143, perLevelIndex: 144, rangeWidthIndex: 145, valueType: "rangeText", scale: 100 },
                { label: "물 데미지", baseIndex: 150, perLevelIndex: 151, rangeWidthIndex: 152, valueType: "rangeText", scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex: 159, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221, combineWith: [{ baseIndex: 241, perLevelIndex: 242, scale: 100, maxIndex: 243 }, { baseIndex: 263, perLevelIndex: 264, scale: 100, maxIndex: 265 }] },
                { label: "비고", text: "자기 중심으로 타격", valueType: "text" },
           ]
        },
    ],
   13: [
        {
            skillIndex: 329,
            displayName: "퀘이사 스캐터링",
            iconId: 330,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 426, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
           ]
        },
        {
            skillIndex: 348,
            displayName: "플로렌스 스페셜",
            iconId: 349,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "빛 데미지", baseIndex: 171, perLevelIndex: 172, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 495, perLevelIndex: 496, scale: 100, maxIndex: 494, maxScale: false },
                { label: "비고", text: "유혹, 혼란 확률 제거", valueType: "text" },
                { label: "비고", text: "강제 변신 해제 제거", valueType: "text" },
           ]
        },
    ],
    14: [
        {
            skillIndex: 351,
            displayName: "장님",
            iconId: 352,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "대지 데미지", baseIndex: 164, perLevelIndex: 165, rangeWidthIndex2: 167, valueType: "rangeText2", scale: 100, },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "온/오프 스킬", valueType: "text" },
           ]
        },
        {
            skillIndex: 366,
            displayName: "자책감",
            iconId: 367,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "어둠 데미지", baseIndex: 193, perLevelIndex: 194, scale: 100 },   
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },   
                { label: "적 공격속도 증가", baseIndex: 215, perLevelIndex: 216, scale: 100 },   
                { label: "적 이동속도 증가", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "지속 시간", baseIndex: 191, scale: 100 },
                { label: "비고", text: "자기 중심으로 스킬 발동", valueType: "text" },
           ]
        },
        {
            skillIndex: 367,
            displayName: "고문",
            iconId: 368,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "어둠 데미지", baseIndex: 193, perLevelIndex: 194, scale: 100 },   
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },   
                { label: "적 공격속도 증가", baseIndex: 215, perLevelIndex: 216, scale: 100 },   
                { label: "적 이동속도 증가", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "지속 시간", baseIndex: 191, scale: 100 },
                { label: "비고", text: "자기 중심으로 스킬 발동", valueType: "text" },
           ]
        },
    ],
    16: [
        {
            skillIndex: 402,
            displayName: "풍차 돌리기",
            iconId: 403,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex2: 160, valueType: "rangeText2", scale: 100, },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "바람 타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },

           ]
        },
        {
            skillIndex: 403,
            displayName: "방아 찍기",
            iconId: 404,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "비고", text: "즉시 타격", valueType: "text" },
           ]
        },
        {
            skillIndex: 404,
            displayName: "대회전",
            iconId: 405,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "지속시간", baseIndex: 502, scale: 100 },
                { label: "타격 횟수", baseIndex: 521, scale: 100 },
                { label: "비고", text: "쿨타임 제거", valueType: "text" },
           ]
        },
        {
            skillIndex: 409,
            displayName: "소리 베기",
            iconId: 410,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, rangeWidthIndex2: 160, valueType: "rangeText2", scale: 100, },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "지속시간", baseIndex: 502, scale: 100 },
                { label: "타격 횟수", baseIndex: 521, scale: 100 },
                { label: "비고", text: "쿨타임 제거, 침묵 효과 제거", valueType: "text" },
           ]
        },
    ],
    17: [
        {
            skillIndex: 439,
            displayName: "해피 블로섬",
            iconId: 440,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },

           ]
        },
    ],
    18: [
        {
            skillIndex: 454,
            displayName: "옵티컬 홀",
            iconId: 455,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "빛 데미지", baseIndex: 171, perLevelIndex: 172, rangeWidthIndex2: 174, valueType: "rangeText2", scale: 100, },
                { label: "빛 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
           ]
        },
        {
            skillIndex: 457,
            displayName: "활성화의 권능",
            iconId: 458,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "최대 CP 증가", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "비트 부착 수 증가", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "비고", text: "온/오프 스킬", valueType: "text" },
           ]
        },
        {
            skillIndex: 458,
            displayName: "빛의 장막",
            iconId: 459,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "빛 속성 추가 데미지", baseIndex: 193, perLevelIndex: 194, scale: 100 },
                { label: "?", baseIndex: 215, perLevelIndex: 216, scale: 100 },
                { label: "지속시간", baseIndex: 191, perLevelIndex: 192, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
           ]
        },
        {
            skillIndex: 461,
            displayName: "트리플 클러치",
            iconId: 462,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
           ]
        },
    ]
};

const levelSteps = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
let skillCSVData = { headerIndexMap: {}, data: [] };

function parseCSV(text) {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",").map(h => h.trim());
    const headerIndexMap = {};
    headers.forEach((h, i) => headerIndexMap[h] = i);
    const data = lines.slice(1).map(line => line.split(",").map(c => c.trim()));
    return { headerIndexMap, data };
}

function cleanNumber(n) {
    return parseFloat(parseFloat(n).toFixed(10)).toString();
}

function parseSigned16bit(value) {
    const num = parseFloat(value);
    if (isNaN(num)) return 0;
    return num > 32767 ? num - 65536 : num;
}

function generateValues(base, perLevel, scale, max = null) {
    const b = parseFloat(base) || 0;
    const p = parseFloat(perLevel) || 0;
    const s = parseFloat(scale) || 1;
    return levelSteps.map(lv => {
        let value = (b + p * lv) / s;
        if (max !== null && value > max) value = max;
        return Number(value.toFixed(2)).toString();
    });
}

function generateSymmetricRangeValuesWithLevel(base, perLevel, rangeWidth) {
    return levelSteps.map((lv, i) => {
        const center = base + perLevel * lv;
        const min = center - rangeWidth;
        const max = center + rangeWidth;
        return `${min} ~ ${max}`;
    });
}

function generateRangeValuesWithLevel(base, perLevel, rangeWidth) {
    const truncate = v => {
        const str = String(v);
        if (!str.includes('.')) return str;
        const [intPart, fracPart] = str.split('.');
        return `${intPart}.${fracPart.slice(0, 2)}`;
    };
    return levelSteps.map((lv, idx) => {
        const min = base + perLevel * idx;
        const max = min + rangeWidth;
        return `${truncate(min)} ~ ${truncate(max)}`;
    });
}

function renderByCharactorID(charactorID) {
    const { headerIndexMap, data } = skillCSVData;
    const container = document.getElementById("skillTables");
    container.innerHTML = "";

// 안내 텍스트 표시
const infoText = document.getElementById("info-text");
const jobTextMap = {
    2: "불, 물, 바람, 대지, 빛, 어둠 속성 통합",
    4: "리액션 최대 4개까지 가능",
    7: "리액션 최대 4개까지 가능",
    10: "리액션 최대 4개까지 가능",
};

if (jobTextMap.hasOwnProperty(charactorID)) {
    infoText.textContent = jobTextMap[charactorID];
    infoText.style.display = "block";
} else {
    infoText.style.display = "none";
}

    const rowsByID = data.filter(row => row[headerIndexMap["charactorID"]]?.trim() === String(charactorID));
    const config = skillTableConfig[charactorID];
    if (!config || config.length === 0) {
        container.innerHTML = `<div style="text-align: center; font-size: 20px; padding: 20px;">패치된 스킬 없음</div>`;
        return;
    }

    config.forEach(skill => {
        const realIndex = logicalToPhysicalIndex[skill.skillIndex];
        if (typeof realIndex !== "number" || !skillCSVData.data[realIndex]) return;

        const row = skillCSVData.data[realIndex];
        if (!row) return;

        const tableRows = skill.rows.map(entry => {
    const entries = [entry];
    if (Array.isArray(entry.combineWith)) {
        entries.push(...entry.combineWith);
    } else if (entry.combineWith) {
        entries.push(entry.combineWith);
    }

    const label = entry.label;
    const type = entry.valueType;

    if (type === "text") {
        return {
            label,
            valueType: "text",
            values: Array(levelSteps.length).fill(entry.text)
        };
    }

    if (type === "rangeText") {
        const scale = entry.scale || 1;
        const base = parseSigned16bit(row[entry.baseIndex]) / scale;
        const perLevel = (parseFloat(row[entry.perLevelIndex]) || 0) / scale;
        const rangeWidth = (parseFloat(row[entry.rangeWidthIndex]) || 0) / scale;

        return {
            label,
            base,
            perLevel,
            rangeWidth,
            valueType: "rangeText",
            baseIndex: entry.baseIndex,
            perLevelIndex: entry.perLevelIndex,
            rangeWidthIndex: entry.rangeWidthIndex
        };
    }

    if (type === "rangeText2") {
        const scale = entry.scale || 1;
        const base = (parseFloat(row[entry.baseIndex]) || 0) / scale;
        const perLevel = (parseFloat(row[entry.perLevelIndex]) || 0) / scale;
        const width = (parseFloat(row[entry.rangeWidthIndex2]) || 0) / scale;

        return {
            label,
            base,
            perLevel,
            rangeWidth2: width,
            valueType: "rangeText2",
            baseIndex: entry.baseIndex,
            perLevelIndex: entry.perLevelIndex,
            rangeWidthIndex2: entry.rangeWidthIndex2
        };
    }

    let base = 0, perLevel = 0, max = null, scale = entry.scale || 1;
    let baseIndex = entry.baseIndex ?? null;

    entries.forEach(e => {
        const s = e.scale || 1;
        scale = s;
        baseIndex = e.baseIndex ?? baseIndex;

        const get = idx => {
            if (typeof idx !== "number") return 0;
            const raw = row[idx];
            return (idx === 424) ? parseFloat(raw) || 0 : parseSigned16bit(raw) || 0;
        };

        if ("baseIndex" in e) {
            base += get(e.baseIndex);
            if (e.perLevelIndex !== undefined)
                perLevel += get(e.perLevelIndex);
            if (e.maxIndex !== undefined) {
                const rawMax = get(e.maxIndex);
                if (!isNaN(rawMax)) {
                    const m = e.maxScale === false ? rawMax : rawMax / s;
                    max = max === null ? m : max + m;
                }
            }
        } else {
            const him = skillCSVData.headerIndexMap;
            base += get(him[e.baseColumn]);
            if (e.perLevelColumn)
                perLevel += get(him[e.perLevelColumn]);
            if (e.maxColumn) {
                const rawMax = get(him[e.maxColumn]);
                if (!isNaN(rawMax)) {
                    const m = e.maxScale === false ? rawMax : rawMax / s;
                    max = max === null ? m : max + m;
                }
            }
        }
    });

    return {
        label,
        base,
        perLevel,
        scale,
        baseIndex,
        max
    };
});

        renderSkillTable(skill.displayName, tableRows, skill.iconId);
    });
}

function renderSkillTable(titleName, rows, iconId = null) {
    const container = document.getElementById("skillTables");
    const table = document.createElement("table");
    const thead = document.createElement("thead");

    const titleRow = document.createElement("tr");
    const titleCell = document.createElement("th");
    titleCell.colSpan = levelSteps.length + 1;
    titleCell.style.textAlign = "center";
    titleCell.style.padding = "16px";
    titleCell.style.fontSize = "20px";
    titleCell.style.color = "#fff";
    titleCell.style.background = "#111";
    titleCell.innerHTML = iconId !== null
        ? `<img src="icon/iconSkill_${iconId}.png" alt="${titleName}" style="vertical-align:middle; height:32px; margin-right:8px;"> ${titleName}`
        : titleName;
    titleRow.appendChild(titleCell);
    thead.appendChild(titleRow);

    const headRow = document.createElement("tr");
    headRow.appendChild(Object.assign(document.createElement("th"), { textContent: "항목" }));
    levelSteps.forEach(lv => {
        const th = document.createElement("th");
        th.textContent = lv;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    rows.forEach(row => {
        const tr = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = row.label;
        nameCell.style.background = "#062130";
        nameCell.style.padding = "8px";
        nameCell.style.border = "1px solid #333";
        nameCell.style.whiteSpace = "nowrap";
        nameCell.style.minWidth = "80px";
        nameCell.style.overflow = "hidden";
        nameCell.style.textOverflow = "ellipsis";
        tr.appendChild(nameCell);

        let values;
        if (row.valueType === "rangeText") {
            values = generateRangeValuesWithLevel(row.base || 0, row.perLevel || 0, row.rangeWidth || 0);
        } else if (row.valueType === "rangeText2") {
            values = generateSymmetricRangeValuesWithLevel(row.base || 0, row.perLevel || 0, row.rangeWidth2 || 0);
        } else if (row.valueType === "text") {
            values = row.values;
        } else {
            values = generateValues(row.base, row.perLevel, row.scale, row.max);
        }

        let lastVal = null;
        let span = 0;
        for (let i = 0; i <= values.length; i++) {
            const currentVal = values[i];
            if (currentVal === lastVal) {
                span++;
            } else {
                if (span > 0) {
                    const td = document.createElement("td");
                    let text = lastVal;
                    const baseIndex = Number("combineBaseIndex" in row ? row.combineBaseIndex : row.baseIndex);
console.log("▶ 확인용 baseIndex", baseIndex, row.label, text);
                    if (row.valueType !== "text") {
                        if (baseIndex === 426) {
                            text = `무기 사정거리 x ${text}m`;
                        } else if (
                            row.label.includes("회피율") ||
                            row.label.includes("이상계 저항 증가율") ||
                            row.label.includes("방어력 상승률") ||
                            row.label.includes("공격력 증가") ||
                            row.label.includes("방어력%") ||
                            row.label.includes("이동속도 증가") ||
                            row.label.includes("저하계 저항 증가율") ||
                            row.label.includes("증가량") ||
                            row.label.includes("공격속도 증가") ||
                            row.label.includes("마비 저항") ||
                            row.label.includes("공격력 상승률") ||
                            row.label.includes("펫 능력치 상승률") ||
                            row.label.includes("적 이동속도 증가") ||
                            row.label.includes("저주계 저항 증가율") ||
                            row.label.includes("마법 공격 증가율") ||
                            row.label.includes("마법 저항 증가량") ||
                            row.label.includes("치명타 발동 확율") ||
                            row.label.includes("획득 경험치 증가율") ||
                            row.label === "데미지" ||
                            row.label === "최대 HP 증가율" ||
                            row.label.includes("명중률")
                        ) {
                            text = `${parseFloat(text)}%`;
                        } else if ((baseIndex === 109 || baseIndex === 521) && row.label.includes("타격 횟수")) {
                            text = `초당 ${text}회`;
                        } else if (baseIndex === 109) {
                            text = `${text}초`;
                        } else if (baseIndex === 191 || baseIndex === 502) {
                            text = `${text}초`;
                        } else if (baseIndex === 424 || baseIndex === 419) {
                            text = `${text}m`;
                        } else if (
                            (baseIndex === 241 && row.label.includes("물리 타격 횟수")) ||
                            (baseIndex === 197 && (
                                row.label.includes("물리 타격 횟수") ||
                                row.label.includes("불 타격 횟수") ||
                                row.label.includes("빛 타격 횟수")
                            )) ||
                            (baseIndex === 219 && (
                                row.label.includes("불 타격 횟수") || 
                                row.label.includes("물리 타격 횟수")
                            )) ||
                            (baseIndex === 495 && row.label.includes("물리 타격 횟수")) ||
                            ((baseIndex === 241 || baseIndex === 263) && row.label.includes("타격 횟수"))
                        ) {
                            text = cleanNumber(parseFloat(text) + 1);
                        }
                    }
                    td.textContent = text;
                    td.colSpan = span;
                    td.style.border = "1px solid #333";
                    td.style.padding = "8px";
                    td.style.textAlign = "center";
                    td.style.background = "#111";
                    tr.appendChild(td);
                }
                lastVal = currentVal;
                span = 1;
            }
        }
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}

window.renderByCharactorID = renderByCharactorID;

document.addEventListener("DOMContentLoaded", () => {
    fetch("skill2.csv")
        .then(res => res.text())
        .then(csv => {
            skillCSVData = parseCSV(csv);
            window.logicalToPhysicalIndex = [];
            skillCSVData.data.forEach((row, physicalIdx) => {
                const name = row[skillCSVData.headerIndexMap["skillName"]];
                if (name && name.trim()) {
                    logicalToPhysicalIndex.push(physicalIdx);
                }
            });
            renderByCharactorID(0);
        })
        .catch(err => console.error("CSV 로드 실패:", err));
});
