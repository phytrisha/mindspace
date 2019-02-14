console.log("Ready")

let circleSize = 1

// Place main nodes in circle
for (let i = 0; i < mainNodes.length; i++) {
    mainNodes[i].x = Math.cos( Math.PI * 2 / mainNodes.length * i ) * circleSize
    mainNodes[i].z = Math.sin( Math.PI * 2 / mainNodes.length * i ) * circleSize

    mainNodes[i].rot_y = -90 - ( 360 / mainNodes.length ) * i
}

