@namespace
class SpriteKind:
    decoration = SpriteKind.create()
    chest = SpriteKind.create()
    comerciante = SpriteKind.create()
    portal = SpriteKind.create()
    material = SpriteKind.create()
    inventario = SpriteKind.create()
# MOVIMIENTOS PERSONAJE

def on_down_pressed():
    global direccionNena
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-up
            """),
        500,
        False)
    direccionNena = 0
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_right_pressed():
    global direccionNena
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-right
            """),
        500,
        False)
    direccionNena = 2
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    global direccionNena
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-left
            """),
        500,
        False)
    direccionNena = 1
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

#COSTES Y FUNCIONES DEL TRADEO
costes_tradeo = {
    "gallina": 6,
    "cabra": 5,
    "caballo": 12,
    "huevo": 3.0,
    "patata": 2.0
}

suma_inventario = {
    "gallina": 1,
    "cabra": 1,
    "caballo": 1,
    "huevo": 12,
    "patata": 1.5
}

#FUNCIONES PARA TRADEO DIRECTO
def trade_gallina(lena):
    return (lena - 6)

def trade_cabra(lena):
    return (lena - 5)

def trade_caballo(lena):
    return (lena - 12)

def trade_huevo(lena):
    return (lena - 3)

def trade_patata(lena):
    return (lena - 2)

#FUNCIONES AÑADIR AL INVENTARIO
def anadir_gallina():
    global gallinas
    gallinas += 1

def anadir_cabra():
    global cabras
    cabras += 1

def anadir_caballo():
    global caballos
    caballos += 1

def anadir_huevos():
    global huevos
    huevos += 12

def anadir_patata():
    global patatas
    patatas += 1.5

# LÓGICA BOTON A

def on_a_pressed():
    global inventarioAbierto, menuInventario, golpesArbol, lena, tronco1, esArbol, reapareceArbol1, golpesArbol2, tronco2, esArbol2, reapareceArbol2
    # ANIMACIONES PERS. TALAR
    if direccionNena == 1:
        animation.run_image_animation(nena,
            [img("""
                    ..............ffffff....
                    .............f2feeeeff..
                    ............f222feeeeff.
                    .......cc...feeeeffeeef.
                    .......cdc.fe2222eeffff.
                    .......cddcf2effff222ef.
                    ........cddcffeeefffffff
                    .........cddce44fbe44eff
                    ..........cdceddf14d4eef
                    ..........cccdeddd4eeef.
                    ...........edd4e44eeff..
                    ............ee442222f...
                    .............f2e2222f...
                    .............f554444f...
                    ..............ffffff....
                    ................fff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """),
                img("""
                    ........................
                    ..............fff.......
                    .............f2fffff....
                    ...........ff22eeeeeff..
                    ..........ff222eeeeeeff.
                    ..........feeeefffeeeef.
                    .........fe2222eeefffff.
                    .........f2efffff222efff
                    ..cc.....fffeeefffffffff
                    ..cdcc...fee44fbbe44efef
                    ..ccddcc..feddfbb4d4eef.
                    ....cdddceefddddd4eeef..
                    .....ccdcddee2222222f...
                    ......cccdd44e544444f...
                    .........eeeeffffffff...
                    .............ff...fff...
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """),
                img("""
                    ..............ffffff....
                    .............f2feeeeff..
                    ............f222feeeeff.
                    ............feeeeffeeef.
                    ...........fe2222eeffff.
                    ...........f2effff222ef.
                    ...........fffeeefffffff
                    ...........fee44fbe44eff
                    ............feddf14d4eef
                    .............fdddd4eeef.
                    .............fe444eddf..
                    .............ccc22eddf..
                    .............cdc22fee...
                    ............cddc4444f...
                    ...........cddcfffff....
                    ..........cddc..fff.....
                    ..........cdc...........
                    ..........cc............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """)],
            100,
            False)
    if direccionNena == 0:
        animation.run_image_animation(nena,
            [img("""
                    ........................
                    ......ffff..............
                    ....fff22fff............
                    ...fff2222fff...........
                    ..fffeeeeeefff..........
                    ..ffe222222eef..........
                    ..fe2ffffff2ef..........
                    ..ffffeeeeffff..........
                    .ffefbf44fbfeff.........
                    .fee41fddf14eef.........
                    fdfeeddddd4eff..........
                    fbffee444edd4e..........
                    fbf4f2222edde...........
                    fcf.f22cccee............
                    .ff.f44cdc4f............
                    ....fffddcff............
                    .....fddcff.............
                    ....cddc................
                    ....cdc.................
                    ....cc..................
                    ........................
                    ........................
                    ........................
                    ........................
                    """),
                img("""
                    ........................
                    ........................
                    .......ff...............
                    .....ff22ff.............
                    ...fff2222fff...........
                    ..fff222222fff..........
                    ..fff222222fff..........
                    ..feeeeeeeeeeff.........
                    .ffe22222222eff.........
                    .fffffeeeefffff.........
                    fdfefbf44fbfeff.........
                    fbfe41fddf14ef..........
                    fbffe4dddd4efe..........
                    fcfef22222f4e...........
                    .ff4f44554f4e...........
                    ....ffffffdde...........
                    .....ffffedde...........
                    ..........ee............
                    .........ccc............
                    ........cc1cc...........
                    .........c1c............
                    .........c1c............
                    .........c1c............
                    .........c1c............
                    """),
                img("""
                    ......ffff..............
                    ....fff22fff............
                    ...fff2222fff...........
                    ..fffeeeeeefff..........
                    ..ffe222222eef..........
                    ..fe2ffffff2ef..........
                    ..ffffeeeeffff......ccc.
                    .ffefbf44fbfeff....cddc.
                    .ffefbf44fbfeff...cddc..
                    .fee4dddddd4eef.ccddc...
                    fdfeeddddd4eeffecddc....
                    fbffee4444ee4fddccc.....
                    fbf4f222222f1edde.......
                    fcf.f222222f44ee........
                    .ff.f445544f............
                    ....ffffffff............
                    .....ff..ff.............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """)],
            100,
            False)
    if direccionNena == 2:
        animation.run_image_animation(nena,
            [img("""
                    ........................
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef...cc.......
                    .ffffee2222ef.cdc.......
                    .fe222ffffe2fcddc.......
                    fffffffeeeffcddc........
                    ffe44ebf44ecddc.........
                    fee4d41fddecdc..........
                    .feee4dddedccc..........
                    ..ffee44e4dde...........
                    ...f222244ee............
                    ...f2222e2f.............
                    ...f444455f.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """),
                img("""
                    ........................
                    .......fff..............
                    ....fffff2f.............
                    ..ffeeeee22ff...........
                    .ffeeeeee222ff..........
                    .feeeefffeeeef..........
                    .fffffeee2222ef.........
                    fffe222fffffe2f.........
                    fffffffffeeefff.....cc..
                    fefe44ebbf44eef...ccdc..
                    .fee4d4bbfddef..ccddcc..
                    ..feee4dddddfeecdddc....
                    ...f2222222eeddcdcc.....
                    ...f444445e44ddccc......
                    ...ffffffffeeee.........
                    ...fff...ff.............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """),
                img("""
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef............
                    .ffffee2222ef...........
                    .fe222ffffe2f...........
                    fffffffeeefff...........
                    ffe44ebf44eef...........
                    fee4d41fddef............
                    .feee4ddddf.............
                    ..fdde444ef.............
                    ..fdde22ccc.............
                    ...eef22cdc.............
                    ...f4444cddc............
                    ....fffffcddc...........
                    .....fff..cddc..........
                    ...........cdc..........
                    ............cc..........
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    """)],
            100,
            False)
    # LÓGICA APERTURA INVENTARIO
    if cercaCofre == 1:
        if inventarioAbierto == 0:
            cofreInventario.set_image(assets.image("""
                cofreAbierto
                """))
            inventarioAbierto = 1
            controller.move_sprite(nena, 0, 0)
            menuInventario = miniMenu.create_menu_from_array([miniMenu.create_menu_item("Huevos: " + str(huevos),
                        img("""
                            . . 2 2 b b b b b . . . . . . .
                            . 2 b 4 4 4 4 4 4 b . . . . . .
                            2 2 4 4 4 4 d d 4 4 b . . . . .
                            2 b 4 4 4 4 4 4 d 4 b . . . . .
                            2 b 4 4 4 4 4 4 4 d 4 b . . . .
                            2 b 4 4 4 4 4 4 4 4 4 b . . . .
                            2 b 4 4 4 4 4 4 4 4 4 e . . . .
                            2 2 b 4 4 4 4 4 4 4 b e . . . .
                            . 2 b b b 4 4 4 b b b e . . . .
                            . . e b b b b b b b e e . . . .
                            . . . e e b 4 4 b e e e b . . .
                            . . . . . e e e e e e b d b b .
                            . . . . . . . . . . . b 1 1 1 b
                            . . . . . . . . . . . c 1 d d b
                            . . . . . . . . . . . c 1 b c .
                            . . . . . . . . . . . . c c . .
                            """)),
                    miniMenu.create_menu_item("Gallinas: " + str(gallinas),
                        img("""
                            . . . . . . b b b b a a . . . .
                            . . . . b b d d d 3 3 3 a a . .
                            . . . b d d d 3 3 3 3 3 3 a a .
                            . . b d d 3 3 3 3 3 3 3 3 3 a .
                            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b
                            . b 3 3 3 3 3 a a 3 3 3 3 3 a b
                            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b
                            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b
                            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e
                            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e
                            a 3 3 3 3 3 3 3 d d a 4 4 4 e .
                            a a 3 3 3 d d d a a 4 4 4 e e .
                            . e a a a a a a 4 4 4 4 e e . .
                            . . e e b b 4 4 4 4 b e e . . .
                            . . . e e e e e e e e . . . . .
                            . . . . . . . . . . . . . . . .
                            """)),
                    miniMenu.create_menu_item("Cabras: " + str(cabras),
                        img("""
                            . . . . . . b b b b . . . . . .
                            . . . . . . b 4 4 4 b . . . . .
                            . . . . . . b b 4 4 4 b . . . .
                            . . . . . b 4 b b b 4 4 b . . .
                            . . . . b d 5 5 5 4 b 4 4 b . .
                            . . . . b 3 2 3 5 5 4 e 4 4 b .
                            . . . b d 2 2 2 5 7 5 4 e 4 4 e
                            . . . b 5 3 2 3 5 5 5 5 e e e e
                            . . b d 7 5 5 5 3 2 3 5 5 e e e
                            . . b 5 5 5 5 5 2 2 2 5 5 d e e
                            . b 3 2 3 5 7 5 3 2 3 5 d d e 4
                            . b 2 2 2 5 5 5 5 5 5 d d e 4 .
                            b d 3 2 d 5 5 5 d d d 4 4 . . .
                            b 5 5 5 5 d d 4 4 4 4 . . . . .
                            4 d d d 4 4 4 . . . . . . . . .
                            4 4 4 4 . . . . . . . . . . . .
                            """)),
                    miniMenu.create_menu_item("Caballos: " + str(caballos),
                        img("""
                            4 4 4 . . 4 4 4 4 4 . . . . . .
                            4 5 5 4 4 5 5 5 5 5 4 4 . . . .
                            b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
                            . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
                            . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
                            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
                            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
                            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
                            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
                            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
                            . c 4 5 5 5 5 d d d 5 5 5 5 5 b
                            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
                            . . c 4 4 d 4 4 4 4 4 d d 5 d c
                            . . . c 4 4 4 4 4 4 4 4 5 5 5 4
                            . . . . c c b 4 4 4 b b 4 5 4 4
                            . . . . . . c c c c c c b b 4 .
                            """)),
                    miniMenu.create_menu_item("Leña: " + str(lena),
                        img("""
                            ........................
                            ..........bbbb..........
                            ........bbddddbb........
                            .......bddbbbbddb.......
                            ......bdbbddddbbdb......
                            .....bdbbdbbbbdbbdb.....
                            .....bdbdbddddbdbdb.....
                            .....cdbbdbbbbdbbdc.....
                            .....cbdbbddddbbdbc.....
                            .....efbddbbbbddbce.....
                            .....eeffbddddbccee.....
                            .....eeeeffcccceee......
                            .....ceeeeeeeeeeee......
                            .....ceeeeeeeeeeee......
                            .....feeeeeeeeeeee......
                            .....cceeeeeeeeeee......
                            ......feeeeeeeeeee......
                            .....6fceeeeeeeeee6.....
                            ....6776eeeeeeeee676....
                            ...6777666eeee6666776...
                            ..67768e67766777667776..
                            ...668ee7768867788666...
                            ......ee77eeee77ecee....
                            ......ee6eeeeee6eef.....
                            """)),
                    miniMenu.create_menu_item("Patatas: " + str(patatas),
                        img("""
                            . . . . . . 2 2 2 2 . . . . . .
                            . . . . 2 2 3 3 3 3 2 e . . . .
                            . . . 2 3 d 1 1 d d 3 2 e . . .
                            . . 2 3 1 d 3 3 3 d d 3 e . . .
                            . 2 3 1 3 3 3 3 3 d 1 3 b e . .
                            . 2 1 d 3 3 3 3 d 3 3 1 3 b b .
                            2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b
                            2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b
                            2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e
                            2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e
                            e d 3 3 3 3 d 3 3 3 d d b 4 4 e
                            e d d 3 3 3 d 3 3 3 1 3 b 4 b e
                            e 3 d 3 3 1 d d 3 d 1 b b e e .
                            . e 3 1 1 d d 1 1 1 b b e e e .
                            . . e 3 3 3 3 3 3 b e e e e . .
                            . . . e e e e e e e e e e . . .
                            """))])
            menuInventario.set_dimensions(130, 90)
            menuInventario.z = 4
            menuInventario.set_frame(img("""
                999999999999999999999999999999999999999999999999
                999988899999999999998889999999999999888999999999
                998888888999888899888888899988889988888889998889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988888888888888888888888888888888888888888888889
                988688888888888888888888888888888888888886888889
                988688888888688888888888888888888868888866888889
                988668888888668888888888888888888868888886888689
                966688888888688888888888888688888866888866688689
                986668888886668888688888888688888668888866886689
                988666888888688888688888886668888866888666688689
                966688888866666888668888886688888866688866886669
                986666888866668886666888866666886668888666686689
                986666888866668888668888886688888666888666666669
                966668888666666886666888866666886666866666666669
                986688886666668886666888666668886666666666666669
                966666688666666666666666666666666666666666666669
                966666886666666666666666666666666666666666666669
                966666666666666666666666666666666666666666666669
                999999999999999999999999999999999999999999999999
                """))
            menuInventario.set_title("Inventario")
            menuInventario.set_position(scene.screen_width() / 2, scene.screen_height() / 2)
    # LÓGICA TALA ÁRBOLES
    if esArbol == 1:
        if nena.overlaps_with(arbol):
            golpesArbol += 1
            if golpesArbol == 3:
                sprites.destroy(arbol)
                lena += 3
                tronco1 = sprites.create(assets.image("""
                        miImagen13
                        """),
                    SpriteKind.material)
                tiles.place_on_tile(tronco1, tiles.get_tile_location(6, 6))
                esArbol = 0
                golpesArbol = 0
                reapareceArbol1 = game.runtime() + 5000
    if esArbol2 == 1:
        if nena.overlaps_with(arbol2):
            golpesArbol2 += 1
            if golpesArbol2 == 3:
                sprites.destroy(arbol2)
                lena += 3
                tronco2 = sprites.create(assets.image("""
                        miImagen13
                        """),
                    SpriteKind.material)
                tiles.place_on_tile(tronco2, tiles.get_tile_location(8, 7))
                esArbol2 = 0
                golpesArbol2 = 0
                reapareceArbol2 = game.runtime() + 5000
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# lÓGICA BOTÓN B

def on_b_pressed():
    global inventarioAbierto
    # LÓGICA CIERRE INVENTARIO
    if inventarioAbierto == 1:
        inventarioAbierto = 0
        menuInventario.close()
        cofreInventario.set_image(assets.image("""
            cofre
            """))
        controller.move_sprite(nena, 100, 100)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite, otherSprite):
    global cercaCofre
    cercaCofre = 1
sprites.on_overlap(SpriteKind.player, SpriteKind.inventario, on_on_overlap)

def on_up_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-down
            """),
        500,
        False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

