<!-- omit in toc -->
# clip-elements

ウェブページ上の指定クラス要素に含まれるテキストを連結し、クリップボードへ書き込む JavaScript のスニペットです。  
ブックマークレットとして利用します。

## 1. テスト実行

1. 適当なページをブックマークする。
2. ブックマークを編集し、URL へ [clip-elements.js](/clip-elements.js) の全文を挿入する。
3. [Amazon トップページ](https://www.amazon.co.jp/) を開く。
4. 登録したブックマークをクリックする。
5. メモ帳などへペーストし、トップページの商品名（`a-truncate-cut` クラス要素内のテキスト）がカンマ・改行区切りでコピーできていることを確認する。

## 2. 編集するとき

動作を調整したい場合、以下の方法で編集～ブックマークレット化を行ってください。

1. [clip-elements-source](/clip-elements-source.js) を適宜編集する。
2. コメントを除去する。
    1. コメント除去の自動化はけっこう難しいみたいなので手動で除去したほうが安全かも。
3. [改行・空白・タブ削除ツール｜ちょっと便利なツール・ジェネレーター置き場](https://html-css-javascript.com/n-space-tab/) で不要な改行と空白を除去する。
    1. `設定` の `改行` `タブ` `行頭・行末のスペース` へチェックを入れる。
    2. 左ペインにコードを挿入する。
    3. 右ペインに出力される。
4. [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/) にてブックマークレット化する。
    1. `Code` へコードを挿入する。
    2. `Generate Bookmarklet` をクリックする。
    3. `Output` に出力される。
5. テスト実行と同じ方法でブックマークへ登録・テストする。

## 3. 参考文献

- [Bookmarkletを作ろう(準備編） - Qiita](https://qiita.com/kanaxx/items/63debe502aacd73c3cb8)
- [ウェブページにある表をクリップボードにポチッとコピーするブックマークレットの巻](https://vucavucalife.com/table-wo-clipboard-ni-copy-surudakeno-bookmarklet/)
- [改行・空白・タブ削除ツール｜ちょっと便利なツール・ジェネレーター置き場](https://html-css-javascript.com/n-space-tab/)
- [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)
- [Chrome Dev Toolでブックマークレットを実行する - Qiita](https://qiita.com/kanaxx/items/0fe8e7e2deea482960b0)
    - 当スクリプトで使用している `navigator.clipboard.writeText()` は開発者ツールで実行できないので注意。
    参考: [navigator.clipboard.writeText() で「Document is not focused.」エラー - キリウ君が読まないノート](https://note.kiriukun.com/entry/20200908-document-is-not-focused-error-on-calling-navigator-clipboard-writetext)
