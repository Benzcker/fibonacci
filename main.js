
function start() {
	loading.hidden = false;
	setTimeout(function() {
		calcOutput();
		loading.hidden = true;
	}, 50);
}

function calcOutput() {
	myOutput.innerText = '';

	const count = calcCount.value;
	const doNum = nummerierungen.checked;

	let pointer = 1;

	let a = 0;
	let b = 1;
	let c;

	const pot = stellenCount.value;

	const stel_sub = Math.pow(10, pot);
	const stel_max = stel_sub - 1;

	
	calcOutputPart(0, a, b, c, count, doNum, pointer, pot, stel_sub, stel_max);

}

function calcOutputPart(tausender, a, b, c, count, doNum, pointer, pot, stel_sub, stel_max) {
	while (pointer <= count && pointer < (tausender + 1) * 1000) {
		let endString = '';
		let printB = '';

		if (b > stel_max)
			b = b - stel_sub;

		if (pointer % 60 == 0)
			endString += "<span class=\"highlight\">";

		if (doNum)
			endString += pointer + '. => '

		for (let i = 0; i < pot - b.toString().length; i++) {
			printB += '0';
		}

		printB += b;

		endString += printB + "<br />";

		if (pointer % 60 == 0)
			endString += "</span>";

		myOutput.innerHTML += endString;

		c = a + b;
		a = b;
		b = c;
		pointer++;
	}

	if (pointer == (tausender + 1) * 1000) {
		setTimeout(function(tausender, a, b, c, count, doNum, pointer, pot, stel_sub, stel_max) {
			calcOutputPart(tausender + 1, a, b, c, count, doNum, pointer, pot, stel_sub, stel_max);
		}, 100);
	}
}