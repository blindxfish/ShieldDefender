<<<<<<< HEAD
//      __..._   _...__
// _..-"      `Y`      "-._
// \ JS-WIZARDS|  Nixon's   /
// \\          | Practice  //
// \\\         | Book    ///
//  \\\ _..---.|.---.._ ///
//   \\`_..---.Y.---.._`//
//    '`               `'
// ** Simple canvas shield defender game **
//
// Todos: 
//       Replace objects with sprites
//       Finish the destroying of the objects
//       Implement random speed for the attackers
//       Implement spawn of the attackers
//       Implement movements for the player/target 
//       Implement weapons (?)
//       Implement touch functionality

//IMPORT FEW GENERAL FUNCTIONS
import utils, { randomIntFromRange, distance, randomColor } from './utils'

//BUILD THE CANVAS
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 0.8

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}


const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
  target.clickToPosition(mouse.x,mouse.y)
})

addEventListener('click', (event) =>{
 makeball(mouse.x,mouse.y) //MAKE A BALL ON CLICK EVENT
 //target.clickToPosition(mouse.x,mouse.y)
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Balls are the enemies or so called meteors - currently created by click
class Ball {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.roundPosition = 0 
    this.damage = Math.floor(this.radius/3) // Damage of the balls depends of their size
    this.speed = 0.1
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  moveBall(){
    var dx = (target.x - this.x) * gravity;
    var dy = (target.y - this.y) * gravity;
    var distance = Math.sqrt(dx*dx + dy*dy);
    if(distance+this.radius > target.size){
      dx *= 5/distance * this.speed;
      dy *= 5/distance * this.speed;
    }
    this.x += dx;
    this.y += dy;
     
    //roundposition represents the angle in radians, from the center of ball to the center of the target

    this.roundPosition = (Math.atan2(this.y-(target.y), this.x-(target.x)) * 180 / Math.PI) * (Math.PI / 180)   
    if(distance-(this.radius+10) <= target.shieldDist+10 && distance+this.radius >= target.shieldDist-5){
          if(this.roundPosition > target.startposition && this.roundPosition < target.endposition){
            
                // TODO - THE REMOVAL OF THE BALLS IS NOT DONE YET
                objects.pop()
          }
        }
        if(distance<target.size){
          target.health -= this.damage
          console.log(target.health)
          objects.pop()
        }
    }
    /*
    // Simple falling - gravity simulation for later use
    if(this.y + this.radius + this.dy > canvas.height){
      this.dy = -this.dy * friction
    }else if(this.y + this.radius<canvas.height){
      this.dy += gravity
    }
    this.y+=this.dy;
      */
 
  update() {
    this.moveBall()
    this.draw()
  }
}

// Circle is representing the player object - he is the so called Target object.

class Circle {
  constructor(size){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.size = size
    this.startposition = 0
    this.endposition = Math.PI/2
    this.shieldDist = 40
    this.health = 100
  }
  clickToPosition(x,y){
    this.endposition = (Math.atan2(y-(this.y), x-(this.x)) * 180 / Math.PI) * (Math.PI / 180) +0.3
    this.startposition = this.endposition - 0.6
    //console.log(`${this.startposition} and ${this.endposition}`)
  }
  
  draw(){
    c.lineWidth = 5
    c.beginPath()
    c.arc(this.x,this.y,this.size+this.shieldDist,this.startposition,this.endposition);
    c.stroke()
  }

  update(){
    this.draw();
  }

}

// Implementation
let objects
let player
let target

function init() {
  

objects = []
player = []
target = new Circle(40);

player.push(target)

/*
// OTHER FUNCTIONS FOR LATER USE - ESPECIALLY FOR CREATING NON OVERLAPPING ENEMIES 

let numberOfObjects = 100;
let overLapp = false;
let safetySwitch = 5000;
let safetyCounter = 0;

 FILL THE SCREEN WITH NON OVERLAPPING BALLS
while(objects.length < numberOfObjects && safetyCounter < safetySwitch){

  let ball = new Ball(randomIntFromRange(0,canvas.width),randomIntFromRange(0,canvas.height),20,randomColor(colors))

  for(let i=0; i < objects.length; i++){
    let previousObject = objects[i]
    overLapp = false;
    if(distance(ball.x, ball.y, previousObject.x, previousObject.y) < ball.radius + previousObject.radius){
        overLapp = true;
        break;
    }
    if(ball.radius + ball.y > canvas.height || ball.radius + ball.x > canvas.width || ball.radius + ball.y < 0 || ball.radius + ball.x < 0){
      overLapp = true;
      break;
    }
  }
  if(!overLapp){
    objects.push(ball)
  }
  safetyCounter++
}*/
}

// Simple function to make a ball - currently triggered with eventlistener on top of this code
function makeball(x,y){
  let ball = new Ball(x,y,randomIntFromRange(15,30),randomColor(colors))
  objects.push(ball)
}

// Draw screen divider on the middle of the screen, helped while figuring out the angle tracking
function drawDivider(){
  c.lineWidth = 1
  c.moveTo(canvas.width/2,0)
  c.lineTo(canvas.width/2,canvas.height)
  c.stroke()
  c.moveTo(0,canvas.height/2)
  c.lineTo(canvas.width,canvas.height/2)
  c.stroke()
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

  drawDivider()
 
//call the update of the objects (balls)
   objects.forEach(el => {
    el.update()
   })

//call the update of the player (target)
   player.forEach(el => {
     el.update()
   })
}


init()
animate()
=======
//      __..._   _...__
// _..-"      `Y`      "-._
// \ JS-WIZARDS|  Nixon's   /
// \\          | Practice  //
// \\\         | Book    ///
//  \\\ _..---.|.---.._ ///
//   \\`_..---.Y.---.._`//
//    '`               `'
// ** Simple canvas shield defender game **
//
// Todos: 
//       Replace objects with sprites
//       Finish the destroying of the objects
//       Implement random speed for the attackers
//       Implement spawn of the attackers
//       Implement movements for the player/target 
//       Implement weapons (?)
//       Implement touch functionality

//IMPORT FEW GENERAL FUNCTIONS
import utils, { randomIntFromRange, distance, randomColor } from './utils'

//BUILD THE CANVAS
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 0.8

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}


const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
  target.clickToPosition(mouse.x,mouse.y)
})

