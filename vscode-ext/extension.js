// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
		let doc = vscode.window.activeTextEditor.document;
		let editor = vscode.window.activeTextEditor;
		var j=0;
	
		editor.edit(editBuilder => {
			for(var i=0;i<doc.lineCount;i++)
			{
				var line = doc.lineAt(i);
				for(j=0;j<line.range.end.character;j++)
				{
					var startposition = new vscode.Position(i,j);
					var endingposition = new vscode.Position(i,j+1);
					var range = new vscode.Range(startposition,endingposition);
					var charac = editor.document.getText(range);
					if(charac == ';')
					{
						editBuilder.replace(range,'');
						console.log(startposition);
					}
	
				}
			}
		})
	}));
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
