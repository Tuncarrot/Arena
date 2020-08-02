initializeEnemy = () => {
    // Player object 
    enemy = PIXI.Sprite.from(app.loader.resources.enemy.texture);
    enemy.anchor.set(0.5); // Reset Anchor point
    enemy.x = app.view.width/4;
    enemy.y = app.view.height/4;  
    app.stage.addChild(enemy); 
}