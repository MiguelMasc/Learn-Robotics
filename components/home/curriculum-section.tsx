import { SectionHeading } from "@/components/home/section-heading";

const subjects = [
  {
    id: "mechanical-design",
    title: "Mechanical Design",
    question: "What makes a robot strong, stable, and able to move?",
    topics: ["Structures", "Mechanisms", "Materials", "CAD & fabrication"],
  },
  {
    id: "electronics-hardware",
    title: "Electronics & Hardware",
    question: "How is everything powered and connected?",
    topics: ["Power systems", "Microcontrollers", "Motor drivers", "Interfaces"],
  },
  {
    id: "software-coding",
    title: "Software & Coding",
    question: "How do we turn an idea into instructions a robot can follow?",
    topics: ["Python & C++", "ROS 2", "Simulation", "Testing"],
  },
] as const;

const focuses = [
  {
    id: "perception",
    title: "Perception",
    question: "How can a robot see, hear, and understand what is around it?",
    topics: ["Sensors", "Computer vision", "Audio", "Signal processing"],
  },
  {
    id: "localization-mapping",
    title: "Localization & Mapping",
    question: "How does a robot explore a room without getting lost?",
    topics: ["Odometry", "Localization", "Mapping", "SLAM"],
  },
  {
    id: "motion-actuation",
    title: "Motion & Actuation",
    question: "How does a robot turn code into movement?",
    topics: ["Locomotion", "Manipulation", "Actuators", "Feedback control"],
  },
  {
    id: "planning-ai",
    title: "Planning & AI",
    question: "How does a robot decide what to do next?",
    topics: ["Path planning", "Behavior planning", "Machine learning", "Language"],
  },
] as const;

export function CurriculumSection() {
  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        title="Three core subjects. Four robot focuses."
        description="Build the engineering foundations, then apply them to the capabilities that make a robot useful."
      />

      <div className="space-y-14">
        <div>
          <div className="mb-5 flex items-baseline gap-3 border-b border-zinc-950 pb-3">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-800">
              Core subjects
            </p>
            <p className="text-sm font-medium text-zinc-500">The engineering you learn</p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-3">
            {subjects.map((subject) => (
              <article key={subject.id} className="border-t border-zinc-300 py-7 md:border-t-0">
                <h3 className="text-xl font-bold leading-tight tracking-normal">{subject.title}</h3>
                <p className="mt-2 text-base font-bold leading-6 text-emerald-800">
                  {subject.question}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
                  {subject.topics.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-baseline gap-3 border-b border-zinc-950 pb-3">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-800">
              Robot focuses
            </p>
            <p className="text-sm font-medium text-zinc-500">The capabilities you build</p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
            {focuses.map((focus) => (
              <article key={focus.id} className="border-t border-zinc-300 py-7 md:border-t-0">
                <h3 className="text-xl font-bold leading-tight tracking-normal">{focus.title}</h3>
                <p className="mt-2 text-base font-bold leading-6 text-emerald-800">
                  {focus.question}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
                  {focus.topics.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
