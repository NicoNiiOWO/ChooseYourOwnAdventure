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
                    text: "",
                    nextLevel: "",
                },
                {
                    text: "Leave",
                    nextLevel: "field"
                }
            ]
        },

        field: {
            message: "You made wooden tools",
            choices: [
                {
                    text: "Mine",
                    nextLevel: "",
                },
                {
                    text: "",
                    nextLevel: ""
                }
            ]
        },

    }
};
