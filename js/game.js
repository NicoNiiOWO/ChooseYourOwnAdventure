// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Calm 1.mp3",
    background_image: "start.png",
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
                    nextLevel: "tools",
                },
            ]
        },

        cave: {
            background_image: "skeleton.png",
            music: "Megalovania.mp3",
            message: "You found a skeleton",
            choices: [
                {
                    text: "Fight",
                    nextLevel: "deaded",
                },
                {
                    text: "Leave and get wood",
                    nextLevel: "tools"
                }
            ]
        },
        
        deaded: {
            background_image: "deaded.png",
            music: "oof.mp3",
            message: "You died",
            choices: [
                {
                    text: "Respawn",
                    nextLevel: "start"
                }
            ]
        },

        tools: {
            background_image: "tools.png",
            music: "Calm 1.mp3",
            message: "You got some wood and made stone tools",
            choices: [
                {
                    text: "Mine",
                    nextLevel: "cave2",
                }
            ]
        },
        
        cave2: {
            background_image: "iron.png",
            music: "Calm 1.mp3",
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
            background_image: "diamonds1.png",
            music: "Hal 1.mp3",
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
            background_image: "f.png",
            music: "Hal 1.mp3",
            message: "You tried mining but your pickaxe wasn't good enough. You lost the diamonds",
            choices: [
                {
                    text: "Restart",
                    nextLevel: "start",
                }
            ]
        },
        
        pickaxe: {
            background_image: "pickaxe.png",
            music: "Calm 3.mp3",
            message: "You made an iron pickaxe",
            choices: [
                {
                    text: "Keep mining",
                    nextLevel: "diamonds2",
                }
            ]
        },
        
        diamonds2: {
            background_image: "diamonds2.png",
            music: "Hal 1.mp3",
            message: "You found diamonds",
            choices: [
                {
                    text: "Mine them",
                    nextLevel: "diamonds",
                },
                {
                    text: "Come back later",
                    nextLevel: "lava"
                }
            ]
        },
        
        diamonds: {
            background_image: "diamonds.png",
            music: "Hal 1.mp3",
            message: "You got diamonds",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        },
        
        lava: {
            background_image: "lava.png",
            music: "oof.mp3",
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