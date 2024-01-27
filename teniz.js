/* var _lsTotal = 0,
    _xLen, _x;
for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
        continue;
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2);
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
};
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB"); */
var addontextarr =[];
var search_terms = ["Adriano Panatta", "Albert Costa", "Amelie Mauresmo", "Ana Ivanovic", "Anastasia Myskina", "Andre Agassi", "Andres Gimeno", "Andres Gomez", "Andy Murray", "Andy Roddick", "Angelique Kerber", "Ann Jones", "Arantxa Sanchez", "Arthur Ashe", "Aryna Sabalenka", "Ashleigh Barty", "Barbara Jordan", "Barbora Krejcikova", "Bianca Andreescu", "Billie Jean King", "Bjorn Borg", "Boris Becker", "Brian Teacher", "Carlos Alcaraz", "Carlos Moya", "Caroline Wozniacki", "Chris Evert", "Chris O Neil", "Coco Gauff", "Conchita Martinez", "Daniil Medvedev", "Dominic Thiem", "Elena Rybakina", "Emma Raducanu", "Evonne Goolagong", "Flavia Pennetta", "Francesca Schiavone", "Gabriela Sabatini", "Garbine Muguruza", "Gaston Gaudio", "Goran Ivanisevic", "Guillermo Vilas", "Gustavo Kuerten", "Hana Mandlikova", "Iga Swiatek", "Ilie Nastase", "Iva Majoli", "Ivan Lendl", "Jan Kodes", "Jana Novotna", "Jelena Ostapenko", "Jennifer Capriati", "Jim Courier", "Jimmy Connors", "Johan Kriek", "John McEnroe", "John Newcombe", "Juan Carlos Ferrero", "Juan Martin Del Potro", "Justine Henin", "Ken Rosewall", "Kerry Reid", "Kim Clijsters", "Li Na", "Lindsay Davenport", "Lleyton Hewitt", "Manuel Orantes", "Marat Safin", "Margaret Court", "Maria Sharapova", "Marin Cilic", "Marion Bartoli", "Mark Edmondson", "Marketa Vondrousova", "Martina Hingis", "Martina Navratilova", "Mary Pierce", "Mats Wilander", "Michael Chang", "Michael Stich", "Mima Jausovec", "Monica Seles", "Nancy Richey", "Naomi Osaka", "Novak Djokovic", "Pat Cash", "Patrick Rafter", "Pete Sampras", "Petr Korda", "Petra Kvitova", "Rafael Nadal", "Richard Krajicek", "Rod Laver", "Roger Federer", "Roscoe Tanner", "Samantha Stosur", "Serena Williams", "Sergi Bruguera", "Simona Halep", "Sloane Stephens", "Sofia Kenin", "Stan Smith", "Stan Wawrinka", "Stefan Edberg", "Steffi Graf", "Sue Barker", "Svetlana Kuznetsova", "Thomas Johansson", "Thomas Muster", "Tracy Austin", "Venus Williams", "Victoria Azarenka", "Virginia Ruzici", "Virginia Wade", "Vitas Gerulaitis", "Yannick Noah", "Yevgeny Kafelnikov",];
var ul = document.getElementById("result");
ul.onclick = function (event) {
	var target = getEventTarget(event);
	document.getElementById("submitbutton").disabled = false;
	document.getElementById("submitbutton").focus();
	document.getElementById("answertext").value = target.innerHTML;
	res = document.getElementById("result");
	res.innerHTML = '';
};
function autocompleteMatch(input) {
	input = input.toLowerCase();
	if (input == '') {
		return [];
	}
	var reg = new RegExp(input)
	return search_terms.filter(function (term) {
		if (term.toLowerCase().match(reg)) {
			return term;
		}
	});
}

function showResults(val) {
	document.getElementById("result").hidden = false;
	document.getElementById("submitbutton").disabled = true;
	res = document.getElementById("result");
	res.innerHTML = '';
	let list = '';
	let terms = autocompleteMatch(val);
	for (i = 0; i < terms.length; i++) {
		if (i === 5) { break; }
		list += '<li>' + terms[i] + '</li>';
	}
	res.innerHTML = '<ul>' + list + '</ul>';
	document.getElementById("result").focus();
	//document.getElementById("result").scrollIntoView(true);
}


function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

function clearzoomin() {
	document.getElementById(0).classList.remove("zoom-in-box");
	document.getElementById(1).classList.remove("zoom-in-box");
	document.getElementById(2).classList.remove("zoom-in-box");
	document.getElementById(3).classList.remove("zoom-in-box");
	document.getElementById(4).classList.remove("zoom-in-box");
	document.getElementById(5).classList.remove("zoom-in-box");
}

function clearanimated() {
document.getElementById("clue-ball").classList.remove("animated");
}

function changemode() {
	if (confirm("Acknowledge Penalty Points?\n - 2 Points docked for Easy Mode.\n - 2 more Points docked for Additional Hint.") == true) {
		localStorage.modet = "Easy";	
		localStorage.gltttext = localStorage.gltttext.replace("Normal", "Easy");
		//document. location. reload();
		switchmode();
	}
}

function calculatepoints() {
	if (localStorage.gametwon == 1) {
		switch (clueCount) {
			case 1: localStorage.dailytpoints = 10;
				break;
			case 2: localStorage.dailytpoints = 9;
				break;
			case 3: localStorage.dailytpoints = 8;
				break;
			case 4: localStorage.dailytpoints = 7;
				break;
			case 5: localStorage.dailytpoints = 6;
				break;
			case 7: localStorage.dailytpoints = 5;
				break;
		}
		if (localStorage.modet == "Easy"){
		localStorage.dailytpoints = Number(localStorage.dailytpoints) - 2;
		}
		if (localStorage.hinttused == 1){
		localStorage.dailytpoints = Number(localStorage.dailytpoints) - 2;
		}		
	}
	else {
		localStorage.dailytpoints = 0;
	}
}

function computetier() {
	if (localStorage.totaltpoints < 100){
		localStorage.tiert = "FUTURES"
	}
	else if (localStorage.totaltpoints >= 100 && localStorage.totaltpoints < 250){
		localStorage.tiert = "CHALLENGERS"
	}
	else if (localStorage.totaltpoints >= 250 && localStorage.totaltpoints < 500){
		localStorage.tiert = "LEVEL 250"
	}
	else if (localStorage.totaltpoints >= 500 && localStorage.totaltpoints < 1000){
		localStorage.tiert = "LEVEL 500"
	}
	else if (localStorage.totaltpoints >= 1000 && localStorage.totaltpoints < 1500){
		localStorage.tiert = "LEVEL 1000"
	}
	else if (localStorage.totaltpoints >= 1500 && localStorage.totaltpoints < 2000){
		localStorage.tiert = "TOUR FINALS"
	}
	else if (localStorage.totaltpoints >= 2000){
		localStorage.tiert = "GRAND SLAMS"
	}	
}

function additionalhint() {
	document.getElementById("additionalhint").innerHTML = firstname.slice(0, 1).toUpperCase();
	for (f = 1; f < firstname.length; f++) {
		document.getElementById("additionalhint").innerHTML += "🔳"
	}
	document.getElementById("additionalhint").innerHTML += "<br>" + lastname.slice(0, 1).toUpperCase();
	for (l = 1; l < lastname.length; l++) {
		document.getElementById("additionalhint").innerHTML += "🔳"
	}
	//document.getElementById("try6").scrollIntoView(true);	
	localStorage.hinttused = 1;
}

function storedadd() {
	var storedaddon = JSON.parse(localStorage.getItem("addonttext"));
	for (let j = 0; j < storedaddon.length; j++) {
		var storedaddonelem = storedaddon[j];
		for (let k = 0; k < storedaddonelem.length; k++) {
			document.getElementById("trydetail"+(j+1)).style.display = "flex";
			if (storedaddonelem[k] == "r"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🔴";
			}
			else if (storedaddonelem[k] == "y"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🟡";
			}
			else if (storedaddonelem[k] == "g"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🟢";
			}      
			else if (storedaddonelem[k] == "b"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🔵";
			} 			
		}					
	}
}

function getindices() {
	const indices = [];
	//const element = guess;
	let idx = nameList.indexOf(guess);
	//while (idx != -1) {
	indices.push(idx);
		//idx = nameList.indexOf(element, idx + 1);
	//}
	//console.log(indices);
	var addyr = "🔴";
	var icon1 = "r";
	//for (let i = 0; i < indices.length; i++) {
		if (yearList[idx] == yearList[index]) {
			addyr = "🟢";
			icon1 = "g";
			//break;
		}
		else if (Math.abs(Number(yearList[idx]) - Number(yearList[index])) <= 3) {
			addyr = "🟡";
			icon1 = "y";
		}
		
	//}
	document.getElementById("answertext").disabled = true;
	document.getElementById("submitbutton").disabled = true;	
	document.getElementById("MODEButton").disabled = true;		
	setTimeout(function(){ 
		if (localStorage.modet == "Normal" && !gameOver){
			document.getElementById(0).classList.add("zoom-in-box");
			document.getElementById(0).innerHTML = "<span class='revealicon'>" + addyr + "</span><br><span class='revealsiz'>1st Win</span>";
		}
	}, 2000);
	//var tempyear = [];
	//for (let j = 0; j < indices.length; j++) {
	    //tempyear.push(yearList[indices[0]]);
		//tempyear.sort();
		//tempyear = [...new Set(tempyear)];
	//}	
	setTimeout(function(){ 
		if (Number(yearList[idx]) > Number(yearList[index])){
			addyr += "️🔻";
		}
		else if (Number(yearList[idx]) < Number(yearList[index])){
			addyr += "🔺";
		}
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex"; 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + addyr;				
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + addyr;	
		}
	}, 0);
	//for (let k = 0; k < tempyear.length; k++) { 
		if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + "<span class='smallfont'>" + yearList[idx] + "</span>";	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + "<span class='smallfont'>" + yearList[idx] + "</span>";
		}
	//}
	var addongs = "🔴";
	var allgs = 1;
	var icon2 = "r";
	//for (let i = 0; i < indices.length; i++) {
		if (JSON.stringify(GSList[idx]) == JSON.stringify(GSList[index])) {
			addongs = "🟢";
			icon2 = "g";
			//break;
		}
		else {
			 for (let m = 0; m < GSList[idx].length; m++) {
				 for (let n = 0; n < GSList[index].length; n++) {
					if (JSON.stringify(GSList[idx][m]) == JSON.stringify(GSList[index][n])){
						addongs = "🟡";
						icon2 = "y";
						break;						
					}
				 }
			 }
			for (let p = 0; p < GSList[idx].length; p++) {
				 if (GSList[index].includes(GSList[idx][p])){
					 allgs = 1;
				 }
				 else{
					 allgs = 0;
					 break;
				 }
			}	
			if (allgs == 1){
				addongs = "🔵";
				icon2 = "b";						 
			}			
		}


	//}
	if (localStorage.modet == "Normal" && !gameOver){
		setTimeout(function(){ 		
			document.getElementById(1).classList.add("zoom-in-box");
			document.getElementById(1).innerHTML = "<span class='revealicon'>" + addongs + "</span><br><span class='revealsiz'>Slams</span>";
		}, 2000);		
	}
