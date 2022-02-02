jdk.imports['java.util.HashMap'].load = async () => {
	let AbstractMap = await jdk.import('java.util.AbstractMap');

	class HashMap extends AbstractMap {
		constructor(...args) {
			super(...args);
		}
	}
	jdk.java.util.HashMap = HashMap;
};
