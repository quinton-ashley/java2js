jdk.imports['java.io.InputStream'].load = async () => {
	class InputStream {
		constructor() {
			this.reset();
			let _this = this;
			if (jdk.log) {
				jdk.log.onkeyup = () => {
					_this.stream = jdk.log.value;
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
