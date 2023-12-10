const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId;

const startColorChange = () => {
    console.log(randomColor())
    document.body.style.backgroundColor = randomColor()
}

document.getElementById('start').addEventListener('click', function(e){
    if (!intervalId) {
        intervalId = setInterval(startColorChange,1000)
    }
   
})

document.getElementById('stop').addEventListener('click', function(e){
    console.log("Stopped")
    clearInterval(intervalId)
    intervalId = null
})
