const canvasContainer = document.getElementById("canvasContainer")
const clearBtn = document.getElementById("clearBtn")
const gridSizeBtn = document.getElementById("gridSizeBtn")

clearBtn.addEventListener('click', clearCanvas)
gridSizeBtn.addEventListener('click', getGridSize)


function createPixel() {
  const pixel = document.createElement('div')
  
  function draw(color = 'black'){ 
    pixel.style.background = color
  }
  
  pixel.addEventListener('mouseenter', () => draw())
  pixel.classList.add('pixel')
  canvasContainer.appendChild(pixel)
}

function createCanvas(columns){
  const canvasSize = columns * columns
  
  canvasContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${columns}, auto)`)
  
  for (let i = 0; i < canvasSize; i++){
    createPixel()
  }
}

function clearCanvas(){
  const allPixels = document.querySelectorAll('.pixel')
  allPixels.forEach(element => element.style.background = 'white')
}

function getGridSize(){
  let numberOfColumns = Number(window.prompt('Type a number between 1 to 100'))

  if(numberOfColumns > 0 && numberOfColumns <= 100){
    canvasContainer.innerHTML = ``
    createCanvas(numberOfColumns)
  }
  else{
    alert(`It's not a number or was out of scale`)
  } 
}

createCanvas(64)