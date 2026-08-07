export type CurriculumSubtopic = {
  name: string;
  detail: string;
  methods: string[];
};

export type CurriculumCourse = {
  id: string;
  title: string;
  summary: string;
  emphasis: string;
  topics: CurriculumSubtopic[];
};

const topic = (name: string, detail: string, methods: string[]): CurriculumSubtopic => ({
  name,
  detail,
  methods,
});

export const curriculumCourses: CurriculumCourse[] = [
  {
    id: "robot-mechanics-mechatronics",
    title: "Robot Mechanics and Mechatronic Design",
    summary: "Design the mechanisms that turn actuator effort into useful, repeatable motion.",
    emphasis: "Connect mechanics to geometry, materials, tolerances, fabrication, and serviceability.",
    topics: [
      topic(
        "Mechanisms, Actuators, and Transmissions",
        "Select motors, gears, belts, screws, linkages, and end effectors from torque, speed, stiffness, backlash, efficiency, and duty-cycle requirements.",
        ["Torque-speed curves", "Gear ratios", "Backlash", "End-effector design"],
      ),
      topic(
        "Robot Kinematics",
        "Describe configuration and motion with rigid transforms, forward and inverse kinematics, Jacobians, workspaces, and singularities.",
        ["SE(2) / SE(3)", "Forward kinematics", "Inverse kinematics", "Jacobians"],
      ),
      topic(
        "Robot Dynamics and Actuator Sizing",
        "Relate forces and torques to motion, then use inertia, friction, contact, load profiles, and thermal limits to size actuators.",
        ["Lagrangian dynamics", "Newton-Euler", "Load profiles", "Thermal margins"],
      ),
      topic(
        "CAD, Tolerances, and Manufacturability",
        "Create parametric parts and assemblies whose interfaces, fits, fasteners, materials, and fabrication processes support reliable assembly.",
        ["Parametric CAD", "Tolerance stacks", "GD&T fundamentals", "DFMA"],
      ),
    ],
  },
  {
    id: "embedded-electronics",
    title: "Embedded Systems and Electronics",
    summary: "Build the electrical and firmware layer that reads sensors and commands actuators predictably.",
    emphasis: "Treat power, timing, signal integrity, and failure behavior as explicit constraints.",
    topics: [
      topic(
        "Microcontrollers and Real-Time Firmware",
        "Use timers, interrupts, ADCs, DMA, watchdogs, state machines, and RTOS tasks to meet bounded deadlines.",
        ["Interrupts", "Timers / PWM / ADC", "RTOS tasks", "Watchdogs"],
      ),
      topic(
        "Robot Electronics, Power, and Protection",
        "Design signal-conditioning and power-distribution circuits while managing batteries, grounding, brownouts, heat, EMI, and stored energy.",
        ["Power budgets", "Regulation", "Grounding", "Overcurrent protection"],
      ),
      topic(
        "Motor Drives and Sensor Interfaces",
        "Interface motors and sensors through suitable switching devices, current measurement, commutation, analog front ends, and filtering.",
        ["H-bridges", "Current sensing", "FOC fundamentals", "Analog filtering"],
      ),
      topic(
        "Embedded Communication Buses",
        "Choose and debug buses according to bandwidth, latency, distance, noise immunity, framing, and recovery needs.",
        ["UART", "SPI / I2C", "CAN", "EtherCAT / Ethernet"],
      ),
    ],
  },
  {
    id: "vision-perception",
    title: "Computer Vision and Robot Perception",
    summary: "Extract geometry, motion, objects, and task-relevant meaning from visual and spatial sensors.",
    emphasis: "Measure calibration, detection, and pose error instead of treating perception output as truth.",
    topics: [
      topic(
        "Image Formation and Processing",
        "Model how cameras form images, then use filtering, gradients, features, and geometric operations to recover structure.",
        ["Camera models", "Convolution", "Features", "Optical flow"],
      ),
      topic(
        "Camera Calibration and Coordinate Frames",
        "Estimate intrinsic, extrinsic, stereo, and hand-eye parameters and validate the sensor-to-robot transform chain.",
        ["Intrinsics", "Extrinsics", "Stereo calibration", "Hand-eye calibration"],
      ),
      topic(
        "3D Vision and Point Clouds",
        "Recover and process depth, stereo geometry, point clouds, surfaces, and poses for navigation and manipulation.",
        ["Stereo depth", "Registration", "Segmentation", "Pose estimation"],
      ),
      topic(
        "Learned Detection and Segmentation",
        "Train and evaluate classifiers, detectors, and segmentation models while controlling dataset bias, latency, and distribution shift.",
        ["CNNs", "Object detection", "Semantic segmentation", "Model evaluation"],
      ),
    ],
  },
  {
    id: "estimation-fusion",
    title: "State Estimation and Sensor Fusion",
    summary: "Combine noisy, asynchronous measurements with motion models to estimate hidden robot state.",
    emphasis: "Represent uncertainty explicitly and validate estimates against independent evidence.",
    topics: [
      topic(
        "Probability and Bayesian Inference for Robotics",
        "Represent noise and belief using conditional probability, likelihoods, Gaussian models, covariance, and recursive updates.",
        ["Bayes rule", "Gaussian models", "Covariance", "Recursive inference"],
      ),
      topic(
        "Kalman and Nonlinear Filtering",
        "Design linear, extended, unscented, and particle filters from explicit state, process, measurement, and noise models.",
        ["Kalman filter", "EKF / UKF", "Particle filters", "Consistency checks"],
      ),
      topic(
        "Multi-Sensor Fusion",
        "Fuse encoder, IMU, GPS, camera, and range data while handling timestamps, biases, rates, outliers, and observability.",
        ["IMU preintegration", "Time alignment", "Bias estimation", "Outlier rejection"],
      ),
      topic(
        "Localization, Mapping, and SLAM",
        "Estimate pose and build maps using odometry, landmarks, scans, visual-inertial data, pose graphs, and loop closure.",
        ["AMCL", "Scan matching", "Pose graphs", "Loop closure"],
      ),
    ],
  },
  {
    id: "ai-motion-planning",
    title: "Artificial Intelligence and Motion Planning",
    summary: "Choose feasible actions from goals, geometry, uncertainty, and physical constraints.",
    emphasis: "Start with inspectable planning, then use learning where it provides a measured advantage.",
    topics: [
      topic(
        "Graph Search and Discrete Planning",
        "Formulate state spaces and use Dijkstra, A*, heuristic, and logic-based methods to find feasible or optimal plans.",
        ["Dijkstra", "A*", "Heuristics", "State-space planning"],
      ),
      topic(
        "Sampling-Based Motion Planning",
        "Plan through high-dimensional configuration spaces using collision checking, roadmaps, and rapidly exploring random trees.",
        ["Configuration space", "PRM", "RRT / RRT*", "Collision checking"],
      ),
      topic(
        "Trajectory Optimization and Collision Avoidance",
        "Optimize smooth, dynamically feasible motion under obstacle, actuator, state, and timing constraints.",
        ["CHOMP / STOMP", "Direct collocation", "Constraints", "Replanning"],
      ),
      topic(
        "Task Planning and Learning-Based Decisions",
        "Coordinate goals and recovery using state machines, behavior trees, MDPs, and carefully evaluated learned policies.",
        ["Behavior trees", "MDPs", "Reinforcement learning", "Fallback behavior"],
      ),
    ],
  },
  {
    id: "control-theory",
    title: "Control Theory",
    summary: "Regulate robot motion and force despite disturbance, noise, delay, and model error.",
    emphasis: "Design from models, tune from logged data, and keep stability and actuator limits visible.",
    topics: [
      topic(
        "Feedback and Feed-Forward Control",
        "Use feedback to reject disturbance and feed-forward models to improve tracking without hiding model mismatch.",
        ["Closed-loop response", "Feed-forward", "Stability", "Robustness"],
      ),
      topic(
        "PID Tuning and Frequency Response",
        "Tune PID action using transient response, Bode plots, stability margins, saturation, and sampling effects.",
        ["PID", "Bode plots", "Root locus", "Anti-windup"],
      ),
      topic(
        "State-Space Control and LQR",
        "Model multivariable dynamics and design state feedback, observers, pole placement, and optimal linear regulators.",
        ["State space", "Controllability", "Observers", "LQR"],
      ),
      topic(
        "Model Predictive and Trajectory Control",
        "Track trajectories while solving finite-horizon optimization problems with state, input, and safety constraints.",
        ["MPC", "Trajectory tracking", "Constraints", "Real-time solvers"],
      ),
    ],
  },
  {
    id: "robotics-software-engineering",
    title: "Robotics Software Engineering",
    summary: "Write maintainable software for long-running, hardware-facing robot systems.",
    emphasis: "Balance rapid experiments with correctness, performance, tests, and diagnostics.",
    topics: [
      topic(
        "Modern C++ and Python for Robotics",
        "Use C++ for resource-aware runtime components and Python for experiments, tools, analysis, and orchestration.",
        ["RAII", "Type safety", "NumPy", "Bindings and tooling"],
      ),
      topic(
        "Robot Software Architecture and Interfaces",
        "Partition responsibilities into cohesive components with typed contracts, explicit ownership, lifecycle, configuration, and failure semantics.",
        ["Interface contracts", "Modularity", "State ownership", "Dependencies"],
      ),
      topic(
        "Concurrency, Memory, and Performance",
        "Control threads, synchronization, allocation, and copying while measuring latency, throughput, jitter, and resource use.",
        ["Threads", "Locking", "Memory ownership", "Profiling"],
      ),
      topic(
        "Build, Test, and Debug Tooling",
        "Create reproducible builds and layered tests, then use logs, sanitizers, debuggers, traces, and CI to isolate regressions.",
        ["CMake", "GoogleTest / pytest", "Sanitizers", "CI"],
      ),
    ],
  },
  {
    id: "robot-operating-system",
    title: "Robot Operating System",
    summary: "Use ROS 2 to compose distributed capabilities with typed interfaces and operational tooling.",
    emphasis: "Build small nodes with deliberate communication, frame, lifecycle, and QoS choices.",
    topics: [
      topic(
        "ROS 2 Nodes, Topics, Services, and Actions",
        "Choose the right communication pattern for data streams, short requests, and preemptible long-running behavior.",
        ["Nodes", "Publish / subscribe", "Services", "Actions"],
      ),
      topic(
        "tf2, URDF, and Robot Models",
        "Describe robot geometry and maintain a timestamped transform tree for sensing, planning, and control.",
        ["tf2", "URDF / Xacro", "robot_state_publisher", "Frame conventions"],
      ),
      topic(
        "Launch, Parameters, Lifecycle, and Composition",
        "Configure, start, compose, transition, and recover multi-node systems with repeatable behavior.",
        ["Launch files", "Parameters", "Managed nodes", "Composition"],
      ),
      topic(
        "ROS 2 Data, Visualization, Diagnostics, and Control",
        "Record and replay data, inspect state, publish health, and connect controllers to hardware through standard interfaces.",
        ["rosbag2", "RViz", "Diagnostics", "ros2_control"],
      ),
    ],
  },
  {
    id: "real-time-distributed",
    title: "Real-Time and Distributed Systems",
    summary: "Make robot behavior timely and predictable across threads, processes, computers, and networks.",
    emphasis: "Reason about worst-case deadlines and failure behavior, not only average throughput.",
    topics: [
      topic(
        "Real-Time Scheduling and Deadlines",
        "Assign priorities, bound execution, avoid unbounded blocking, and measure latency and jitter against explicit deadlines.",
        ["Priority scheduling", "Deadline analysis", "Jitter", "PREEMPT_RT"],
      ),
      topic(
        "Threads and Synchronization",
        "Coordinate work with locks, atomics, condition variables, queues, and ownership rules while preventing races and deadlocks.",
        ["Mutexes", "Atomics", "Condition variables", "Race detection"],
      ),
      topic(
        "Inter-Process Communication and Networking",
        "Move data between processes and machines using serialization, shared memory, sockets, discovery, and fault-aware protocols.",
        ["Shared memory", "UDP / TCP", "Serialization", "Discovery"],
      ),
      topic(
        "DDS Quality of Service and Distributed Time",
        "Select communication and clock policies that match the semantics of sensor data, state, and commands.",
        ["DDS", "QoS compatibility", "Clock domains", "Time synchronization"],
      ),
    ],
  },
  {
    id: "systems-integration",
    title: "Robotic Systems Integration",
    summary: "Bring hardware and software together through contracts, calibration, diagnostics, and commissioning.",
    emphasis: "Give every interface an owner, units, timing, limits, and defined degraded behavior.",
    topics: [
      topic(
        "Sensor and Actuator Integration",
        "Connect devices while preserving units, limits, timestamps, frames, power requirements, and safe commands.",
        ["Data sheets", "Electrical bring-up", "Units and limits", "Command timeouts"],
      ),
      topic(
        "Robot Drivers and Hardware Abstraction",
        "Separate vendor protocols from stable state and command interfaces so hardware can be tested, replaced, and simulated.",
        ["Drivers", "HALs", "Plugins", "Mock hardware"],
      ),
      topic(
        "Calibration, Synchronization, and Diagnostics",
        "Align geometry and time, expose health and performance, and preserve evidence for cross-boundary fault isolation.",
        ["Calibration chains", "Timestamping", "Telemetry", "Fault isolation"],
      ),
      topic(
        "Robot Bring-Up and Commissioning",
        "Progress from power-off inspection through bench, subsystem, integrated, and bounded field tests with acceptance gates.",
        ["Bring-up plans", "Acceptance tests", "Configuration control", "Field readiness"],
      ),
    ],
  },
  {
    id: "simulation-testing",
    title: "Robot Simulation and Testing",
    summary: "Find failures before deployment with models, layered tests, replay, and evaluation.",
    emphasis: "Use simulation aggressively while documenting which physical effects it omits.",
    topics: [
      topic(
        "Physics Simulation and Robot Models",
        "Model bodies, joints, contact, sensors, actuators, and environments with enough fidelity to answer a stated question.",
        ["SDF / URDF", "Contact models", "Sensor simulation", "Model validation"],
      ),
      topic(
        "Software-in-the-Loop and Hardware-in-the-Loop",
        "Exercise production software against simulated or instrumented hardware before exposing a complete physical robot.",
        ["SIL", "HIL", "Mock hardware", "Fault injection"],
      ),
      topic(
        "Unit, Integration, and Regression Testing",
        "Isolate algorithms, verify interfaces, exercise processes together, and keep fixed failures from returning.",
        ["Unit tests", "Launch tests", "Test doubles", "Regression suites"],
      ),
      topic(
        "Logging, Replay, and Performance Evaluation",
        "Capture synchronized evidence, replay failures, trace execution, and compare task and system metrics across versions.",
        ["Structured logs", "rosbag replay", "Tracing", "Benchmarks"],
      ),
    ],
  },
  {
    id: "safety-reliability",
    title: "Robot Safety and Reliability",
    summary: "Convert hazards and failures into limits, safe states, recovery behavior, and evidence.",
    emphasis: "Apply standards that match the robot, environment, users, and jurisdiction.",
    topics: [
      topic(
        "Hazard Analysis and Risk Reduction",
        "Identify lifecycle hazards, estimate risk, eliminate hazards where possible, and document layered protection.",
        ["Risk assessment", "FMEA", "STPA", "Risk reduction hierarchy"],
      ),
      topic(
        "Emergency Stops and Safe-State Design",
        "Design stopping, interlocking, limiting, reset, and override behavior so foreseeable faults lead to controlled outcomes.",
        ["Emergency stop", "Protective stop", "Interlocks", "Safe reset"],
      ),
      topic(
        "Fault Detection, Recovery, and Reliability",
        "Detect, isolate, contain, report, and recover from faults while measuring reliability and maintainability.",
        ["Diagnostics", "Watchdogs", "Fault trees", "Reliability metrics"],
      ),
      topic(
        "Functional Safety and Robotics Standards",
        "Navigate machinery, industrial robot, mobile robot, and safety-related control standards for the intended application.",
        ["ISO 10218", "ISO 13849", "ISO 3691-4", "Compliance scope"],
      ),
    ],
  },
  {
    id: "human-robot-interaction",
    title: "Human-Robot Interaction",
    summary: "Design commands, feedback, autonomy, and recovery around people and appropriate trust.",
    emphasis: "Evaluate representative users and tasks instead of inferring usability from technical performance.",
    topics: [
      topic(
        "Interaction Design and Human Factors",
        "Design controls, modes, and feedback around workload, situation awareness, ergonomics, accessibility, and errors.",
        ["Human factors", "Mode awareness", "Workload", "Interface design"],
      ),
      topic(
        "Teleoperation and Shared Autonomy",
        "Allocate control between person and robot while preserving intent, feedback, intervention authority, and graceful degradation.",
        ["Teleoperation", "Supervisory control", "Shared control", "Handoffs"],
      ),
      topic(
        "Collaborative Robots and Operator Safety",
        "Design close-proximity work around human detection, workspace limits, contact, separation, and task-specific risk.",
        ["Human tracking", "Separation monitoring", "Force limiting", "Safeguarding"],
      ),
      topic(
        "Usability, Trust, and HRI Evaluation",
        "Measure effectiveness, workload, situation awareness, trust calibration, predictability, and recovery reproducibly.",
        ["User studies", "HRI metrics", "Trust calibration", "Reproducibility"],
      ),
    ],
  },
  {
    id: "capstone-laboratory",
    title: "Robotics Capstone Laboratory",
    summary: "Apply the full engineering cycle to a physical robot and hand off a reproducible system.",
    emphasis: "The final deliverable is measured performance, not only a successful demo video.",
    topics: [
      topic(
        "Requirements, Architecture, and Design Reviews",
        "Turn stakeholder needs into measurable requirements, interfaces, trade studies, risks, and review gates.",
        ["ConOps", "Requirements", "Architecture", "PDR / CDR"],
      ),
      topic(
        "Complete Mechatronic Build and Integration",
        "Coordinate mechanical, electrical, embedded, software, perception, planning, and control work into a staged system.",
        ["Subsystem ownership", "Interface control", "Integration order", "Configuration management"],
      ),
      topic(
        "Experimental Design and Field Testing",
        "Define metrics, controls, conditions, sample sizes, and acceptance thresholds before collecting field evidence.",
        ["Test plans", "Ground truth", "Repeatability", "Acceptance criteria"],
      ),
      topic(
        "Technical Documentation and Demonstration",
        "Deliver build instructions, architecture, source, configuration, evidence, limitations, recovery procedures, and a bounded demo.",
        ["Design record", "Reproducible build", "Test report", "Operator handoff"],
      ),
    ],
  },
];
