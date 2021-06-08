function czasDoWysciguSplit1(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda) {
	let aktualnyCzas = new Date();
	let dataWyscigu = new Date(2021, 0, 20, 20, 0, 0, 0);
	let pozostalyCzas = dataWyscigu.getTime() - aktualnyCzas.getTime();

	if (pozostalyCzas > 0) {
		let s = pozostalyCzas / 1000;
		let min = s / 60;
		let h = min / 60;
		let dz = h / 24;

		let sLeft = Math.floor(s % 60);
		let minLeft = Math.floor(min % 60);
		let hLeft = Math.floor(h % 24);
		let dzLeft = Math.floor(dz);

		if (minLeft < 10)
			minLeft = "0" + minLeft;
		if (sLeft < 10)
			sLeft = "0" + sLeft;
		if (hLeft < 10)
			hLeft = "0" + hLeft;
		if (dzLeft < 10)
			dzLeft = "0" + dzLeft;

		document.querySelector(".DniSplit1").innerHTML = dzLeft + " : ";
		document.querySelector(".GodzSplit1").innerHTML = hLeft + " : ";
		document.querySelector(".MinSplit1").innerHTML = minLeft + " : ";
		document.querySelector(".SekSplit1").innerHTML = sLeft;

	}
}

function czasDoWysciguSplit2(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda) {
	let aktualnyCzas = new Date();
	let dataWyscigu = new Date(2021, 0, 19, 20, 0, 0, 0);
	let pozostalyCzas = dataWyscigu.getTime() - aktualnyCzas.getTime();

	if (pozostalyCzas > 0) {
		let s = pozostalyCzas / 1000;
		let min = s / 60;
		let h = min / 60;
		let dz = h / 24;

		let sLeft = Math.floor(s % 60);
		let minLeft = Math.floor(min % 60);
		let hLeft = Math.floor(h % 24);
		let dzLeft = Math.floor(dz);

		if (minLeft < 10)
			minLeft = "0" + minLeft;
		if (sLeft < 10)
			sLeft = "0" + sLeft;
		if (hLeft < 10)
			hLeft = "0" + hLeft;
		if (dzLeft < 10)
			dzLeft = "0" + dzLeft;

		document.querySelector(".DniSplit2").innerHTML = dzLeft + " : ";
		document.querySelector(".GodzSplit2").innerHTML = hLeft + " : ";
		document.querySelector(".MinSplit2").innerHTML = minLeft + " : ";
		document.querySelector(".SekSplit2").innerHTML = sLeft;

	}
}
window.onload = function () {
	setInterval(czasDoWysciguSplit1, 1000);
	setInterval(czasDoWysciguSplit2, 1000);
}