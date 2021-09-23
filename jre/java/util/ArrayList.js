jre.imports['java.util.ArrayList'].load = () => {

	let AbstractList = jre.import('java.util.AbstractList');

	class ArrayList extends AbstractList {
		constructor(...args) {
			super(args);
		}
	}
	jre.java.util.ArrayList = ArrayList;
}
