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
	localStorage.setItem("cluet0count", 0);
	localStorage.setItem("cluet1count", 0);
	localStorage.setItem("cluet2count", 0);
	localStorage.setItem("cluet3count", 0);
	localStorage.setItem("cluet4count", 0);
	localStorage.setItem("cluet5count", 0);
	localStorage.setItem("cluet6count", 0);
	localStorage.setItem("cluetxcount", 0);
	localStorage.setItem("cluetcount", "");
	localStorage.setItem("gametwon", 0);
	localStorage.setItem("yeartopen", 0);
	localStorage.setItem("slamtopen", 0);
	localStorage.setItem("ctrytopen", 0);
	localStorage.setItem("gndrtopen", 0);
	//localStorage.setItem("fnfltopen", 0);
	//localStorage.setItem("lnfltopen", 0);
	localStorage.setItem("titltopen", 0);
	localStorage.setItem("playtopen", 0);
	setTimeout(OpenRules, 1100);
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

//Open Rules the very first time
function OpenRules() {
	document.getElementById("rulesbutton").click();
}

//Confetti after game successfully completed 
function ConfettiStart() {
	document.getElementById("btnParty").click();
}

//Final Clue Text Attenion 
function FinalClue() {
	document.getElementById("answer").classList.add("popanswer");
}

//Button Text
function ResetButton() {
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "Share Stats🔊"
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
	else if (localStorage.currenttstreak > 0 && localStorage.currenttstreak < 10) {
		var cshdr = "🟡"
	}
	else if (localStorage.currenttstreak >= 10) {
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
	cluehdr = "/6 Clues Used To Win!"
	if (localStorage.cluetcount == 0) {
		var clueicon = "🟢⚪⚪⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 1) {
		var clueicon = "🔴🟢⚪⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 2) {
		var clueicon = "🔴🔴🟢⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 3) {
		var clueicon = "🔴🔴🔴🟢⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 4) {
		var clueicon = "🔴🔴🔴🔴🟢⚪⚪";
	}
	else if (localStorage.cluetcount == 5) {
		var clueicon = "🔴🔴🔴🔴🔴🟢⚪";
	}
	else if (localStorage.cluetcount == 6) {
		var clueicon = "🔴🔴🔴🔴🔴🔴🟢";
	}
	else if (localStorage.cluetcount == "X") {
		var clueicon = "🔴🔴🔴🔴🔴🔴🔴";
		cluehdr = "/6. All Clues Exhausted!";
	}
	var avggss = Math.round(((localStorage.cluet0count * 0) + (localStorage.cluet1count * 1) + (localStorage.cluet2count * 2) + (localStorage.cluet3count * 3) + (localStorage.cluet4count * 4) + (localStorage.cluet5count * 5) + (localStorage.cluet6count * 6) + (localStorage.cluetxcount * 7)) / (Number(localStorage.cluet0count) + Number(localStorage.cluet1count) + Number(localStorage.cluet2count) + Number(localStorage.cluet3count) + Number(localStorage.cluet4count) + Number(localStorage.cluet5count) + Number(localStorage.cluet6count) + Number(localStorage.cluetxcount)));
	if (avggss <= 2) {
		var avggsshdr = "🟢"
	}
	else if (avggss > 2 && avggss < 6) {
		var avggsshdr = "🟡"
	}
	else if (avggss >= 6) {
		var avggsshdr = "🔴"
	}
	//var copyText = "🎾 TENIZ! - Day " + days + " 🎾: " + localStorage.cluetcount + "/6" + "\n\n🟢Played: " + localStorage.totaltgames + winhdr + Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) + cshdr + localStorage.currenttstreak + mshdr + localStorage.longesttstreak + "\n\n💻https://tenizgame.github.io/";
	var copyText = "🎾 TENIZ - Day " + days + " 🎾\n\n" + localStorage.cluetcount + cluehdr + "\n" + clueicon + "\nPlayed: " + localStorage.totaltgames + "|Win %: " + Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) + winhdr + "|Avg. Clues: " + avggss + avggsshdr + "\n\n💻https://tenizgame.github.io/";
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);

	//Button Text
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "Copied☑️"
	setTimeout(ResetButton, 1000);
}

//clue reveal 
function ballvanish0() {
	document.getElementById(0).innerHTML = "<span class='revealcol'>" + year +"</span><br><br><span class='revealsiz'>(Year)</span>";
}
function ballvanish1() {
	document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam +"</span><br><br><span class='revealsiz'>(Slam)</span>";
}
function ballvanish2() {
	document.getElementById(2).innerHTML = "<span class='revealcol'>" + country +"</span><br><br><span class='revealsiz'>(Country)</span>";
}
function ballvanish3() {
	document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender +"</span><br><br><span class='revealsiz'>(Gender)</span>";
}
function ballvanish4() {
	document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles +"</span><br><br><span class='revealsiz'>(Titles)</span>";
}
function ballvanish5() {
	document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays +"</span><br><br><span class='revealsiz'>(Plays)</span>";
}

