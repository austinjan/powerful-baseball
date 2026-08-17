import type { Metadata } from "next";

export const dynamic = "force-static";

const title = "特殊イベント・年間スケジュール（特殊事件與年度日期）";
const description = "《パワフルプロ野球2026-2027》栄冠ナイン（榮冠九人）必停日期、隱藏事件、合宿、大會與季節事件手機速查。";

export const metadata: Metadata = {
  title: `${title}｜榮冠作戰室`,
  description,
  openGraph: { title, description, images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

type EventItem = {
  date: string;
  name: string;
  zh: string;
  detail: string;
  trigger?: "必停" | "藍格" | "白格" | "自動" | "條件";
};

const seasons: { id: string; months: string; label: string; events: EventItem[] }[] = [
  {
    id: "apr-jun",
    months: "4–6月",
    label: "新學年 · 夏季大會前",
    events: [
      { date: "4/1", name: "進級", zh: "升年級", detail: "剛好停下時，新二、三年級的練習效率小幅上升。", trigger: "必停" },
      { date: "4/8", name: "入学式", zh: "入學式", detail: "新生入部；不需要刻意停下。", trigger: "自動" },
      { date: "6/11–17", name: "勉強がしたい！", zh: "想讀書！", detail: "白格隨機事件；讀書與繼續練習各有不同效果及代價。", trigger: "白格" },
      { date: "6/26–7/2", name: "技術指導", zh: "技術指導", detail: "藍格隨機事件；取得指定經驗，並可能改善負面特殊能力（赤特）。", trigger: "藍格" },
    ],
  },
  {
    id: "jul-sep",
    months: "7–9月",
    label: "夏季大會 · 日本代表",
    events: [
      { date: "7月上旬", name: "夏の都道府県大会", zh: "夏季都道府縣大會", detail: "各攻略站的首戰日有差異，實際日期以遊戲內日程為準。", trigger: "條件" },
      { date: "7/7", name: "七夕", zh: "七夕", detail: "選擇全隊練習經驗、學力，或少數球員的信賴度／幹勁。", trigger: "自動" },
      { date: "7/21–30", name: "甲子園出場インタビュー", zh: "甲子園採訪", detail: "確定進入夏甲後，踩藍格隨機發生；可能取得全隊經驗及特殊能力。", trigger: "藍格" },
      { date: "7/25–29", name: "夏の合宿", zh: "夏季合宿", detail: "安排高價值練習圖示，為合宿取得特殊能力做準備。", trigger: "自動" },
      { date: "8/10・15・21", name: "特訓マス出現", zh: "地區限定特訓", detail: "球隊未進夏甲或已淘汰後，依地區在指定日剛好停下。", trigger: "必停" },
      { date: "8/27", name: "日本代表招集", zh: "日本代表召集", detail: "符合能力或夏甲表現條件的球員可能入選；派遣後於 9/6 歸隊。", trigger: "條件" },
      { date: "9/8–14", name: "技術指導", zh: "技術指導", detail: "第二次藍格隨機窗口，可取得經驗並改善負面特殊能力（赤特）。", trigger: "藍格" },
    ],
  },
  {
    id: "oct-dec",
    months: "10–12月",
    label: "秋季大會 · 冬季合宿",
    events: [
      { date: "10/10", name: "体育祭", zh: "體育祭", detail: "攻略資料記錄為隨機提高練習效率。", trigger: "自動" },
      { date: "10/26", name: "ドラフト会議", zh: "選秀會議", detail: "確認三年級畢業生的職棒選秀結果。", trigger: "自動" },
      { date: "11/3", name: "文化祭", zh: "文化祭", detail: "攻略資料記錄為隨機提高練習效率。", trigger: "自動" },
      { date: "11/18–24", name: "勉強がしたい！", zh: "想讀書！", detail: "第二次白格隨機窗口。", trigger: "白格" },
      { date: "11/25", name: "2学期末試験", zh: "第二學期期末考", detail: "依球員成績改變練習效率。", trigger: "自動" },
      { date: "12/10–14", name: "冬の合宿", zh: "冬季合宿", detail: "先準備符合培養方向的高價值練習圖示。", trigger: "自動" },
      { date: "12/24", name: "クリスマスイブ", zh: "平安夜", detail: "隨機回復體力／幹勁、提高全隊練習效率，或產生最多 4 個特訓格。", trigger: "必停" },
    ],
  },
  {
    id: "jan-mar",
    months: "1–3月",
    label: "春甲 · 畢業",
    events: [
      { date: "1/1", name: "おみくじ", zh: "新年抽籤", detail: "經過日期也可能發生，不需要剛好停下。", trigger: "自動" },
      { date: "1/25", name: "春の選抜高校野球の当落", zh: "春甲入選結果", detail: "經過日期即處理。", trigger: "自動" },
      { date: "2/1–10", name: "甲子園出場インタビュー", zh: "甲子園採訪", detail: "確定進入春甲後，踩藍格隨機發生。", trigger: "藍格" },
      { date: "2/18–24", name: "勉強がしたい！", zh: "想讀書！", detail: "第三次白格隨機窗口。", trigger: "白格" },
      { date: "2月最後一天", name: "特訓マス出現", zh: "特訓格出現", detail: "本作改為每年都有：平年 2/28、閏年 2/29。", trigger: "必停" },
      { date: "3/7", name: "卒業式", zh: "畢業典禮", detail: "三年級畢業並成為 OB。", trigger: "自動" },
      { date: "3/15", name: "世界大会", zh: "世界大會", detail: "2026、2030、2034…每四年一次；從 2026/4 開局首次可遇到 2030/3/15。", trigger: "必停" },
      { date: "3/18起", name: "春の甲子園", zh: "春季甲子園", detail: "實際比賽日期以遊戲內日程為準。", trigger: "條件" },
    ],
  },
];

export default function EventsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="events-page">
      <nav className="events-nav" aria-label="頁面導覽">
        <a href={`${basePath}/`} className="brand-link"><span className="brand-mark">PB</span><span>榮冠作戰室</span></a>
        <a href="#calendar">年度日曆</a>
      </nav>

      <header className="events-hero">
        <div>
          <p className="eyebrow">TOPIC 04 · EVENT CALENDAR</p>
          <h1><span lang="ja">特殊イベント</span><br /><span>年度日期</span></h1>
          <p>先分清楚必須停下、指定格隨機與經過觸發，避免錯過一年只有一次的關鍵事件。</p>
        </div>
        <div className="events-hero-date" aria-label="最重要日期摘要">
          <span>DON’T SKIP</span>
          <strong>12/24</strong>
          <p><span lang="ja">クリスマスイブ</span>（平安夜）必須剛好停下。</p>
        </div>
      </header>

      <section className="must-stop" aria-labelledby="must-stop-title">
        <div>
          <p className="eyebrow">STOP EXACTLY</p>
          <h2 id="must-stop-title">必停日期</h2>
        </div>
        <ol>
          <li><span>4/1</span><strong lang="ja">進級</strong><small>新二、三年級練習效率上升</small></li>
          <li><span>8/10・15・21</span><strong lang="ja">地域別特訓</strong><small>依地區與夏甲狀態決定日期</small></li>
          <li><span>12/24</span><strong lang="ja">クリスマスイブ</strong><small>練習效率、體力或特訓格</small></li>
          <li><span>2/28・29</span><strong lang="ja">月末特訓</strong><small>每年 2 月最後一天</small></li>
          <li><span>3/15</span><strong lang="ja">世界大会</strong><small>2026 起每四年一次</small></li>
        </ol>
      </section>

      <nav className="season-jump" aria-label="月份快速跳轉">
        {seasons.map((season) => <a key={season.id} href={`#${season.id}`}>{season.months}</a>)}
      </nav>

      <section className="calendar" id="calendar" aria-label="榮冠九人年度事件日曆">
        {seasons.map((season, seasonIndex) => (
          <article className="season-block" id={season.id} key={season.id}>
            <header>
              <span>0{seasonIndex + 1}</span>
              <div><h2>{season.months}</h2><p>{season.label}</p></div>
            </header>
            <div className="event-list">
              {season.events.map((event) => (
                <article className="event-row" key={`${event.date}-${event.name}`}>
                  <time>{event.date}</time>
                  <div>
                    <div className="event-name"><h3 lang="ja">{event.name}</h3><span>{event.zh}</span></div>
                    <p>{event.detail}</p>
                  </div>
                  {event.trigger && <span className={`trigger trigger-${event.trigger}`}>{event.trigger}</span>}
                </article>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="regional-training" aria-labelledby="regional-title">
        <div>
          <p className="eyebrow">REGIONAL HIDDEN DATE</p>
          <h2 id="regional-title">夏季隱藏特訓日</h2>
          <p>球隊未能參加夏甲或已遭淘汰後，必須剛好停在所屬地區的日期。成功時高機率出現最多 4 個特訓格（特訓マス）。</p>
        </div>
        <dl>
          <div><dt>8/10</dt><dd>北海道、岩手、宮城、山形、福島、長野</dd></div>
          <div><dt>8/15</dt><dd>青森、秋田</dd></div>
          <div><dt>8/21</dt><dd>其餘地區</dd></div>
        </dl>
        <p className="conflict-note">長野採 8/10：AppMedia 與 Ver.1.10 日文實玩一致；Game8 的地區表疑似漏列長野。</p>
      </section>

      <section className="events-caveat">
        <div><p className="eyebrow">SOURCE BOUNDARY</p><h2>日期很實用，<br />但不是官方保證。</h2></div>
        <div>
          <p>KONAMI 官方確認使用進行圖示（進行アイコン）推進日程，但沒有公開完整固定事件表。精確日期來自《パワプロ2026-2027》日文攻略與 Ver.1.10 實玩交叉核對。</p>
          <p>大會首戰日、訓練室（トレーニングルーム）與畢業後藍格事件仍有來源差異或驗證不足，因此沒有混入「必停日期」。</p>
        </div>
      </section>

      <section className="sources events-sources" aria-labelledby="events-sources-title">
        <p className="eyebrow">SOURCES · 2026-08-17 核對</p>
        <h2 id="events-sources-title">資料來源</h2>
        <div className="source-links">
          <a href="https://www.konami.com/pawa/2026-2027/mode/eikan" target="_blank" rel="noreferrer">KONAMI：栄冠ナイン官方介紹 ↗</a>
          <a href="https://game8.jp/eikan-nine/554833" target="_blank" rel="noreferrer">Game8：年間スケジュール ↗</a>
          <a href="https://appmedia.jp/pawapuro2026-2027/80062618" target="_blank" rel="noreferrer">AppMedia：イベント・隠しマス ↗</a>
          <a href="https://saiseikojo.com/eikan2019kouryaku-1/" target="_blank" rel="noreferrer">ゲーミング再生工場：Ver.1.10 年表 ↗</a>
        </div>
      </section>

      <footer><span>POWERFUL BASEBALL</span><span>最後核對 2026-08-17 · 非官方攻略筆記</span></footer>
    </main>
  );
}