/* 	var tempslam = [];
	for (let j = 0; j < indices.length; j++) {
	    tempslam.push(GSList[indices[j]]);
		tempslam.sort();
		tempslam = [...new Set(tempslam)];
	}	 */
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + addongs;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + addongs;
		}
	}, 300);
	for (let k = 0; k < GSList[idx].length; k++) { 
		if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GSList[idx][k] + "</span>";	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GSList[idx][k] + "</span>";
		}
	}	
	var addonctry = "🔴";
	var icon3 = "r";
	
	//for (let i = 0; i < indices.length; i++) {
/* 		if (JSON.stringify(countryList[idx]) == JSON.stringify(countryList[index])) {
			addonctry = "🟢";
			icon3 = "g";
			//break;
		}
		else {
			 for (let m = 0; m < continentList[idx].length; m++) {
				 for (let n = 0; n < continentList[index].length; n++) {
					if (JSON.stringify(continentList[idx][m]) == JSON.stringify(continentList[index][n])){
						addonctry = "🟡";
						icon3 = "y";
						break;						
					}
				 }
			 }
		} */
	//}
	
	 for (let m = 0; m < continentList[idx].length; m++) {
		 for (let n = 0; n < continentList[index].length; n++) {
			if (JSON.stringify(continentList[idx][m]) == JSON.stringify(continentList[index][n])){
				addonctry = "🟡";
				icon3 = "y";
				break;						
			}
		 }
	 }	
	 
	 for (let m = 0; m < countryList[idx].length; m++) {
		 for (let n = 0; n < countryList[index].length; n++) {
			if (JSON.stringify(countryList[idx][m]) == JSON.stringify(countryList[index][n])){
				addonctry = "🟢";
				icon3 = "g";
				break;						
			}
		 }
	 }		 
	
	
/* 	for (let i = 0; i < indices.length; i++) {
		if (countryList[indices[i]] == countryList[index]) {
			addonctry = "🟢";
			icon3 = "g";
			break;
		}
		else if (continentList[indices[i]] == continentList[index]) {
			addonctry = "🟡";
			icon3 = "y";
		}	
		else if ((countryList[indices[i]] == "RUS" &&  continentList[index] == "EUR") || (countryList[index] == "RUS" &&  continentList[indices[i]] == "EUR")){
		addonctry = "🟡";
		icon3 = "y";	
		}		
	} */
	if (localStorage.modet == "Normal" && !gameOver){
		setTimeout(function(){ 		
			document.getElementById(2).classList.add("zoom-in-box");	
			document.getElementById(2).innerHTML = "<span class='revealicon'>" + addonctry + "</span><br><span class='revealsiz'>Country</span>";
		}, 2000);		
	}
/* 	var tempctry = [];
	for (let j = 0; j < indices.length; j++) {
	    tempctry.push(countryList[indices[j]]);
		tempctry.sort();
		tempctry = [...new Set(tempctry)];
	} */
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + addonctry;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + addonctry;
		}
	}, 600);	
	for (let k = 0; k < countryList[idx].length; k++) { 
		if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + "<span class='smallfont'>" + countryList[idx][k] + "</span>";
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + "<span class='smallfont'>" + countryList[idx][k] + "</span>";
		}
	}	
	var addongnder = "🔴";
	var icon4 = "r";
	if (GenList[indices[0]] == GenList[index]) {
		addongnder = "🟢";
		icon4 = "g";
	}
	if (localStorage.modet == "Normal" && !gameOver){
		setTimeout(function(){ 		
			document.getElementById(3).classList.add("zoom-in-box");	
			document.getElementById(3).innerHTML = "<span class='revealicon'>" + addongnder + "</span><br><span class='revealsiz'>Gender</span>";
		}, 2000);		
	}
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + addongnder;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + addongnder;
		}
	}, 900);
	if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
		document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GenList[indices[0]] + "</span>";
	}
	else{
		document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GenList[indices[0]] + "</span>";
	}	
	var addontitle = "🔴";
	var icon5 = "r";
	if (GSTitleList[indices[0]] == GSTitleList[index]) {
		addontitle = "🟢";
		icon5 = "g";
	}
	else if (Math.abs(Number(GSTitleList[indices[0]]) - Number(GSTitleList[index])) <= 3) {
		addontitle = "🟡";
		icon5 = "y";
	}	
	
	if (localStorage.modet == "Normal" && !gameOver){
		setTimeout(function(){ 		
			document.getElementById(4).classList.add("zoom-in-box");	
			document.getElementById(4).innerHTML = "<span class='revealicon'>" + addontitle + "</span><br><span class='revealsiz'>Titles</span>";
		}, 2000);		
	}
	  setTimeout(function(){ 
		if (Number(GSTitleList[idx]) > Number(GSTitleList[index])){
			addontitle += "️🔻";
		}
		else if (Number(GSTitleList[idx]) < Number(GSTitleList[index])){
			addontitle += "🔺";
		}		  
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + addontitle;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + addontitle;
		}
	}, 1200);	
	if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
		document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GSTitleList[indices[0]] + "</span>";	
	}
	else{
		document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GSTitleList[indices[0]] + "</span>";
	}	
	var addonplays = "🔴";
	var icon6 = "r";
	if (PlaysList[indices[0]] == PlaysList[index]) {
		addonplays = "🟢";
		icon6 = "g";
	}
	if (localStorage.modet == "Normal" && !gameOver){
		setTimeout(function(){ 		
			document.getElementById(5).classList.add("zoom-in-box");	
			document.getElementById(5).innerHTML = "<span class='revealicon'>" + addonplays + "</span><br><span class='revealsiz'>Plays</span>";	
		}, 2000);
	}
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + addonplays;
		}
		else {
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + addonplays;
		}
		document.getElementById("answertext").disabled = false;
		/* document.getElementById("submitbutton").disabled = false; */
		document.getElementById("MODEButton").disabled = false;
		/* document.getElementById("answertext").focus(); */
	}, 1500);		
	if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
		document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + "<span class='smallfont'>" + PlaysList[indices[0]] + "</span>";	
	}
	else{
		document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + "<span class='smallfont'>" + PlaysList[indices[0]] + "</span>";
	}	
	addon = addyr + addongs + addonctry + addongnder + addontitle + addonplays;
	var addonttext = icon1 + icon2 + icon3 + icon4 + icon5 + icon6;
	if (addontextarr.length == 0){
		var temp = JSON.parse(localStorage.getItem("addonttext"));
		if (temp != ""){
			addontextarr.push(temp);
		}
	}
	addontextarr.push(addonttext);
	addontextarr = [].concat.apply([], addontextarr);
	localStorage.setItem("addonttext", JSON.stringify(addontextarr));
	return addon;
}

//Confetti Begin
btnParty.addEventListener("click", () => {
	confetti("tsparticles", {
		angle: 90,
		count: 300,
		position: { x: 50, y: 50 },
		spread: 90,
		startVelocity: 50,
		decay: 0.9,
		gravity: 1,
		drift: 0,
		ticks: 200,
		colors: ["#fff", "#f00"],
		shapes: ["square", "circle"],
		scalar: 1,
		zIndex: 2000,
		disableForReducedMotion: true
	});
});
//Confetti End
//Local Storage Initial Setting
window.localStorage;
if (!localStorage.totaltgames) {
	localStorage.setItem("totaltgames", 0);
	localStorage.setItem("totaltwins", 0)
	localStorage.setItem("currenttstreak", 0)
	localStorage.setItem("longesttstreak", 0);
	//localStorage.setItem("cluet0count", 0);
	localStorage.setItem("cluet1count", 0);
	localStorage.setItem("cluet2count", 0);
	localStorage.setItem("cluet3count", 0);
	localStorage.setItem("cluet4count", 0);
	localStorage.setItem("cluet5count", 0);
	localStorage.setItem("cluet6count", 0);
	localStorage.setItem("cluetxcount", 0);
	localStorage.setItem("cluetcount", "");
	localStorage.setItem("gametwon", 0);
	setTimeout(OpenRules, 1100);
}

if (!localStorage.totaltpoints) {
	localStorage.setItem("totaltpoints", 0);
	localStorage.setItem("tiert", "FUTURES");
}

if (localStorage.cluet0count > 0) {
	localStorage.cluet1count = Number(localStorage.cluet0count) + Number(localStorage.cluet1count);
	localStorage.setItem("tempcluet0count", 0);
	localStorage.tempcluet0count = localStorage.cluet0count;
	localStorage.removeItem("cluet0count");
}

//Counter Construct
var div = document.getElementById("bb");
setInterval(function () {
	var toDate = new Date();
	var tomorrow = new Date();
	tomorrow.setHours(24, 0, 0, 0);
	var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
	var diffHr = Math.floor(diffMS / 3600);
	diffMS = diffMS - diffHr * 3600;
	var diffMi = Math.floor(diffMS / 60);
	diffMS = diffMS - diffMi * 60;
	var diffS = Math.floor(diffMS);
	var result = ((diffHr < 10) ? "0" + diffHr : diffHr);
	result += ":" + ((diffMi < 10) ? "0" + diffMi : diffMi);
	result += ":" + ((diffS < 10) ? "0" + diffS : diffS);
	if (localStorage.getItem('gameover' + days) == 1) {
		div.innerHTML = result;
	}
}, 1000);

//Open Stats at end of game
function OpenStats() {
	document.getElementById("statsbutton").click();
}

function OpenFBModal() {
	document.getElementById("indipop").click();
}

function OpenEASYModal() {
	document.getElementById("easypop").click();
}

function OpenADDModal() {
	document.getElementById("hintpop").click();
}

//Open Rules the very first time
function OpenRules() {
	document.getElementById("rulesbutton").click();
}

/* function OpenFeedback() {
	document.getElementById("fbmodalbut").click();
} */

//Confetti after game successfully completed 
function ConfettiStart() {
	document.getElementById("btnParty").click();
}

//Final Clue Text Attenion 
function FinalClue() {
	document.getElementById("answer").classList.add("popanswer");
}

function disablederror() {
	if (document.getElementById("submitbutton").disabled == true) {
		document.getElementById("answer").style.color = "#dc143c";
		document.getElementById("answer").innerText = "CODE VIOLATION! \nSELECT PLAYER FROM SEARCH RESULTS!";
	}
}

//Button Text
function ResetButton() {
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "COPY STATS🔊"
}

//Adjustment of ClueCount for last guess
function SetClueCount() {
	clueCount += 1;
	if (clueCount == 6) {
		clueCount = 7;
	}
}

