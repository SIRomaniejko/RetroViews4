class Protagonista{
    constructor(domElement, leftDistance, attackSpeed, attackDuration, hitBoxCorriendo, hitboxNormaltacando){
        this.domElement = domElement;
        this.domElement.style.left = leftDistance + "px";
        this.velocidadY = 0;
        this.altura = 0;
        this.doubleJump = false;
        this.attacking = -10;
        this.attackSpeed = attackSpeed;
        this.attackDuration = attackDuration;
        this.isAttackResetted = false;
        this.isAlive = true;
        this.hitboxCorriendo = hitBoxCorriendo;
        this.hitboxNormaltacando = hitboxNormaltacando;
        this.leftDistance = leftDistance;
        this.generateHitboxDom();
    }
    generateHitboxDom(){
        let hitboxNormal = document.createElement("div");
        let hitboxNormaltaque = document.createElement("div");
        hitboxNormal.classList.add("hitbox");
        hitboxNormaltaque.classList.add("hitbox");
        if(!verHitboxes){
            hitboxNormal.classList.add("ocultado");
            hitboxNormaltaque.classList.add("ocultado");
        }
        hitboxNormal.style.height = this.hitboxCorriendo.y2 + "px";
        hitboxNormal.style.width = this.hitboxCorriendo.x2 + "px";
        hitboxNormal.style.position = "absolute";
        hitboxNormal.style.left = this.hitboxCorriendo.x1 + "px";
        hitboxNormal.style.bottom = this.hitboxCorriendo.y1 + "px";
        this.domElement.appendChild(hitboxNormal)
        hitboxNormaltaque.style.height = this.hitboxNormaltacando.y2 + "px";
        hitboxNormaltaque.style.width = this.hitboxNormaltacando.x2 + "px";
        hitboxNormaltaque.style.position = "absolute";
        hitboxNormaltaque.style.left = this.hitboxNormaltacando.x1 + "px";
        hitboxNormaltaque.style.bottom = this.hitboxNormaltacando.y1 + "px";
        hitboxNormaltaque.style.background = "green";
        hitboxNormaltaque.style.zIndex = "-1";
        this.domElement.appendChild(hitboxNormaltaque);

    }
    isOnFloor(){
        return this.altura == 0;
    }
    changeVelocidadY(velocidad) {
        this.velocidadY += velocidad;
    }
    setVelocidadY(velocidad){
        this.velocidadY = velocidad;
    }
    getVelocidadY(){
        return this.velocidadY;
    }
    calcularAltura(){
        this.altura += this.velocidadY;
        if(this.altura <= 0){
            this.altura = 0;
            this.velocidadY = 0;
        }
    }
    getAltura(){
        return this.altura;
    }
    isDoubleJumping(){
        return this.doubleJump;
    }
    setDoubleJump(param){
        this.doubleJump = param;
    }
    getDomElement(){
        return this.domElement;
    }
    isAttacking(){
        return this.attacking > 0;
    }
    canAttack(){
        return this.attacking < -this.attackSpeed;
    }
    attack(){
        this.attacking = this.attackDuration;
    }
    attackReset(){
        this.isAttackResetted = true;
    }
    update(){
        if(!this.isAlive){
            this.getDomElement().classList.remove("atacando");
            this.getDomElement().classList.remove("corriendo");
            this.getDomElement().classList.remove("cayendo");
            this.getDomElement().classList.remove("saltando");
            this.getDomElement().classList.add("muerto");
        }
        else{
            if(!this.isAttacking()){
                this.getDomElement().classList.remove("atacando");
            }
            if(this.getVelocidadY() > 0){
                this.getDomElement().classList.remove("corriendo");
                this.getDomElement().classList.remove("cayendo");
                this.getDomElement().classList.add("saltando");
            }
            else if(this.getVelocidadY() < 0){
                this.getDomElement().classList.remove("saltando");
                this.getDomElement().classList.add("cayendo");
            }
            else if(!this.getDomElement().classList.contains("corriendo") && main.isOnFloor()){
                this.getDomElement().classList.remove("cayendo");
                this.getDomElement().classList.add("corriendo");
            }
            if(this.isAttacking()){
                this.getDomElement().classList.remove("saltando");
                this.getDomElement().classList.remove("cayendo");
                this.getDomElement().classList.remove("corriendo");
                this.getDomElement().classList.add("atacando");
            }
        }
        this.getDomElement().style.bottom = main.getAltura() + "px";
        this.calcularAltura();
        this.attacking--;
        if(this.attacking <= 0 && this.isAttackResetted){
            this.attacking = -this.attackSpeed;
            this.isAttackResetted = false;
        }
    }
    getHitbox(){
        let selectedHitbox;
        if(this.isAttacking()){
            selectedHitbox = this.hitboxNormaltacando
        }
        else{
            selectedHitbox = this.hitboxCorriendo;
        }
        return {x1: this.leftDistance + selectedHitbox.x1,
                x2: this.leftDistance + selectedHitbox.x1 + selectedHitbox.x2,
                y1: this.altura + selectedHitbox.y1,
                y2: this.altura + selectedHitbox.y1 + selectedHitbox.y2
        }
    }
    die(){
        this.isAlive = false;
    }
    revive(){
        this.isAlive = true;
        this.getDomElement().classList.add("corriendo");
        this.getDomElement().classList.remove("muerto");
    }
    isDead(){
        return !this.isAlive;
    }
}
class Proyectil{
    constructor(domElement, velocidadY, velocidadX, hitbox){
        this.domElement = domElement;
        this.velocidadY = velocidadY;
        this.velocidadX = velocidadX;
        this.posX = 1500;
        this.posY = 250;
        this.isDestroyed = false;
        this.hitbox = hitbox;
        this.setHitbox();
    }
    setHitbox(){
        let hitbox = document.createElement("div");
        hitbox.classList.add("hitbox");
        if(!verHitboxes){
            hitbox.classList.add("ocultado");

        }
        hitbox.style.height  = this.hitbox.y2 + "px";
        hitbox.style.width  = this.hitbox.x2 + "px";
        hitbox.style.left = this.hitbox.x1 + "px";
        hitbox.style.bottom = this.hitbox.y1 + "px";
        this.domElement.appendChild(hitbox);
    }
    update(){
        this.posX -= this.velocidadX;
        this.posY -= this.velocidadY;
        this.domElement.style.left = this.posX + "px";
        this.domElement.style.bottom = this.posY + "px";
    }
    isReusable(){
        return this.posX < -50 || this.posY < -50;
    }
    isAlive(){
        return !this.isDestroyed;
    }
    destroyProyectile(){
        this.domElement.classList.add("ocultado");
        this.isDestroyed = true;
    }
    reset(velocidadY, velocidadX){
        this.isDestroyed = false;
        this.domElement.classList.remove("ocultado");
        this.velocidadY = velocidadY;
        this.velocidadX = velocidadX;
        this.posX = 1500;
        this.posY = 250;
    }
    getHitbox(){
        return {
            x1 : this.posX + this.hitbox.x1,
            x2 : this.posX + this.hitbox.x1 + this.hitbox.x2,
            y1 : this.posY + this.hitbox.y1,
            y2 : this.posY + this.hitbox.y1 + this.hitbox.y2,
        }
    }
}

