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

nena: Sprite = None
# Variable para comerciar
cerca_comerciante2 = False
tiles.set_current_tilemap(tilemap("""
    nivel_juego
    """))
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
tiles.place_on_tile(nena, tiles.get_tile_location(2, 4))
controller.move_sprite(nena, 100, 0)
# Sprite del comerciante y posicionamiento.
comerciante2 = sprites.create(assets.image("""
        comerciante
        """),
    SpriteKind.comerciante)
tiles.place_on_tile(comerciante2, tiles.get_tile_location(4, 4))

def on_update():
    global cerca_comerciante2
    cerca_comerciante2 = nena.overlaps_with(comerciante2)

game.on_update(on_update)
