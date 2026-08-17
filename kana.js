// 가나 데이터 — 기본 청음 46자
// 이후 탁음·반탁음·요음 확장 시 이 파일에만 항목을 추가한다.
// hangul 은 학습 보조용 근사 표기 (정답 판정은 romaji 기준)
const KANA = [
    { hira: "あ", kata: "ア", romaji: "a",   hangul: "아" },
    { hira: "い", kata: "イ", romaji: "i",   hangul: "이" },
    { hira: "う", kata: "ウ", romaji: "u",   hangul: "우" },
    { hira: "え", kata: "エ", romaji: "e",   hangul: "에" },
    { hira: "お", kata: "オ", romaji: "o",   hangul: "오" },

    { hira: "か", kata: "カ", romaji: "ka",  hangul: "카" },
    { hira: "き", kata: "キ", romaji: "ki",  hangul: "키" },
    { hira: "く", kata: "ク", romaji: "ku",  hangul: "쿠" },
    { hira: "け", kata: "ケ", romaji: "ke",  hangul: "케" },
    { hira: "こ", kata: "コ", romaji: "ko",  hangul: "코" },

    { hira: "さ", kata: "サ", romaji: "sa",  hangul: "사" },
    { hira: "し", kata: "シ", romaji: "shi", hangul: "시" },
    { hira: "す", kata: "ス", romaji: "su",  hangul: "스" },
    { hira: "せ", kata: "セ", romaji: "se",  hangul: "세" },
    { hira: "そ", kata: "ソ", romaji: "so",  hangul: "소" },

    { hira: "た", kata: "タ", romaji: "ta",  hangul: "타" },
    { hira: "ち", kata: "チ", romaji: "chi", hangul: "치" },
    { hira: "つ", kata: "ツ", romaji: "tsu", hangul: "츠" },
    { hira: "て", kata: "テ", romaji: "te",  hangul: "테" },
    { hira: "と", kata: "ト", romaji: "to",  hangul: "토" },

    { hira: "な", kata: "ナ", romaji: "na",  hangul: "나" },
    { hira: "に", kata: "ニ", romaji: "ni",  hangul: "니" },
    { hira: "ぬ", kata: "ヌ", romaji: "nu",  hangul: "누" },
    { hira: "ね", kata: "ネ", romaji: "ne",  hangul: "네" },
    { hira: "の", kata: "ノ", romaji: "no",  hangul: "노" },

    { hira: "は", kata: "ハ", romaji: "ha",  hangul: "하" },
    { hira: "ひ", kata: "ヒ", romaji: "hi",  hangul: "히" },
    { hira: "ふ", kata: "フ", romaji: "fu",  hangul: "후" },
    { hira: "へ", kata: "ヘ", romaji: "he",  hangul: "헤" },
    { hira: "ほ", kata: "ホ", romaji: "ho",  hangul: "호" },

    { hira: "ま", kata: "マ", romaji: "ma",  hangul: "마" },
    { hira: "み", kata: "ミ", romaji: "mi",  hangul: "미" },
    { hira: "む", kata: "ム", romaji: "mu",  hangul: "무" },
    { hira: "め", kata: "メ", romaji: "me",  hangul: "메" },
    { hira: "も", kata: "モ", romaji: "mo",  hangul: "모" },

    { hira: "や", kata: "ヤ", romaji: "ya",  hangul: "야" },
    { hira: "ゆ", kata: "ユ", romaji: "yu",  hangul: "유" },
    { hira: "よ", kata: "ヨ", romaji: "yo",  hangul: "요" },

    { hira: "ら", kata: "ラ", romaji: "ra",  hangul: "라" },
    { hira: "り", kata: "リ", romaji: "ri",  hangul: "리" },
    { hira: "る", kata: "ル", romaji: "ru",  hangul: "루" },
    { hira: "れ", kata: "レ", romaji: "re",  hangul: "레" },
    { hira: "ろ", kata: "ロ", romaji: "ro",  hangul: "로" },

    { hira: "わ", kata: "ワ", romaji: "wa",  hangul: "와" },
    { hira: "を", kata: "ヲ", romaji: "wo",  hangul: "오" },

    { hira: "ん", kata: "ン", romaji: "n",   hangul: "응" },
];

// node 검증 스크립트에서 재사용하기 위한 export (브라우저에서는 무시됨)
if (typeof module !== "undefined") {
    module.exports = { KANA };
}
