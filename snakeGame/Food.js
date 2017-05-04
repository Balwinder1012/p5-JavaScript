function Food(){
    
    this.foodX = (int)(random(width/block)) * block;
    this.foodY = (int)(random(height/block)) * block;
    this.showFood = function(){
        
        fill(240,0,0);
        
        rect(this.foodX,this.foodY,block,block);
        
    }
     this.checkIfEaten = function(x,y){
        
        var dis = dist(x,y,this.foodX,this.foodY);
        if(dis<1)
            eaten = true;
         else
            eaten = false;
                
    }
    
    
}