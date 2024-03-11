//モジュール「VSCODE」にはVSコード拡張性APIが含まれます
//モジュールをインポートし、以下のコードのエイリアスvScodeで参照してください
import * as vscode from 'vscode';
import { Commands } from './commands';

//この方法は、拡張機能がアクティブ化されたときに呼び出されます
//拡張機能がアクティブ化されますコマンドが最初に実行されたとき
export function activate(context: vscode.ExtensionContext) {

	//コンソールを使用して診断情報（Console.log）とエラー（Console.Error）を出力します
	//このコード行は、拡張機能がアクティブ化されたときにのみ実行されます
	console.log('Congratulations, your extension "zircon-lang-editor" is now active!');

	//コマンドはpackage.jsonファイルで定義されています
	//次に、登録コマンドでコマンドの実装を提供します
	// commandIdパラメーターは、package.jsonのコマンドフィールドと一致する必要があります
	let disposable = vscode.commands.registerCommand(Commands, () => {
		//ここに配置するコードは、コマンドが実行されるたびに実行されます
		//ユーザーにメッセージボックスを表示します
		vscode.window.showInformationMessage('Hello World from zircon-lang-editor!');
	});

	context.subscriptions.push(disposable);
}

//この方法は、拡張機能が無効になっているときに呼び出されます
export function deactivate() { }
