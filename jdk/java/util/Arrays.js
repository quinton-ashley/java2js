jdk.imports['java.util.Arrays'].load = async () => {
	let AbstractList = await jdk.import('java.util.AbstractList');

	class Arrays {}
	Arrays.fill = (data, begin, nbElem, param) => {
		const max = begin + nbElem;
		for (let i = begin; i < max; i++) {
			data[i] = param;
		}
	};
	Arrays.copyOf = (original, newLength, ignore) => {
		const copy = new Array(newLength);
		jdk.java.lang.System.arraycopy(original, 0, copy, 0, Math.min(original.length, newLength));
		return copy;
	};
	Arrays.asList = (array) => {
		return new AbstractList(array);
	};
	jdk.java.util.Arrays = Arrays;
};
