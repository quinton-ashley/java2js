jdk.imports['java.lang.String'].load = async () => {
	const Formatter = await jdk.import('java.util.Formatter');

	// String is special, I just extended js String prototype
	String.prototype.hashCode = function () {
		var hash = 0,
			i,
			chr;
		if (this.length === 0) return hash;
		for (i = 0; i < this.length; i++) {
			chr = this.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};
	String.prototype.isEmpty = function () {
		return this.length == 0;
	};
	String.prototype.contains = function (substr) {
		return this.includes(substr);
	};
	String.prototype.equals = function (o) {
		return this == o;
	};
	String.prototype.toCharArray = function (o) {
		return this.split('');
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
