class JRE {
	constructor() {
		this.java = {};
		let pkgs = ['com', 'lang', 'org', 'io', 'util'];
		for (let pkg of pkgs) {
			this.java[pkg] = {};
		}
		this.imports = {};

		try {
			let names = [
				'Character', 'Double', 'Float', 'Integer', 'Long', 'Short', 'String',
				'StringBuilder', 'System', 'Thread'
			];
			let lang = [];
			for (let name of names) {
				lang.push('java.lang.' + name);
			}
			this.import(lang);
		} catch (e) {

		}

		this.main = () => {};
		this.run();
	}

	run() {
		this.load();
	}

	load() {
		let ready = 0;
		for (let className in this.imports) {
			let imp = this.imports[className];
			if (imp.classPath) {
				imp.classPath = className.split('.');
			}
			if (imp.ready) {
				ready++;
				continue;
			}
			if (imp.load) {
				try {
					imp.load();
				} catch (e) {
					console.log(e);
					continue;
				}
				imp.load = null;
				imp.ready = true;
				ready++;
			}
		}
		if (ready != Object.keys(this.imports).length) {
			let _this = this;
			setTimeout(() => {
				_this.load();
			}, 100);
		} else {
			this.launch();
		}
	}

	launch() {
		// make java.lang classes global
		for (let name in this.java.lang) {
			if (name == 'String') continue;
			window[name] = this.java.lang[name];
		}

		System.in.reset();
		System.out.reset();

		this.main(this.vmArgs);
	}

	getClass(classPath) {
		let _class = this;

		for (let part of classPath) {
			_class = _class[part];
			if (!_class) return;
		}
		return _class;
	}

	import(classNames) {
		if (!classNames) return;
		if (typeof classNames == 'string') {
			classNames = [classNames];
		}

		let ready = 0;

		for (let className of classNames) {
			let imp = this.imports[className];
			if (imp) {
				// class is ready for use
				if (imp.ready) ready++;
				// class file loaded but not ready yet
				continue;
			}
			imp = (this.imports[className] = {});
			imp.load = null;
			imp.classPath = className.split('.');

			let src = './jre';
			for (let part of imp.classPath) {
				src += '/' + part;
			}
			src += '.js';

			const getJS = new Promise((resolve, reject) => {
				const script = document.createElement('script');
				document.body.appendChild(script);
				script.onload = resolve;
				script.onerror = reject;
				script.async = true;
				script.src = src;
			});

			getJS.then(() => {});
		}

		if (ready != classNames.length) {
			throw 'loading java classes';
		}

		let classes = [];
		for (let className of classNames) {
			let imp = this.imports[className];
			classes.push(this.getClass(imp.classPath));
		}
		if (classNames.length == 1) {
			classes = classes[0];
		}
		return classes;
	}
}
window.jre = new JRE();
