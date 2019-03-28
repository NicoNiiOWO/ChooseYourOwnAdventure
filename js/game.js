// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Get wood",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "megalovania.mp3",
            message: "You found a skeleton",
            choices: [
                {
                    text: "Fight",
                    nextLevel: "deaded",
                },
                {
                    text: "Leave",
                    nextLevel: "field"
                }
            ]
        },
        
        deaded: {
            message: "You died",
            choices: [
                {
                    text: "Respawn",
                    nextLevel: "start"
                }
            ]
        },

        field: {
            message: "You got wood and made stone tools",
            choices: [
                {
                    text: "Mine",
                    nextLevel: "cave2",
                }
            ]
        },
        
        cave2: {
            message: "You found iron",
            choices: [
                {
                    text: "Keep mining",
                    nextLevel: "diamonds1",
                },
                {
                    text: "Upgrade your pickaxe",
                    nextLevel: "pickaxe"
                }
            ]
        },
        
        diamonds1: {
            message: "You found diamonds",
            choices: [
                {
                    text: "Mine them",
                    nextLevel: "f",
                },
                {
                    text: "Come back later",
                    nextLevel: "cave3"
                }
            ]
        },
        
        f: {
            message: "You tried mining but your pickaxe wasn't good enough. You lost the diamonds",
            choices: [
                {
                    text: "Restart",
                    nextLevel: "start",
                }
            ]
        },
        
        pickaxe: {
            message: "You made an iron pickaxe",
            choices: [
                {
                    text: "Keep mining",
                    nextLevel: "diamonds2",
                }
            ]
        },
        
        diamonds2: {
            message: "You found diamonds",
            choices: [
                {
                    text: "Mine them",
                    nextLevel: "diamonds",
                },
                {
                    text: "Come back later",
                    nextLevel: "cave3"
                }
            ]
        },
        
        diamonds: {
            message: "You got diamonds",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        },
        
        cave3: {
            message: "You got lost in the cave and fell in lava",
            choices: [
                {
                    text: "Respawn",
                    nextLevel: "start",
                }
            ]
        },
    }
};