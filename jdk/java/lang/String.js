jdk.imports['java.lang.String'].load = async () => {
	const Formatter = await jdk.import('java.util.Formatter');

	// String is special, I just extended js String prototype
	String.prototype.hashCode = function () {
		let h = this._hashCode;
		if (!h && this.length > 0) {
			const val = this;
			for (let i = 0; i < this.length; i++) {
				h = 31 * h + this.charCodeAt(i);
			}
			this._hashCode = h;
		}
		return h;
	};
	String.prototype.isEmpty = function () {
		return this.length == 0;
	};
	String.prototype.contains = function (substr) {
		return this.includes(substr);
	};
	// static methods
	String.valueOf = (c) => {
		return c.toString();
	};
	String.format = (format, ...args) => {
		return new Formatter().format(format, ...args);
	};
	jdk.java.lang.String = String;
};