addEventListener('click', (event) =>{
 makeball(mouse.x,mouse.y) //MAKE A BALL ON CLICK EVENT
 //target.clickToPosition(mouse.x,mouse.y)
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Balls are the enemies or so called meteors - currently created by click
class Ball {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.roundPosition = 0 
    this.damage = Math.floor(this.radius/3) // Damage of the balls depends of their size
    this.speed = 0.1
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  moveBall(){
    var dx = (target.x - this.x) * gravity;
    var dy = (target.y - this.y) * gravity;
    var distance = Math.sqrt(dx*dx + dy*dy);
    if(distance+this.radius > target.size){
      dx *= 5/distance * this.speed;
      dy *= 5/distance * this.speed;
    }
    this.x += dx;
    this.y += dy;
     
    //roundposition represents the angle in radians, from the center of ball to the center of the target

    this.roundPosition = (Math.atan2(this.y-(target.y), this.x-(target.x)) * 180 / Math.PI) * (Math.PI / 180)   
    if(distance-(this.radius+10) <= target.shieldDist+10 && distance+this.radius >= target.shieldDist-5){
          if(this.roundPosition > target.startposition && this.roundPosition < target.endposition){
            
                // TODO - THE REMOVAL OF THE BALLS IS NOT DONE YET
                objects.pop()
          }
        }
        if(distance<target.size){
          target.health -= this.damage
          console.log(target.health)
          objects.pop()
        }
    }
    /*
    // Simple falling - gravity simulation for later use
    if(this.y + this.radius + this.dy > canvas.height){
      this.dy = -this.dy * friction
    }else if(this.y + this.radius<canvas.height){
      this.dy += gravity
    }
    this.y+=this.dy;
      */
 
  update() {
    this.moveBall()
    this.draw()
  }
}

// Circle is representing the player object - he is the so called Target object.

class Circle {
  constructor(size){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.size = size
    this.startposition = 0
    this.endposition = Math.PI/2
    this.shieldDist = 40
    this.health = 100
  }
  clickToPosition(x,y){
    this.endposition = (Math.atan2(y-(this.y), x-(this.x)) * 180 / Math.PI) * (Math.PI / 180) +0.3
    this.startposition = this.endposition - 0.6
    //console.log(`${this.startposition} and ${this.endposition}`)
  }
  
  draw(){
    c.lineWidth = 5
    c.beginPath()
    c.arc(this.x,this.y,this.size+this.shieldDist,this.startposition,this.endposition);
    c.stroke()
  }

  update(){
    this.draw();
  }

}

// Implementation
let objects
let player
let target

function init() {
  

objects = []
player = []
target = new Circle(40);

player.push(target)

/*
// OTHER FUNCTIONS FOR LATER USE - ESPECIALLY FOR CREATING NON OVERLAPPING ENEMIES 

let numberOfObjects = 100;
let overLapp = false;
let safetySwitch = 5000;
let safetyCounter = 0;

 FILL THE SCREEN WITH NON OVERLAPPING BALLS
while(objects.length < numberOfObjects && safetyCounter < safetySwitch){

  let ball = new Ball(randomIntFromRange(0,canvas.width),randomIntFromRange(0,canvas.height),20,randomColor(colors))

  for(let i=0; i < objects.length; i++){
    let previousObject = objects[i]
    overLapp = false;
    if(distance(ball.x, ball.y, previousObject.x, previousObject.y) < ball.radius + previousObject.radius){
        overLapp = true;
        break;
    }
    if(ball.radius + ball.y > canvas.height || ball.radius + ball.x > canvas.width || ball.radius + ball.y < 0 || ball.radius + ball.x < 0){
      overLapp = true;
      break;
    }
  }
  if(!overLapp){
    objects.push(ball)
  }
  safetyCounter++
}*/
}

// Simple function to make a ball - currently triggered with eventlistener on top of this code
function makeball(x,y){
  let ball = new Ball(x,y,randomIntFromRange(15,30),randomColor(colors))
  objects.push(ball)
}

// Draw screen divider on the middle of the screen, helped while figuring out the angle tracking
function drawDivider(){
  c.lineWidth = 1
  c.moveTo(canvas.width/2,0)
  c.lineTo(canvas.width/2,canvas.height)
  c.stroke()
  c.moveTo(0,canvas.height/2)
  c.lineTo(canvas.width,canvas.height/2)
  c.stroke()
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

  drawDivider()
 
//call the update of the objects (balls)
   objects.forEach(el => {
    el.update()
   })

//call the update of the player (target)
   player.forEach(el => {
     el.update()
   })
}


init()
animate()
>>>>>>> 58fccade8ad699eb009b8cc80dc8043a72d29f9f
