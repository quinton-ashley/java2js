jre.imports['java.util.Random'].load = () => {

	class Random {
		constructor() {
			this.seed = undefined;
		}

		nextInt(max) {
			if (typeof max === 'undefined') {
				max = Math.pow(2, 32);
			}
			if (this.seed == undefined) {
				return Math.floor(Math.random() * max);
			} else {
				return Math.floor(this.nextSeeded(0, max));
			}
		}

		nextDouble() {
			if (this.seed == undefined) {
				return Math.random();
			} else {
				return this.nextSeeded();
			}
		}

		nextBoolean() {
			if (this.seed == undefined) {
				return Math.random() >= 0.5;
			} else {
				return this.nextSeeded() >= 0.5;
			}
		}

		setSeed(seed) {
			this.seed = seed;
		}

		nextSeeded(min, max) {
			var max = max || 1;
			var min = min || 0;
			this.seed = (this.seed * 9301 + 49297) % 233280;
			const rnd = this.seed / 233280;
			return min + rnd * (max - min);
		}
	}
	jre.java.util.Random = Random;
}
