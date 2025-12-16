@namespace
class SpriteKind:
    decoration = SpriteKind.create()
    chest = SpriteKind.create()
    comerciante = SpriteKind.create()
    portal = SpriteKind.create()
    material = SpriteKind.create()

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
scene.set_background_image(assets.image("""
    background
    """))
tiles.set_current_tilemap(tilemap("""
    nivel7
    """))
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
controller.move_sprite(nena, 100, 0)
nena.set_stay_in_screen(True)
tiles.place_on_tile(nena, tiles.get_tile_location(4, 5))
trader = sprites.create(assets.image("""
        comerciante
        """),
    SpriteKind.comerciante)
tiles.place_on_tile(trader, tiles.get_tile_location(1, 5))
arbol = sprites.create(assets.image("""
    árbol
    """), SpriteKind.material)
tiles.place_on_tile(arbol, tiles.get_tile_location(7, 4))