jdk.imports['java.util.Scanner'].load = async () => {
	const InputStream = await jdk.import('java.io.InputStream');
	const FileNotFoundException = await jdk.import('java.io.FileNotFoundException');

	class Scanner {
		constructor(input) {
			if (input.getAbsolutePath) {
				this._loading = true;
				this._filePath = input.getAbsolutePath();
				return;
			}
			this.in = input;
		}
		async _loadFile(filePath) {
			this.in = new InputStream();
			let data = await fetch(filePath);
			if (data.status == 404 || data.status == 403) {
				throw new FileNotFoundException(filePath);
			}
			this.in.stream = await data.text();
			this._loading = false;
		}
		async hasNext(pattern) {
			if (this._loading) {
				await this._loadFile(this._filePath);
			}
			let s = this.in.stream.slice(this.in.mark);
			if (!s) return;
			if (pattern instanceof RegExp) {
				return pattern.test(s);
			}
			// if pattern is string
			return s.includes(pattern);
		}
		hasNextLine() {
			return this.hasNext('\n');
		}
		nextLine() {
			return this.next(/(.*)\r*\n/);
		}
		async next(pattern) {
			while (this._loading || !(await this.hasNext(pattern))) {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
			let buf = this.in.stream.slice(this.in.mark);
			let end = buf.indexOf('\n');
			let substr = buf.match(pattern)[1];
			if (!substr || end == -1) {
				throw 'NoSuchElementException: No ' + pattern.toString() + ' found in buffer ' + buf;
			}
			let start = buf.indexOf(substr);
			this.in.read(end - start + 1);
			return buf.slice(start, substr.length);
		}
		nextShort() {
			return this.nextInt();
		}
		async nextInt() {
			return Number(await this.next(/(\d+)\r*\n/));
		}
		nextLong() {
			return this.nextInt();
		}
		async nextFloat() {
			return Number(await this.next(/([0-9\.]+)\r*\n/));
		}
		nextDouble() {
			return this.nextFloat();
		}
		close() {}
	}
	jdk.java.util.Scanner = Scanner;
};
