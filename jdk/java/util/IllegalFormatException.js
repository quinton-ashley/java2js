jdk.imports['java.util.IllegalFormatException'].load = () => {
	// TODO import and extend exception

	class IllegalFormatException {
		constructor(message) {
			this.message = message;
		}
	}
	jdk.java.util.IllegalFormatException = IllegalFormatException;
};
