jdk.imports['java.lang.Short'].load = async () => {
	class Short {}
	Short.parseShort = (d) => {
		return parseInt(d);
	};
	Short.compare = (a, b) => {
		return a - b;
	};
	Short.MAX_VALUE = Number.MAX_VALUE;
	Short.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Short.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Short.NaN = NaN;
	jdk.java.lang.Short = Short;
};
