jdk.imports['java.util.AbstractCollection'].load = async () => {
	const Itr = await jdk.import('java.util.Itr');

	class AbstractCollection {
		constructor(co) {
			this.arr = co || [];
		}

		add(idx, elem) {
			if (typeof elem == 'undefined') {
				return this.arr.push(idx);
			} else {
				return this.arr.splice(idx, 0, elem);
			}
		}

		addAll(idx, vals) {
			this.arr.splice(idx, 0, ...vals);
		}

		clear() {
			this.arr = [];
		}

		contains(val) {
			return this.arr.indexOf(val) != -1;
		}

		// containsAll(elems) {}

		isEmpty() {
			return this.arr.length == 0;
		}

		iterator() {
			return new Itr(this);
		}

		// parallelStream() {}

		remove(idxOrElem) {
			let index = idxOrElem;
			if (typeof idxOrElem != 'number') {
				index = this.arr.indexOf(idxOrElem);
			}
			return this.arr.splice(index, 1);
		}

		removeAll() {
			this.arr = [];
			return true;
		}

		// removeIf() {}

		// retainAll(collection) {}

		size() {
			return this.arr.length;
		}

		toArray() {
			return this.arr;
		}

		toString() {
			return '[' + this.arr.join(', ') + ']';
		}
	}
	jdk.java.util.AbstractCollection = AbstractCollection;
};
