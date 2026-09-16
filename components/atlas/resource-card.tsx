import { ArrowUpRight } from "lucide-react";
import { resources } from "@/data/atlas";
export function ResourceCard({ id }: { id: string }) {
  const r = resources[id];
  return (
    <article className="resource-card">
      <div>
        <h3>
          <a href={r.url} target="_blank" rel="noreferrer">
            {r.title}
            <ArrowUpRight size={18} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </h3>
        <p>
          {r.description} {r.assumes}.
        </p>
      </div>
    </article>
  );
}
