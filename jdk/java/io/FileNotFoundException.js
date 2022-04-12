jdk.imports['java.io.FileNotFoundException'].load = async () => {
	class FileNotFoundException {}
	jdk.java.io.FileNotFoundException = FileNotFoundException;
};
