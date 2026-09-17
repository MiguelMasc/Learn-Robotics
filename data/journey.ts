export const stages = [
  {
    id: 0,
    title: "Find your footing",
    period: "High school → university",
    description:
      "Every robot begins with a few simple ideas. Explore how things move, get comfortable with the math, and try telling a computer what to do.",
    milestone:
      "Model a small wheeled robot on paper and in Python. Explain its units, forces and motion.",
    readiness:
      "You can rearrange equations, use trigonometry, draw a force diagram and debug a short program.",
  },
  {
    id: 1,
    title: "Build the foundations",
    period: "Undergraduate · year 1",
    description:
      "Discover what goes into a robot: a body, a power source, and instructions to follow. Start making connections as you try each piece.",
    milestone:
      "Design a simple robot chassis, estimate its power needs and test a small software model.",
    readiness:
      "You can use derivatives and matrices, read a circuit diagram, make a CAD model and explain basic design risks.",
  },
  {
    id: 2,
    title: "Understand the pieces",
    period: "Undergraduate · year 2",
    description:
      "How does a robot notice the world around it? Explore its sensors, motors and moving parts, then try small experiments to see how they work.",
    milestone:
      "Create a sensor and motor experiment, collect repeatable data, and explain the difference between prediction and measurement.",
    readiness:
      "You can model dynamics, calibrate a sensor, program a microcontroller and report uncertainty in an experiment.",
  },
  {
    id: 3,
    title: "Make a robot autonomous",
    period: "Undergraduate · year 3",
    description:
      "Bring the pieces together. Help a robot work out where it is, decide where to go, and adjust its movement along the way.",
    milestone:
      "Build a simulated robot that estimates its state, plans a collision-free path and follows it with feedback.",
    readiness:
      "You can explain coordinate transforms, implement a state estimator and planner, and debug a complete sensing-to-action loop.",
  },
  {
    id: 4,
    title: "Integrate & specialize",
    period: "Undergraduate · year 4",
    description:
      "Build a robot that does something useful, then follow your interests. You might explore flying robots, helping hands, or machines that work alongside people.",
    milestone:
      "Complete a capstone with requirements, a working demonstration, repeated evaluations and a documented failure analysis.",
    readiness:
      "You can integrate a robot independently, justify design tradeoffs and compare its performance against measurable requirements.",
  },
  {
    id: 5,
    title: "Investigate & contribute",
    period: "Master’s · years 1–2",
    description:
      "Follow a question that hasn’t been answered yet. Go deeper into a field you enjoy, learn from other researchers, and put your own ideas to the test.",
    milestone:
      "Deliver a thesis or substantial systems project with a clear question, a credible baseline, quantitative evidence and reproducible artifacts.",
    readiness:
      "You can critically read research, reproduce a result, defend your methods and state what your work does—and does not—establish.",
  },
];
export const tracks = [
  {
    title: "Autonomy & navigation",
    description:
      "Robots that understand their surroundings and make decisions in uncertain places.",
    topics: [
      "state-estimation",
      "slam",
      "mobile-navigation",
      "belief-planning",
      "multi-robot",
    ],
  },
  {
    title: "Dynamics & control",
    description:
      "Stable, efficient motion under physical constraints and model uncertainty.",
    topics: [
      "rigid-body-dynamics",
      "linear-control",
      "system-identification",
      "optimal-control",
      "nonlinear-control",
    ],
  },
  {
    title: "Manipulation & embodiment",
    description:
      "Arms, hands and bodies that interact with objects and contact.",
    topics: [
      "kinematics",
      "manipulation-grasping",
      "compliant-design",
      "optimal-control",
      "legged-robotics",
    ],
  },
  {
    title: "Perception & robot learning",
    description:
      "Geometry, data and experience turned into useful robot behavior.",
    topics: [
      "computer-vision",
      "deep-learning",
      "advanced-perception",
      "reinforcement-learning",
      "imitation-learning",
      "sim-to-real",
    ],
  },
  {
    title: "Human-centered robotics",
    description:
      "Robot behavior shaped around human needs, abilities and collaboration.",
    topics: [
      "human-robot-interaction",
      "safety-ethics",
      "haptics-teleoperation",
      "medical-assistive",
      "verification",
    ],
  },
  {
    title: "Field & aerial systems",
    description:
      "Complete robots that operate with limited power, sensing and intervention.",
    topics: [
      "mobile-navigation",
      "embedded-realtime",
      "aerial-robotics",
      "field-robotics",
      "systems-engineering",
    ],
  },
];
