class Bay{
    constructor(x, y, width, height) {

        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.6
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }