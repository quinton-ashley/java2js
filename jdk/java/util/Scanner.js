jdk.imports['java.util.Scanner'].load = () => {
	const File = jdk.import('java.io.File');

	class Scanner {
		constructor(input) {
			if (input instanceof File) {
				this.inputType = 'File';
				throw 'unsupported Scanner input type: File';
			}
			this.in = input;
		}
		hasNext(pattern) {
			if (pattern instanceof RegExp) {
				return pattern.test(this.in.stream.slice(this.in.mark));
			}
			// if pattern is string
			return this.in.stream.includes(pattern);
		}
		hasNextLine() {
			return this.hasNext('\n');
		}
		async nextLine() {
			return await this.next(/.*\n/);
		}
		async next(pattern) {
			while (!this.hasNext(pattern)) {
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
