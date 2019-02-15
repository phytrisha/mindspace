let other_scenarios = [
  {
    id: "",
    text: "Max Tegmarks Scenarios",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  },
  {
    id: "",
    text: "Nick Bostroms Scenarios",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  }
];


let our_scenarios = [
  {
    id: "",
    text: "Scenario 1",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  },
  {
    id: "",
    text: "Scenario 2",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  }
];

let mainNodes = [
  {
    id: "",
    text: "Flashcards",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  },
  {
    id: "",
    text: "Scenarios",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0,
    children: [
      {
        id: "",
        text: "Our Scenarios",
        color: "#000000",
        type: "copy",
        x: 0.2,
        y: 0.05,
        z: 0.25,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        opacity: 0.5,
        marginTop: 0.1,
        circle: true,
        children: our_scenarios
      },
      {
        id: "",
        text: "Other Scenarios",
        color: "#000000",
        type: "copy",
        x: -0.2,
        y: -0.1,
        z: 0.25,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        opacity: 0.5,
        marginTop: 0.1,
        circle: true,
        children: other_scenarios
      }
    ]
  },
  {
    id: "",
    text: "Library",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0,
    children: [
      {
        id: "",
        text: "Papers",
        color: "#000000",
        type: "copy",
        x: 0.2,
        y: 0.1,
        z: -0.25,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        marginTop: 0.1,
        circle: true,
        opacity: 0.5
      },
      {
        id: "",
        text: "Books",
        color: "#000000",
        type: "copy",
        x: -0.2,
        y: 0.2,
        z: -0.25,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        marginTop: 0.1,
        circle: true,
        opacity: 0.5
      },
      {
        id: "",
        text: "Videos",
        color: "#000000",
        type: "copy",
        x: -0.2,
        y: -0.2,
        z: -0.25,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        marginTop: 0.1,
        circle: true,
        opacity: 0.5
      },
      {
        id: "",
        text: "Links",
        color: "#000000",
        type: "copy",
        x: 0.25,
        y: -0.15,
        z: -0.25,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        marginTop: 0.1,
        circle: true,
        opacity: 0.5
      }
    ]
  },
  {
    id: "",
    text: "News",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  },
  {
    id: "",
    text: "Friends",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  },
  {
    id: "",
    text: "Methods",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  },
  {
    id: "",
    text: "Oh hi there!",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0,
    children: [
      {
        id: "",
        text: "What we are working on",
        color: "#000000",
        type: "copy",
        x: 0.2,
        y: 0.1,
        z: -1,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        opacity: 0.5,
        marginTop: 0.1,
        circle: true,
      },
      {
        id: "",
        text: "Expose / One Pager",
        color: "#000000",
        type: "copy",
        x: -0.2,
        y: 0.2,
        z: -1,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        opacity: 0.5,
        marginTop: 0.1,
        circle: true,
      },
      {
        id: "",
        text: "What is Superintelligence?",
        color: "#000000",
        type: "copy",
        x: -0.2,
        y: -0.2,
        z: -1,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        opacity: 0.5,
        marginTop: 0.1,
        circle: true,
      },
      {
        id: "",
        text: "Who are we?",
        color: "#000000",
        type: "copy",
        x: 0.25,
        y: -0.15,
        z: -1,
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        opacity: 0.5,
        marginTop: 0.1,
        circle: true,
      }
    ]
  },
  {
    id: "",
    text: "Ethics",
    color: "#000000",
    type: "copy",
    x: 0,
    y: 0,
    z: 0,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0
  }
];

const images = [
    {
        x: 0,
        y: 0,
        z: 0,
        src: "images/test.jpeg"
    },
    {
        x: 0,
        y: 0,
        z: 0,
        src: "images/test2.jpeg"
    }
]