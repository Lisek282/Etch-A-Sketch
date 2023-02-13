const canvasContainer = document.getElementById("canvasContainer")
const pixel = document.createElement('div')
pixel.classList.add('pixel')

function createPixel() {
  const pixel = document.createElement('div')

  pixel.classList.add('pixel')
  canvasContainer.appendChild(pixel)
}

function createCanvas(columns, rows){
    const canvasSize = columns * rows

    for (let i = 0; i < canvasSize; i++){
      createPixel()
    }
}

createCanvas(4, 4)