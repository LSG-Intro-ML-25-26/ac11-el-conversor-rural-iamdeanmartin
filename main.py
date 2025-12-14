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
tiles.set_current_tilemap(tilemap("""
    nivel_juego
    """))
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
tiles.place_on_tile(nena, tiles.get_tile_location(2, 4))
nene = sprites.create(assets.image("""
        miImagen4
        """),
    SpriteKind.decoration)
tiles.place_on_tile(nene, tiles.get_tile_location(4, 4))
controller.move_sprite(nena, 100, 0)