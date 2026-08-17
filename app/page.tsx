export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="topline">
          <span className="brand-mark">PB</span>
          <span>栄冠ナイン · 2026–2027</span>
        </div>
        <p className="eyebrow">POWERFUL BASEBALL FIELD NOTES</p>
        <h1 lang="ja">選手を知れば、<br />すべての判断が変わる。</h1>
        <p className="lede" lang="ja">日本語を中心に、繁体字中国語を参考併記。スカウト画面を見ながらスマートフォンですぐ確認できます。</p>
        <p className="zh-reference hero-zh" lang="zh-Hant">中文參考｜看懂球員，才能做出每一個正確決定。</p>
      </section>

      <section className="topic-section" aria-labelledby="topics-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE TOPICS</p>
            <h2 id="topics-title" lang="ja">テーマを探す</h2>
            <p className="zh-reference" lang="zh-Hant">中文參考｜主題探索</p>
          </div>
          <span className="topic-count">02 / 随時更新</span>
        </div>

        <a className="topic-card" href="/scouting">
          <div className="topic-number">01</div>
          <div className="topic-content">
            <div className="topic-tag" lang="ja">新入生スカウト</div>
            <h3 lang="ja">寸評早見表</h3>
            <p lang="ja">日本語の寸評から対応する能力を確認。おすすめ度や分類で絞り込み、スカウトする選手を判断できます。</p>
            <p className="zh-reference" lang="zh-Hant">中文參考｜從日文寸評找到代表能力，依推薦度與分類快速選人。</p>
            <span className="topic-cta" lang="ja">早見表を開く <span aria-hidden="true">↗</span></span>
          </div>
          <div className="baseball-seam" aria-hidden="true" />
        </a>

        <a className="topic-card ability-topic-card" href="/special-abilities">
          <div className="topic-number">02</div>
          <div className="topic-content">
            <div className="topic-tag" lang="ja">特殊能力</div>
            <h3 lang="ja">金特・青特</h3>
            <p lang="ja">標準能力158個を、日本語名・実際の効果・栄冠ナインでの評価から検索できます。</p>
            <p className="zh-reference" lang="zh-Hant">中文參考｜158 個標準金特與藍特，附實際影響及榮冠評價。</p>
            <span className="topic-cta" lang="ja">能力早見表を開く <span aria-hidden="true">↗</span></span>
          </div>
          <div className="baseball-seam" aria-hidden="true" />
        </a>
      </section>

      <footer>
        <span>POWERFUL BASEBALL</span>
        <span lang="ja">非公式攻略ノート · 中文参考付き</span>
      </footer>
    </main>
  );
}
