namespace SpriteKind {
    export const decoration = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const comerciante = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const material = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
let nena: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`nivel7`)
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
controller.moveSprite(nena, 100, 100)
nena.setStayInScreen(true)
tiles.placeOnTile(nena, tiles.getTileLocation(4, 5))
let trader = sprites.create(assets.image`comerciante`, SpriteKind.comerciante)
tiles.placeOnTile(trader, tiles.getTileLocation(1, 5))
let arbol = sprites.create(assets.image`árbol`, SpriteKind.material)
tiles.placeOnTile(arbol, tiles.getTileLocation(6, 5))
let arbol2 = sprites.create(assets.image`árbol`, SpriteKind.material)
tiles.placeOnTile(arbol2, tiles.getTileLocation(8, 6))
