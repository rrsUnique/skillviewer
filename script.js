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

function generateRangeValuesWithLevel(base, perLevel, rangeWidth, levelSteps) {
    return levelSteps.map((lv, idx) => {
        const min = base + perLevel * idx;
        const max = min + rangeWidth;
        return `${min} ~ ${max}`;  // 일반 공백 사용
    });
}

const skillTableConfig = {
    0: [
        {
            skillName: "ワイルドダンス",
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
            skillName: "剣圧",
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
            skillName: "トワーリングプロテクター",
            displayName: "트월링 프로텍트",
            iconId: 15,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "사정거리", baseIndex: 419, scale: 100 },
                { label: "바람 데미지", baseIndex: 157,perLevelIndex: 158, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 }
            ]
        },
        {
            skillName: "ウォークライ",
            displayName: "워 크라이",
            iconId: 20,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 }
            ]
        }
    ],
    1: [
        {
            skillName: "ブロードブレード",
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
            skillName: "ドラゴンツイスター",
            displayName: "드래곤 트위스터",
            iconId: 37,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "물 데미지", baseIndex: 150, perLevelIndex: 151, rangeWidthIndex: 152, valueType: "rangeText", scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "타격 횟수", text: "5초간 5회", valueType: "text" },
                { label: "비고", text: "쿨타임 제거", valueType: "text" },
            ]
        },
    ],
    2: [
        {
            skillName: "メテオシャワー",
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
            skillName: "ライトニングサンダー",
            displayName: "라이트닝 썬더",
            iconId: 64,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "소비 CP", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "바람 데미지", baseIndex: 157, perLevelIndex: 158, scale: 100 },
                { label: "빛 데미지", baseIndex: 171, perLevelIndex: 172, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "비고", text: "온/오프 스킬", valueType: "text" },
           ]
        },
        {
            skillName: "クリティカルヒット",
            displayName: "크리티컬 힛",
            iconId: 75,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 }
            ]
        },
        {
            skillName: "ファイアーエンチャント",
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
            skillName: "ミスティックフォッグ",
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
            skillName: "ファウンテンバリア",
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
            skillName: "ヘイスト",
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
            skillName: "グランドクロー",
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
            skillName: "チェーンドクロー",
            displayName: "체인드 클로",
            iconId: 80,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "타격 횟수", baseIndex: 495, perLevelIndex: 496, scale: 100, maxIndex: 494, maxScale: false },
                { label: "추가 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "비고", text: "즉시 타격", valueType: "text" },
           ]
        },
        {
            skillName: "バーニングオーブ",
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
            skillName: "ハウリングブラスト",
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
            skillName: "ゴッドハンド",
            displayName: "가즈 핸드",
            iconId: 104,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 1000 },
                { label: "데미지", baseIndex: 137, perLevelIndex: 138, scale: 100 },
                { label: "빛 데미지", baseIndex: 171, perLevelIndex: 172, rangeWidthIndex: 173, valueType: "rangeText", scale: 100 },
                { label: "언데드·악마 치명타 확률", baseIndex: 440, scale: 100 },
                { label: "타격 범위", baseIndex: 426, scale: 100 },
                { label: "물리 타격 횟수", baseIndex: 197, perLevelIndex: 198, scale: 100, maxIndex: 199 },
                { label: "빛 타격 횟수", baseIndex: 219, perLevelIndex: 220, scale: 100, maxIndex: 221 }
           ]
        },
        {
            skillName: "ブレッシング",
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
            skillName: "プロテクティングエビル",
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
            skillName: "プロテクティングエレメンタル",
            displayName: "프로텍팅 엘레멘탈",
            iconId: 118,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "순수 마법 공격 증가율", baseIndex: 281, perLevelIndex: 282, maxIndex: 283, scale: 100 },
                { label: "이상계 저항 증가율", baseIndex: 193, scale: 100 },
                { label: "저하계 저항 증가율", baseIndex: 215, scale: 100 },
                { label: "저주계 저항 증가율", baseIndex: 237, scale: 100 }
           ]
        },
        {
            skillName: "ディバインアーチ",
            displayName: "디바인 아치",
            iconId: 121,
            rows: [
                { label: "소비 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "획득 CP", baseIndex: 21, perLevelIndex: 22, scale: 100 },
                { label: "효과 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },
                { label: "스킬 레벨 증가", baseIndex: 281, perLevelIndex: 282, maxIndex: 283, scale: 100 },
                { label: "이상계 저항 증가율", baseIndex: 193, scale: 100 },
                { label: "저하계 저항 증가율", baseIndex: 215, scale: 100 },
                { label: "저주계 저항 증가율", baseIndex: 237, scale: 100 }
           ]
        },
    ],
    7: [
        {
            skillName: "かかと落とし",
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
            skillName: "後回し蹴り",
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
            skillName: "飛び蹴り",
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
            skillName: "三連回し蹴り",
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
            skillName: "烈風撃",
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
    14: [
        {
            skillName: "催眠術",
            displayName: "수면",
            iconId: 352,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "대지 데미지", baseIndex: 113, perLevelIndex: 114, rangeWidthIndex: 115, valueType: "rangeText", scale: 100, },
                { label: "사정 거리", baseIndex: 419, scale: 100 },
                { label: "비고", text: "온/오프 스킬", valueType: "text" },
           ]
        },
        {
            skillName: "針のむしろ",
            displayName: "자책감",
            iconId: 367,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "어둠 데미지", baseIndex: 178, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },   
                { label: "적 공격속도 증가", baseIndex: 215, perLevelIndex: 216, scale: 100 },   
                { label: "적 이동속도 증가", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "비고", text: "자기 중심으로 공격", valueType: "text" },
           ]
        },
        {
            skillName: "ミラーカーズ",
            displayName: "고문",
            iconId: 368,
            rows: [
                { label: "필요 CP", baseIndex: 19, perLevelIndex: 20, scale: 100 },
                { label: "어둠 데미지", baseIndex: 178, scale: 100 },
                { label: "타격 범위", baseIndex: 424, perLevelIndex: 425, scale: 10000 },   
                { label: "적 공격속도 증가", baseIndex: 215, perLevelIndex: 216, scale: 100 },   
                { label: "적 이동속도 증가", baseIndex: 237, perLevelIndex: 238, scale: 100 },
                { label: "비고", text: "자기 중심으로 공격", valueType: "text" },
           ]
        },
    ]
};

