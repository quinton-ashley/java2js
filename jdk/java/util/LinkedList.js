jdk.imports['java.util.LinkedList'].load = async () => {
	let AbstractList = await jdk.import('java.util.AbstractList');

	class LinkedList extends AbstractList {
		constructor(...args) {
			super(...args);
		}
	}
	jdk.java.util.LinkedList = LinkedList;
};