//Display Footer after game
function displayFooter() {
	document.getElementById("pzlhdr").style.display = "block";
	document.getElementById("pzl").style.display = "block";
	document.getElementById("bbhdr").style.display = "block";
	document.getElementById("bb").style.display = "block";
	document.getElementById("HTMLButton").style.display = "block";
	document.getElementById("CoffeButton").style.display = "block";
	document.getElementById("tier-item").innerHTML = "<center>🏆 TIER : " + localStorage.tiert + " 🏆 </center>";
	document.getElementById("points-item").innerHTML = "<center>⭐ You Won " + localStorage.dailytpoints + " Ranking Points Today ⭐ </center>";
	document.getElementById("points-item").style.display = "block";
}
//Baseline Date
var a = new Date(); // Current date now.
var b = new Date(2022, 3, 11, 0, 0, 0, 0); // Start of TENIZ.
var d = (a - b); // Difference in milliseconds.
var days = parseInt((d / 1000) / 86400);
if (localStorage.getItem('gameover' + days) != 0 && localStorage.getItem('gameover' + days) != 1) {
	localStorage['gameover' + days] = 0;
	localStorage.yeartopen = 0;
	localStorage.slamtopen = 0;
	localStorage.ctrytopen = 0;
	localStorage.gndrtopen = 0;
	//localStorage.fnfltopen = 0;
	//localStorage.lnfltopen = 0;
	localStorage.titltopen = 0;
	localStorage.playtopen = 0;
	localStorage.try1topen = "-----";
	localStorage.try2topen = "-----";
	localStorage.try3topen = "-----";
	localStorage.try4topen = "-----";
	localStorage.try5topen = "-----";
	localStorage.try6topen = "-----";
	//localStorage.try7topen = "";	
	localStorage.firsttload = 0;
    localStorage.modet = "Normal";
	localStorage.gltttext = "ATTEMPT: 1/6 " + "MODE: " + localStorage.modet;	
	localStorage.setItem("addonttext", JSON.stringify(""));
	localStorage.hinttused = 0;
	localStorage.dailytpoints = 0;
}

for (var d = 1; d < Number(days) ; d++){
	localStorage.removeItem('gameover' + d);
}

function tryload() {
	localStorage.try1topen = document.getElementById('try1').innerText;
	localStorage.try2topen = document.getElementById('try2').innerText;
	localStorage.try3topen = document.getElementById('try3').innerText;
	localStorage.try4topen = document.getElementById('try4').innerText;
	localStorage.try5topen = document.getElementById('try5').innerText;
	localStorage.try6topen = document.getElementById('try6').innerText;
	localStorage.gltttext = document.getElementById('glt').innerText;
	//localStorage.try7topen = document.getElementById('try7').innerText;
}

//Clipboard Code
function myFunction() {

	if (Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) < 50) {
		var winhdr = "🔴"
	}
	else if (Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) >= 50 && Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) < 75) {
		var winhdr = "🟡"
	}
	else if (Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) >= 75) {
		var winhdr = "🟢"
	}
	// //
	if (localStorage.currenttstreak == 0) {
		var cshdr = "🔴"
	}
	else if (localStorage.currenttstreak > 0 && localStorage.currenttstreak < 5) {
		var cshdr = "🟡"
	}
	else if (localStorage.currenttstreak >= 5) {
		var cshdr = "🟢"
	}
	
	// //
	// if (localStorage.longesttstreak == 0) {
	// 	var mshdr = "\n🔴Max Streak: "
	// }
	// else if (localStorage.longesttstreak > 0 && localStorage.longesttstreak < 20) {
	// 	var mshdr = "\n🟡Max Streak: "
	// }
	// else if (localStorage.longesttstreak >= 20) {
	// 	var mshdr = "\n🟢Max Streak: "
	// }
	cluehdr = "/6 Attempts | Ranking Points: " + localStorage.dailytpoints;
/* 	if (localStorage.cluetcount == 0) {
		var clueicon = "🟢⚪⚪⚪⚪⚪⚪";
	}
	else */ if (localStorage.cluetcount == 1) {
		var clueicon = "🟢⚪⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 2) {
		var clueicon = "🔴🟢⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 3) {
		var clueicon = "🔴🔴🟢⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 4) {
		var clueicon = "🔴🔴🔴🟢⚪⚪";
	}
	else if (localStorage.cluetcount == 5) {
		var clueicon = "🔴🔴🔴🔴🟢⚪";
	}
	else if (localStorage.cluetcount == 6) {
		var clueicon = "🔴🔴🔴🔴🔴🟢";
	}
	else if (localStorage.cluetcount == "X") {
		var clueicon = "🔴🔴🔴🔴🔴🔴";
		//cluehdr = "/6. All Clues Exhausted!";
	}
	var avggss = Math.round(((localStorage.cluet1count * 1) + (localStorage.cluet2count * 2) + (localStorage.cluet3count * 3) + (localStorage.cluet4count * 4) + (localStorage.cluet5count * 5) + (localStorage.cluet6count * 6) + (localStorage.cluetxcount * 7)) / (Number(localStorage.cluet1count) + Number(localStorage.cluet2count) + Number(localStorage.cluet3count) + Number(localStorage.cluet4count) + Number(localStorage.cluet5count) + Number(localStorage.cluet6count) + Number(localStorage.cluetxcount)));
	if (avggss <= 3) {
		var avggsshdr = "🟢"
	}
	else if (avggss > 3 && avggss < 6) {
		var avggsshdr = "🟡"
	}
	else if (avggss >= 6) {
		var avggsshdr = "🔴"
	}		
	
/* 	if (localStorage.hinttused == 0) {
		var copyText = "🎾 TENIZ # " + days + " (Mode: " + localStorage.modet + ") 🎾\n\n" + localStorage.cluetcount + cluehdr + "\n" + clueicon + "\n⭐ Points: " + localStorage.totaltpoints + "\n🏆 Tier: " + localStorage.tiert + "\n\nhttps://tenizgame.github.io/";
	}
	else {
		var copyText = "🎾 TENIZ # " + days + " (Mode: " + localStorage.modet + " with💡) 🎾\n\n" + localStorage.cluetcount + cluehdr + "\n" + clueicon + "\n⭐ Points: " + localStorage.totaltpoints + "\n🏆 Tier: " + localStorage.tiert + "\n\nhttps://tenizgame.github.io/";	
	} */
	
	var copyText = "🎾 TENIZ # " + days + " 🎾\n\n" + localStorage.cluetcount + cluehdr + "\n" + clueicon + "\n⭐ Points: " + localStorage.totaltpoints + "\n🏆 Tier: " + localStorage.tiert + "\n\nhttps://tenizgame.github.io/";
	
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);

	//Button Text
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "COPIED☑️"
	setTimeout(ResetButton, 1000);
}

//clue reveal 
function ballvanish0() {
	document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>(1st Win)</span>";
}
function ballvanish1() {
	document.getElementById(1).innerHTML = "";
	switch (GSList[index].length) {
		case 1: document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>(Slams)</span>";
			break;	
		case 2: for (let k = 0; k < GSList[index].length; k++) { 
					document.getElementById(1).innerHTML += "<span class='revealcol'>" + GSList[index][k] + "<br></span>";
				}
				document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
			break;
		case 3: for (let k = 0; k < GSList[index].length; k++) { 
					document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][k] + "<br></span>";
				}
				document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
			break;	
		case 4: document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][0] + ", " + GSList[index][1] + "<br></span>";
				document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][2] + ", " + GSList[index][3] + "<br><br></span>";
				document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
			break;				
	}
}
function ballvanish2() {
	//document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
	document.getElementById(2).innerHTML = "";
	switch (countryList[index].length) {
		case 1: document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
			break;	
		case 2: for (let k = 0; k < countryList[index].length; k++) { 
					document.getElementById(2).innerHTML += "<span class='revealcol'>" + countryList[index][k] + "<br></span>";
				}
				document.getElementById(2).innerHTML += "<span class='revealsiz'>(Country)</span>";
			break;			
	}	
}
function ballvanish3() {
	document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>(Gender)</span>";
}
function ballvanish4() {
	document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>(Titles)</span>";
}
function ballvanish5() {
	document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>(Plays)</span>";
}

//final clue reveal 
function finalcluereveal() {
	document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>1st Win</span>";
	document.getElementById(1).innerHTML = "";
	switch (GSList[index].length) {
		case 1: document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>Slams</span>";
			break;	
		case 2: for (let k = 0; k < GSList[index].length; k++) { 
					document.getElementById(1).innerHTML += "<span class='revealcol'>" + GSList[index][k] + "<br></span>";
				}
				document.getElementById(1).innerHTML += "<span class='revealsiz'>Slams</span>";
			break;
		case 3: for (let k = 0; k < GSList[index].length; k++) { 
					document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][k] + "<br></span>";
				}
				document.getElementById(1).innerHTML += "<span class='revealsiz'>Slams</span>";
			break;	
		case 4: document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][0] + ", " + GSList[index][1] + "<br></span>";
				document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][2] + ", " + GSList[index][3] + "<br><br></span>";
				document.getElementById(1).innerHTML += "<span class='revealsiz'>Slams</span>";
			break;				
	}
	//document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>Country</span>";
	document.getElementById(2).innerHTML = "";
	switch (countryList[index].length) {
		case 1: document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>Country</span>";
			break;	
		case 2: for (let k = 0; k < countryList[index].length; k++) { 
					document.getElementById(2).innerHTML += "<span class='revealcol'>" + countryList[index][k] + "<br></span>";
				}
				document.getElementById(2).innerHTML += "<span class='revealsiz'>Country</span>";
			break;			
	}		
	document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>Gender</span>";
	document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>Titles</span>";
	document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>Plays</span>";
}

//Array Manipulation for Clues
function FetchDataEasy() {
	if (!gameOver) {
		var elementid = GetElemid(arrayid);
		elementid = Number(elementid);
		switch (elementid) {
			case 0: document.getElementById(0).classList.add("zoom-in-out-box");
				setTimeout(ballvanish0, 1500);
				localStorage.yeartopen = 1;
				break;
			case 1: document.getElementById(1).classList.add("zoom-in-out-box");
				setTimeout(ballvanish1, 1500);
				localStorage.slamtopen = 1;
				break;
			case 2: document.getElementById(2).classList.add("zoom-in-out-box");
				setTimeout(ballvanish2, 1500);
				localStorage.ctrytopen = 1;
				break;
			case 3: document.getElementById(3).classList.add("zoom-in-out-box");
				setTimeout(ballvanish3, 1500);
				localStorage.gndrtopen = 1;
				break;
			case 4: document.getElementById(4).classList.add("zoom-in-out-box");
				setTimeout(ballvanish4, 1500);
				//localStorage.fnfltopen = 1;
				localStorage.titltopen = 1;
				break;
			case 5: document.getElementById(5).classList.add("zoom-in-out-box");
				setTimeout(ballvanish5, 1500);
				//localStorage.lnfltopen = 1;
				localStorage.playtopen = 1;
				break;
		}
		arrayid.splice(arrayid.indexOf(elementid), 1);
		clueCount += 1;
	}
}

