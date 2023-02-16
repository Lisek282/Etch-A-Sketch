const canvasContainer = document.getElementById("canvasContainer")


function createPixel() {
  const pixel = document.createElement('div')

  function draw(){
    pixel.style.background = 'black'
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
    const canvasSize = columns * rows
    
    canvasContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${columns}, 10px)`)

    for (let i = 0; i < canvasSize; i++){
      createPixel()
    }
}

createCanvas(16, 16)