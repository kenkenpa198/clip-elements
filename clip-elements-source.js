// 即時関数で処理を実行する
javascript:(
    function(){
        // 要素を取得
        const ELEMENTS = document.getElementsByClassName('a-truncate-cut');

        // 要素内のテキストを配列化
        let texts = [];
        for (let i = 0; i < ELEMENTS.length; i++) {
            texts.push(ELEMENTS[i].innerText);
        }

        // 配列を連結
        let out_string = texts.join(',\n');

        // クリップボードへコピーする
        navigator.clipboard.writeText(out_string);
    }
)();
