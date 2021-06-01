function inIt(){
    let myCanvas = document.getElementById('myCanvas')
    let pen = myCanvas.getContext('2d')
    let W = myCanvas.width
    let H = myCanvas.height
    let score = document.getElementById('scoreText')
    let count = 0
    
    let food = generateFood()
    let snake = {
        itsLenght : 5,
        itsSpeed : 3,
        itsColor : 'yellow',
        itsCells : [],
        itsDirection : '',
        /*gameOver : function(x){
            let counter = 1
            for(let i=0;i< x-1;i++){
                for(let j=i+1 ; j< x ;j++){
                    if(this.itsCells[i].x === this.itsCells[j].x && this.itsCells[i].y === this.itsCells[j].y ){

                        counter = 0
                    }
                }
            }

            return counter
        },*/
        creatingCells : function(){
            for(let i=this.itsLenght ; i>=0 ;i--){
                this.itsCells.push({x:i,y:0})
            }
        },
        drawingCells : function(){
            pen.fillStyle = this.itsColor
            pen.strokeStyle = 'blue'
            pen.lineWidth = 2
            
            for(let i=0 ; i<this.itsLenght ; i++){
                
                pen.strokeRect(this.itsCells[i].x*10,this.itsCells[i].y*10,10,10)
                pen.fillRect(this.itsCells[i].x*10,this.itsCells[i].y*10,10,10)
            }
        },

        updatingCells : function(){
            //snake.itsCells.pop()
            let Xr = this.itsCells[0].x
            let Yr = this.itsCells[0].y 
            
            
            
            
            if(this.itsDirection == 'right'){
                /**/
                var x= snake.itsLenght
                
                if(food.x==Xr && food.y ==Yr)
                {
                    count++
                    food=generateFood()
                    snake.itsLenght+=1
                    x=snake.itsLenght
                    snake.itsCells.unshift({x:Xr+1,y:Yr})
                }
                if(Xr*10 > W ){
                    Xr=0
                }
                snake.itsCells.unshift({x:Xr+1,y:Yr}) 
                /*if(snake.gameOver(x)==0){
  
                    console.log('f ho gaya')
                    clearInterval(intervalId)
                }*/

                
            }
              //moving right
            
            else if(this.itsDirection == 'down'){
               
                var x= snake.itsLenght
                if(food.x==Xr && food.y ==Yr)
                {
                    count++
                    food=generateFood()
                    snake.itsLenght+=1
                    x=snake.itsLenght
                    snake.itsCells.unshift({x:Xr,y:Yr+1})
                }
                if(Yr*10 > H){
                    Yr=0
                }
                snake.itsCells.unshift({x:Xr,y:Yr+1})
                /*if(snake.gameOver(x)== 0){

                    console.log('f ho gaya')
                    clearInterval(intervalId)
                }*/
                
            }
             // moving down
            
            else if(this.itsDirection == 'up'){
               /* */
                var x= snake.itsLenght
                if(food.x==Xr && food.y ==Yr)
                {
                    count++
                    food=generateFood()
                    snake.itsLenght+=1
                    x=snake.itsLenght
                    snake.itsCells.unshift({x:Xr,y:Yr-1})
                }
                if(Yr*10 < 0){
                    Yr=H/10
                }
                snake.itsCells.unshift({x:Xr,y:Yr-1})
               /* if(snake.gameOver(x)== 0){

                    console.log('f ho gaya')
                    clearInterval(intervalId)
                }*/
                
            }
             // moving up
            
            else if(this.itsDirection == 'left'){
                /**/
                var x= snake.itsLenght
                if(food.x==Xr && food.y ==Yr)
                {
                    count++
                    food=generateFood()
                    snake.itsLenght+=1
                    x=snake.itsLenght
                    snake.itsCells.unshift({x:Xr-1,y:Yr})
                }
                if(Xr*10 < 0){
                    Xr=W/10
                }
                snake.itsCells.unshift({x:Xr-1,y:Yr})
                /*if(snake.gameOver(x)==0){

                    console.log('f ho gaya')
                    clearInterval(intervalId)
                }*/
                
            }
             //moving left
        },

    }

    snake.creatingCells()
    //adding event listeners to the game
    function keyPressed(ev){
        console.log('YOU PRESSED A KEY')
        console.log(ev.key)
        if(ev.key == 'ArrowRight'){
            snake.itsDirection = 'right'
        }

        else if(ev.key == 'ArrowLeft'){
            snake.itsDirection = 'left'
        }

        else if(ev.key == 'ArrowDown'){
            snake.itsDirection = 'down'
        }
        else if(ev.key == 'ArrowUp'){
            snake.itsDirection = 'up'
        }
    }

    document.addEventListener('keydown',keyPressed)
    
    function draw(){
        //console.log('draw')
        pen.clearRect(0,0,W,H)
        snake.drawingCells()

        //Drawing the food
        pen.fillStyle = food.color
        pen.fillRect(food.x*10,food.y*10,10,10)
    }

    function update(){
        //console.log('update')
        snake.updatingCells()
        countScore()
       /* if(snake.gameOver()==0){
            clearInterval(intervalId)
        }*/
    
    }

    function gameLoop(){
        draw()
        update()
    }

    intervalId = setInterval(()=>{
        gameLoop()
    },200)
    function generateFood(){
        let foodX
        let foodY
    
        foodX = Math.round(Math.random()*(W-10)/10)
        foodY = Math.round(Math.random()*(H-10)/10)
        let foodColor =['green','pink','orange','aqua']
        let i = Math.round(Math.random()*foodColor.length)
    
        objFood = {
            x: foodX,
            y: foodY,
            color: foodColor[i]
        }
    
        return objFood
    }

    function countScore(){
        let sc = count*10
        score.innerText = sc
    }

}


inIt()