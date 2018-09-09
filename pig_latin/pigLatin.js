function translate(str) {
	
	var strArr = [];
	var vowelArr = ['a', 'e', 'i', 'o', 'u'];
	var consArr = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

	strArr = str.split("");

	for (var i = 0; i < vowelArr.length; i++) {
		if (strArr[0] == vowelArr[i]) {
			strArr.push('a');
			strArr.push('y');
		};
	};

	for (var i = 0; i < consArr.length; i++) {
		if (strArr[0] == consArr[i]) {
			for (var j = 0; j < consArr.length; j++) {
				if (strArr[1] == consArr[j]) {
					for (var k = 0; k < consArr.length; k++) {
						if (strArr[2] == consArr[k]) {
							var consC = strArr.shift();
							strArr.push(consC);
						};
					};
					var consB = strArr.shift();
					strArr.push(consB);
				} else if (strArr[1] == vowelArr[4]) {
					var vowelU = strArr.shift();
					strArr.push(vowelU);
				};
			};
			var consA = strArr.shift();
			strArr.push(consA);
			strArr.push('a');
			strArr.push('y');
		};
	};

	return strArr.join('');

};


module.exports = {
	translate
}

