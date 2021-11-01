(async () => {
	jdk.log = document.getElementById('javaConsole');
	await jdk.init();

	let file0 = document.getElementById('javaFile');
	file0.onchange = () => {
		jdk.log.value = '';
		jdk.run(file0.value);
	};
})();
