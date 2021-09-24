jdk.imports['java.io.PrintStream'].load = async () => {
	class PrintStream {
		constructor() {
			this.log = '';
			this.onPrint = () => {};
		}

		reset() {
			this.log = '';
		}

		_onPrint(length) {
			this.onPrint(length);
		}

		print(arg) {
			let str = arg.toString();
			this.log += str;
			if (window?.ide) {
				ide.log.value += str;
				this._onPrint(str.length);
			}
		}

		println(arg) {
			let str = arg.toString() + '\n';
			this.log += str;
			if (window?.ide) {
				ide.log.value += str;
				this._onPrint(str.length);
			}
		}

		printf(format, ...args) {
			let str = new Formatter().format(format, args);
			this.log += str;
			if (window?.ide) {
				ide.log.value += str;
				this._onPrint(str.length);
			}
		}
	}
	jdk.java.io.PrintStream = PrintStream;
};
