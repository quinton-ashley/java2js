jdk.imports['java.util.HashSet'].load = async () => {
	let AbstractSet = await jdk.import('java.util.AbstractSet');

	class HashSet extends AbstractSet {
		constructor(...args) {
			super(...args);
		}

		// equals(o) {}
	}
	jdk.java.util.HashSet = HashSet;
};
