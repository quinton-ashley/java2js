jdk.imports['java.lang.Float'].load = async () => {
	class Float {}
	Float.parseFloat = (d) => {
		return parseFloat(d);
	};
	Float.compare = (a, b) => {
		return a - b;
	};
	Float.MAX_VALUE = Number.MAX_VALUE;
	Float.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Float.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Float.NaN = NaN;
	jdk.java.lang.Float = Float;
};
