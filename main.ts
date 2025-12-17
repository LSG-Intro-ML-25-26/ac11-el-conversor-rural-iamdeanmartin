namespace SpriteKind {
    export const decoration = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const comerciante = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const material = SpriteKind.create()
    export const inventario = SpriteKind.create()
}
/**
 * INICIO VAR & POSICIONAMIENTO
 */
function trade_huevo (lena: number) {
    return lena - 3
}
function anadir_caballo () {
    caballos += 1
}
// MOVIMIENTOS PERSONAJE
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
    direccion_nena = 0
})
function trade_patata (lena: number) {
    return lena - 2
}
// FUNCIÓN PARA TRADEO Y MENSAJE
function comprar_objeto () {
    let indice_seleccionado = 0
    if (indice_seleccionado == 0) {
        if (lena >= 3) {
            lena = trade_huevo(lena)
            anadir_huevos()
        } else {
            game.showLongText("Material Insuficiente", DialogLayout.Bottom)
        }
    } else if (indice_seleccionado == 1) {
        if (lena >= 6) {
            lena = trade_gallina(lena)
            anadir_gallina()
        } else {
            game.showLongText("Material Insuficiente", DialogLayout.Bottom)
        }
    } else if (indice_seleccionado == 2) {
        if (lena >= 5) {
            lena = trade_cabra(lena)
            anadir_cabra()
        } else {
            game.showLongText("Material Insuficiente", DialogLayout.Bottom)
        }
    } else if (indice_seleccionado == 3) {
        if (lena >= 12) {
            lena = trade_caballo(lena)
            anadir_caballo()
        } else {
            game.showLongText("Material Insuficiente", DialogLayout.Bottom)
        }
    } else if (indice_seleccionado == 4) {
        if (lena >= 2) {
            lena = trade_patata(lena)
            anadir_patata()
        } else {
            game.showLongText("Material Insuficiente", DialogLayout.Bottom)
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-right`,
    500,
    false
    )
    direccion_nena = 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-left`,
    500,
    false
    )
    direccion_nena = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.comerciante, function (sprite, otherSprite) {
    cerca_trader = 1
})
// LÓGICA BOTON A
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // ANIMACIONES PERS. TALAR
    if (direccion_nena == 1) {
        animation.runImageAnimation(
        nena,
        [img`
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
            `,img`
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
            `,img`
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
            `],
        100,
        false
        )
    }
    if (direccion_nena == 0) {
        animation.runImageAnimation(
        nena,
        [img`
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
            `,img`
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
            `,img`
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
            `],
        100,
        false
        )
    }
    if (direccion_nena == 2) {
        animation.runImageAnimation(
        nena,
        [img`
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
            `,img`
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
            `,img`
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
            `],
        100,
        false
        )
    }
    if (trade_abierto == 1) {
        comprar_objeto()
    }
    // LÓGICA APERTURA INVENTARIO
    if (cerca_trader == 1) {
        if (trade_abierto == 0) {
            controller.moveSprite(nena, 0, 0)
            menu_tradeo = miniMenu.createMenuFromArray([
            miniMenu.createMenuItem(" x 12 ", assets.image`huevos`),
            miniMenu.createMenuItem(" x 1", assets.image`gallina`),
            miniMenu.createMenuItem(" x 1", assets.image`cabra`),
            miniMenu.createMenuItem(" x 1", assets.image`caballo`),
            miniMenu.createMenuItem(" x 1.5kg", assets.image`patata`)
            ])
            trade_abierto = 1
            menu_tradeo.setTitle("Comercio Oscuro")
            menu_tradeo.setFrame(img`
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
                `)
            menu_tradeo.z = 4
            menu_tradeo.setDimensions(130, 90)
            menu_tradeo.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
        }
    }
    // LÓGICA APERTURA INVENTARIO
    if (cerca_cofre == 1) {
        if (inventario_abierto == 0) {
            trade_abierto = 0
            cofre_inventario.setImage(assets.image`cofreAbierto`)
            inventario_abierto = 1
            controller.moveSprite(nena, 0, 0)
            menu_inventario = miniMenu.createMenuFromArray([
            miniMenu.createMenuItem("Huevos: " + ("" + huevos), assets.image`huevos`),
            miniMenu.createMenuItem("Gallinas: " + ("" + gallinas), assets.image`gallina`),
            miniMenu.createMenuItem("Cabras: " + ("" + cabras), assets.image`cabra`),
            miniMenu.createMenuItem("Caballos: " + ("" + caballos), assets.image`caballo`),
            miniMenu.createMenuItem("Leña: " + ("" + lena), img`
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
                `),
            miniMenu.createMenuItem("Patatas: " + ("" + patatas), assets.image`patata`)
            ])
            menu_inventario.setDimensions(130, 90)
            menu_inventario.z = 4
            menu_inventario.setFrame(img`
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
                `)
            menu_inventario.setTitle("Inventario")
            menu_inventario.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
        }
    }
    // LÓGICA TALA ÁRBOLES
    if (es_arbol == 1) {
        if (nena.overlapsWith(arbol)) {
            golpes_arbol += 1
            if (golpes_arbol == 3) {
                sprites.destroy(arbol)
                lena += 3
                tronco1 = sprites.create(assets.image`miImagen13`, SpriteKind.material)
                tiles.placeOnTile(tronco1, tiles.getTileLocation(6, 6))
                es_arbol = 0
                golpes_arbol = 0
                reaparece_arbol1 = game.runtime() + 5000
            }
        }
    }
    if (es_arbol2 == 1) {
        if (nena.overlapsWith(arbol2)) {
            golpes_arbol2 += 1
            if (golpes_arbol2 == 3) {
                sprites.destroy(arbol2)
                lena += 3
                tronco2 = sprites.create(assets.image`miImagen13`, SpriteKind.material)
                tiles.placeOnTile(tronco2, tiles.getTileLocation(8, 7))
                es_arbol2 = 0
                golpes_arbol2 = 0
                reaparece_arbol2 = game.runtime() + 5000
            }
        }
    }
})
// lÓGICA BOTÓN B
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // LÓGICA CIERRE INVENTARIO
    if (inventario_abierto == 1) {
        inventario_abierto = 0
        menu_inventario.close()
        cofre_inventario.setImage(assets.image`cofre`)
        controller.moveSprite(nena, 100, 100)
    }
    // LÓGICA CIERRE INVENTARIO
    if (trade_abierto == 1) {
        trade_abierto = 0
        menu_tradeo.close()
        controller.moveSprite(nena, 100, 100)
    }
})
// FUNCIONES AÑADIR AL INVENTARIO
function anadir_gallina () {
    gallinas += 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.inventario, function (sprite, otherSprite) {
    cerca_cofre = 1
})
// FUNCIONES PARA TRADEO DIRECTO
function trade_gallina (lena: number) {
    return lena - 6
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
function anadir_huevos () {
    huevos += 12
}
function anadir_patata () {
    patatas += 1.5
}
function anadir_cabra () {
    cabras += 1
}
function trade_caballo (lena: number) {
    return lena - 12
}
function trade_cabra (lena: number) {
    return lena - 5
}
let tronco2: Sprite = null
let tronco1: Sprite = null
let menu_inventario: miniMenu.MenuSprite = null
let menu_tradeo: miniMenu.MenuSprite = null
let cofre_inventario: Sprite = null
let arbol2: Sprite = null
let arbol: Sprite = null
let nena: Sprite = null
let es_arbol2 = 0
let golpes_arbol2 = 0
let es_arbol = 0
let golpes_arbol = 0
let direccion_nena = 0
let reaparece_arbol2 = 0
let reaparece_arbol1 = 0
let cerca_cofre = 0
let inventario_abierto = 0
let lena = 0
let cabras = 0
let huevos = 0
let patatas = 0
let gallinas = 0
let caballos = 0
let cerca_trader = 0
let trade_abierto = 0
let costes_tradeo = {
    "gallina" : 6,
    "cabra" : 5,
    "caballo" : 12,
    "huevo" : 3.0,
    "patata" : 2.0,
}
let suma_inventario = {
    "gallina" : 1,
    "cabra" : 1,
    "caballo" : 1,
    "huevo" : 12,
    "patata" : 1.5,
}
trade_abierto = 0
cerca_trader = 0
caballos = 0
gallinas = 0
patatas = 0
huevos = 0
cabras = 0
lena = 0
inventario_abierto = 0
cerca_cofre = 0
reaparece_arbol1 = 0
reaparece_arbol2 = 0
direccion_nena = 0
golpes_arbol = 0
es_arbol = 1
golpes_arbol2 = 0
es_arbol2 = 1
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`nivel7`)
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
controller.moveSprite(nena, 100, 100)
nena.setStayInScreen(true)
tiles.placeOnTile(nena, tiles.getTileLocation(8, 5))
let trader = sprites.create(assets.image`comerciante`, SpriteKind.comerciante)
tiles.placeOnTile(trader, tiles.getTileLocation(3, 5))
arbol = sprites.create(assets.image`árbol`, SpriteKind.material)
tiles.placeOnTile(arbol, tiles.getTileLocation(6, 5))
arbol2 = sprites.create(assets.image`árbol`, SpriteKind.material)
tiles.placeOnTile(arbol2, tiles.getTileLocation(8, 6))
cofre_inventario = sprites.create(assets.image`cofre`, SpriteKind.inventario)
tiles.placeOnTile(cofre_inventario, tiles.getTileLocation(0, 6))
// DELETE TRONCOS & RESTART ARBOLES
game.onUpdateInterval(500, function () {
    if (es_arbol == 0 && game.runtime() > reaparece_arbol1) {
        sprites.destroy(tronco1)
        arbol = sprites.create(assets.image`árbol`, SpriteKind.material)
        tiles.placeOnTile(arbol, tiles.getTileLocation(6, 5))
        es_arbol = 1
    }
})
game.onUpdateInterval(500, function () {
    if (es_arbol2 == 0 && game.runtime() > reaparece_arbol2) {
        sprites.destroy(tronco2)
        arbol2 = sprites.create(assets.image`árbol`, SpriteKind.material)
        tiles.placeOnTile(arbol2, tiles.getTileLocation(8, 6))
        es_arbol2 = 1
    }
})
game.onUpdateInterval(500, function () {
    if (!(nena.overlapsWith(cofre_inventario))) {
        cerca_cofre = 0
    }
    if (!(nena.overlapsWith(trader))) {
        cerca_trader = 0
    }
})
