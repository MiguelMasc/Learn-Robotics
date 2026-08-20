export type CurriculumPillar = {
  id: string;
  label: string;
  title: string;
  summary: string;
  emphasis: string;
  outcomes: string[];
  topics: CurriculumTopic[];
  checkpoints: string[];
  practice: string[];
  projectSlugs: string[];
};

export type CurriculumTopic = {
  name: string;
  detail: string;
  methods: string[];
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
  status?: "draft" | "proposal";
  proposal?: ProjectProposal;
};

export type ProjectPhase = {
  title: string;
  goal: string;
  parts: string[];
  exitGate: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  description: string;
  kind: "Kit" | "Repository" | "Guide";
};

export type ProjectProposal = {
  outcome: string;
  recommendedPlatform: string;
  prerequisites: string[];
  successCriteria: string[];
  phases: ProjectPhase[];
  links: ProjectLink[];
  reviewedOn: string;
};

export type PublishedProject = Project & {
  status: "proposal";
  proposal: ProjectProposal;
};

export const curriculumPillars: CurriculumPillar[] = [
  {
    id: "mathematics-computation",
    label: "Foundations",
    title: "Mathematics & Computation",
    summary:
      "The language for describing motion, uncertainty, algorithms, and the behavior of complete robot systems.",
    emphasis:
      "Use mathematics and code as working engineering tools: model a behavior, simulate it, inspect the result, and explain what changed.",
    topics: [
      {
        name: "Linear algebra",
        detail:
          "Represent coordinate frames, rigid transforms, velocities, and sensor models with vectors and matrices. Use decompositions to solve inverse problems and reason about rank, observability, and numerical conditioning.",
        methods: ["SE(2) / SE(3)", "Eigenvalues & SVD", "Least squares"],
      },
      {
        name: "Calculus",
        detail:
          "Relate position, velocity, acceleration, and energy through derivatives and integrals. Apply multivariable derivatives to kinematics, sensitivity analysis, and gradient-based optimization.",
        methods: ["Jacobians", "Gradients", "Numerical integration"],
      },
      {
        name: "Differential equations",
        detail:
          "Model how mechanical, electrical, and control states evolve over time. Analyze equilibrium behavior, linearize nonlinear dynamics, and simulate continuous and discrete-time systems.",
        methods: ["State-space models", "ODE solvers", "Linearization"],
      },
      {
        name: "Probability",
        detail:
          "Describe sensor noise, process uncertainty, and belief over robot state. Work with conditional probability, covariance, likelihoods, and recursive Bayesian inference.",
        methods: ["Bayes filters", "Covariance", "Gaussian models"],
      },
      {
        name: "Programming",
        detail:
          "Implement reliable robot software across high-level experimentation and performance-critical runtime code. Manage concurrency, memory, hardware interfaces, tests, and diagnostic logging.",
        methods: ["Python & C++", "Automated testing", "Concurrency"],
      },
      {
        name: "Algorithms",
        detail:
          "Choose data structures and algorithms by correctness, computational complexity, memory use, and real-time constraints. Emphasize graph search, spatial indexing, and online computation.",
        methods: ["Graphs & trees", "A* search", "Complexity analysis"],
      },
    ],
    outcomes: [
      "Represent pose, motion, and uncertainty with vectors, matrices, and probability.",
      "Write clear programs and choose data structures for robotics problems.",
      "Turn a physical idea into a model, simulation, and testable prediction.",
    ],
    checkpoints: [
      "Simulate a point robot moving through 2D space.",
      "Use graph search to route through a grid world.",
      "Plot and interpret position, velocity, acceleration, and noisy measurements.",
    ],
    practice: [
      "Pair every mathematical idea with a visible robot example.",
      "Keep units, coordinate frames, and assumptions explicit.",
      "Prefer small reproducible scripts over unexplained calculations.",
    ],
    projectSlugs: ["2d-robot-simulator"],
  },
  {
    id: "mechanics-design",
    label: "Physical systems",
    title: "Mechanics & Robot Design",
    summary:
      "How geometry, forces, materials, actuators, and mechanisms turn intent into reliable physical motion.",
    emphasis:
      "Treat the robot body as part of the computation. Good geometry, transmission choices, and mechanical limits make every controller easier.",
    topics: [
      {
        name: "Kinematics",
        detail:
          "Describe robot configuration and motion without considering forces. Derive forward and inverse kinematics, velocity mappings, singularities, and workspace constraints for mobile bases and manipulators.",
        methods: ["Product of exponentials", "Jacobians", "Inverse kinematics"],
      },
      {
        name: "Dynamics",
        detail:
          "Relate forces and torques to acceleration using mass, inertia, Coriolis, gravity, friction, and contact models. Use the model for simulation, actuator sizing, and model-based control.",
        methods: ["Newton-Euler", "Lagrangian mechanics", "Rigid-body simulation"],
      },
      {
        name: "Statics & structures",
        detail:
          "Trace load paths through frames, joints, fasteners, and supports. Evaluate stress, deflection, buckling, fatigue, and safety factors under nominal and worst-case loading.",
        methods: ["Free-body diagrams", "Beam theory", "FEA fundamentals"],
      },
      {
        name: "CAD & fabrication",
        detail:
          "Create parametric parts and assemblies with manufacturable geometry, controlled interfaces, and service access. Account for tolerance stacks across printed, machined, laser-cut, and sheet components.",
        methods: ["Parametric CAD", "Tolerance analysis", "DFMA"],
      },
      {
        name: "Actuators",
        detail:
          "Select DC, BLDC, servo, stepper, pneumatic, or linear actuators from torque-speed, force-velocity, duty-cycle, thermal, precision, mass, and efficiency requirements.",
        methods: ["Torque-speed curves", "Thermal limits", "Efficiency maps"],
      },
      {
        name: "Transmissions",
        detail:
          "Transform speed, torque, and motion through gears, belts, chains, lead screws, cables, and compliant elements. Quantify backlash, stiffness, reflected inertia, efficiency, and failure modes.",
        methods: ["Gear ratios", "Backlash", "Compliance"],
      },
    ],
    outcomes: [
      "Model rigid-body motion, loads, torque, speed, and power.",
      "Choose actuators and transmissions from measurable requirements.",
      "Design serviceable mechanisms with appropriate tolerances and safety margins.",
    ],
    checkpoints: [
      "Create and explain a drivetrain or linkage model.",
      "Produce a CAD assembly with interfaces and fasteners defined.",
      "Compare actuator options using torque-speed, weight, and power evidence.",
    ],
    practice: [
      "Prototype the riskiest mechanism before polishing the full design.",
      "Measure backlash, friction, flex, heat, and wear.",
      "Design for assembly, maintenance, and safe failure.",
    ],
    projectSlugs: ["programmable-rc-car", "autonomous-development-quadcopter"],
  },
  {
    id: "electronics-embedded",
    label: "Hardware",
    title: "Electronics & Embedded Systems",
    summary:
      "The circuits, power paths, interfaces, and real-time firmware that connect computation to the physical machine.",
    emphasis:
      "Make power, timing, signal levels, and failure behavior visible. A robot is only as dependable as its electrical and firmware foundations.",
    topics: [
      {
        name: "Circuits",
        detail:
          "Design analog and digital signal paths for sensing, conditioning, switching, and protection. Verify voltage levels, current paths, impedance, bandwidth, grounding, and component tolerances.",
        methods: ["Kirchhoff analysis", "Op-amps & filters", "Signal conditioning"],
      },
      {
        name: "Power systems",
        detail:
          "Architect battery, regulator, distribution, protection, and grounding networks for pulsed robotic loads. Budget steady-state and peak current while managing brownouts, heat, EMI, and stored-energy hazards.",
        methods: ["Power budgets", "Battery management", "Protection & grounding"],
      },
      {
        name: "Microcontrollers",
        detail:
          "Use timers, interrupts, ADCs, DMA, memory, and peripheral blocks to acquire sensors and command actuators deterministically. Separate hardware abstraction from application state logic.",
        methods: ["Interrupts & DMA", "Timers / PWM / ADC", "Hardware abstraction"],
      },
      {
        name: "Motor drives",
        detail:
          "Control current and commutation through H-bridges, stepper drivers, and electronic speed controllers. Handle switching losses, regenerative energy, current limits, dead time, and motor protection.",
        methods: ["PWM & H-bridges", "Current sensing", "FOC fundamentals"],
      },
      {
        name: "Digital interfaces",
        detail:
          "Connect sensors, controllers, and computers using buses selected for bandwidth, latency, distance, noise immunity, and fault tolerance. Design framing, error detection, and recovery behavior.",
        methods: ["UART", "SPI / I2C", "CAN bus"],
      },
      {
        name: "Real-time firmware",
        detail:
          "Schedule acquisition, estimation, control, and communications against explicit deadlines. Use state machines, watchdogs, bounded execution, and fault states to keep the robot predictable.",
        methods: ["RTOS scheduling", "State machines", "Watchdogs"],
      },
    ],
    outcomes: [
      "Read schematics and datasheets well enough to select and connect components.",
      "Build firmware for sensing, actuation, communication, and watchdog behavior.",
      "Budget voltage, current, thermal load, bandwidth, and timing margins.",
    ],
    checkpoints: [
      "Breadboard and measure a sensor or driver circuit safely.",
      "Control a motor with bounded commands and a command-timeout stop.",
      "Log power, timing, and fault state during a repeatable bench test.",
    ],
    practice: [
      "Use a multimeter or oscilloscope before trusting software readings.",
      "Keep motor power, logic power, grounding, and protection explicit.",
      "Test firmware interfaces without moving the full robot first.",
    ],
    projectSlugs: [
      "line-following-robot",
      "encoder-odometry-test-stand",
      "arduino-r4-ros-2-base-bridge",
    ],
  },
  {
    id: "sensing-perception-estimation",
    label: "Observation",
    title: "Sensing, Perception & Estimation",
    summary:
      "How a robot converts imperfect measurements into useful estimates of itself, other agents, and the surrounding world.",
    emphasis:
      "A sensor produces data, not truth. Calibrate it, model its uncertainty, combine evidence, and validate estimates against reality.",
    topics: [
      {
        name: "Sensor physics",
        detail:
          "Understand how encoders, IMUs, cameras, LiDAR, radar, force sensors, and range sensors convert physical phenomena into measurements. Quantify resolution, range, field of view, bias, noise, and latency.",
        methods: ["Calibration", "Error budgets", "Sensor characterization"],
      },
      {
        name: "Signal processing",
        detail:
          "Sample, filter, transform, and detect structure in time-series and spatial data without destroying useful dynamics. Account for aliasing, phase delay, quantization, and bandwidth.",
        methods: ["Nyquist sampling", "FIR / IIR filters", "FFT analysis"],
      },
      {
        name: "State estimation",
        detail:
          "Fuse models and asynchronous measurements into a belief over pose, velocity, bias, and other hidden states. Track covariance and reject inconsistent observations rather than returning a single unqualified value.",
        methods: ["Kalman / EKF", "Particle filters", "Sensor fusion"],
      },
      {
        name: "Computer vision",
        detail:
          "Recover geometry, motion, objects, and semantics from images or depth data. Combine camera models with features, optimization, and learned representations while measuring detection and pose error.",
        methods: ["Projective geometry", "Features & optical flow", "CNN detectors"],
      },
      {
        name: "Localization",
        detail:
          "Estimate robot pose relative to a local or global frame using odometry, landmarks, scans, visual-inertial data, or external infrastructure. Diagnose drift and loss of observability.",
        methods: ["Wheel odometry", "Scan matching", "Visual-inertial odometry"],
      },
      {
        name: "Mapping",
        detail:
          "Build geometric or semantic environment representations while accounting for uncertain pose and observations. Optimize trajectories, detect loop closures, and maintain maps suited to downstream planning.",
        methods: ["Occupancy grids", "Pose graphs", "SLAM loop closure"],
      },
    ],
    outcomes: [
      "Calibrate sensors and characterize noise, bias, drift, and latency.",
      "Estimate robot state by combining encoder, inertial, range, or visual data.",
      "Build perception pipelines that produce task-relevant world models.",
    ],
    checkpoints: [
      "Calibrate a camera, IMU, encoder, or range sensor and publish the error data.",
      "Estimate pose from recorded measurements with uncertainty visible.",
      "Create a map or detection pipeline and test it under changed conditions.",
    ],
    practice: [
      "Save raw data so perception experiments can be replayed.",
      "Track timestamps and coordinate frames with every measurement.",
      "Evaluate false positives, missed detections, drift, and degraded conditions.",
    ],
    projectSlugs: ["ros-2-sensor-dashboard", "lidar-slam-rover"],
  },
  {
    id: "control-planning-intelligence",
    label: "Decision & action",
    title: "Control, Planning & Intelligence",
    summary:
      "How robots regulate motion, choose actions, plan through constraints, and adapt when the world does not match the model.",
    emphasis:
      "Close the loop with measured evidence. Build from stable feedback and explicit planning before adding learning-based behavior.",
    topics: [
      {
        name: "Feedback control",
        detail:
          "Regulate position, velocity, force, and attitude despite disturbance and model error. Analyze stability, transient response, steady-state error, robustness, saturation, and sampling effects.",
        methods: ["PID", "Bode / root locus", "State feedback"],
      },
      {
        name: "System identification",
        detail:
          "Estimate dynamic models from commanded inputs and measured outputs. Design excitation experiments, fit parameters, validate residuals, and separate structural model error from sensor noise.",
        methods: ["Step response", "Parameter estimation", "Frequency response"],
      },
      {
        name: "Motion planning",
        detail:
          "Search configuration and state spaces for collision-free, dynamically feasible motion. Compare completeness, optimality, computation time, clearance, smoothness, and replanning performance.",
        methods: ["A* / D*", "RRT / PRM", "Trajectory generation"],
      },
      {
        name: "Optimization",
        detail:
          "Express estimation, planning, and control as objectives constrained by robot dynamics, actuator limits, geometry, and safety. Use numerical solvers while monitoring feasibility and conditioning.",
        methods: ["Convex optimization", "Nonlinear programming", "Model predictive control"],
      },
      {
        name: "Machine learning",
        detail:
          "Learn perception models, dynamics, policies, or residual corrections from data. Control dataset quality, uncertainty, distribution shift, inference latency, and sim-to-real validation.",
        methods: ["Supervised learning", "Reinforcement learning", "Sim-to-real"],
      },
      {
        name: "Decision-making",
        detail:
          "Coordinate goals, modes, recovery, and resource constraints above the trajectory level. Make transitions auditable and keep uncertainty, preconditions, and fallback states explicit.",
        methods: ["Finite-state machines", "Behavior trees", "MDPs"],
      },
    ],
    outcomes: [
      "Design and tune feedback controllers from models and logged response data.",
      "Plan collision-aware paths and trajectories under physical constraints.",
      "Choose when rules, optimization, or learning are appropriate for a behavior.",
    ],
    checkpoints: [
      "Tune a PID loop and explain overshoot, settling time, and steady-state error.",
      "Compare two planners on the same map, constraints, and evaluation metrics.",
      "Demonstrate a bounded autonomous behavior with a defined fallback state.",
    ],
    practice: [
      "Log data before tuning or retraining.",
      "Separate controller, planner, and perception failures in tests.",
      "Keep constraints and fallback behavior explicit in every autonomy demo.",
    ],
    projectSlugs: ["pid-balancing-rig", "autonomous-room-mapper"],
  },
  {
    id: "software-integration-safety",
    label: "Complete systems",
    title: "Robot Software, Integration & Safety",
    summary:
      "The architecture and engineering discipline that make mechanical, electrical, sensing, and autonomy subsystems work as one robot.",
    emphasis:
      "Integration is a core technical subject. Define interfaces, simulate risky behavior, test subsystems, manage faults, and preserve human authority.",
    topics: [
      {
        name: "ROS 2",
        detail:
          "Compose distributed robot software from nodes with typed messages, services, actions, parameters, lifecycle state, and transforms. Configure QoS for reliability, latency, and lossy networks.",
        methods: ["Nodes / topics / actions", "QoS policies", "tf2 transforms"],
      },
      {
        name: "Simulation",
        detail:
          "Exercise robot models, controllers, perception, and autonomy in repeatable virtual environments. Define where software-in-the-loop, hardware-in-the-loop, and synthetic data are valid or misleading.",
        methods: ["Gazebo / Isaac Sim", "SIL / HIL", "Synthetic data"],
      },
      {
        name: "System architecture",
        detail:
          "Partition responsibilities across embedded controllers, robot computers, networks, operators, and cloud services. Specify interfaces, timing, ownership, lifecycle, and degraded operating modes.",
        methods: ["Interface contracts", "State ownership", "Time synchronization"],
      },
      {
        name: "Verification",
        detail:
          "Test components, interfaces, integrated behaviors, and failure responses against measurable requirements. Replay logs, inject faults, track regressions, and preserve evidence for every release.",
        methods: ["Unit & integration tests", "Log replay", "Fault injection"],
      },
      {
        name: "Human-robot interaction",
        detail:
          "Design operator commands, feedback, shared autonomy, handoff, and recovery around human attention and physical capability. Evaluate workload, trust calibration, usability, and mode awareness.",
        methods: ["Teleoperation", "Shared autonomy", "Human-factors testing"],
      },
      {
        name: "Safety & ethics",
        detail:
          "Identify hazards across mechanics, power, motion, autonomy, data, and human interaction. Convert risk analysis into limits, interlocks, monitored assumptions, safe states, and accountable deployment decisions.",
        methods: ["FMEA / STPA", "Safety envelopes", "Applicable standards"],
      },
    ],
    outcomes: [
      "Design robot software around clear interfaces, messages, frames, and states.",
      "Integrate and validate subsystems through simulation, replay, and hardware tests.",
      "Define safety envelopes, fault responses, operator controls, and ethical limits.",
    ],
    checkpoints: [
      "Build a ROS 2 graph with documented interfaces and transform trees.",
      "Run subsystem acceptance tests before an integrated autonomy test.",
      "Publish architecture, safety constraints, evidence, failures, and recovery behavior.",
    ],
    practice: [
      "Use interface contracts and test doubles to isolate subsystem work.",
      "Keep emergency stops, command timeouts, and operating limits testable.",
      "Treat documentation and postmortems as engineering deliverables.",
    ],
    projectSlugs: ["web-teleop-controller", "ros-2-embodied-assistant", "mobile-manipulator"],
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
    status: "proposal",
    proposal: {
      outcome:
        "Build a differential-drive car that accepts bounded wireless commands, stops when the command link disappears, and records enough telemetry to explain its behavior.",
      recommendedPlatform:
        "Start with a Pololu Romi chassis or a comparable two-wheel differential-drive kit with encoder-ready motors. Use an ESP32 or Raspberry Pi Pico W for the first controller so motor control and safety stay visible.",
      prerequisites: [
        "Basic Python or Arduino-style C/C++.",
        "Comfort measuring DC voltage and continuity with a multimeter.",
        "A basic understanding of PWM, motor direction, and common ground.",
      ],
      successCriteria: [
        "Drive forward, backward, left, and right from a wireless controller.",
        "Stop the motors within 300 ms when fresh commands stop arriving.",
        "Run for five minutes without controller brownouts, loose wiring, or an overheated driver.",
        "Log command, PWM, battery voltage, encoder counts, and fault state.",
        "Publish a wiring diagram, bill of materials, test log, demo, and postmortem.",
      ],
      phases: [
        {
          title: "Requirements and bench setup",
          goal:
            "Choose a drivetrain and power architecture, read the motor and driver limits, and draw the wiring before connecting power.",
          parts: [
            "Two-wheel differential-drive chassis with two DC gearmotors",
            "ESP32 or Raspberry Pi Pico W-class controller",
            "Dual H-bridge sized above motor stall current",
            "4xAA NiMH pack or protected battery pack with matching charger",
            "Main switch, fuse, multimeter, hookup wire, and connectors",
          ],
          exitGate:
            "Explain the motor-power, logic-power, ground, PWM, direction, and emergency-stop paths from the diagram.",
        },
        {
          title: "Motor driver bench test",
          goal:
            "Control one motor at low power and verify forward, reverse, coast, brake, current draw, and controller stability.",
          parts: [
            "One drivetrain motor",
            "Selected motor driver and microcontroller",
            "Battery pack or current-limited bench supply",
            "Motor suppression capacitors and bulk decoupling capacitor",
          ],
          exitGate:
            "Repeat ten start, stop, and direction-change cycles without a reset, thermal shutdown, or loose connection.",
        },
        {
          title: "Rolling chassis",
          goal:
            "Mount the electronics securely, drive from a tethered command script, and calibrate left/right trim.",
          parts: [
            "Complete chassis, wheels, caster, and mounting hardware",
            "Standoffs, screw terminals or locking connectors, and heat shrink",
            "Accessible main power switch",
          ],
          exitGate:
            "Drive two meters, stop on command, and repeat the same test five times at a conservative speed limit.",
        },
        {
          title: "Wireless control and failsafe",
          goal:
            "Add browser, laptop, phone, or gamepad control with normalized commands, speed limits, and a dead-man timeout.",
          parts: [
            "Wi-Fi or BLE already provided by the controller",
            "Laptop, phone, or USB gamepad",
            "Status LED or buzzer for armed, fault, and low-battery states",
          ],
          exitGate:
            "The car stops by itself when the controller closes, Wi-Fi drops, or command packets become stale.",
        },
        {
          title: "Telemetry, encoders, and PID",
          goal:
            "Measure wheel speed, plot command versus response, and add closed-loop speed control only after the raw data is trustworthy.",
          parts: [
            "Two quadrature encoder kits or encoder-equipped motors",
            "Battery-voltage divider and optional current sensor",
            "Laptop with Python, CSV logging, and plotting tools",
          ],
          exitGate:
            "Produce repeatable straight-line and turn-in-place plots and explain steady-state error, overshoot, and battery sag.",
        },
        {
          title: "Field test and portfolio writeup",
          goal:
            "Run a repeatable acceptance test and leave enough evidence for another learner to reproduce the build.",
          parts: [
            "Measured indoor test course",
            "Phone or camera for demo media",
            "No new electronics required",
          ],
          exitGate:
            "Complete a five-minute run and publish the build guide, diagrams, source, logs, plots, demo, and failure postmortem.",
        },
      ],
      links: [
        {
          label: "Pololu Romi chassis kit",
          href: "https://www.pololu.com/product/3500",
          description:
            "A compact differential-drive chassis with gearmotors, encoder-ready shafts, wheels, caster, and AA battery contacts.",
          kind: "Kit",
        },
        {
          label: "SunFounder PiCar-X",
          href: "https://docs.sunfounder.com/projects/picar-x-v20/en/latest/",
          description:
            "A Raspberry Pi car kit with camera, ultrasonic ranging, line sensors, Python examples, and mobile control.",
          kind: "Kit",
        },
        {
          label: "NVIDIA JetBot",
          href: "https://jetbot.org/",
          description:
            "An open reference robot with compatible kits and notebooks for motor control, collision avoidance, and vision.",
          kind: "Kit",
        },
        {
          label: "Romi 32U4 Arduino library",
          href: "https://github.com/pololu/romi-32u4-arduino-library",
          description:
            "Pololu's official drivers and examples for the Romi 32U4 control board.",
          kind: "Repository",
        },
        {
          label: "PiCar-X Python library",
          href: "https://github.com/sunfounder/picar-x",
          description:
            "SunFounder's open Python package and examples for the PiCar-X platform.",
          kind: "Repository",
        },
        {
          label: "NVIDIA JetBot",
          href: "https://github.com/NVIDIA-AI-IOT/jetbot",
          description:
            "The reference JetBot software, notebooks, setup tools, and learning examples.",
          kind: "Repository",
        },
      ],
      reviewedOn: "July 10, 2026",
    },
  },
  {
    slug: "autonomous-development-quadcopter",
    title: "Autonomous 9-Inch Development Quadcopter",
    level: "Intermediate",
    focus: "Airframe integration, flight control, power, telemetry, autonomy, ROS 2, safety",
    summary:
      "Build a roughly 9-inch (230-250 mm) motor-to-motor quadcopter with 5-inch propellers, PX4 flight control, telemetry, and a logged autonomous mission.",
    deliverable:
      "Proposal, wiring and power diagrams, configured airframe, flight logs, ROS 2 bridge, mission demo, and postmortem.",
    stage: "Robotics Core",
    learningGoals: [
      "Match frame, motors, ESCs, propellers, battery, and power distribution as one propulsion system.",
      "Configure and validate an autopilot, receiver, GPS, telemetry link, and flight failsafes.",
      "Use flight logs to evaluate vibration, estimator health, battery sag, and control response.",
      "Build autonomy in simulation before progressively bounded outdoor flight tests.",
      "Integrate vehicle state, commands, mission status, and safety state through ROS 2.",
    ],
    constraints: [
      "Five-inch propellers can cause serious injury; every bench test is propeller-off unless the airframe is in a purpose-built restraint operated by an experienced builder.",
      "A physical RC transmitter, deliberate arm/disarm control, and tested radio-loss failsafe remain available during every autonomous flight.",
      "Powered flight happens outdoors in a clear legal test area with a spotter, never inside a home or near uninvolved people.",
      "Manual stabilized flight must be reliable before position modes or autonomous missions are enabled.",
      "LiPo batteries are inspected before use, charged with a chemistry-matched balance charger, and never charged unattended.",
    ],
    milestones: [
      "Complete PX4 simulation and document the operating and safety envelope.",
      "Assemble and power the aircraft through a smoke stopper with no propellers installed.",
      "Validate motor order, direction, receiver control, arming, and all failsafes on the bench.",
      "Complete conservative manual hover tests and analyze the resulting flight logs.",
      "Run a bounded autonomous waypoint mission through ROS 2 and publish the results.",
    ],
    status: "proposal",
    proposal: {
      outcome:
        "Build a 230-250 mm wheelbase development quadcopter that can be flown manually, hold position, execute a short geofenced waypoint mission, return or land on fault, and record enough data to explain every test.",
      recommendedPlatform:
        "Use a carbon-fiber 5-inch-prop frame with an approximately 9-10 inch motor-to-motor diagonal. A compact PX4-supported autopilot such as a Pixhawk 6C Mini, a matched 4S propulsion system, GPS/compass, telemetry radio, and independent RC link make the aircraft large enough to assemble and instrument without moving into heavy-lift territory.",
      prerequisites: [
        "Comfort soldering high-current power connections and checking continuity with a multimeter.",
        "Basic understanding of LiPo battery safety, voltage, current, polarity, and motor/ESC ratings.",
        "Basic Python and Linux command-line skills for simulation, logs, and ROS 2.",
        "Access to a legal outdoor flying area and a second person who can act as a spotter.",
      ],
      successCriteria: [
        "Document an all-up-weight estimate, current budget, connector map, center-of-gravity target, and expected flight time before assembly.",
        "Pass continuity, smoke-stopper, sensor, motor-order, motor-direction, RC-loss, low-battery, and manual-kill tests with propellers removed.",
        "Hover manually for 60 seconds and land safely on five consecutive flights.",
        "Produce logs showing acceptable vibration, healthy state estimation, battery behavior, and no critical failsafe events.",
        "Complete at least four of five bounded waypoint missions while retaining manual override and return-or-land behavior.",
        "Publish source, configuration, wiring, parts record, raw logs, plots, demo media, and a failure postmortem.",
      ],
      phases: [
        {
          title: "Simulation and safety envelope",
          goal:
            "Learn PX4 flight modes, mission planning, geofencing, return behavior, and command-loss handling before selecting or powering hardware.",
          parts: [
            "Linux computer capable of running PX4 SITL and Gazebo",
            "QGroundControl ground-station software",
            "Optional USB gamepad for manual simulation",
            "Written limits for altitude, distance, speed, battery, weather, and abort behavior",
          ],
          exitGate:
            "Complete ten simulated takeoff-hover-land cycles plus radio-loss, low-battery, geofence, and return-or-land scenarios.",
        },
        {
          title: "Airframe and propulsion design",
          goal:
            "Choose components as a matched system and document weight, voltage, current, mounting, connectors, and propeller clearance before ordering.",
          parts: [
            "230-250 mm carbon-fiber frame sized for 5-inch propellers",
            "Four matched 2207-class motors appropriate for the selected 4S battery and 5-inch props",
            "Four individual ESCs or a 4-in-1 ESC with current headroom",
            "Several matched clockwise and counter-clockwise 5-inch propeller sets",
            "4S LiPo battery, XT60 lead, balance charger, LiPo bag, and cell checker",
          ],
          exitGate:
            "The proposal includes an all-up-weight estimate, thrust margin, peak-current budget, wiring diagram, connector list, and verified propeller clearance.",
        },
        {
          title: "Mechanical and power assembly",
          goal:
            "Build a serviceable frame, solder the high-current path, and verify power integrity without installing propellers.",
          parts: [
            "Selected frame, motors, ESCs, power module, and battery connector",
            "Low-ESR capacitor sized for the propulsion voltage",
            "Silicone wire, heat shrink, cable ties, thread locker, and mounting hardware",
            "Temperature-controlled soldering iron, flux, multimeter, and smoke stopper",
          ],
          exitGate:
            "Pass polarity, continuity, short-circuit, fastener, wire-clearance, strain-relief, center-of-gravity, and smoke-stopper inspections.",
        },
        {
          title: "Autopilot and avionics bring-up",
          goal:
            "Install PX4, mount sensors away from vibration and magnetic interference, and establish independent command and telemetry links.",
          parts: [
            "PX4-supported compact autopilot such as a Pixhawk 6C Mini",
            "Compatible power module with voltage and current sensing",
            "GPS and compass module on a raised mount",
            "RC transmitter and receiver with a deliberate arm/disarm control",
            "Telemetry radio, safety switch, buzzer, and status LED",
          ],
          exitGate:
            "QGroundControl reports healthy sensors, calibrated controls, correct orientation, valid power readings, GPS lock outdoors, and a stable telemetry link.",
        },
        {
          title: "Propeller-off motor and failsafe validation",
          goal:
            "Prove motor mapping, direction, actuator response, arming rules, and every automatic stop or recovery path before generating thrust.",
          parts: [
            "Completed aircraft with propellers removed",
            "Motor-direction software or safe two-wire phase swap access",
            "Bench checklist and test log",
            "No new flight hardware required",
          ],
          exitGate:
            "Pass motor order/direction, arm/disarm, manual kill, RC loss, telemetry loss, low battery, estimator fault, and reboot-to-disarmed tests.",
        },
        {
          title: "Controlled manual flight",
          goal:
            "Perform conservative line-of-sight hover tests, confirm trim and stability, and inspect logs between every configuration change.",
          parts: [
            "Matched and correctly oriented propeller set plus multiple spares",
            "Clear outdoor test field, landing pad, safety glasses, and spotter",
            "Fire-resistant battery transport and isolation container",
            "Wind meter optional but useful for documenting conditions",
          ],
          exitGate:
            "Complete five consecutive 60-second hovers and safe landings with healthy vibration, estimator, link, and battery logs.",
        },
        {
          title: "Position control and bounded missions",
          goal:
            "Validate altitude and position hold, then progress from one waypoint to a short geofenced mission with return-or-land behavior.",
          parts: [
            "Existing GPS/compass, telemetry link, and ground station",
            "Optional downward rangefinder for more consistent low-altitude landing",
            "Measured outdoor mission box with conservative altitude and distance limits",
          ],
          exitGate:
            "Complete position hold, one-waypoint, multi-waypoint, geofence, and return-or-land tests without removing manual override.",
        },
        {
          title: "ROS 2 capstone integration",
          goal:
            "Bridge vehicle state and bounded mission commands into ROS 2, record a rosbag, and run the same mission interface in simulation and hardware.",
          parts: [
            "Linux laptop with ROS 2 and a MAVLink bridge",
            "Existing telemetry radio and aircraft",
            "Phone or camera for demo media",
            "No onboard companion computer required for the first version",
          ],
          exitGate:
            "Complete at least four of five geofenced missions and publish the architecture, configuration, code, logs, plots, demo, and postmortem.",
        },
      ],
      links: [
        {
          label: "Holybro QAV250 development kit",
          href: "https://holybro.com/collections/multicopter-kit/products/qav250-kit",
          description:
            "A 250 mm reference airframe in the same size class, available with Pixhawk 6C Mini, 2207 motors, 5-inch props, GPS, and telemetry options.",
          kind: "Kit",
        },
        {
          label: "Pixhawk 6C Mini",
          href: "https://docs.px4.io/main/en/flight_controller/pixhawk6c_mini",
          description:
            "PX4's maintained documentation for the compact autopilot used as the proposal reference.",
          kind: "Guide",
        },
        {
          label: "PX4 Autopilot",
          href: "https://github.com/PX4/PX4-Autopilot",
          description: "The open flight-control, estimation, mission, and failsafe software stack.",
          kind: "Repository",
        },
        {
          label: "MAVROS",
          href: "https://github.com/mavlink/mavros",
          description: "A MAVLink bridge commonly used to connect PX4 vehicles with ROS 2.",
          kind: "Repository",
        },
        {
          label: "FAA recreational flyer guidance",
          href: "https://www.faa.gov/uas/recreational_flyers",
          description:
            "Current U.S. recreational flight, TRUST, airspace, registration, and operating guidance.",
          kind: "Guide",
        },
      ],
      reviewedOn: "July 10, 2026",
    },
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

export const publishedProjects = projects.filter(
  (project): project is PublishedProject =>
    project.status === "proposal" && project.proposal !== undefined,
);
