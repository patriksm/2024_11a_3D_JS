var pasaule = document.getElementById("world");

var velocity = 7;
var uzPrieksu = uzAtpakal = paLabi = paKreisi = 0;

var map = [
//x,y,z, rx, ry, rz, h, w, opacity, color
    [0, 0, 0, 0, 0, 0, 200, 200, 0.8, "orange"],
    [0, 100, 0, 90, 0, 0, 2000, 2000, 0.8, "brown"],
    [0, 0, -1000, 0, 0, 0, 200, 2000, 0.8, "green"],
];

function move(notikums, atrums){
    //console.log(notikums.keyCode);
    if(notikums.keyCode == 68){
        paLabi = atrums;
    }
    if(notikums.keyCode == 65){
        paKreisi = atrums;
    }
    if(notikums.keyCode == 87){
        uzPrieksu = atrums;
    }
    if(notikums.keyCode == 83){
        uzAtpakal = atrums;
    }
    //peles kods
    console.log(notikums.movementX);
}

document.addEventListener("keydown", (event) => {
    this.move(event, velocity);
});
document.addEventListener("keyup", (event) => {
    this.move(event, 0);
});
document.addEventListener("mousemove", (event) => {
    this.move(event, velocity);
});

function createNewWorld(wrld){
    for(let i = 0; i < wrld.length; i++){
        var newElement = document.createElement("div");
        newElement.id = "element"+i;
        newElement.style.position = "absolute";
        newElement.style.height = `${wrld[i][6]}px`;
        newElement.style.width = `${wrld[i][7]}px`;
        newElement.style.opacity = 0.8;
        newElement.style.background = wrld[i][9];
        newElement.style.transform = `
            translate3d(
                ${600 - wrld[i][7]/2 + wrld[i][0]}px, 
                ${400 - wrld[i][6]/2 + wrld[i][1]}px, 
                ${wrld[i][2]}px
            ) 
                
                rotateX(${wrld[i][3]}deg) 
                rotateY(${wrld[i][4]}deg) 
                rotateZ(${wrld[i][5]}deg)
        `;
    
        pasaule.append(newElement);
    }
}

createNewWorld(map);

function player(x, y, z, rx, ry, rz){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.rz = rz;
}

let myself = new player(0, 0, 0, 0, 0, 0);
let himself = new player(70, 35, 80, 0, 0, 0);
let herself = new player(100, 0, -400, -10, 0, 0);

function updateWorld(speletajs){
    dx = paLabi - paKreisi;
    dz = uzPrieksu - uzAtpakal;

    speletajs.x += dx;
    speletajs.z += dz;

    pasaule.style.transform = `
        translateZ(600px)

        translate3d(
            ${-speletajs.x}px, 
            ${speletajs.y}px, 
            ${speletajs.z}px
        )
    
        rotateX(${speletajs.rx}deg)
        rotateY(${speletajs.ry}deg)
        rotateZ(${speletajs.rz}deg)
    `;
}



let spele = setInterval(function(){updateWorld(myself)}, 10);