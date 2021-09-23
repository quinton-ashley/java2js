jre.imports['java.io.File'].load = () => {

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
	jre.java.io.File = File;
}
