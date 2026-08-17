export type Position = "投手" | "捕手" | "一壘手" | "三壘手" | "游擊手" | "外野手";
export type Recommendation = "S" | "A" | "B";

export type ReincarnatedPlayer = {
  name: string;
  year: number;
  startRegion: string;
  scoutRegion: string;
  positions: Position[];
  recommendation: Recommendation;
  reason: string;
  dlc?: boolean;
  source: "game8" | "appmedia";
};

export const positionLabels: Record<Position, string> = {
  投手: "投手（投手）",
  捕手: "捕手（捕手）",
  一壘手: "一壘手（一塁手）",
  三壘手: "三壘手（三塁手）",
  游擊手: "游擊手（遊撃手）",
  外野手: "外野手（外野手）",
};

export const recommendationLabels: Record<Recommendation, string> = {
  S: "首選",
  A: "強力",
  B: "優秀",
};

export const sourceLinks = {
  game8: "https://game8.jp/eikan-nine/553746",
  appmedia: "https://appmedia.jp/pawapuro2026-2027/80080750",
} as const;

export const birthRegions: Record<string, string> = {
  "大谷翔平": "岩手",
  "イチロー（鈴木一朗）": "愛知",
  "野村克也": "京都",
  "古田敦也": "兵庫",
  "王貞治": "東京",
  "田中将大（DLC）": "兵庫",
  "金田正一": "愛知",
  "長嶋茂雄": "千葉",
  "藤川球児": "高知",
  "阿部慎之助": "千葉",
  "山本由伸": "岡山",
  "上原浩治": "大阪",
  "松坂大輔": "東京",
  "秋山幸二": "熊本",
  "稲尾和久": "大分",
  "江川卓": "福島",
  "松井稼頭央（DLC）": "大阪",
  "坂本誠志郎": "兵庫",
  "源田壮亮": "大分",
  "平良海馬": "沖縄",
  "戸郷翔征": "宮崎",
  "小山正明": "兵庫",
};

