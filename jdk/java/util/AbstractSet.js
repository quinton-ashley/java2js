jdk.imports['java.util.AbstractSet'].load = async () => {
	let AbstractCollection = await jdk.import('java.util.AbstractCollection');

	class AbstractSet extends AbstractCollection {
		constructor(...args) {
			super(...args);
		}

		add(elem) {
			if (this.arr.includes(elem)) return;
			super.add(elem);
		}

		// equals(o) {}
	}
	jdk.java.util.AbstractSet = AbstractSet;
};
