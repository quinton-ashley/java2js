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
		async hasNextLine() {
			return this.hasNext('\n');
		}
		async nextLine() {
			return await this.next(/.*\n/);
		}
		async next(pattern) {
			while (this._loading || !(await this.hasNext(pattern))) {
				await new Promise((done) => setTimeout(() => done(), 100));
			}
			let buf = this.in.stream.slice(this.in.mark);
			let substr = buf.match(pattern)[0];
			let start = buf.indexOf(substr);
			let end = buf.indexOf('\n');
			this.in.read(end - start + 1);
			return buf.slice(start, end);
		}
		async nextShort() {
			return await this.nextInt();
		}
		async nextInt() {
			return Number(await this.next(/\d+\D/));
		}
		async nextLong() {
			return await this.nextInt();
		}
		async nextFloat() {
			return Number(await this.next(/[0-9\.]+[^0-9\.]/));
		}
		async nextDouble() {
			return await this.nextFloat();
		}
		close() {}
	}
	jdk.java.util.Scanner = Scanner;
};
