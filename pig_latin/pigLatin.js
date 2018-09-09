function translate(str) {
	
	var strArr = [];
	var pigStr = "";

	strArr = str.split(' ');

	for (var i = 0; i < strArr.length; i++) {
		pigStr += convert(strArr[i]) + " ";
	};

	return pigStr.slice(0, -1);
};


function convert(word) {

	var convertArr = [];
	var vowelArr = ['a', 'e', 'i', 'o', 'u'];
	var consArr = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

	convertArr = word.split('');

	for (var i = 0; i < word.length; i++) {
		if (convertArr[0] == vowelArr[i]) {
			convertArr.push('a');
			convertArr.push('y');
		};
	};

	for (var i = 0; i < consArr.length; i++) {
		if (convertArr[0] == consArr[i]) {
			for (var j = 0; j < consArr.length; j++) {
				if (convertArr[1] == consArr[j]) {
					for (var k = 0; k < consArr.length; k++) {
						if (convertArr[2] == consArr[k]) {
							var consC = convertArr.shift();
							convertArr.push(consC);
						};
					};
					var consB = convertArr.shift();
					convertArr.push(consB);
				} else if (convertArr[1] == vowelArr[4]) {
					var vowelU = convertArr.shift();
					convertArr.push(vowelU);
				};
			};
			var consA = convertArr.shift();
			convertArr.push(consA);
			convertArr.push('a');
			convertArr.push('y');
		};
	};

	return convertArr.join('');

};



module.exports = {
	translate
}

