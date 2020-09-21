class Dustbin {
    constructor(x,y,width,height,angle){
        var options={
            'isStatic':true
        }

        this.x=x; 
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=100; 
        this.wallThickness=20; 
        this.angle=0;  

        this.body = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});

        Matter.Body.setAngle(this.leftWallBody, this.angle); 

        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);

        
    }

    display(){
        var posbottom=this.bottomBody.position
        var posleft=this.leftWallBody.position
        var posright=this.rightWallBody.position
        
        push()
        translate(posleft.x, posleft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255) 
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()
        
        push()
        translate(posright.x, posright.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255) 
        stroke(255)
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()
        
        push()
        translate(posbottom.x, posbottom.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255) 
        stroke(255)
        rect(0,0,this.dustbinWidth, this.wallThickness);
        pop()
        }
        
            
        }
