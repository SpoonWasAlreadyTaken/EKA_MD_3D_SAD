var world = document.getElementById("world");

var velocity = 5;
var forward = 0;
var backward = 0;
var left = 0;
var right = 0;
var up = 0;
var down = 0;
var mouseX = 0;
var mouseY = 0;
var mouseDX = 0;
var mouseDY = 0;

var map = [
            [0,100,0,90,0,0,2000,2000,"#555555"],
            [0,0,-1000,0,0,0,2000,200,"#FF0000"],//prieksaa siena
            [0,0,1000,0,0,0,2000,200,"#FF0000"], // siena aizmugure
            [1000,0,0,0,90,0,2000,200,"#FFFF00"],//laba siena
            [-1000,0,0,0,90,0,2000,200,"#FF00FF"],
            [500,-965,0,90,60,0,2000,2000,"#4C00FF"],
            [-500,-965,0,90,-60,0,2000,2000,"#A85E32"]
];

function player(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
}

var pawn = new player(0,0,0);

function update(){
    let dx = left - right;
    let dy = up - down;
    let dz = forward - backward;
    
    let mx = mouseX;
    let my = mouseY;

    pawn.x += dx;
    pawn.z += dz;
    pawn.y += dy;

    world.style.transform = `translate3d(${pawn.x}px, ${pawn.y}px, ${pawn.z}px) rotateX(${my}deg) rotateY(${mx}deg) rotateZ(0deg)`;

}

function createWorld(){
    for(let i = 0; i < map.length; i++){
        let newElement = document.createElement("div");
        newElement.className = "square";
        newElement.id = "square" + i;
        newElement.style.width = `${map[i][6]}px`;
        newElement.style.height = `${map[i][7]}px`;
        newElement.style.background = map[i][8];
        newElement.style.transform = 
        `translate3d(${600-map[i][6]/2 + map[i][0]}px, 
                     ${400-map[i][7]/2 + map[i][1]}px, 
                     ${map[i][2]}px) 

        rotateX(${map[i][3]}deg) 
        rotateY(${map[i][4]}deg) 
        rotateZ(${map[i][5]}deg)`;
    
        world.append(newElement);
    }
}

createWorld();

timerGame = setInterval(update, 10)