jre.imports['java.util.AbstractList'].load = () => {

	const Itr = jre.import('java.util.Itr');

	class AbstractList {
		constructor() {
			// TODO
			this.content = [];
		}

		addAll(index, vals) {
			const tempArray = vals.toArray(null);
			for (let i = 0; i < tempArray.length; i++) {
				this.content.push(tempArray[i]);
			}
			return false;
		}

		clear() {
			this.content = [];
		}

		poll() {
			return this.content.shift();
		}

		remove(indexOrElem) {
			this.content.splice(indexOrElem, 1);
			return true;
		}

		removeAll() {
			this.content = [];
			return true;
		}

		toArray(a) {
			return this.content;
		}

		size() {
			return this.content.length;
		}

		add(index, elem) {
			if (typeof elem !== 'undefined') {
				this.content.splice(index, 0, elem);
			} else {
				this.content.push(index);
			}
		}

		get(index) {
			return this.content[index];
		}

		contains(val) {
			return this.content.indexOf(val) != -1;
		}

		containsAll(elems) {
			return false;
		}

		isEmpty() {
			return this.content.length == 0;
		}

		set(index, element) {
			this.content[index] = element;
			return element;
		}

		indexOf(element) {
			return this.content.indexOf(element);
		}

		lastIndexOf(element) {
			return this.content.lastIndexOf(element);
		}

		iterator() {
			return new Itr(this);
		}
	}
	jre.java.util.AbstractList = AbstractList;
}
