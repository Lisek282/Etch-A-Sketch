const canvasContainer = document.getElementById("canvasContainer")
const clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener('click', clearCanvas)

function clearCanvas(){
  const allPixels = document.querySelectorAll('.pixel')
  allPixels.forEach(element => element.style.background = 'white')
}

function createPixel() {
  const pixel = document.createElement('div')
  
  function draw(){
    pixel.style.background = "black"
  }
  
  canvasContainer.addEventListener("mousedown", () => {
    pixel.addEventListener('mousemove', draw)
  })
  
  canvasContainer.addEventListener('mouseup', () => {
    pixel.removeEventListener('mousemove', draw)
  })
  
  pixel.classList.add('pixel')
  canvasContainer.appendChild(pixel)
}

function createCanvas(columns, rows){
  const canvasSize = columns * columns
  
  canvasContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${columns}, auto)`)
  
  for (let i = 0; i < canvasSize; i++){
    createPixel()
  }
}

createCanvas(64)