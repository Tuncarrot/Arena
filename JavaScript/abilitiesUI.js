class AbilitiesUI {

    constructor()
    {
        this.perkIconSprite_1;
        this.perkIconSprite_2;
        this.perkIconSprite_3;
        this.perkIconSprite_4;
        this.perkIconSprite_5;
        this.perkIconSprite_6;
        this.perkIconSprite_7;
        this.perkIconSprite_8;
        this.perkIconSprite_9;
        this.perkIconSprite_10;
    }

    loadAbilityIcons = (arrayOfIcons) => {
        let perkCircleSprite = new PIXI.AnimatedSprite(abilityUI.circle1); 

        perkCircleSprite.anchor.set(0.5);
        perkCircleSprite.x = app.view.width/2;
        perkCircleSprite.y = app.view.height*(3/7);

        let perkIconSprite_1 = new PIXI.Sprite(arrayOfIcons[0]);

        perkIconSprite_1.anchor.set(0.5);
        perkIconSprite_1.y = app.view.height*STAGE_1_ABILITY_1_HEIGHT;
        perkIconSprite_1.x = app.view.width*STAGE_1_ABILITY_1_WIDTH; 
        perkIconSprite_1.scale.x = ICON_X_SCALE;
        perkIconSprite_1.scale.y = ICON_Y_SCALE;

        let perkIconSprite_2 = new PIXI.Sprite(arrayOfIcons[1]);

        perkIconSprite_2.anchor.set(0.5);
        perkIconSprite_2.y = app.view.height*STAGE_1_ABILITY_2_HEIGHT;
        perkIconSprite_2.x = app.view.width*STAGE_1_ABILITY_2_WIDTH; 
        perkIconSprite_2.scale.x = ICON_X_SCALE;
        perkIconSprite_2.scale.y = ICON_Y_SCALE;

        let perkIconSprite_3 = new PIXI.Sprite(arrayOfIcons[2]);

        perkIconSprite_3.anchor.set(0.5);
        perkIconSprite_3.y = app.view.height*STAGE_1_ABILITY_3_HEIGHT;
        perkIconSprite_3.x = app.view.width*STAGE_1_ABILITY_3_WIDTH; 
        perkIconSprite_3.scale.x = ICON_X_SCALE;
        perkIconSprite_3.scale.y = ICON_Y_SCALE;

        let perkIconSprite_4 = new PIXI.Sprite(arrayOfIcons[3]);

        perkIconSprite_4.anchor.set(0.5);
        perkIconSprite_4.y = app.view.height*STAGE_1_ABILITY_4_HEIGHT;
        perkIconSprite_4.x = app.view.width*STAGE_1_ABILITY_4_WIDTH; 
        perkIconSprite_4.scale.x = ICON_X_SCALE;
        perkIconSprite_4.scale.y = ICON_Y_SCALE;

        let perkIconSprite_5 = new PIXI.Sprite(arrayOfIcons[4]);

        perkIconSprite_5.anchor.set(0.5);
        perkIconSprite_5.y = app.view.height*STAGE_2_ABILITY_1_HEIGHT;
        perkIconSprite_5.x = app.view.width*STAGE_2_ABILITY_1_WIDTH; 
        perkIconSprite_5.scale.x = ICON_X_SCALE;
        perkIconSprite_5.scale.y = ICON_Y_SCALE;

        let perkIconSprite_6 = new PIXI.Sprite(arrayOfIcons[5]);

        perkIconSprite_6.anchor.set(0.5);
        perkIconSprite_6.y = app.view.height*STAGE_2_ABILITY_2_HEIGHT;
        perkIconSprite_6.x = app.view.width*STAGE_2_ABILITY_2_WIDTH; 
        perkIconSprite_6.scale.x = ICON_X_SCALE;
        perkIconSprite_6.scale.y = ICON_Y_SCALE;

        let perkIconSprite_7 = new PIXI.Sprite(arrayOfIcons[6]);

        perkIconSprite_7.anchor.set(0.5);
        perkIconSprite_7.y = app.view.height*STAGE_2_ABILITY_3_HEIGHT;
        perkIconSprite_7.x = app.view.width*STAGE_2_ABILITY_3_WIDTH; 
        perkIconSprite_7.scale.x = ICON_X_SCALE;
        perkIconSprite_7.scale.y = ICON_Y_SCALE;

        let perkIconSprite_8 = new PIXI.Sprite(arrayOfIcons[7]);

        perkIconSprite_8.anchor.set(0.5);
        perkIconSprite_8.y = app.view.height*STAGE_2_ABILITY_4_HEIGHT;
        perkIconSprite_8.x = app.view.width*STAGE_2_ABILITY_4_WIDTH; 
        perkIconSprite_8.scale.x = ICON_X_SCALE;
        perkIconSprite_8.scale.y = ICON_Y_SCALE;


        abilitiesScreen.addChild(perkCircleSprite);
        abilitiesScreen.addChild(perkIconSprite_1);
        abilitiesScreen.addChild(perkIconSprite_2);
        abilitiesScreen.addChild(perkIconSprite_3);
        abilitiesScreen.addChild(perkIconSprite_4);
        abilitiesScreen.addChild(perkIconSprite_5);
        abilitiesScreen.addChild(perkIconSprite_6);
        abilitiesScreen.addChild(perkIconSprite_7);
        abilitiesScreen.addChild(perkIconSprite_8);
    }

    loadPerkIcons = () => {

    }
}