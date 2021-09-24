jdk.imports['java.lang.System'].load = async () => {
	const Formatter = await jdk.import('java.util.Formatter');
	const InputStream = await jdk.import('java.io.InputStream');
	const PrintStream = await jdk.import('java.io.PrintStream');

	class System {}

	System.in = new InputStream();
	System.out = new PrintStream();
	System.out.onPrint = (length) => {
		System.in.mark += length;
	};

	System.arraycopy = (src, srcPos, dest, destPos, numElements) => {
		if (
			(dest instanceof Float64Array || dest instanceof Int32Array) &&
			(src instanceof Float64Array || src instanceof Int32Array)
		) {
			if (numElements == src.length) {
				dest.set(src, destPos);
			} else {
				dest.set(src.subarray(srcPos, srcPos + numElements), destPos);
			}
		} else {
			for (let i = 0; i < numElements; i++) {
				dest[destPos + i] = src[srcPos + i];
			}
		}
	};
	System.exit = (code) => {
		console.log('Exited with code: ' + code);
		if (window?.exit) exit();
	};
	jdk.java.lang.System = System;
};
