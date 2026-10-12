scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    Level += 1
    if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 7))
        info.changeCountdownBy(40)
        game.splash("Checkpoint Reached!")
    }
    if (Level == 3) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 7))
        info.changeCountdownBy(40)
        game.splash("Checkpoint Reached!")
    }
    if (Level == 4) {
        info.setScore(info.countdown())
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava1`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 7))
    music.powerDown.play()
    game.splash("Ow!")
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel5, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(52, 8), assets.tile`baseTransparency16`)
    tiles.setTileAt(tiles.getTileLocation(52, 7), assets.tile`baseTransparency16`)
    tiles.setTileAt(tiles.getTileLocation(52, 6), assets.tile`baseTransparency16`)
    tiles.setTileAt(tiles.getTileLocation(52, 5), assets.tile`baseTransparency16`)
    tiles.setTileAt(tiles.getTileLocation(52, 4), assets.tile`forestTiles18`)
    tiles.setTileAt(tiles.getTileLocation(52, 2), assets.tile`baseTransparency16`)
    tiles.setWallAt(tiles.getTileLocation(52, 8), false)
    tiles.setWallAt(tiles.getTileLocation(52, 7), false)
    tiles.setWallAt(tiles.getTileLocation(52, 6), false)
    tiles.setWallAt(tiles.getTileLocation(52, 5), false)
    tiles.setWallAt(tiles.getTileLocation(52, 4), false)
    tiles.setWallAt(tiles.getTileLocation(52, 2), false)
})
let mySprite: Sprite = null
let Level = 0
Level = 1
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 200
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 7))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
game.setDialogFrame(img`
    ...cc..............................cc.....
    ..c55c..bbbb...bbbbb...bbbbb......c55c....
    .cb55bcbdddbbbbbdddbbbbbdddbbbbbbcb55bc...
    b555555bbdddb111bdddb111bdddb11db555555b..
    bb5555bbbbdb11111bdb11111bdb1111bb5555bb..
    cb5555bcddd11111ddd11111ddd11111cb5555bc..
    .c5bb5c1111d111d111d111d111d111ddc5bb5c...
    .cbbbbc11111111111111111111111111cbbbbc...
    ..b1111111111111111111111111111111dddbb...
    ..b11111111111111111111111111111111dbbdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdb1d11111111111111111111111111111111b...
    .bb111d1111111111111111111111111111111b...
    ..b1111111111111111111111111111111d111bb..
    ..b11111111111111111111111111111111d1bdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdb1d11111111111111111111111111111111b...
    .bb111d1111111111111111111111111111111b...
    ..b1111111111111111111111111111111d111bb..
    ..b11111111111111111111111111111111d1bdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdbb111111111111111111111111111111111b...
    .bbbd111111111111111111111111111111111b...
    ..bcc11111111111111111111111111111dccdb...
    ..c55c1111111d111d111d111d111d1111c55cb...
    .cb55bcdd11111ddd11111ddd11111dddcb55bc...
    b555555bd1111bdb11111bdb11111bdbb555555b..
    bb5555bbdd11bdddb111bdddb111bdddbb5555bb..
    cb5555bcbbbbbbdddbbbbbdddbbbbbddcb5555bc..
    .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
    .cbbbbc..........................cbbbbc...
    ..........................................
    ..........................................
    `)
game.showLongText("Just a Platformer by TJV games", DialogLayout.Full)
game.showLongText("Use the joystick to move and the blue button to jump!", DialogLayout.Full)
game.showLongText("The flags are checkpoints but you have a limited amount of time.", DialogLayout.Full)
game.showLongText("Race to the finish line to get a high score!", DialogLayout.Full)
game.showLongText("Good luck!", DialogLayout.Full)
info.startCountdown(50)
game.onUpdate(function () {
	
})
game.onUpdateInterval(200, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && mySprite.vy == 0) {
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            100,
            true
            )
        }
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            100,
            true
            )
        }
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
