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
  proposal?: {
    overview: string[];
    repositoryBoundary: string[];
    hardwarePlan: string[];
    softwarePlan: string[];
    validationPlan: string[];
    risks: string[];
    openDecisions: string[];
  };
};
