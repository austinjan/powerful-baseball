export type Category = "投手" | "野手" | "捕手" | "打擊" | "守備";

export type ScoutNote = {
  japanese: string;
  chinese: string;
  ability: string;
  importance: 1 | 2 | 3 | 4 | 5;
  categories: Category[];
};

export const scoutNotes: ScoutNote[] = [
  { japanese: "好リードが光る", chinese: "引導配球出色", ability: "捕手 A／B（キャッチャーA／B）", importance: 5, categories: ["野手", "捕手", "守備"] },
  { japanese: "打席での迫力が他と違う", chinese: "打席氣勢與眾不同", ability: "威壓感（威圧感）", importance: 5, categories: ["野手", "打擊"] },
  { japanese: "ノビのある直球が持ち味", chinese: "直球尾勁出色", ability: "直球尾勁 A／B（ノビA／B）", importance: 5, categories: ["投手"] },
  { japanese: "奪三振力が高い", chinese: "三振能力出色", ability: "奪三振（奪三振）", importance: 5, categories: ["投手"] },
  { japanese: "強打者相手にも臆せぬ投球", chinese: "面對強打者也毫不畏懼", ability: "對強打者（対強打者○）", importance: 5, categories: ["投手"] },
  { japanese: "中学生とは思えぬ威圧感", chinese: "有不像國中生的威壓感", ability: "威壓感（威圧感）", importance: 5, categories: ["投手"] },
  { japanese: "天性のヒットメーカー", chinese: "天生的安打製造機", ability: "安打型打者（アベレージヒッター）", importance: 4, categories: ["野手", "打擊"] },
  { japanese: "天性のホームランバッター", chinese: "天生的全壘打者", ability: "強力打者（パワーヒッター）", importance: 4, categories: ["野手", "打擊"] },
  { japanese: "流し方向にも強い打球", chinese: "反方向也能打出強勁球", ability: "廣角打法（広角打法）", importance: 4, categories: ["野手", "打擊"] },
  { japanese: "高い守備センスが魅力", chinese: "高超守備感覺很有魅力", ability: "守備職人（守備職人）", importance: 4, categories: ["野手", "守備"] },
  { japanese: "送球の正確さがウリ", chinese: "傳球準確是賣點", ability: "傳球 A／B（送球A／B）", importance: 4, categories: ["野手", "守備"] },
  { japanese: "矢のような送球見せる", chinese: "展現箭一般的傳球", ability: "雷射肩（レーザービーム）", importance: 4, categories: ["野手", "守備"] },
  { japanese: "盗塁のセンスあり", chinese: "有盜壘天分", ability: "盜壘 A／B（盗塁A／B）", importance: 4, categories: ["野手"] },
  { japanese: "チャンスの場面に強い", chinese: "得點機會表現強", ability: "得點機會 A／B（チャンスA／B）", importance: 4, categories: ["野手", "打擊"] },
  { japanese: "キレのある変化球が持ち味", chinese: "變化球銳利", ability: "變化球銳度（キレ○）", importance: 4, categories: ["投手"] },
  { japanese: "ピンチの場面に強い", chinese: "危機場面表現強", ability: "對危機 A／B（対ピンチA／B）", importance: 4, categories: ["投手"] },
  { japanese: "左打者を苦にしない", chinese: "不怕左打者", ability: "對左打者 A／B（対左打者A／B）", importance: 4, categories: ["投手"] },
  { japanese: "将来性を感じる", chinese: "感受到未來潛力", ability: "較容易覺醒（覚醒）", importance: 4, categories: ["投手", "野手"] },
  { japanese: "彼は「天才」なのかもしれない", chinese: "他也許是天才", ability: "可能是天才肌（天才肌）", importance: 4, categories: ["投手", "野手"] },
  { japanese: "緩急をつけた投球が光る", chinese: "善用快慢節奏", ability: "緩急（緩急○）", importance: 3, categories: ["投手"] },
  { japanese: "利腕から対角線への角度ある投球が魅力", chinese: "從慣用手側投向對角線的角度球很有魅力", ability: "交叉火力（クロスファイヤー）", importance: 3, categories: ["投手"] },
  { japanese: "厳しい内角攻めが得意", chinese: "擅長嚴厲攻擊內角", ability: "內角攻擊（内角攻め）", importance: 3, categories: ["投手"] },
  { japanese: "尻上がりに調子を上げる", chinese: "越投狀態越好", ability: "漸入佳境（尻上がり）", importance: 3, categories: ["投手"] },
  { japanese: "球持ちの良さがウリ", chinese: "持球時間是賣點", ability: "持球（球持ち○）", importance: 3, categories: ["投手"] },
  { japanese: "直球と変化球が見分けづらいフォーム", chinese: "直球與變化球難以從動作判斷", ability: "出手一致（リリース○）", importance: 3, categories: ["投手"] },
  { japanese: "直球にジャイロ回転がかかる", chinese: "直球帶有陀螺旋轉", ability: "陀螺球（ジャイロボール）", importance: 3, categories: ["投手"] },
  { japanese: "疲れ知らずの投球が魅力", chinese: "不知疲倦的投球很有魅力", ability: "根性（根性○）", importance: 3, categories: ["投手"] },
  { japanese: "闘志あふれる投球が特徴的", chinese: "充滿鬥志的投球很有特色", ability: "鬥志（闘志）", importance: 3, categories: ["投手"] },
  { japanese: "ド真ん中への失投が少ない", chinese: "投到正中央的失投較少", ability: "逃球（逃げ球）", importance: 3, categories: ["投手"] },
  { japanese: "低めへの制球が良い", chinese: "低角度控球良好", ability: "低球（低め○）", importance: 3, categories: ["投手"] },
  { japanese: "味方打線の援護を呼び込む投球", chinese: "能引來隊友火力支援的投球", ability: "勝運（勝ち運）", importance: 3, categories: ["投手"] },
  { japanese: "芸術的な流し打ち", chinese: "藝術般的反方向打擊", ability: "反方向打擊（流し打ち）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "好投手にも果敢に立ち向かう", chinese: "勇於挑戰強投", ability: "對王牌（対エース○）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "初球逃さぬ一振り見せる", chinese: "不放過第一球", ability: "第一球（初球○）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "走塁技術が高い", chinese: "跑壘技術高", ability: "跑壘 A／B（走塁A／B）", importance: 3, categories: ["野手"] },
  { japanese: "チャンスの起点を作る打撃", chinese: "能以打擊創造得分機會", ability: "機會製造者（チャンスメーカー）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "引っ張り方向に強い打球", chinese: "拉打方向球勢強", ability: "拉打型打者（プルヒッター）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "変化球への対応力は見事", chinese: "應對變化球的能力出色", ability: "對變化球（対変化球○）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "見事な内角さばきが好印象", chinese: "處理內角球很漂亮", ability: "內角球打者（インコースヒッター）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "ライナー性の強い打球が打てる", chinese: "能打出強勁平飛球", ability: "平飛球型打者（ラインドライブ）", importance: 3, categories: ["野手", "打擊"] },
  { japanese: "安定して速い球を投げられる", chinese: "穩定投出快速球", ability: "球速穩定（球速安定）", importance: 2, categories: ["投手"] },
  { japanese: "打たれても動じない", chinese: "被打也不動搖", ability: "抗打擊 A／B（打たれ強さA／B）", importance: 2, categories: ["投手"] },
  { japanese: "重い球質が魅力", chinese: "沉重球質很有魅力", ability: "重球（重い球）", importance: 2, categories: ["投手"] },
  { japanese: "クイックモーションが良い", chinese: "快速投球動作出色", ability: "快速投球 A／B（クイックA／B）", importance: 2, categories: ["投手"] },
  { japanese: "けん制動作が速い", chinese: "牽制動作迅速", ability: "牽制（牽制○）", importance: 2, categories: ["投手"] },
  { japanese: "打ってからの走り出しが早い", chinese: "擊球後起跑迅速", ability: "內野安打（内野安打○）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "追い込まれても強い打撃見せる", chinese: "被兩好球追逼後仍能頑強打擊", ability: "纏鬥（粘り打ち）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "思わぬ一発が魅力", chinese: "意外的一發很有魅力", ability: "意外性（意外性）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "際どいボール球も見送れる", chinese: "能放過邊角壞球", ability: "選球眼（選球眼）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "際どい球もカットして粘る", chinese: "能把邊角球破壞掉繼續纏鬥", ability: "破壞打擊（カット打ち）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "サヨナラのチャンスを逃さない", chinese: "不錯過再見機會", ability: "再見男（サヨナラ男）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "外めの球にも対応できる", chinese: "能應付外角球", ability: "外角球打者（アウトコースヒッター）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "代打の切り札として活躍", chinese: "作為代打王牌活躍", ability: "代打（代打○）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "高めの球に強い", chinese: "擅長高球", ability: "高球打者（ハイボールヒッター）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "チームの盛り上げ役としても活躍", chinese: "也是帶動球隊氣氛的角色", ability: "氣氛（ムード○）", importance: 2, categories: ["野手"] },
  { japanese: "歳の割にシブい打撃が印象的", chinese: "年紀雖小卻有老練打擊", ability: "老練打擊（いぶし銀）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "バントの技術が高い", chinese: "短打技術高", ability: "短打（バント○）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "低めの球に強い", chinese: "擅長低球", ability: "低球打者（ローボールヒッター）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "左投手を苦にしない", chinese: "不怕左投手", ability: "對左投手 A／B（対左投手A／B）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "負けていても最後まであきらめない", chinese: "落後時也不放棄", ability: "逆境（逆境○）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "満塁の場面に強い打撃見せる", chinese: "滿壘時表現強", ability: "滿壘男（満塁男）", importance: 2, categories: ["野手", "打擊"] },
  { japanese: "塁上で存在感を見せる", chinese: "在壘上展現存在感", ability: "擾亂（かく乱）", importance: 2, categories: ["野手"] },
  { japanese: "中学では主将を務める", chinese: "國中時擔任隊長", ability: "無對應特殊能力", importance: 1, categories: ["投手", "野手"] },
  { japanese: "副キャプテンを務める", chinese: "擔任副隊長", ability: "無對應特殊能力", importance: 1, categories: ["投手", "野手"] },
  { japanese: "練習への取り組み姿勢が良い", chinese: "練習態度良好", ability: "無對應特殊能力", importance: 1, categories: ["投手", "野手"] },
];

export const categoryLabels: Record<Category, string> = {
  投手: "投手",
  野手: "野手",
  捕手: "捕手",
  打擊: "打撃",
  守備: "守備",
};

export const importanceLabels = {
  5: "最優先",
  4: "高",
  3: "実用",
  2: "条件次第",
  1: "低",
} as const;
