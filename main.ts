namespace SpriteKind {
    export const decoration = SpriteKind.create()
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
let nena: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel_juego`)
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
tiles.placeOnTile(nena, tiles.getTileLocation(2, 4))
let nene = sprites.create(assets.image`miImagen4`, SpriteKind.decoration)
tiles.placeOnTile(nene, tiles.getTileLocation(4, 4))
controller.moveSprite(nena, 100, 0)
