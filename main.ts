let Emil = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . 
    . . . f 5 5 5 5 5 5 f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . . f 5 4 4 4 5 5 4 4 f . . 
    . . f 4 b f 4 4 f b 4 f . . 
    . . f 4 1 f d d f 1 4 f . . 
    . f b f d d d d d d f b f . 
    . f e f 6 4 4 4 4 6 f e f . 
    . e 4 f b 6 6 6 6 b f 4 e . 
    . 4 d e 6 6 6 6 6 6 e d 4 . 
    . 4 f e c c f f c c e f 4 . 
    . . f f c c f f c c f f . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Emil)
scene.setBackgroundColor(1)
let Oliver = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f e f e e f e f f . 
    f f f f e e e e f f f f 
    f f f e e e e e e f f f 
    f f f e e e e e e f f f 
    f e e 4 4 e e 4 4 e e f 
    f 4 4 b f 4 4 f b 4 4 f 
    f e d 1 f d d f 1 d e f 
    . f e d d d d d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f d b b b b d f 4 e 
    4 d f b b b b b b f d 4 
    4 4 f c c c c c c f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        Emil.setImage(img`
            . . . . . f f f f f . . . . 
            . . . . f 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 4 4 4 5 5 f . 
            . . . f 5 4 4 4 4 4 4 5 f . 
            . . . f 5 4 4 b f 4 4 f . . 
            . . . f 6 6 e 1 f d d f . . 
            . . f b b f 4 d d d d f . . 
            . . f 4 4 e e e 4 4 4 f . . 
            . . . f 4 d d e 6 6 6 f . . 
            . . . f e d d e 6 6 6 f . . 
            . . . f b e e c c c c f . . 
            . . . f f b c c c c f . . . 
            . . . . . f f c c f . . . . 
            `)
    }
    if (controller.down.isPressed()) {
        Emil.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 5 5 4 4 f . . 
            . . f 4 b f 4 4 f b 4 f . . 
            . . f 4 1 f d d f 1 4 f . . 
            . f b f d d d d d d f b f . 
            . f e f 6 4 4 4 4 6 f e f . 
            . e 4 f b 6 6 6 6 b f 4 e . 
            . 4 d e 6 6 6 6 6 6 e d 4 . 
            . 4 f e c c f f c c e f 4 . 
            . . f f c c f f c c f f . . 
            . . . . f f . . f f . . . . 
            `)
    }
    if (controller.left.isPressed()) {
        Emil.setImage(img`
            . . . . f f f f f . . . . . 
            . . . f 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 4 4 5 5 5 5 f . . 
            . f 5 4 4 4 4 4 4 5 f . . . 
            . . f 4 4 f b 4 4 5 f . . . 
            . . f d d f 1 e 6 6 f . . . 
            . . f d d d d 4 f b b f . . 
            . . f 4 4 4 e e e 4 4 f . . 
            . . f 6 6 6 e d d 4 f . . . 
            . . f 6 6 6 e d d e f . . . 
            . . f c c c c e e b f . . . 
            . . . f c c c c b f f . . . 
            . . . . f c c f f . . . . . 
            `)
    }
    if (controller.up.isPressed()) {
        Emil.setImage(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f d 5 5 5 5 5 5 d f . . 
            . f d 5 5 5 5 5 5 5 5 d f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f b 5 5 5 5 5 5 5 5 b f . 
            . . f b d 5 5 5 5 d b f . . 
            . . f b b b b b b b b f . . 
            . f 6 f e b b b b e f 6 f . 
            . 6 b 6 4 e e e e 4 6 b 6 . 
            . 4 d b 6 6 6 6 6 6 b d 4 . 
            . 4 f b c c f f c c b f 4 . 
            . . f f c c f f c c f f . . 
            . . . . f f . . f f . . . . 
            `)
    }
})
