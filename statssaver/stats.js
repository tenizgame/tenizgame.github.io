//Baseline Date
var a = new Date(); // Current date now.
var b = new Date(2022, 3, 11, 0, 0, 0, 0); // Start of TENIZ.
var d = (a - b); // Difference in milliseconds.
var days = parseInt((d / 1000) / 86400);


function saveStats() {
			localStorage.totaltgames = document.getElementById("ssplayed").value;
       		 	document.getElementById("ssplayed").value = "";
			localStorage.totaltwins = Math.round((document.getElementById("sswinp").value * localStorage.totaltgames)/100) ;
        		document.getElementById("sswinp").value = "";
			localStorage.currenttstreak = document.getElementById("ssstreak").value;
        		document.getElementById("ssstreak").value = "";
			localStorage.totaltpoints = document.getElementById("ssstars").value;
        		document.getElementById("ssstars").value = "";
			localStorage.cluet1count = document.getElementById("5star").value;
       			document.getElementById("5star").value = "";
			localStorage.cluet2count = document.getElementById("4star").value;
       	 		document.getElementById("4star").value = "";
			localStorage.cluet3count = document.getElementById("3star").value;
        		document.getElementById("3star").value = "";
			localStorage.cluet4count = document.getElementById("2star").value;
        		document.getElementById("2star").value = "";
			localStorage.cluet5count = document.getElementById("1star").value;
        		document.getElementById("1star").value = "";
			localStorage.cluet6count = document.getElementById("0star").value;
        		document.getElementById("0star").value = "";
			localStorage.cluetxcount = document.getElementById("xstar").value;
        		document.getElementById("xstar").value = "";
        		document.getElementById("answer").style.color = "#6AAA64";
        		document.getElementById("answer").innerText = "STATS TRANSFERRED SUCCESSFULLY!\n REDIRECTING TO TENIZ NOW...";
			computetier();
			waitFiveSec();
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

function waitFiveSec(){
    setTimeout(openteniz, 5000) /*(here you need to implement delay code)*/
  }

function openteniz(){
    window.open("https://tenizgame.github.io/","_self")
    //window.close();
  }

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function submitMe() {

     if (Number(document.getElementById("ssplayed").value) >= 0 && Number(document.getElementById("sswinp").value) >= 0 && Number(document.getElementById("ssstreak").value) >= 0 && Number(document.getElementById("ssstars").value) >= 0 && Number(document.getElementById("5star").value) >= 0 && Number(document.getElementById("4star").value) >= 0 && Number(document.getElementById("3star").value) >= 0 && Number(document.getElementById("2star").value) >= 0 && Number(document.getElementById("1star").value) >= 0 && Number(document.getElementById("0star").value) >= 0  &&  Number(document.getElementById("xstar").value) >= 0) {
        	//do nothing;
        }
	else {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ONLY NUMERIC VALUES ALLOWED!";
        	return false;
	}

 	if (document.getElementById("ssplayed").value.includes('.') || document.getElementById("sswinp").value.includes('.') || document.getElementById("ssstreak").value.includes('.') || document.getElementById("ssstars").value.includes('.') || document.getElementById("5star").value.includes('.') || document.getElementById("4star").value.includes('.') || document.getElementById("3star").value.includes('.') || document.getElementById("2star").value.includes('.') || document.getElementById("1star").value.includes('.') || document.getElementById("0star").value.includes('.') || document.getElementById("xstar").value.includes('.')) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "NO DECIMAL VALUES ALLOWED'!";
        	return false;
        }
        if (document.getElementById("ssplayed").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'PLAYED'!";
        	return false;
        }
        if (localStorage.getItem('gameover' + days) == 1) {
       		 if (Number(document.getElementById("ssplayed").value) > days) {
       			document.getElementById("answer").style.color = "#FF0000";
        		document.getElementById("answer").innerText = "TENIZ HAS NOT BEEN LIVE FOR " + document.getElementById("ssplayed").value + " DAYS. NO CHEATING!";
        		return false;
		}
	}
	else {
       		 if (Number(document.getElementById("ssplayed").value) > (days - 1)) {
       			document.getElementById("answer").style.color = "#FF0000";
        		document.getElementById("answer").innerText = "CAN ONLY TRANSFER FOR  " + (days - 1) + " DAYS COVERING STATS UNTIL YESTERDAY! PLAY TODAYS GAME ONCE TRANSFERRED.";
        		return false;
		}
    }

        if (document.getElementById("sswinp").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'WIN %'!";
        	return false;
        }
        if (Number(document.getElementById("sswinp").value) > 100) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "WIN % CANNOT BE GREATER THAN 100!";
        	return false;
        }
        if (document.getElementById("ssstreak").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'STREAK'!";
        	return false;
        }
        if (Number(document.getElementById("ssstreak").value) > Number(document.getElementById("ssplayed").value)) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "STREAK CANNOT BE LARGER THAN TOTAL PLAYED!";
        	return false;
        }
        if (document.getElementById("ssstars").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'POINTS'!";
        	return false;
        }

        if (Number(document.getElementById("ssstars").value) > Number(document.getElementById("ssplayed").value)*10) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "TOTAL POINTS WON CANNOT BE MORE THAN 10 TIMES TOTAL PLAYED!";
        	return false;
        }

        if (document.getElementById("5star").value == "" || document.getElementById("4star").value == ""  || document.getElementById("3star").value == "" || document.getElementById("2star").value == "" || document.getElementById("1star").value == "" || document.getElementById("0star").value == ""  || document.getElementById("xstar").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER ALL VALUES FOR 'GUESS DISTRIBUTION'!";
        	return false;
        }
        var CountSD = Number(document.getElementById("5star").value) + Number(document.getElementById("4star").value) + Number(document.getElementById("3star").value) + 	Number(document.getElementById("2star").value) + Number(document.getElementById("1star").value) + Number(document.getElementById("0star").value) + 	Number(document.getElementById("xstar").value);
		var SumSD = Number(document.getElementById("5star").value) * 10 + Number(document.getElementById("4star").value) * 9 + Number(document.getElementById("3star").value) * 8 + Number(document.getElementById("2star").value) * 7 + Number(document.getElementById("1star").value) * 6 + Number(document.getElementById("0star").value) * 5 ;
 

        if (CountSD == Number(document.getElementById("ssplayed").value) && SumSD == Number(document.getElementById("ssstars").value)) {
	    saveStats();
	}
        else if  (CountSD != Number(document.getElementById("ssplayed").value) ) {
       		if (confirm('TOTAL SUM OF GUESS DISTRIBUTION (' + CountSD +  ') SHOULD EQUAL TOTAL PLAYED (' + document.getElementById("ssplayed").value + ')! IGNORE THIS ERROR?')) {
		    if (SumSD != Number(document.getElementById("ssstars").value) ) {
			if (confirm('TOTAL POINTS OF GUESS DISTRIBUTION (' + SumSD +  ') SHOULD EQUAL TOTAL POINTS (' + document.getElementById("ssstars").value + ')! IGNORE THIS ERROR?')) {				saveStats();
			}
		    }
		    else {
                       saveStats();
                    }
		}
        }
	else if  (SumSD != Number(document.getElementById("ssstars").value) ) {
		if (confirm('TOTAL POINTS OF GUESS DISTRIBUTION (' + SumSD +  ') SHOULD EQUAL TOTAL POINS (' + document.getElementById("ssstars").value + ')! IGNORE THIS ERROR?')) {
		   saveStats();
		}
	}
}

