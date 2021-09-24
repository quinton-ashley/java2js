jdk.imports['java.util.Formatter'].load = async () => {
	const IllegalFormatException = await jdk.import('java.util.IllegalFormatException');

	class Formatter {
		format(format, ...args) {
			let regex = /%[0-9\.]*[\w]/;
			for (let arg of args) {
				if (!regex.test(format)) {
					throw new IllegalFormatException();
				}
				format = format.replace(regex, arg.toString());
			}
			return format;
		}
	}
	jdk.java.util.Formatter = Formatter;
};
