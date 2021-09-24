jdk.imports['java.lang.Long'].load = () => {
	class Long {}
	Long.parseLong = (d) => {
		return parseInt(d);
	};
	Long.compare = (a, b) => {
		return a - b;
	};
	Long.MAX_VALUE = Number.MAX_VALUE;
	Long.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Long.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Long.NaN = NaN;
	jdk.java.lang.Long = Long;
};
