let dist = 0
let y1 = 13
let y2 = 35
let x1 = 10
let x2 = 12
//  #Math.sqrt(0)
//  #Math.imul(0, 0)
let dista = x2 - x1
let distb = y2 - y1
let distc = Math.imul(dista, 2)
let distd = distb * distb
let diste = distc + distd
let distf = Math.sqrt(diste)
let my_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
my_sprite.sayText(distf)
