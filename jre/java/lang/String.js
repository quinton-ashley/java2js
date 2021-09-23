jre.imports['java.lang.String'].load = () => {};
// String is special, I just extended js String prototype
String.prototype.hashCode = () => {
	let h = this._hashCode;
	if (!h && this.length > 0) {
		const val = this;
		for (let i = 0; i < this.length; i++) {
			h = 31 * h + this.charCodeAt(i);
		}
		this._hashCode = h;
	}
	return h;
}
String.prototype.isEmpty = () => {
	return this.length == 0
}
String.prototype.contains = (substr) => {
	return this.includes(substr);
}
// static methods
String.valueOf = (c) => {
	return c.toString();
}
jre.java.lang.String = String;
