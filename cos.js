function czasDoWyscigu(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda){
		let aktualnyCzas = new Date();
		let dataWyscigu = new Date(2020, 8, 29, 20, 0, 0, 0);
		let pozostalyCzas = dataWyscigu.getTime() - aktualnyCzas.getTime();
		
		if (pozostalyCzas > 0){
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
			
			 document.querySelector(".wyscig").innerHTML = dzLeft + ":" + hLeft + ":" + minLeft + ":" + sLeft;
			
			}
			
			
}


function sprawdz(){
	
	let liczba = document.querySelector(".cyfra").value;
	
	if (liczba> 0) 
		document.querySelector(".wynik").innerHTML="dodatnia";
		
	else if (liczba < 0)
		document.querySelector(".wynik").innerHTML="ujemna";
	else 
		document.querySelector(".wynik").innerHTML="Zero";
	
	
}
function wypisz(){
	let liczba1 = document.querySelector(".liczba1").value;
	let liczba2 = document.querySelector(".liczba2").value;
	let napis = "";
	if(liczba1<liczba2){
		for(i=liczba1; i<=liczba2; i++)
	{
		napis += i + " ";
	}
	document.querySelector(".przedzial").innerHTML = napis;
	}
	else
			for(i=liczba2; i<=liczba1; i++)
	{
		napis += i + " ";
	}
	document.querySelector(".przedzial").innerHTML = napis;
}


let numer = Math.floor((Math.random()*5)+1);
function schowaj(){
	$(".slajder").fadeOut(500);
}

	function zmienslajd(){
		
		numer++; if(numer>5) numer=1;
		
		
		let plik = "<img src=\"slajd" +numer+ ".png\"/>";
		document.querySelector(".slajder").innerHTML = plik;
		$(".slajder").fadeIn(500);
		
		
		setTimeout("zmienslajd()",3500);
		setTimeout("schowaj()", 3000);
		
		
		
	}

window.onload = function(){
	
	zmienslajd();
	setInterval(czasDoWyscigu, 1000);
}