function generateRangeValuesWithLevel(base, perLevel, rangeWidth) {
    return levelSteps.map((lv, idx) => {
        const min = base + perLevel * idx;
        const max = min + rangeWidth;
        return `${min} ~ ${max}`;
    });
}

function renderByCharactorID(charactorID) {
    const { headerIndexMap, data } = skillCSVData;
    const container = document.getElementById("skillTables");
    container.innerHTML = "";

    const rowsByID = data.filter(row => row[headerIndexMap["charactorID"]]?.trim() === String(charactorID));
    const config = skillTableConfig[charactorID];
    if (!config) return;

    config.forEach(skill => {
        const row = rowsByID.find(r => r[headerIndexMap["skillName"]]?.trim() === skill.skillName.trim());
        if (!row) return;

        const tableRows = skill.rows.map(entry => {
            if (entry.valueType === "text") {
                return {
                    label: entry.label,
                    valueType: "text",
                    values: Array(levelSteps.length).fill(entry.text)  // 모든 셀에 같은 텍스트
                };
            }

            // 범위 텍스트 전용
            if (entry.valueType === "rangeText") {
                const base = (parseFloat(row[entry.baseIndex]) || 0) / (entry.scale || 1);
                const perLevel = (parseFloat(row[entry.perLevelIndex]) || 0) / (entry.scale || 1);
                const rangeWidth = (parseFloat(row[entry.rangeWidthIndex]) || 0) / (entry.scale || 1);

                return {
                    label: entry.label,
                    base,
                    perLevel,
                    rangeWidth,
                    valueType: "rangeText",
                    baseIndex: entry.baseIndex || null,
                    perLevelIndex: entry.perLevelIndex || null,
                    rangeWidthIndex: entry.rangeWidthIndex || null
                };
            }

            let base = 0, perLevel = 0, max = null;

            // 인덱스 기반 처리
            if ("baseIndex" in entry) {
                base = parseFloat(row[entry.baseIndex]) || 0;
                perLevel = "perLevelIndex" in entry ? (parseFloat(row[entry.perLevelIndex]) || 0) : 0;
                if ("maxIndex" in entry) {
                    const maxRaw = parseFloat(row[entry.maxIndex]);
                    max = !isNaN(maxRaw)
                        ? (entry.maxScale === false ? maxRaw : maxRaw / (entry.scale || 1))
                        : null;
                }
            } else {
                // 헤더 이름 기반 처리
                base = parseFloat(row[headerIndexMap[entry.baseColumn]]) || 0;
                perLevel = entry.perLevelColumn ? (parseFloat(row[headerIndexMap[entry.perLevelColumn]]) || 0) : 0;
                if (entry.maxColumn) {
                    const maxRaw = parseFloat(row[headerIndexMap[entry.maxColumn]]);
                    max = !isNaN(maxRaw)
                        ? (entry.maxScale === false ? maxRaw : maxRaw / (entry.scale || 1))
                        : null;
                }
            }

            return {
                label: entry.label,
                base,
                perLevel,
                scale: entry.scale,
                baseIndex: entry.baseIndex || null,
                max
            };
        });

        renderSkillTable(skill.displayName, tableRows, skill.iconId);
    });
}

