//モジュール「VSCODE」にはVSコード拡張性APIが含まれます
//モジュールをインポートし、以下のコードのエイリアスvScodeで参照してください
「vscode」からvscodeとして *インポート。

//この方法は、拡張機能がアクティブ化されたときに呼び出されます
//拡張機能がアクティブ化されますコマンドが最初に実行されたとき
エクスポート関数Activate（context：vscode.extensionContext）{

//コンソールを使用して診断情報（Console.log）とエラー（Console.Error）を出力します
//このコード行は、拡張機能がアクティブ化されたときにのみ実行されます
console.log（ 'おめでとう、あなたの拡張機能 "zircon-lang-editor"がアクティブになりました！'）;

//コマンドはpackage.jsonファイルで定義されています
//次に、登録コマンドでコマンドの実装を提供します
// commandIdパラメーターは、package.jsonのコマンドフィールドと一致する必要があります
Disapleable = vscode.commands.registercommand（ 'zircon-lang-editor.helloworld'、（）=> {
//ここに配置するコードは、コマンドが実行されるたびに実行されます
//ユーザーにメッセージボックスを表示します
vscode.window.showinformationmessage（ 'zircon-lang-editor！' Hello World！ '）;
}）;

context.subscriptions.push（desurable）;
}

//この方法は、拡張機能が無効になっているときに呼び出されます
エクスポート関数Deactivate（）{}