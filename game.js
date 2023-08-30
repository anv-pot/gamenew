export class game{
    constructor(){
    this.canvas = document. createElement ("canvas");
    this.canvas.height = window.innerHeight;
    this.canvas.width = window. innerWidth;
    this.ctx = this.canvas.getContext ("2d");
    this.frame_rate=10;
    document.onkeydown=(event)=>{
        let e = event ||window. event;
        if(e.code == 'ArrowUp'){
        this.up_key_pressed = true;
        }
        else if(e.code == 'ArrowDown'){
        this.down_key_pressed = true;
        }
        else if(e.code == 'space'){
        this.space_key_pressed = true;
        }
    }
    run (){
    this.clearCanvas ();
    this.getBackground();
    this.aircraft.render (this);
    this.bullets = this.bullets.filter((bullet)=>{
    return bullet.render (this);
    });
    this.obstacles = this.obstacles.filter((obstacle)=>{
    return obstacle.render (this);
    })
    if(this.gameover ()===true){
    clearInterval (this.runid);
    this.showResult();
    }
    render ()f
    this.runid = setInterval(()=>{this.runid();}), this.frame_rate);
    }
}
}