//parametros importantes
let hitboxNormal = { x1 : 30,
                x2 : 50,
                y1 : 20,
                y2 : 80,
};
let hitboxAtaque = { x1 : 0,
                x2 : 140,
                y1 : 0,
                y2 : 135,
};
let hitBoxProyectil = { x1 : 4,
                        x2 : 18,
                        y1 : 4,
                        y2 : 18,
};
let saltoSpeed = 18;
let gravity = -1;
let attackSpeed = 20;
let attackDuration = 5;
let tickInterval = 25;
let probabilidadSpawnProyectil = 0.01;
let probabilidadSpawnProyectilActual = probabilidadSpawnProyectil;
let crecimientoProbabilidad = 0.00001;
let downKey = false;
let upKey = false;
let spaceKey = false;
let verHitboxes = false;
let main = new Protagonista(document.querySelector("#protagonista"), 5, attackSpeed, attackDuration, hitboxNormal, hitboxAtaque);
let proyectiles = [];
let combo = 0;
let score = 0;
let puntosDestruccion = 100;

let comboDom = document.querySelector("#js-combo");
let scoreDom = document.querySelector("#js-score");

document.addEventListener("keydown", event=>{
    if(!event.repeat){
        switch(event.code){
            case "ArrowDown":
                downKey = true;
                event.preventDefault();
                break;
            case "ArrowUp":
                upKey = true;
                event.preventDefault();
                break;
            case "Space":
                spaceKey = true;
                event.preventDefault();
                break;
        }
    }
},{passive: false})
/*document.addEventListener("keyup", event=>{
    if(event.code == "ArrowDown"){
        downKey = false;
    }
    if(event.code == "ArrowUp"){
        upKey = false;
    }
})*/
function tick(){
    if(!main.isOnFloor()){
        main.changeVelocidadY(gravity);
        if(downKey){
            main.setVelocidadY(-saltoSpeed);
        }
    }
    if(main.isOnFloor()){
        if(upKey){
            main.setVelocidadY(saltoSpeed);
            upKey = false;
            main.setDoubleJump(false);
        }
        combo = 0;
    }
    if(upKey && !main.isDoubleJumping()){
        main.setVelocidadY(saltoSpeed);
        main.setDoubleJump(true);
    }
    if(spaceKey){
        if(main.canAttack()){
            main.attack();
        }
    }
    main.update();
    proyectiles.forEach(proyectil=>{
        proyectil.update();
    })
    downKey = false;
    upKey = false;
    spaceKey = false;

    let hitBoxMain = main.getHitbox();
    if(!main.isDead()){
        proyectiles.forEach(proyectil =>{
            if(proyectil.isAlive() && !proyectil.isReusable()){
                let hitBoxProyectil = proyectil.getHitbox();
                if(areColliding(hitBoxMain, hitBoxProyectil)){
                    if(main.isAttacking()){
                        console.log("cut");
                        proyectil.destroyProyectile();
                        main.attackReset();
                        main.setDoubleJump(false);
                        score += puntosDestruccion * ++combo;
                    }
                    else{
                        proyectil.destroyProyectile();
                        main.die();
                        document.querySelector("#killcam").classList.remove("ocultado");
                    }
                }
            }
        })
    }
    else{
        console.log("lmao urdedxDdDd");
    }
    scoreDom.innerHTML = score;
    comboDom.innerHTML = "x"+ combo;
    probabilidadSpawnProyectilActual += crecimientoProbabilidad;
    spawnProyectil(probabilidadSpawnProyectilActual);
}


