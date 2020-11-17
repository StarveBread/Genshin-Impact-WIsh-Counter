	
	localStorage.df;
	localStorage.ds;
	localStorage.dt;

	localStorage.prevList;

	localStorage.counter;

	switch(true){
		case localStorage.df == null:
			localStorage.df = 0;
		case localStorage.ds == null:
			localStorage.ds = 0;
		case localStorage.dt == null:
			localStorage.dt = 0;
		case localStorage.prevList == null:
			localStorage.prevList = '';
		case localStorage.counter == null:
			localStorage.counter = 0;
			break;
	}

	var dispF = parseInt(localStorage.df); 
	var dispS = parseInt(localStorage.ds); 
	var dispT = parseInt(localStorage.dt);

	var i = parseInt(localStorage.counter);

	document.getElementById("event").innerHTML 		= dispF;
	document.getElementById("standard").innerHTML 	= dispS;
	document.getElementById("total").innerHTML 		= dispT;

	document.getElementById("lbl").innerHTML = localStorage.prevList; 

	function confirmSel(star){
		var r = confirm("Add (Event:"+dispF+" Standard:"+dispS+" Total:"+dispT+") to the list?");
		switch(star){
			case '1':
				if(r == true)  resetCount(star);// console.debug(star);
				break;
			case '2':
				if(r == true)  resetCount(star);// console.debug(star);
				break;
			case '3':
				if(r == true)  resetCount(star);// console.debug(star);
				break;
		}
		
	}

	function evalEvent(op){
			switch(op){
					case '1':
					if (dispF <= 0){
						dispF = 0;
					}else{
						dispF = eval(dispF - 1);
						dispT = eval( dispT - 1 );
					}
					break;
				case '2':
					if (dispF >= 10){
						dispF = 10;
					}else{
						dispF = eval(dispF + 1);
						dispT = eval( dispT + 1 );
					}
					break;
				}
			localStorage.df = dispF;
			localStorage.dt = dispT;
			document.getElementById("event").innerHTML = localStorage.df; 
			document.getElementById("total").innerHTML = localStorage.dt; 
			}

	function evalStand(op){
			switch(op){
				case '1':
					if (dispS <= 0){
						dispS = 0;
					}else{
						dispS = eval(dispS - 1);
						dispT = eval(dispT - 1);
					}
					break;
				case '2':
					if (dispS >= 10){
						dispS = 10;
					}else{
						dispS = eval(dispS + 1);
						dispT = eval(dispT + 1);
					}
					break;
				}
			localStorage.ds = dispS;
			localStorage.dt = dispT;
			document.getElementById("standard").innerHTML 	= localStorage.ds;
			document.getElementById("total").innerHTML 		= localStorage.dt;
			}

	function clearDispF(){
			dispF = 0;
			localStorage.df = 0;
			document.getElementById("event").innerHTML = 0;
	}

	function clearDispS(){
			dispS = 0;
			localStorage.ds = 0;
			document.getElementById("standard").innerHTML = 0;
		}

	function clearAll(){
		clearDispF();
		clearDispS();
		dispT = 0;
		document.getElementById("total").innerHTML = 0;
	}

	function resetCount(star){
		switch(star){
					case '1':
						localStorage.prevList = "----4* Event Reset----"+ '<br>' +"Event: " + dispF + '<br>' + "Standard: " + dispS + '<br>' + "Total: " + dispT + '<br>' + localStorage.prevList + '<br>';
						document.getElementById("lbl").innerHTML = localStorage.prevList; 
						clearDispF()
						break;
					case '2':
						localStorage.prevList = "---4* Standard Reset---"+ '<br>' +"Event: " + dispF + '<br>' + "Standard: " + dispS + '<br>' + "Total: " + dispT + '<br>' + localStorage.prevList + '<br>';
						document.getElementById("lbl").innerHTML = localStorage.prevList; 
						clearDispS()
						break;
					case '3':
						localStorage.prevList = "-------5* Reset-------"+ '<br>' +"Event: " + dispF + '<br>' + "Standard: " + dispS + '<br>' + "Total: " + dispT + '<br>' + localStorage.prevList + '<br>';
						document.getElementById("lbl").innerHTML = localStorage.prevList;
						clearAll();
						break;
				}
			i = eval(i + 1);
			localStorage.counter = i;
	}