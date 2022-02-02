jdk.imports['java.util.AbstractList'].load = async () => {
	let AbstractCollection = await jdk.import('java.util.AbstractCollection');

	class AbstractList extends AbstractCollection {
		constructor(...args) {
			super(...args);
		}

		// equals(o) {}

		get(idx) {
			return this.arr[idx];
		}

		indexOf(elem) {
			return this.arr.indexOf(elem);
		}

		lastIndexOf(elem) {
			return this.arr.lastIndexOf(elem);
		}

		poll() {
			return this.arr.shift();
		}

		set(idx, elem) {
			this.arr[idx] = elem;
			return elem;
		}
	}
	jdk.java.util.AbstractList = AbstractList;
};
