jdk.imports['java.lang.Thread'].load = async () => {
	class Thread {}
	Thread.sleep = (millis) => {
		return new Promise((resolve) => {
			setTimeout(resolve, millis);
		});
	};
	jdk.java.lang.Thread = Thread;
};
