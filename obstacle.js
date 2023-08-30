export class obstacle{
    constructor (game){
    this.width = 70;
    this.height = 50;
    this.x = game.canvas_width - this.width;
    this.y = Math. fLoUr (Math. random() * (game.canvas_height-this.height))+1;
    this.speed = 7;
    }
    render (game){
    if(this.x+this.width>e){
    this.x = this.x - this.speed;
    }
    else
    { return false;
    }
    game.ctx.drawImage (this.image, this.x, this.y);
    return true;
    }
}