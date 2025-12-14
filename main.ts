namespace SpriteKind {
    export const decoration = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const comerciante = SpriteKind.create()
    export const portal = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`nivel_juego`)
let calculadora_intercambio = sprites.create(assets.image`miImagen`, SpriteKind.Player)
