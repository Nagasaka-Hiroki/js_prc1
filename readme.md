# JavaScriptの学習

## 主な参考URL
> - [MDN Web Docs](https://developer.mozilla.org/ja/)
> - [JavaScript Primer](https://jsprimer.net/)
> - [現代の JavaScript チュートリアル](https://ja.javascript.info/)

## わかりやすかったサイト
> - [https://blog.ver001.com/javascript-dragdrop-sort/](https://blog.ver001.com/javascript-dragdrop-sort/)

## minimaの装飾について
minimaのCSS（クラス情報など）の内容。全部マークダウンで書くとjavascripが使えない？なのでhtmlで書きたい。その際にテーマのminimaを上手く適応したいときに参照する情報がほしいのでメモする。

下記のURLに詳細（ソース）がある。
> - [https://github.com/jekyll/minima/tree/master/_sass/minima](https://github.com/jekyll/minima/tree/master/_sass/minima)
> - [https://github.com/jekyll/minima/blob/master/assets/css/style.scss](https://github.com/jekyll/minima/blob/master/assets/css/style.scss)

上記に諸々書いている。（または一度ビルドしてクラスなどをみると楽かもしれない）

デフォルトのマークダウンレンダラーはKramdownらしい。
> - [http://jekyllrb-ja.github.io/docs/configuration/markdown/](http://jekyllrb-ja.github.io/docs/configuration/markdown/)  
> - [https://kramdown.gettalong.org/index.html](https://kramdown.gettalong.org/index.html)  
> - [https://kramdown.gettalong.org/converter/html.html](https://kramdown.gettalong.org/converter/html.html)  
上記によれば一応クラスの追加の仕方などはある。（しかしCasvasとかはないのだろうか？）

とりあえずめったにクラス名などは重複しないだろうから特に考えない。
自分でCSSを追加する場合は`custom-styles.scss`を使うのがいいだろうか？

gihubのリポジトリを読んでいると、おそらく`_sass/minima`のディレクトリを作成、`_sass/minima/custom-styles.scss`のファイルを作成してそこに上書きしていくのがいい感じ？  
minimaのデフォルト値を変えるには、`_sass/minima/custom-variables.scss`を作成し値をオーバーライドすることができるそう。  
→上手く行かなかった。とりあえずcssは学習の主眼ではないので一度無視する。

## Github Actionについて
GitHubフリーではGithub Actionの時間が1月あたりで決まっている。むやみに使わない。

## ドラッグアンドドロップの練習
> - [JavaScriptでドラッグ＆ドロップによるリストの並び替えを実装する例](https://blog.ver001.com/javascript-dragdrop-sort/)
> - [https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations](https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)

サイトを参考にリストをドラッグアンドドロップで操作してみる。  
→1つ目のリンクは上手く動かなかった。なぜ？

`onmousedown`に関して
> - [https://syncer.jp/javascript-reference/event-handler/onmousedown](https://syncer.jp/javascript-reference/event-handler/onmousedown)  

- querySelectorAll
> - [https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll](https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll)  

- イベントハンドラについて
> - [https://phpjavascriptroom.com/?t=js&p=event](https://phpjavascriptroom.com/?t=js&p=event)  

ややこしいのはイベントハンドラは、ハンドラ名とプロパティ名があること。すこしややこしいが、プロパティ名は基本的に"on"+ハンドラ名（今の所自分が知る限り）なのでそう思っておく。

- からのリストの追加
`<li style="height: 0em;border:0; list-style-type:none;">&nbsp;</li>`<br>
これを入れるだけでかなり動きが変わった。html側で動作が改善されるいい例だと思った。
しかし、以前入れ替わりの挙動が変。リストとリストのあいだの距離が原因か？  
リストの間隔の調整は以下。
> - [https://qumeru.com/magazine/21](https://qumeru.com/magazine/21)  

- 要素の右寄せ
> - [https://www.acky.info/tips/css/00002.html](https://www.acky.info/tips/css/00002.html)  

- ondragstartに関して
> - [http://alphasis.info/2014/03/javascript-dom-event-ondragstart/](http://alphasis.info/2014/03/javascript-dom-event-ondragstart/)  

- dataTransfer
> - [https://developer.mozilla.org/ja/docs/Web/API/DataTransfer](https://developer.mozilla.org/ja/docs/Web/API/DataTransfer)  
別になくても動いたのはなぜだろう？

- draggableプロパティ
なくても動作する。しかしあったほうが動作が安定する。

- ondragover
ondragoverイベントのpreventDefaultをなくすとドロップイベントが動かなくなった。

- 8. ondragover以降のスクリプトについて
何故か`<script>`タグでソースが指定できなくなった。なぜ？  
直接打ち込むと動いた。

## 見え方をデータに変換する
