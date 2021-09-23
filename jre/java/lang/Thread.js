jre.imports['java.lang.Thread'].load = () => {

	class Thread {
		async sleep(millis) {
			await setTimeout(millis);
		}
	}
	jre.java.lang.Thread = Thread;
}
