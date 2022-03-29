const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "autorun" is now active!');

	let compileandrun = vscode.commands.registerCommand('autorun.compileandrun', function () {
		vscode.window.showInformationMessage("Compile and Run");
	});

	let configure = vscode.commands.registerCommand('autorun.configure', function () {
		vscode.window.showInformationMessage('Start configuring');
	});
	context.subscriptions.push(compileandrun, configure);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
