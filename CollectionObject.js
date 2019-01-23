// Main author: Tommy Chao

function Collection(bombBox){
    var object = this;
    
    this.complete = false,
    this.correctKeyGotten = false,
    this.topCssArray = [0, 30, 60, 90, 150, 180, 210, 240],
    this.leftCssArray = [0, 30, 60, 90, 120, 150, 240, 270, 300, 330, 360, 390],
    
    this.characterColorArray = ["DarkGreen", "blue", "purple"];
    this.characterColor;
    
    this.numberOfWrongKeys = 0,
    this.keyArray = [],
    this.keyColorArray = ["cyan", "red", "orange", "green"];
    this.correctKeyColor;
    
    this.numberOfWrongExits = 0,
    this.exitArray = [],
    this.exitColorArray = ["springgreen", "purple", "red", "orange"];
    this.correctExitColor;
    
    // The following six functions create the general format of the module
    this.div = (function(){
        var div = $('<div/>')
            .attr({id:"collectionDiv", class:"module"})
            .css({
                position:"absolute",
	            'background-color': "yellow",
				border:"2px solid orange",
				bottom:0,
                right:0,
	        });
        return div;
    })(),
    
    this.innerDiv = (function(){
        var div = $('<div/>')
            .attr({id:"innerDiv"})
            .css({
                position:"relative",
	            'background-color': "darkorange",
	            width:420,
	            height:270,
	            top:15,
	            margin:'auto',
	        });
        object.div.append(div);
        return div;
    })(),
    
    this.upArrow = (function(){
        var arrow = $('<div/>')
            .attr({id:"upArrow"})
            .css({
                position:"absolute",
	            width:0,
	            height:0,
	            left:"40%",
	            top:1,
	            margin:'auto',
	           	"border-left":"50px solid transparent",
            	"border-right":"50px solid transparent",
            	"border-bottom":"20px solid blue",
	        })
	        .click(function(){
                object.checkCharacterDirection('up');
            });
        object.div.append(arrow);
        return arrow;
    })(),
    
    this.downArrow = (function(){
        var arrow = $('<div/>')
            .attr({id:"downArrow"})
            .css({
                position:"absolute",
	            width:0,
	            height:0,
	            left:"40%",
	            bottom:1,
	            margin:'auto',
	           	"border-left":"50px solid transparent",
            	"border-right":"50px solid transparent",
            	"border-top":"20px solid blue",
	        })
	        .click(function(){
                object.checkCharacterDirection('down');
            });
        object.div.append(arrow);
        return arrow;
    })(),
    
    this.leftArrow = (function(){
        var arrow = $('<div/>')
            .attr({id:"leftArrow"})
            .css({
                position:"absolute",
	            width:0,
	            height:0,
	            top:"35%",
	            left:2,
	            margin:'auto',
	           	"border-top":"50px solid transparent",
            	"border-bottom":"50px solid transparent",
            	"border-right":"20px solid blue",
	        })
	        .click(function(){
                object.checkCharacterDirection('left');
            });
        object.div.append(arrow);
        return arrow;
    })(),
    
    this.rightArrow = (function(){
        var arrow = $('<div/>')
            .attr({id:"rightArrow"})
            .css({
                position:"absolute",
	            width:0,
	            height:0,
	            top:"35%",
	            right:2,
	            margin:'auto',
	           	"border-top":"50px solid transparent",
            	"border-bottom":"50px solid transparent",
            	"border-left":"20px solid blue",
	        })
	        .click(function(){
                object.checkCharacterDirection('right');
            });
        object.div.append(arrow);
        return arrow;
    })(),
    
    // This method needs to be defined here BEFORE the keys and exits are created.
    // getRandomIntegerInclusive() takes in two parameters, a minimum and a maximum, and generates a random number within those two parameters, inclusively
    this.getRandomIntegerInclusive = function(min, max){
        return min+Math.floor(Math.random()*(max-min+1));
    },
    
    // rearrangeKeyAndExitArrays() generates the correct key and exit depending on the color of the character, following the key described in the Bomb Defusal Manual
    this.rearrangeKeyAndExitArrays = function(color){
        this.numberOfWrongKeys = this.getRandomIntegerInclusive(1, 3);
        this.numberOfWrongExits = this.getRandomIntegerInclusive(1, 3);
        if (color == "DarkGreen"){
            if (this.numberOfWrongKeys == 1){
                this.correctKeyColor = "cyan";
            }else if (this.numberOfWrongKeys == 2){
                this.correctKeyColor = "red";
            }else if (this.numberOfWrongKeys == 3){
                this.correctKeyColor = "orange";
            }
            
            if (this.numberOfWrongExits == 1){
                this.correctExitColor = "springgreen";
            }else if (this.numberOfWrongExits == 2){
                this.correctExitColor = "purple";
            }else if (this.numberOfWrongExits == 3){
                this.correctExitColor = "red";
            }
            
        }else if (color == "blue"){
            if (this.numberOfWrongKeys == 1){
                this.correctKeyColor = "red";
            }else if (this.numberOfWrongKeys == 2){
                this.correctKeyColor = "orange";
            }else if (this.numberOfWrongKeys == 3){
                this.correctKeyColor = "green";
            }
            
            if (this.numberOfWrongExits == 1){
                this.correctExitColor = "springgreen";
            }else if (this.numberOfWrongExits == 2){
                this.correctExitColor = "red";
            }else if (this.numberOfWrongExits == 3){
                this.correctExitColor = "orange";
            }
        }else if (color == "purple"){
            if (this.numberOfWrongKeys == 1){
                this.correctKeyColor = "cyan";
            }else if (this.numberOfWrongKeys == 2){
                this.correctKeyColor = "orange";
            }else if (this.numberOfWrongKeys == 3){
                this.correctKeyColor = "green";
            }
            
            if (this.numberOfWrongExits == 1){
                this.correctExitColor = "red";
            }else if (this.numberOfWrongExits == 2){
                this.correctExitColor = "orange";
            }else if (this.numberOfWrongExits == 3){
                this.correctExitColor = "purple";
            }
        }else{
            alert("why you break my game");
        }
        
        this.keyColorArray.splice(this.keyColorArray.indexOf(this.correctKeyColor), 1);
        this.exitColorArray.splice(this.exitColorArray.indexOf(this.correctExitColor), 1);
    },
    
    // Creates the character and the character color, which is necessary in defining the correct key/exit combination
    this.character = (function(){
        var color = object.characterColorArray[object.getRandomIntegerInclusive(0, 2)];
        var character = $('<div/>')
            .attr({id:"character"})
            .css({
                position:"absolute",
                "background-color":color,
                border:"2px dashed white",
                "box-sizing":"border-box",
	            width:20,
	            height:20,
	            top:125,
	            left:200,
	            margin:'auto',
	            "z-index":2,
	        });
	    object.characterColor = color;
	    object.rearrangeKeyAndExitArrays(color);
        object.innerDiv.append(character);
        return character;
    })(),
    
    // These methods need to be defined BEFORE the keys and exits are created
    // getTopCss() picks a random value from this.topCssArray to define the 'top' styling of a div
    this.getTopCss = function(){
        var num = object.topCssArray[object.getRandomIntegerInclusive(0, (object.topCssArray.length-1))];
        object.topCssArray.splice(object.topCssArray.indexOf(num), 1);
        return num;
    },
    
    // getLeftCss() picks a random value from this.leftCssArray to define the 'left' styling of a div
    this.getLeftCss = function(){
        var num = object.leftCssArray[object.getRandomIntegerInclusive(0, (object.leftCssArray.length-1))];
        object.leftCssArray.splice(object.leftCssArray.indexOf(num), 1);
        return num;
    },
    
    // Generates the wrong keys of the module
    this.makeWrongKeys = (function(){
        for (var i=0; i<object.numberOfWrongKeys; i++){
            var key = $('<div/>')
                .attr({id:"collectionWrongKey"+i, class:"collectionKey"})
                .css({
                    "background-color":object.keyColorArray[i],
                    border:"1px solid blue",
	                top:object.getTopCss(),
	                left:object.getLeftCss(),
	            });
            object.keyArray.push(key);
            object.innerDiv.append(key);
        }
    })(),
    
    // Generates the correct key of the module using object.correctKeyColor, which was defined earlier in this.rearrangeKeyAndExitArrays()
    this.correctKey = (function(){
        var key = $('<div/>')
            .attr({id:"collectionCorrectKey", class:"collectionKey"})
            .css({
                "background-color":object.correctKeyColor,
                border:"1px solid blue",
                top:object.getTopCss(),
	            left:object.getLeftCss(),
	        });
	    object.keyArray.push(key);
        object.innerDiv.append(key);
        return key;
    })(),
    
    // Generates the wrong exits of the module
    this.makeWrongExits = (function(){
        for (var j=0; j<object.numberOfWrongExits; j++){
            var exit = $('<div/>')
                .attr({id:"collectionWrongExit"+j, class:"collectionExit"})
                .css({
                    "background-color":object.exitColorArray[j],
                    border:"1px solid blue",
	                top:object.getTopCss(),
	                left:object.getLeftCss(),
	            });
            object.exitArray.push(exit);
            object.innerDiv.append(exit);
        }
    })(),
    
    // Generates the correct exit of the module using object.correctExitColor, which was defined earlier in this.rearrangeKeyAndExitArrays()
    this.correctExit = (function(){
        var exit = $('<div/>')
            .attr({id:"collectionCorrectExit", class:"collectionExit"})
            .css({
                "background-color":object.correctExitColor,
                border:"1px solid blue",
	            top:object.getTopCss(),
	            left:object.getLeftCss(),
	        });
	    object.exitArray.push(exit);
        object.innerDiv.append(exit);
        return exit;
    })(),
    
    // Creates the textbox that appears when the module is completed
    this.textbox = (function(){
        var textbox = $('<input/>')
            .attr({id:"collectionCompleteBox", type:"text", value:"Module Completed", 'readonly':'true'})
            .css({
                position:"absolute",
                top:65,
                left:50,
                width:"79%",
                'text-align': 'center',
                'display':'none',
                'z-index':90,
            });
        object.innerDiv.append(textbox);
        return textbox;
    })(),
    
    // checkCharacterDirection() checks which arrow button was pressed and checks if it is not already at the edge
    this.checkCharacterDirection = function(direction){
        if (!this.complete){
            if (direction == "up"){
                if (parseInt(this.character.css("top")) > 0){
                    this.moveCharacter("top", -1);
                }
            }else if (direction == "down"){
                if (parseInt(this.character.css("top")) < 240){
                    this.moveCharacter("top", 1);
                }
            }else if (direction == "left"){
                if (parseInt(this.character.css("left")) > 0){
                    this.moveCharacter("left", -1);
                }
            }else if (direction == "right"){
                if (parseInt(this.character.css("left")) < 390){
                    this.moveCharacter("left", 1);
                }
            }
            this.collisionCheck();
        }
    },
    
    // moveCharacter() moves the character in the direction specified by the parameters
    this.moveCharacter = function(cssProperty, direction){
        this.character.css(cssProperty, parseInt(this.character.css(cssProperty)) + direction*25 +"px");
    }
    
    // collisionCheck() checks if the character collides with a key/exit and checks if the collided key/exit is correct or not
    this.collisionCheck = function(){
        var charTop = parseInt(this.character.css("top"));
        var charLeft = parseInt(this.character.css("left"));
        var charWidth = parseInt(this.character.css("width"));
        var charHeight = parseInt(this.character.css("height"));

        //checks collision of all keys
        for (var i=0; i<this.keyArray.length; i++){
            var keyTop = parseInt(this.keyArray[i].css("top"));
            var keyLeft = parseInt(this.keyArray[i].css("left"));
            var keyWidth = parseInt(this.keyArray[i].css("width"));
            var keyHeight = parseInt(this.keyArray[i].css("height"));
        
            if (
                    (this.correctKeyGotten != true)&&
    	            ((keyWidth + keyLeft) >= charLeft)&& //checks right border
    	            ((keyTop + keyHeight) >= charTop)&& //checks bottom border
    	            (keyTop <= (charTop + charHeight))&& //checks top border
    	            (keyLeft <= (charLeft + charWidth)) //checks left border
                ){
                    if (i == this.keyArray.length - 1){
                        this.correctKeyGotten = true;
                        this.correctKey.css("display", "none");
                        this.keyArray.splice(this.keyArray.length-1, 1);
                        bombBox.dingAudio.play();
                    }else{
                        bombBox.strike();
                        this.keyArray[i].css("display","none");
                        this.keyArray.splice(i, 1);
                    }
            }
        }
        
        //checks collision of all exits
        for (var j=0; j<this.exitArray.length; j++){
            var exitTop = parseInt(this.exitArray[j].css("top"));
            var exitLeft = parseInt(this.exitArray[j].css("left"));
            var exitWidth = parseInt(this.exitArray[j].css("width"));
            var exitHeight = parseInt(this.exitArray[j].css("height"));
            
            if (
                    (this.correctKeyGotten == true)&&
    	            ((exitWidth + exitLeft) >= charLeft)&& //checks right border
    	            ((exitTop + exitHeight) >= charTop)&& //checks bottom border
    	            (exitTop <= (charTop + charHeight))&& //checks top border
    	            (exitLeft <= (charLeft + charWidth)) //checks left border
                ){
                    if ((j == this.exitArray.length - 1)&&(this.correctKeyGotten == true)){
                        this.moduleComplete();
                    }else{
                        bombBox.strike();
                        this.exitArray[j].css("display","none");
                        this.exitArray.splice(j, 1);
                    }
            }
        }
    },
    
    
    // moduleComplete() shuts down the module by making this.complete = true, and checks if the game has been won
    this.moduleComplete = function(){
        this.complete = true;
        this.textbox.css("display", "block");
        bombBox.checkForWin();
    };
}