//Array Manipulation for Clues
function FetchData() {
	if (!gameOver) {
		var elementid = GetElemid(arrayid);
		elementid = Number(elementid);
		switch (elementid) {
			case 0: document.getElementById(0).classList.add("zoom-in-out-box");
				setTimeout(ballvanish0, 950);
				localStorage.yeartopen = 1;
				break;
			case 1: document.getElementById(1).classList.add("zoom-in-out-box");
				setTimeout(ballvanish1, 950);
				localStorage.slamtopen = 1;
				break;
			case 2: document.getElementById(2).classList.add("zoom-in-out-box");
				setTimeout(ballvanish2, 950);
				localStorage.ctrytopen = 1;
				break;
			case 3: document.getElementById(3).classList.add("zoom-in-out-box");
				setTimeout(ballvanish3, 950);
				localStorage.gndrtopen = 1;
				break;
			case 4: document.getElementById(4).classList.add("zoom-in-out-box");
				setTimeout(ballvanish4, 950);
				//localStorage.fnfltopen = 1;
				localStorage.titltopen = 1;
				break;
			case 5: document.getElementById(5).classList.add("zoom-in-out-box");
				setTimeout(ballvanish5, 950);
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
/* setTimeout(FetchData1, 5000)
	function FetchData1(){
		if (!gameOver){
		document.getElementById(0).innerText = catg;
		}
	}	
setTimeout(FetchData2, 15000)
	function FetchData2(){
		if (!gameOver){
		document.getElementById(1).innerText = country;
		}
	}
setTimeout(FetchData3, 25000)
	function FetchData3(){
		if (!gameOver){
		document.getElementById(2).innerText = year;
		}
	}
setTimeout(FetchData4, 35000)
	function FetchData4(){
		if (!gameOver){
		document.getElementById(3).innerText = fnfl;
		}
	}
setTimeout(FetchData5, 45000)
	function FetchData5(){
		if (!gameOver){
		document.getElementById(4).innerText = lnfl;
		}
	}	 */

// *************************Initial Declaration******************************
var enterHit = false;
var clueCount = 0;
var gameOver = false;
var arrayid = [0, 1, 2, 3, 4, 5]
var yearList = ["1984", "2007", "2001", "2013", "1991", "2008", "1985", "1991", "1984", "1993", "2010", "1971", "1977", "2014", "1977", "2014", "1982", "1985", "1987", "2014", "1978", "2019", "2018", "1988", "2017", "1974", "2008", "1987", "2011", "1985", "1992", "1973", "2005", "2002", "1974", "2008", "2020", "1998", "1977", "1991", "1972", "2019", "2002", "1997", "1995", "2010", "1972", "2016", "1998", "2014", "2004", "1977(D)", "2010", "1970", "2000", "1988", "1985", "1981", "2003", "2019", "1983", "1998", "1988", "1994", "2000", "2012", "2015", "2000", "1979", "2015", "1991", "2008", "1992", "1975", "1977(J)", "1971", "1974", "1971", "1985", "1995", "1970", "2018", "1972", "1978", "1971", "2021", "1985", "2009", "2004", "1995", "1978", "1983", "2009", "1988", "1990", "1990", "1971", "2014", "1989", "1984", "1999", "2020", "1981", "2012", "1972", "1970", "1977", "2006", "1969", "1987", "1998", "1987", "2004", "2011", "2000", "1981", "1986", "2018", "2006", "1968", "1976", "1978", "1974", "2016", "1971", "1984", "1989", "1997", "2022", "1975", "2012", "1992", "2013", "1987", "1983", "1983", "2010", "2014", "2008", "2001", "1969", "1991", "1978", "1984", "1995", "2020", "2009", "2001", "1976", "1997", "1984", "1986", "2007", "2016", "2015", "1969", "2009", "1994", "2012", "2010", "2004", "1992", "2018", "1996", "2019", "1985", "1973", "1981", "1989", "2021", "2015", "1994", "1981", "1993", "1996", "2012", "2013", "2004", "2013", "2003", "1987", "1976", "1980", "2021", "2007", "2011", "1988", "1973", "1971", "1982", "1977(D)", "1990", "2002", "1996", "1990", "1994", "2000", "1990", "1998", "2004", "1999", "2016", "1998", "2011", "2005", "1977", "1999", "1975", "1983", "1999", "2020", "2018", "1993", "1976", "1999", "2013", "1972", "1995", "1993", "2003", "1972", "1990", "1989", "2012", "2021", "1995", "1968", "1991", "1979", "2022", "2000", "1968", "1976", "2021", "1996", "1997", "2011", "1976", "1986", "2006", "1972", "2004", "1992", "2013", "1980", "2009", "2011", "1969", "2021", "2014", "2007", "1980", "1970", "2013", "2001", "1990", "2020", "1995", "1983", "2017", "1993", "1975", "2002", "1998", "2005", "1973", "2005", "2019", "1969", "1982", "2003", "2020", "2017", "1974", "2007", "1996", "1980", "1980", "1991", "1982", "1992", "2008", "2009", "1976", "1979", "2001", "1969", "1994", "1996", "1970", "2016", "1991", "1970", "2002", "1993", "1979", "1994", "2017", "2001", "2006", "2008", "1977", "1996", "2002", "2019", "1986", "2006", "2007", "2006", "1979", "2009", "1994", "1982", "1981", "1995", "1989", "1997", "2011", "2017", "1968", "1970", "1975", "1990", "1996", "1984", "2000", "2007", "2006", "2009", "2021", "2002", "1978", "1997", "2003", "1992", "2017", "1975", "2018", "2005", "1980", "2017", "2003", "2005", "2004", "1989", "1974", "1975", "1999", "2014", "1975", "2021", "2001", "2005", "1981", "2001", "1982", "1974", "2016", "1980", "1993", "1979", "1988", "1999", "1970", "2018", "1979", "1976", "2003", "2013", "1989", "1985", "1998", "2010", "1987", "1968", "2016", "1978", "1997", "2012", "1988", "2017", "2012", "1973", "1997", "1974", "1968", "1983", "1989", "2010", "1979", "2015", "1988", "1992", "2015", "2008", "1981", "1999", "2016", "1973", "1972", "1971", "1973", "1969", "2005", "1983", "2019", "1982", "2011", "1984", "1993", "1987", "1980", "2003", "1969", "1978", "2018", "2007", "1977(J)", "1982", "2010", "1994", "2015", "1973", "1986", "2002", "2019", "2000", "1986", "2015", "2006",]
var countryList = ["USA", "SWI", "USA", "USA", "GER", "SRB", "SWE", "GER", "USA", "USA", "ESP", "AUS", "YUG", "USA", "SWE", "CRO", "USA", "CZE", "GER", "CHN", "ARG", "ESP", "JPN", "SWE", "USA", "USA", "RUS", "CZE", "SRB", "USA", "GER", "AUS", "ESP", "ESP", "USA", "USA", "POL", "ESP", "ARG", "GER", "GBR", "ROM", "USA", "USA", "GER", "ITA", "USA", "SWI", "AUS", "SRB", "SWI", "AUS", "USA", "USA", "USA", "GER", "CZE", "USA", "SWI", "JPN", "USA", "USA", "SWE", "ESP", "USA", "USA", "SWI", "USA", "USA", "SRB", "SWE", "ESP", "YUG", "USA", "USA", "USA", "USA", "AUS", "GER", "USA", "AUS", "ESP", "USA", "SWE", "AUS", "SRB", "USA", "RUS", "RUS", "GER", "AUS", "FRA", "USA", "SWE", "SWE", "ARG", "AUS", "ESP", "GER", "USA", "USA", "USA", "USA", "SRB", "USA", "AUS", "USA", "SWI", "AUS", "SWE", "ESP", "CZE", "ARG", "CZE", "USA", "USA", "GER", "GER", "ESP", "USA", "GBR", "USA", "USA", "ESP", "CZE", "USA", "GER", "SWI", "ESP", "USA", "SWI", "SWE", "USA", "USA", "SWE", "USA", "ESP", "SWI", "SRB", "USA", "AUS", "USA", "SWE", "CZE", "GER", "SRB", "SWI", "CRO", "USA", "USA", "USA", "USA", "USA", "GER", "SRB", "AUS", "ARG", "USA", "RUS", "USA", "RUS", "YUG", "DEN", "NLD", "AUS", "USA", "AUS", "SWE", "GER", "CZE", "ITA", "USA", "SAF", "GER", "USA", "ESP", "GBR", "RUS", "SRB", "BEL", "AUS", "ITA", "SWE", "GBR", "USA", "SRB", "GER", "AUS", "USA", "USA", "USA", "USA", "USA", "GER", "CZE", "USA", "BRA", "ECU", "SWI", "BEL", "USA", "SRB", "USA", "ESP", "USA", "ARG", "SWI", "USA", "USA", "RUS", "AUT", "SWI", "USA", "AUS", "GER", "ESP", "ROM", "USA", "YUG", "USA", "AUS", "USA", "GER", "BLR", "SRB", "AUT", "USA", "YUG", "ARG", "AUS", "FRA", "AUS", "SWE", "RUS", "GER", "AUS", "CHN", "USA", "CZE", "RUS", "ESP", "SWI", "USA", "ESP", "USA", "BEL", "SRB", "AUS", "AUS", "CZE", "SWI", "USA", "CZE", "FRA", "USA", "YUG", "ESP", "USA", "USA", "LAT", "GER", "USA", "USA", "CZE", "SWI", "USA", "RUS", "ESP", "AUS", "USA", "BEL", "JPN", "ESP", "AUS", "SWI", "GER", "USA", "SWE", "YUG", "USA", "USA", "SWI", "ESP", "USA", "USA", "AUS", "USA", "ESP", "GER", "AUS", "GBR", "YUG", "AUS", "SWE", "GER", "USA", "ESP", "ESP", "USA", "SWI", "USA", "GBR", "USA", "USA", "CAN", "USA", "FRA", "ESP", "BEL", "SWE", "USA", "ESP", "USA", "USA", "FRA", "GER", "SWI", "BEL", "USA", "GBR", "AUS", "ESP", "GER", "RUS", "SWE", "USA", "BEL", "FRA", "SWI", "JPN", "AUS", "USA", "SWI", "ESP", "YUG", "SWI", "AUS", "SRB", "BEL", "CZE", "ESP", "USA", "USA", "SWI", "ESP", "USA", "AUS", "USA", "RUS", "SWE", "SRB", "BRA", "SWI", "CZE", "USA", "SWE", "SWE", "SRB", "AUS", "ESP", "USA", "GER", "USA", "AUS", "ROM", "SWE", "AUS", "USA", "BLR", "CZE", "SWE", "CZE", "ESP", "USA", "AUS", "GER", "USA", "BRA", "USA", "SWE", "SWI", "GBR", "AUS", "CRO", "USA", "USA", "USA", "USA", "SWI", "USA", "USA", "GER", "USA", "SRB", "ESP", "USA", "USA", "USA", "ROM", "USA", "AUS", "CZE", "AUS", "BEL", "USA", "SRB", "USA", "AUS", "USA", "USA", "CZE", "USA", "USA", "AUS", "ROM", "SRB", "BEL", "AUS", "USA", "BEL", "GER", "USA", "AUS", "USA", "USA", "SRB", "RUS", "CZE", "USA", "SWI",]
var firstnameList = ["John", "Roger", "Venus", "Serena", "Steffi", "Ana", "Mats", "Michael", "Chris", "Pete", "Rafael", "Ken", "Mima", "Serena", "Bjorn", "Marin", "Johan", "Ivan", "Steffi", "Li", "Guillermo", "Rafael", "Naomi", "Mats", "Serena", "Jimmy", "Maria", "Ivan", "Novak", "Chris", "Steffi", "John", "Rafael", "Albert", "Jimmy", "Serena", "Iga", "Arantxa", "Guillermo", "Boris", "Virginia", "Simona", "Jennifer", "Pete", "Steffi", "Francesca", "Stan", "Stan", "Patrick", "Novak", "Roger", "Evonne", "Serena", "Arthur", "Venus", "Steffi", "Hana", "Martina", "Roger", "Naomi", "Chris", "Pete", "Stefan", "Arantxa", "Lindsay", "Serena", "Stan", "Venus", "Tracy", "Novak", "Stefan", "Rafael", "Monica", "Arthur", "Roscoe", "Stan", "Chris", "Evonne", "Boris", "Pete", "Margaret", "Rafael", "BillieJean", "Bjorn", "Evonne", "Novak", "Martina", "Svetlana", "Maria", "Steffi", "Chris", "Yannick", "Serena", "Mats", "Stefan", "Gabriela", "John", "Rafael", "Steffi", "Martina", "Serena", "Sofia", "John", "Novak", "BillieJean", "Margaret", "Chris", "Roger", "Rod", "Stefan", "Carlos", "Hana", "Gaston", "Petra", "Andre", "Tracy", "Boris", "Angelique", "Rafael", "BillieJean", "Sue", "Jimmy", "Chris", "Garbine", "Jan", "Martina", "Boris", "Martina", "Rafael", "BillieJean", "Roger", "Stefan", "Serena", "Martina", "Mats", "Jimmy", "Rafael", "Stan", "Novak", "Venus", "Rod", "Jim", "Bjorn", "Ivan", "Steffi", "Novak", "Roger", "Goran", "Jimmy", "Pete", "Martina", "Chris", "Venus", "Angelique", "Novak", "Rod", "JuanMartin", "Andre", "Maria", "Serena", "Svetlana", "Monica", "Caroline", "Richard", "Ashleigh", "Martina", "Margaret", "Bjorn", "Boris", "Barbora", "Flavia", "Pete", "Johan", "Steffi", "Monica", "Rafael", "Andy", "Anastasia", "Novak", "Justine", "Pat", "Adriano", "Bjorn", "Emma", "Serena", "Novak", "Steffi", "Margaret", "BillieJean", "Chris", "Vitas", "Martina", "Serena", "Steffi", "Ivan", "Pete", "Gustavo", "Andres", "Martina", "Justine", "Andre", "Novak", "Lindsay", "Rafael", "Venus", "Guillermo", "Martina", "Chris", "Martina", "Yevgeny", "Dominic", "Roger", "Jim", "Mark", "Steffi", "Rafael", "Ilie", "Andre", "Monica", "Andy", "Ken", "Pete", "Steffi", "Victoria", "Novak", "Thomas", "Nancy", "Monica", "Guillermo", "Ashleigh", "Mary", "Ken", "Bjorn", "Daniil", "Steffi", "Patrick", "Li", "Chris", "Ivan", "Maria", "Andres", "Roger", "Jim", "Rafael", "Brian", "Kim", "Novak", "Margaret", "Ashleigh", "Petra", "Roger", "Chris", "Jan", "Marion", "Jennifer", "Monica", "Rafael", "Pete", "Martina", "Jelena", "Steffi", "Chris", "Serena", "Petr", "Roger", "BillieJean", "Marat", "Rafael", "Margaret", "Martina", "Justine", "Naomi", "Garbine", "Evonne", "Roger", "Steffi", "John", "Bjorn", "Monica", "Jimmy", "Andre", "Roger", "Rafael", "Chris", "Barbara", "Lleyton", "BillieJean", "Conchita", "Boris", "Margaret", "Andy", "Monica", "Ken", "Thomas", "Steffi", "Martina", "Sergi", "Rafael", "Jennifer", "Roger", "Venus", "Virginia", "Pete", "Serena", "Bianca", "Martina", "Amelie", "Rafael", "Justine", "Bjorn", "Serena", "Arantxa", "Martina", "Chris", "Mary", "Steffi", "Martina", "Kim", "Sloane", "Virginia", "Margaret", "Manuel", "Steffi", "Yevgeny", "Mats", "Pete", "Justine", "Amelie", "Roger", "Naomi", "Lleyton", "Martina", "Martina", "JuanCarlos", "Monica", "Roger", "Evonne", "Novak", "Kim", "Hana", "Rafael", "Andre", "Serena", "Roger", "Arantxa", "BillieJean", "John", "Lindsay", "Maria", "Bjorn", "Novak", "Gustavo", "Roger", "Hana", "Andre", "Mats", "Bjorn", "Novak", "Evonne", "Sergi", "John", "Steffi", "Pete", "John", "Simona", "Bjorn", "Evonne", "Serena", "Victoria", "Ivan", "Stefan", "Jana", "Rafael", "Martina", "Rod", "Angelique", "Chris", "Gustavo", "Serena", "Mats", "Roger", "Andy", "John", "Iva", "Jimmy", "Arthur", "John", "Michael", "Roger", "Chris", "Serena", "Steffi", "Jim", "Novak", "Rafael", "John", "Andre", "Serena", "Ilie", "BillieJean", "Margaret", "Jan", "Rod", "Justine", "Martina", "Novak", "Jimmy", "Samantha", "John", "Pete", "Ivan", "Chris", "Serena", "Margaret", "Virginia", "Novak", "Justine", "Kerry", "Chris", "Kim", "Steffi", "Serena", "Margaret", "Martina", "Pete", "Novak", "Marat", "Ivan", "Serena", "Roger",]
var lastnameList = ["McEnroe", "Federer", "Williams", "Williams", "Graf", "Ivanovic", "Wilander", "Stich", "Evert", "Sampras", "Nadal", "Rosewall", "Jausovec", "Williams", "Borg", "Cilic", "Kriek", "Lendl", "Graf", "Na", "Vilas", "Nadal", "Osaka", "Wilander", "Williams", "Connors", "Sharapova", "Lendl", "Djokovic", "Evert", "Graf", "Newcombe", "Nadal", "Costa", "Connors", "Williams", "Swiatek", "Sanchez", "Vilas", "Becker", "Wade", "Halep", "Capriati", "Sampras", "Graf", "Schiavone", "Smith", "Wawrinka", "Rafter", "Djokovic", "Federer", "Goolagong", "Williams", "Ashe", "Williams", "Graf", "Mandlikova", "Navratilova", "Federer", "Osaka", "Evert", "Sampras", "Edberg", "Sanchez", "Davenport", "Williams", "Wawrinka", "Williams", "Austin", "Djokovic", "Edberg", "Nadal", "Seles", "Ashe", "Tanner", "Smith", "Evert", "Goolagong", "Becker", "Sampras", "Court", "Nadal", "King", "Borg", "Goolagong", "Djokovic", "Navratilova", "Kuznetsova", "Sharapova", "Graf", "ONeil", "Noah", "Williams", "Wilander", "Edberg", "Sabatini", "Newcombe", "Nadal", "Graf", "Navratilova", "Williams", "Kenin", "McEnroe", "Djokovic", "King", "Court", "Evert", "Federer", "Laver", "Edberg", "Moya", "Mandlikova", "Gaudio", "Kvitova", "Agassi", "Austin", "Becker", "Kerber", "Nadal", "King", "Barker", "Connors", "Evert", "Muguruza", "Kodes", "Navratilova", "Becker", "Hingis", "Nadal", "King", "Federer", "Edberg", "Williams", "Navratilova", "Wilander", "Connors", "Nadal", "Wawrinka", "Djokovic", "Williams", "Laver", "Courier", "Borg", "Lendl", "Graf", "Djokovic", "Federer", "Ivanisevic", "Connors", "Sampras", "Navratilova", "Evert", "Williams", "Kerber", "Djokovic", "Laver", "DelPotro", "Agassi", "Sharapova", "Williams", "Kuznetsova", "Seles", "Wozniacki", "Krajicek", "Barty", "Navratilova", "Court", "Borg", "Becker", "Krejcikova", "Pennetta", "Sampras", "Kriek", "Graf", "Seles", "Nadal", "Murray", "Myskina", "Djokovic", "Henin", "Cash", "Panatta", "Borg", "Raducanu", "Williams", "Djokovic", "Graf", "Court", "King", "Evert", "Gerulaitis", "Navratilova", "Williams", "Graf", "Lendl", "Sampras", "Kuerten", "Gomez", "Hingis", "Henin", "Agassi", "Djokovic", "Davenport", "Nadal", "Williams", "Vilas", "Hingis", "Evert", "Navratilova", "Kafelnikov", "Thiem", "Federer", "Courier", "Edmondson", "Graf", "Nadal", "Nastase", "Agassi", "Seles", "Roddick", "Rosewall", "Sampras", "Graf", "Azarenka", "Djokovic", "Muster", "Richey", "Seles", "Vilas", "Barty", "Pierce", "Rosewall", "Borg", "Medvedev", "Graf", "Rafter", "Na", "Evert", "Lendl", "Sharapova", "Gimeno", "Federer", "Courier", "Nadal", "Teacher", "Clijsters", "Djokovic", "Court", "Barty", "Kvitova", "Federer", "Evert", "Kodes", "Bartoli", "Capriati", "Seles", "Nadal", "Sampras", "Navratilova", "Ostapenko", "Graf", "Evert", "Williams", "Korda", "Federer", "King", "Safin", "Nadal", "Court", "Navratilova", "Henin", "Osaka", "Muguruza", "Goolagong", "Federer", "Graf", "McEnroe", "Borg", "Seles", "Connors", "Agassi", "Federer", "Nadal", "Evert", "Jordan", "Hewitt", "King", "Martinez", "Becker", "Court", "Murray", "Seles", "Rosewall", "Johansson", "Graf", "Navratilova", "Bruguera", "Nadal", "Capriati", "Federer", "Williams", "Wade", "Sampras", "Williams", "Andreescu", "Navratilova", "Mauresmo", "Nadal", "Henin", "Borg", "Williams", "Sanchez", "Navratilova", "Evert", "Pierce", "Graf", "Hingis", "Clijsters", "Stephens", "Wade", "Court", "Orantes", "Graf", "Kafelnikov", "Wilander", "Sampras", "Henin", "Mauresmo", "Federer", "Osaka", "Hewitt", "Navratilova", "Hingis", "Ferrero", "Seles", "Federer", "Goolagong", "Djokovic", "Clijsters", "Mandlikova", "Nadal", "Agassi", "Williams", "Federer", "Sanchez", "King", "Newcombe", "Davenport", "Sharapova", "Borg", "Djokovic", "Kuerten", "Federer", "Mandlikova", "Agassi", "Wilander", "Borg", "Djokovic", "Goolagong", "Bruguera", "McEnroe", "Graf", "Sampras", "Newcombe", "Halep", "Borg", "Goolagong", "Williams", "Azarenka", "Lendl", "Edberg", "Novotna", "Nadal", "Navratilova", "Laver", "Kerber", "Evert", "Kuerten", "Williams", "Wilander", "Federer", "Murray", "Newcombe", "Majoli", "Connors", "Ashe", "McEnroe", "Chang", "Federer", "Evert", "Williams", "Graf", "Courier", "Djokovic", "Nadal", "McEnroe", "Agassi", "Williams", "Nastase", "King", "Court", "Kodes", "Laver", "Henin", "Navratilova", "Djokovic", "Connors", "Stosur", "McEnroe", "Sampras", "Lendl", "Evert", "Williams", "Court", "Ruzici", "Djokovic", "Henin", "Reid", "Evert", "Clijsters", "Graf", "Williams", "Court", "Navratilova", "Sampras", "Djokovic", "Safin", "Lendl", "Williams", "Federer",]
var GSList = ["USO", "WIM", "USO", "USO", "WIM", "FO", "FO", "WIM", "AO", "USO", "FO", "AO", "FO", "USO", "WIM", "USO", "AO", "USO", "FO", "AO", "AO", "USO", "USO", "USO", "AO", "USO", "AO", "USO", "USO", "FO", "WIM", "AO", "FO", "FO", "AO", "USO", "FO", "FO", "FO", "AO", "AO", "WIM", "AO", "AO", "FO", "FO", "WIM", "USO", "USO", "WIM", "AO", "AO", "AO", "AO", "USO", "FO", "USO", "AO", "WIM", "AO", "FO", "WIM", "WIM", "FO", "AO", "WIM", "FO", "WIM", "USO", "WIM", "USO", "WIM", "AO", "WIM", "AO", "USO", "WIM", "WIM", "WIM", "USO", "WIM", "FO", "USO", "WIM", "FO", "WIM", "WIM", "FO", "WIM", "WIM", "AO", "FO", "WIM", "FO", "WIM", "USO", "WIM", "FO", "WIM", "FO", "USO", "AO", "WIM", "AO", "FO", "USO", "USO", "USO", "USO", "AO", "FO", "AO", "FO", "WIM", "AO", "USO", "WIM", "WIM", "FO", "WIM", "FO", "USO", "FO", "FO", "FO", "USO", "USO", "USO", "AO", "WIM", "WIM", "USO", "FO", "USO", "AO", "USO", "USO", "AO", "AO", "WIM", "FO", "FO", "FO", "FO", "USO", "AO", "FO", "WIM", "USO", "WIM", "WIM", "FO", "WIM", "AO", "AO", "AO", "USO", "USO", "FO", "WIM", "USO", "USO", "AO", "WIM", "FO", "AO", "FO", "FO", "WIM", "FO", "USO", "WIM", "AO", "USO", "AO", "FO", "WIM", "FO", "AO", "USO", "WIM", "FO", "FO", "USO", "AO", "AO", "USO", "USO", "USO", "AO", "AO", "WIM", "USO", "USO", "AO", "AO", "FO", "FO", "AO", "AO", "FO", "AO", "USO", "FO", "WIM", "USO", "AO", "USO", "USO", "AO", "USO", "AO", "AO", "AO", "FO", "FO", "USO", "AO", "AO", "USO", "AO", "USO", "USO", "AO", "AO", "FO", "FO", "AO", "AO", "AO", "FO", "FO", "WIM", "USO", "WIM", "USO", "FO", "WIM", "USO", "USO", "FO", "USO", "AO", "USO", "AO", "USO", "WIM", "USO", "WIM", "WIM", "AO", "USO", "FO", "WIM", "FO", "FO", "FO", "WIM", "AO", "FO", "WIM", "FO", "WIM", "AO", "WIM", "WIM", "AO", "FO", "FO", "FO", "FO", "USO", "WIM", "AO", "USO", "FO", "USO", "WIM", "FO", "WIM", "WIM", "USO", "AO", "USO", "AO", "USO", "WIM", "WIM", "AO", "FO", "WIM", "USO", "USO", "AO", "FO", "WIM", "FO", "FO", "AO", "AO", "WIM", "WIM", "USO", "FO", "USO", "WIM", "AO", "FO", "FO", "WIM", "AO", "USO", "WIM", "WIM", "AO", "AO", "AO", "AO", "USO", "USO", "AO", "USO", "AO", "FO", "AO", "WIM", "FO", "WIM", "WIM", "AO", "WIM", "WIM", "WIM", "FO", "FO", "AO", "AO", "WIM", "USO", "AO", "USO", "AO", "AO", "WIM", "FO", "USO", "AO", "WIM", "FO", "FO", "FO", "FO", "USO", "FO", "AO", "FO", "FO", "FO", "WIM", "FO", "USO", "WIM", "WIM", "WIM", "FO", "FO", "AO", "WIM", "AO", "AO", "AO", "WIM", "WIM", "WIM", "WIM", "USO", "USO", "FO", "USO", "AO", "WIM", "USO", "USO", "FO", "WIM", "USO", "WIM", "FO", "AO", "FO", "FO", "AO", "FO", "USO", "FO", "USO", "USO", "WIM", "FO", "WIM", "AO", "WIM", "WIM", "FO", "WIM", "AO", "USO", "USO", "WIM", "WIM", "FO", "FO", "AO", "AO", "FO", "USO", "USO", "AO", "USO", "USO", "AO", "WIM", "AO", "USO", "USO", "WIM", "USO", "FO", "AO", "WIM",]
var GenList = ["HE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "HE", "HE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "HE", "HE", "SHE", "HE", "HE", "HE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE", "HE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE",]
var GSTitleList = ["7",  "20", "7", "23", "22", "1", "7", "1", "18", "14", "21", "8", "1", "23", "11", "1", "2", "8", "22", "2", "4", "21", "4", "7", "23", "8", "5", "8", "20", "18", "22", "7", "21", "1", "8", "23", "1", "4", "4", "6", "3", "2", "3", "14", "22", "1", "2", "3", "2", "20", "20", "7", "23", "3", "7", "22", "4", "18", "20", "4", "18", "14", "6", "4", "3", "23", "3", "7", "2", "20", "6", "21", "9", "3", "1", "2", "18", "7", "6", "14", "24", "21", "12", "11", "7", "20", "18", "2", "5", "22", "1", "1", "23", "7", "6", "1", "7", "21", "22", "18", "23", "1", "7", "20", "12", "24", "18", "20", "11", "6", "1", "4", "1", "2", "8", "2", "6", "3", "21", "12", "1", "8", "18", "2", "3", "18", "6", "5", "21", "12", "20", "6", "23", "18", "7", "8", "21", "3", "20", "7", "11", "4", "11", "8", "22", "20", "20", "1", "8", "14", "18", "18", "7", "3", "20", "11", "1", "8", "5", "23", "2", "9", "1", "1", "3", "18", "24", "11", "6", "1", "1", "14", "2", "22", "9", "21", "3", "1", "20", "7", "1", "1", "11", "1", "23", "20", "22", "24", "12", "18", "1", "18", "23", "22", "8", "14", "3", "1", "5", "7", "8", "20", "3", "21", "7", "4", "5", "18", "18", "2", "1", "20", "4", "1", "22", "21", "2", "8", "9", "1", "8", "14", "22", "2", "20", "1", "2", "9", "4", "3", "2", "8", "11", "1", "22", "2", "2", "18", "8", "5", "1", "20", "4", "21", "1", "4", "20", "24", "3", "2", "20", "18", "3", "1", "3", "9", "21", "14", "18", "1", "22", "18", "23", "1", "20", "12", "2", "21", "24", "18", "7", "4", "2", "7", "20", "22", "7", "11", "9", "8", "8", "20", "21", "18", "1", "2", "12", "1", "6", "24", "3", "9", "8", "1", "22", "18", "2", "21", "3", "20", "7", "3", "14", "23", "1", "18", "2", "21", "7", "11", "23", "4", "18", "18", "2", "22", "5", "4", "1", "3", "24", "1", "22", "2", "7", "14", "7", "2", "20", "4", "2", "18", "5", "1", "9", "20", "7", "20", "4", "4", "21", "8", "23", "20", "4", "12", "7", "3", "5", "11", "20", "3", "20", "4", "8", "7", "11", "20", "7", "2", "7", "22", "14", "7", "2", "11", "7", "23", "2", "8", "6", "1", "21", "18", "11", "3", "18", "3", "23", "7", "20", "3", "7", "1", "8", "3", "7", "1", "20", "18", "23", "22", "4", "20", "21", "7", "8", "23", "2", "12", "24", "3", "11", "7", "18", "20", "8", "1", "7", "14", "8", "18", "23", "24", "1", "20", "7", "1", "18", "4", "22", "23", "24", "18", "14", "20", "2", "8", "23", "20",]
var PlaysList = ["LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "LH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "LH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "LH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "LH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "LH", "RH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH",]
var index = days - 1;
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

//Chart Code
color0 = "brown"
color1 = "brown"
color2 = "brown"
color3 = "brown"
color4 = "brown"
color5 = "brown"
color6 = "brown"
colorx = "brown"
function UpdateChart() {
	var xValues = ["0", "1", "2", "3", "4", "5", "6", "X"];
	var yValues = [localStorage.cluet0count, localStorage.cluet1count, localStorage.cluet2count, localStorage.cluet3count, localStorage.cluet4count, localStorage.cluet5count, localStorage.cluet6count, localStorage.cluetxcount];
	//var barColors = ["red", "green","blue","orange","brown","yellow","cyan","white"];
	var barColors = [color0, color1, color2, color3, color4, color5, color6, colorx];

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
				display: true,
				text: "Guess Distribution"
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
	document.getElementById("pzlhdr").style.display = "none";
	document.getElementById("pzl").style.display = "none";
	document.getElementById("bbhdr").style.display = "none";
	document.getElementById("bb").style.display = "none";
	document.getElementById("HTMLButton").style.display = "none";
	document.getElementById("CoffeButton").style.display = "none";
	// Create the game board
	for (let clueindex = 0; clueindex < 6; clueindex++) {
		// <span id="0-0" class="tile">P</span>
		let clue = document.createElement("span");
		clue.id = clueindex;
		clue.classList.add("clue-ball");
		if (clueindex == 0) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Year</div>';
		}
		else if (clueindex == 1) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Slam</div>';
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
	// for (let r = 0; r < height; r++) {
	let f = 1
	for (let c = 0; c < fnwidth; c++) {
		// <span id="0-0" class="tile">P</span>
		let tile = document.createElement("span");
		tile.id = f.toString() + "-" + c.toString();
		tile.classList.add("tile");
		tile.innerText = "";
		document.getElementById("boardfirst").appendChild(tile);
		let histile = document.createElement("span");
		histile.id = 2 + "-" + c.toString();
		histile.classList.add("histile");
		histile.innerText = "";
		document.getElementById("historyfirst").appendChild(histile);
	}
	//}

	let l = 1
	for (let c = fnwidth; c < width; c++) {
		// <span id="0-0" class="tile">P</span>
		let tile = document.createElement("span");
		tile.id = l.toString() + "-" + c.toString();
		tile.classList.add("tile");
		tile.innerText = "";
		document.getElementById("boardlast").appendChild(tile);
		let histile = document.createElement("span");
		histile.id = 2 + "-" + c.toString();
		histile.classList.add("histile");
		histile.innerText = "";
		document.getElementById("historylast").appendChild(histile);
	}
	//}	  
	var winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
	document.getElementById(6).innerText = "Played: " + localStorage.totaltgames;
	document.getElementById(7).innerText = "Win %: " + winpct;
	document.getElementById(8).innerText = "Current Streak: " + localStorage.currenttstreak;
	document.getElementById(9).innerText = "Max Streak: " + localStorage.longesttstreak;

	//Current Day Game Over
	if (localStorage.getItem('gameover' + days) == 1) {
		if (localStorage.gametwon == 1) {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(1 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.add("correct", "animated");
			}
			document.getElementById("answer").style.color = "#FDFEFF";
			document.getElementById("answer").innerText = "You have already identified today's player.\nCome back again tomorrow!";
			/* setTimeout(ConfettiStart, 1000); */
			setTimeout(OpenStats, 1100);
		}
		else {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(1 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.remove("correct");
				gameTile.classList.add("absent", "animated");
			}
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "HARD LUCK TODAY. TRY AGAIN TOMORROW!";
			setTimeout(OpenStats, 1100);
		}
		displayFooter();
	}
	// Default Path
	else {
		if (localStorage.yeartopen == 1) {
			document.getElementById(0).innerHTML = "<span class='revealcol'>" + year +"</span><br><br><span class='revealsiz'>(Year)</span>";
			arrayid.splice(arrayid.indexOf(0), 1);
			SetClueCount();
		}
		if (localStorage.slamtopen == 1) {
			document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam +"</span><br><br><span class='revealsiz'>(Slam)</span>";
			arrayid.splice(arrayid.indexOf(1), 1);
			SetClueCount();
		}
		if (localStorage.ctrytopen == 1) {
			document.getElementById(2).innerHTML = "<span class='revealcol'>" + country +"</span><br><br><span class='revealsiz'>(Country)</span>";
			arrayid.splice(arrayid.indexOf(2), 1);
			SetClueCount();
		}
		if (localStorage.gndrtopen == 1) {
			document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender +"</span><br><br><span class='revealsiz'>(Gender)</span>";
			arrayid.splice(arrayid.indexOf(3), 1);
			SetClueCount();
		}
		//if (localStorage.fnfltopen == 1) {
		if (localStorage.titltopen == 1) {
			document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles +"</span><br><br><span class='revealsiz'>(Titles)</span>";
			arrayid.splice(arrayid.indexOf(4), 1);
			SetClueCount();
		}
		//if (localStorage.lnfltopen == 1) {
		if (localStorage.playtopen == 1) {
			document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays +"</span><br><br><span class='revealsiz'>(Plays)</span>";
			arrayid.splice(arrayid.indexOf(5), 1);
			SetClueCount();
		}
		document.getElementById("answer").classList.remove("popanswer");	
		if (document.getElementById("answer").classList.contains("popanswer")){
			console.log("has popanswer");
		}		
		document.getElementById("answer").style.color = "#FDFEFF";
		document.getElementById("answer").innerText = "READ THE GAME RULES BEFORE PLAYING!";
		setTimeout(FinalClue, 2000);
		// Create the key board
		let keyboard = [
			["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
			["A", "S", "D", "F", "G", "H", "J", "K", "L"],
			["⏎", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
		]

		/*      let keyboard = [
				["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
				["A", "S", "D", "F", "G", "H", "J", "K", "L", "Clr"],
				["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
			]	 */

		for (let i = 0; i < keyboard.length; i++) {
			let currRow = keyboard[i];
			let keyboardRow = document.createElement("div");
			keyboardRow.classList.add("keyboard-row");

			for (let j = 0; j < currRow.length; j++) {
				let keyTile = document.createElement("div");

				let key = currRow[j];
				keyTile.innerText = key;
				if (key == "⏎") {
					keyTile.id = "Enter";
				}
				else if (key == "⌫") {
					keyTile.id = "Backspace";
				}
				else if (key == "Clr") {
					keyTile.id = "Clr";
				}
				else if ("A" <= key && key <= "Z") {
					keyTile.id = "Key" + key; // "Key" + "A";
				}

				keyTile.addEventListener("click", processKey);

				if (key == "⏎" || key == "⌫") {
					keyTile.classList.add("enter-key-tile");
				} else {
					keyTile.classList.add("key-tile");
				}
				keyboardRow.appendChild(keyTile);
			}
			document.body.appendChild(keyboardRow);
		}
		var mybr = document.createElement('br');
		document.body.appendChild(mybr);
		var mybr = document.createElement('br');
		document.body.appendChild(mybr);
		var button = document.createElement("button");
		button.innerText = "Buy Me a Coffee❤️";
		// attach the event
		button.addEventListener('click', function(){
		  window.open('https://www.buymeacoffee.com/sank0403/', '_blank'); // _blank will open the site in a new tab
		});
		document.body.appendChild(button);
		button.classList.add("buttonrad");

		// Listen for Key Press
		document.addEventListener("keyup", (e) => {
			processInput(e);
		})
	}
}


function processKey() {
	e = { "code": this.id };
	processInput(e);
}

function processInput(e) {
	if (gameOver) return;

	// alert(e.code);
	if ("KeyA" <= e.code && e.code <= "KeyZ") {
		if (enterHit == true) {
			for (let c = col - 1; c >= 0; c--) {
				let currTile = document.getElementById(1 + '-' + c.toString());
				currTile.innerText = "";
				currTile.classList.remove("correct", "present", "poptile");
				col -= 1;
			}
			let currTile = document.getElementById(1 + '-' + 0);
			currTile.innerText = e.code[3];
			currTile.classList.add("poptile");
			col = 1;
			enterHit = false;
		}
		else {
			if (col < width) {
				let currTile = document.getElementById(1 + '-' + col.toString());
				if (currTile.innerText == "") {
					currTile.innerText = e.code[3];
					currTile.classList.add("poptile");
					col += 1;
				}
			}
		}
		document.getElementById("answer").innerText = "";
	}
	else if (e.code == "Backspace") {
		if (enterHit == true) {
			for (let c = col - 1; c >= 0; c--) {
				let currTile = document.getElementById(1 + '-' + c.toString());
				currTile.innerText = "";
				currTile.classList.remove("correct", "present", "poptile");
				col -= 1;
			}
			enterHit = false;
		}
		else {
			if (0 < col && col <= width) {
				col -= 1;
			}
			let currTile = document.getElementById(1 + '-' + col.toString());
			currTile.innerText = "";
			currTile.classList.remove("correct", "present", "poptile");
		}
		document.getElementById("answer").innerText = "";
	}
	else if (e.code == "Clr") {
		enterHit = false;
		if (confirm('Are you sure you want to clear the entry?')) {
			// Clear it!
			for (let c = col - 1; c >= 0; c--) {
				let currTile = document.getElementById(1 + '-' + c.toString());
				currTile.innerText = "";
				currTile.classList.remove("correct", "present");
				col -= 1;
			}
		} else {
			// Do nothing!
		}
	}
	else if (e.code == "Enter") {
		update();
	}
}

function update() {
	enterHit = true;
	document.getElementById("boardfirst").classList.remove("shaketile");
	document.getElementById("boardlast").classList.remove("shaketile");
	let guess = "";
	document.getElementById("answer").innerText = "";

	let fnletterCount = {}; //keep track of letter frequency first name, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
	for (let i = 0; i < fnwidth; i++) {
		let letter = firstname[i];

		if (fnletterCount[letter]) {
			fnletterCount[letter] += 1;
		}
		else {
			fnletterCount[letter] = 1;
		}
	}


	let lnletterCount = {}; //keep track of letter frequency last name, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
	for (let i = 0; i < lnwidth; i++) {
		let letter = lastname[i];

		if (lnletterCount[letter]) {
			lnletterCount[letter] += 1;
		}
		else {
			lnletterCount[letter] = 1;
		}
	}

	/*     let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
		for (let i = 0; i < answername.length; i++) {
			let letter = answername[i];
	
			if (letterCount[letter]) {
			   letterCount[letter] += 1;
			} 
			else {
			   letterCount[letter] = 1;
			}
		} */
	//string up the guesses into the word
	//first name
	for (let c = 0; c < fnwidth; c++) {
		let currTile = document.getElementById(1 + '-' + c.toString());
		let historyTile = document.getElementById(2 + '-' + c.toString());
		let letter = currTile.innerText;
		if (answername[c] == letter.toLowerCase()) {
			currTile.classList.add("correct");
			historyTile.classList.add("correct");
			historyTile.innerText = currTile.innerText;
			fnletterCount[letter.toLowerCase()] -= 1;
			let keyTile = document.getElementById("Key" + letter);
			keyTile.classList.remove("keypresent");

		}
		guess += letter;
	}
	//last name
	for (let c = fnwidth; c < width; c++) {
		let currTile = document.getElementById(1 + '-' + c.toString());
		let historyTile = document.getElementById(2 + '-' + c.toString());
		let letter = currTile.innerText;
		if (answername[c] == letter.toLowerCase()) {
			currTile.classList.add("correct");
			historyTile.classList.add("correct");
			historyTile.innerText = currTile.innerText;
			lnletterCount[letter.toLowerCase()] -= 1;
			let keyTile = document.getElementById("Key" + letter);
			keyTile.classList.remove("keypresent");
		}

		guess += letter;
	}

	guess = guess.toLowerCase(); //case sensitive	

	if (guess == answername) {
		for (let c = 0; c < width; c++) {
			let currTile = document.getElementById(1 + '-' + c.toString());
			let historyTile = document.getElementById(2 + '-' + c.toString());
			let letter = currTile.innerText;
			historyTile.classList.remove("correct");
			historyTile.innerText = "";
			//currTile.classList.add("correct");
			let keyTile = document.getElementById("Key" + letter);
			keyTile.classList.remove("keypresent");
			//keyTile.classList.add("correct");			
			currTile.classList.remove("poptile");
			currTile.classList.add("animated");
		}
		document.getElementById("answer").style.color = "#FDFEFF";
		localStorage.totaltgames = Number(localStorage.totaltgames) + 1;
		localStorage.totaltwins = Number(localStorage.totaltwins) + 1;
		localStorage.currenttstreak = Number(localStorage.currenttstreak) + 1;
		if (localStorage.currenttstreak > localStorage.longesttstreak) {
			localStorage.longesttstreak = localStorage.currenttstreak;
		}
		winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
		switch (clueCount) {
			case 0: localStorage.cluet0count = Number(localStorage.cluet0count) + 1;
				color0 = "green";
				break;
			case 1: localStorage.cluet1count = Number(localStorage.cluet1count) + 1;
				color1 = "green";
				break;
			case 2: localStorage.cluet2count = Number(localStorage.cluet2count) + 1;
				color2 = "green";
				break;
			case 3: localStorage.cluet3count = Number(localStorage.cluet3count) + 1;
				color3 = "green";
				break;
			case 4: localStorage.cluet4count = Number(localStorage.cluet4count) + 1;
				color4 = "green";
				break;
			case 5: localStorage.cluet5count = Number(localStorage.cluet5count) + 1;
				color5 = "green";
				break;
			case 7: localStorage.cluet6count = Number(localStorage.cluet6count) + 1;
				color6 = "green";
				break;
		}
		if (clueCount == 7) {
			localStorage.cluetcount = 6;
		}
		else {
			localStorage.cluetcount = Number(clueCount);
		}
		document.getElementById(6).innerText = "Played: " + localStorage.totaltgames;
		document.getElementById(7).innerText = "Win %: " + winpct;
		document.getElementById(8).innerText = "Current Streak: " + localStorage.currenttstreak;
		document.getElementById(9).innerText = "Max Streak: " + localStorage.longesttstreak;
		document.getElementById("answer").innerText = "You have identified the player successfully.\nCongrats! Dont forget to share your results.";
		setTimeout(ConfettiStart, 1000);
		gameOver = true;
		displayFooter();
		localStorage.gametwon = 1;
		localStorage.setItem(('gameover' + days), 1);
		setTimeout(OpenStats, 4800);
	}
	else if (guess == "") {
		document.getElementById("boardfirst").classList.add("shaketile");
		document.getElementById("boardlast").classList.add("shaketile");
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").innerText = "PLEASE ENTER ANY NAME TO SUBMIT!";
	}
	else {
		document.getElementById("answer").style.color = "red";
		if (!gameOver && clueCount < 6) {
			document.getElementById("boardfirst").classList.add("shaketile");
			document.getElementById("boardlast").classList.add("shaketile");
			document.getElementById("answer").innerText = "Incorrect Guess! New Clue Revealed. \n Hit any key to clear and then try again.";
			FetchData();
		}
		if (!gameOver && clueCount == 6) {
			document.getElementById("boardfirst").classList.add("shaketile");
			document.getElementById("boardlast").classList.add("shaketile");
			document.getElementById("answer").classList.remove("popanswer");	
			if (document.getElementById("answer").classList.contains("popanswer")){
				console.log("has popanswer");
			}			
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "Final Clue Revealed! Players may be repeated across days if they have won multiple GSs.";
			setTimeout(FinalClue, 2000);
			clueCount += 1;
		}
		else if (!gameOver && clueCount > 6) {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(1 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.remove("correct", "poptile");
				gameTile.classList.add("absent", "animated");
			}
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "HARD LUCK TODAY. TRY AGAIN TOMORROW!";
			localStorage.totaltgames = Number(localStorage.totaltgames) + 1;
			winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
			localStorage.currenttstreak = 0;
			localStorage.cluetxcount = Number(localStorage.cluetxcount) + 1;
			colorx = "green";
			localStorage.cluetcount = "X";
			document.getElementById(6).innerText = "Played:	 " + localStorage.totaltgames;
			document.getElementById(7).innerText = "Win %: " + winpct;
			document.getElementById(8).innerText = "Current Streak: " + localStorage.currenttstreak;
			gameOver = true;
			displayFooter();
			localStorage.gametwon = 0;
			localStorage.setItem(('gameover' + days), 1);
			setTimeout(OpenStats, 3000);
		}
	}
	//go again and mark which ones are present but in wrong position
	//first name
	if (gameOver) return;
	for (let c = 0; c < fnwidth; c++) {
		let currTile = document.getElementById(1 + '-' + c.toString());
		let letter = currTile.innerText;
		// skip the letter if it has been marked correct
		if (!currTile.classList.contains("correct")) {
			//Is it in the word?         //make sure we don't double count
			if (firstname.includes(letter.toLowerCase()) && fnletterCount[letter.toLowerCase()] > 0) {
				currTile.classList.add("present");
				fnletterCount[letter.toLowerCase()] -= 1;
				let keyTile = document.getElementById("Key" + letter);
				keyTile.classList.add("keypresent");
			}
		}
	}
	//last name

	for (let c = fnwidth; c < width; c++) {
		let currTile = document.getElementById(1 + '-' + c.toString());
		let letter = currTile.innerText;
		// skip the letter if it has been marked correct
		if (!currTile.classList.contains("correct")) {
			//Is it in the word?         //make sure we don't double count
			if (lastname.includes(letter.toLowerCase()) && lnletterCount[letter.toLowerCase()] > 0) {
				currTile.classList.add("present");
				lnletterCount[letter.toLowerCase()] -= 1;
				let keyTile = document.getElementById("Key" + letter);
				keyTile.classList.add("keypresent");
			}
		}
	}
}