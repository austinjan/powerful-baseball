# 轉生球探（転生スカウト）地域資料研究

最後核對日期：2026-08-17

## 結論

- **規則已由 KONAMI 官方確認**：榮冠九人（栄冠ナイン）中，自隊在現代年份可能遇到任何轉生選手（転生選手）；過去年代則要同時符合出身地與年度；敵隊依出身高校所在地；轉生球探（転生スカウト）依選手的出身都道府縣。官方以田中將大為例，敵隊在北海道、Scout 在兵庫。[KONAMI FAQ](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202)
- **Game8 的 1,253 筆 JSON 沒有獨立 Scout 地域**。`col_3` 是頁面所稱的都道府縣／開局地域，對應出身高校所在地，不能改名後當成 Scout 地域。
- **存在一個可批次讀取、表面筆數完整的日文攻略來源**：バーチャル野球研究所的 [47 都道府縣索引](https://nijiholo5koshien.com/eikan-nain2026-2027-prefecture-list/) 連到每縣的「○○でスカウトできる転生選手一覧」。本站於 2026-08-17 逐頁解析，47 張 Scout 表合計剛好 **1,253 列**。
- 但這 1,253 列仍不是「可無條件直接上線」的資料集：它是第三方攻略表，未公開逐列證據、蒐集方法、資料授權或穩定 API；與 Game8 使用強鍵比對時也可見名稱、DLC 標記與星數的版本差異。可作為建置線索及交叉核對，不宜只因總筆數相同便宣稱逐列已驗證。
- 另一個近完整來源「あやとり」Google Sheet ver2.3 可批次取得 `出身地`，對 Game8 1,253 列可映射 1,251 列（99.84%），但作者明示「データの転載・再配布はご遠慮ください」，因此**不得直接匯入本站或再發布**。[工具說明與使用限制](https://note.com/ayatori_eikan/n/n0594daf42a63)

因此，現階段安全做法是保留 `scoutRegion` 為可空欄位，把未逐人驗證的資料顯示為「未確認」，並把現有地域明確標成「開局地域／出身高校所在地」。在取得資料授權或完成獨立逐人驗證前，不應推出聲稱完整的 Scout 地域篩選或排行。

## 本站 2026-08-17 實作快照

本站依上述邊界新增獨立、可空的 `scoutRegion`，沒有覆寫 Game8 的高校所在地／開局地域：

- 1,253 筆國內名錄中，1,241 筆可對到バーチャル野球研究所的逐地域 Scout 表，並連回對應都道府縣來源頁。
- 其餘 12 筆因名稱或版本差異無法安全對應，明示為「未確認」，不會回退使用高校所在地，也不納入 Scout 地域排行。
- 篩選與排行均只使用非空 `scoutRegion`；頁面顯示已確認分母，並明示這是第三方攻略快照，不是 KONAMI 官方逐人表。
- 這是可追溯的保守快照，不代表第三方資料已獲官方逐人驗證；後續若有遊戲畫面或更高優先來源，應逐筆更新並保留來源。

## 名詞與規則邊界

| 使用情境 | 遊戲採用的地域 | 證據 |
| --- | --- | --- |
| 現代年份的自隊新生 | 任何轉生選手都有可能出現 | [KONAMI FAQ](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202) |
| 過去年代的自隊新生 | 出身地與入學年度都要符合 | [KONAMI FAQ](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202) |
| 敵隊 | 出身高校所在地 | [KONAMI FAQ](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202) |
| 轉生球探（転生スカウト） | 出身都道府縣 | [KONAMI FAQ](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202) |

AppMedia 也把兩者分開：開局重抽（開始リセマラ）按入讀高中的都道府縣，Scout 按中學所在地／出身地；例如松坂大輔是「神奈川／東京」、阿部慎之助是「東京／千葉」、坂本誠志郎是「大阪／兵庫」。這些個案與官方定義一致，但 AppMedia 頁面只有推薦子集，不是完整名錄。[AppMedia 轉生 Scout 攻略](https://appmedia.jp/pawapuro2026-2027/80080750)

注意：「出身地」在此是遊戲中的 Scout 分類。它不必然等於一般人物資料所寫的出生地，也不能由出生地或高中所在地自行推算；若要建立逐人資料，應以遊戲畫面、明示 Scout 地域的資料，或能證明該欄是遊戲 Scout 分類的來源為準。

## Game8 JSON 欄位稽核

研究對象是 Game8 [轉生 OB 一覽與年代搜尋](https://game8.jp/eikan-nine/553745) 所載入的 JSON：

`https://assets.game8.jp/tools/script_template/eikan_nine_OB.json?version=31`

2026-08-17 取得的原始資料有 1,616 列，其中 `image_url` 非空、會由頁面搜尋工具顯示的為 1,253 列。這 1,253 列的非空主要欄位如下：

| JSON 欄位 | 顯示用途 | 非空筆數 | 是否 Scout 地域 |
| --- | ---: | ---: | --- |
| `title` | 選手名 | 1,253 | 否 |
| `col_1` | 守備位置 | 1,253 | 否 |
| `col_2` | 轉生年代 | 1,253 | 否 |
| `col_3` | 開局／高中所在地地域 | 1,253 | **否** |
| `col_4` | 星數 | 1,253 | 否 |
| `col_50` | DLC 標記 | 373 | 否 |
| `col_57` | 名稱歸併鍵 | 1,253 | 否 |
| `col_58` | 讀音 | 1,253 | 否 |

頁面 JavaScript 的 `processObData` 只把 `col_1` 至 `col_4`、`col_50`、`col_57`、`col_58` 映射成位置、年代、地域、星數、DLC、歸併名與讀音；沒有第二個地域欄位。其餘保留欄位不是隱藏的 Scout 地域。

可重現的反例是松坂大輔：Game8／開局地域為神奈川；[バーチャル野球研究所東京頁](https://nijiholo5koshien.com/eikan-nain2026-2027-tokyo/) 的 Scout 表列在東京，AppMedia 也列「開始リセマラ：神奈川／スカウト出現：東京」。所以不能把 `col_3` 當成 `scoutRegion`。

把可映射的 Game8 紀錄與「あやとり」Sheet `出身地` 比對，1,251 列中有 333 列不同，亦即 **26.6%**。若直接沿用 `col_3`，約四分之一紀錄會被放到錯誤 Scout 地域。

## 可批次取得來源評估

### 1. KONAMI 官方：規則可靠，沒有逐人表

[KONAMI FAQ](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202) 是最高優先的規則證據，但未提供《パワフルプロ野球2026-2027》全部轉生選手的逐人 Scout 地域。官方 [榮冠九人模式頁](https://www.konami.com/pawa/2026-2027/mode/eikan) 與 [2026-06-30 更新公告](https://www.konami.com/pawa/2026-2027/update/260630) 也沒有這張表；更新公告只提到 Scout 畫面的能力條顯示修正，不能支持地域名錄。

### 2. バーチャル野球研究所：47 頁合計 1,253 列

- 索引：[都道府縣別轉生選手一覽](https://nijiholo5koshien.com/eikan-nain2026-2027-prefecture-list/)，發布日 2026-07-06，列出 47 都道府縣。
- URL 規則：`https://nijiholo5koshien.com/eikan-nain2026-2027-{prefecture-slug}/`，例如 [東京](https://nijiholo5koshien.com/eikan-nain2026-2027-tokyo/)、[京都](https://nijiholo5koshien.com/eikan-nain2026-2027-kyoto/)、[長崎](https://nijiholo5koshien.com/eikan-nain2026-2027-nagasaki/)。
- 每頁「○○でスカウトできる転生選手一覧」後的表格通常是 `選手名／ポジション／星／年代／出身高校`；頁面所在縣就是 Scout 地域。
- 2026-08-17 的批次解析結果為 **47 頁、1,253 列**。山梨與香川頁的第二張表末欄誤標為 `出身地域`，必須依 h2 與第二張選手表判定，不能只依欄名解析。
- 以 Unicode 異體字正規化後，僅用名字與 Game8 名錄可直接對到 1,244／1,253 列（99.28%）；其餘需要處理登錄名、舊名或別名。若再加年代、星數、DLC 作強鍵，因網站間版本與標記差異，直接命中率反而下降，必須以穩定的本站 canonical ID 加人工核對。

這是目前找到唯一表面上覆蓋全部 1,253 列、且可從公開 HTML 批次讀取的逐人 Scout 來源。然而它沒有逐列來源、測試方法或明示的再利用授權；也觀察到同名不同版本被分到不同縣及少量來源衝突。因此可作「候選資料」，尚不足以單獨成為本站的最終事實來源。

### 3. あやとり搜尋工具：近完整，但禁止再發布

[工具說明](https://note.com/ayatori_eikan/n/n0594daf42a63) 連到公開唯讀的 [Google Sheet](https://docs.google.com/spreadsheets/d/165zRt_fQ9KoyPepIzSfkzKUj5zI4MW-eEvoYQp7YLxk/edit?usp=sharing)。Sheet 的 `統合DB` 有 `選手名`、`出身地`、`出身校県`、`年代` 等獨立欄位；說明也明確說「新入生スカウト検索」按 `出身地` 顯示。

- 版本：ver2.3；更新履歷記載 2026-08-12 發布。
- 對 Game8 1,253 列，經名稱歸併與已知別名對照後可映射 1,251 列（99.84%）。缺少小谷野栄一、栗山英樹。
- Google Sheet 的資料可透過 `gviz/tq?tqx=out:csv&sheet=統合DB` 批次讀取，但「技術上可下載」不等於「允許再發布」。作者明示要求複製後使用，並禁止資料轉載／再散布。
- 資料由一人蒐集，說明頁仍徵求玩家提供能力圖及出現條件；沒有逐列來源欄位。因此它適合查錯與交叉核對，不適合在未取得書面許可前整批匯入本站。

兩個缺名可用第一方人物資料補出「出身地為東京」的推論：[阪神官方小谷野栄一 2026 staff profile](https://m.hanshintigers.jp/data/staff_detail/2026/83)、[北海道日本火腿官方栗山英樹 profile](https://www.fighters.co.jp/news/detail/202300460873.html)。但這是把官方人物出身地套用 KONAMI 規則的推論，不等於已看到遊戲內 Scout 畫面，發布時仍應標記為「推定」。

### 4. AppMedia 與其他日文資料：適合抽查，不是完整來源

- [AppMedia 轉生 Scout 攻略](https://appmedia.jp/pawapuro2026-2027/80080750)：有推薦選手的「開始リセマラ／スカウト出現」雙欄，能驗證定義及少量重點選手；不是 1,253 人表。
- バーチャル野球研究所與「あやとり」之間的相同名字抽查並非完全一致；例如社群 Sheet 對少數外國出生選手給出「アメリカ」，47 縣表則必須落在日本都道府縣。這些例外不能在沒有遊戲畫面時自行裁決。
- 選取高星選手或推薦選手的 Note／攻略文章，不能用來計算完整覆蓋率或排行分母。

## 衝突與品質風險

1. **欄位語意衝突**：Game8 的「地域」是開局／高中所在地；Scout 是出身地。這不是同一欄位的不同譯名。
2. **版本衝突**：第三方站的星數、DLC 標記、登錄名與 Game8 不一定同步；以 `(name, year, star, DLC)` 直接 join 會漏配。
3. **同名／改名衝突**：イチロー／鈴木一朗、サブロー／大村三郎、山本昌／山本昌広等需要 canonical ID，不能只靠顯示名。
4. **同選手多版本衝突**：一般版與 DLC 版應共享人物的 Scout 地域；若同名版本被分到不同縣，應標為衝突而不是任選一筆。
5. **海外出生例外**：日本國內名錄仍可能有海外出生選手。KONAMI FAQ 只說 `出身県`，未說沒有日本都道府縣時如何處理；不要把海外值自動改成高中所在地。
6. **授權風險**：「あやとり」明示禁止轉載；バーチャル野球研究所也沒有提供可整批再利用的授權。來源可被引用，不代表其整張資料表可複製發布。

## 本站安全實作建議

### 現在可以做

1. 將現有 `region` 顯示名改得更精確：`開局地域（出身高校所在地）`，保留原 Game8 來源。
2. 新增獨立、可空的 `scoutRegion`，並連同以下來源資訊保存：
   - `scoutRegionStatus`: `verified | inferred | conflicted | unknown`
   - `scoutRegionSourceUrl`
   - `scoutRegionSourceCheckedAt`
   - `scoutRegionSourceVersion`
3. 未確認者在個人頁顯示「Scout 地域：未確認」，不要隱藏成空白，也不要回退到開局地域。
4. 僅讓 `verified` 進入 Scout 地域篩選及排行；頁面同時顯示「已確認 X／1,253」。`inferred` 可另外切換顯示，但不得混入已驗證分母。
5. `conflicted` 顯示「來源衝突」，列出各來源值與連結；在裁決前排除於排行。

### 上線完整篩選前的門檻

- 取得バーチャル野球研究所或「あやとり」作者的明確再利用許可；或獨立重建資料。
- 為每個 canonical player ID 保存至少一個可追溯來源，重要衝突以遊戲內 Scout 畫面優先。
- 逐項處理別名、舊名、一般版／DLC 版，確認同一人物只維護一個 Scout 地域事實。
- 對 1,253 筆執行完整性檢查：無未知、無無法解釋的多地域、所有值屬 47 都道府縣或明確的海外／不可 Scout 狀態。
- 固定資料快照與版本日期，遊戲更新後重新抽查；不要直接依賴會變動的遠端 JSON、Sheet 或 HTML 作即時正式資料庫。

## 最終判定

| 問題 | 判定 |
| --- | --- |
| KONAMI 是否有完整逐人 Scout 表？ | 沒有找到；只有規則。 |
| Game8 1,253 筆 JSON 是否含獨立 Scout 欄？ | 沒有。 |
| 是否有可批次取得、筆數覆蓋 1,253 的來源？ | 有；バーチャル野球研究所 47 頁合計 1,253 列。 |
| 是否可直接把該資料視為 1,253 筆已驗證真值？ | 不可；第三方、無逐列證據，且需別名與版本對照。 |
| 是否可直接匯入「あやとり」Sheet？ | 不可；作者明示禁止轉載／再散布。 |
| 現有 Game8 地域能否充當 Scout 地域？ | 不可；1,251 筆可比資料中有 333 筆不同。 |
| 現在最安全的產品行為 | 分開兩種地域；Scout 未確認顯示未知並排除於篩選／排行。 |

## 來源清單

- [KONAMI：プロ野球スピリッツ2026 FAQ（同頁明示榮冠九人地域規則）](https://www.konami.com/games/2026_support/faq/0/jp/ja/ps5/item?no=202)
- [KONAMI：《パワフルプロ野球2026-2027》榮冠九人模式](https://www.konami.com/pawa/2026-2027/mode/eikan)
- [KONAMI：2026-06-30 更新公告](https://www.konami.com/pawa/2026-2027/update/260630)
- [Game8：轉生 OB 一覽與年代搜尋](https://game8.jp/eikan-nine/553745)
- [Game8：頁面使用的 JSON（version=31）](https://assets.game8.jp/tools/script_template/eikan_nine_OB.json?version=31)
- [バーチャル野球研究所：47 都道府縣索引](https://nijiholo5koshien.com/eikan-nain2026-2027-prefecture-list/)
- [バーチャル野球研究所：東京都頁（同頁並列開局與 Scout 表）](https://nijiholo5koshien.com/eikan-nain2026-2027-tokyo/)
- [あやとり：榮冠九人轉生選手搜尋工具說明、版本與限制](https://note.com/ayatori_eikan/n/n0594daf42a63)
- [あやとり：公開唯讀 Google Sheet](https://docs.google.com/spreadsheets/d/165zRt_fQ9KoyPepIzSfkzKUj5zI4MW-eEvoYQp7YLxk/edit?usp=sharing)
- [AppMedia：轉生 Scout 推薦選手與技巧](https://appmedia.jp/pawapuro2026-2027/80080750)
