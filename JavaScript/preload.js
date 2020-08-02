preloadAssets = () => {
    // Preload assets
    app.loader.baseUrl = "Images";
    app.loader.add("status_block_0","Shield0.png")
    .add("status_heal_0","Heal0Fore.png")
    .add("fire0","Fire0.png")
    .add("status_nuclear_0","NuclearA0.png")
    .add("spriteSheetCharacters1","chara2.png")
    .add("spriteSheetCharacters1Emotes","emote2.png")
    .add("spriteSheetCharacters2","chara4.png")
    .add("spriteSheetCharacters2Emotes","emote4.png")
    .add("perkCircle1","perkCircle1.png")
    .add("status_block_1_icon","./SpellBook/SpellBook06_38.png")
    .add("status_heal_1_icon","./SpellBook/SpellBook06_70.png")
    .add("status_beast_1_icon", "./SpellBook/Spellbook06_01.png")
    .add("projectile_laser_1_icon", "./SpellBook/Spellbook06_02.png")
    .add("projectile_root_1_icon", "./SpellBook/Spellbook06_03.png")
    .add("projectile_multishot_1_icon", "./SpellBook/Spellbook06_04.png")
    .add("status_invincible_1_icon", "./SpellBook/SpellBook06_07.png")
    .add("status_damage_1_icon", "./SpellBook/SpellBook06_50.png")

    .add("projectile_electric_1", "Electric.png")
    .add("");

    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(doneLoading);
    app.loader.onError.add(reportError);
    app.loader.load();
}

showProgress = (e) => console.log(e.progress);
reportError = (e) => console.error("ERROR: " + e.message);

doneLoading = (e) => 
{
    console.log("Done loading");

    charDataBank = new AssetsInfo();

    abilitiesUIObj = new AbilitiesUI();    

    sceneObj = new Scene();
    sceneObj.initializeScenes();
    sceneObj.drawScenes();
    sceneObj.switchScene(MAIN_SCREEN);
   
    app.stage.interactive = true;
}

