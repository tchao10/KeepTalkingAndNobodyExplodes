    /* Author: Sheldon Dong*/
function StrikeBox(objectToAddTo){
    var object = this;
    
    this.div = $('<div/>')
        .css({
            position: 'absolute',
            width: '120px',
            height: '40px',
            left:25,
            'z-index': 4,
            top:665,
            'text-align':'center',
			'vertical-align': 'middle',
			'line-height': '40px',
         });
            
    this.box1 = $('<div/>')
            .css({
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '1px solid black',
               // padding: '20px',
                background:'#d3d3d3',
                left: 200,
                'z-index': 3
            })
            .attr({
                id: 'box1'
            })
            .html('');
            
    this.box2 = $('<div/>')
            .css({
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '1px solid black',
             //   padding: '20px',
                background:'#d3d3d3',
                left: 240,
                'z-index': 4
            })
            .attr({
                id: 'box2'
            });
            
            
    this.box3 = $('<div/>')
            .css({
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '1px solid black',
              //  padding: '20px',
                background:'#d3d3d3',
                left: 280,
                'z-index': 4
            })
            .attr({
                id: 'box3'
            });
    
    this.quitBox = (function(){
        var box = $('<div/>')
            .css({
                position: 'absolute',
                width: '100px',
                height: '40px',
                border: '1px solid black',
              //  padding: '20px',
                background:'#aaaaaa',
                left: 0,
                'z-index': 4,
                cursor:'pointer',
                'font-weight':'bold',
            })
            .attr({
                id: 'quitBox'
            })
            .html("Quit Game")
            .click(function(){
                objectToAddTo.detonate();
            })
            .mouseover(function(){
                object.quitBox.css("background-color", '#d3d3d3');
            })
            .mouseout(function(){
                object.quitBox.css("background-color", '#aaaaaa');
            });
        return box;
    })();
    
     this.div.append(this.box1).append(this.box2).append(this.box3).append(this.quitBox);  
    
}