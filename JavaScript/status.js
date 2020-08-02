class Status extends Effect {

    constructor(type, name, width, height, frames, ability_size, ability_pos_x, ability_pos_y)
    {
        super(type, name, width, height, frames);
        this.ability_size = ability_size;
        this.ability_pos_x = ability_pos_x;
        this.ability_pos_y = ability_pos_y;
    }

    initializeStatusSheet = () => {

        let status;
        let spritesheet = new PIXI.BaseTexture.from(app.loader.resources[this.name].url);
    
        statusSheet[this.name] = [];
    
        for (var i=0;i<this.frames;i++)
        {
            statusSheet[this.name].push(new PIXI.Texture(spritesheet, new PIXI.Rectangle(i * this.width, 0, this.width, this.height)));
        }

        status = new PIXI.AnimatedSprite(statusSheet[this.name]);
        status.anchor.set(this.ability_pos_x, this.ability_pos_y); // Reset Anchor point
        status.animationSpeed = 0.5;
        status.visible = false;
        gameScreen.addChild(status);
        
        return status;
    }

}