//funcion creada para poder testear y ver las colisiones del juego
function toggleHitboxes(){
    document.querySelectorAll(".hitbox").forEach(hitbox=>{
        hitbox.classList.toggle("ocultado");
    })
    verHitboxes = !verHitboxes;
}
function areColliding(hitboxNormal, hitBoxB){
    return (!(hitBoxB.y1 > hitboxNormal.y2) && !(hitBoxB.y2 < hitboxNormal.y1) && !(hitBoxB.x1 > hitboxNormal.x2) && !(hitBoxB.x2 < hitboxNormal.x1));
    /*if(!(hitBoxB.y1 > hitboxNormal.y2) && !(hitBoxB.y2 < hitboxNormal.y1)){
        //console.log("collideY");
    }
    if(!(hitBoxB.x1 > hitboxNormal.x2) && !(hitBoxB.x2 < hitboxNormal.x1)){
        //console.log("collideX");
    }*/
}

function spawnProyectil(probabilidad){
    if(Math.random() < probabilidad){
        let velocidadX = Math.random()*6 + 3;
        let velocidadY = (Math.random() * (velocidadX/2)) - (velocidadX/4);
        for(let x = 0; x < proyectiles.length; x++){
            if(proyectiles[x].isReusable()){
                proyectiles[x].reset(velocidadY, velocidadX);
                return;
            }
        }
        let proyectilNuevo = document.createElement("div");
        proyectilNuevo.classList.add("proyectil");
        let newProyectil = new Proyectil(proyectilNuevo, velocidadY, velocidadX, hitBoxProyectil);
        newProyectil.update();
        document.querySelector("#contenedorJuego").appendChild(proyectilNuevo);
        proyectiles.push(newProyectil);
    }
}


function restartGame(){
    document.querySelector("#killcam").classList.add("ocultado");
    probabilidadSpawnProyectilActual = probabilidadSpawnProyectil;
    proyectiles.forEach(proyectil=>{
        proyectil.destroyProyectile();
    })
    main.revive();
    score = 0;
}


let a = document.querySelector("#killcam").querySelector("button").addEventListener("click", restartGame);

document.querySelector("#comienzoJuego").addEventListener("click", ()=>{
    document.querySelector("#welcome").classList.add("ocultado");
    setInterval(tick, tickInterval);
})
