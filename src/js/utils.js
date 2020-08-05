function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

//Filter out the object from the array of objects
function destroy(arr, id){
    if(arr.length>1){
      arr = arr.filter((x) => (x.ballid != id))
    }
    else{
      arr.pop()
    }
    return arr
  }


module.exports = { randomIntFromRange, randomColor, distance, destroy }
