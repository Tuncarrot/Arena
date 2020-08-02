let app;

let playerObj;
let staticPlayerObj;

let statusObj_0;
let statusObj_1;
let statusObj_2;
let statusObj_3;

let sceneObj;
let abilitiesUIObj;

let player;
let staticPlayer;

let charSelection;
let staticSelection;
let spriteSheetSelection;

let status_0;
let status_1;
let status_2;
let status_3;

let keys = {};
let keysDiv;

let bullets = [];
let bulletsDir = [];
let statusPos = [];
let bulletSpeed = 10;

let enemy;
let playerSheet = {};
let staticPlayerSheet = {};

let statusSheet = {};
let statusSheet_0 = {};
let statusSheet_1 = {};
let statusSheet_2 = {};
let statusSheet_3 = {};

let playerSpeed;
let statusSpeed=2;

let startScreen;
let charScreen;
let abilitiesScreen;
let gameScreen;

let trackDir;

let abilityUI = [];
let abilityIconSetOne = [];


// UI Data Components
let charNameText;
let damageBar;
let healthBar;
let manaBar;
let speedBar;
let defenseBar;

let charDataBank;
let passiveAbilityText;

// UI Styling Components
let selectSetOneBtn;
let selectSetTwoBtn;

let cycleLeftBtn;
let cycleRightBtn;

    // These are magic numbers because the constants file is initialized after this. 
    // This is so constants can use the app position
window.onload = function () {
    app = new PIXI.Application(
        {
            width: 1080,
            height: 720,
            backgroundColor:0xAAAAAA
        }
    );

    document.querySelector("#gameDiv").appendChild(app.view);

    preloadAssets();    

    // Keyboard event handlers
    window.addEventListener("keydown",keysDown);
    window.addEventListener("keyup", keysUp);

    keysDiv = document.querySelector("#keys");
}
