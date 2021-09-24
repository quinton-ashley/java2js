jdk.imports['java.io.File'].load = async () => {
	class File {
		constructor(file) {
			this.absPath = file;
		}
		getAbsolutePath() {
			return this.absPath;
		}
	}
	File.seperator = File.seperatorChar = '/';
	File.pathSeparator = File.pathSeparatorChar = '/';
	jdk.java.io.File = File;
};
