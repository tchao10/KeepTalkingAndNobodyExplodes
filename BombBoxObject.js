    /* Author: Sheldon Dong */
    
function BombBox(){
    var object = this;
    
    this.scrambledLetters = new ScrambledLetters(this);
    this.strikeBox = new StrikeBox(this);
	this.correctShape = new CorrectShape(this);
	this.sound = new soundGame(this);
	this.collection = new Collection(this);
	this.timer = new Timer(this);
    
    this.strikeAudio = new Audio();
    this.strikeAudio.src = "strike.mp3";
    this.strikeAudio.volume = 0.25;
    
    this.dingAudio = new Audio();
    this.dingAudio.src = "ding.mp3";
    this.dingAudio.volume = 0.5;
    
    this.completeAudio = new Audio();
    this.completeAudio.src = "complete.mp3";
    this.completeAudio.volume = 1;
    
    this.winAudio = new Audio();
    this.winAudio.src = "win.mp3";
    this.winAudio.volume = 0.25;
    
    this.detonateAudio = new Audio();
    this.detonateAudio.src = "detonate.mp3";
    this.detonateAudio.volume = 0.4;
    
    this.strikes = 0;
    
    this.strike = function(){
    	this.strikes++;
    	
    	var boxNumber = "box" + this.strikes;
    	$(this.strikeBox[boxNumber]).html('<span style="color:red; font-weight:bold; font-size:30px;">X</span>');
    	this.strikeAudio.currentTime = 0;
    	this.strikeAudio.play();
    	
    	if (this.strikes == 3){
    	    setTimeout(function(){
		        object.detonate();
	        }, 500);
    	}
    },
    
    this.detonate = function(){
        $('#detonateTime').html(this.timer.div.html());
    	$('#detonateStrikes').html(this.strikes);
    	this.detonateAudio.play();
    	clearInterval(this.timer.countDownTimer);
    	$('#renderArea').empty();
    	$('#detonateScreen').css("display", "block");
    },

	this.timer.startTimer();
    
    this.bombBox = $('<div/>')
        .css({
            color:'black',
            position:"relative",
            width: '950px',
	        height: '650px',
	        'margin-right': 'auto',
	        'margin-left': 'auto',
	        'background-color': '#999',
        })
        .attr({
            id:'wholeThing',
        });
         
    this.render = function(wrapperID){
        $(wrapperID).append(this.bombBox);
        
        $(this.bombBox).append(this.strikeBox.div);
        
        $(this.bombBox).append(this.scrambledLetters.div);
        
        $(this.bombBox).append(this.sound.div); 
        this.sound.addSound();
        
        $(this.bombBox).append(this.correctShape.div);
        
        $(this.bombBox).append(this.collection.div);
        
        $(this.bombBox).append(this.timer.div);
        
        $(this.bombBox).append(this.shutDownGame);
    };
    
    this.checkForWin = function(){
        this.completeAudio.play();
        this.completeAudio.currentTime = 0;
        if ((this.scrambledLetters.complete)&&(this.sound.complete)&&(this.correctShape.complete)&&(this.collection.complete)){
            setTimeout(function(){
                object.winAudio.play();
                $('#victoryTime').html(object.timer.div.html());
    	        $('#victoryStrikes').html(object.strikes);
    	        clearInterval(object.timer.countDownTimer);
    	        $('#renderArea').empty();
    	        $('#victoryScreen').css("display", "block");
    	    }, 500);
        }
    }
}