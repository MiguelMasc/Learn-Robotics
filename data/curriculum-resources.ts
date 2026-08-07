import { curriculumCourses } from "./curriculum";

export type ResourceFormat =
  | "Book chapter"
  | "Course lesson"
  | "Documentation page"
  | "Standard"
  | "Research paper"
  | "Technical guide";

export type TechnicalResource = {
  title: string;
  href: string;
  publisher: string;
  format: ResourceFormat;
  description: string;
};

const source = (
  title: string,
  href: string,
  publisher: string,
  format: ResourceFormat,
  description: string,
): TechnicalResource => ({ title, href, publisher, format, description });

const r = {
  // Robot mechanics and mechatronic design
  mrGearing: source("Modern Robotics §8.9: Actuation, Gearing, and Friction", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/8-9-actuation-gearing-and-friction/", "Lynch & Park", "Book chapter", "Connects actuator torque, gearing, friction, and joint dynamics."),
  mitDesignNotes: source("2.007 Design and Manufacturing I: Lecture Notes", "https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/pages/lecture-notes/", "MIT OpenCourseWare", "Course lesson", "Robot design notes on machine elements, fabrication, and design decisions."),
  openStaxTorque: source("University Physics §10.6: Torque", "https://openstax.org/books/university-physics-volume-1/pages/10-6-torque", "OpenStax", "Book chapter", "A focused treatment of torque, lever arms, and rotational equilibrium."),
  mitDesignSyllabus: source("2.007 Design and Manufacturing I: Course Objectives", "https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/pages/syllabus/", "MIT OpenCourseWare", "Course lesson", "Defines analysis, machine-element selection, experimentation, CAD, and fabrication outcomes."),
  mrRigidMotions: source("Modern Robotics §3.2.1: Rotation Matrices", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-1-of-2/", "Lynch & Park", "Book chapter", "Introduces coordinate frames and rotation representations used throughout robotics."),
  mrForwardKinematics: source("Modern Robotics §4.1.1: Product of Exponentials", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/4-1-1-product-of-exponentials-formula-in-the-space-frame/", "Lynch & Park", "Book chapter", "Derives forward kinematics in the space frame."),
  mrJacobian: source("Modern Robotics §5.1.1: Space Jacobian", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/5-1-1-space-jacobian/", "Lynch & Park", "Book chapter", "Builds manipulator velocity mappings and Jacobians."),
  mrInverseKinematics: source("Modern Robotics §6.2: Numerical Inverse Kinematics", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/6-2-numerical-inverse-kinematics-part-1-of-2/", "Lynch & Park", "Book chapter", "Uses iterative numerical methods to solve inverse kinematics."),
  mrLagrangian: source("Modern Robotics §8.1: Lagrangian Dynamics", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/chapter-8-1-lagrangian-formulation-of-dynamics-part-1-of-2/", "Lynch & Park", "Book chapter", "Derives equations of motion for robot mechanisms."),
  mrNewtonEuler: source("Modern Robotics §8.3: Newton-Euler Inverse Dynamics", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/8-3-newton-euler-inverse-dynamics/", "Lynch & Park", "Book chapter", "Computes joint forces and torques efficiently."),
  underactuatedMultibody: source("Underactuated Robotics: Multi-Body Dynamics", "https://underactuated.csail.mit.edu/multibody.html", "MIT CSAIL", "Book chapter", "Covers Lagrangian multibody models and contact dynamics."),
  freeCadPartDesign: source("FreeCAD Part Design Workbench", "https://wiki.freecad.org/PartDesign_Workbench", "FreeCAD Project", "Documentation page", "Specific workflow for parametric, feature-based solid parts."),
  freeCadTechDraw: source("FreeCAD TechDraw Workbench", "https://wiki.freecad.org/TechDraw_Workbench", "FreeCAD Project", "Documentation page", "Creates dimensioned technical drawings from parametric models."),

  // Embedded systems and electronics
  valvanoPorts: source("Embedded Systems, Chapter 6: Microcontroller Ports", "https://users.ece.utexas.edu/~valvano/Volume1/E-Book/C6_MicrocontrollerPorts.htm", "UT Austin", "Book chapter", "Digital I/O, registers, and hardware-facing software."),
  valvanoInterrupts: source("Embedded Systems, Chapter 12: Interrupts", "https://users.ece.utexas.edu/~valvano/Volume1/E-Book/C12_Interrupts.htm", "UT Austin", "Book chapter", "Interrupt timing, synchronization, and Cortex-M implementation."),
  freeRtosTasks: source("FreeRTOS Kernel: Tasks and Co-routines", "https://www.freertos.org/Documentation/02-Kernel/02-Kernel-features/01-Tasks-and-co-routines/00-Tasks-and-co-routines", "FreeRTOS", "Documentation page", "Task states, priorities, scheduling, and blocking behavior."),
  freeRtosQueues: source("FreeRTOS Kernel: Queue Management", "https://www.freertos.org/Documentation/02-Kernel/02-Kernel-features/02-Queues-mutexes-and-semaphores/01-Queues", "FreeRTOS", "Documentation page", "Bounded inter-task communication for embedded applications."),
  mitCircuitsNotes: source("6.002 Circuits and Electronics: Lecture Notes", "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/pages/lecture-notes/", "MIT OpenCourseWare", "Course lesson", "Focused lessons on circuits, devices, energy storage, and dynamic response."),
  openStaxDcCircuits: source("University Physics, Chapter 10: Direct-Current Circuits", "https://openstax.org/books/university-physics-volume-2/pages/10-introduction", "OpenStax", "Book chapter", "Current, resistance, networks, RC behavior, and electrical safety."),
  tiMotorDrivers: source("TI Precision Labs: Introduction to Motor Drivers", "https://www.ti.com/video/series/precision-labs/ti-precision-labs-introduction-to-motor-drivers.html", "Texas Instruments", "Technical guide", "H-bridges, current regulation, losses, and protection."),
  valvanoAdc: source("Embedded Systems, Chapter 14: ADC and Data Acquisition", "https://users.ece.utexas.edu/~valvano/Volume1/E-Book/C14_ADCdataAcquisition.htm", "UT Austin", "Book chapter", "Sampling, quantization, ADC configuration, and sensor acquisition."),
  valvanoUart: source("Embedded Systems, Chapter 11: UART", "https://users.ece.utexas.edu/~valvano/Volume1/E-Book/C11_SerialInterface.htm", "UT Austin", "Book chapter", "Serial framing, synchronization, and buffered I/O."),
  kvaserCan: source("CAN Protocol Tutorial", "https://kvaser.com/can-protocol-tutorial/", "Kvaser", "Technical guide", "Frames, arbitration, error handling, and physical-layer considerations."),
  ethercatTechnology: source("EtherCAT Technology Overview", "https://www.ethercat.org/en/technology.html", "EtherCAT Technology Group", "Technical guide", "Processing, synchronization, topology, and diagnostics for EtherCAT."),

  // Computer vision and perception
  szeliskiImageFormation: source("Computer Vision, Chapter 2: Image Formation", "https://szeliski.org/Book/", "Richard Szeliski", "Book chapter", "Use the Chapter 2 download for imaging geometry, optics, and camera models."),
  openCvFiltering: source("OpenCV: Smoothing Images", "https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html", "OpenCV", "Documentation page", "Specific examples of convolution, blur, Gaussian, median, and bilateral filters."),
  openCvFeatures: source("OpenCV: Feature Detection and Description", "https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html", "OpenCV", "Documentation page", "Focused feature, descriptor, and matching tutorials."),
  cs231nImageClassification: source("CS231n: Image Classification", "https://cs231n.github.io/classification/", "Stanford University", "Course lesson", "Data-driven image classification, evaluation, and nearest-neighbor baselines."),
  openCvCalibration: source("OpenCV: Camera Calibration", "https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html", "OpenCV", "Documentation page", "Intrinsic calibration, distortion, reprojection, and undistortion."),
  rosCameraCalibration: source("ROS Camera Calibration", "https://docs.ros.org/en/rolling/p/camera_calibration/doc/index.html", "Open Robotics", "Documentation page", "Practical monocular and stereo calibration workflow."),
  openCvHandEye: source("OpenCV: Hand-Eye Calibration", "https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga887960ea1bde84784e7f1710a922b93c", "OpenCV", "Documentation page", "Specific API and formulations for camera-to-gripper calibration."),
  mrHomogeneousTransforms: source("Modern Robotics §3.3.1: Homogeneous Transformation Matrices", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/", "Lynch & Park", "Book chapter", "Relates frame transforms, rotations, and translations."),
  open3dIcp: source("Open3D: ICP Registration", "https://www.open3d.org/docs/latest/tutorial/pipelines/icp_registration.html", "Open3D", "Documentation page", "Point-to-point and point-to-plane registration with evaluation."),
  pclPlaneSegmentation: source("PCL: Planar Model Segmentation", "https://pcl.readthedocs.io/projects/tutorials/en/latest/planar_segmentation.html", "Point Cloud Library", "Documentation page", "RANSAC plane fitting and point-cloud model extraction."),
  openCvStereo: source("OpenCV: Depth Map from Stereo Images", "https://docs.opencv.org/4.x/dd/d53/tutorial_py_depthmap.html", "OpenCV", "Documentation page", "Disparity and stereo depth reconstruction."),
  open3dPointCloud: source("Open3D: Point Cloud Processing", "https://www.open3d.org/docs/latest/tutorial/Basic/pointcloud.html", "Open3D", "Documentation page", "Downsampling, normals, cropping, and point-cloud operations."),
  pytorchDetection: source("PyTorch: Object Detection Finetuning Tutorial", "https://docs.pytorch.org/tutorials/intermediate/torchvision_tutorial.html", "PyTorch", "Documentation page", "End-to-end training and evaluation of a detector and instance segmenter."),
  tensorflowSegmentation: source("TensorFlow: Image Segmentation", "https://www.tensorflow.org/tutorials/images/segmentation", "TensorFlow", "Documentation page", "Builds and evaluates a semantic segmentation model."),
  cs231nConvNets: source("CS231n: Convolutional Networks", "https://cs231n.github.io/convolutional-networks/", "Stanford University", "Course lesson", "CNN layers, architectures, computation, and design patterns."),
  cs231nTransfer: source("CS231n: Transfer Learning", "https://cs231n.github.io/transfer-learning/", "Stanford University", "Course lesson", "Dataset size, fine-tuning, feature reuse, and practical model transfer."),

  // Estimation and sensor fusion
  kalmanDiscreteBayes: source("Kalman and Bayesian Filters, Chapter 2: Discrete Bayes", "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/02-Discrete-Bayes.ipynb", "Roger Labbe", "Book chapter", "Executable introduction to recursive Bayesian estimation."),
  kalmanGaussians: source("Kalman and Bayesian Filters, Chapter 5: Multivariate Gaussians", "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/05-Multivariate-Gaussians.ipynb", "Roger Labbe", "Book chapter", "Covariance, multivariate uncertainty, and Gaussian operations."),
  mitProbabilityBayes: source("6.041SC: Bayesian Statistical Inference", "https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/pages/unit-ii/lecture-16/", "MIT OpenCourseWare", "Course lesson", "Bayesian inference, estimators, and uncertainty from a probability course."),
  harvardConditional: source("Stat 110: Conditional Probability", "https://projects.iq.harvard.edu/stat110/youtube", "Harvard University", "Course lesson", "Lectures covering conditional probability, Bayes rule, and distributions."),
  kalmanMultivariate: source("Kalman and Bayesian Filters, Chapter 6: Multivariate Kalman Filters", "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/06-Multivariate-Kalman-Filters.ipynb", "Roger Labbe", "Book chapter", "State-space Kalman filter design with executable examples."),
  kalmanDesign: source("Kalman and Bayesian Filters, Chapter 8: Designing Kalman Filters", "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/08-Designing-Kalman-Filters.ipynb", "Roger Labbe", "Book chapter", "Practical state, process, measurement, and noise model design."),
  kalmanEkf: source("Kalman and Bayesian Filters, Chapter 11: Extended Kalman Filters", "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/11-Extended-Kalman-Filters.ipynb", "Roger Labbe", "Book chapter", "Linearization and implementation of the EKF."),
  underactuatedEstimation: source("Underactuated Robotics: State Estimation", "https://underactuated.csail.mit.edu/state_estimation.html", "MIT CSAIL", "Book chapter", "Observers, Kalman filtering, recursive Bayes filters, and smoothing."),
  robotLocalizationSensors: source("robot_localization: Preparing Sensor Data", "https://docs.ros.org/en/noetic/api/robot_localization/html/preparing_sensor_data.html", "Open Robotics", "Documentation page", "Frames, covariances, IMU conventions, and sensor configuration."),
  nav2Localization: source("Nav2: Mapping and Localization", "https://docs.nav2.org/setup_guides/sensors/mapping_localization.html", "Navigation2", "Documentation page", "Connects maps, localization, transforms, and navigation."),
  slamToolbox: source("SLAM Toolbox: Localization and Lifelong Mapping", "https://docs.ros.org/en/humble/p/slam_toolbox/", "Open Navigation", "Documentation page", "Pose-graph mapping, serialization, localization, and continuing maps."),
  graphSlamPaper: source("A Tutorial on Graph-Based SLAM", "https://www2.informatik.uni-freiburg.de/~stachnis/pdf/grisetti10titsmag.pdf", "IEEE / University of Freiburg", "Research paper", "Graph construction, nonlinear error minimization, and SLAM back ends."),

  // Planning and decisions
  lavalleDiscrete: source("Planning Algorithms, Chapter 2: Discrete Planning", "https://lavalle.pl/planning/ch2.pdf", "Steven M. LaValle", "Book chapter", "State-space search, A*, Dijkstra, logic, and optimal planning."),
  mitDijkstra: source("6.006 Lecture 16: Dijkstra", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-16-dijkstra/", "MIT OpenCourseWare", "Course lesson", "Shortest paths, priority queues, and correctness."),
  mrGraphSearch: source("Modern Robotics §10.2.4: Graph Search", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/10-2-4-graph-search/", "Lynch & Park", "Book chapter", "Applies graph search to robot configuration spaces."),
  nav2SmacPlanner: source("Nav2 Smac Planner", "https://docs.nav2.org/configuration/packages/configuring-smac-planner.html", "Navigation2", "Documentation page", "Configures grid, hybrid, and state-lattice A* planners."),
  lavalleSampling: source("Planning Algorithms, Chapter 5: Sampling-Based Motion Planning", "https://lavalle.pl/planning/ch5.pdf", "Steven M. LaValle", "Book chapter", "PRMs, RRTs, collision detection, sampling, and metrics."),
  mrSampling: source("Modern Robotics §10.5: Sampling Methods", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/10-5-sampling-methods-for-motion-planning-part-1-of-2/", "Lynch & Park", "Book chapter", "Introduces sampling-based planners and their tradeoffs."),
  omplPlanners: source("OMPL: Available Planners", "https://ompl.kavrakilab.org/planners.html", "Open Motion Planning Library", "Documentation page", "Planner families, guarantees, and selection guidance."),
  moveitPlanning: source("MoveIt: Motion Planning Pipeline", "https://moveit.picknik.ai/main/doc/examples/motion_planning_pipeline/motion_planning_pipeline_tutorial.html", "MoveIt", "Documentation page", "Collision-aware motion requests and planning-pipeline configuration."),
  underactuatedTrajOpt: source("Underactuated Robotics: Trajectory Optimization", "https://underactuated.csail.mit.edu/trajopt.html", "MIT CSAIL", "Book chapter", "Direct shooting, collocation, constraints, and nonlinear optimization."),
  mrNonlinearOpt: source("Modern Robotics §10.7: Nonlinear Optimization", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/10-7-nonlinear-optimization/", "Lynch & Park", "Book chapter", "Optimization-based motion planning with dynamic and collision constraints."),
  moveitChomp: source("MoveIt: CHOMP Planner", "https://moveit.picknik.ai/main/doc/how_to_guides/chomp_planner/chomp_planner_tutorial.html", "MoveIt", "Documentation page", "Configures gradient-based trajectory optimization and obstacle costs."),
  nav2CollisionMonitor: source("Nav2 Collision Monitor", "https://docs.nav2.org/configuration/packages/collision_monitor/configuring-collision-monitor-node.html", "Navigation2", "Documentation page", "Runtime collision zones, slowdown, and stop behavior."),
  behaviorTreeIntro: source("BehaviorTree.CPP Tutorial 1: Create a Tree", "https://www.behaviortree.dev/docs/tutorial-basics/tutorial_01_first_tree/", "BehaviorTree.CPP", "Documentation page", "Builds an inspectable behavior tree from actions and conditions."),
  suttonBartoMdp: source("Reinforcement Learning, Chapter 3: Finite MDPs", "http://incompleteideas.net/book/RLbook2020.pdf#page=63", "Sutton & Barto", "Book chapter", "States, actions, rewards, returns, policies, and value functions."),
  nav2BtNavigator: source("Nav2 Behavior-Tree Navigator", "https://docs.nav2.org/configuration/packages/configuring-bt-navigator.html", "Navigation2", "Documentation page", "Task-level navigation trees, plugins, recovery, and preemption."),
  lavalleDecision: source("Planning Algorithms, Chapter 10: Decision-Theoretic Planning", "https://lavalle.pl/planning/ch10.pdf", "Steven M. LaValle", "Book chapter", "Planning under uncertainty with information and decision models."),

  // Control theory
  mrControlOverview: source("Modern Robotics §11.1: Control System Overview", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/", "Lynch & Park", "Book chapter", "Motion, force, hybrid, and impedance control objectives."),
  underactuatedPendulum: source("Underactuated Robotics: The Simple Pendulum", "https://underactuated.csail.mit.edu/pend.html", "MIT CSAIL", "Book chapter", "A compact case study in nonlinear dynamics, energy, and feedback."),
  mitFeedbackNotes: source("2.14 Feedback Control: Lecture Notes", "https://ocw.mit.edu/courses/2-14-analysis-and-design-of-feedback-control-systems-spring-2014/pages/lecture-notes/", "MIT OpenCourseWare", "Course lesson", "Time, frequency, state-space, robustness, and implementation lessons."),
  mrVelocityControl: source("Modern Robotics §11.3: Motion Control with Velocity Inputs", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-3-motion-control-with-velocity-inputs-part-1-of-3/", "Lynch & Park", "Book chapter", "Feedback laws for velocity-commanded robots."),
  librePid: source("Engineering LibreTexts: PID Control", "https://eng.libretexts.org/Bookshelves/Industrial_and_Systems_Engineering/Chemical_Process_Dynamics_and_Controls_(Woolf)/09%3A_Proportional-Integral-Derivative_(PID)_Control", "LibreTexts", "Book chapter", "Proportional, integral, derivative, tuning, and response behavior."),
  mitFeedbackDesign: source("2.017J: Feedback Control System Design", "https://ocw.mit.edu/courses/2-017j-design-of-electromechanical-robotic-systems-fall-2009/resources/mit2_017jf09_control/", "MIT OpenCourseWare", "Course lesson", "Closed-loop, PID, and state-space design for electromechanical systems."),
  underactuatedLqr: source("Underactuated Robotics: Linear Quadratic Regulators", "https://underactuated.csail.mit.edu/lqr.html", "MIT CSAIL", "Book chapter", "Finite- and infinite-horizon LQR, Riccati equations, and tracking."),
  mitStateSpace: source("16.30 Feedback Control Systems", "https://ocw.mit.edu/courses/16-30-feedback-control-systems-fall-2010/pages/lecture-notes/", "MIT OpenCourseWare", "Course lesson", "State-space control, observers, robustness, and implementation."),
  osqpMpc: source("OSQP: Model Predictive Control Example", "https://osqp.org/docs/examples/mpc.html", "OSQP", "Documentation page", "A complete constrained linear MPC formulation and implementation."),
  mrTorqueControl: source("Modern Robotics §11.4: Motion Control with Torque Inputs", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-4-motion-control-with-torque-or-force-inputs-part-1-of-3/", "Lynch & Park", "Book chapter", "Computed-torque and model-based trajectory tracking."),

  // Robotics software engineering
  cppResources: source("C++ Core Guidelines: Resource Management", "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-resource", "ISO C++ Foundation", "Technical guide", "RAII, ownership, handles, allocation, and resource safety."),
  pythonClasses: source("Python Tutorial, Chapter 9: Classes", "https://docs.python.org/3/tutorial/classes.html", "Python Software Foundation", "Book chapter", "Classes, objects, inheritance, iterators, and data models."),
  numpyQuickstart: source("NumPy Quickstart", "https://numpy.org/doc/stable/user/quickstart.html", "NumPy", "Documentation page", "Arrays, shapes, vectorized operations, indexing, and linear algebra."),
  pybindBasics: source("pybind11: First Steps", "https://pybind11.readthedocs.io/en/stable/basics.html", "pybind11", "Documentation page", "Builds C++ extensions and embeds Python cleanly."),
  googleDesignDocs: source("Software Engineering at Google, Chapter 10: Documentation", "https://abseil.io/resources/swe-book/html/ch10.html", "Google", "Book chapter", "Documentation as code, audience design, and maintainability."),
  rosComposition: source("ROS 2 Component Composition", "https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Composition.html", "Open Robotics", "Documentation page", "Process boundaries, components, containers, and deployment tradeoffs."),
  rosLifecycle: source("ROS 2 Managed Nodes", "https://design.ros2.org/articles/node_lifecycle.html", "Open Robotics", "Technical guide", "A state machine for configuration, activation, errors, and cleanup."),
  nasaArchitecture: source("NASA Systems Engineering Handbook: System Design Processes", "https://www.nasa.gov/reference/4-0-system-design-processes/", "NASA", "Book chapter", "Requirements, architecture, logical decomposition, and design solutions."),
  ostepThreads: source("Operating Systems: Three Easy Pieces, Chapter 26: Concurrency", "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf", "University of Wisconsin–Madison", "Book chapter", "Threads, shared state, nondeterminism, and race conditions."),
  ostepLocks: source("Operating Systems: Three Easy Pieces, Chapter 28: Locks", "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf", "University of Wisconsin–Madison", "Book chapter", "Lock correctness, performance, spin locks, and sleeping locks."),
  cppConcurrency: source("C++ Core Guidelines: Concurrency", "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-concurrency", "ISO C++ Foundation", "Technical guide", "Rules for threads, shared data, tasks, and synchronization."),
  clangProfiler: source("Clang AddressSanitizer", "https://clang.llvm.org/docs/AddressSanitizer.html", "LLVM", "Documentation page", "Detects use-after-free, bounds errors, and related memory faults."),
  cmakeTutorial: source("CMake Tutorial", "https://cmake.org/cmake/help/latest/guide/tutorial/index.html", "Kitware", "Documentation page", "Stepwise targets, libraries, tests, installation, and dependencies."),
  googleTest: source("GoogleTest Primer", "https://google.github.io/googletest/primer.html", "Google", "Documentation page", "Repeatable C++ tests, assertions, fixtures, and test suites."),
  googleTestingChapter: source("Software Engineering at Google, Chapter 11: Testing Overview", "https://abseil.io/resources/swe-book/html/ch11.html", "Google", "Book chapter", "Test size, scope, determinism, confidence, and maintainability."),

  // ROS 2
  rosNodes: source("ROS 2 Concepts: Nodes", "https://docs.ros.org/en/rolling/Concepts/Basic/About-Nodes.html", "Open Robotics", "Documentation page", "Node responsibilities, discovery, parameters, and graph participation."),
  rosInterfaces: source("ROS 2: Topics, Services, and Actions", "https://docs.ros.org/en/rolling/Concepts/Basic/Interfaces-Topics-Services-Actions.html", "Open Robotics", "Documentation page", "Chooses interfaces according to data flow and task semantics."),
  rosTopics: source("ROS 2 Concepts: Topics", "https://docs.ros.org/en/rolling/Concepts/Basic/About-Topics.html", "Open Robotics", "Documentation page", "Strongly typed publish-subscribe streams and topic behavior."),
  rosActions: source("ROS 2 Concepts: Actions", "https://docs.ros.org/en/rolling/Concepts/Basic/About-Actions.html", "Open Robotics", "Documentation page", "Long-running goals with feedback, results, cancellation, and preemption."),
  rosTf2: source("ROS 2 tf2 Introduction", "https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Tf2.html", "Open Robotics", "Documentation page", "Timestamped transform trees and frame relationships."),
  rosUrdf: source("ROS 2: URDF with robot_state_publisher", "https://docs.ros.org/en/rolling/Tutorials/Intermediate/URDF/Using-URDF-with-Robot-State-Publisher-py.html", "Open Robotics", "Documentation page", "Builds a robot model and publishes its link transforms."),
  rosTf2Frames: source("ROS 2 tf2: Adding a Frame", "https://docs.ros.org/en/rolling/Tutorials/Intermediate/Tf2/Adding-A-Frame-Py.html", "Open Robotics", "Documentation page", "Adds static and dynamic frames to a transform tree."),
  rosRobotStatePublisher: source("robot_state_publisher", "https://docs.ros.org/en/rolling/p/robot_state_publisher/", "Open Robotics", "Documentation page", "Publishes link poses from a URDF and joint states."),
  rosLaunch: source("ROS 2: Creating a Launch File", "https://docs.ros.org/en/rolling/Tutorials/Intermediate/Launch/Creating-Launch-Files.html", "Open Robotics", "Documentation page", "Describes and starts a configured multi-process ROS system."),
  rosParameters: source("ROS 2: Using Parameters in a Class", "https://docs.ros.org/en/rolling/Tutorials/Beginner-Client-Libraries/Using-Parameters-In-A-Class-CPP.html", "Open Robotics", "Documentation page", "Declares, reads, and updates typed runtime configuration."),
  rosComponents: source("ROS 2: Composing Multiple Nodes", "https://docs.ros.org/en/rolling/Tutorials/Intermediate/Composition.html", "Open Robotics", "Documentation page", "Runs composable nodes in shared or separate containers."),
  rosBag: source("ROS 2: Recording and Playing Back Data", "https://docs.ros.org/en/rolling/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.html", "Open Robotics", "Documentation page", "Records selected topics and replays experiments."),
  rosRviz: source("RViz User Guide", "https://docs.ros.org/en/rolling/Tutorials/Intermediate/RViz/RViz-User-Guide/RViz-User-Guide.html", "Open Robotics", "Documentation page", "Displays frames, sensors, robot models, markers, and planning data."),
  rosDiagnostics: source("diagnostic_aggregator Analyzer Configuration", "https://docs.ros.org/en/rolling/p/diagnostic_aggregator/", "Open Robotics", "Documentation page", "Aggregates component health into structured robot status."),
  ros2ControlHardware: source("ros2_control Hardware Interface Types", "https://control.ros.org/rolling/doc/ros2_control/hardware_interface/doc/hardware_interface_types_userdoc.html", "ros2_control", "Documentation page", "State and command interfaces for joints, sensors, and GPIO."),

  // Real-time and distributed systems
  rosRealTime: source("ROS 2: Real-Time Programming", "https://docs.ros.org/en/rolling/Tutorials/Demos/Real-Time-Programming.html", "Open Robotics", "Documentation page", "Memory locking, allocation avoidance, scheduling, and latency tests."),
  ostepScheduling: source("Operating Systems: Three Easy Pieces, Chapter 7: CPU Scheduling", "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf", "University of Wisconsin–Madison", "Book chapter", "Scheduling metrics, policies, turnaround, and response time."),
  linuxRealTime: source("Linux Kernel: Real-Time Theory", "https://docs.kernel.org/core-api/real-time/theory.html", "Linux Kernel", "Documentation page", "Preemption, locking, and real-time kernel behavior."),
  rosExecutor: source("ROS 2 Execution Management", "https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Executors.html", "Open Robotics", "Documentation page", "Callback groups, executors, scheduling semantics, and priorities."),
  ostepConditionVariables: source("Operating Systems: Three Easy Pieces, Chapter 30: Condition Variables", "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf", "University of Wisconsin–Madison", "Book chapter", "Waiting, signaling, producer-consumer queues, and correctness."),
  cppThreadSafety: source("C++ Core Guidelines: CP.2–CP.22", "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#SScp-con", "ISO C++ Foundation", "Technical guide", "Specific rules for threads, shared data, races, and locks."),
  boostSharedMemory: source("Boost.Interprocess: Shared Memory", "https://www.boost.org/doc/libs/latest/doc/html/interprocess/sharedmemorybetweenprocesses.html", "Boost", "Documentation page", "Creates and maps shared-memory segments between processes."),
  beejSockets: source("Beej's Guide, Chapter 5: System Calls", "https://beej.us/guide/bgnet/html/split/system-calls-or-bust.html", "Brian Hall", "Book chapter", "Sockets, bind, connect, listen, accept, send, and receive."),
  fastDdsDiscovery: source("Fast DDS: Discovery", "https://fast-dds.docs.eprosima.com/en/latest/fastdds/discovery/discovery.html", "eProsima", "Documentation page", "DDS participant, endpoint, and server discovery mechanisms."),
  rosIntraProcess: source("ROS 2 Intra-Process Communication", "https://design.ros2.org/articles/intraprocess_communications.html", "Open Robotics", "Technical guide", "Message ownership and copy-avoidance inside a process."),
  rosQos: source("ROS 2 Quality of Service Settings", "https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Quality-of-Service-Settings.html", "Open Robotics", "Documentation page", "Reliability, durability, history, deadline, and liveliness policies."),
  fastDdsQos: source("Fast DDS: Quality of Service", "https://fast-dds.docs.eprosima.com/en/latest/fastdds/dds_layer/core/policy/policy.html", "eProsima", "Documentation page", "DDS policy definitions and endpoint behavior."),
  rosClock: source("ROS 2 Design: Clock and Time", "https://design.ros2.org/articles/clock_and_time.html", "Open Robotics", "Technical guide", "System, steady, and ROS time with simulation and clock jumps."),
  rosTopicStats: source("ROS 2: Topic Statistics", "https://docs.ros.org/en/rolling/Tutorials/Advanced/Topic-Statistics-Tutorial/Topic-Statistics-Tutorial.html", "Open Robotics", "Documentation page", "Measures message age and period distributions."),

  // Systems integration
  rosControlWritingHardware: source("ros2_control: Writing a Hardware Component", "https://control.ros.org/rolling/doc/ros2_control/hardware_interface/doc/writing_new_hardware_component.html", "ros2_control", "Documentation page", "Implements lifecycle, read/write, diagnostics, and plugin export."),
  rosControlExample7: source("ros2_control Example 7: Full 6-DOF Robot", "https://control.ros.org/rolling/doc/ros2_control_demos/example_7/doc/userdoc.html", "ros2_control", "Documentation page", "End-to-end robot description, driver, controller, and launch integration."),
  rosControlMock: source("ros2_control Mock Components", "https://control.ros.org/rolling/doc/ros2_control/hardware_interface/doc/mock_components_userdoc.html", "ros2_control", "Documentation page", "Tests controllers and integration without physical hardware."),
  rosSensorHeader: source("sensor_msgs Header Conventions", "https://docs.ros.org/en/rolling/p/sensor_msgs/", "Open Robotics", "Documentation page", "Timestamp and frame metadata for sensor messages."),
  rosMessageFilters: source("ROS 2 Approximate Time Synchronizer", "https://docs.ros.org/en/rolling/p/message_filters/doc/Tutorials/Approximate-Synchronizer-Python.html", "Open Robotics", "Documentation page", "Synchronizes messages with close but unequal timestamps."),
  nasaProductRealization: source("NASA Handbook, Chapter 5: Product Realization", "https://www.nasa.gov/reference/5-0-product-realization/", "NASA", "Book chapter", "Implementation, integration, verification, validation, and transition."),
  nasaFundamentals: source("NASA Handbook, Chapter 2: Systems Engineering Fundamentals", "https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/", "NASA", "Book chapter", "Interfaces, integration, verification, validation, and lifecycle thinking."),
  rosDoctor: source("ROS 2: Using ros2doctor", "https://docs.ros.org/en/rolling/Tutorials/Beginner-Client-Libraries/Getting-Started-With-Ros2doctor.html", "Open Robotics", "Documentation page", "Checks environment, network, package, and middleware configuration."),

  // Simulation and testing
  gazeboSdfWorlds: source("Gazebo: Build Your Own Robot", "https://gazebosim.org/docs/latest/building_robot/", "Gazebo", "Documentation page", "Constructs links, joints, inertial properties, and plugins in SDF."),
  gazeboSensors: source("Gazebo: Sensors", "https://gazebosim.org/docs/latest/sensors/", "Gazebo", "Documentation page", "Adds and configures simulated camera, IMU, and other sensors."),
  gazeboPhysics: source("SDFormat Physics Specification", "http://sdformat.org/spec?ver=1.12&elem=physics", "Open Source Robotics Foundation", "Documentation page", "Defines simulation engines, solver settings, and contact parameters."),
  mrForwardDynamics: source("Modern Robotics §8.5: Forward Dynamics", "https://modernrobotics.northwestern.edu/nu-gm-book-resource/8-5-forward-dynamics-of-open-chains/", "Lynch & Park", "Book chapter", "Computes acceleration and integrates simulated robot motion."),
  gazeboRos2Control: source("ros2_control Example 9: Gazebo", "https://control.ros.org/rolling/doc/ros2_control_demos/example_9/doc/userdoc.html", "ros2_control", "Documentation page", "Runs the same controllers against simulated hardware."),
  px4Sitl: source("PX4: Software-in-the-Loop Simulation", "https://docs.px4.io/main/en/simulation/", "PX4", "Documentation page", "Runs production flight software against simulated vehicles and sensors."),
  px4Hitl: source("PX4: Hardware-in-the-Loop Simulation", "https://docs.px4.io/main/en/simulation/hitl.html", "PX4", "Documentation page", "Connects physical autopilot hardware to a simulator."),
  nasaVvAppendix: source("NASA Handbook Appendix: Verification and Validation", "https://www.nasa.gov/reference/system-engineering-handbook-appendix/", "NASA", "Book chapter", "Verification matrices, validation plans, methods, and test articles."),
  rosLaunchTesting: source("ROS 2 launch_testing", "https://docs.ros.org/en/rolling/p/launch_testing/", "Open Robotics", "Documentation page", "Integration tests for processes, output, exit codes, and runtime interaction."),
  ctestManual: source("CTest Manual", "https://cmake.org/cmake/help/latest/manual/ctest.1.html", "Kitware", "Documentation page", "Test discovery, execution, fixtures, labels, and CI reporting."),
  rosTracing: source("ROS 2: Tracing", "https://docs.ros.org/en/rolling/Tutorials/Advanced/Tracing/Tracing.html", "Open Robotics", "Documentation page", "Captures executor, callback, and message-flow timing with ros2_tracing."),
  rosPerformanceTest: source("ROS 2 performance_test", "https://docs.ros.org/en/rolling/p/performance_test/__README.html", "Apex.AI / Open Robotics", "Documentation page", "Measures latency, throughput, loss, and middleware behavior."),

  // Safety and reliability
  iso12100: source("ISO 12100: Risk Assessment and Risk Reduction", "https://www.iso.org/standard/51528.html", "ISO", "Standard", "General machinery-safety methodology for identifying hazards and reducing risk."),
  oshaRobotics: source("OSHA Technical Manual: Industrial Robot Systems", "https://www.osha.gov/otm/section-4-safety-hazards/chapter-4", "U.S. OSHA", "Technical guide", "Robot hazards, safeguarding, maintenance, training, and work cells."),
  nasaRisk: source("NASA Handbook §6.4: Technical Risk Management", "https://www.nasa.gov/reference/6-4-technical-risk-management/", "NASA", "Book chapter", "Identifies, analyzes, plans, tracks, and controls technical risk."),
  nistAiMap: source("NIST AI RMF Playbook: Map", "https://airc.nist.gov/airmf-resources/playbook/map/", "NIST", "Technical guide", "Frames context, impacts, risks, assumptions, and affected stakeholders."),
  iso13850: source("ISO 13850: Emergency Stop Function", "https://www.iso.org/standard/59970.html", "ISO", "Standard", "Functional requirements and design principles for emergency stops."),
  iso10218Robot: source("ISO 10218-1:2025 Industrial Robots", "https://www.iso.org/standard/73933.html", "ISO", "Standard", "Safety requirements for industrial robot design."),
  iso10218Cell: source("ISO 10218-2:2025 Robot Applications and Cells", "https://www.iso.org/standard/73934.html", "ISO", "Standard", "Integration, commissioning, operation, maintenance, and decommissioning requirements."),
  iso13849: source("ISO 13849-1:2023 Safety-Related Control Systems", "https://www.iso.org/standard/73481.html", "ISO", "Standard", "Methodology for safety-related control hardware and software."),
  iso3691: source("ISO 3691-4:2023 Driverless Industrial Trucks", "https://www.iso.org/standard/83545.html", "ISO", "Standard", "Safety requirements and verification for AGVs and autonomous mobile robots."),
  nasaFaultRobot: source("Monitoring Robot Actions for Error Detection and Recovery", "https://ntrs.nasa.gov/api/citations/19890017177/downloads/19890017177.pdf", "NASA", "Research paper", "Robot execution monitoring, error detection, and recovery strategies."),
  nasaReliability: source("NASA Reliability-Centered Maintenance Guide", "https://www.nasa.gov/wp-content/uploads/2023/02/nasa_rcmguide.pdf", "NASA", "Technical guide", "Failure modes, maintenance decisions, and reliability program structure."),
  rosJointLimits: source("ros2_control Joint Limiting", "https://control.ros.org/rolling/doc/ros2_control/hardware_interface/doc/joint_limiting.html", "ros2_control", "Documentation page", "Enforces position, velocity, acceleration, effort, and jerk limits."),

  // Human-robot interaction
  hriDesignChapter: source("Human-Robot Interaction, Chapter 4: Design", "https://www.human-robot-interaction.org/download/174/", "Bartneck et al.", "Book chapter", "Robot form, behavior, interaction design, and design process."),
  hriSpatialChapter: source("Human-Robot Interaction, Chapter 5: Spatial Interaction", "https://www.human-robot-interaction.org/download/178/", "Bartneck et al.", "Book chapter", "Proxemics, navigation around people, and spatial behavior."),
  hriPerceptionChapter: source("Human-Robot Interaction, Chapter 8: How People Perceive Robots", "https://www.human-robot-interaction.org/download/797/", "Bartneck et al.", "Book chapter", "Anthropomorphism, expectations, trust, and social perception."),
  hriMethodsChapter: source("Human-Robot Interaction, Chapter 10: Research Methods", "https://www.human-robot-interaction.org/download/194/", "Bartneck et al.", "Book chapter", "Study design, measures, ethics, analysis, and reporting."),
  nistHriPerformance: source("NIST: Performance of Human-Robot Interaction", "https://www.nist.gov/programs-projects/performance-human-robot-interaction", "NIST", "Technical guide", "Interface, trust, safety, tracking, and teaming measurement program."),
  nistHriTheory: source("Theory and Evaluation of Human-Robot Interactions", "https://www.nist.gov/publications/theory-and-evaluation-human-robot-interactions", "NIST", "Research paper", "Interaction roles, information needs, and situation-awareness evaluation."),
  nistHriInterfaces: source("Metrics for Collaborative HRI Interface Design", "https://www.nist.gov/publications/towards-effective-interface-designs-collaborative-hri-manufacturing-metrics-and", "NIST", "Research paper", "Objective and subjective measures for usable robot interfaces."),
  nistHriMetrics: source("Common Metrics for Human-Robot Interaction", "https://www.nist.gov/publications/common-metrics-human-robot-interaction", "NIST", "Research paper", "A framework and candidate measures for task-oriented HRI."),
  iso15066: source("ISO/TS 15066: Collaborative Robot Systems", "https://www.iso.org/standard/62996.html", "ISO", "Standard", "Guidance for collaborative industrial robot applications and contact."),
  hriStateOfArt: source("State-of-the-Art in Human-Robot Interaction", "https://www.nist.gov/publications/state-art-human-robot-interaction", "NIST", "Book chapter", "Industrial HRI, interface design, collaborative safety, and evaluation metrics."),

  // Capstone laboratory
  nasaLifecycle: source("NASA Handbook, Chapter 3: Program and Project Life Cycle", "https://www.nasa.gov/reference/3-0-nasa-program-project-life-cycle/", "NASA", "Book chapter", "Phases, decision points, reviews, and maturity progression."),
  nasaRequirements: source("NASA Handbook §4.2: Technical Requirements Definition", "https://www.nasa.gov/reference/4-2-technical-requirements-definition/", "NASA", "Book chapter", "Transforms stakeholder expectations into validated technical requirements."),
  nasaReviews: source("NASA NPR 7123.1D, Chapter 5: Technical Reviews", "https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7123_001D_&page_name=Chapter5", "NASA", "Technical guide", "Current lifecycle-review planning, purpose, and success criteria."),
  cmuCapstone: source("CMU Robotics Systems Engineering and Capstone", "https://www.cs.cmu.edu/education/capstones/capstone-programs/capstones-ri", "Carnegie Mellon University", "Course lesson", "Specifies, designs, integrates, verifies, and validates a robotic system."),
  mitDesignProject: source("2.007 Design and Manufacturing I: Projects", "https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/pages/assignments/", "MIT OpenCourseWare", "Course lesson", "Milestone-driven robot design, fabrication, testing, and competition work."),
  cmuProjectExamples: source("CMU MRSD Student Project Websites", "https://mrsd.ri.cmu.edu/project-examples/student-project-websites/", "Carnegie Mellon University", "Course lesson", "Examples of complete robotics project scope, architecture, and evidence."),
  nistExperimentDesign: source("NIST Handbook, Chapter 5: Process Improvement and Experimental Design", "https://www.itl.nist.gov/div898/handbook/pri/pri.htm", "NIST", "Book chapter", "Objectives, factors, responses, randomization, replication, and analysis."),
  nasaTechnicalData: source("NASA Handbook §6.6: Technical Data Management", "https://www.nasa.gov/reference/6-6-technical-data-management/", "NASA", "Book chapter", "Plans, captures, protects, maintains, and delivers technical evidence."),
  githubReadmes: source("GitHub: About READMEs", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes", "GitHub", "Documentation page", "Structures repository purpose, setup, use, contribution, and support guidance."),
  googleDesignReview: source("Software Engineering at Google, Chapter 9: Code Review", "https://abseil.io/resources/swe-book/html/ch09.html", "Google", "Book chapter", "Review purpose, change quality, reviewer responsibilities, and communication."),
} satisfies Record<string, TechnicalResource>;

const topicResourceIds: Record<string, Array<keyof typeof r>> = {
  "Mechanisms, Actuators, and Transmissions": ["mrGearing", "mitDesignNotes", "openStaxTorque", "mitDesignSyllabus"],
  "Robot Kinematics": ["mrRigidMotions", "mrForwardKinematics", "mrJacobian", "mrInverseKinematics"],
  "Robot Dynamics and Actuator Sizing": ["mrLagrangian", "mrNewtonEuler", "underactuatedMultibody", "mrGearing"],
  "CAD, Tolerances, and Manufacturability": ["mitDesignNotes", "mitDesignSyllabus", "freeCadPartDesign", "freeCadTechDraw"],

  "Microcontrollers and Real-Time Firmware": ["valvanoPorts", "valvanoInterrupts", "freeRtosTasks", "freeRtosQueues"],
  "Robot Electronics, Power, and Protection": ["mitCircuitsNotes", "openStaxDcCircuits", "tiMotorDrivers", "valvanoAdc"],
  "Motor Drives and Sensor Interfaces": ["tiMotorDrivers", "valvanoAdc", "mitCircuitsNotes", "mrGearing"],
  "Embedded Communication Buses": ["valvanoUart", "kvaserCan", "ethercatTechnology", "valvanoPorts"],

  "Image Formation and Processing": ["szeliskiImageFormation", "openCvFiltering", "openCvFeatures", "cs231nImageClassification"],
  "Camera Calibration and Coordinate Frames": ["openCvCalibration", "rosCameraCalibration", "openCvHandEye", "mrHomogeneousTransforms"],
  "3D Vision and Point Clouds": ["open3dIcp", "pclPlaneSegmentation", "openCvStereo", "open3dPointCloud"],
  "Learned Detection and Segmentation": ["pytorchDetection", "tensorflowSegmentation", "cs231nConvNets", "cs231nTransfer"],

  "Probability and Bayesian Inference for Robotics": ["kalmanDiscreteBayes", "kalmanGaussians", "mitProbabilityBayes", "harvardConditional"],
  "Kalman and Nonlinear Filtering": ["kalmanMultivariate", "kalmanDesign", "kalmanEkf", "underactuatedEstimation"],
  "Multi-Sensor Fusion": ["robotLocalizationSensors", "kalmanDesign", "underactuatedEstimation", "rosMessageFilters"],
  "Localization, Mapping, and SLAM": ["nav2Localization", "slamToolbox", "graphSlamPaper", "robotLocalizationSensors"],

  "Graph Search and Discrete Planning": ["lavalleDiscrete", "mitDijkstra", "mrGraphSearch", "nav2SmacPlanner"],
  "Sampling-Based Motion Planning": ["lavalleSampling", "mrSampling", "omplPlanners", "moveitPlanning"],
  "Trajectory Optimization and Collision Avoidance": ["underactuatedTrajOpt", "mrNonlinearOpt", "moveitChomp", "nav2CollisionMonitor"],
  "Task Planning and Learning-Based Decisions": ["behaviorTreeIntro", "suttonBartoMdp", "nav2BtNavigator", "lavalleDecision"],

  "Feedback and Feed-Forward Control": ["mrControlOverview", "underactuatedPendulum", "mitFeedbackNotes", "mrVelocityControl"],
  "PID Tuning and Frequency Response": ["librePid", "mitFeedbackDesign", "mitFeedbackNotes", "mrVelocityControl"],
  "State-Space Control and LQR": ["underactuatedLqr", "mitStateSpace", "mitFeedbackNotes", "mrTorqueControl"],
  "Model Predictive and Trajectory Control": ["osqpMpc", "underactuatedTrajOpt", "mrTorqueControl", "underactuatedLqr"],

  "Modern C++ and Python for Robotics": ["cppResources", "pythonClasses", "numpyQuickstart", "pybindBasics"],
  "Robot Software Architecture and Interfaces": ["googleDesignDocs", "rosComposition", "rosLifecycle", "nasaArchitecture"],
  "Concurrency, Memory, and Performance": ["ostepThreads", "ostepLocks", "cppConcurrency", "clangProfiler"],
  "Build, Test, and Debug Tooling": ["cmakeTutorial", "googleTest", "googleTestingChapter", "clangProfiler"],

  "ROS 2 Nodes, Topics, Services, and Actions": ["rosNodes", "rosInterfaces", "rosTopics", "rosActions"],
  "tf2, URDF, and Robot Models": ["rosTf2", "rosUrdf", "rosTf2Frames", "rosRobotStatePublisher"],
  "Launch, Parameters, Lifecycle, and Composition": ["rosLaunch", "rosParameters", "rosLifecycle", "rosComponents"],
  "ROS 2 Data, Visualization, Diagnostics, and Control": ["rosBag", "rosRviz", "rosDiagnostics", "ros2ControlHardware"],

  "Real-Time Scheduling and Deadlines": ["rosRealTime", "ostepScheduling", "linuxRealTime", "rosExecutor"],
  "Threads and Synchronization": ["ostepThreads", "ostepLocks", "ostepConditionVariables", "cppThreadSafety"],
  "Inter-Process Communication and Networking": ["boostSharedMemory", "beejSockets", "fastDdsDiscovery", "rosIntraProcess"],
  "DDS Quality of Service and Distributed Time": ["rosQos", "fastDdsQos", "rosClock", "rosTopicStats"],

  "Sensor and Actuator Integration": ["ros2ControlHardware", "rosSensorHeader", "robotLocalizationSensors", "rosCameraCalibration"],
  "Robot Drivers and Hardware Abstraction": ["rosControlWritingHardware", "rosControlExample7", "rosControlMock", "ros2ControlHardware"],
  "Calibration, Synchronization, and Diagnostics": ["rosMessageFilters", "rosCameraCalibration", "rosDiagnostics", "rosTf2"],
  "Robot Bring-Up and Commissioning": ["rosLaunch", "rosLifecycle", "rosDoctor", "nasaProductRealization"],

  "Physics Simulation and Robot Models": ["gazeboSdfWorlds", "gazeboSensors", "gazeboPhysics", "mrForwardDynamics"],
  "Software-in-the-Loop and Hardware-in-the-Loop": ["rosControlMock", "gazeboRos2Control", "px4Sitl", "px4Hitl"],
  "Unit, Integration, and Regression Testing": ["googleTest", "rosLaunchTesting", "googleTestingChapter", "ctestManual"],
  "Logging, Replay, and Performance Evaluation": ["rosBag", "rosTracing", "rosPerformanceTest", "nasaVvAppendix"],

  "Hazard Analysis and Risk Reduction": ["iso12100", "oshaRobotics", "nasaRisk", "nistAiMap"],
  "Emergency Stops and Safe-State Design": ["iso13850", "iso10218Cell", "oshaRobotics", "rosJointLimits"],
  "Fault Detection, Recovery, and Reliability": ["nasaFaultRobot", "nasaReliability", "rosDiagnostics", "nasaRisk"],
  "Functional Safety and Robotics Standards": ["iso10218Robot", "iso10218Cell", "iso13849", "iso3691"],

  "Interaction Design and Human Factors": ["hriDesignChapter", "hriPerceptionChapter", "nistHriInterfaces", "nistHriTheory"],
  "Teleoperation and Shared Autonomy": ["hriSpatialChapter", "nistHriTheory", "hriDesignChapter", "nistHriPerformance"],
  "Collaborative Robots and Operator Safety": ["iso15066", "iso10218Cell", "nistHriPerformance", "hriStateOfArt"],
  "Usability, Trust, and HRI Evaluation": ["hriMethodsChapter", "nistHriMetrics", "nistHriInterfaces", "hriPerceptionChapter"],

  "Requirements, Architecture, and Design Reviews": ["nasaRequirements", "nasaArchitecture", "nasaReviews", "nasaLifecycle"],
  "Complete Mechatronic Build and Integration": ["cmuCapstone", "mitDesignProject", "nasaProductRealization", "cmuProjectExamples"],
  "Experimental Design and Field Testing": ["nistExperimentDesign", "nasaVvAppendix", "cmuCapstone", "nasaProductRealization"],
  "Technical Documentation and Demonstration": ["nasaTechnicalData", "githubReadmes", "googleDesignReview", "cmuProjectExamples"],
};

const minimumResourcesPerSubtopic = 4;

for (const course of curriculumCourses) {
  for (const topic of course.topics) {
    const ids = topicResourceIds[topic.name] ?? [];
    const distinctLinks = new Set(ids.map((id) => r[id].href));

    if (ids.length < minimumResourcesPerSubtopic || distinctLinks.size < minimumResourcesPerSubtopic) {
      throw new Error(`Curriculum sub-topic "${topic.name}" requires at least four distinct resources.`);
    }
  }
}

export function resourcesForTopic(topicName: string): TechnicalResource[] {
  return (topicResourceIds[topicName] ?? []).map((id) => r[id]);
}
