jdk.imports['java.util.AbstractMap'].load = async () => {
	let AbstractCollection = await jdk.import('java.util.AbstractCollection');
	let Set = await jdk.import('java.util.Set');

	class AbstractMap {
		constructor(co) {
			this.map = co || {};
			class SimpleEntry {
				constructor(key, val) {
					this.key = key;
					this.val = val;
				}

				getKey() {
					return this.key;
				}

				getValue() {
					return this.val;
				}

				toString() {
					return this.key + '=' + this.val;
				}
			}
			this.SimpleEntry = SimpleEntry;
		}

		clear() {
			this.map = {};
		}

		containsKey(key) {
			return this.map.hasOwnProperty(key);
		}

		containsValue(val) {
			return Object.values(this.map).find((x) => x == val) ? true : false;
		}

		get(key) {
			return this.map[key] || null;
		}

		isEmpty() {
			return Object.keys(this.map).length == 0;
		}

		entrySet() {
			let set = new Set();
			for (let key in this.map) {
				set.add(new this.SimpleEntry(key, this.map[key]));
			}
			return set;
		}

		put(key, value) {
			const previous_val = this.map[key];
			this.map[key] = value;
			return previous_val || null;
		}

		remove(key) {
			if (!this.map[key]) return null;
			const val = this.map[key];
			delete this.map[key];
			return val;
		}

		values() {
			const co = new AbstractCollection(Object.values(this.map));
			return co;
		}

		size() {
			return Object.keys(this.map).length;
		}
	}
	jdk.java.util.AbstractMap = AbstractMap;
};
