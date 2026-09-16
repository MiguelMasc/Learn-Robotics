import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/atlas/site-shell";
export const metadata: Metadata = { title: "About the collection" };
export default function About() {
  return (
    <Shell>
      <article className="shell prose-page">
        <Link className="back-link" href="/#explore">
          ← Back to the map
        </Link>
        <h1>A map for curious people.</h1>
        <p className="lead">
          Robotics is a field of connected ideas. This site helps you see what
          is out there and choose your own way into it.
        </p>
        <h2>You choose where to begin</h2>
        <p>
          You do not need a robotics background to explore. Start with a
          question, a subject, or something you want to build. Each topic points
          to an outside orientation, a few useful starting resources, and a
          broader collection when you want to go further. Resource notes explain
          the knowledge or equipment a particular source assumes.
        </p>
        <h2>A small collection with room to grow</h2>
        <p>
          This first edition covers mechanical design, electronics and sensing,
          programming, and motion and control. It is a foundation for
          exploration, not a complete account of robotics. Perception, mapping,
          planning and learning are areas for future expansion.
        </p>
        <h2>Free learning comes first</h2>
        <p>
          Every learning resource currently listed can be read or watched for
          free. Physical builds may need purchased hardware. We prefer primary
          sources: documentation from tool makers, university material and
          original project guides. Resources are selected for their relevance
          and practical context; inclusion is not a claim that every source
          suits every learner.
        </p>
        <h2>Know what you are building</h2>
        <p>
          Publisher-documented builds link to an external creator’s
          instructions. We have not independently assembled or validated that
          hardware. Original proposals are explicitly untested design briefs,
          with open decisions and checkpoints. Neither label means a build has
          been verified by this site.
        </p>
        <h2>Understand the field, beyond a parts list</h2>
        <p>
          Topic pages separate established uses, active research directions and
          questions that remain difficult. Research links provide a place to
          investigate; they are not a live news feed or a promise that a problem
          has been solved.
        </p>
        <h2>A shared resource</h2>
        <p>
          The site currently has no accounts, saved progress or personalized
          paths. Everyone explores the same collection. The map shows
          relationships, not a required sequence.
        </p>
        <Link className="button primary" href="/#explore">
          Find a subject →
        </Link>
      </article>
    </Shell>
  );
}
