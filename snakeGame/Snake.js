function Snake(){
    
    this.x = 0;
    this.y = 20;
    this.xSpeed=0;
    this.ySpeed=0;
    this.total=1;
    this.tailX=[];
    this.tailY=[];
    this.gameOver = false;
    this.update = function(){
        
        for(var i =0;i<this.total-1;i++)
           this.tailX[i] = this.tailX[i+1];
        
         for(var i =0;i<this.total-1;i++)
           this.tailY[i] = this.tailY[i+1];
        
        this.tailX[this.total-1] = this.x;
        this.tailY[this.total-1] = this.y;
        
        
        
        
        this.x+=this.xSpeed*block;
        this.y+=this.ySpeed*block;
        
    }
    this.display = function(){
        
        fill(245);
        
        for(var i=0;i<this.total;i++){
           rect(this.tailX[i],this.tailY[i],block,block);
           print(this.tailX[i]);
            
        }

        
    }
    this.dir = function(X,Y){
        this.xSpeed=X;
        this.ySpeed=Y;
        
        
        
    }
}