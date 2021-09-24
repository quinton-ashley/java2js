jdk.imports['java.io.InputStream'].load = () => {
	class InputStream {
		constructor() {
			this.reset();
			let _this = this;
			if (window?.ide) {
				ide.log.onkeyup = () => {
					_this.stream = ide.log.value;
				};
			}
		}
		reset() {
			this.stream = '';
			this.mark = 0;
		}
		read(length) {
			this.mark += length;
		}
	}
	jdk.java.io.InputStream = InputStream;
};
