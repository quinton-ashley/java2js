jre.imports['java.lang.Short'].load = () => {

	class Short {}
	Short.parseShort = (d) => {
		return parseInt(d);
	}
	Short.compare = (a, b) => {
		return a - b;
	}
	Short.MAX_VALUE = Number.MAX_VALUE;
	Short.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	Short.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
	Short.NaN = NaN;
	jre.java.lang.Short = Short;
}
