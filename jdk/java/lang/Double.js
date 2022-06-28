jdk.imports['java.lang.Double'].load = async () => {
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
	Double.valueOf = (a) => {
		let val = Number(a);
		if (isNaN(val)) {
			throw new Error('NumberFormatException: For input string: ' + a);
		}
		return val;
	};
	Double.MAX_VALUE = Number.MAX_VALUE;
	Double.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Double.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Double.NaN = NaN;
	jdk.java.lang.Double = Double;
};