function FetchDataNormal() {
	if (!gameOver) {
		var elementid = GetElemid(arrayid);
		elementid = Number(elementid);
		switch (elementid) {
			case 0: 
				localStorage.yeartopen = 1;
				break;
			case 1: 
				localStorage.slamtopen = 1;
				break;
			case 2: 
				localStorage.ctrytopen = 1;
				break;
			case 3: 
				localStorage.gndrtopen = 1;
				break;
			case 4: 
				//localStorage.fnfltopen = 1;
				localStorage.titltopen = 1;
				break;
			case 5: 
				//localStorage.lnfltopen = 1;
				localStorage.playtopen = 1;
				break;
		}
		arrayid.splice(arrayid.indexOf(elementid), 1);
		clueCount += 1;
	}
}

function GetElemid() {
	var arrayidind = [Math.floor(Math.random() * arrayid.length)];
	var returnid = arrayid[arrayidind];
	return returnid;
}

// *************************Initial Declaration******************************
var enterHit = false;
var clueCount = 0;
var gameOver = false;
var arrayid = [0, 1, 2, 3, 4, 5]
var yearList = [
"1998",
"2004",
"2011",
"1992",
"2016",
"1976",
"2016",
"1970",
"1977",
"1997",
"1991",
"1979",
"2003",
"2000",
"1999",
"1987",
"2008",
"1982",
"1991",
"2005",
"1953",
"1974",
"2014",
"1981",
"1984",
"2011",
"1977",
"2018",
"1974",
"2004",
"2008",
"1967",
"2002",
"2020",
"1985",
"1968",
"2018",
"2001",
"2010",
"1971",
"2014",
"1997",
"1971",
"1968",
"1980",
"1978",
"1977",
"1974",
"1990",
"1985",
"1989",
"1998",
"2001",
"2009",
"2018",
"1996",
"2021",
"2015",
"2012",
"2004",
"2003",
"1987",
"1976",
"2021",
"1978",
"1977",
"1997",
"1990",
"1996",
"2020",
"1976",
"1972",
"2003",
"2012",
"1995",
"1967",
"2019",
"1995",
"2021",
"1972",
"1980",
"2005",
"2013",
"2017",
"1998",
"2000",
"1979",
"2001",
"1994",
"2002",
"1993",
"2019",
"2006",
"2017",
"1975",
"2003",
"1998",
"1997",
"1989",
"2011",
"1961",
"2022",
"1979",
"2022",
"1990",
"1977",
"2023",
"1960",
"2004",
"1978",
"1983",
"1990",
"2020",
"1966",
"1960",
"2023",
"2023",
]
var countryList = [
["ESP"],
["ARG"],
["CZE"],
["USA"],
["GER"],
["GBR"],
["ESP"],
["CZE"],
["YUG"],
["SWI"],
["USA"],
["USA"],
["SWI"],
["USA"],
["USA"],
["GER"],
["SRB"],
["SWE"],
["GER"],
["ESP"],
["AUS"],
["SWE"],
["CRO"],
["USA","SAF"],
["CZE"],
["CHN"],
["ARG"],
["JPN"],
["USA"],
["RUS"],
["SRB"],
["AUS"],
["ESP"],
["POL"],
["GER"],
["GBR"],
["ROM"],
["USA"],
["ITA"],
["USA"],
["SWI"],
["AUS"],
["AUS"],
["USA"],
["CZE"],
["USA"],
["AUS"],
["USA"],
["USA"],
["SWE"],
["ESP"],
["USA"],
["CRO"],
["ARG"],
["DEN"],
["NLD"],
["CZE"],
["ITA"],
["GBR"],
["RUS"],
["BEL"],
["AUS"],
["ITA"],
["GBR"],
["ROM"],
["USA"],
["BRA"],
["ECU"],
["RUS"],
["AUT"],
["AUS"],
["ROM"],
["USA"],
["BLR"],
["AUT"],
["USA"],
["AUS"],
["FRA"],
["RUS"],
["ESP"],
["USA"],
["BEL"],
["FRA"],
["LAT"],
["CZE"],
["RUS"],
["USA"],
["AUS"],
["ESP"],
["SWE"],
["ESP"],
["CAN"],
["FRA"],
["USA"],
["ESP"],
["ESP"],
["CZE"],
["CRO"],
["USA"],
["AUS"],
["GBR"],
["KAZ"],
["USA"],
["ESP"],
["YUG","USA"],
["USA"],
["BLR"],
["AUS"],
["RUS"],
["AUS"],
["FRA"],
["ARG"],
["USA"],
["USA"],
["AUS"],
["CZE"],
["USA"],
]
var continentList = [
["EUR"],
["SAM"],
["EUR"],
["NAM"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["NAM"],
["NAM"],
["EUR"],
["NAM"],
["NAM"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["AUS"],
["EUR"],
["EUR"],
["NAM","AFR"],
["EUR"],
["ASA"],
["SAM"],
["ASA"],
["NAM"],
["ASA","EUR"],
["EUR"],
["AUS"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["NAM"],
["EUR"],
["NAM"],
["EUR"],
["AUS"],
["AUS"],
["NAM"],
["EUR"],
["NAM"],
["AUS"],
["NAM"],
["NAM"],
["EUR"],
["EUR"],
["NAM"],
["EUR"],
["SAM"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["ASA","EUR"],
["EUR"],
["AUS"],
["EUR"],
["EUR"],
["EUR"],
["NAM"],
["SAM"],
["SAM"],
["ASA","EUR"],
["EUR"],
["AUS"],
["EUR"],
["NAM"],
["EUR"],
["EUR"],
["NAM"],
["AUS"],
["EUR"],
["ASA","EUR"],
["EUR"],
["NAM"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["ASA","EUR"],
["NAM"],
["AUS"],
["EUR"],
["EUR"],
["EUR"],
["NAM"],
["EUR"],
["NAM"],
["EUR"],
["EUR"],
["EUR"],
["EUR"],
["NAM"],
["AUS"],
["EUR"],
["ASA","EUR"],
["NAM"],
["EUR"],
["EUR","NAM"],
["NAM"],
["EUR"],
["AUS"],
["ASA","EUR"],
["AUS"],
["EUR"],
["SAM"],
["NAM"],
["NAM"],
["AUS"],
["EUR"],
["NAM"],
]
var firstnameList = [
"Carlos",
"Gaston",
"Petra",
"Andre",
"Angelique",
"Sue",
"Garbine",
"Jan",
"Mima",
"Martina",
"Jim",
"John",
"Roger",
"Venus",
"Serena",
"Steffi",
"Ana",
"Mats",
"Michael",
"Rafael",
"Ken",
"Bjorn",
"Marin",
"Johan",
"Ivan",
"Li",
"Guillermo",
"Naomi",
"Jimmy",
"Maria",
"Novak",
"John",
"Albert",
"Iga",
"Boris",
"Virginia",
"Simona",
"Jennifer",
"Francesca",
"Stan",
"Stan",
"Patrick",
"Evonne",
"Arthur",
"Hana",
"Martina",
"Kerry",
"Chris",
"Pete",
"Stefan",
"Arantxa",
"Lindsay",
"Goran",
"JuanMartin",
"Caroline",
"Richard",
"Barbora",
"Flavia",
"Andy",
"Anastasia",
"Justine",
"Pat",
"Adriano",
"Emma",
"Virginia",
"Vitas",
"Gustavo",
"Andres",
"Yevgeny",
"Dominic",
"Mark",
"Ilie",
"Andy",
"Victoria",
"Thomas",
"Nancy",
"Ashleigh",
"Mary",
"Daniil",
"Andres",
"Brian",
"Kim",
"Marion",
"Jelena",
"Petr",
"Marat",
"Barbara",
"Lleyton",
"Conchita",
"Thomas",
"Sergi",
"Bianca",
"Amelie",
"Sloane",
"Manuel",
"JuanCarlos",
"Jana",
"Iva",
"Michael",
"Samantha",
"Ann",
"Elena",
"Tracy",
"Carlos",
"Monica",
"Roscoe",
"Aryna",
"Margaret",
"Svetlana",
"Chris",
"Yannick",
"Gabriela",
"Sofia",
"BillieJean",
"Rod",
"Marketa",
"Coco",	
]
var lastnameList = [
"Moya",
"Gaudio",
"Kvitova",
"Agassi",
"Kerber",
"Barker",
"Muguruza",
"Kodes",
"Jausovec",
"Hingis",
"Courier",
"McEnroe",
"Federer",
"Williams",
"Williams",
"Graf",
"Ivanovic",
"Wilander",
"Stich",
"Nadal",
"Rosewall",
"Borg",
"Cilic",
"Kriek",
"Lendl",
"Na",
"Vilas",
"Osaka",
"Connors",
"Sharapova",
"Djokovic",
"Newcombe",
"Costa",
"Swiatek",
"Becker",
"Wade",
"Halep",
"Capriati",
"Schiavone",
"Smith",
"Wawrinka",
"Rafter",
"Goolagong",
"Ashe",
"Mandlikova",
"Navratilova",
"Reid",
"Evert",
"Sampras",
"Edberg",
"Sanchez",
"Davenport",
"Ivanisevic",
"DelPotro",
"Wozniacki",
"Krajicek",
"Krejcikova",
"Pennetta",
"Murray",
"Myskina",
"Henin",
"Cash",
"Panatta",
"Raducanu",
"Ruzici",
"Gerulaitis",
"Kuerten",
"Gomez",
"Kafelnikov",
"Thiem",
"Edmondson",
"Nastase",
"Roddick",
"Azarenka",
"Muster",
"Richey",
"Barty",
"Pierce",
"Medvedev",
"Gimeno",
"Teacher",
"Clijsters",
"Bartoli",
"Ostapenko",
"Korda",
"Safin",
"Jordan",
"Hewitt",
"Martinez",
"Johansson",
"Bruguera",
"Andreescu",
"Mauresmo",
"Stephens",
"Orantes",
"Ferrero",
"Novotna",
"Majoli",
"Chang",
"Stosur",
"Jones",
"Rybakina",
"Austin",
"Alcaraz",
"Seles",
"Tanner",
"Sabalenka",
"Court",
"Kuznetsova",
"ONeil",
"Noah",
"Sabatini",
"Kenin",
"King",
"Laver",
"Vondrousova",	
"Gauff",		
]
var nameList = [
"carlosmoya",
"gastongaudio",
"petrakvitova",
"andreagassi",
"angeliquekerber",
"suebarker",
"garbinemuguruza",
"jankodes",
"mimajausovec",
"martinahingis",
"jimcourier",
"johnmcenroe",
"rogerfederer",
"venuswilliams",
"serenawilliams",
"steffigraf",
"anaivanovic",
"matswilander",
"michaelstich",
"rafaelnadal",
"kenrosewall",
"bjornborg",
"marincilic",
"johankriek",
"ivanlendl",
"lina",
"guillermovilas",
"naomiosaka",
"jimmyconnors",
"mariasharapova",
"novakdjokovic",
"johnnewcombe",
"albertcosta",
"igaswiatek",
"borisbecker",
"virginiawade",
"simonahalep",
"jennifercapriati",
"francescaschiavone",
"stansmith",
"stanwawrinka",
"patrickrafter",
"evonnegoolagong",
"arthurashe",
"hanamandlikova",
"martinanavratilova",
"kerryreid",
"chrisevert",
"petesampras",
"stefanedberg",
"arantxasanchez",
"lindsaydavenport",
"goranivanisevic",
"juanmartindelpotro",
"carolinewozniacki",
"richardkrajicek",
"barborakrejcikova",
"flaviapennetta",
"andymurray",
"anastasiamyskina",
"justinehenin",
"patcash",
"adrianopanatta",
"emmaraducanu",
"virginiaruzici",
"vitasgerulaitis",
"gustavokuerten",
"andresgomez",
"yevgenykafelnikov",
"dominicthiem",
"markedmondson",
"ilienastase",
"andyroddick",
"victoriaazarenka",
"thomasmuster",
"nancyrichey",
"ashleighbarty",
"marypierce",
"daniilmedvedev",
"andresgimeno",
"brianteacher",
"kimclijsters",
"marionbartoli",
"jelenaostapenko",
"petrkorda",
"maratsafin",
"barbarajordan",
"lleytonhewitt",
"conchitamartinez",
"thomasjohansson",
"sergibruguera",
"biancaandreescu",
"ameliemauresmo",
"sloanestephens",
"manuelorantes",
"juancarlosferrero",
"jananovotna",
"ivamajoli",
"michaelchang",
"samanthastosur",
"annjones",
"elenarybakina",
"tracyaustin",
"carlosalcaraz",
"monicaseles",
"roscoetanner",
"arynasabalenka",
"margaretcourt",
"svetlanakuznetsova",
"chrisoneil",
"yannicknoah",
"gabrielasabatini",
"sofiakenin",
"billiejeanking",
"rodlaver",
"marketavondrousova",
"cocogauff",	
]
var GSList = [
["FO"],
["FO"],
["WIM"],
["AO","FO","WIM","USO"],
["AO","WIM","USO"],
["FO"],
["FO","WIM"],
["FO","WIM"],
["FO"],
["AO","WIM","USO"],
["AO","FO"],
["WIM","USO"],
["AO","FO","WIM","USO"],
["WIM","USO"],
["AO","FO","WIM","USO"],
["AO","FO","WIM","USO"],
["FO"],
["AO","FO","USO"],
["WIM"],
["AO","FO","WIM","USO"],
["AO","FO","USO"],
["FO","WIM"],
["USO"],
["AO"],
["AO","FO","USO"],
["AO","FO"],
["AO","FO","USO"],
["AO","USO"],
["AO","WIM","USO"],
["AO","FO","WIM","USO"],
["AO","FO","WIM","USO"],
["AO","WIM","USO"],
["FO"],
["FO","USO"],
["AO","WIM","USO"],
["AO","WIM","USO"],
["FO","WIM"],
["AO","FO"],
["FO"],
["WIM","USO"],
["AO","FO","USO"],
["USO"],
["AO","FO","WIM"],
["AO","WIM","USO"],
["AO","FO","USO"],
["AO","FO","WIM","USO"],
["AO"],
["AO","FO","WIM","USO"],
["AO","WIM","USO"],
["AO","WIM","USO"],
["FO","USO"],
["AO","WIM","USO"],
["WIM"],
["USO"],
["AO"],
["WIM"],
["FO"],
["USO"],
["WIM","USO"],
["FO"],
["AO","FO","USO"],
["WIM"],
["FO"],
["USO"],
["FO"],
["AO"],
["FO"],
["FO"],
["AO","FO"],
["USO"],
["AO"],
["FO","USO"],
["USO"],
["AO"],
["FO"],
["AO","FO"],
["AO","FO","WIM"],
["AO","FO"],
["USO"],
["FO"],
["AO"],
["AO","USO"],
["WIM"],
["FO"],
["AO"],
["AO","USO"],
["AO"],
["WIM","USO"],
["WIM"],
["AO"],
["FO"],
["USO"],
["AO","WIM"],
["USO"],
["USO"],
["FO"],
["WIM"],
["FO"],
["FO"],
["USO"],
["FO","WIM"],
["WIM"],
["USO"],
["WIM","USO"],
["AO","FO","USO"],
["AO"],
["AO"],
["AO","FO","WIM","USO"],
["FO","USO"],
["AO"],
["FO"],
["USO"],
["AO"],
["AO","FO","WIM","USO"],
["AO","FO","WIM","USO"],
["WIM"],
["USO"],
]
var GenList = [
"HE",
"HE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"HE",
"SHE",
"SHE",
"HE",
"HE",
"HE",
"SHE",
"SHE",
"SHE",
"SHE",
"HE",
"HE",
"HE",
"HE",
"HE",
"HE",
"HE",
"HE",
"SHE",
"HE",
"SHE",
"HE",
"SHE",
"HE",
"HE",
"HE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"SHE",
"HE",
"HE",
"HE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"SHE",
"HE",
"HE",
"SHE",
"SHE",
"HE",
"HE",
"SHE",
"HE",
"SHE",
"SHE",
"HE",
"SHE",
"SHE",
"HE",
"HE",
"SHE",
"SHE",
"HE",
"HE",
"HE",
"HE",
"HE",
"HE",
"HE",
"HE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"HE",
"HE",
"HE",
"SHE",
"SHE",
"SHE",
"HE",
"HE",
"SHE",
"HE",
"SHE",
"HE",
"HE",
"SHE",
"SHE",
"SHE",
"HE",
"HE",
"SHE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"SHE",
"HE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"SHE",
"HE",
"SHE",
"SHE",
"SHE",
"HE",	
"SHE",
"SHE",	
]
var GSTitleList = [
"1",
"1",
"2",
"8",
"3",
"1",
"2",
"3",
"1",
"5",
"4",
"7",
"20",
"7",
"23",
"22",
"1",
"7",
"1",
"22",
"8",
"11",
"1",
"2",
"8",
"2",
"4",
"4",
"8",
"5",
"24",
"7",
"1",
"4",
"6",
"3",
"2",
"3",
"1",
"2",
"3",
"2",
"7",
"3",
"4",
"18",
"1",
"18",
"14",
"6",
"4",
"3",
"1",
"1",
"1",
"1",
"1",
"1",
"3",
"1",
"7",
"1",
"1",
"1",
"1",
"1",
"3",
"1",
"2",
"1",
"1",
"2",
"1",
"2",
"1",
"2",
"3",
"2",
"1",
"1",
"1",
"4",
"1",
"1",
"1",
"2",
"1",
"2",
"1",
"1",
"2",
"1",
"2",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"3",
"1",
"2",
"2",
"9",
"1",
"2",
"24",
"2",
"1",
"1",
"1",
"1",
"12",
"11",	
"1",
"1",
]
var PlaysList = [
"RH",
"RH",
"LH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"RH",
"RH",
"RH",
"LH",
"LH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"RH",
"LH",
"LH",
"RH",
]
//var index = days - 1;
if (days%yearList.length > 0){
	var offset = Math.floor(days/yearList.length);
}
else{
	var offset = (days/yearList.length) - 1;
}
if (days > yearList.length){
	var index  = days - 1 - (offset * yearList.length);
}
else {
	var index = days - 1;
}
var firstname = firstnameList[index].toLowerCase();
var lastname = lastnameList[index].toLowerCase();
//var firstname = "martina"
//var lastname = "navratilova"
var year = yearList[index];
var gender = GenList[index];
var grandslam = GSList[index];
var country = countryList[index];
var titles = GSTitleList[index];
var plays = PlaysList[index];
//var fnfl = firstname.slice(0, 1).toUpperCase();
//var lnfl = lastname.slice(0, 1).toUpperCase();
var fnwidth = firstname.length;
var lnwidth = lastname.length;
var width = fnwidth + lnwidth;
var answername = "";
answername = firstname.concat(lastname).toLowerCase();
//console.log(answername);
var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

//Modal Code
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal => {
		closeModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal) {
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}

const openSummaryButtons = document.querySelectorAll('[data-summary-target]')
const closeSummaryButtons = document.querySelectorAll('[data-close1-button]')
const overlay1 = document.getElementById('overlay1')


openSummaryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const summary = document.querySelector(button.dataset.summaryTarget)
		openSummary(summary)
	})
})

overlay1.addEventListener('click', () => {
	const summarys = document.querySelectorAll('.summary.active')
	summarys.forEach(summary => {
		closeSummary(summary)
	})
})

closeSummaryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const summary = button.closest('.summary')
		closeSummary(summary)
	})
})

