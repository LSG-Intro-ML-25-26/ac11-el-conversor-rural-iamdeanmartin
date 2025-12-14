namespace SpriteKind {
    export const decoration = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const comerciante = SpriteKind.create()
    export const portal = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-right`,
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-left`,
    500,
    false
    )
})
let cerca_comerciante2 = false
let nena: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel_juego`)
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
tiles.placeOnTile(nena, tiles.getTileLocation(2, 4))
controller.moveSprite(nena, 100, 0)
// Sprite del comerciante y posicionamiento.
let comerciante2 = sprites.create(assets.image`comerciante`, SpriteKind.comerciante)
tiles.placeOnTile(comerciante2, tiles.getTileLocation(4, 4))
game.onUpdate(function () {
    cerca_comerciante2 = nena.overlapsWith(comerciante2)
})
