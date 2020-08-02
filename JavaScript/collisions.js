detectCollision = (a,b) => {
    let objectA = a.getBounds();
    let objectB = b.getBounds();

    return objectA.x + objectA.width > objectB.x &&
            objectA.x < objectB.x + objectB.weidth &&
            objectA.y + objectA.height > objectB.y &&
            objectB.y < objectB.y + objectB.height;
}