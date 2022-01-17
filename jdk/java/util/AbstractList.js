jdk.imports['java.util.AbstractList'].load = async () => {
	const Itr = await jdk.import('java.util.Itr');

	class AbstractList {
		constructor(arr) {
			// TODO
			this.arr = arr || [];
		}

		addAll(index, vals) {
			this.arr.splice(index, 0, ...vals);
		}

		clear() {
			this.arr = [];
		}

		poll() {
			return this.arr.shift();
		}

		remove(indexOrElem) {
			let index = indexOrElem;
			if (typeof indexOrElem != 'number') {
				index = this.arr.indexOf(indexOrElem);
			}
			return this.arr.splice(index, 1);
		}

		removeAll() {
			this.arr = [];
			return true;
		}

		toArray() {
			return this.arr;
		}

		toString() {
			return '[' + this.arr.toString() + ']';
		}

		size() {
			return this.arr.length;
		}

		add(index, elem) {
			if (typeof elem == 'undefined') {
				return this.arr.push(index);
			} else {
				return this.arr.splice(index, 0, elem);
			}
		}

		get(index) {
			return this.arr[index];
		}

		contains(val) {
			return this.arr.indexOf(val) != -1;
		}

		// containsAll(elems) {
		// }

		isEmpty() {
			return this.arr.length == 0;
		}

		set(index, element) {
			this.arr[index] = element;
			return element;
		}

		indexOf(element) {
			return this.arr.indexOf(element);
		}

		lastIndexOf(element) {
			return this.arr.lastIndexOf(element);
		}

		iterator() {
			return new Itr(this);
		}
	}
	jdk.java.util.AbstractList = AbstractList;
};
