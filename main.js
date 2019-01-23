/*Author:Sheldon Dong*/
var menu;
var instructions;
var credits;
var countdown;
var detonateScreen;
var victoryScreen;
var audioTest;

function init(){
	menu = document.getElementById("menu");
	instructions = document.getElementById("instructions");
	credits = document.getElementById("credits");
	countdown = document.getElementById("countdown");
	detonateScreen = document.getElementById("detonateScreen");
	victoryScreen = document.getElementById("victoryScreen");
	
	menu.style.display = window.getComputedStyle(menu,null).getPropertyValue('display');
	instructions.style.display = window.getComputedStyle(instructions,null).getPropertyValue('display');
	credits.style.display = window.getComputedStyle(credits,null).getPropertyValue('display');
	
	audioTest = new Audio();
    audioTest.src = "strike.mp3";
    audioTest.volume = 0.25;
}

function testAudio(){
	audioTest.currentTime = 0;
	audioTest.play();
}

function showInstructions(){
	if(instructions.style.display=="none"){
		menu.style.display="none";
		instructions.style.display="block";
	}	
}

function showCredits(){
	if(credits.style.display=="none"){
		menu.style.display="none";
		credits.style.display="block";
	}	
}

function backMenu(){
	if(menu.style.display=="none"&&instructions.style.display=="block"){
		instructions.style.display="none";
		menu.style.display="block";
	}	
	if(menu.style.display=="none"&&credits.style.display=="block"){
		credits.style.display="none";
		menu.style.display="block";
	}
	if(menu.style.display=="none"&&victoryScreen.style.display=="block"){
		victoryScreen.style.display="none";
		menu.style.display="block";
	}
	if(menu.style.display=="none"&&detonateScreen.style.display=="block"){
		detonateScreen.style.display="none";
		menu.style.display="block";
	}
}

function displayCountdown(){
	menu.style.display="none";
	countdown.style.display="block";
	document.getElementById("countdownWords").innerHTML = "Starting in 3 seconds...";
	setTimeout(function(){
		document.getElementById("countdownWords").innerHTML = "Starting in 2 seconds...";
	}, 1000);
	setTimeout(function(){ 
		document.getElementById("countdownWords").innerHTML = "Starting in 1 second...";
	}, 2000);
	setTimeout(function(){ initializeGame() }, 3000);
}

function initializeGame(){
	var newBox = new BombBox();
	newBox.render('#renderArea');
	menu.style.display="none";
	countdown.style.display="none";
}

window.onload = function(){
	init();
}