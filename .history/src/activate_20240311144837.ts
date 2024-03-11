import * as vscode from 'vscode';
import { Commands } from './commands';

//この方法は、拡張機能がアクティブ化されたときに呼び出されます
//拡張機能がアクティブ化されますコマンドが最初に実行されたとき

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand(Commands.VerticalWriting, () => {
        //縦書きにしたい

        //ここに配置するコードは、コマンドが実行されるたびに実行されます
        //ユーザーにメッセージボックスを表示します
        vscode.window.showInformationMessage('Hello World from zircon-lang-editor!');
    });

    context.subscriptions.push(disposable);
}
