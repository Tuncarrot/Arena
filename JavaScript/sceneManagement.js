class Scene {

    switchScene = (sceneNum) => {
        switch (sceneNum)
        {
            case MAIN_SCREEN:
                startScreen.visible = true;
                charScreen.visible = false;
                abilitiesScreen.visible = false;
                gameScreen.visible = false;
            break;
            case CHAR_SCREEN:
                startScreen.visible = false;
                charScreen.visible = true;
                abilitiesScreen.visible = false;
                gameScreen.visible = false;
            break;
            case ABILITY_SCREEN:
                startScreen.visible = false;
                charScreen.visible = false;
                abilitiesScreen.visible = true;
                gameScreen.visible = false;
            break;
            case GAME_SCREEN:
                startScreen.visible = false;
                charScreen.visible = false;
                abilitiesScreen.visible = false;
                gameScreen.visible = true;
            break;
        }
    }

    initializeScenes = () => {
        startScreen = new PIXI.Container();
        charScreen = new PIXI.Container();
        abilitiesScreen = new PIXI.Container();
        gameScreen = new PIXI.Container();

        app.stage.addChild(startScreen);
        app.stage.addChild(charScreen);
        app.stage.addChild(abilitiesScreen);
        app.stage.addChild(gameScreen);
    }

    drawMainScene = () => {
        // Draw Start Screen
        let redRect = new PIXI.Graphics();
        redRect.beginFill(0xF2F2F2);
        redRect.drawRect(0,0,app.view.width, app.view.height);
        startScreen.addChild(redRect);

        let titleTextTop = new PIXI.Text('ALCEHMA',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 70, fill : 0x000000, align : 'center'});

        titleTextTop.anchor.set(0.5);
        titleTextTop.x = app.view.width/2;
        titleTextTop.y = app.view.height/5;

        let titleTextBot = new PIXI.Text('ARENA',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_ORANGE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 50, fill : 0x000000, align : 'center'});

        titleTextBot.anchor.set(0.5);
        titleTextBot.x = app.view.width/2;
        titleTextBot.y = app.view.height*(2/5);


        let playBtn = new PIXI.Text('LETS GO BOIS',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 30, fill : 0x000000, align : 'center'});

        playBtn.anchor.set(0.5);
        playBtn.x = app.view.width/2;
        playBtn.y = app.view.height*(4/5);

        playBtn.buttonMode = true;
        playBtn.interactive = true;
        playBtn
        .on('pointerdown', this.onPlayButtonDown)
        .on('pointerup', this.onButtonUp)
        .on('pointerupoutside', this.onButtonUp)
        .on('pointerover', this.onButtonOver)
        .on('pointerout', this.onButtonOut);

        startScreen.addChild(titleTextTop);
        startScreen.addChild(titleTextBot);
        startScreen.addChild(playBtn);
    }

    drawCharScene = () => {

        // Make Static Player
        charSelection=0;
        spriteSheetSelection=1;
        // This triggers the game scene?
        staticPlayerObj = new Player(0,0,0,0);
        staticSelection = staticPlayerObj.initializeStaticPlayer(charSelection, "spriteSheetCharacters1");

        // Draw Start Screen
        let redRect = new PIXI.Graphics();
        redRect.beginFill(0xF2F2F2);
        redRect.drawRect(0,0,app.view.width, app.view.height);
        charScreen.addChild(redRect);

        selectSetOneBtn = new PIXI.Text(REGION_ONE,
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_ORANGE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        selectSetOneBtn.anchor.set(0.5);
        selectSetOneBtn.x = app.view.width*(2/7);
        selectSetOneBtn.y = app.view.height*(1/7);

        selectSetOneBtn.buttonMode = true;
        selectSetOneBtn.interactive = true;
        selectSetOneBtn
        .on('pointerdown', this.selectSpriteCollection1)

        selectSetTwoBtn = new PIXI.Text(REGION_TWO,
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        selectSetTwoBtn.anchor.set(0.5);
        selectSetTwoBtn.x = app.view.width*(5/7);
        selectSetTwoBtn.y = app.view.height*(1/7);

        selectSetTwoBtn.buttonMode = true;
        selectSetTwoBtn.interactive = true;
        selectSetTwoBtn
        .on('pointerdown', this.selectSpriteCollection2)

        cycleLeftBtn = new PIXI.Text('<',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 70, fill : 0x000000, align : 'center'});

        cycleLeftBtn.anchor.set(0.5);
        cycleLeftBtn.x = app.view.width*(1/5);
        cycleLeftBtn.y = app.view.height*(1/4);

        cycleLeftBtn.buttonMode = true;
        cycleLeftBtn.interactive = true;
        cycleLeftBtn
        .on('pointerdown', this.onCharCycleLeft)

        cycleRightBtn = new PIXI.Text('>',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_ORANGE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 70, fill : 0x000000, align : 'center'});

        cycleRightBtn.anchor.set(0.5);
        cycleRightBtn.x = app.view.width*(4/5);
        cycleRightBtn.y = app.view.height*(1/4);

        cycleRightBtn.buttonMode = true;
        cycleRightBtn.interactive = true;
        cycleRightBtn
        .on('pointerdown', this.onCharCycleRight)

        // Stats UI

        // Name

        charNameText = new PIXI.Text('NAME',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        charNameText.anchor.set(0.5);
        charNameText.x = app.view.width*(15/30);
        charNameText.y = app.view.height*(9/20);

        // Damage UI
        let damageText = new PIXI.Text('DESTRUCTION',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        damageText.anchor.set(1);
        damageText.x = app.view.width*(14/30);
        damageText.y = app.view.height*(11/20);

        damageBar = new PIXI.Graphics();
        damageBar.beginFill(COLOUR_BLUE);
        damageBar.drawRect(0,-30,250,30); // Third Value, charSelection => stats

        damageBar.x = app.view.width*(16/30);
        damageBar.y = app.view.height*(11/20);

        // Health UI
        let healthText = new PIXI.Text('HEART',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        healthText.anchor.set(1);
        healthText.x = app.view.width*(14/30);
        healthText.y = app.view.height*(12/20);

        healthBar = new PIXI.Graphics();
        healthBar.beginFill(COLOUR_BLUE);
        healthBar.drawRect(0,-30,250,30);

        healthBar.x = app.view.width*(16/30);
        healthBar.y = app.view.height*(12/20);

        // Mana UI
        let manaText = new PIXI.Text('SOUL',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        manaText.anchor.set(1);
        manaText.x = app.view.width*(14/30);
        manaText.y = app.view.height*(13/20);

        manaBar = new PIXI.Graphics();
        manaBar.beginFill(COLOUR_BLUE);
        manaBar.drawRect(0,-30,250,30);

        manaBar.x = app.view.width*(16/30);
        manaBar.y = app.view.height*(13/20);

        // Defense UI
        let defenseText = new PIXI.Text('GUARD',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        defenseText.anchor.set(1);
        defenseText.x = app.view.width*(14/30);
        defenseText.y = app.view.height*(14/20);

        defenseBar = new PIXI.Graphics();
        defenseBar.beginFill(COLOUR_BLUE);
        defenseBar.drawRect(0,-30,250,30);

        defenseBar.x = app.view.width*(16/30);
        defenseBar.y = app.view.height*(14/20);

        // Speed UI
        let speedText = new PIXI.Text('SWIFTNESS',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        speedText.anchor.set(1);
        speedText.x = app.view.width*(14/30);
        speedText.y = app.view.height*(15/20);

        speedBar = new PIXI.Graphics();
        speedBar.beginFill(COLOUR_BLUE);
        speedBar.drawRect(0,-30,250,30);

        speedBar.x = app.view.width*(16/30);
        speedBar.y = app.view.height*(15/20);

        passiveAbilityText = new PIXI.Text('ABILITY DATA',
        {fontFamily : 'pixel',wordWrap: true, wordWrapWidth: app.view.width*(4/5) ,dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 20, fill : 0x000000, align : 'center'});

        passiveAbilityText.anchor.set(.5);
        passiveAbilityText.x = app.view.width*(14/30);
        passiveAbilityText.y = app.view.height*(16/20);

        let playBtn = new PIXI.Text('CONTINUE',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 25, fill : 0x000000, align : 'center'});

        playBtn.anchor.set(0.5);
        playBtn.x = app.view.width/2;
        playBtn.y = app.view.height*(14/15);

        playBtn.buttonMode = true;
        playBtn.interactive = true;
        playBtn
        .on('pointerdown', this.onCharConfirmBtnDown)
        .on('pointerup', this.onButtonUp)
        .on('pointerupoutside', this.onButtonUp)
        .on('pointerover', this.onButtonOver)
        .on('pointerout', this.onButtonOut);

        charScreen.addChild(selectSetOneBtn);
        charScreen.addChild(cycleLeftBtn);
        charScreen.addChild(cycleRightBtn);
        charScreen.addChild(playBtn);
        charScreen.addChild(staticSelection);
        charScreen.addChild(selectSetTwoBtn);

        charScreen.addChild(charNameText);

        charScreen.addChild(damageText);
        charScreen.addChild(healthText);
        charScreen.addChild(defenseText);
        charScreen.addChild(speedText);
        charScreen.addChild(manaText);

        charScreen.addChild(passiveAbilityText);

        charScreen.addChild(damageBar);
        charScreen.addChild(healthBar);
        charScreen.addChild(manaBar);
        charScreen.addChild(defenseBar);
        charScreen.addChild(speedBar);

        this.updateStatsUI();
    }

    drawAbilityScene = () => {
        // Draw Start Screen
        let redRect = new PIXI.Graphics();
        redRect.beginFill(0xF2F2F2);
        redRect.drawRect(0,0,app.view.width, app.view.height);
        abilitiesScreen.addChild(redRect);

        let playBtn = new PIXI.Text('LETS PLAY',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:20 ,fontSize: 30, fill : 0x000000, align : 'center'});

        abilitiesUIObj.loadAbilityIcons(abilityIconSetOne);  // Separate class for ability UI placement because this shit is fucked

        playBtn.anchor.set(0.5);
        playBtn.x = app.view.width/2;
        playBtn.y = app.view.height*(14/15);

        playBtn.buttonMode = true;
        playBtn.interactive = true;
        playBtn
        .on('pointerdown', this.onAbilityConfirmBtnDown)
        .on('pointerup', this.onButtonUp)
        .on('pointerupoutside', this.onButtonUp)
        .on('pointerover', this.onButtonOver)
        .on('pointerout', this.onButtonOut);

        abilitiesScreen.addChild(playBtn);
    }

    // Draw game scene
    drawGameScene = () => {

        // Damage UI
        let gameDamageText = new PIXI.Text('DESTRUCTION',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 10, fill : 0x000000, align : 'center'});

        gameDamageText.anchor.set(1);
        gameDamageText.x = app.view.width*(2/15);
        gameDamageText.y = app.view.height*(35/40);

        gameDamageBar = new PIXI.Graphics();
        gameDamageBar.beginFill(COLOUR_BLUE);
        gameDamageBar.drawRect(0,-STATS_BAR_HEIGHT,250,STATS_BAR_HEIGHT); // Third Value, charSelection => stats

        gameDamageBar.x = app.view.width*(2/15);
        gameDamageBar.y = app.view.height*(35/40);

        // Health UI
        let gameHealthText = new PIXI.Text('HEART',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 10, fill : 0x000000, align : 'center'});

        gameHealthText.anchor.set(1);
        gameHealthText.x = app.view.width*(2/15);
        gameHealthText.y = app.view.height*(36/40);

        gameHealthBar = new PIXI.Graphics();
        gameHealthBar.beginFill(COLOUR_BLUE);
        gameHealthBar.drawRect(0,-STATS_BAR_HEIGHT,250,STATS_BAR_HEIGHT);

        gameHealthBar.x = app.view.width*(2/15);
        gameHealthBar.y = app.view.height*(36/40);

        // Mana UI
        let gameManaText = new PIXI.Text('SOUL',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 10, fill : 0x000000, align : 'center'});

        gameManaText.anchor.set(1);
        gameManaText.x = app.view.width*(2/15);
        gameManaText.y = app.view.height*(37/40);

        gameManaBar = new PIXI.Graphics();
        gameManaBar.beginFill(COLOUR_BLUE);
        gameManaBar.drawRect(0,-STATS_BAR_HEIGHT,250,STATS_BAR_HEIGHT);

        gameManaBar.x = app.view.width*(2/15);
        gameManaBar.y = app.view.height*(37/40);

        // Defense UI
        let gameDefenseText = new PIXI.Text('GUARD',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 10, fill : 0x000000, align : 'center'});

        gameDefenseText.anchor.set(1);
        gameDefenseText.x = app.view.width*(2/15);
        gameDefenseText.y = app.view.height*(38/40);

        gameDefenseBar = new PIXI.Graphics();
        gameDefenseBar.beginFill(COLOUR_BLUE);
        gameDefenseBar.drawRect(0,-STATS_BAR_HEIGHT,250,STATS_BAR_HEIGHT);

        gameDefenseBar.x = app.view.width*(2/15);
        gameDefenseBar.y = app.view.height*(38/40);

        // Speed UI
        let gameSpeedText = new PIXI.Text('SWIFTNESS',
        {fontFamily : 'pixel', dropShadow:true, dropShadowAlpha:1, dropShadowColor:COLOUR_BLUE, dropShadowDistance:5, dropShadowBlur:3, letterSpacing:2 ,fontSize: 10, fill : 0x000000, align : 'center'});

        gameSpeedText.anchor.set(1);
        gameSpeedText.x = app.view.width*(2/15);
        gameSpeedText.y = app.view.height*(39/40);

        gameSpeedBar = new PIXI.Graphics();
        gameSpeedBar.beginFill(COLOUR_BLUE);
        gameSpeedBar.drawRect(0,-STATS_BAR_HEIGHT,250,STATS_BAR_HEIGHT);

        gameSpeedBar.x = app.view.width*(2/15);
        gameSpeedBar.y = app.view.height*(39/40);

        gameScreen.addChild(gameDamageText);
        gameScreen.addChild(gameDamageBar);
        gameScreen.addChild(gameHealthText);
        gameScreen.addChild(gameHealthBar);
        gameScreen.addChild(gameManaText);
        gameScreen.addChild(gameManaBar);
        gameScreen.addChild(gameDefenseText);
        gameScreen.addChild(gameDefenseBar);
        gameScreen.addChild(gameSpeedText);
        gameScreen.addChild(gameSpeedBar);

    }

    onPlayButtonDown = () => {
        this.switchScene(CHAR_SCREEN);
    }
    
    onCharConfirmBtnDown = () => {
        this.switchScene(ABILITY_SCREEN);
    }

    onAbilityConfirmBtnDown = () => {
        
    // This must be changed to be initialized when the player picks their choices at the end of screen selection.
    let characterData = charDataBank.getCharInfo(charSelection, spriteSheetSelection);

    playerObj = new Player(characterData[DMG_STAT], characterData[HP_STAT], characterData[MANA_STAT], characterData[DEF_STAT], characterData[SPEED_STAT]);

    if (spriteSheetSelection == 1)
    {
        staticSelection = staticPlayerObj.initializePlayerSheet("spriteSheetCharacters1", "spriteSheetCharacters1Emotes");
    }
    else
    {
        staticSelection = staticPlayerObj.initializePlayerSheet("spriteSheetCharacters2", "spriteSheetCharacters2Emotes");
    }

    playerObj.initializePlayer();

    // Initialize player once everything loads
    statusObj_0 = new Status('normal',"status_block_0", status_block_0[WIDTH], status_block_0[HEIGHT], status_block_0[NUM_OF_FRAMES],2, 0.5, 0.5);
    status_0 = statusObj_0.initializeStatusSheet();

    // Initialize player once everything loads
    statusObj_1 = new Status('normal',"status_heal_0", status_heal_0[WIDTH], status_heal_0[HEIGHT], status_heal_0[NUM_OF_FRAMES],1, 0.5, 0.83);
    status_1 = statusObj_1.initializeStatusSheet();
    
    // Initialize player once everything loads
    statusObj_2 = new Status('normal',"status_nuclear_0", status_nuclear_0[WIDTH], status_nuclear_0[HEIGHT], status_nuclear_0[NUM_OF_FRAMES],2, 0.5, 0.5);
    status_2 = statusObj_2.initializeStatusSheet();
    
    // Initialize player once everything loads
/*     statusObj_3 = new Projectile('normal',"projectile_electric_0", projectile_electric_0[WIDTH], projectile_electric_0[HEIGHT], projectile_electric_0[NUM_OF_FRAMES],2, 0.5, 0.5);
    status_3 = statusObj_3.initializeProjectileSheet(); */

    //initializeEnemy();  
    
    app.stage.interactive = true;

    app.ticker.add(gameLoop);

        this.switchScene(GAME_SCREEN);
    }

    onCharCycleLeft = () => {
        if (charSelection>MIN_CHAR_NUMBER)
        {
            charSelection--;
            this.updateCharCycleUI(charSelection);
            this.updateStatsUI();
        }
    }

    onCharCycleRight = () => {
        if (charSelection<MAX_CHAR_NUMBER)
        {
            charSelection++;
            this.updateCharCycleUI(charSelection);
            this.updateStatsUI();
        }
    }

    updateStatsUI = () => {
        charScreen.removeChild(staticSelection);

        charScreen.removeChild(damageBar);
        charScreen.removeChild(healthBar);
        charScreen.removeChild(manaBar);
        charScreen.removeChild(defenseBar);
        charScreen.removeChild(speedBar);

        if (spriteSheetSelection == 1)
        {
            staticSelection = staticPlayerObj.initializeStaticPlayer(charSelection, "spriteSheetCharacters1");
        }
        else
        {
            staticSelection = staticPlayerObj.initializeStaticPlayer(charSelection, "spriteSheetCharacters2");
        }

        // Make something that takes charSelection and spriteSheet number and returns 5 numbers
        // Base stats are out of 10, multiply by 25 to fit data chart

        let characterDataBank = charDataBank.getCharInfo(charSelection, spriteSheetSelection);
        let abilityDataBank = charDataBank.getAbilityInfo(charSelection, spriteSheetSelection);
        
        passiveAbilityText.text = abilityDataBank[0] + " - " + abilityDataBank[1];
        charNameText.text = characterDataBank[CHAR_NAME];
        damageBar.width = characterDataBank[DMG_STAT] * PIXEL_BAR_ADJUST;
        healthBar.width = characterDataBank[HP_STAT] * PIXEL_BAR_ADJUST;
        manaBar.width = characterDataBank[MANA_STAT] * PIXEL_BAR_ADJUST;
        defenseBar.width = characterDataBank[DEF_STAT] * PIXEL_BAR_ADJUST;
        speedBar.width = characterDataBank[SPEED_STAT] * PIXEL_BAR_ADJUST;

        charScreen.addChild(staticSelection);
        
        charScreen.addChild(damageBar);
        charScreen.addChild(healthBar);
        charScreen.addChild(manaBar);
        charScreen.addChild(defenseBar);
        charScreen.addChild(speedBar);

    }

    selectSpriteCollection1 = () => {
        // Swap SpriteSheet for first collection
        spriteSheetSelection=1;

        charSelection=0;

        charScreen.removeChild(staticSelection);

        staticSelection = staticPlayerObj.initializeStaticPlayer(charSelection, "spriteSheetCharacters1");
        this.updateStatsUI();
        this.updateCharCycleUI(charSelection);
        this.updateRegionUI(spriteSheetSelection);

        charScreen.addChild(staticSelection);
    }

    selectSpriteCollection2 = () => {
        // Swap SpriteSheet for second collection
        spriteSheetSelection=2;

        charSelection=0;

        charScreen.removeChild(staticSelection);

        staticSelection = staticPlayerObj.initializeStaticPlayer(charSelection, "spriteSheetCharacters2");

        this.updateStatsUI();
        this.updateCharCycleUI(charSelection);
        this.updateRegionUI(spriteSheetSelection);

        charScreen.addChild(staticSelection);
    }

    updateRegionUI = (regionSelection) => {
        charScreen.removeChild(selectSetOneBtn);
        charScreen.removeChild(selectSetTwoBtn);

        if (regionSelection == 1)
        {
            selectSetOneBtn.style.dropShadowColor = COLOUR_ORANGE;
            selectSetTwoBtn.style.dropShadowColor = COLOUR_BLUE;
        }
        else
        {
            selectSetOneBtn.style.dropShadowColor = COLOUR_BLUE;
            selectSetTwoBtn.style.dropShadowColor = COLOUR_ORANGE;
        }

        charScreen.addChild(selectSetOneBtn);
        charScreen.addChild(selectSetTwoBtn);
    }

    updateCharCycleUI = (charSelection) => {
        charScreen.removeChild(cycleLeftBtn);
        charScreen.removeChild(cycleRightBtn);

        if (charSelection == MIN_CHAR_NUMBER)
        {
            cycleLeftBtn.style.dropShadowColor = COLOUR_BLUE;
            cycleRightBtn.style.dropShadowColor = COLOUR_ORANGE;
        }
        else if (charSelection == MAX_CHAR_NUMBER)
        {
            cycleLeftBtn.style.dropShadowColor = COLOUR_ORANGE;
            cycleRightBtn.style.dropShadowColor = COLOUR_BLUE;
        }
        else
        {
            cycleLeftBtn.style.dropShadowColor = COLOUR_ORANGE;
            cycleRightBtn.style.dropShadowColor = COLOUR_ORANGE;  
        }

        charScreen.addChild(cycleLeftBtn);
        charScreen.addChild(cycleRightBtn);
    }

    onButtonUp = () => {

    }
    
    onButtonOver = () => {

    }
    
    onButtonOut = () => {

    }

    drawScenes = () => {

        this.drawMainScene();
        this.drawCharScene();
        this.drawAbilityScene();
        this.drawGameScene();

    }

}