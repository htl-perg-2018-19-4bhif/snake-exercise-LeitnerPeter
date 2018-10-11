const ansi = require('ansi')
  , cursor = ansi(process.stdout)
  , keypress = require('keypress');
 
  keypress(process.stdin);

let field = [];
const fieldsize = 20;

let snakeX = 14;
let snakeY = 14;

let appleX = 5;
let appleY = 5;

let terminate = false;
cursor.bg.white();           
  
for(let i = 0;i<fieldsize;i++){
    field.push(new Array(fieldsize)); 
}

for(let i = 0;i<field.length;i++){
    for(let j = 0;j<field[i].length;j++){
        
        if(i==appleY&&j==appleX){
            field[i][j]=2;
            cursor.bg.red();
        } else if(i==snakeY&&j==snakeX) {
            field[i][j]=1;
            cursor.bg.green();
        } else {
            field[i][j]=0;
            cursor.bg.white();
        }
        cursor.write(" ");
    }
    cursor.write("\n");
}
cursor.reset()
    
console.log("Game Start");

while(!terminate) {

process.stdin.on('keypress', function (ch, key) {
    if (key.name == 'w') {
        if(snakeY == 0){
            terminate = true;
            console.log("Game Over");
        } else {
            field[snakeY][snakeX] = 0;
            cursor.bg.white().goto(snakeX, snakeY).write(" ").reset();

            snakeY--;
            
            field[snakeY][snakeX] = 1;
            cursor.bg.green().goto(snakeX, snakeY).write(" ").reset();
        }
      }
      else if(key.name == 'a') {
        if(snakeX == 0){
            terminate = true;
            console.log("Game Over");
        } else {
            field[snakeY][snakeX] = 0;
            cursor.bg.white().goto(snakeX, snakeY).write(" ").reset();

            snakeX--;
            
            field[snakeY][snakeX] = 1;
            cursor.bg.green().goto(snakeX, snakeY).write(" ").reset();
        }
      }
      else if(key.name == 'd') {
        if(snakeX == fieldsize-1){
            terminate = true;
            console.log("Game Over");
        } else {
            field[snakeY][snakeX] = 0;
            cursor.bg.white().goto(snakeX, snakeY).write(" ").reset();

            snakeX++;
            
            field[snakeY][snakeX] = 1;
            cursor.bg.green().goto(snakeX, snakeY).write(" ").reset();
        }
    }
    else if(key.name == 's') {
        if(snakeY == fieldsize-1){
            terminate = true;
            console.log("Game Over");
        } else {
            field[snakeY][snakeX] = 0;
            cursor.bg.white().goto(snakeX, snakeY).write(" ").reset();

            snakeY--;
            
            field[snakeY][snakeX] = 1;
            cursor.bg.green().goto(snakeX, snakeY).write(" ").reset();
        }
    }
    cursor.reset()
    console.log("X " + snakeX, ", Y " + snakeY);
  });
  process.stdin.setRawMode(true);
    process.stdin.resume();


}

cursor.reset()