function openSummary(summary) {
	if (summary == null) return
	UpdateChart();
	summary.classList.add('active')
	overlay1.classList.add('active')
}

function closeSummary(summary) {
	if (summary == null) return
	summary.classList.remove('active')
	overlay1.classList.remove('active')
}


const openHintmodalButtons = document.querySelectorAll('[data-hintmodal-target]')
const closeHintmodalButtons = document.querySelectorAll('[data-close2-button]')
const overlay2 = document.getElementById('overlay2')


openHintmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const hintmodal = document.querySelector(button.dataset.hintmodalTarget)
		openHintmodal(hintmodal)
	})
})

overlay2.addEventListener('click', () => {
	const hintmodals = document.querySelectorAll('.hintmodal.active')
	hintmodals.forEach(hintmodal => {
		closeHintmodal(hintmodal)
	})
})

closeHintmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const hintmodal = button.closest('.hintmodal')
		closeHintmodal(hintmodal)
	})
})

function openHintmodal(hintmodal) {
	if (hintmodal == null) return
	hintmodal.classList.add('active')
	overlay2.classList.add('active')
}

function closeHintmodal(hintmodal) {
	if (hintmodal == null) return
	hintmodal.classList.remove('active')
	overlay2.classList.remove('active')
}

const openFBmodalButtons = document.querySelectorAll('[data-fbmodal-target]')
const closeFBmodalButtons = document.querySelectorAll('[data-close3-button]')
const overlay3 = document.getElementById('overlay3')


openFBmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const fbmodal = document.querySelector(button.dataset.fbmodalTarget)
		openFBmodal(fbmodal)
	})
})

overlay3.addEventListener('click', () => {
	const fbmodals = document.querySelectorAll('.fbmodal.active')
	fbmodals.forEach(fbmodal => {
		closeFBmodal(fbmodal)
	})
})

closeFBmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const fbmodal = button.closest('.fbmodal')
		closeFBmodal(fbmodal)
	})
})

function openFBmodal(fbmodal) {
	if (fbmodal == null) return
	fbmodal.classList.add('active')
	overlay3.classList.add('active')
}

function closeFBmodal(fbmodal) {
	if (fbmodal == null) return
	fbmodal.classList.remove('active')
	overlay3.classList.remove('active')
}

const openEASYmodalButtons = document.querySelectorAll('[data-easymodal-target]')
const closeEASYmodalButtons = document.querySelectorAll('[data-close3-button]')
const overlay5 = document.getElementById('overlay5')


openEASYmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const easymodal = document.querySelector(button.dataset.easymodalTarget)
		openEASYmodal(easymodal)
	})
})

overlay5.addEventListener('click', () => {
	const easymodals = document.querySelectorAll('.easymodal.active')
	easymodals.forEach(easymodal => {
		closeEASYmodal(easymodal)
	})
})

closeEASYmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const easymodal = button.closest('.easymodal')
		closeEASYmodal(easymodal)
	})
})

function openEASYmodal(easymodal) {
	if (easymodal == null) return
	easymodal.classList.add('active')
	overlay5.classList.add('active')
}

function closeEASYmodal(easymodal) {
	if (easymodal == null) return
	easymodal.classList.remove('active')
	overlay5.classList.remove('active')
}

const openADDmodalButtons = document.querySelectorAll('[data-addmodal-target]')
const closeADDmodalButtons = document.querySelectorAll('[data-close3-button]')
const overlay4 = document.getElementById('overlay4')


openADDmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const addmodal = document.querySelector(button.dataset.addmodalTarget)
		openADDmodal(addmodal)
	})
})

overlay4.addEventListener('click', () => {
	const addmodals = document.querySelectorAll('.addmodal.active')
	addmodals.forEach(addmodal => {
		closeADDmodal(addmodal)
	})
})

closeADDmodalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const addmodal = button.closest('.addmodal')
		closeADDmodal(addmodal)
	})
})

function openADDmodal(addmodal) {
	if (addmodal == null) return
	addmodal.classList.add('active')
	overlay4.classList.add('active')
}

function closeADDmodal(addmodal) {
	if (addmodal == null) return
	addmodal.classList.remove('active')
	overlay4.classList.remove('active')
}

//Chart Code
//color0 = "brown"
color1 = "brown"
color2 = "brown"
color3 = "brown"
color4 = "brown"
color5 = "brown"
color6 = "brown"
colorx = "brown"
function UpdateChart() {
	// var xValues = ["0", "1", "2", "3", "4", "5", "6", "X"];
	var xValues = ["1", "2", "3", "4", "5", "6", "X"];
	// var yValues = [localStorage.cluet0count, localStorage.cluet1count, localStorage.cluet2count, localStorage.cluet3count, localStorage.cluet4count, localStorage.cluet5count, localStorage.cluet6count, localStorage.cluetxcount];
	var yValues = [localStorage.cluet1count, localStorage.cluet2count, localStorage.cluet3count, localStorage.cluet4count, localStorage.cluet5count, localStorage.cluet6count, localStorage.cluetxcount];
	//var barColors = ["red", "green","blue","orange","brown","yellow","cyan","white"];
	// var barColors = [color0, color1, color2, color3, color4, color5, color6, colorx];
	var barColors = [color1, color2, color3, color4, color5, color6, colorx];

	new Chart("myChart", {
		type: "bar",
		data: {
			labels: xValues,
			datasets: [{
				backgroundColor: barColors,
				data: yValues
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: false,
				text: "GUESS DISTRIBUTION"
			}
		}
	});
}

// Window Load
window.onload = function () {
	intialize();
	UpdateChart();
}


function intialize() {
	let ele = document.getElementById("daycount");
	ele.innerHTML += (days);
	document.getElementById("tier-item").innerHTML = "<center>🏆 TIER : " + localStorage.tiert + " 🏆 </center>";
	document.getElementById("pzlhdr").style.display = "none";
	document.getElementById("pzl").style.display = "none";
	document.getElementById("bbhdr").style.display = "none";
	document.getElementById("bb").style.display = "none";
	document.getElementById("HTMLButton").style.display = "none";
	document.getElementById("CoffeButton").style.display = "none";
	document.getElementById("points-item").style.display = "none";
	document.getElementById("historyfirst").style.display = "none";
	document.getElementById("historylast").style.display = "none";
	document.getElementById("try1").style.display = "none";
	document.getElementById("try2").style.display = "none";
	document.getElementById("try3").style.display = "none";
	document.getElementById("try4").style.display = "none";
	document.getElementById("try5").style.display = "none";
	document.getElementById("try6").style.display = "none";	
	document.getElementById("trydetail1").style.display = "none";
	document.getElementById("trydetail2").style.display = "none";
	document.getElementById("trydetail3").style.display = "none";
	document.getElementById("trydetail4").style.display = "none";
	document.getElementById("trydetail5").style.display = "none";
	document.getElementById("trydetail6").style.display = "none";
	document.getElementById("indipop").style.display = "none";
	document.getElementById("easypop").style.display = "none";
	document.getElementById("hintpop").style.display = "none";
	if (localStorage.modet == "Easy"){
		document.getElementById("MODEButton").style.display = "none";
		//document.getElementById("historyfirst").style.display = "flex";
		//document.getElementById("historylast").style.display = "flex";		
	}	
	document.getElementById('try1').innerText = localStorage.try1topen;
	document.getElementById('try2').innerText = localStorage.try2topen;
	document.getElementById('try3').innerText = localStorage.try3topen;
	document.getElementById('try4').innerText = localStorage.try4topen;
	document.getElementById('try5').innerText = localStorage.try5topen;
	document.getElementById('try6').innerText = localStorage.try6topen;
	document.getElementById('glt').innerText = localStorage.gltttext;
	//document.getElementById('try7').innerText = localStorage.try7topen;
	// Create the game board
	for (let clueindex = 0; clueindex < 6; clueindex++) {
		// <span id="0-0" class="tile">P</span>
		let clue = document.createElement("span");
		clue.id = clueindex;
		clue.classList.add("clue-ball");
		if (clueindex == 0) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">1st Win</div>';
		}
		else if (clueindex == 1) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Slams</div>';
		}
		else if (clueindex == 2) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Country</div>';
		}
		else if (clueindex == 3) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Gender</div>';
		}
		else if (clueindex == 4) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Titles</div>';
		}
		else if (clueindex == 5) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Plays</div>';
		}
		document.getElementById("clue-ball").appendChild(clue);
	}

	let f = 1
	for (let c = 0; c < fnwidth; c++) {
		let histile = document.createElement("span");
		histile.id = 2 + "-" + c.toString();
		histile.classList.add("histile");
		histile.innerText = "";
		document.getElementById("historyfirst").appendChild(histile);
	}


	let l = 1
	for (let c = fnwidth; c < width; c++) {
		let histile = document.createElement("span");
		histile.id = 2 + "-" + c.toString();
		histile.classList.add("histile");
		histile.innerText = "";
		document.getElementById("historylast").appendChild(histile);
	}
	var winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
	document.getElementById(6).innerText = "Played: " + localStorage.totaltgames;
	document.getElementById(7).innerText = "Win %: " + winpct;
	document.getElementById(8).innerText = "Streak: " + localStorage.currenttstreak;
	//document.getElementById(9).innerText = "Max Streak: " + localStorage.longesttstreak;
	document.getElementById(9).innerText = "Points: " + localStorage.totaltpoints;
	var storedaddon = JSON.parse(localStorage.getItem("addonttext"));
	//Current Day Game Over
	if (localStorage.getItem('gameover' + days) == 1) {
		document.getElementById("answertext").hidden = true;
		document.getElementById("submitbutton").hidden = true;
		document.getElementById("MODEButton").style.display = "none";
		document.getElementById("hintbutton").style.display = "none";
		document.getElementById("historyfirst").style.display = "flex";
		document.getElementById("historylast").style.display = "flex";	
		finalcluereveal();
		storedadd();		
		if (localStorage.gametwon == 1) {
			var cluetcount = Number(localStorage.cluetcount);
			switch (cluetcount) {
				//case 0: localStorage.cluet0count = Number(localStorage.cluet0count) + 1;
				/* 			case 0: document.getElementById('try1').innerText += " ✔️";
								//color0 = "green";
								break; */
				case 1:
					document.getElementById("try1").style.display = "block";
					document.getElementById('try1').style.border = "2px solid #6AAA64";
					color1 = "green";
					break;
				case 2: 
				    document.getElementById("try1").style.display = "block";
					document.getElementById("try2").style.display = "block";
					document.getElementById('try2').style.border = "2px solid #6AAA64";
					color2 = "green";
					break;
				case 3: 
				    document.getElementById("try1").style.display = "block";
					document.getElementById("try2").style.display = "block";				
					document.getElementById("try3").style.display = "block";
					document.getElementById('try3').style.border = "2px solid #6AAA64";
					color3 = "green";
					break;
				case 4: 
				    document.getElementById("try1").style.display = "block";
					document.getElementById("try2").style.display = "block";				
					document.getElementById("try3").style.display = "block";				
					document.getElementById("try4").style.display = "block";
					document.getElementById('try4').style.border = "2px solid #6AAA64";
					color4 = "green";
					break;
				case 5: 
				    document.getElementById("try1").style.display = "block";
					document.getElementById("try2").style.display = "block";				
					document.getElementById("try3").style.display = "block";				
					document.getElementById("try4").style.display = "block";				
					document.getElementById("try5").style.display = "block";
					document.getElementById('try5').style.border = "2px solid #6AAA64";
					color5 = "green";
					break;
				case 6: 
				    document.getElementById("try1").style.display = "block";
					document.getElementById("try2").style.display = "block";				
					document.getElementById("try3").style.display = "block";				
					document.getElementById("try4").style.display = "block";				
					document.getElementById("try5").style.display = "block";				
					document.getElementById("try6").style.display = "block";
					document.getElementById('try6').style.border = "2px solid #6AAA64";
					color6 = "green";
					break;
			}		
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(2 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.add("correct", "animated");
			}
			document.getElementById("answer").style.color = "#FDFEFF";
			document.getElementById("answer").innerText = "YOU HAVE ALREADY WON THIS ROUND.\nNEXT MATCH SCHEDULED FOR TOMORROW!";
			/* setTimeout(ConfettiStart, 1000); */
			setTimeout(OpenStats, 1100);
		}
		else {
			var cluetcount = Number(localStorage.cluetcount);
			colorx = "green";
			document.getElementById("try1").style.display = "block";
			document.getElementById("try2").style.display = "block";				
			document.getElementById("try3").style.display = "block";				
			document.getElementById("try4").style.display = "block";				
			document.getElementById("try5").style.display = "block";				
			document.getElementById("try6").style.display = "block";			
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(2 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.remove("correct");
				gameTile.classList.add("absent", "animated");
			}
			document.getElementById("answer").style.color = "#dc143c";
			document.getElementById("answer").innerText = "HARD LUCK TODAY. \nNEXT TOURNAMENT STARTS TOMORROW!";
			setTimeout(OpenStats, 1100);
		}
		displayFooter();
	}
	// Default Path
	else {
		//setTimeout(OpenRules, 1100);
		if (localStorage.firsttload == 0) {
			document.getElementById("answer").classList.remove("popanswer");
			document.getElementById("answer").style.color = "#FDFEFF";
			document.getElementById("answer").innerText = "LOVE-ALL!\nREAD THE GAME RULES BEFORE PLAYING.";
			setTimeout(FinalClue, 2000);
			if (localStorage.modet == "Easy") {
			setTimeout(FetchDataEasy, 1000);
			}
			else {
			setTimeout(FetchDataNormal, 1000);
			}				
			localStorage.firsttload = 1
		}
		else {
			document.getElementById("answer").classList.remove("popanswer");
			document.getElementById("answer").style.color = "#FDFEFF";
			if (localStorage.modet == "Normal"){
				document.getElementById("answer").innerText = "MATCH RESUMED. PLAY!";
			}
			else {
				document.getElementById("answer").innerText = "MATCH RESUMED IN EASY MODE. PLAY!";
			}
			if (localStorage.yeartopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>(1st Win)</span>";
				}
				arrayid.splice(arrayid.indexOf(0), 1);
				SetClueCount();
			}
			if (localStorage.slamtopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(1).innerHTML = "";
					switch (GSList[index].length) {
						case 1: document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>(Slams)</span>";
							break;	
						case 2: for (let k = 0; k < GSList[index].length; k++) { 
									document.getElementById(1).innerHTML += "<span class='revealcol'>" + GSList[index][k] + "<br></span>";
								}
								document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
							break;
						case 3: for (let k = 0; k < GSList[index].length; k++) { 
									document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][k] + "<br></span>";
								}
								document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
							break;	
						case 4: document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][0] + ", " + GSList[index][1] + "<br></span>";
								document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][2] + ", " + GSList[index][3] + "<br><br></span>";
								document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
							break;				
					}	
				}
				arrayid.splice(arrayid.indexOf(1), 1);
				SetClueCount();
			}
			if (localStorage.ctrytopen == 1) {
				if (localStorage.modet == "Easy") {
					//document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
					document.getElementById(2).innerHTML = "";
					switch (countryList[index].length) {
						case 1: document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
							break;	
						case 2: for (let k = 0; k < countryList[index].length; k++) { 
									document.getElementById(2).innerHTML += "<span class='revealcol'>" + countryList[index][k] + "<br></span>";
								}
								document.getElementById(2).innerHTML += "<span class='revealsiz'>(Country)</span>";
							break;			
					}						
				}
				arrayid.splice(arrayid.indexOf(2), 1);
				SetClueCount();
			}
			if (localStorage.gndrtopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>(Gender)</span>";
				}
				arrayid.splice(arrayid.indexOf(3), 1);
				SetClueCount();
			}
			//if (localStorage.fnfltopen == 1) {
			if (localStorage.titltopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>(Titles)</span>";
				}
				arrayid.splice(arrayid.indexOf(4), 1);
				SetClueCount();
			}
			//if (localStorage.lnfltopen == 1) {
			if (localStorage.playtopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>(Plays)</span>";
				}
				arrayid.splice(arrayid.indexOf(5), 1);
				SetClueCount();
			}
			if (localStorage.modet == "Normal") {
				if (storedaddon != ""){
					var storedaddonlast = storedaddon[storedaddon.length-1];
					for (let i = 0; i < storedaddonlast.length; i++) {
						if (storedaddonlast[i] == "r"){	
							document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🔴";
						}
						else if (storedaddonlast[i] == "y"){
							document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🟡";
						}
						else if (storedaddonlast[i] == "g"){
							document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🟢";
						}     
						else if (storedaddonlast[i] == "b"){
							document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🔵";
						} 						
					}
					document.getElementById(0).innerHTML += "</span><br><span class='revealsiz'>1st Win</span>";
					document.getElementById(1).innerHTML += "</span><br><span class='revealsiz'>Slams</span>";
					document.getElementById(2).innerHTML += "</span><br><span class='revealsiz'>Country</span>";
					document.getElementById(3).innerHTML += "</span><br><span class='revealsiz'>Gender</span>";
					document.getElementById(4).innerHTML += "</span><br><span class='revealsiz'>Titles</span>";
					document.getElementById(5).innerHTML += "</span><br><span class='revealsiz'>Plays</span>";
				}
			}
			storedadd();
		}	
		if (localStorage.try1topen == "-----"){
			/* document.getElementById("try1").style.display = "block"; */
			document.getElementById('try1').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try2topen == "-----"){
			document.getElementById("try1").style.display = "block";
			/* document.getElementById("try2").style.display = "block"; */
			document.getElementById('try2').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try3topen == "-----"){
			document.getElementById("try1").style.display = "block";
			document.getElementById("try2").style.display = "block";			
			/* document.getElementById("try3").style.display = "block"; */
			document.getElementById('try3').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try4topen == "-----"){
			document.getElementById("try1").style.display = "block";
			document.getElementById("try2").style.display = "block";			
			document.getElementById("try3").style.display = "block";			
			/* document.getElementById("try4").style.display = "block"; */
			document.getElementById('try4').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try5topen == "-----"){
			document.getElementById("try1").style.display = "block";
			document.getElementById("try2").style.display = "block";			
			document.getElementById("try3").style.display = "block";			
			document.getElementById("try4").style.display = "block";			
			/* document.getElementById("try5").style.display = "block"; */
			document.getElementById('try5').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try6topen == "-----"){
			document.getElementById("try1").style.display = "block";
			document.getElementById("try2").style.display = "block";			
			document.getElementById("try3").style.display = "block";			
			document.getElementById("try4").style.display = "block";			
			document.getElementById("try5").style.display = "block";			
			/* document.getElementById("try6").style.display = "block"; */
			document.getElementById('try6').style.border = "2px solid #6AAA64"
		}	
		// Listen for Key Press
		/* 		document.addEventListener("keyup", (e) => {
					processInput(e);
				}) */
		if (clueCount == 7 && localStorage.modet == "Easy") {
			 document.getElementById("hintbutton").hidden = false;
		}
	}
}

