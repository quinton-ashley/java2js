jdk.imports['java.lang.Thread'].load = async () => {
	class Thread {
		async sleep(millis) {
			await setTimeout(millis);
		}
	}
	jdk.java.lang.Thread = Thread;
};
