    /* Author: Sheldon Dong*/
function CorrectShape(objRef){
    
    var boxNum = ['box1','box2','box3','box4','box5'];
    var object = this;
    // var firstRandomColor = this.getRandomColor();
    // var firstColor = '10px '+ firstRandomColor;
    this.complete = false;
    
    this.checkbox = new Checkbox(this);
    
    this.circle = $('<div/>')
        .css({
            position:'absolute',
            top:85,
            left:175,
            'border-radius': '50%',
        	'width': '75px',
	        'height': '75px',
	        'background-color':'white',
	        'border':'10px solid green'
        })
        .attr({id:'circle'})
        .click(function(){object.markIncorrect()});
        
    this.triangle = $('<div/>')
         .attr({id:'arrow_box'});
         
    this.rectangle = $('<div/>')
        .css({
            position:'absolute',
            top:215,
            left:75,
            'width': '100px',
	        'height': '50px',
	        'background-color':'yellow',
	    //    'border':'10px solid red'
        })
        .attr({id:'rectangle'})
        .click(function(){object.markCorrect()});
        
    this.square = $('<div/>')
        .css({
            position:'absolute',
            top:200,
            left:275,
            'width': '75px',
	        'height': '75px',
	        'background-color':'skyblue',
	     //   'border':'10px solid yellow'
        })
        .attr({id:'square'})
        .click(function(){object.markIncorrect()});

    
    this.div = $('<div/>')
            .attr({id:"correctShapeDiv", class:"module"})
            .css({
                position:"absolute",
                //top:330,
                bottom:0,
                left:0,
                width:450,
                padding:10,
                'z-layer':3,
                'border':'2px solid cyan',
                // float:'right',
	            'background-color': 'blue',
	            'z-layer':2
	        });
    
    //Checks one of the checkboxes.  Randomizes the border after marking.  Checks if there is a win
    this.markCorrect = function(){
        object.checkIfWon();
     //   console.log(boxNum[0]);
        var box = boxNum[0];
        //console.log(box);
        objRef.dingAudio.play();
        $(object.checkbox[box]).html("&#x2713");
      //  console.log($(this.checkbox[box]).html());
        boxNum.shift();
        
        this.randomizeBorder();

    }
    
    //Picks a random shape and changes the border to a random color among several preset colors
    this.randomizeBorder = function(){
        var randomInt = this.getRandomInt(99,0);
        var randomColor = this.getRandomColor();
        //console.log(randomColor);
       // console.log(randomInt);
        var color = '10px ' + randomColor;
        //console.log(color);
        
        if(randomInt >=0 && randomInt < 33){
            $('#circle').css("display", 'none');
            $('#square').css("display", 'none');
            $('#rectangle').css("display", 'none');
            
            $('#circle').css('border', color);
            $('#square').css('border','none');
            $('#rectangle').css('border','none');
            
            if (this.complete == false){
                setTimeout(function(){
                $('#circle').css("display", 'block');
                $('#square').css("display", 'block');
                $('#rectangle').css("display", 'block');},1000)
            }
            
          //  object.clickThisElement('#circle','10px solid green');
            object.clickThisElement('#circle',color);
        }
        if(randomInt >=33  && randomInt < 66){
            $('#circle').css("display", 'none');
            $('#square').css("display", 'none');
            $('#rectangle').css("display", 'none');
            
            $('#square').css('border',color);
            $('#circle').css('border','none');
            $('#rectangle').css('border','none');
            
            if (this.complete == false){
                setTimeout(function(){
                $('#circle').css("display", 'block');
                $('#square').css("display", 'block');
                $('#rectangle').css("display", 'block');},1000)
            }
          
            object.clickThisElement('#square',color);
        }
        if(randomInt >=66 && randomInt <= 99){
            $('#circle').css("display", 'none');
            $('#square').css("display", 'none');
            $('#rectangle').css("display", 'none');
            
            $('#rectangle').css('border',color);
            $('#square').css('border','none');
            $('#circle').css('border','none');
            
            if (this.complete == false){
                setTimeout(function(){
                $('#circle').css("display", 'block');
                $('#square').css("display", 'block');
                $('#rectangle').css("display", 'block');},1000)
            }
       
            object.clickThisElement('#rectangle',color);
        }
    }
    
    //Adds the click event handler to each shape.  Each combination of border and shape requires user to click on different shape   
    this.clickThisElement = function(shape,borderStyle){
       // console.log(shape + " " + borderStyle);
        if (shape == '#circle' && borderStyle == '10px solid green'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#rectangle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }
        if (shape == '#circle' && borderStyle == '10px solid pink'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#square').on('click',function(){object.markCorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }
        if (shape == '#circle' && borderStyle == '10px solid red'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#circle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
        }
        if (shape == '#circle' && borderStyle == '10px solid black'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#square').on('click',function(){object.markCorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }
        
        if (shape == '#square' && borderStyle == '10px solid green'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#rectangle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }   //rectangle
        if (shape == '#square' && borderStyle == '10px solid pink'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#square').on('click',function(){object.markCorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }    //square
        if (shape == '#square' && borderStyle == '10px solid red'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#circle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
        } //circle
        if (shape == '#square' && borderStyle == '10px solid black'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#rectangle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }   //rectangle
        
        if (shape == '#rectangle' && borderStyle == '10px solid green'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#rectangle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }    //rectangle
        if (shape == '#rectangle' && borderStyle == '10px solid pink'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#square').on('click',function(){object.markCorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        } //square
        if (shape == '#rectangle' && borderStyle == '10px solid red'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#circle').on('click',function(){object.markCorrect()});
            $('#square').on('click',function(){object.markIncorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
        }  //cirlce
        if (shape == '#rectangle' && borderStyle == '10px solid black'){
            $('#circle').off('click');
            $('#rectangle').off('click');
            $('#square').off('click');
            $('#square').on('click',function(){object.markCorrect()});
            $('#rectangle').on('click',function(){object.markIncorrect()});
            $('#circle').on('click',function(){object.markIncorrect()});
        }    //square
    }
    
    //Adds a strike to the strike boxes
    this.markIncorrect = function(){
        //alert('Strike');
        objRef.strike();
      //  console.log(objRef.strikes)
        this.randomizeBorder();
    }
    
    //generates a random number and depending on what that number is, it returns a color in the form of a string
    this.getRandomColor = function(){
        var randomInt = this.getRandomInt(101,-1);
     //   console.log(randomInt);
        if(randomInt >=0 && randomInt < 25){
            var color = "solid green";
            return color;
        }
        if(randomInt >=25  && randomInt < 50){
            var color = "solid pink";
            return color;
        }
        if(randomInt >=50 && randomInt < 75){
            var color = "solid red";
            return color;
        }
        if(randomInt >=75 && randomInt <= 100){
            var color = "solid black";
            return color;
        }
    }
    
    //generates a random integer 
    this.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //checks if there are 5 checks, and if there is, the module is shutdown, preventing the user from doing anything else to it
    this.checkIfWon = function(){
        if (boxNum.length == 1){
            this.complete = true;
            $("#shutDown").css("display", "block");
            $('#shutDown').show();
            $(this.textbox).css('display','block');
            
            $('#circle').css("display", 'none');
            $('#square').css("display", 'none');
            $('#rectangle').css("display", 'none');
            objRef.checkForWin();
            
           // objRef.completeAudio.play();
            //object.reset();
        }
        // else if (this.complete == false){
            
        // }
    }
    
    //this textbox just says that the module is completed and only displays when the module is completed
    this.textbox = $('<input/>')
            .attr({id:"moduleCompleteBox", type:"text", value:"Module Completed",'readonly':'true'})
            .css({
                position:"absolute",
                top:65,
                left:50,
                width:"79%",
                'text-align': 'center',
                'display':'none'
            });
    
    //this is a transparent div that covers the module, preventing interaction between user and module
    this.shutDownModule = $('<div/>')
            .attr({id:"correctShapeDiv", class:"module"})
            .css({
                position:"absolute",
                //top:330,
                bottom:0,
                left:0,
                width:450,
                padding:10,
                'z-layer':8,
                // float:'right',
	            'background-color': 'transparent',
	            'display':'none',
	            'z-layer':5
	            
	        })
	        .attr('id','shutDown');
	        
    this.reset = function(){
        boxNum = ['box1','box2','box3','box4','box5'];
        for (var i = 0; i <= 4; i++){
            var box = boxNum[i];
            $(object.checkbox[box]).html("");
        }
    }
    
    this.div.append(this.checkbox.div).append(this.textbox).append(this.circle).append(this.rectangle).append(this.square).append(this.shutDownModule);
}
