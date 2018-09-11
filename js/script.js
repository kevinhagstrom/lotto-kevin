//slumptal mellan 1 och 39
//OBS dålig kod, mjlighet till dublikat => använd inte ;)
function lottoRad() {
	var lottery = [];
	for(let x=1; x<=39; x++){
		lottery[x] = x;
	}
	lottery.sort(function(a, b){return 0.5 - Math.random()});
	for (var i=0; i<=6; i++) {
	 	document.getElementById ("lotto_" + i).innerHTML = lottery[i];
	}
	alert('lottoraden klar!');
};