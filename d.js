class Blocm{
    constructor(x, y, width, height) {

        var options = {
            isStatic:false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        rectMode(CENTER);
        fill(53,209,208);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }