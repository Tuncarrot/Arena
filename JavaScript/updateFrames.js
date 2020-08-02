updateProjectiles = (delta) => {

    for (let i=0;i<bullets.length;i++)
    {
        if (bulletsDir[i] == W_KEY)   // W Key
        {
            bullets[i].position.y -= bullets[i].speed;
        }
        if (bulletsDir[i] == A_KEY)  // A Key
        {
            bullets[i].position.x -= bullets[i].speed;
        }   
        if (bulletsDir[i] == S_KEY)  // S Key
        {
            bullets[i].position.y += bullets[i].speed;
        }   
        if (bulletsDir[i] == D_KEY)  // D Key
        {
            bullets[i].position.x += bullets[i].speed;
        }

        if (bullets[i].position.y < 0 || bullets[i].position.y>SCREEN_HEIGHT || bullets[i].position.x < 0 || bullets[i].position.x>SCREEN_WIDTH)
        {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i,1);
            bulletsDir.splice(i, 1);
        }
    }
}

updateStatus = (delta) => {
  status_0.x = player.x;
  status_0.y = player.y;  

  status_1.x = player.x;
  status_1.y = player.y;  

  status_2.x = player.x;
  status_2.y = player.y;  
}