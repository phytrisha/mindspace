function createLineConnectionFromOrigin(b, parent) {
    // Create Element and assign ID
    let entityEl = document.createElement('a-entity')
    entityEl.id = "elem-" + ELEMENT_COUNTER

    let a_posString = '0, 0, 0'
    let b_posString = b.x + ", " + b.y + ", " + b.z

    entityEl.setAttribute('line', {
        start: a_posString,
        end: b_posString,
        color: '#FF0000',
        opacity: 0.5
    })

    let parentEl = document.querySelector(parent)
    parentEl.appendChild(entityEl)

    ELEMENT_COUNTER++
}

function addCircleFill(pos, rot, parent) {
    // Create Element and assign ID
    let entityEl = document.createElement('a-circle')
    entityEl.id = 'elem-' + ELEMENT_COUNTER

    entityEl.setAttribute("rotation", {
        x: rot.x,
        y: rot.y,
        z: rot.z
    })

    entityEl.setAttribute("position", {
        x: pos.x,
        y: pos.y,
        z: pos.z
    });

    entityEl.setAttribute('color', '#FF0000')
    entityEl.setAttribute('opacity', "0.1")
    entityEl.setAttribute('radius', "0.025")

    let parentEl = document.querySelector(parent)
    parentEl.appendChild(entityEl)

    ELEMENT_COUNTER++
}

function addCircle(pos, rot, parent) {
    // Create Element and assign ID
    let entityEl = document.createElement('a-ring')
    entityEl.id = 'elem-' + ELEMENT_COUNTER

    entityEl.setAttribute("rotation", {
        x: rot.x,
        y: rot.y,
        z: rot.z
    })

    entityEl.setAttribute("position", {
        x: pos.x,
        y: pos.y,
        z: pos.z
    });

    entityEl.setAttribute('color', '#FF0000')
    entityEl.setAttribute('radius-inner', "0.025")
    entityEl.setAttribute("radius-outer", "0.026")
    
    let parentEl = document.querySelector(parent)
    parentEl.appendChild(entityEl)

    ELEMENT_COUNTER++

    addCircleFill(pos, rot, parent)
}