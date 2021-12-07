jdk.imports['java.time.Instant'].load = async () => {
	class Instant {}

	Instant.now = () => {
		return {
			toEpochMilli: () => {
				return Date.now();
			}
		};
	};
	jdk.java.time.Instant = Instant;
};
