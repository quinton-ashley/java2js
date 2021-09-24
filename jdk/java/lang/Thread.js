jdk.imports['java.lang.Thread'].load = () => {
	class Thread {
		async sleep(millis) {
			await setTimeout(millis);
		}
	}
	jdk.java.lang.Thread = Thread;
};
