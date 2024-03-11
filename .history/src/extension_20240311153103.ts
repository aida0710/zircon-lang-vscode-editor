//モジュール「VSCODE」にはVSコード拡張性APIが含まれます
//モジュールをインポートし、以下のコードのエイリアスvScodeで参照してください
import * as vscode from 'vscode';
import { Commands } from './commands';

//この方法は、拡張機能がアクティブ化されたときに呼び出されます
//拡張機能がアクティブ化されますコマンドが最初に実行されたとき
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(Commands.VerticalWriting, () => {
		//縦書きにしたい

		vscode.window.showInformationMessage('Hello World from zircon-lang-editor!');
	});

	context.subscriptions.push(disposable);
}