(async () => {
	jdk.log = document.getElementById('javaConsole');
	await jdk.init('..');

	let file0 = document.getElementById('javaFile');
	file0.onchange = async () => {
		jdk.log.value = '';
		let translation = await jdk.transpile(file0.value);
		console.log(translation);
		jdk.run();
	};
})();
