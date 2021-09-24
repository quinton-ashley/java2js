jdk.imports['java.util.LinkedList'].load = () => {
	let AbstractList = jdk.import('java.util.AbstractList');

	class LinkedList extends AbstractList {
		constructor(...args) {
			super(args);
		}
	}
	jdk.java.util.LinkedList = LinkedList;
};
