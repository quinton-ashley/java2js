jdk.imports['java.lang.Long'].load = async () => {
	class Long {}
	Long.parseLong = (d) => {
		return parseInt(d);
	};
	Long.compare = (a, b) => {
		return a - b;
	};
	Long.valueOf = (a) => {
		let val = Number(a);
		if (isNaN(val)) {
			throw new Error('NumberFormatException: For input string: ' + a);
		}
		return val;
	};
	Long.MAX_VALUE = Number.MAX_VALUE;
	Long.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Long.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Long.NaN = NaN;
	jdk.java.lang.Long = Long;
};
