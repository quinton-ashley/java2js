jre.imports['java.util.HashMap'].load = () => {

	class HashMap {
		constructor() {
			this.content = {};
		}

		get(key) {
			return this.content[key];
		}

		put(key, value) {
			const previous_val = this.content[key];
			this.content[key] = value;
			return previous_val;
		}

		containsKey(key) {
			return this.content.hasOwnProperty(key);
		}

		remove(key) {
			const tmp = this.content[key];
			delete this.content[key];
			return tmp;
		}

		keySet() {
			const result = new HashSet();
			for (const p in this.content) {
				if (this.content.hasOwnProperty(p)) {
					result.add(p);
				}
			}
			return result;
		}

		isEmpty() {
			return Object.keys(this.content).length == 0;
		}

		values() {
			const result = new HashSet();
			for (const p in this.content) {
				if (this.content.hasOwnProperty(p)) {
					result.add(this.content[p]);
				}
			}
			return result;
		}

		clear() {
			this.content = {};
		}

		size() {
			return Object.keys(this.content).length;
		}
	}
	jre.java.util.HashMap = HashMap;
}
