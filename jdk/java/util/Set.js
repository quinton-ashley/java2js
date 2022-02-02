jdk.imports['java.util.Set'].load = async () => {
	let AbstractSet = await jdk.import('java.util.AbstractSet');

	class Set extends AbstractSet {
		constructor(...args) {
			super(...args);
		}

		// equals(o) {}
	}
	jdk.java.util.Set = Set;
};