function cleanNumber(n) {
    return parseFloat(parseFloat(n).toFixed(10)).toString();
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
    if (iconId !== null) {
        const imgSrc = `icon/iconSkill_${iconId}.png`;
        titleCell.innerHTML = `<img src="${imgSrc}" alt="${titleName}" style="vertical-align:middle; height:32px; margin-right:8px;"> ${titleName}`;
    } else {
        titleCell.textContent = titleName;
    }
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
        nameCell.style.whiteSpace = "nowrap";        // 줄바꿈 금지
        nameCell.style.minWidth = "80px";           // 최소 너비 설정 (필요 시 더 키움)
        nameCell.style.overflow = "hidden";          // 넘칠 때 자르기
        nameCell.style.textOverflow = "ellipsis";
        tr.appendChild(nameCell);

        let values;
            if (row.valueType === "rangeText") {
                values = generateRangeValuesWithLevel(row.base, row.perLevel, row.rangeWidth);
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

                    const baseIndex = Number(row.baseIndex);

                    if (row.valueType !== "text") {
                        if (Number(row.baseIndex) === 426) {
                            text = `무기 사정거리 x ${text}m`;
                        } else if (
                            baseIndex === 137 ||
                            (baseIndex === 193 && row.label.includes("회피율")) ||
                            (baseIndex === 193 && row.label.includes("이상계 저항 증가율")) ||
                            (baseIndex === 193 && row.label.includes("방어력 상승률")) ||
                            (baseIndex === 215 && row.label.includes("방어력%")) ||
                            (baseIndex === 215 && row.label.includes("이동속도 증가")) ||
                            (baseIndex === 193 && row.label.includes("공격속도 증가")) ||
                            (baseIndex === 193 && row.label.includes("마비 저항")) ||
                            (baseIndex === 237 && row.label.includes("적 이동속도 증가")) ||
                            (baseIndex === 237 && row.label.includes("저주계 저항 증가율")) ||
                            (baseIndex === 281 && row.label.includes("순수 마법 공격 증가율")) ||
                            baseIndex === 215 ||
                            baseIndex === 440 
                        ) {
                            text = `${parseFloat(text)}%`;
                        } else if (Number(row.baseIndex) === 109) {
                            text = `초당 ${text}회`;
                        } else if (Number(row.baseIndex) === 191 || baseIndex === 502) {
                            text = `${text}초`;
                        } else if (baseIndex === 424 || baseIndex === 419) {
                            text = `${text}m`;
                        } else if (
                            (baseIndex === 241 && row.label.includes("물리 타격 횟수")) ||
                            (baseIndex === 197 && (row.label.includes("물리 타격 횟수") || row.label.includes("불 타격 횟수")))
                        ) {
                            const raw = parseFloat(text) + 1;
                            text = cleanNumber(raw);
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
            renderByCharactorID(0);
        })
        .catch(err => console.error("CSV 로드 실패:", err));
});

