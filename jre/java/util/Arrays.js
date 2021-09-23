jre.imports['java.util.Arrays'].load = () => {

	class Arrays {
		fill(data, begin, nbElem, param) {
			const max = begin + nbElem;
			for (let i = begin; i < max; i++) {
				data[i] = param;
			}
		}
		copyOf(original, newLength, ignore) {
			const copy = new Array(newLength);
			jre.java.lang.System.arraycopy(original, 0, copy, 0, Math.min(original.length, newLength));
			return copy;
		}
	}
	jre.java.util.Arrays = Arrays;
}
