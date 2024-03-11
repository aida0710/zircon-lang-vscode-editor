import * as vscode from 'vscode';
import { Commands } from './commands';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand(Commands.VerticalWriting, () => {
        //縦書きにしたい

        vscode.window.showInformationMessage('Hello World from zircon-lang-editor!');
    });

    context.subscriptions.push(disposable);
}
