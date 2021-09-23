jre.imports['java.util.IllegalFormatException'].load = () => {

	// TODO import and extend exception

	class IllegalFormatException {
		constructor(message) {
			this.message = message;
		}
	}
	jre.java.util.IllegalFormatException = IllegalFormatException;
};
