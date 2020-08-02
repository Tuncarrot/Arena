drawButton = (path, width, height, canvas) => {

    let btnRect = new PIXI.Graphics();
    btnRect.beginFill(0x00FF00);
    btnRect.drawRect(100,100,200,100);

    canvas.addChild(btnRect);

	this.interactive = true;
	this.buttonMode = true;

	this.viewportX = 0;
}