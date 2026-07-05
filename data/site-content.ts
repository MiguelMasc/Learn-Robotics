export type CurriculumStage = {
  id: string;
  label: string;
  title: string;
  summary: string;
  emphasis: string;
  outcomes: string[];
  topics: string[];
  checkpoints: string[];
  practice: string[];
};

export type Resource = {
  title: string;
  category: "foundation" | "robotics" | "ai";
  type: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  href: string;
  description: string;
  cost: "Free" | "Free audit" | "Paid" | "Book";
  useWhen: string;
  tags: string[];
};

export type Project = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Capstone";
  focus: string;
  summary: string;
  deliverable: string;
  stage: string;
  learningGoals: string[];
  constraints: string[];
  milestones: string[];
};

export const curriculumStages: CurriculumStage[] = [
  {
    id: "foundations",
    label: "Stage 1",
    title: "Foundations",
    summary:
      "Build the math, programming, and physics base needed to reason about robots as moving physical systems.",
    emphasis: "Learn to describe motion, write small simulations, and explain robot behavior with math instead of guesswork.",
    topics: ["Calculus", "Python", "Mechanics", "Linear algebra", "Robotics overview"],
    outcomes: [
      "Write clean Python programs and simple simulations.",
      "Use vectors, matrices, and physics to describe motion.",
      "Explain how sensing, planning, and control fit together.",
    ],
    checkpoints: [
      "Simulate a point robot moving through 2D space.",
      "Plot position, velocity, and acceleration from sampled data.",
      "Explain frames, vectors, and basic forces in plain language.",
    ],
    practice: [
      "Spend most build time in Python notebooks or small scripts.",
      "Keep a short engineering log for every mini-experiment.",
      "Pair every math topic with a visible robot-motion example.",
    ],
  },
  {
    id: "core-engineering",
    label: "Stage 2",
    title: "Core Engineering",
    summary:
      "Add algorithms, electronics, probability, and dynamic systems so software can meet hardware cleanly.",
    emphasis: "Connect software decisions to physical signals, circuit limits, and system behavior over time.",
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
    checkpoints: [
      "Breadboard and measure a sensor circuit safely.",
      "Use graph search to route through a grid world.",
      "Read a datasheet well enough to choose a motor driver or sensor.",
    ],
    practice: [
      "Use a multimeter before trusting software readings.",
      "Write short notes on voltage, current, timing, and failure symptoms.",
      "Convert project bugs into repeatable tests or measurements.",
    ],
  },
  {
    id: "robotics-core",
    label: "Stage 3",
    title: "Robotics Core",
    summary:
      "Study the robot-specific core: kinematics, dynamics, controls, sensors, embedded systems, and ROS 2.",
    emphasis: "Build the mental model for mobile robots: motion, feedback, sensing, transforms, and robot software architecture.",
    topics: ["Kinematics", "Controls", "Sensors", "Embedded systems", "ROS 2"],
    outcomes: [
      "Model robot motion with transforms and Jacobians.",
      "Implement PID and state-space control loops.",
      "Build ROS 2 nodes, topics, services, and transforms.",
    ],
    checkpoints: [
      "Tune a PID loop and explain the effect of each term.",
      "Estimate robot pose from encoder or IMU data.",
      "Build a small ROS 2 graph with nodes, topics, and launch files.",
    ],
    practice: [
      "Log data before tuning control loops.",
      "Draw transform trees and message flow diagrams.",
      "Separate hardware tests from autonomy tests.",
    ],
  },
  {
    id: "specialization",
    label: "Stage 4",
    title: "Specialization and Capstone",
    summary:
      "Turn the core into autonomy with perception, planning, learning, safety, and an integrated capstone.",
    emphasis: "Integrate perception, planning, and control into complete systems with clear safety and testing habits.",
    topics: ["Computer vision", "Motion planning", "Machine learning", "Safety", "Capstone"],
    outcomes: [
      "Use vision and learning models for robot perception.",
      "Plan paths with graph search, sampling, and trajectories.",
      "Deliver an integrated robot system with documentation.",
    ],
    checkpoints: [
      "Compare at least two planning or perception approaches on the same task.",
      "Run a robot behavior in simulation before hardware testing.",
      "Publish a capstone writeup with architecture, tests, failures, and demo media.",
    ],
    practice: [
      "Keep safety constraints visible in every design review.",
      "Prefer measurable demos over vague autonomy claims.",
      "Document assumptions, limits, and known failure modes.",
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
    cost: "Free",
    useWhen: "Use this when transforms, state vectors, or matrix notation start appearing in robotics material.",
    tags: ["linear algebra", "vectors", "matrices", "foundations"],
  },
  {
    title: "Modern Robotics",
    category: "robotics",
    type: "Robotics",
    level: "Intermediate",
    href: "https://modernrobotics.northwestern.edu/",
    description:
      "Book, videos, and software for rigid-body motion, kinematics, dynamics, control, and planning.",
    cost: "Free",
    useWhen: "Use this as the main robotics theory spine once vectors and matrices are comfortable.",
    tags: ["kinematics", "dynamics", "controls", "planning"],
  },
  {
    title: "ROS 2 Documentation",
    category: "robotics",
    type: "ROS 2",
    level: "All levels",
    href: "https://docs.ros.org/",
    description:
      "The reference point for nodes, topics, services, transforms, packages, and middleware concepts.",
    cost: "Free",
    useWhen: "Use this when you are ready to turn standalone robot scripts into a connected robot software stack.",
    tags: ["ROS 2", "middleware", "nodes", "tf2"],
  },
  {
    title: "Stanford CS 123",
    category: "robotics",
    type: "Course",
    level: "Beginner",
    href: "https://cs123-stanford-2024.readthedocs.io/en/latest/",
    description:
      "A hands-on introduction to building AI-enabled robots with modern software and hardware tools.",
    cost: "Free",
    useWhen: "Use this when you want a modern project-oriented bridge between robotics and AI tools.",
    tags: ["hands-on", "AI robotics", "systems", "projects"],
  },
  {
    title: "Hugging Face Robotics Course",
    category: "ai",
    type: "AI",
    level: "Beginner",
    href: "https://huggingface.co/learn/robotics-course/unit0/1",
    description:
      "Introductory robotics lessons connected to learning-based systems and open-source tooling.",
    cost: "Free",
    useWhen: "Use this when you want a gentle path into learning-based robotics concepts and tooling.",
    tags: ["AI", "learning", "open source", "beginner"],
  },
  {
    title: "NVIDIA Physical AI Learning",
    category: "ai",
    type: "Simulation",
    level: "Intermediate",
    href: "https://docs.nvidia.com/learning/physical-ai/",
    description:
      "Self-paced courses for Isaac Sim, Isaac Lab, Isaac ROS, digital twins, and sim-to-real workflows.",
    cost: "Free",
    useWhen: "Use this after you understand basic robotics and want simulation, synthetic data, or physical AI workflows.",
    tags: ["simulation", "Isaac", "sim-to-real", "physical AI"],
  },
];

export const projects: Project[] = [
  {
    slug: "2d-robot-simulator",
    title: "2D Robot Simulator",
    level: "Beginner",
    focus: "Python, kinematics, plotting, odometry",
    summary:
      "Build a differential-drive simulator with obstacles, path traces, and noisy odometry.",
    deliverable: "Notebook, simulator script, and demo GIF.",
    stage: "Foundations",
    learningGoals: [
      "Model position, heading, and velocity in 2D.",
      "Visualize robot motion and debugging traces.",
      "Add noise so simulation feels less perfect.",
    ],
    constraints: [
      "Keep the first version software-only.",
      "Use plots or animation as the main feedback loop.",
      "Document coordinate-frame assumptions.",
    ],
    milestones: [
      "Move a point robot with keyboard or scripted commands.",
      "Add differential-drive motion and path history.",
      "Add obstacles, noisy odometry, and a short demo GIF.",
    ],
  },
  {
    slug: "line-following-robot",
    title: "Line Following Robot",
    level: "Beginner",
    focus: "Sensors, motor control, firmware",
    summary:
      "Use a microcontroller, reflectance sensors, and motor control to follow a taped path.",
    deliverable: "Wiring diagram, firmware, and tuning notes.",
    stage: "Core Engineering",
    learningGoals: [
      "Read noisy sensor values and convert them into steering corrections.",
      "Drive motors with PWM and direction control.",
      "Tune behavior from logs instead of vibes.",
    ],
    constraints: [
      "Start with slow speed limits.",
      "Test motors on blocks before floor tests.",
      "Record sensor values over different surfaces.",
    ],
    milestones: [
      "Read and calibrate reflectance sensors.",
      "Drive motors forward, backward, and stopped.",
      "Follow a simple line and write tuning notes.",
    ],
  },
  {
    slug: "programmable-rc-car",
    title: "Programmable RC Car",
    level: "Beginner",
    focus: "Chassis, motor control, wireless commands, power safety",
    summary:
      "Build a small remote-controlled car, then add telemetry and speed feedback as a robotics foundation.",
    deliverable: "Proposal, wiring diagram, firmware, test log, and demo video.",
    stage: "Core Engineering",
    learningGoals: [
      "Choose motors, drivers, batteries, and wiring with current limits in mind.",
      "Build a wireless command loop with a dead-man failsafe.",
      "Collect telemetry that explains real robot behavior.",
    ],
    constraints: [
      "Manual RC control comes before autonomy.",
      "Motor driver current limits must exceed expected load.",
      "Commands must time out to a safe stop.",
    ],
    milestones: [
      "Bench-test one motor and driver safely.",
      "Drive a rolling chassis from a simple command script.",
      "Add wireless control, telemetry, and a five-minute test log.",
    ],
  },
  {
    slug: "web-teleop-controller",
    title: "Web Teleop Controller",
    level: "Beginner",
    focus: "Web UI, command protocols, failsafes, telemetry",
    summary:
      "Build a browser-based driving interface with joystick, keyboard control, speed limits, and a visible emergency stop.",
    deliverable: "Responsive controller UI, command schema, mock robot service, and demo recording.",
    stage: "Core Engineering",
    learningGoals: [
      "Translate browser input into normalized robot commands.",
      "Separate the interface from hardware-specific pin control.",
      "Design a command timeout that stops the robot when control drops.",
    ],
    constraints: [
      "The first version should run against a software mock.",
      "Commands must include a freshness or timeout rule.",
      "Emergency stop must be visible without scrolling.",
    ],
    milestones: [
      "Create joystick, keyboard, and speed-limit controls.",
      "Send commands to a mock endpoint and show connection state.",
      "Add telemetry panels and verify timeout-to-stop behavior.",
    ],
  },
  {
    slug: "pid-balancing-rig",
    title: "PID Balancing Rig",
    level: "Intermediate",
    focus: "Closed-loop control, logging, tuning",
    summary:
      "Instrument a pendulum or small balance platform and tune a controller using real data.",
    deliverable: "Control log, plots, and parameter explanation.",
    stage: "Robotics Core",
    learningGoals: [
      "Understand feedback, error, overshoot, and settling time.",
      "Tune PID gains from measured data.",
      "Separate sensor noise from controller behavior.",
    ],
    constraints: [
      "Log every tuning run.",
      "Add mechanical stops or low-power test modes.",
      "Change one parameter at a time.",
    ],
    milestones: [
      "Read sensor angle or position reliably.",
      "Close a low-gain feedback loop.",
      "Tune and explain proportional, integral, and derivative effects.",
    ],
  },
  {
    slug: "encoder-odometry-test-stand",
    title: "Encoder Odometry Test Stand",
    level: "Intermediate",
    focus: "Encoders, calibration, odometry, data logging",
    summary:
      "Instrument a drive base or bench rig so wheel encoder readings become repeatable distance and velocity estimates.",
    deliverable: "Calibration notes, odometry script, plots, and repeatability report.",
    stage: "Robotics Core",
    learningGoals: [
      "Convert encoder ticks into wheel distance and chassis motion.",
      "Measure drift, backlash, and wheel-slip effects from real runs.",
      "Use plots to compare commanded motion with estimated motion.",
    ],
    constraints: [
      "Run straight-line and turn-in-place tests separately.",
      "Keep raw logs so calibration can be repeated later.",
      "Document wheel diameter, gear ratio, and encoder resolution.",
    ],
    milestones: [
      "Read encoder ticks reliably at motor speed.",
      "Estimate distance and heading from repeated test runs.",
      "Publish a short report showing error over multiple trials.",
    ],
  },
  {
    slug: "arduino-r4-ros-2-base-bridge",
    title: "Arduino R4 ROS 2 Base Bridge",
    level: "Intermediate",
    focus: "Microcontroller firmware, serial protocol, ROS 2 base control",
    summary:
      "Use an Arduino UNO R4-class controller as the low-level bridge between ROS 2 velocity commands and motor hardware.",
    deliverable: "Firmware, ROS 2 bridge node, message contract, and bench-test video.",
    stage: "Robotics Core",
    learningGoals: [
      "Define a simple serial protocol between a ROS 2 computer and microcontroller.",
      "Map /cmd_vel-style motion commands to motor outputs.",
      "Report battery, watchdog, encoder, and motor status back to ROS 2.",
    ],
    constraints: [
      "The microcontroller must stop motors when commands expire.",
      "Motor power must stay separate from logic power.",
      "The protocol should be testable without the robot on the floor.",
    ],
    milestones: [
      "Send safe motor commands from a desktop script.",
      "Wrap the protocol in a ROS 2 node with telemetry topics.",
      "Bench-test watchdog stop, direction changes, and speed limits.",
    ],
  },
  {
    slug: "ros-2-sensor-dashboard",
    title: "ROS 2 Sensor Dashboard",
    level: "Intermediate",
    focus: "Nodes, topics, transforms, visualization",
    summary:
      "Create nodes for IMU, encoder, and camera data, then visualize robot state over time.",
    deliverable: "ROS 2 package, launch file, and architecture diagram.",
    stage: "Robotics Core",
    learningGoals: [
      "Understand ROS 2 nodes, topics, messages, and launch files.",
      "Visualize sensor streams and robot state.",
      "Draw a small but real robot software architecture.",
    ],
    constraints: [
      "Keep each node responsible for one thing.",
      "Use consistent timestamps and frame names.",
      "Document message flow before adding more sensors.",
    ],
    milestones: [
      "Publish one simulated or recorded sensor stream.",
      "Add transforms and visualization.",
      "Create a launch file and architecture diagram.",
    ],
  },
  {
    slug: "lidar-slam-rover",
    title: "LiDAR SLAM Rover",
    level: "Advanced",
    focus: "2D LiDAR, SLAM, navigation, transforms",
    summary:
      "Add a 2D LiDAR to a mobile base and create a repeatable mapping and navigation workflow in ROS 2.",
    deliverable: "Map files, launch configuration, navigation demo, and tuning notes.",
    stage: "Specialization",
    learningGoals: [
      "Publish LiDAR scans and robot transforms with consistent frame names.",
      "Build maps and evaluate localization quality from real test runs.",
      "Tune navigation parameters from observed robot behavior.",
    ],
    constraints: [
      "Validate odometry before trusting SLAM results.",
      "Start in a small, controlled test space.",
      "Keep manual teleop and emergency stop available during autonomy tests.",
    ],
    milestones: [
      "Visualize scan, odometry, and transforms in RViz.",
      "Create a map of a small room and save it for reuse.",
      "Navigate between two goals and record failures with screenshots.",
    ],
  },
  {
    slug: "autonomous-room-mapper",
    title: "Autonomous Room Mapper",
    level: "Advanced",
    focus: "Mapping, navigation, simulation",
    summary:
      "Combine odometry, LiDAR or depth sensing, mapping, and navigation in simulation first.",
    deliverable: "Map output, navigation demo, and postmortem.",
    stage: "Specialization",
    learningGoals: [
      "Understand the relationship between odometry, sensing, maps, and localization.",
      "Use simulation to reduce hardware risk.",
      "Evaluate navigation behavior with concrete map and path outputs.",
    ],
    constraints: [
      "Simulation comes before hardware.",
      "Mapping and navigation should be tested separately first.",
      "Failures should be documented with map or trajectory artifacts.",
    ],
    milestones: [
      "Create or load a simulated indoor world.",
      "Generate a usable map from robot sensor data.",
      "Navigate to goals and write a failure-mode postmortem.",
    ],
  },
  {
    slug: "ros-2-embodied-assistant",
    title: "ROS 2 Embodied Assistant",
    level: "Capstone",
    focus: "Voice or text commands, perception, task planning, safety gates",
    summary:
      "Create a robot assistant that turns high-level user requests into checked, auditable robot actions.",
    deliverable: "Capability registry, safety policy, task logs, demo video, and final writeup.",
    stage: "Specialization",
    learningGoals: [
      "Expose robot capabilities as small, validated actions.",
      "Combine camera, map, and telemetry context before executing tasks.",
      "Add human approval gates for risky or ambiguous actions.",
    ],
    constraints: [
      "Autonomous actions must be bounded by a written safety envelope.",
      "Every high-level command needs an execution log.",
      "The robot must ask for confirmation before moving in uncertain contexts.",
    ],
    milestones: [
      "Create a typed registry of robot actions and preconditions.",
      "Route text or voice commands into approved ROS 2 actions.",
      "Demonstrate a multi-step task with logs, safety checks, and recovery.",
    ],
  },
  {
    slug: "mobile-manipulator",
    title: "Mobile Manipulator",
    level: "Capstone",
    focus: "Perception, planning, control, safety",
    summary:
      "Integrate the whole stack into a robot that finds, approaches, and moves objects.",
    deliverable: "Public repo, build guide, test videos, and final writeup.",
    stage: "Specialization",
    learningGoals: [
      "Integrate perception, mobile-base motion, manipulation, and safety checks.",
      "Turn subsystem demos into one coherent robot behavior.",
      "Produce portfolio-grade documentation and demo evidence.",
    ],
    constraints: [
      "Define safe operating limits before testing.",
      "Use simulation or mocks for risky behaviors first.",
      "Keep a subsystem acceptance test for every major capability.",
    ],
    milestones: [
      "Demo mobile-base navigation alone.",
      "Demo object perception and manipulation separately.",
      "Integrate the full behavior and publish a final writeup.",
    ],
  },
];
