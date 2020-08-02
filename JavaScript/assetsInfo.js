// Info for character w/ stats
let char_0 = [""];

// Info for abilites w/ sprites
// SpriteName = [ Name, Width, Height, Number of Frames, posOnChar ]
let status_block_0 = ["status_block_0", 16, 16, 10];
let status_heal_0 = ["status_heal_0", 16, 80, 11];
let status_nuclear_0 = ["status_nuclear_0", 48, 48, 6];
let projectile_electric_0 = ["projectile_electric_0", 16,16,6];

// Maybe add special ability here as well - save name to reference in another data bank
// Stats are out of 10

let abilityData = {
 // Abilities are assigned by ID, so they can be re arranged in the future and not bound too closely to individual characters
 // ID: Ability Name, Ability Description, Modifiers?
    0: ["FORESIGHT" , "XP IS GAINED 25% FASTER"],
    1: ["TBD", "IDK"],
    2: ["TBD", "IDK"],
    3: ["TBD", "IDK"],
    4: ["TBD", "IDK"],
    5: ["TBD", "IDK"],
    6: ["TBD", "IDK"],
    7: ["TBD", "IDK"],
    8: ["TBD", "IDK"],
    9: ["TBD", "IDK"],
    10: ["TBD", "IDK"],
    11: ["TBD", "IDK"],
    12: ["TBD", "IDK"],
    13: ["TBD", "IDK"],
    14: ["TBD", "IDK"],
    15: ["TBD", "IDK"],
}

let charData = {
 // Argonian Region
 // #: CHARACTER NAME, DMG, HP, MANA,DEF,SPD, ABILITY ID
    0: ["KEN",          6,  5,   3,   5,  4,  0],
    1: ["RAYMOND",      9,  4,   4,   6,  2,  1],
    2: ["LEON",         4,  5,   5,   4,  4,  2],
    3: ["RONAN",        6,  7,   1,   4,  2,  3],
    4: ["CLEO",         4,  5,   5,   6,  3,  4],
    5: ["OTTO",         6,  3,   4,   6,  3,  5],
    6: ["PALLANDO",     2,  3,   5,   9,  2,  6],
    7: ["MORGON",       3,  3,   6,   5,  5,  7],

 // Zentrofia Region
 // #: CHARACTER NAME, DMG, HP, MANA,DEF,SPD, ABILITY ID
    8: ["RON",          4,  3,   7,   6,  4,  8],
    9: ["RANDALL",      2,  3,   10,  2,  5,  9],
    10:["BELGARTH",     3,  7,   7,   4,  3, 10],
    11:["DRACO",        5,  4,   7,   3,  3, 11],
    12:["ELIAS",        3,  3,   6,   1,  8, 12],
    13:["NADIA",        2,  9,   6,   1,  2, 13],
    14:["CALUM",        2,  3,   5,   10, 1, 14],
    15:["HECTOR",       3,  2,   6,   6,  3, 15],
}

class AssetsInfo {

    constructor()
    {
        let perkCircleBaseTexture = new PIXI.BaseTexture.from(app.loader.resources["perkCircle1"].url);

        let perkIcon_Block_1 = new PIXI.BaseTexture.from(app.loader.resources["status_block_1_icon"].url);
        let perkIcon_Heal_1 = new PIXI.BaseTexture.from(app.loader.resources["status_heal_1_icon"].url);
        let perkIcon_invincible_1 = new PIXI.BaseTexture.from(app.loader.resources["status_invincible_1_icon"].url);
        let perkIcon_electric_1 = new PIXI.BaseTexture.from(app.loader.resources["status_damage_1_icon"].url);

        let perkIcon_status_beast_1_icon = new PIXI.BaseTexture.from(app.loader.resources["status_beast_1_icon"].url); 
        let perkIcon_projectile_laser_1_icon = new PIXI.BaseTexture.from(app.loader.resources["projectile_laser_1_icon"].url); 
        let perkIcon_projectile_root_1_icon = new PIXI.BaseTexture.from(app.loader.resources["projectile_root_1_icon"].url); 
        let perkIcon_projectile_multishot_1_icon = new PIXI.BaseTexture.from(app.loader.resources["projectile_multishot_1_icon"].url); 


        abilityUI["circle1"] = [];

        abilityUI["circle1"].push(new PIXI.Texture(perkCircleBaseTexture,new PIXI.Rectangle(START_X_POS, START_Y_POS, 500, 500)));
        
        abilityIconSetOne = [
            new PIXI.Texture(perkIcon_Block_1,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),
            new PIXI.Texture(perkIcon_Heal_1,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),
            new PIXI.Texture(perkIcon_invincible_1,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),
            new PIXI.Texture(perkIcon_electric_1,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),

            new PIXI.Texture(perkIcon_status_beast_1_icon,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),
            new PIXI.Texture(perkIcon_projectile_laser_1_icon,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),
            new PIXI.Texture(perkIcon_projectile_root_1_icon,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)),
            new PIXI.Texture(perkIcon_projectile_multishot_1_icon,new PIXI.Rectangle(START_X_POS, START_Y_POS, ICON_X_SIZE, ICON_Y_SIZE)), 
        ];
    }

    getCharInfo = (charSelection, spriteSelection) => {
        // Return Array of [DMG, HP, MANA, DEFENSE, SPEED]
        let returnData;

        if (spriteSelection == 1)
        {
            returnData = charData[charSelection];
        }
        else
        {
            // Currently this is the second spriteSheet
            returnData = charData[charSelection+8];
        }

        return returnData;
    }

    getAbilityInfo = (abilityID) =>
    {
        return abilityData[abilityID];
    }
}