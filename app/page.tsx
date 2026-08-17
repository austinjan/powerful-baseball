export const dynamic = "force-static";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const homeHref = `${basePath}/`;
  const scoutingHref = basePath ? `${basePath}/scouting.html` : "/scouting";
  const abilitiesHref = basePath ? `${basePath}/special-abilities.html` : "/special-abilities";
  const reincarnatedHref = basePath ? `${basePath}/reincarnated-players.html` : "/reincarnated-players";

  return (
    <main>
      <section className="home-hero">
        <nav className="topline" aria-label="主題快速連結">
          <a className="home-brand" href={homeHref} aria-label="榮冠作戰室首頁">
            <span className="brand-mark">PB</span>
            <span lang="ja">栄冠ナイン<span lang="zh-Hant">（榮冠九人）</span> · 2026–2027</span>
          </a>
          <a className="home-feature-link" href={reincarnatedHref}>
            <span lang="ja">強力な転生選手</span><span lang="zh-Hant">（強力轉生選手）</span> <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <p className="eyebrow">POWERFUL BASEBALL FIELD NOTES</p>
        <p className="lede">遊戲名詞以日文為主並附中文，攻略說明使用繁體中文，手機上也能在球探畫面前立刻查。</p>
      </section>

      <section className="topic-section" aria-labelledby="topics-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE TOPICS</p>
            <h2 id="topics-title">主題探索</h2>
          </div>
          <span className="topic-count">03 / 持續更新</span>
        </div>

        <a className="topic-card" href={scoutingHref}>
          <div className="topic-number">01</div>
          <div className="topic-content">
            <div className="topic-tag" lang="ja">新入生スカウト<span lang="zh-Hant">（新生球探）</span></div>
            <h3><span lang="ja">寸評</span>（評語）速查</h3>
            <p>從日文<span lang="ja">寸評</span>找到代表能力，依推薦度排序、分類篩選，決定這一趟該把誰帶回來。</p>
            <span className="topic-cta">開始探索 <span aria-hidden="true">↗</span></span>
          </div>
          <div className="baseball-seam" aria-hidden="true" />
        </a>

        <a className="topic-card ability-topic-card" href={abilitiesHref}>
          <div className="topic-number">02</div>
          <div className="topic-content">
            <div className="topic-tag" lang="ja">特殊能力</div>
            <h3><span lang="ja">特殊能力</span><span lang="zh-Hant">（特能）</span></h3>
            <p>248 個金特、青特、紅特與其他球員特性，日中名稱、實際影響與<span lang="ja">栄冠ナイン</span>（榮冠九人）判讀一次查清楚。</p>
            <span className="topic-cta">開啟能力速查 <span aria-hidden="true">↗</span></span>
          </div>
          <div className="baseball-seam" aria-hidden="true" />
        </a>

        <a className="topic-card reincarnated-topic-card" href={reincarnatedHref}>
          <div className="topic-number">03</div>
          <div className="topic-content">
            <div className="topic-tag" lang="ja">転生選手<span lang="zh-Hant">（轉生選手）</span></div>
            <h3>強力轉生選手</h3>
            <p>從姓名、地域與守備位置找出強力候選，搭配推薦度，快速決定下一趟轉生球探（転生スカウト）的目的地。</p>
            <span className="topic-cta">尋找選手 <span aria-hidden="true">↗</span></span>
          </div>
          <div className="baseball-seam" aria-hidden="true" />
        </a>
      </section>

      <footer>
        <span>POWERFUL BASEBALL</span>
        <span>非官方攻略筆記</span>
      </footer>
    </main>
  );
}