# INICIO VAR & POSICIONAMIENTO
tronco2: Sprite = None
tronco1: Sprite = None
menuInventario: miniMenu.MenuSprite = None
cofreInventario: Sprite = None
arbol2: Sprite = None
arbol: Sprite = None
nena: Sprite = None
esArbol2 = 0
golpesArbol2 = 0
esArbol = 0
golpesArbol = 0
direccionNena = 0
reapareceArbol2 = 0
reapareceArbol1 = 0
cercaCofre = 0
inventarioAbierto = 0
lena = 0
cabras = 0
huevos = 0
patatas = 0
gallinas = 0
caballos = 0
caballos = 0
gallinas = 0
patatas = 0
huevos = 0
cabras = 0
lena = 0
inventarioAbierto = 0
cercaCofre = 0
reapareceArbol1 = 0
reapareceArbol2 = 0
direccionNena = 0
golpesArbol = 0
esArbol = 1
golpesArbol2 = 0
esArbol2 = 1
scene.set_background_image(assets.image("""
    background
    """))
tiles.set_current_tilemap(tilemap("""
    nivel7
    """))
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
controller.move_sprite(nena, 100, 100)
nena.set_stay_in_screen(True)
tiles.place_on_tile(nena, tiles.get_tile_location(8, 5))
trader = sprites.create(assets.image("""
        comerciante
        """),
    SpriteKind.comerciante)
