jdk.imports['java.util.Stack'].load = async () => {
	class Stack {
		constructor() {
			this.content = new Array();
		}

		pop() {
			return this.content.pop();
		}

		push(t) {
			this.content.push(t);
		}

		isEmpty() {
			return this.content.length == 0;
		}

		peek() {
			return this.content.slice(-1)[0];
		}
	}
	jdk.java.util.Stack = Stack;
};
