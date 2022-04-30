(async () => {
	jdk.log = document.getElementById('javaConsole');
	await jdk.init('./jdk');
	jdk.workerPath = 'java2js_worker.js';

	async function run() {
		jdk.log.value = '';
		let translation = await jdk.transpile(file0.value);
		console.log(translation);
		jdk.run();
	}

	let file0 = document.getElementById('javaFile');
	file0.onchange = run;

	run();
})();

// Adds support for tabs in the textarea.
// https://css-tricks.com/snippets/javascript/support-tabs-in-textareas/

HTMLTextAreaElement.prototype.getCaretPosition = function () {
	//return the caret position of the textarea
	return this.selectionStart;
};
HTMLTextAreaElement.prototype.setCaretPosition = function (position) {
	//change the caret position of the textarea
	this.selectionStart = position;
	this.selectionEnd = position;
	this.focus();
};
HTMLTextAreaElement.prototype.hasSelection = function () {
	//if the textarea has selection then return true
	if (this.selectionStart == this.selectionEnd) {
		return false;
	} else {
		return true;
	}
};
HTMLTextAreaElement.prototype.getSelectedText = function () {
	//return the selection text
	return this.value.substring(this.selectionStart, this.selectionEnd);
};
HTMLTextAreaElement.prototype.setSelection = function (start, end) {
	//change the selection area of the textarea
	this.selectionStart = start;
	this.selectionEnd = end;
	this.focus();
};

var textarea = document.getElementsByTagName('textarea')[0];

textarea.onkeydown = function (event) {
	//support tab on textarea
	if (event.keyCode == 9) {
		//tab was pressed
		var newCaretPosition;
		newCaretPosition = textarea.getCaretPosition() + '    '.length;
		textarea.value =
			textarea.value.substring(0, textarea.getCaretPosition()) +
			'    ' +
			textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
		textarea.setCaretPosition(newCaretPosition);
		return false;
	}
	if (event.keyCode == 8) {
		//backspace
		if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) == '    ') {
			//it's a tab space
			var newCaretPosition;
			newCaretPosition = textarea.getCaretPosition() - 3;
			textarea.value =
				textarea.value.substring(0, textarea.getCaretPosition() - 3) +
				textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
			textarea.setCaretPosition(newCaretPosition);
		}
	}
	if (event.keyCode == 37) {
		//left arrow
		var newCaretPosition;
		if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) == '    ') {
			//it's a tab space
			newCaretPosition = textarea.getCaretPosition() - 3;
			textarea.setCaretPosition(newCaretPosition);
		}
	}
	if (event.keyCode == 39) {
		//right arrow
		var newCaretPosition;
		if (textarea.value.substring(textarea.getCaretPosition() + 4, textarea.getCaretPosition()) == '    ') {
			//it's a tab space
			newCaretPosition = textarea.getCaretPosition() + 3;
			textarea.setCaretPosition(newCaretPosition);
		}
	}
};
