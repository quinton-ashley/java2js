jdk.imports['java.lang.Exception'].load = async () => {
	// TODO: should accept a PrintStream or PrintWriter
	Error.prototype.printStackTrace = function (p) {
		log(this.stack);
	};
	Error.prototype.getStackTrace = function () {
		return this.stack;
	};
	Error.prototype.getMessage = function () {
		return this.message;
	};
	jdk.java.lang.Exception = Error;
};
