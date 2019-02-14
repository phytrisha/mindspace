function moveCameraToTarget(e) {
    let pos = e.target.object3D.position;
    let targetPositionString = pos.x + " " + pos.y + " " + pos.z;
    addCameraAnimation(targetPositionString)
}

function addCameraAnimation(targetPos) {
    let cameraAnimation = document.createElement('a-animation')

    cameraAnimation.setAttribute('attribute', 'position')
    cameraAnimation.setAttribute('to', targetPos)

    cameraAnimation.addEventListener('animationend', function(){
        this.remove()
    })

    document.getElementById('mainCamera').appendChild(cameraAnimation)
}