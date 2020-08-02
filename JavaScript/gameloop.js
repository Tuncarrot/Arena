gameLoop = (delta) => {
    keysDiv.innterHTML = JSON.stringify(keys);

    // Movement
    
    if (keys[W_KEY]) 
    {
        trackDir = W_KEY;
        if (!player.playing)
        {
            player.textures = playerSheet.walkNorth;
            player.play();
        }
        player.y -= playerSpeed;
    }   
    if (keys[A_KEY])  // A Key
    {
        trackDir = A_KEY;
        if (!player.playing)
        {
            player.textures = playerSheet.walkWest;
            player.play();
        }
        player.x -=playerSpeed;
    }   
    if (keys[S_KEY])  // S Key
    {
        trackDir = S_KEY;
        if (!player.playing)
        {
            player.textures = playerSheet.walkSouth;
            player.play();
        }
        player.y +=playerSpeed;
    }   
    if (keys[D_KEY])  // D Key
    {
        trackDir = D_KEY;
        if (!player.playing)
        {
            player.textures = playerSheet.walkEast;
            player.play();
        }
        player.x +=playerSpeed;
    }

    // Emotes

    if (keys[ONE_KEY]) 
    {
        if (!player.playing)
        {
            player.textures = playerSheet.emoteYes;
            player.play();
        }
    } 
    if (keys[TWO_KEY]) 
    {
        if (!player.playing)
        {
            player.textures = playerSheet.emoteNo;
            player.play();
        }
    }
    if (keys[THREE_KEY]) 
    {
        if (!player.playing)
        {
            player.textures = playerSheet.emoteLaugh;
            player.play();
        }
    } 
    if (keys[FOUR_KEY]) 
    {
        if (!player.playing)
        {
            player.textures = playerSheet.emoteSpook;
            player.play();
        }
    }  

    if (keys[U_KEY])   // Ability 1, U Key
    {
        if (!status_0.playing)  // Call this stuff only once at the start
        {
            status_0.visible = true;
            status_0.textures = statusSheet.status_block_0;
            status_0.play();
            status_0.loop = true; // Scale up here as well
            status_0.x = player.x;
            status_0.y = player.y;
            status_0.scale.x = 3;
            status_0.scale.y = 3;
            status_0.onComplete = () => {
                status_0.visible = false;
            };
        }
        else
        {
            status_0.loop = false;
        }
    }
    
     if (keys[I_KEY])
    {
        if (!status_1.playing)
        {
            status_1.visible = true;
            status_1.textures = statusSheet.status_heal_0;
            status_1.play();
            status_1.loop = true; // Scale up here
            status_1.x = player.x;
            status_1.y = player.y;
            status_1.scale.x = 2;                       
            status_1.scale.y = 2;
            status_1.onComplete = () => {
                status_1.visible = false;
            };
        }
        else
        {
            status_1.loop = false;
        }
    }

     if (keys[O_KEY])
    {
        if (!status_2.playing)
        {
            status_2.visible = true;
            status_2.textures = statusSheet.status_nuclear_0;
            status.animationSpeed = 2;
            status_2.play();
            status_2.loop = false; // Scale up here
            status_2.x = player.x;
            status_2.y = player.y;
            status_2.scale.x = 1;
            status_2.scale.y = 1;
            status_2.onComplete = () => {
                status_2.visible = false;
            };
        }
        else
        {
            status_2.loop = false;
        }
    }

    if (keys[P_KEY])
    {
        // Initialize a new projectile on kry press

        // I dont fucking know what Im doing

        // I dont like this, why initialize a new projectile from here? It will cause delays
        // because initialization takes time, should initialize at preload and just replicate

        // Initialize player once everything loads
        statusObj_3 = new Projectile('normal',"projectile_electric_0", projectile_electric_0[WIDTH], projectile_electric_0[HEIGHT], projectile_electric_0[NUM_OF_FRAMES],2, 0.5, 0.5);
        status_3 = statusObj_3.initializeProjectileSheet();

        status_3.speed = 1;
        status_3.visible = true;
        status_3.textures = statusSheet.projectile_electric_0;
        status_3.animationSpeed = 0.3;
        status_3.play();
        status_3.loop = true; // Scale up here
        status_3.scale.x = 1;
        status_3.scale.y = 1;
        status_3.x = player.x;
        status_3.y = player.y;
        bullets.push(status_3);
        bulletsDir.push(trackDir);
        console.log("bulletDir Count => " + bulletsDir.length);
        console.log("bullet Count => " + bullets.length); 
    }

    // Update projectiles
    updateProjectiles(delta);
    updateStatus(delta);
}