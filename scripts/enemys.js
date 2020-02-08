function enemy(x, y, image, speed){
	if(x<0) this.x=0;
	else	this.x=x;
	this.y=y;
	this.image=image;
	

	this.speed=speed;
}

enemy.prototype.update=function(){
	this.y+=this.speed;
}

enemy.prototype.draw=function(ctx){
	ctx.drawImage(this.image, this.x, this.y);
}


//mushrooms.push(new Mushroom(Math.random()*canvas.width-mush.width, 0, mush,	parseInt(Math.random()*mushMaxSpeed)+1));
