import type { Project } from "./types";

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
    slug: "rc-car-slam-proposal",
    title: "RC Car SLAM Proposal",
    level: "Advanced",
    focus: "RC chassis, ROS 2, odometry, 2D SLAM, mapping workflow",
    summary:
      "Plan a small RC-car-style robot that starts as a reliable teleoperated platform, then adds odometry, LiDAR, and ROS 2 SLAM for repeatable indoor mapping.",
    deliverable:
      "Site-hosted proposal, architecture diagram, validation plan, and separate implementation-repo checklist.",
    stage: "Specialization",
    learningGoals: [
      "Separate project planning from implementation so the public learning site stays stable.",
      "Define a staged SLAM path that validates the drive base before trusting map output.",
      "Connect RC control, telemetry, odometry, transforms, and LiDAR scans into a ROS 2 workflow.",
    ],
    constraints: [
      "Manual teleoperation and emergency stop must remain available during all SLAM tests.",
      "Odometry must be measured and bounded before mapping results are considered successful.",
      "Implementation code, hardware bring-up logs, and experiments should live in a separate repo.",
    ],
    milestones: [
      "Publish the proposal and repo boundary on this site.",
      "Bring up the RC base with teleop, watchdog stop, encoder logs, and battery telemetry.",
      "Run ROS 2 mapping in a small indoor course, save maps, and document failure cases.",
    ],
    proposal: {
      overview: [
        "Build a compact RC-car-style mobile robot that can be driven manually while collecting the sensor data needed for SLAM.",
        "Treat SLAM as the integration milestone, not the starting point: the base should first prove power, control, telemetry, encoder odometry, and safety.",
        "Use this Learn Robotics site as the planning and portfolio surface; keep firmware, ROS 2 packages, CAD, logs, and issue tracking in a dedicated development repository.",
      ],
      repositoryBoundary: [
        "This site keeps the proposal, architecture, milestone checklist, demo writeups, and links to final evidence.",
        "The separate implementation repo owns firmware, ROS 2 packages, launch files, bag files, hardware notes, and experiment scripts.",
        "Only promote stable lessons back to this site after the implementation repo has a working milestone or useful postmortem.",
      ],
      hardwarePlan: [
        "Start from a sturdy RC or rover chassis with room for a controller, battery, motor driver, encoder wiring, and a sensor mast.",
        "Use wheel encoders and battery voltage sensing before adding autonomy sensors; SLAM quality depends heavily on predictable motion.",
        "Add a 2D LiDAR when the base can repeat slow straight-line and turning tests without brownouts, loose wiring, or uncontrolled drift.",
      ],
      softwarePlan: [
        "Phase 1 uses firmware teleop with a watchdog stop, speed limits, and telemetry for command, PWM, encoder, and battery state.",
        "Phase 2 adds a ROS 2 bridge that publishes odometry, battery status, and transforms while accepting velocity commands.",
        "Phase 3 integrates LiDAR scans, tf2 frames, rosbag capture, SLAM Toolbox or an equivalent 2D SLAM package, and saved map artifacts.",
      ],
      validationPlan: [
        "Bench-test one motor channel, then both drive channels, before floor tests.",
        "Record repeated 1 m straight drives and 90 degree turns to estimate odometry error before mapping.",
        "Map one small indoor loop at low speed, save the map, then rerun localization against the same space to check repeatability.",
      ],
      risks: [
        "RC chassis speed can exceed safe indoor testing speed, so early firmware should enforce conservative limits.",
        "Wheel slip, steering backlash, and weak encoder mounting can make SLAM tuning look worse than it is.",
        "Power noise from motors can reset controllers or corrupt sensor data unless motor and logic power are planned carefully.",
      ],
      openDecisions: [
        "Differential-drive rover chassis or Ackermann-style RC car?",
        "2D LiDAR first, or camera/depth sensor after odometry is stable?",
        "Raspberry Pi plus microcontroller bridge, or a single Linux-capable robotics controller?",
        "Indoor hallway mapping only, or a later outdoor localization extension?",
      ],
    },
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
