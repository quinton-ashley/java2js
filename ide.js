function ide(require, module, exports) {
	const log = console.log;

	window.java = {};
	java.log = document.getElementById('javaConsole');
	java.file0 = document.getElementById('javaFile');

	window.java2js = (file) => {
		const java_to_javascript = require('java-to-javascript');

		let classLine = file.indexOf('public class');
		let imports = file.slice(0, classLine);
		imports = imports.match(/(?<=^import )[^;]*/gm) || [];

		let userName = window?.QuintOS?.userName || 'quinton-ashley';
		let className = file.slice(classLine + 13, file.indexOf(' {', classLine + 13));

		let prefix = `(jre.imports['com.${userName}.${className}'] = {}).load = () => {\n\n`;

		// handle Java class imports
		for (let i = 0; i < imports.length; i++) {
			let imp = imports[i];
			let impPath = imp.split('.');
			let impName = impPath[impPath.length - 1];
			prefix += `let ${impName} = jre.import('${imp}');\n`;
		}
		prefix += '\n';

		// hacky support for Java 15 triple quotes
		file = file.replaceAll(/"""([^"]*)"""/g, (match, str) => {
			str = str.replaceAll(/(.*)(\n|$)/g, '"$1\\n"+').slice(0, -1);
			return str;
		});

		// hacky support for Array literals
		file = file.replaceAll(/=\s*new \w*\[\]\s*\{/g, '= {');

		// convert string .length() method
		file = file.replaceAll(/\.length\(\)/g, '.length');

		// cast to int, truncates the number (just removes decimal value)
		file = file.replace(/\(int\)\s*/gm, 'Math.floor');
		file = file.replace(/\(int\)\s*\-/gm, 'Math.ceil');

		// log(file);

		let suffix = `\njre.main = ${className}.main;\n}`;

		window.file0 = file;

		let trans = java_to_javascript(file);

		// log(trans);

		trans = trans.replace(/(\([^\)]*\) =>)/gm, 'async $1');
		trans = trans.replace(/([\w_\$]+\.next(Int|Float|Double|Line|Short|Long)*\(\))/gm, 'await $1');

		trans = prefix + trans + suffix;

		log(trans);

		try {
			eval(trans);
			jre.run();
		} catch (e) {
			java.log.value += e;
		}
	};

	java.file0.onchange = () => {
		java.log.value = '';
		let file = java.file0.value;

		java2js(file);
	};
}
