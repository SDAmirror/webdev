function teleport(num){
	switch(num) {
		case 1:
			window.location="tariff.html";
			break;
		case 2:
			window.location="balance.html";
			break;
	}
}

var amount = 0;

function mymoney(num){
	console.log(num);
	var money = document.getElementById("money-new");
	switch(num){
		case 1:
			money.value = "1000";
			amount = 1000;
			break;
		case 2:
			money.value = "2000";
			amount = 2000;
			break;
		case 3:
			money.value = "5000";
			amount = 5000;
			break;
		case 4:
			money.value = "10000";
			amount = 10000;
			break;	
	}
}

function checkamount(amount) {
	if (!isNaN(amount)) {
		if (amount>=0) {
		} else {
			alert("Put an amount");
		}
	} else {
		alert("Enter a number!");
	}
}


var operator = null;

function telnum(tel) {
	console.log("505");
	console.log(tel);
	console.log(tel[2]);
	console.log(tel[3]);
	var kcell = document.getElementById("kcell-label") //701 702 775 778
	var altel = document.getElementById("altel-label") //707 700
	var beeline = document.getElementById("beeline-label") //705 771 776 777
	var tele = document.getElementById("tele-label") // 707 747
	if (!isNaN(tel)) {
		if(tel[0]=="7"){
			if(((tel[1]=="0" && 
								(tel[2]=="1" || tel[2]=="2")
								||
								(tel[1]=="7" && 
												(tel[2]=="5" || tel[2]=="8"))))){
					operator = 1;
					kcell.style.color = "#5C3887";
					altel.style.color = "#4A5052";
					beeline.style.color = "#4A5052";
					tele.style.color = "#4A5052";
				} else {
					if(tel[1]=="0" && (tel[2]=="8" || tel[2]=="0")){
						operator = 2;
						kcell.style.color = "#4A5052";
						altel.style.color = "#F22C8A";
						beeline.style.color = "#4A5052";
						tele.style.color = "#4A5052";
					} else {
						if((tel[1]=="0" && tel[2]==5) || 
														(tel[1]=="7" && 
																		(tel[2]==1 || tel[2]=="6" ||tel[2]==7))){
							operator = 3;
							kcell.style.color = "#4A5052";
							altel.style.color = "#4A5052";
							beeline.style.color = "#FDD638";
							tele.style.color = "#4A5052";
						} else {
							if(tel[2]=="7" && (tel[1]=="0" || tel[1]=="4")){
								operator = 4;
								kcell.style.color = "#4A5052";
								altel.style.color = "#4A5052";
								beeline.style.color = "#4A5052";
								tele.style.color = "white";
							} else {
								alert("There is no such operator");
							}
						}
					}
				}
		} else {
			alert("This number is not Kazakhstan's");
		}
	} else {
		alert("Enter a number!");
	}
	
}

function sent() {
	var money = document.getElementById("money-new").value;
	amount = parseInt(money);
	console.log(amount);
	var amountH3 = document.getElementById("putAmount");
	amountH3.innerHTML = " " + amount + " KZT";
	var amountH3 = document.getElementById("putCellular");
	switch(operator){
		case 1:
			amountH3.innerHTML = " Kcell";
			amountH3.style.color = "#5C3887";
			break;
		case 2:
			amountH3.innerHTML = " Altel";
			amountH3.style.color = "#F22C8A";
			break;
		case 3:
			amountH3.innerHTML = " Beeline";
			amountH3.style.color = "#FDD638";
			break;
		case 4:
			amountH3.innerHTML = " Tele2";
			amountH3.style.color = "white";
			break;
	}
}

function find(num) {
	console.log("505");
	console.log(num);
	num = parseInt(num);
	var main1 = document.getElementById("main1");
	var main2 = document.getElementById("main2");
	var main3 = document.getElementById("main3");
	var main4 = document.getElementById("main4");
	var kcellEl1 = document.getElementById("kcell-el-1");
	var kcellEl2 = document.getElementById("kcell-el-2");
	var kcellEl3 = document.getElementById("kcell-el-3");
	var altelEl1 = document.getElementById("altel-el-1");
	var altelEl2 = document.getElementById("altel-el-2");
	var beelineEl1 = document.getElementById("beeline-el-1");
	var beelineEl2 = document.getElementById("beeline-el-2");
	var beelineEl3 = document.getElementById("beeline-el-3");
	if (!isNaN(num)) {
		if(num >= 2590) {
			main1.style.display = "block";
			kcellEl1.style.display = "block";
			kcellEl2.style.display = "none";
			kcellEl3.style.display = "none";
			if(num >= 3590){
				kcellEl2.style.display = "block";
				if(num>=5590){
					kcellEl3.style.display = "block";
				}
			}
		}
		if(num>=2290){
			main2.style.display = "block";
			altelEl1.style.display = "block";
			altelEl2.style.display = "none";
			if(num>=2590){
				altelEl2.style.display = "block";
			}
		}
		if(num >= 2590) {
			main3.style.display = "block";
			beelineEl1.style.display = "block";
			beelineEl2.style.display = "none";
			beelineEl3.style.display = "none";
			if(num >= 2990){
				kcellEl2.style.display = "block";
				if(num>=3990){
					kcellEl3.style.display = "block";
				}
			}
		}
		if (num<2290) {
			main1.style.display = "none";
			main2.style.display = "none";
			main3.style.display = "none";
		}
	} else {
		alert("Enter a number!");
	}
	
}