function switchmode() {
	clearzoomin();
	document.getElementById("clue-ball").classList.add("animated");
    document.getElementById("MODEButton").style.display = "none";
    for (let i = 0; i < 6; i++) {
        document.getElementById(i).innerHTML = "";
    }
	document.getElementById(0).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">1st Win</div>';	
	document.getElementById(1).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Slams</div>';
	document.getElementById(2).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Country</div>';
	document.getElementById(3).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Gender</div>';
	document.getElementById(4).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Titles</div>';
	document.getElementById(5).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Plays</div>';
	document.getElementById("answer").classList.remove("popanswer");
	document.getElementById("answer").style.color = "#FDFEFF";
	document.getElementById("answer").innerText = "MATCH RESUMED IN EASY MODE. PLAY!";
    document.getElementById('glt').innerText = localStorage.gltttext;
	if (clueCount == 7 && localStorage.modet == "Easy") {
		 document.getElementById("hintbutton").hidden = false;
		 document.getElementById("answer").innerText = "ADDITIONAL HINT ENABLED!";
	}	
	if (localStorage.yeartopen == 1) {
		document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>(1st Win)</span>";
	}
	if (localStorage.slamtopen == 1) {
		document.getElementById(1).innerHTML = "";
		switch (GSList[index].length) {
			case 1: document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>(Slams)</span>";
				break;	
			case 2: for (let k = 0; k < GSList[index].length; k++) { 
						document.getElementById(1).innerHTML += "<span class='revealcol'>" + GSList[index][k] + "<br></span>";
					}
					document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
				break;
			case 3: for (let k = 0; k < GSList[index].length; k++) { 
						document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][k] + "<br></span>";
					}
					document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
				break;	
			case 4: document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][0] + ", " + GSList[index][1] + "<br></span>";
					document.getElementById(1).innerHTML += "<span class='revealcol GSsiz'>" + GSList[index][2] + ", " + GSList[index][3] + "<br><br></span>";
					document.getElementById(1).innerHTML += "<span class='revealsiz'>(Slams)</span>";
				break;				
		}
	}
	if (localStorage.ctrytopen == 1) {
		//document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
		document.getElementById(2).innerHTML = "";
		switch (countryList[index].length) {
			case 1: document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
				break;	
			case 2: for (let k = 0; k < countryList[index].length; k++) { 
						document.getElementById(2).innerHTML += "<span class='revealcol'>" + countryList[index][k] + "<br></span>";
					}
					document.getElementById(2).innerHTML += "<span class='revealsiz'>(Country)</span>";
				break;			
		}			
	}
	if (localStorage.gndrtopen == 1) {
		document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>(Gender)</span>";
	}
	if (localStorage.titltopen == 1) {
		document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>(Titles)</span>";
	}
	if (localStorage.playtopen == 1) {
		document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>(Plays)</span>";
	}
	setTimeout(clearanimated, 1000);
}


/* function processKey() {
	e = { "code": this.id };
	processInput(e);
} */

function submitMe() {
	var input = document.getElementById('answertext').value;
	//console.log(clueCount);
	if (input != "") {
		switch (clueCount) {
			/* 			case 0: document.getElementById('try1').innerText = document.getElementById('answertext').value;
							break; */
			case 1: document.getElementById('try1').innerText = document.getElementById('answertext').value;
				break;
			case 2: document.getElementById('try2').innerText = document.getElementById('answertext').value;
				break;
			case 3: document.getElementById('try3').innerText = document.getElementById('answertext').value;
				break;
			case 4: document.getElementById('try4').innerText = document.getElementById('answertext').value;
				break;
			case 5: document.getElementById('try5').innerText = document.getElementById('answertext').value;
				break;
			case 7: document.getElementById('try6').innerText = document.getElementById('answertext').value;
				break;
		}
		document.getElementById('answertext').value = "";
		document.getElementById("submitbutton").disabled = true;
		document.getElementById("result").hidden = true;
		update(input);
	}
	else {
		document.getElementById("answer").style.color = "#dc143c";
		document.getElementById("answer").innerText = "DISORDERLY CONDUCT!\nPLEASE ENTER ANY NAME TO SUBMIT!";
	}
}

