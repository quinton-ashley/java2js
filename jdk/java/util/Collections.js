jdk.imports['java.util.Collections'].load = async () => {
	class Collections {}

	Collections.sort = (list) => {
		if (!list.size()) return;
		if (list.get(0).compareTo) {
			list.sort(list.get(0).compareTo);
		} else {
			list.sort();
		}
	};

	Collections.shuffle = (list) => {
		if (!list.size()) return;
		list.sort(() => Math.random() - 0.5);
	};

	Collections.swap = (list, i, j) => {
		const l = list;
		l.set(i, l.set(j, l.get(i)));
	};
	jdk.java.util.Collections = Collections;
};
