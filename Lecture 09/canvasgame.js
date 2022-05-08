var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class player
{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

}

var p = new player(100, 100, 30, 'pink');
p.draw();

canvas.onclick = function(e){
    context.beginPath();
    context.arc(e.x - this.offsetLeft, e.y - this.offsetTop, 10, 0, 2*Math.PI);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

