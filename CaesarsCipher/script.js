function caesarCipher(str, kMove) {
	
	let move = parseInt(kMove);
	let string = str.toLowerCase();
	let encrypted = "";
	let newIndex;
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	//alphabet = ["a", "b", "c"]
	//alphabet[0]
	//alphabet[1]
	for (var i = 0; i < alphabet.length; i++) {
		if (string[i] == " ") {
			encrypted += string[i];
		}
		else {
			if (alphabet.indexOf(string[i]) > -1) {
				newIndex = alphabet.indexOf(string[i]) + move;
				if (newIndex > alphabet.length) {
					newIndex = newIndex - alphabet.length;
				}
				else if (newIndex < 0) {
					newIndex = alphabet.length + move;
				}
				encrypted += alphabet[newIndex];
			}
		}

	}
	alert(encrypted);
}

let str = prompt("Enter string to encrypt");
let k = prompt("Enter k");
caesarCipher(str, k);
