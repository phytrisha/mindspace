let ELEMENT_COUNTER = 0;
let ELEMENTS = [];

function createTextField(values, parent) {
  // Create Element and assign ID
  let entityEl = document.createElement("a-entity");
  entityEl.id = "elem-" + ELEMENT_COUNTER;
  entityEl.setAttribute('array_position', ELEMENT_COUNTER)

  // Transformation of Element
  let yVal = values.y;
  if (values.marginTop) { yVal = values.y + values.marginTop; }

  entityEl.setAttribute("position", {
    x: values.x,
    y: yVal,
    z: values.z
  });

  entityEl.setAttribute("rotation", {
    x: values.rot_x,
    y: values.rot_y,
    z: values.rot_z
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

  // Add Click event
  entityEl.addEventListener('click', moveCameraToTarget);

  // Add Element to Scene
  let parentEl = document.querySelector(parent)
  parentEl.appendChild(entityEl);

  // Increment, to create unique IDs
  ELEMENT_COUNTER++;

  // Add Circle
  if (values.circle) {
    let circlePos = { x: values.x, y: values.y, z: values.z }
    addCircle(circlePos, parent);
  }

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

// Add main nodes
for (let i = 0; i < mainNodes.length; i++) {
  mainNodes[i].id = createTextField(mainNodes[i], "a-scene")

  // If Node has children, build them as well
  if (mainNodes[i].children) {
      for (let j = 0; j < mainNodes[i].children.length; j++) {
          mainNodes[i].children[j].id = createTextField(mainNodes[i].children[j], '#' + mainNodes[i].id)
          createLineConnectionFromOrigin(mainNodes[i].children[j], "#" + mainNodes[i].id);
      }
  }
}

// Add all images
// for (let i = 0; i < images.length; i++) {
//     createImage(images[i])
// }

