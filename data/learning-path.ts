export type LearningPathLevel = "Foundation" | "Intermediate" | "Advanced";

export type LearningPathCourse = {
  id: string;
  title: string;
  summary: string;
  level: LearningPathLevel;
  area:
    | "Mathematics"
    | "Computing"
    | "Physics & Electronics"
    | "Robot Design"
    | "Sensing & Perception"
    | "Planning, Learning & Control"
    | "Interaction"
    | "Integration & Research";
  prerequisites: string[];
};

export const learningPathCourses: LearningPathCourse[] = [
  {
    "id": "calculus-1",
    "title": "Calculus I",
    "summary": "Model continuous change, motion, and sensitivity with limits and derivatives.",
    "level": "Foundation",
    "area": "Mathematics",
    "prerequisites": []
  },
  {
    "id": "calculus-2",
    "title": "Calculus II",
    "summary": "Use integration and series to model accumulated change and approximate systems.",
    "level": "Foundation",
    "area": "Mathematics",
    "prerequisites": [
      "calculus-1"
    ]
  },
  {
    "id": "multivariable-calculus",
    "title": "Multivariable & Vector Calculus",
    "summary": "Work with gradients, Jacobians, and coordinate changes used throughout robotics.",
    "level": "Foundation",
    "area": "Mathematics",
    "prerequisites": [
      "calculus-2"
    ]
  },
  {
    "id": "linear-algebra",
    "title": "Linear Algebra",
    "summary": "Use vectors, matrices, transformations, eigenstructure, and least squares.",
    "level": "Foundation",
    "area": "Mathematics",
    "prerequisites": []
  },
  {
    "id": "discrete-mathematics",
    "title": "Discrete Mathematics",
    "summary": "Build the graph, logic, combinatorics, and proof foundation for algorithms.",
    "level": "Foundation",
    "area": "Mathematics",
    "prerequisites": []
  },
  {
    "id": "differential-equations",
    "title": "Differential Equations & Dynamical Systems",
    "summary": "Describe how motors, mechanisms, circuits, and controlled systems evolve over time.",
    "level": "Intermediate",
    "area": "Mathematics",
    "prerequisites": [
      "calculus-2",
      "linear-algebra"
    ]
  },
  {
    "id": "probability-statistics",
    "title": "Probability & Statistics",
    "summary": "Represent uncertainty and evaluate sensor data, estimates, and experiments.",
    "level": "Intermediate",
    "area": "Mathematics",
    "prerequisites": [
      "calculus-2",
      "linear-algebra"
    ]
  },
  {
    "id": "numerical-optimization",
    "title": "Numerical Methods & Optimization",
    "summary": "Solve constrained robotics problems when analytic solutions are unavailable.",
    "level": "Intermediate",
    "area": "Mathematics",
    "prerequisites": [
      "multivariable-calculus",
      "linear-algebra",
      "programming-robotics"
    ]
  },
  {
    "id": "programming-robotics",
    "title": "Programming for Robotics",
    "summary": "Build reliable Python programs for simulation, data, algorithms, and robot tooling.",
    "level": "Foundation",
    "area": "Computing",
    "prerequisites": []
  },
  {
    "id": "embedded-c",
    "title": "Computer Systems & Embedded C",
    "summary": "Understand memory, processors, low-level execution, and C for robot hardware.",
    "level": "Foundation",
    "area": "Computing",
    "prerequisites": [
      "programming-robotics"
    ]
  },
  {
    "id": "data-structures",
    "title": "Data Structures & Algorithms",
    "summary": "Choose efficient structures and algorithms for planning, mapping, and perception.",
    "level": "Intermediate",
    "area": "Computing",
    "prerequisites": [
      "programming-robotics",
      "discrete-mathematics"
    ]
  },
  {
    "id": "software-engineering",
    "title": "Software Engineering for Robotics",
    "summary": "Design testable interfaces, packages, tooling, and maintainable robot systems.",
    "level": "Intermediate",
    "area": "Computing",
    "prerequisites": [
      "programming-robotics",
      "data-structures"
    ]
  },
  {
    "id": "mechanics-dynamics",
    "title": "Mechanics & Dynamics",
    "summary": "Connect forces, energy, rigid bodies, structures, and motion to robot design.",
    "level": "Foundation",
    "area": "Physics & Electronics",
    "prerequisites": [
      "calculus-1"
    ]
  },
  {
    "id": "electricity-magnetism",
    "title": "Electricity, Magnetism & Optics",
    "summary": "Learn the physical basis of circuits, motors, electromagnetic sensing, and cameras.",
    "level": "Foundation",
    "area": "Physics & Electronics",
    "prerequisites": [
      "calculus-2",
      "mechanics-dynamics"
    ]
  },
  {
    "id": "circuits-signals",
    "title": "Electronic Circuits & Signals",
    "summary": "Build and analyze analog interfaces, filters, signals, and robot electronics.",
    "level": "Intermediate",
    "area": "Physics & Electronics",
    "prerequisites": [
      "electricity-magnetism",
      "differential-equations"
    ]
  },
  {
    "id": "microcontrollers",
    "title": "Digital Logic & Microcontroller Systems",
    "summary": "Bridge digital hardware, real-time I/O, firmware, and device interfaces.",
    "level": "Intermediate",
    "area": "Physics & Electronics",
    "prerequisites": [
      "embedded-c"
    ]
  },
  {
    "id": "sensor-systems",
    "title": "Sensors & Sensor Systems",
    "summary": "Select, calibrate, characterize, and integrate physical robot sensors.",
    "level": "Intermediate",
    "area": "Sensing & Perception",
    "prerequisites": [
      "circuits-signals",
      "probability-statistics",
      "programming-robotics"
    ]
  },
  {
    "id": "computer-vision",
    "title": "Computer Vision & Machine Perception",
    "summary": "Recover geometry, motion, objects, and task-relevant meaning from images.",
    "level": "Advanced",
    "area": "Sensing & Perception",
    "prerequisites": [
      "linear-algebra",
      "probability-statistics",
      "multivariable-calculus",
      "programming-robotics"
    ]
  },
  {
    "id": "localization-mapping",
    "title": "Robot Localization & Mapping",
    "summary": "Estimate robot state and construct maps from noisy, asynchronous measurements.",
    "level": "Advanced",
    "area": "Sensing & Perception",
    "prerequisites": [
      "linear-algebra",
      "probability-statistics",
      "sensor-systems",
      "programming-robotics"
    ]
  },
  {
    "id": "mechatronic-design",
    "title": "Mechatronic System Design",
    "summary": "Integrate mechanisms, electronics, embedded computing, sensing, and actuation.",
    "level": "Intermediate",
    "area": "Robot Design",
    "prerequisites": [
      "mechanics-dynamics",
      "circuits-signals",
      "microcontrollers",
      "programming-robotics"
    ]
  },
  {
    "id": "manufacturing",
    "title": "Manufacturing & Prototyping",
    "summary": "Turn robot concepts into buildable, testable hardware with realistic processes.",
    "level": "Intermediate",
    "area": "Robot Design",
    "prerequisites": [
      "mechanics-dynamics"
    ]
  },
  {
    "id": "robot-kinematics",
    "title": "Robot Kinematics & Dynamics",
    "summary": "Model robot transforms, velocity, force, trajectories, and dynamic behavior.",
    "level": "Advanced",
    "area": "Robot Design",
    "prerequisites": [
      "linear-algebra",
      "multivariable-calculus",
      "differential-equations",
      "mechanics-dynamics",
      "programming-robotics"
    ]
  },
  {
    "id": "feedback-control",
    "title": "Feedback Control",
    "summary": "Regulate robot motion despite disturbances, noise, delays, and model error.",
    "level": "Advanced",
    "area": "Planning, Learning & Control",
    "prerequisites": [
      "differential-equations",
      "linear-algebra",
      "robot-kinematics",
      "circuits-signals"
    ]
  },
  {
    "id": "advanced-control",
    "title": "Advanced & Optimal Control",
    "summary": "Apply optimal, predictive, and constrained control to complex robot behavior.",
    "level": "Advanced",
    "area": "Planning, Learning & Control",
    "prerequisites": [
      "feedback-control",
      "numerical-optimization"
    ]
  },
  {
    "id": "motion-planning",
    "title": "Motion Planning & Decision Making",
    "summary": "Choose feasible actions and trajectories under geometric and physical constraints.",
    "level": "Advanced",
    "area": "Planning, Learning & Control",
    "prerequisites": [
      "data-structures",
      "robot-kinematics",
      "probability-statistics",
      "programming-robotics"
    ]
  },
  {
    "id": "robot-learning",
    "title": "Machine Learning for Robotics",
    "summary": "Train and evaluate models that improve robot perception and action selection.",
    "level": "Advanced",
    "area": "Planning, Learning & Control",
    "prerequisites": [
      "linear-algebra",
      "probability-statistics",
      "numerical-optimization",
      "programming-robotics"
    ]
  },
  {
    "id": "manipulation",
    "title": "Robot Manipulation",
    "summary": "Combine contact mechanics, grasping, planning, and control for physical interaction.",
    "level": "Advanced",
    "area": "Interaction",
    "prerequisites": [
      "robot-kinematics",
      "feedback-control",
      "motion-planning"
    ]
  },
  {
    "id": "mobile-robotics",
    "title": "Mobile Robotics & Locomotion",
    "summary": "Integrate estimation, planning, sensing, and control for robots that move.",
    "level": "Advanced",
    "area": "Interaction",
    "prerequisites": [
      "localization-mapping",
      "feedback-control",
      "motion-planning",
      "sensor-systems"
    ]
  },
  {
    "id": "human-robot-interaction",
    "title": "Human-Robot Interaction",
    "summary": "Design and evaluate robot behavior around people, trust, and shared control.",
    "level": "Advanced",
    "area": "Interaction",
    "prerequisites": [
      "probability-statistics",
      "software-engineering"
    ]
  },
  {
    "id": "systems-capstone",
    "title": "Robotics Systems Integration & Capstone",
    "summary": "Build and validate a complete portfolio-grade robot across all major subsystems.",
    "level": "Advanced",
    "area": "Integration & Research",
    "prerequisites": [
      "mechatronic-design",
      "software-engineering",
      "sensor-systems",
      "feedback-control"
    ]
  },
  {
    "id": "robotics-research",
    "title": "Robotics Research & Thesis",
    "summary": "Form research questions, run defensible experiments, and communicate original results.",
    "level": "Advanced",
    "area": "Integration & Research",
    "prerequisites": [
      "probability-statistics",
      "software-engineering",
      "robot-kinematics"
    ]
  }
];
