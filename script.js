var pasaule = document.getElementById("world");

var map = [
//x,y,z, rx, ry, rz, h, w, opacity, color
    [0, 0, 0, 0, 0, 0, 200, 200, 0.8, "green"],
    [0, 0, -200, 0, 0, 0, 200, 200, 0.8, "red"],
    [0, -100, -100, 90, 0, 0, 200, 200, 0.8, "blue"],
    [0, -100, 100, 90, 0, 0, 200, 200, 0.8, "violet"],
    [100, 0, -100, 0, 90, 0, 200, 200, 0.8, "orange"],
    [100, 0, 100, 0, 90, 0, 200, 200, 0.8, "brown"],
];

for(let i = 0; i < map.length; i++){
    var newElement = document.createElement("div");
    newElement.id = "element"+i;
    newElement.style.position = "absolute";
    newElement.style.height = "200px";
    newElement.style.width = "200px";
    newElement.style.opacity = 0.8;
    newElement.style.background = map[i][9];
    newElement.style.transform = `rotateX(${map[i][3]}deg) rotateY(${map[i][4]}deg) rotateZ(${map[i][5]}deg) translate3d(${map[i][0]}px, ${map[i][1]}px, ${map[i][2]}px)`;

    pasaule.append(newElement);
}
