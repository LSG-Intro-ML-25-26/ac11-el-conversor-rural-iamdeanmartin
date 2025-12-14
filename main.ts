namespace SpriteKind {
    export const decoration = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const comerciante = SpriteKind.create()
    export const portal = SpriteKind.create()
}

controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-right
            `, 500, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(nena, assets.animation`
            nena-animation-left
            `, 500, false)
})
// Sprite del personaje jugador, posicionamiento y movimiento.
let nena : Sprite = null
let chest2 : Sprite = null
let comerciante2 : Sprite = null
let portal2 : Sprite = null
tiles.setCurrentTilemap(tilemap`
    nivel_juego
    `)
nena = sprites.create(assets.image`
    nena-front
    `, SpriteKind.Player)
tiles.placeOnTile(nena, tiles.getTileLocation(2, 4))
controller.moveSprite(nena, 100, 0)
//  Sprite del cofre y posicionamiento.
chest2 = sprites.create(assets.image`
    cofre
    `, SpriteKind.chest)
tiles.placeOnTile(chest2, tiles.getTileLocation(0, 4))
//  Sprite del comerciante y posicionamiento.
comerciante2 = sprites.create(assets.image`
        comerciante
        `, SpriteKind.comerciante)
tiles.placeOnTile(comerciante2, tiles.getTileLocation(4, 4))
//  Sprite del portal y posicionamiento.
portal2 = sprites.create(assets.image`
    portal
    `, SpriteKind.portal)
tiles.placeOnTile(portal2, tiles.getTileLocation(7, 4))
// Valores de intercambio de objetos.
let diccionario_intercambio = {
    "gallina" : 6.0,
    "patata" : 2.0 / 1.5,
    "cabra" : 5.0,
    "huevo" : 3.0 / 12.0,
    "caballo" : 12.0,
}

// inventario inicial del jugador.
let inventario_inicial_nena = {
    "madera" : 25.0,
    "gallina" : 2,
    "patata" : 5.5,
    "cabra" : 0,
    "huevo" : 3,
    "caballo" : 0,
}

