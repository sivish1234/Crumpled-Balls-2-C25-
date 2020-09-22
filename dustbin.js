class dustbin {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true
     }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.lW = Bodies.rectangle(x-width/2,y-height/2-25,20,90,options);
        this.rW = Bodies.rectangle(x+width/2,y-height/2-25,20,90,options);

        this.image = loadImage("dustbin1.png");
      World.add(world,this.body);
      World.add(world,this.lW);
      World.add(world,this.rW);
  }

  display() {
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,150,200);
    pop();
    
    var posL = this.lW.position
    push();
    rectMode(CENTER);
    pop();

    var posR = this.rW.position
    push();
    rectMode(CENTER);
    pop();
    

  }

}
