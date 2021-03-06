let ELEMENT_COUNTER = 0;
let ELEMENTS = [];

let charWidth = 0.025

const context = "a-scene"

function createTextField(values, parent) {
  // Create Element and assign ID
  let entityEl = document.createElement("a-entity");
  entityEl.id = "elem-" + ELEMENT_COUNTER;
  entityEl.setAttribute('array_position', ELEMENT_COUNTER)

  // Rotation of Element
  let xRot = values.rot_x
  let yRot = values.rot_y
  let zRot = values.rot_z

  if (parent) {
    xRot += parent.rot_x
    yRot += parent.rot_y
    zRot += parent.rot_z
  }

  entityEl.setAttribute("rotation", {
    x: xRot,
    y: yRot,
    z: zRot
  });

  // Position of Element
  let xVal = values.x
  let yVal = values.y
  let zVal = values.z
  if (values.marginTop) { yVal = values.y + values.marginTop; }

  // Add values of parent if available
  if (parent) {
    xVal += parent.x
    yVal += parent.y
    zVal += parent.z
  }

  // Apply position
  entityEl.setAttribute("position", {
    x: xVal,
    y: yVal,
    z: zVal
  });

  // Styling of Text
  let elOpacity = 1
  if (values.opacity) { elOpacity = values.opacity }

  // Content of Element
  entityEl.setAttribute("text", {
    color: values.color,
    align: "center",
    value: values.text,
    font: "sourcecodepro",
    opacity: elOpacity
  });

  // Add Element to Scene
  let contextEl = document.querySelector(context)
  contextEl.appendChild(entityEl);

  // Increment, to create unique IDs
  ELEMENT_COUNTER++

  // Add Circle
  if (values.circle) {
    let circlePos = { x: xVal, y: values.y + parent.y, z: zVal }
    let circleRot = { x: xRot, y: yRot, z: zRot }
    addCircle(circlePos, circleRot, context);
  }

  let hitboxPos = {
    x: xVal,
    y: yVal,
    z: zVal
  }

  let hitboxRot = {
    x: xRot,
    y: yRot,
    z: zRot
  }

  let hitboxWidth = values.text.length

  addHitbox(hitboxPos, hitboxRot, hitboxWidth)

  return entityEl.id
}

function createImage(values) {
  // Create Element and assign ID
  let entityEl = document.createElement("a-image");
  entityEl.id = "elem-" + ELEMENT_COUNTER;

  // Transformation of Element
  entityEl.setAttribute("position", {
    x: values.x,
    y: values.y,
    z: values.z
  });

  entityEl.setAttribute("rotation", {
    x: 0,
    y: 45,
    z: 0
  });

  entityEl.setAttribute("cursor-listener", "");

  // Content of Element
  entityEl.setAttribute("src", values.src);

  // Add Element to Scene
  sceneEl.appendChild(entityEl);

  // Increment, to create unique IDs
  ELEMENT_COUNTER++;
}

function addHitbox(pos, rot, size) {
  // Create Element and assign ID
  let entityEl = document.createElement('a-plane')
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

  let hitboxWidth = charWidth * size
  hitboxWidth = hitboxWidth.toString()

  entityEl.setAttribute('color', '#FF0000')
  entityEl.setAttribute('height', "0.1")
  entityEl.setAttribute("width", hitboxWidth)

  // ONLY FOR DEBUGGING
  entityEl.setAttribute('wireframe', 'true')
  entityEl.setAttribute('opacity', '1')

  entityEl.addEventListener('click', moveCameraToTarget);

  let parentEl = document.querySelector(context)
  parentEl.appendChild(entityEl)

  ELEMENT_COUNTER++
}

// Add main nodes
for (let i = 0; i < mainNodes.length; i++) {
  mainNodes[i].id = createTextField(mainNodes[i])

  // If Node has children, build them as well
  if (mainNodes[i].children) {
      for (let j = 0; j < mainNodes[i].children.length; j++) {
          mainNodes[i].children[j].id = createTextField(mainNodes[i].children[j], mainNodes[i])
          createLineConnectionFromOrigin(mainNodes[i].children[j], '#' + mainNodes[i].id);
      }
  }
}

// Add all images
// for (let i = 0; i < images.length; i++) {
//     createImage(images[i])
// }

