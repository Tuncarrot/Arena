class Player extends Character {

    constructor(dmg, hp, mana, def, speed, xp)
    {
        super(dmg, hp, mana, def, speed, xp);
    }

    setUKey = () => {
        
    }

    getUKey = () => {
        
    }

    setIKey = () => {

    }

    setOKey = () => {

    }

    setPKey = () => {

    }
    

    initializePlayer = () => {
        // Player object 
        player = new PIXI.AnimatedSprite(playerSheet.standSouth);
        player.anchor.set(0.5); // Reset Anchor point
        player.x = app.view.width/2;
        player.y = app.view.height/2;
        player.scale.x = 1.5;
        player.scale.y = 1.5;
        player.animationSpeed = 0.3;
        player.loop = false;  
        gameScreen.addChild(player); // Add to game container

        playerSpeed = this.speed;

        player.play();
    }

    initializeStaticPlayer = (charNum, spriteSheetRef) => {
        
        let spritesheet = new PIXI.BaseTexture.from(app.loader.resources[spriteSheetRef].url);
        let charChoice = charNum;

        let w = 26;
        let h = 36;

        // Adjustment for next row in the spritesheet. (0, 1, 2, 3 -next row- 4, 5, 6, 7)
        if (charNum > 3)
        {
            charChoice = charNum-4;
            h=h*4;
        }
        else
        {
            h=0;
        }

        w = (3*charChoice*w) + w;

        staticPlayerSheet["standSouth"] = [
            new PIXI.Texture(spritesheet,new PIXI.Rectangle(w, h, 26, 36))
        ];

        staticPlayer = new PIXI.AnimatedSprite(staticPlayerSheet.standSouth);
        staticPlayer.anchor.set(0.5); // Reset Anchor point
        staticPlayer.x = app.view.width/2;
        staticPlayer.y = app.view.height*(1/3);
        staticPlayer.scale.x = 3;
        staticPlayer.scale.y = 3;

        return staticPlayer;
    }

    initializePlayerSheet = (spriteSheetChar, spriteSheetEmote) => {
        let emoteSpriteSheet = new PIXI.BaseTexture.from(app.loader.resources[spriteSheetEmote].url);
        let spritesheet = new PIXI.BaseTexture.from(app.loader.resources[spriteSheetChar].url);
        let charChoice = charSelection;

        let w = 26;
        let h = 36;

        let adjh=0;

        //charSelection holds the character selection from the previous screen

        // Adjustment for next row in the spritesheet. (0, 1, 2, 3 -next row- 4, 5, 6, 7)
        if (charSelection > 3)
        {
            charChoice = charSelection-4;
            adjh=h*4;
        }
        else
        {
           // h=0;
        }

        playerSheet["standSouth"] = [
            new PIXI.Texture(spritesheet,new PIXI.Rectangle((3*charChoice*w) + w, 0 + adjh, w, h))
        ];

        playerSheet["standWest"] = [
            new PIXI.Texture(spritesheet,new PIXI.Rectangle((3*charChoice*w) + w, h + adjh, w, h))
        ];

        playerSheet["standEast"] = [
            new PIXI.Texture(spritesheet,new PIXI.Rectangle((3*charChoice*w) + w, (h*2) + adjh, w, h))
        ];

        playerSheet["standNorth"] = [
            new PIXI.Texture(spritesheet,new PIXI.Rectangle((3*charChoice*w) + w, (h*3) + adjh, w, h))
        ];

        playerSheet["walkSouth"] = [];
        playerSheet["walkWest"] = [];
        playerSheet["walkEast"] = [];
        playerSheet["walkNorth"] = [];

        playerSheet["emoteYes"] = [];
        playerSheet["emoteNo"] = [];
        playerSheet["emoteLaugh"]= [];
        playerSheet["emoteSpook"] = [];

        for (var i=0;i<3;i++)
        {
            // Player Movement Sprites
            playerSheet["walkSouth"].push(new PIXI.Texture(spritesheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), 0 + adjh, w, h)));
            playerSheet["walkWest"].push(new PIXI.Texture(spritesheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), h + adjh, w, h)));
            playerSheet["walkEast"].push(new PIXI.Texture(spritesheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), (h*2) + adjh, w, h)));
            playerSheet["walkNorth"].push(new PIXI.Texture(spritesheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), (h*3) + adjh, w, h)));
        
            // Player Emote Sprites
            playerSheet["emoteYes"].push(new PIXI.Texture(emoteSpriteSheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), 0 + adjh, w, h)));
            playerSheet["emoteNo"].push(new PIXI.Texture(emoteSpriteSheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), h + adjh, w, h)));
            playerSheet["emoteLaugh"].push(new PIXI.Texture(emoteSpriteSheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), (h*2) + adjh, w, h)));
            playerSheet["emoteSpook"].push(new PIXI.Texture(emoteSpriteSheet, new PIXI.Rectangle((i * w)+(charChoice*w*3), (h*3) + adjh, w, h)));
        
        }
    }



}