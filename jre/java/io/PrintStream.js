jre.imports['java.io.PrintStream'].load = () => {
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
			if (java.log) {
				java.log.value += str;
				this._onPrint(str.length);
			}
		}

		println(arg) {
			let str = arg.toString() + '\n';
			this.log += str;
			if (java.log) {
				java.log.value += str;
				this._onPrint(str.length);
			}
		}

		printf(format, ...args) {
			let str = new Formatter().format(format, args);
			this.log += str;
			if (java.log) {
				java.log.value += str;
				this._onPrint(str.length);
			}
		}
	}
	jre.java.io.PrintStream = PrintStream;
};
