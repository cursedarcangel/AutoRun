const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let compileandrun = vscode.commands.registerCommand('onerun.compileandrun', function () {
		let cmd = vscode.workspace.getConfiguration().inspect('onerun.config').workspaceValue;
		if (vscode.window.terminals.length == 0) {
			vscode.window.createTerminal("Terminal");
			vscode.window.terminals[0].show();
		} else {
			vscode.window.terminals[0].show();
		}
		vscode.window.terminals[0].sendText(cmd);
	});

	let configure = vscode.commands.registerCommand('onerun.configure', function () {
		if (vscode.workspace.workspaceFolders[0] == null) {
			vscode.window.showErrorMessage("Please open a project folder");
		} else {
			async function getConfig() {
				const cmd = await vscode.window.showInputBox({
					title: "What is the command to compile and run?",
					placeHolder: "./a.out"
				});
				vscode.workspace.getConfiguration().update('onerun.config', cmd);
			}
			getConfig();
		}
	});
	context.subscriptions.push(compileandrun, configure);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
