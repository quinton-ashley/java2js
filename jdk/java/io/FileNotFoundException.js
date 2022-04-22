jdk.imports['java.io.FileNotFoundException'].load = async () => {
	class FileNotFoundException extends Exception {
		constructor(msg) {
			super(msg);
			this.name = 'FileNotFoundException';
		}
	}
	jdk.java.io.FileNotFoundException = FileNotFoundException;
};
