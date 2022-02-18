jdk.imports['java.io.PrintStream'].load = async () => {
	const MessageDigest = await jdk.import('java.security.MessageDigest');

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

		_printArray(arr) {
			console.error(
				'ERROR: In Java, printing a primitive array prints the memory location of that array in the Java Virtual Machine. To print the contents of the array use a loop!'
			);
			let md = MessageDigest.getInstance();
			let str = '[Ljava.lang.';
			let hash = md.digest(arr.join(',')).slice(0, 8);
			if (arr.length == 0) {
				return str + 'Array;@' + hash;
			}
			if (typeof arr[0] == 'string') {
				return str + 'String;@' + hash;
			} else {
				return str + 'Number;@' + hash;
			}
		}

		_print(arg, ln) {
			let str;
			if (Array.isArray(arg)) {
				str = this._printArray(arg);
			} else if (typeof arg == 'undefined' || arg == null) {
				str = 'null';
			} else {
				str = arg.toString();
			}
			if (ln) str += '\n';
			this.log += str;
			if (jdk.log) {
				jdk.log.value += str;
			}
			this._onPrint(str.length);
			return str;
		}

		print(arg) {
			return this._print(arg);
		}

		println(arg) {
			return this._print(arg, true);
		}

		printf(format, ...args) {
			let str = String.format(format, ...args);
			return this._print(str);
		}
	}
	jdk.java.io.PrintStream = PrintStream;
};
