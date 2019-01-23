// Main author: Tommy Chao

function ScrambledLetters(bombBox){
    var object = this;
    
    this.complete = false,
    this.scrambledTextArray = ["v yvxr gb rng purrfr xrrcb", "ubj zhpu jbbq znxrf n xrrcb", "guvf trgf n svir bhg bs xnccn", "vpr znqr lbh sberurnq xnccn", "xrrcb envfr he cbtpunzc xnccn"],
    this.scrambledTextNumber;
    this.correctTextArray = ["i like to eat cheese keepo", "how much wood makes a keepo", "this gets a five out of kappa", "ice made you forehead kappa", "keepo raise ur pogchamp kappa"],
    
    // Creates the div that contains the entire module
    this.div = (function(){
        var div = $('<div/>')
            .attr({id:"scrambledLettersDiv", class:"module"})
            .css({
                color:'black',
                position:"absolute",
	            'background-color': "limegreen",
				border:"2px solid green",
	        });
	    return div;
    })(),
    
    // This method needs to be defined here BEFORE the scrambled text is determined
    // getRandomIntegerInclusive() takes in two parameters, a minimum and a maximum, and generates a random number within those two parameters, inclusively
    this.getRandomIntegerInclusive = function(min, max){
        return min+Math.floor(Math.random()*(max-min+1));
    },
    
    // Creates the scrambled text that is displayed on the screen
    this.scrambledText = (function(){
        object.scrambledTextNumber = object.getRandomIntegerInclusive(0, 4);
        var text = $('<div/>')
            .css({
                "font-size":"70px",
                "font-family":"Verdana",
                "text-align":"center",
            })
            .html(object.scrambledTextArray[object.scrambledTextNumber]);
        object.div.append(text);
        return text;
    })(),
    
    // Creates the text field that the defuser types the decrypted text into
    this.textbox = (function(){
        var textbox = $('<input/>')
            .attr({id:"scrambledLettersDiv", type:"text", value:""})
            .css({
                position:"absolute",
                bottom:10,
                left:10,
                width:"79%",
            })
            .keydown(function(event){
                if((event.which == 13)&&(object.textbox.val() != "")){ //checks if the enter button is pressed
                    object.check();
                }
            });
        object.div.append(textbox);
        return textbox;
    })(),
    
    // Creates the button that can be used to check the decrypted text
    this.submitButton = (function(){
        var button = $('<input/>')
            .attr({id:"scrambledLettersButton", type:"button", value:"Submit"})
            .css({
                position:"absolute",
                bottom:10,
                right:10,
            })
            .click(function(){
                object.check();
            });
        object.div.append(button);
        return button;
    })(),

    // check() checks of the value of the textbox matches the text in correctTextArray
    this.check = function(){
        if (!this.complete){
            if (this.textbox.val() == this.correctTextArray[this.scrambledTextNumber]){
                this.moduleComplete();
            }else {
                bombBox.strike();
            }
        }
    },
    
    //moduleComplete() shuts down the module by making this.complete = true, disabling the textbox, and checks if the game has been won
    this.moduleComplete = function(){
        this.complete = true;
        this.textbox.val("Module is complete.");
        this.textbox.attr('readonly', true);
        bombBox.checkForWin();
    };
}