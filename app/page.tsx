export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="topline">
          <span className="brand-mark">PB</span>
          <span>榮冠九人 · 2026–2027</span>
        </div>
        <p className="eyebrow">POWERFUL BASEBALL FIELD NOTES</p>
        <h1>每一個決定，<br />都從看懂球員開始。</h1>
        <p className="lede">中日對照、快速判讀、手機上也能在球探畫面前立刻查。</p>
      </section>

      <section className="topic-section" aria-labelledby="topics-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE TOPICS</p>
            <h2 id="topics-title">主題探索</h2>
          </div>
          <span className="topic-count">02 / 持續更新</span>
        </div>

        <a className="topic-card" href="/scouting">
          <div className="topic-number">01</div>
          <div className="topic-content">
            <div className="topic-tag">新生探索 · 新入生スカウト</div>
            <h3>寸評速查</h3>
            <p>從日文寸評找到代表能力，依推薦度排序、分類篩選，決定這一趟該把誰帶回來。</p>
            <span className="topic-cta">開始探索 <span aria-hidden="true">↗</span></span>
          </div>
          <div className="baseball-seam" aria-hidden="true" />
        </a>

        <a className="topic-card ability-topic-card" href="/special-abilities">
          <div className="topic-number">02</div>
          <div className="topic-content">
            <div className="topic-tag">特殊能力 · 特殊能力</div>
            <h3>金特・藍特</h3>
            <p>158 個標準能力，中日名稱、實際影響與榮冠實用評價一次查清楚。</p>
            <span className="topic-cta">開啟能力速查 <span aria-hidden="true">↗</span></span>
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
