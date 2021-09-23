jre.imports['java.lang.Float'].load = () => {

	class Float {}
	Float.parseFloat = (d) => {
		return parseFloat(d);
	}
	Float.compare = (a, b) => {
		return a - b;
	}
	Float.MAX_VALUE = Number.MAX_VALUE;
	Float.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Float.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Float.NaN = NaN;
	jre.java.lang.Float = Float;
}
