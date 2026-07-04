export type CurriculumStage = {
  id: string;
  label: string;
  title: string;
  summary: string;
  outcomes: string[];
  topics: string[];
};

export type Resource = {
  title: string;
  category: "foundation" | "robotics" | "ai";
  type: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  href: string;
  description: string;
};

export type Project = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Capstone";
  focus: string;
  summary: string;
  deliverable: string;
};

export const curriculumStages: CurriculumStage[] = [
  {
    id: "foundations",
    label: "Year 1",
    title: "Foundations",
    summary:
      "Build the math, programming, and physics base needed to reason about robots as moving physical systems.",
    topics: ["Calculus", "Python", "Mechanics", "Linear algebra", "Robotics overview"],
    outcomes: [
      "Write clean Python programs and simple simulations.",
      "Use vectors, matrices, and physics to describe motion.",
      "Explain how sensing, planning, and control fit together.",
    ],
  },
  {
    id: "core-engineering",
    label: "Year 2",
    title: "Core Engineering",
    summary:
      "Add algorithms, electronics, probability, and dynamic systems so software can meet hardware cleanly.",
    topics: [
      "Differential equations",
      "Data structures",
      "E&M",
      "Probability",
      "Circuits",
    ],
    outcomes: [
      "Analyze dynamic behavior and uncertainty.",
      "Choose data structures for planning and perception tasks.",
      "Prototype and debug basic electronic subsystems.",
    ],
  },
  {
    id: "robotics-core",
    label: "Year 3",
    title: "Robotics Core",
    summary:
      "Study the robot-specific core: kinematics, dynamics, controls, sensors, embedded systems, and ROS 2.",
    topics: ["Kinematics", "Controls", "Sensors", "Embedded systems", "ROS 2"],
    outcomes: [
      "Model robot motion with transforms and Jacobians.",
      "Implement PID and state-space control loops.",
      "Build ROS 2 nodes, topics, services, and transforms.",
    ],
  },
  {
    id: "specialization",
    label: "Year 4",
    title: "Specialization and Capstone",
    summary:
      "Turn the core into autonomy with perception, planning, learning, safety, and an integrated capstone.",
    topics: ["Computer vision", "Motion planning", "Machine learning", "Safety", "Capstone"],
    outcomes: [
      "Use vision and learning models for robot perception.",
      "Plan paths with graph search, sampling, and trajectories.",
      "Deliver an integrated robot system with documentation.",
    ],
  },
];

export const resources: Resource[] = [
  {
    title: "MIT OCW 18.06 Linear Algebra",
    category: "foundation",
    type: "Math",
    level: "Beginner",
    href: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    description:
      "A strong base for kinematics, estimation, controls, and almost every serious robotics topic.",
  },
  {
    title: "Modern Robotics",
    category: "robotics",
    type: "Robotics",
    level: "Intermediate",
    href: "https://modernrobotics.northwestern.edu/",
    description:
      "Book, videos, and software for rigid-body motion, kinematics, dynamics, control, and planning.",
  },
  {
    title: "ROS 2 Documentation",
    category: "robotics",
    type: "ROS 2",
    level: "All levels",
    href: "https://docs.ros.org/",
    description:
      "The reference point for nodes, topics, services, transforms, packages, and middleware concepts.",
  },
  {
    title: "Stanford CS 123",
    category: "robotics",
    type: "Course",
    level: "Beginner",
    href: "https://cs123-stanford-2024.readthedocs.io/en/latest/",
    description:
      "A hands-on introduction to building AI-enabled robots with modern software and hardware tools.",
  },
  {
    title: "Hugging Face Robotics Course",
    category: "ai",
    type: "AI",
    level: "Beginner",
    href: "https://huggingface.co/learn/robotics-course/unit0/1",
    description:
      "Introductory robotics lessons connected to learning-based systems and open-source tooling.",
  },
  {
    title: "NVIDIA Physical AI Learning",
    category: "ai",
    type: "Simulation",
    level: "Intermediate",
    href: "https://docs.nvidia.com/learning/physical-ai/",
    description:
      "Self-paced courses for Isaac Sim, Isaac Lab, Isaac ROS, digital twins, and sim-to-real workflows.",
  },
];

export const projects: Project[] = [
  {
    title: "2D Robot Simulator",
    level: "Beginner",
    focus: "Python, kinematics, plotting, odometry",
    summary:
      "Build a differential-drive simulator with obstacles, path traces, and noisy odometry.",
    deliverable: "Notebook, simulator script, and demo GIF.",
  },
  {
    title: "Line Following Robot",
    level: "Beginner",
    focus: "Sensors, motor control, firmware",
    summary:
      "Use a microcontroller, reflectance sensors, and motor control to follow a taped path.",
    deliverable: "Wiring diagram, firmware, and tuning notes.",
  },
  {
    title: "Programmable RC Car",
    level: "Beginner",
    focus: "Chassis, motor control, wireless commands, power safety",
    summary:
      "Build a small remote-controlled car, then add telemetry and speed feedback as a robotics foundation.",
    deliverable: "Proposal, wiring diagram, firmware, test log, and demo video.",
  },
  {
    title: "PID Balancing Rig",
    level: "Intermediate",
    focus: "Closed-loop control, logging, tuning",
    summary:
      "Instrument a pendulum or small balance platform and tune a controller using real data.",
    deliverable: "Control log, plots, and parameter explanation.",
  },
  {
    title: "ROS 2 Sensor Dashboard",
    level: "Intermediate",
    focus: "Nodes, topics, transforms, visualization",
    summary:
      "Create nodes for IMU, encoder, and camera data, then visualize robot state over time.",
    deliverable: "ROS 2 package, launch file, and architecture diagram.",
  },
  {
    title: "Autonomous Room Mapper",
    level: "Advanced",
    focus: "Mapping, navigation, simulation",
    summary:
      "Combine odometry, LiDAR or depth sensing, mapping, and navigation in simulation first.",
    deliverable: "Map output, navigation demo, and postmortem.",
  },
  {
    title: "Mobile Manipulator",
    level: "Capstone",
    focus: "Perception, planning, control, safety",
    summary:
      "Integrate the whole stack into a robot that finds, approaches, and moves objects.",
    deliverable: "Public repo, build guide, test videos, and final writeup.",
  },
];
