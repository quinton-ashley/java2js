jre.imports['java.util.LinkedList'].load = () => {

	let AbstractList = jre.import('java.util.AbstractList');

	class LinkedList extends AbstractList {
		constructor(...args) {
			super(args);
		}
	}
	jre.java.util.LinkedList = LinkedList;
}
