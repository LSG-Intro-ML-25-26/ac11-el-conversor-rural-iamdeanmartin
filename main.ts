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
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (cerca_comerciante2) {
        
    }
    
})
let cerca_comerciante2 = false
let nena : Sprite = null
tiles.setCurrentTilemap(tilemap`
    nivel_juego
    `)
nena = sprites.create(assets.image`
    nena-front
    `, SpriteKind.Player)
tiles.placeOnTile(nena, tiles.getTileLocation(2, 4))
controller.moveSprite(nena, 100, 0)
//  Sprite del comerciante y posicionamiento.
let comerciante2 = sprites.create(assets.image`
        comerciante
        `, SpriteKind.comerciante)
tiles.placeOnTile(comerciante2, tiles.getTileLocation(4, 4))
game.onUpdate(function on_on_update() {
    
    cerca_comerciante2 = nena.overlapsWith(comerciante2)
})
// Variable para activar el modo de la partida
let modo = "juego"
// Función para empezar a tradear
function comerciar() {
    
    modo = "trade"
    controller.moveSprite(nena, 0, 0)
}

// Función para volver al jeugo y salir del tradeo
function volver_juego() {
    
    modo = "juego"
    controller.moveSprite(nena, 100, 0)
}

