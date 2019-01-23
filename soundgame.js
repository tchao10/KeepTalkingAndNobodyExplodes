// Main author: Nghiep La

function soundGame ( bombBox ) {
	this.complete = false;

	this.arraySound = []; //Sound array
	this.playerSelected = ""; //Data
	this.soundSelected = ""; //Sound data
	
	/*
	###################################
				Visual	
This section will create all division and button
	###################################
	*/
	this.div = (function() {
		var bg = $('<div/>')
		.css({
			color:'black',
			"background-color": "red",
			"float":"right",
			"border":"2px solid maroon",
		})
		.addClass('module')

		return bg
	})(this);
	//This div is a hidden check mark which will show when finish the module
	this.completeDiv = (function(objRef) {
    	
    	var comp = $('<div/>')
			.attr({
				"id": "completeDiv"
			})
			.css({
				"width": "450px",
				"height":"300px",
				"background-color":"white",
				"position":"absolute",
				"opacity":"0.85",
				"text-align": "center",
				"font-size":"225px",
				"display": "none",
				"z-index":"5"
			})
			.html('&#x2713')
			
		objRef.div.append(comp)
    }) (this);
	
	//Each of these box will have it's own 'data'
	//Then the click contained a check method and send the data to the check method
	this.soundBox1 = (function(objRef) {
		var div1 = $('<div/>')
			.attr({
				"id": "soundBox1",
				"class": "soundBox",
				"display": "none",
			})
			.click( function(){
				objRef.playerSelected = 'sound1';
				objRef.check();
			})
			
		objRef.div.append(div1)
		
		return div1.attr('id');
	}) (this);
	this.soundBox2 = (function(objRef) {
		var div2 = $('<div/>')
			.attr({
				"id": "soundBox2",
				"class": "soundBox",
				"display": "none",
			})
			.click( function(){
				objRef.playerSelected = 'sound2';
				objRef.check();
			})

		objRef.div.append(div2);
			
		return div2.attr('id')
	}) (this);
	this.soundBox3= (function(objRef) {
		var div3 = $('<div/>')
			.attr({
				"id": "soundBox3",
				"class": "soundBox",
				"display": "none",
			})
			.click( function(){
				objRef.playerSelected = 'sound3';
				objRef.check();
			})
		objRef.div.append(div3);
			
		return div3.attr('id')
	}) (this);
	this.soundBox4= (function(objRef) {
		var div4 = $('<div/>')
			.attr({
				"id": "soundBox4",
				"class": "soundBox",
			})
			.click( function(){
				objRef.playerSelected = 'sound4';
				objRef.check();
			})
		objRef.div.append(div4)
			
		return div4.attr('id');
	}) (this);
	this.soundBox5= (function(objRef) {
		var div5 = $('<div/>')
			.attr({
				"id": "soundBox5",
				"class": "soundBox",
				"display": "none",
			})
			.click( function(){
				objRef.playerSelected = 'sound5';
				objRef.check();
			})
		objRef.div.append(div5)	
		
		return div5.attr('id');
	}) (this);

 	//This create a box which play the selected sound when click
 	//After clicked the box disappear and generate five choices of sound for player to select
	this.currentSoundBox = (function(objRef) {
		var current = $('<button/>')
			.addClass('button')
			.css({
				"width":"275px",
				"position":"relative",
				"top":"50%",
				"left":"21%",
				"display": "inline-block",
				"font-size":"20px",
			})
			//This click function apply all the animation that occur during the game
			.click(function() {
				objRef.currentSoundBox.animate({"opacity":"0"}, 100, function() {
					for (var j = 1;j<=5;j++) {
						$("#soundBox"+j).fadeIn("slow");
						$("#soundBox"+j).css({"display":"inline-block",})
					}
				});
				objRef.currentSound();
				objRef.playCurrentSound();
			})
			.html("Click to play the sound!")
			
		objRef.div.append(current);
		
		return current;
		
	}) (this);
/*
	##########################
			Core
	##########################

*/
	//This method will check if the player hit the right box
	this.check = (function(objRef) {
		
		if (this.playerSelected == this.soundSelected) {
			this.moduleComplete();
		}else {
			for (var j = 1;j<=5;j++) {
				$("#soundBox"+j).css({"display":"none",})
			}
			this.currentSoundBox.animate({"opacity":"1"},50);
			bombBox.strike();
		}
		
	
	})
	//This method will randomly select a out of all sounds
	//Then return a sound id
	this.currentSound = (function() {
		var choosenSound;
		var choosenNumber = Math.floor(Math.random()*(5-1+1)+1);
		choosenSound = this.arraySound[choosenNumber-1]
		
		this.soundSelected = choosenSound.id
		//console.log(choosenSound.id)

		return choosenSound.id
	});
	
	//This method is called by a button
	//It will play a selected sound
	this.playCurrentSound = (function() {
		var sound = document.getElementById(this.soundSelected);
		sound.volume=0.7;
		sound.playbackRate = 1.5;
		sound.play();
	})
	
	//This method is behind the scene task
	//This will add all the sound to an array and let the function above manipulate the sound file and location
	this.addSound = (function() {
		
		for (var i = 1;i <= 5;i++) {
			var audioObject = new Audio();
			audioObject.id = "sound"+i
			audioObject.src = document.getElementById("sound"+i).src
			
			this.arraySound.push(audioObject);
		}
			
	});
	//If the module complete it will popped up a check mark and disable any input
	this.moduleComplete = function(){
        this.complete = true;
        $('#completeDiv').toggle(200)
        bombBox.checkForWin();
    };
    
}

