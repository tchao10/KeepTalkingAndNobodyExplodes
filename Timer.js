	/* Author: Sheldon */
	   
function Timer(objRef){

    var object = this;
	var totalSeconds = 180; //180 is 3 mins; 300 is 5 mins
	var timer;
	var minutes;
	var seconds;
	this.countDownTimer,

	this.div = (function(){
		var timer = $('<div/>')
			.css({
				position:'absolute',
				color:'black',
			  	'background-color': '#d3d3d3',
			  	border:"1px solid black",
				height:50,
				width:150,
				margin:'auto',
				top:660,
				left:'42%',
				'text-align':'center',
				'vertical-align': 'middle',
				'line-height': '45px',
			});
		return timer;
	})(),
	
	this.minuteSpan = (function(){
		var minuteSpan = $('<span/>')
			.css({
				"font-weight":"bold",
				"font-size":"25px",
			})
			.html("03");
		object.div.append(minuteSpan);
		return minuteSpan;
	})(),
	
	object.div.append("<span style='font-size:25px'>:</span>");
	
	this.secondSpan = (function(){
		var secondSpan = $('<span/>')
			.css({
				"font-weight":"bold",
				"font-size":"25px",
			})
			.html("00");
		object.div.append(secondSpan);
		return secondSpan;
	})(),

	this.countDown = function(){
		totalSeconds--;
		var minute = parseInt(totalSeconds/60);
		var second = totalSeconds % 60;
		if (minute <10){	//types out minutes in the correct format when less than 10
			minute = "0" + minute.toString();
		};
		
		if (second <10){	//types out seconds in the correct format when less than 10
			second = "0" + second.toString();
		};
		object.minuteSpan.html(minute);
		object.secondSpan.html(second);
		
		if (minute <10){	//types out minutes in the correct format when less than 10
			minute = "0" + minute.toString();
		};
		
		if (second <10){	//types out seconds in the correct format when less than 10
			second = "0" + second.toString();
		}
		if(parseInt(totalSeconds) == 0){
		 	objRef.detonate();
		}
	},
	
	/* this.updateTimer = function(){
		var minute = parseInt(totalTime/60);
		var second = totalTime % 60;
			
		object.minuteSpan.html(minute);
		object.secondSpan.html(second);
	}, */
	
	this.startTimer = function(){
		clearInterval(this.countDownTimer);
		this.countDownTimer = setInterval(this.countDown, 1000);
	};
}