jdk.imports['java.util.Collections'].load = async () => {
	class Collections {
		sort(list) {
			if (!list.size()) return;
			if (list.get(0).compareTo) {
				list.sort(list.get(0).compareTo);
			} else {
				list.sort();
			}
		}
		swap(list, i, j) {
			const l = list;
			l.set(i, l.set(j, l.get(i)));
		}
	}
	jdk.java.util.Collections = Collections;
};
