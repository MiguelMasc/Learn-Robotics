export type CurriculumPillar = {
  id: string;
  label: string;
  title: string;
  question: string;
  summary: string;
  topics: string[];
  outcomes: string[];
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
    id: "perception",
    label: "Functional & architectural",
    title: "Perception",
    question: "How can a robot see, hear, and understand what is around it?",
    summary:
      "Sensors, cameras, and microphones gather the information a robot uses to understand its surroundings.",
    topics: ["Sensors", "Computer vision", "Audio", "Signal processing"],
    outcomes: [
      "Choose sensors that match what the robot needs to notice.",
      "Turn noisy readings into useful information about the world.",
    ],
  },
  {
    id: "localization-mapping",
    label: "Functional & architectural",
    title: "Localization & Mapping",
    question: "How does a robot explore a room without getting lost?",
    summary:
      "The robot builds a map of an unfamiliar place while tracking its own location inside it.",
    topics: ["Odometry", "Localization", "Mapping", "SLAM"],
    outcomes: [
      "Explain how a robot estimates where it is.",
      "Build and inspect a map from sensor data.",
    ],
  },
  {
    id: "motion-actuation",
    label: "Functional & architectural",
    title: "Motion & Actuation",
    question: "How does a robot turn code into movement?",
    summary:
      "Motors, mechanisms, and feedback create rolling, walking, flying, balancing, and arm movement.",
    topics: ["Locomotion", "Manipulation", "Actuators", "Feedback control"],
    outcomes: [
      "Connect a motion command to a safe physical action.",
      "Measure and improve how accurately the robot moves.",
    ],
  },
  {
    id: "planning-ai",
    label: "Functional & architectural",
    title: "Planning & AI",
    question: "How does a robot decide what to do next?",
    summary:
      "The robot turns what it senses into decisions, routes, multi-step actions, and responses to human instructions.",
    topics: ["Path planning", "Behavior planning", "Machine learning", "Language"],
    outcomes: [
      "Plan a route or sequence of actions toward a goal.",
      "Choose a safe fallback when the plan stops working.",
    ],
  },
  {
    id: "mechanical-design",
    label: "Hardware & engineering foundations",
    title: "Mechanical Design",
    question: "What makes a robot strong, stable, and able to move?",
    summary:
      "The frame, joints, materials, and mechanisms give a robot its shape, strength, payload, and range of motion.",
    topics: ["Structures", "Mechanisms", "Materials", "CAD & fabrication"],
    outcomes: [
      "Design a frame or mechanism around real size and load requirements.",
      "Build and improve a prototype using measured results.",
    ],
  },
  {
    id: "electronics-hardware",
    label: "Hardware & engineering foundations",
    title: "Electronics & Hardware",
    question: "How is everything powered and connected?",
    summary:
      "Power systems, microcontrollers, motor drivers, and sensor connections form the robot's electrical nervous system.",
    topics: ["Power systems", "Microcontrollers", "Motor drivers", "Interfaces"],
    outcomes: [
      "Explain how power and signals move through a robot.",
      "Connect sensors, controllers, and actuators safely.",
    ],
  },
  {
    id: "software-coding",
    label: "Hardware & engineering foundations",
    title: "Software & Coding",
    question: "How do we turn an idea into instructions a robot can follow?",
    summary:
      "Programs connect sensors, decisions, communication, and actions so the robot behaves as one coordinated system.",
    topics: ["Python & C++", "ROS 2", "Simulation", "Testing"],
    outcomes: [
      "Write programs that connect sensor input to robot action.",
      "Organize and test robot software so failures stay understandable.",
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