tiles.place_on_tile(trader, tiles.get_tile_location(3, 5))
arbol = sprites.create(assets.image("""
    árbol
    """), SpriteKind.material)
tiles.place_on_tile(arbol, tiles.get_tile_location(6, 5))
arbol2 = sprites.create(assets.image("""
    árbol
    """), SpriteKind.material)
tiles.place_on_tile(arbol2, tiles.get_tile_location(8, 6))
cofreInventario = sprites.create(assets.image("""
    cofre
    """), SpriteKind.inventario)
tiles.place_on_tile(cofreInventario, tiles.get_tile_location(0, 6))
# DELETE TRONCOS & RESTART ARBOLES

def on_update_interval():
    global arbol, esArbol
    if esArbol == 0 and game.runtime() > reapareceArbol1:
        sprites.destroy(tronco1)
        arbol = sprites.create(assets.image("""
            árbol
            """), SpriteKind.material)
        tiles.place_on_tile(arbol, tiles.get_tile_location(6, 5))
        esArbol = 1
game.on_update_interval(500, on_update_interval)

def on_update_interval2():
    global arbol2, esArbol2
    if esArbol2 == 0 and game.runtime() > reapareceArbol2:
        sprites.destroy(tronco2)
        arbol2 = sprites.create(assets.image("""
            árbol
            """), SpriteKind.material)
        tiles.place_on_tile(arbol2, tiles.get_tile_location(8, 6))
        esArbol2 = 1
game.on_update_interval(500, on_update_interval2)

def on_update_interval3():
    global cercaCofre
    if not (nena.overlaps_with(cofreInventario)):
        cercaCofre = 0
game.on_update_interval(500, on_update_interval3)
