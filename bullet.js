export class bullet{
constructor(game)
{
this.width = 100;
this.height = 60;
this.x = game.aircraft.x + game.aircraft.width;
this.y = game.aircraft.y + (game.aircraft.height - this.height) /2;
this.speed = 10;
}
render (game)
{
if(this.x < game.canvas_width){
this.x = this.x + this.speed
}
else{
return false
}
game.ctx.drawImage (this.image, this.x, this.y);
}
}