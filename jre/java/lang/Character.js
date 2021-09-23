jre.imports['java.lang.Character'].load = () => {
	class Character {}
	Character.isDigit = (c) => {
		c = c.charCodeAt(0);
		if (0x0030 <= c && c <= 0x0039) return true;
		if (0x0660 <= c && c <= 0x0669) return true;
		if (0x06f0 <= c && c <= 0x06f9) return true;
		if (0x0966 <= c && c <= 0x096f) return true;
		if (0xff10 <= c && c <= 0xff19) return true;
		return false;
	};
	Character.isUpperCase = (c) => {
		return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c);
	};
	Character.isLowerCase = (c) => {
		return 'abcdefghijklmnopqrstuvwxyz'.includes(c);
	};
	Character.isLetter = (c) => {
		return Character.isLowerCase(c) || Character.isUpperCase(c);
	};
	Character.isAlphabetic = (c) => {
		return Character.isLetter(c);
	};
	Character.compare = (a, b) => {
		return a.charCodeAt(0) - b.charCodeAt(0);
	};
	Character.toString = (c) => {
		return c;
	};
	jre.java.lang.Character = Character;
};
