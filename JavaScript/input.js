keysDown = (e) => {
    keys[e.keyCode] = true;
}

keysUp = (e) => {
    keys[e.keyCode] = false;
}