//モジュール「VSCODE」にはVSコード拡張性APIが含まれます
//モジュールをインポートし、以下のコードのエイリアスvScodeで参照してください
import * as vscode from 'vscode';
import { Commands } from './commands';

//この方法は、拡張機能がアクティブ化されたときに呼び出されます
//拡張機能がアクティブ化されますコマンドが最初に実行されたとき
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(Commands.VerticalWriting, () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const text = document.getText();
			const verticalText = text.split('').reverse().join('\n');
			editor.edit(editBuilder => {
				const fullRange = new vscode.Range(
					document.positionAt(0),
					document.positionAt(text.length)
				);
				editBuilder.replace(fullRange, verticalText);
			});
		}
	});
	context.subscriptions.push(disposable);
}