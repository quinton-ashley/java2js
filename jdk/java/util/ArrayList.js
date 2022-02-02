jdk.imports['java.util.ArrayList'].load = async () => {
	let AbstractList = await jdk.import('java.util.AbstractList');

	class ArrayList extends AbstractList {
		constructor(...args) {
			super(...args);
		}
	}
	jdk.java.util.ArrayList = ArrayList;
};
