function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randomizeColor() {
    var r = getRandomInt(0,255)
    var g = getRandomInt(0,255)
    var b = getRandomInt(0,255)
    console.log(r,g,b)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b+ ')'
}