function update(input) {
	//string up the guesses into the word
	//first name
	for (let c = 0; c < fnwidth; c++) {
		let historyTile = document.getElementById(2 + '-' + c.toString());
	}

	//last name
	for (let c = fnwidth; c < width; c++) {
		let historyTile = document.getElementById(2 + '-' + c.toString());

	}

	input = input.replace(/\s+/g, '');
	guess = input.toLowerCase();
	if (localStorage.modet == "Normal") {
		clearzoomin();
	}
	
	//console.log(guess);

	if (guess == answername) {
		for (let c = 0; c < width; c++) {
			let gameTile = document.getElementById(2 + '-' + c.toString());
			gameTile.innerText = answername[c];
			gameTile.classList.remove("correct", "poptile");
			gameTile.classList.add("correct", "animated");
		}
		document.getElementById("MODEButton").style.display = "none";
		document.getElementById("hintbutton").style.display = "none";
		document.getElementById("historyfirst").style.display = "flex";
		document.getElementById("historylast").style.display = "flex";	
		document.getElementById("clue-ball").classList.add("animated");
		document.getElementById("answer").style.color = "#FDFEFF";
		localStorage.totaltgames = Number(localStorage.totaltgames) + 1;
		localStorage.totaltwins = Number(localStorage.totaltwins) + 1;
		localStorage.currenttstreak = Number(localStorage.currenttstreak) + 1;
		if (Number(localStorage.currenttstreak) > Number(localStorage.longesttstreak)) {
			localStorage.longesttstreak = localStorage.currenttstreak;
		}
		winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
		switch (clueCount) {
			//case 0: localStorage.cluet0count = Number(localStorage.cluet0count) + 1;
			/* 			case 0: document.getElementById('try1').innerText += " ✔️";
							//color0 = "green";
							break; */
			case 1: localStorage.cluet1count = Number(localStorage.cluet1count) + 1;
			    //document.getElementById("try1").scrollIntoView(true);
				document.getElementById('try1').innerText += " ✔️";
				document.getElementById("try1").style.display = "block";
				document.getElementById('try1').style.border = "2px solid #6AAA64";
				color1 = "green";
				break;
			case 2: localStorage.cluet2count = Number(localStorage.cluet2count) + 1;
			    //document.getElementById("try2").scrollIntoView(true);
				document.getElementById('try2').innerText += " ✔️";
				document.getElementById("try2").style.display = "block";
				document.getElementById('try2').style.border = "2px solid #6AAA64";
				color2 = "green";
				break;
			case 3: localStorage.cluet3count = Number(localStorage.cluet3count) + 1;
				//document.getElementById("try3").scrollIntoView(true);
				document.getElementById('try3').innerText += " ✔️";
				document.getElementById("try3").style.display = "block";
				document.getElementById('try3').style.border = "2px solid #6AAA64";
				color3 = "green";
				break;
			case 4: localStorage.cluet4count = Number(localStorage.cluet4count) + 1;
				//document.getElementById("try4").scrollIntoView(true);
				document.getElementById('try4').innerText += " ✔️";
				document.getElementById("try4").style.display = "block";
				document.getElementById('try4').style.border = "2px solid #6AAA64";
				color4 = "green";
				break;
			case 5: localStorage.cluet5count = Number(localStorage.cluet5count) + 1;
				//document.getElementById("try5").scrollIntoView(true);
				document.getElementById('try5').innerText += " ✔️";
				document.getElementById("try5").style.display = "block";
				document.getElementById('try5').style.border = "2px solid #6AAA64";
				color5 = "green";
				break;
			case 7: localStorage.cluet6count = Number(localStorage.cluet6count) + 1;
				//document.getElementById("try6").scrollIntoView(true);
				document.getElementById('try6').innerText += " ✔️";
				document.getElementById("try6").style.display = "block";
				document.getElementById('try6').style.border = "2px solid #6AAA64";
				color6 = "green";
				break;
		}
		tryload();
		if (clueCount == 7) {
			localStorage.cluetcount = 6;
		}
		else {
			localStorage.cluetcount = Number(clueCount);
		}
		document.getElementById("answer").innerText = "GAME, SET and MATCH!\nDONT FORGET TO SHARE YOUR RESULTS.";
		setTimeout(ConfettiStart, 1000);
		gameOver = true;
		finalcluereveal();
		document.getElementById("answertext").hidden = true;
		document.getElementById("submitbutton").hidden = true;
		localStorage.gametwon = 1;
		localStorage.setItem(('gameover' + days), 1);
		calculatepoints();
		localStorage.totaltpoints = Number(localStorage.totaltpoints) + Number(localStorage.dailytpoints);
		computetier();
		displayFooter();
		document.getElementById(6).innerText = "Played: " + localStorage.totaltgames;
		document.getElementById(7).innerText = "Win %: " + winpct;
		document.getElementById(8).innerText = "Streak: " + localStorage.currenttstreak;
		//document.getElementById(9).innerText = "Max Streak: " + localStorage.longesttstreak;		
		document.getElementById(9).innerText = "Points: " + localStorage.totaltpoints;
		setTimeout(OpenStats, 4800);
	}
	/* 	else if (guess == "") {
			document.getElementById("boardfirst").classList.add("shaketile");
			document.getElementById("boardlast").classList.add("shaketile");
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "PLEASE ENTER ANY NAME TO SUBMIT!";
		} */
	else {
		document.getElementById("answer").style.color = "#dc143c";
		if (!gameOver && clueCount < 6) {
			/* 			document.getElementById("boardfirst").classList.add("shaketile");
						document.getElementById("boardlast").classList.add("shaketile"); */
			if (!gameOver && clueCount == 1 && localStorage.totaltgames == 0){
				setTimeout(OpenFBModal, 3000);
			}	
			if (!gameOver && clueCount == 3 && localStorage.totaltgames == 0 && localStorage.modet == "Normal"){
				setTimeout(OpenEASYModal, 3000);
			}	
			if (!gameOver && clueCount == 5 && localStorage.totaltgames == 0){
				setTimeout(OpenADDModal, 3000);
			}				
			document.getElementById("answer").innerText = "FAULT! TRY AGAIN.";
			if (localStorage.modet == "Easy") {
				//setTimeout(FetchDataEasy, 1000);
				FetchDataEasy();
				}
			else {
				FetchDataNormal();
			}	
		}
		if (!gameOver && clueCount == 6) {
			/* 			document.getElementById("boardfirst").classList.add("shaketile");
						document.getElementById("boardlast").classList.add("shaketile"); */
			document.getElementById("answer").classList.remove("popanswer");
			if (document.getElementById("answer").classList.contains("popanswer")) {
			}
			document.getElementById("answer").style.color = "#dc143c";
			if (localStorage.modet == "Easy") {
				document.getElementById("answer").innerText = "MATCH POINT DOWN!\nADDITIONAL HINT ENABLED.";
			}
			else if (localStorage.modet == "Normal") {
				document.getElementById("answer").innerText = "MATCH POINT DOWN!\nTRY SWITCHING TO EASY MODE.";
			} 
			setTimeout(FinalClue, 2000);
			clueCount += 1;
		}
		else if (!gameOver && clueCount > 6) {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(2 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.remove("correct", "poptile");
				gameTile.classList.add("absent", "animated");
			}
			document.getElementById("MODEButton").style.display = "none";
			document.getElementById("hintbutton").style.display = "none";
			document.getElementById("historyfirst").style.display = "flex";
			document.getElementById("historylast").style.display = "flex";	
			document.getElementById("clue-ball").classList.add("animated");
			document.getElementById("answer").style.color = "#dc143c";
			document.getElementById("answer").innerText = "HARD LUCK TODAY. \nNEXT TOURNAMENT STARTS TOMORROW!";
			localStorage.totaltgames = Number(localStorage.totaltgames) + 1;
			winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
			localStorage.currenttstreak = 0;
			localStorage.cluetxcount = Number(localStorage.cluetxcount) + 1;
			colorx = "green";
			localStorage.cluetcount = "X";
			document.getElementById(6).innerText = "Played:	 " + localStorage.totaltgames;
			document.getElementById(7).innerText = "Win %: " + winpct;
			document.getElementById(8).innerText = "Streak: " + localStorage.currenttstreak;
			gameOver = true;
			document.getElementById('try6').innerText += " ❌ ";
			document.getElementById("try6").classList.add("shaketile");
			var addon = getindices();
			//document.getElementById('try6').innerText += addon;
			document.getElementById('try6').style.border = "2px solid #dc143c";	
			document.getElementById("try6").style.display = "block";			
			tryload();
			document.getElementById("answertext").hidden = true;
			document.getElementById("submitbutton").hidden = true;
			finalcluereveal();
			displayFooter();
			localStorage.gametwon = 0;
			localStorage.setItem(('gameover' + days), 1);
			//document.getElementById("try6").scrollIntoView(true);
			setTimeout(OpenStats, 3000);
		}
		if (!gameOver) {
			switch (clueCount) {
				/* 				case 1: document.getElementById('try1').innerText += " ❌";
									break; */
				case 2: document.getElementById('try1').innerText += " ❌ ";
					//document.getElementById("try1").scrollIntoView(true);
					document.getElementById("try1").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 2/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try1').innerText += addon;
					document.getElementById('try1').style.border = "2px solid #dc143c";
					document.getElementById("try1").style.display = "block";
					document.getElementById('try2').style.border = "2px solid #6AAA64";
					break;
				case 3: document.getElementById('try2').innerText += " ❌ ";
					//document.getElementById("try2").scrollIntoView(true);
					document.getElementById("try2").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 3/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try2').innerText += addon;
					document.getElementById('try2').style.border = "2px solid #dc143c";
					document.getElementById("try2").style.display = "block";
					document.getElementById('try3').style.border = "2px solid #6AAA64";					
					break;
				case 4: document.getElementById('try3').innerText += " ❌ ";
					//document.getElementById("try3").scrollIntoView(true);
					document.getElementById("try3").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 4/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try3').innerText += addon;
					document.getElementById('try3').style.border = "2px solid #dc143c";
					document.getElementById("try3").style.display = "block";
					document.getElementById('try4').style.border = "2px solid #6AAA64";					
					break;
				case 5: document.getElementById('try4').innerText += " ❌ ";
					//document.getElementById("try4").scrollIntoView(true);	
					document.getElementById("try4").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 5/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try4').innerText += addon;
					document.getElementById('try4').style.border = "2px solid #dc143c";
					document.getElementById("try4").style.display = "block";
					document.getElementById('try5').style.border = "2px solid #6AAA64";					
					break;
				case 7: document.getElementById('try5').innerText += " ❌ ";
				    if (localStorage.modet == "Easy") {
						document.getElementById("hintbutton").hidden = false;
					}
					document.getElementById("helpbuttons").classList.add("animated");
				    //document.getElementById("try5").scrollIntoView(true);			
					document.getElementById("try5").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 6/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try5').innerText += addon;
					document.getElementById('try5').style.border = "2px solid #dc143c";
					document.getElementById("try5").style.display = "block";
					document.getElementById('try6').style.border = "2px solid #6AAA64";					
					break;
			}
		}
		tryload();
	}
} 
