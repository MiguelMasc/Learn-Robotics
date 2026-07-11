import type { CurriculumStage } from "./types";

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
