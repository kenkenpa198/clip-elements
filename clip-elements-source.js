// 即時関数で処理を実行する
javascript:(
    function(){
        // 要素を取得
        const GET_SELECTOR = '.mw-headline';
        let elements = document.querySelectorAll(GET_SELECTOR);

        // 要素が取得できていない場合はアラートを表示して終了
        if (!(elements.length)) {
            alert('要素を取得できませんでした。\nコード内で指定されているクラス要素がページ上に存在するか確認してください。');
            return;
        }

        // 要素内のテキストを配列化
        let texts = [];
        for (let i = 0; i < elements.length; i++) {
            texts.push(elements[i].innerText);
        }

        // 配列をカンマ・改行区切りで連結
        let result = texts.join(',\n') + '\n';

        // クリップボードへコピーする
        try {
            navigator.clipboard.writeText(result);
        } catch (e) {
            alert('クリップボードへの書き込みに失敗しました。\n' + e);
            return;
        }

        return;
    }
)();
