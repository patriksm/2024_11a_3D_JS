var pasaule = document.getElementById("world");

var map = [
//x,y,z, rx, ry, rz, h, w, opacity, color
    [0, 0, 0, 0, 0, 0, 200, 200, 0.8, "orange"],
    [0, 100, 0, 90, 0, 0, 2000, 2000, 0.8, "brown"],
    [0, 0, -1000, 0, 0, 0, 200, 2000, 0.8, "green"],
];

function createNewWorld(wrld){
    for(let i = 0; i < wrld.length; i++){
        var newElement = document.createElement("div");
        newElement.id = "element"+i;
        newElement.style.position = "absolute";
        newElement.style.height = `${wrld[i][6]}px`;
        newElement.style.width = `${wrld[i][7]}px`;
        newElement.style.opacity = 0.8;
        newElement.style.background = wrld[i][9];
        newElement.style.transform = `translate3d(${600 - wrld[i][7]/2 + wrld[i][0]}px, ${400 - wrld[i][6]/2 + wrld[i][1]}px, ${wrld[i][2]}px) rotateX(${wrld[i][3]}deg) rotateY(${wrld[i][4]}deg) rotateZ(${wrld[i][5]}deg)`;
    
        pasaule.append(newElement);
    }
}

createNewWorld(map);