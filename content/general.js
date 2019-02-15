let other_scenarios = [
  {
    id: "",
    text: "Max Tegmarks Scenarios",
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
    color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
        color: "#FFFFFF",
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
    color: "#FFFFFF",
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