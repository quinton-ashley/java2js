jdk.imports['java.lang.Integer'].load = async () => {
	class Integer {}
	Integer.parseInt = (d) => {
		return parseInt(d);
	};
	Integer.compare = (a, b) => {
		return a - b;
	};
	Integer.valueOf = (a) => {
		let val = Number(a);
		if (isNaN(val)) {
			throw new Error('NumberFormatException: For input string: ' + a);
		}
		return val;
	};
	Integer.MAX_VALUE = Number.MAX_VALUE;
	Integer.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Integer.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Integer.NaN = NaN;
	jdk.java.lang.Integer = Integer;
};
