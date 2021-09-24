jdk.imports['java.util.HashSet'].load = () => {
	class HashSet {
		constructor() {
			this.content = {};
		}

		add(val) {
			this.content[val] = val;
		}

		clear() {
			this.content = {};
		}

		contains(val) {
			return this.content.hasOwnProperty(val);
		}

		containsAll(elems) {
			return false;
		}

		addAll(vals) {
			const tempArray = vals.toArray(null);
			for (let i = 0; i < tempArray.length; i++) {
				this.content[tempArray[i]] = tempArray[i];
			}
			return true;
		}

		remove(val) {
			let b = false;
			if (this.content[val]) {
				b = true;
			}
			delete this.content[val];
			return b;
		}

		removeAll() {
			return false;
		}

		size() {
			return Object.keys(this.content).length;
		}

		isEmpty() {
			return this.size() == 0;
		}

		toArray(a) {
			const _this = this;
			return Object.keys(this.content).map((key) => _this.content[key]);
		}

		iterator() {
			return new java.util.Itr(this);
		}

		forEach(f) {
			for (const p in this.content) {
				f(this.content[p]);
			}
		}

		get(index) {
			return this.content[index];
		}
	}
	jdk.java.util.HashSet = HashSet;
};
