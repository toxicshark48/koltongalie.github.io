function shot(x, y, image){
	if(x<0) this.x=0;
	else	this.x=x;
	this.y=y;
	this.image=image;

}

shot.prototype.update=function(){
	this.y-=5;
}

shot.prototype.draw=function(ctx){
	ctx.drawImage(this.image, this.x, this.y);
}


