jdk.imports['java.lang.Integer'].load = () => {
	class Integer {}
	Integer.parseInt = (d) => {
		return parseInt(d);
	};
	Integer.compare = (a, b) => {
		return a - b;
	};
	Integer.MAX_VALUE = Number.MAX_VALUE;
	Integer.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Integer.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Integer.NaN = NaN;
	jdk.java.lang.Integer = Integer;
};
