//Snake Game : GameLoop(Draw(erase),update,)
    
function inIt(){
    
    /*My canvas and the pen ready for drawing */
    myCanvas = document.getElementById('myCanvas')
    pen = myCanvas.getContext('2d')
    var width = myCanvas.width
    var height = myCanvas.height
    
    

    let snake = {
        lenght:5,
        color:'yellow',
        cells : [],
        updateCells : function(){
            for(let i=this.lenght ;i>=0 ;i--){
                
                console.log(i)
                this.cells.push({x:i,y:0})
            }
        },

        drawCells : function(){
            
            for(let j=0; j< this.length ; j++){
                
                console.log('drawing'+ j ,'th cell')
                pen.fillStyle = this.color
                pen.fillStroke = 'white'
                pen.fillRect((this.cells[j].x)*10,this.cells[j].y*10,10,10)
            }
        }

    }

    snake.updateCells()
    pen.fillStroke = 'blue'
    pen.fillRect(0,0,50,50)
    for(i=1;i<=snake.lenght;i++)
       {
        console.log(snake.cells[i])
       }
    function draw(){
        //console.log('Draw Fcn')
        pen.clearRect(0,0,width,height)
        snake.drawCells()
    }
    
    function update(){
        //console.log('Update Fcn')
        /*snake.updateCells()
       */
    
    }
    
    /*function gameLoop(){
        update()
        draw()
    }*/
    
    
    draw()
    //update()
    //gameLoop()
    /*const x = setInterval(()=>{
        gameLoop()
    },100)*/
}

inIt()