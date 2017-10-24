function updateRegler() {
	calcCountValSpan.innerText = calcCount.value;
	stellenCountValSpan.innerText = stellenCount.value;

	requestAnimationFrame(updateRegler);
}


updateRegler();