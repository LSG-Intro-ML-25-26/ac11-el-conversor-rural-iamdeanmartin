@namespace
class SpriteKind:
    decoration = SpriteKind.create()
    chest = SpriteKind.create()
    comerciante = SpriteKind.create()
    portal = SpriteKind.create()

def on_right_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-right
            """),
        500,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-left
            """),
        500,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

#Sprite del personaje jugador, posicionamiento y movimiento.
nena: Sprite = None
chest2: Sprite = None
comerciante2: Sprite = None
portal2: Sprite = None

tiles.set_current_tilemap(tilemap("""
    nivel_juego
    """))
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
tiles.place_on_tile(nena, tiles.get_tile_location(2, 4))
controller.move_sprite(nena, 100, 0)
# Sprite del cofre y posicionamiento.
chest2 = sprites.create(assets.image("""
    cofre
    """), SpriteKind.chest)
tiles.place_on_tile(chest2, tiles.get_tile_location(0, 4))
# Sprite del comerciante y posicionamiento.
comerciante2 = sprites.create(assets.image("""
        comerciante
        """),
    SpriteKind.comerciante)
tiles.place_on_tile(comerciante2, tiles.get_tile_location(4, 4))
# Sprite del portal y posicionamiento.
portal2 = sprites.create(assets.image("""
    portal
    """), SpriteKind.portal)
tiles.place_on_tile(portal2, tiles.get_tile_location(7, 4))

#Valores de intercambio de objetos.
diccionario_intercambio = {
    "gallina": 6.0,
    "patata": 2.0/1.5,
    "cabra": 5.0,
    "huevo": 3.0/12.0,
    "caballo": 12.0
}

#inventario inicial del jugador.
inventario_inicial_nena = {
    "madera": 25.0,
    "gallina": 2,
    "patata": 5.5,
    "cabra": 0,
    "huevo": 3,
    "caballo": 0
}