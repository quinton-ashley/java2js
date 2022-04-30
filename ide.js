(async () => {
	jdk.log = document.getElementById('javaConsole');
	await jdk.init('./jdk');
	jdk.workerPath = 'java2js_worker.js';

	async function run() {
		jdk.log.value = '';
		let translation = await jdk.transpile(file0.value);
		console.log(translation);
		jdk.run();
	}

	let file0 = document.getElementById('javaFile');
	file0.onchange = run;

	run();
})();
