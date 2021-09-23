jre.imports['java.lang.StringBuilder'].load = () => {

	class StringBuilder {
		constructor() {
			this._str = "";
		}
		append(val) {
			this._str = this._str + val;
			return this;
		}
		insert(position, val) {
			this._str = this._str.slice(0, position) + val + this._str.slice(position);
			return this;
		}
		toString() {
			return this._str;
		}
	}
	jre.java.lang.StringBuilder = StringBuilder;
}
