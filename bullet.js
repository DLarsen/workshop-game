class Bullet {
    constructor(name, positionVector, velocityVector, lifespan) {
        this.name = name;
        this.positionVector = positionVector;
        this.velocityVector = velocityVector;
        this.lifespan = lifespan;
        this.radius = 5;
    }

  draw() {
    push();
        if (this.lifespan > 0){
            fill(255, 255, 0); // yellow for bullet
        } else {
            fill(44, 0, 0); // yellow for bullet

        }
        ellipse(this.positionVector.x, this.positionVector.y, this.radius * 2, this.radius * 2);
    pop();
  }

  update(){
    this.positionVector.add(this.velocityVector);
    this.lifespan -= 1;
    if (this.lifespan < 0) this.lifespan = 0;
  }
}