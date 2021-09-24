window.ide = {};
ide.log = document.getElementById('javaConsole');
ide.file0 = document.getElementById('javaFile');

ide.file0.onchange = () => {
	ide.log.value = '';
	let file = ide.file0.value;
	jdk.run(file);
};
