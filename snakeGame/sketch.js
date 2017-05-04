var block=20;
var snake;
var food;
var eaten = false;
var goingUP = true;
var goingDOWN = true;
var goingRIGHT = true;
var goingLEFT = true;
var gameOver = false;

function setup(){ 
    createCanvas(600,600);
    snake = new Snake();
    food = new Food();
    frameRate(10);
}

function draw(){
    
    background(135);
    
    fill(200);
    text("Score= "+(snake.total-1)*5,30,20);
   
    death();
    if(gameOver){
             
                textAlign(CENTER);
                text("Game Over, Press R",width/2,height/2);
    }
    else{
    snake.update();
    
    snake.display();
    
    food.checkIfEaten(snake.x,snake.y);
    if(eaten){
        food = new Food();
        snake.total++;
        eaten = false;
    }
        
    
    food.showFood();  
    }
}

function keyPressed(){
    
    if(keyCode == UP_ARROW){
        
        if(goingUP){
        snake.dir(0,-1);
        goingUP = false;
        goingDOWN = false;
        goingRight = true;
        goingLEFT = true;
        }
    }
    else if(keyCode == DOWN_ARROW){
        
        if(goingDOWN){
        snake.dir(0,1);
        
        goingUP = false;
        goingDOWN = false;
        goingRight = true;
        goingLEFT = true;
        }
    }
     else if(keyCode == RIGHT_ARROW){
       
        if(goingRIGHT){
        snake.dir(1,0);
      
        goingUP = true;
        goingDOWN = true;
        goingRight = false;
        goingLEFT = false;
        }
         
     }
     else if(keyCode == LEFT_ARROW){
        if(goingLEFT){
         snake.dir(-1,0);
       
        goingUP = true;
        goingDOWN = true;
        goingRight = false;
        goingLEFT = false;   
       }
     }
    else if(keyCode == 'R' || keyCode =='r' || key == 'r' ||key=='R'){
       
        resetGame();
    }
    
    
    
}
function death(){
        
        for(var i=0;i<snake.total-1;i++){
            
            if(dist(snake.tailX[i],snake.tailY[i],snake.x,snake.y) < 1){
                
                gameOver = true;
            
              
            }
            
            
        }
        
        
        if(snake.x>=width || snake.y>=height || snake.x< 0 || snake.y < 0){
               gameOver = true;
             
        
        }
    }

function resetGame(){
    
    gameOver = false;
    snake = new Snake();
  
    }