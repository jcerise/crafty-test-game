Game = {

    //Define the size of our grid, and the size of each tile in the grid
    map_grid: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height: 16
        }
    },

    //The total width of the game screen. The grid takes up the entire screen, so we can calculate this as
    //the width of a single tile, times the width of the grid
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    //The total height of the game screen. This works similarly to the width, with the height of a tile
    //multiplied by the grid height serving as the total height
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },



    //Initialize and start our game
    start: function() {
        //Start Crafty and set a background color, so we know it is working
        Crafty.init(480, 320);
        Crafty.background('rgb(249, 233, 125');

        //Place a tree at every edge tile of our grid of 16x16 tiles
        for (var x = 0; x < Game.map_grid.width; x++) {
            for (var y = 0; y < Game.map_grid.height; y ++) {
                var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

                if (at_edge) {
                    //Place a tree entity at the current tile, as the current tile is on the edge of the grid
                    Crafty.e('Tree').at(x, y);
                } else if (Math.random() < 0.06) {
                    //Place a bush at the current tile
                    Crafty.e('Bush').at(x, y);
                }
            }
        }
    }
}