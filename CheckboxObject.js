function Checkbox(objectToAddTo){
    /* Author: Sheldon Dong*/
    var _this=this;
  //  console.log(objectToAddTo);
    this.div = $('<div/>')
        //.attr({id:"slideshow-controlPanel"})
        .css({
            color:'black',
            position: 'absolute',
            border: '1px solid black',
            width: '200px',
            height: '40px',
            background:'skyblue',
            left:125,
            'z-index': 4,
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
                left: 40,
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
                left: 80,
                'z-index': 4
            })
            .attr({
                id: 'box3'
            });
    this.box4 = $('<div/>')
            .css({
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '1px solid black',
             //   padding: '20px',
                background:'#d3d3d3',
                left: 120,
                'z-index': 4
            })
            .attr({
                id: 'box4'
            });
    this.box5 = $('<div/>')
            .css({
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '1px solid black',
            //    padding: '20px',
                background:'#d3d3d3',
                left: 160,
                'z-index': 4
            })
            .attr({
                id: 'box5'
            });
            
    this.div.append(this.box1).append(this.box2).append(this.box3).append(this.box4).append(this.box5);        
}