function expObj(x, y, image, time){
	this.x=x;
	this.y=y;
	this.image=image;
	this.time = time;

}

/*boom.prototype.update=function(){
	
}*/

expObj.prototype.draw=function(ctx, frameW, frameH, currFrame){
	ctx.drawImage(this.image, frameW*currFrame, 0, frameW, frameH, this.x, this.y, frameW, frameH);
}

