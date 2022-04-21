jdk.imports['java.util.Scanner'].load = async () => {
	const InputStream = await jdk.import('java.io.InputStream');

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
			this.in.stream = await (await fetch(filePath)).text();
			this._loading = false;
		}
		async hasNext(pattern) {
			if (this._loading) {
				await this._loadFile(this._filePath);
			}
			if (pattern instanceof RegExp) {
				return pattern.test(this.in.stream.slice(this.in.mark));
			}
			// if pattern is string
			return this.in.stream.slice(this.in.mark).includes(pattern);
		}
		hasNextLine() {
			return this.hasNext('\n');
		}
		nextLine() {
			return this.next(/.*/);
		}
		async next(pattern) {
			while (this._loading || !(await this.hasNext(pattern))) {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
			let buf = this.in.stream.slice(this.in.mark);
			let substr = buf.match(pattern)[0];
			let start = buf.indexOf(substr);
			let end = buf.indexOf('\n');
			if (end == -1) {
				throw 'NoSuchElementException: No ' + pattern.toString() + ' found in buffer ' + buf;
			}
			this.in.read(end - start + 1);
			return buf.slice(start, substr.length);
		}
		nextShort() {
			return this.nextInt();
		}
		async nextInt() {
			return Number(await this.next(/\d+/));
		}
		nextLong() {
			return this.nextInt();
		}
		async nextFloat() {
			return Number(await this.next(/[0-9\.]+/));
		}
		nextDouble() {
			return this.nextFloat();
		}
		close() {}
	}
	jdk.java.util.Scanner = Scanner;
};