export const players: ReincarnatedPlayer[] = [
  { name: "大谷翔平", year: 2010, startRegion: "岩手", scoutRegion: "岩手", positions: ["投手", "外野手"], recommendation: "S", reason: "投打都是最強級；高初始星數也利於首年挑戰日本代表。", source: "appmedia" },
  { name: "イチロー（鈴木一朗）", year: 1989, startRegion: "愛知", scoutRegion: "愛知", positions: ["外野手"], recommendation: "S", reason: "高星數、特殊能力豐富，守備與傳球能力也適合轉換守備位置。", source: "game8" },
  { name: "野村克也", year: 1951, startRegion: "京都", scoutRegion: "京都", positions: ["捕手"], recommendation: "S", reason: "同時持有球界頭腦（球界の頭脳）與低語戰術（ささやき戦術）。", dlc: true, source: "game8" },
  { name: "古田敦也", year: 1981, startRegion: "兵庫", scoutRegion: "兵庫", positions: ["捕手"], recommendation: "S", reason: "球界頭腦（球界の頭脳）能支援投手，初始肩力也很突出。", dlc: true, source: "game8" },
  { name: "王貞治", year: 1956, startRegion: "東京", scoutRegion: "東京", positions: ["一壘手"], recommendation: "S", reason: "最強級中心打者；DLC 版本追加金色特殊能力（金特殊能力）。", source: "appmedia" },
  { name: "田中将大（DLC）", year: 2004, startRegion: "北海道", scoutRegion: "兵庫", positions: ["投手"], recommendation: "S", reason: "初始能力極高，並持有勝利之星（勝利の星）。", dlc: true, source: "game8" },
  { name: "金田正一", year: 1949, startRegion: "愛知", scoutRegion: "愛知", positions: ["投手"], recommendation: "A", reason: "初始能力高，持有怪童（怪童）、鬥魂（闘魂）與多個藍色特殊能力（青特殊能力）。", dlc: true, source: "game8" },
  { name: "長嶋茂雄", year: 1951, startRegion: "千葉", scoutRegion: "千葉", positions: ["三壘手"], recommendation: "A", reason: "野手高星排行前段，初始能力與藍色特殊能力（青特殊能力）兼備。", source: "game8" },
  { name: "藤川球児", year: 1996, startRegion: "高知", scoutRegion: "高知", positions: ["投手"], recommendation: "A", reason: "無 DLC 也持有兩個金色特殊能力（金特殊能力），先發與終結者皆可。", source: "appmedia" },
  { name: "阿部慎之助", year: 1994, startRegion: "東京", scoutRegion: "千葉", positions: ["捕手"], recommendation: "A", reason: "無 DLC 環境的強力捕手，捕手能力與打擊能力都高。", source: "appmedia" },
  { name: "山本由伸", year: 2014, startRegion: "宮崎", scoutRegion: "岡山", positions: ["投手"], recommendation: "A", reason: "高投手能力，且可銜接 2015、2016 年的強投路線。", source: "game8" },
  { name: "上原浩治", year: 1991, startRegion: "大阪", scoutRegion: "大阪", positions: ["投手"], recommendation: "A", reason: "初始控球與體力均衡，特殊能力也能提高戰術卡數值。", source: "appmedia" },
  { name: "松坂大輔", year: 1996, startRegion: "神奈川", scoutRegion: "東京", positions: ["投手"], recommendation: "A", reason: "體力與力分配（力配分）適合長局數，勝運（勝ち運）也能支援全隊。", source: "appmedia" },
  { name: "秋山幸二", year: 1978, startRegion: "熊本", scoutRegion: "熊本", positions: ["外野手"], recommendation: "A", reason: "高星數外野手，能力與特殊能力都很完整。", source: "game8" },
  { name: "稲尾和久", year: 1953, startRegion: "大分", scoutRegion: "大分", positions: ["投手"], recommendation: "A", reason: "高能力、高特殊能力，且大分是地方大會較容易推進的地域。", dlc: true, source: "game8" },
  { name: "江川卓", year: 1971, startRegion: "栃木", scoutRegion: "栃木", positions: ["投手"], recommendation: "A", reason: "高能力、高特殊能力，適合作為第一年開局核心。", dlc: true, source: "game8" },
  { name: "松井稼頭央（DLC）", year: 1991, startRegion: "大阪", scoutRegion: "大阪", positions: ["游擊手"], recommendation: "B", reason: "高星數游擊手，在強力野手排行中仍屬前段。", dlc: true, source: "game8" },
  { name: "坂本誠志郎", year: 2009, startRegion: "大阪", scoutRegion: "兵庫", positions: ["捕手"], recommendation: "B", reason: "現役選手中少見的捕手 B（キャッチャーB），負面能力也較少。", source: "appmedia" },
  { name: "源田壮亮", year: 2008, startRegion: "大分", scoutRegion: "大分", positions: ["游擊手"], recommendation: "B", reason: "守備與多個能提高戰術卡數值的特殊能力兼具。", source: "appmedia" },
  { name: "平良海馬", year: 2015, startRegion: "沖縄", scoutRegion: "沖縄", positions: ["投手"], recommendation: "B", reason: "無需 DLC，可接續山本由伸之後的強投養成路線。", source: "game8" },
  { name: "戸郷翔征", year: 2016, startRegion: "宮崎", scoutRegion: "宮崎", positions: ["投手"], recommendation: "B", reason: "無需 DLC，是 2014–2016 強投路線的第三年選擇。", source: "game8" },
  { name: "小山正明", year: 1950, startRegion: "兵庫", scoutRegion: "兵庫", positions: ["投手"], recommendation: "B", reason: "可串連金田正一與野村克也，組成連續三年的投捕補強路線。", dlc: true, source: "game8" },
];
