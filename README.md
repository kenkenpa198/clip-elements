<!-- omit in toc -->
# clip-elements

ウェブページ上の指定クラス要素に含まれるテキストを連結し、クリップボードへ書き込む JavaScript のスニペットです。  
ブックマークレットとして利用します。

<!-- omit in toc -->
## 目次

- [1. 動作確認](#1-動作確認)
- [2. 編集するとき](#2-編集するとき)
- [3. 補足](#3-補足)
- [4. 参考文献](#4-参考文献)

## 1. 動作確認

1. 適当なページをブックマークする。
2. ブックマークを以下のとおり編集する。
    1. 名前: お好みの名前
    2. URL: [clip-elements.js](/clip-elements.js) の全文を挿入する。
3. [JavaScript - Wikipedia](https://ja.wikipedia.org/wiki/JavaScript) を開く。
4. 登録したブックマークをクリックする。
5. メモ帳などへペーストする。
6. 見出しテキスト（`mw-headline` クラス要素内のテキスト）がカンマ・改行区切りでペーストできたことを確認する。

※ ブックマークレットの実行に失敗した場合はアラートを表示します。内容を確認してもう一度実行してください。  
この他、正常に実行できなかった場合は [3. 補足](#3-補足) セクションを参照してください。

## 2. 編集するとき

動作を調整したい場合、以下の方法で編集～ブックマークレット化を行ってください。

1. [clip-elements-source](/clip-elements-source.js) を適宜編集する。
2. コメントを除去する。
3. [改行・空白・タブ削除ツール](https://html-css-javascript.com/n-space-tab/) で不要な改行と空白を除去する。
    1. `設定` の `改行` `タブ` `行頭・行末のスペース` へチェックを入れる。
    2. 左ペインにコードを挿入する。
    3. 右ペインに出力される。
4. [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/) にてブックマークレット化する。
    1. `Code` へコードを挿入する。
    2. `Generate Bookmarklet` をクリックする。
    3. `Output` に出力される。
5. テスト実行と同じ方法でブックマークへ登録・テストする。

## 3. 補足

- 以下の場合、アラートを表示して処理を終了します。
    - 定数 `GET_CLASS_NAME` で指定されているクラス要素がページ上に存在しなかった場合。
    - クリップボードへの書き込みに失敗した場合。
- 対象のページがアクティブになっていないとクリップボードへの書き込みが動作しないことを確認しています。
    - 正しくペーストできなかった場合、ウェブページ内のどこかをクリックした後に再度ブックマークレットを実行してください。
- HTTPS 通信環境でのみ実行できます。
    - HTTP 通信環境の場合、「クリップボードへの書き込みに失敗した場合」のアラートを表示して終了します。

## 4. 参考文献

- [Bookmarkletを作ろう(準備編） - Qiita](https://qiita.com/kanaxx/items/63debe502aacd73c3cb8)
- [ウェブページにある表をクリップボードにポチッとコピーするブックマークレットの巻](https://vucavucalife.com/table-wo-clipboard-ni-copy-surudakeno-bookmarklet/)
- [Chrome Dev Toolでブックマークレットを実行する - Qiita](https://qiita.com/kanaxx/items/0fe8e7e2deea482960b0)
- [Clipboard.writeText() - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Clipboard/writeText)
    - クリップボードへ書き込みを行うメソッド。
    - 開発者ツールで実行できないので注意。  
    参考: [navigator.clipboard.writeText() で「Document is not focused.」エラー - キリウ君が読まないノート](https://note.kiriukun.com/entry/20200908-document-is-not-focused-error-on-calling-navigator-clipboard-writetext)
    - このメソッドは HTTPS 通信環境での実行のみに対応。HTTP 通信環境下ではエラーを返す。  
    参考: [[JS] http環境ではnavigator.clipboard.writeTextがエラーになる - プロプログラマ -Flex,Air,C#,Oracle,HTML5+JS-](http://propg.ee-mall.info/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0/javascript/js-http%E7%92%B0%E5%A2%83%E3%81%A7%E3%81%AFnavigator-clipboard-writetext%E3%81%8C%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AB%E3%81%AA%E3%82%8B/)
- [改行・空白・タブ削除ツール｜ちょっと便利なツール・ジェネレーター置き場](https://html-css-javascript.com/n-space-tab/)
- [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)
