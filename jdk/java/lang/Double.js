jdk.imports['java.lang.Double'].load = () => {
	class Double {
		constructor() {
			throw 'new Double() not supported';
		}
	}
	Double.parseDouble = (d) => {
		return parseFloat(d);
	};
	Double.compare = (a, b) => {
		return a - b;
	};
	Double.MAX_VALUE = Number.MAX_VALUE;
	Double.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Double.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Double.NaN = NaN;
	jdk.java.lang.Double = Double;
};
