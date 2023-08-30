export class aircraft{
    constructor(){
    this.x = 100;
    this.y = 300;
    this.height = 100;
    this.width = 100;
    this.speed = 10;
    }
    render (game){
    if (game.up_key_pressed){
    this.y = this.y - this.speed;
    }
    if (game. down_key_pressed){
    this.y = this.y + this.speed;
    }
    game.ctx.drawImage (this.image, this.x, this.y);
    }
}