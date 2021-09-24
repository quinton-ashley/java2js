jdk.imports['java.util.Itr'].load = () => {
	class Itr {
		constructor(list) {
			this.cursor = 0;
			this.lastRet = -1;
			this.list = list;
		}

		hasNext() {
			return this.cursor != this.list.size();
		}

		next() {
			try {
				const i = this.cursor;
				const next = this.list.get(i);
				this.lastRet = i;
				this.cursor = i + 1;
				return next;
			} catch ($ex$) {
				if ($ex$ instanceof Error) {
					const e = $ex$;
					throw new Error('no such element exception');
				} else {
					throw $ex$;
				}
			}
		}
	}
	jdk.java.util.Itr = Itr;
};
