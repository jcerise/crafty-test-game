//The Grid component allows an element to be located on a grid of tiles
Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.width,
            h: Game.map_grid.height
        })
    },
    at: function(x, y) {
        if (x === undefined && y ===undefined) {
            return {
                x: this.x / Game.map_grid.tile.width,
                y: this.y / Game.map_grid.tile.height
            }
        } else {
            this.attr({
                x: x * Game.map_grid.tile.width,
                y: y * Game.map_grid.tile.height
            });
            return this;
        }
    }
});

//An Actor is an entity that is drawn in 2D on a canvas via our grid coordinate system
Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    }
});

//A Tree is simply an actor with a dark green color
Crafty.c('Tree', {
    init: function() {
        this.requires('Actor, Color')
            .color('rgb(20, 125, 40)');
    }
});

//A bush is simply an actor with a light green color
Crafty.c('Bush', {
    init: function() {
        this.requires('Actor, Color')
            .color('rgb(20, 185, 40)');
    }
});