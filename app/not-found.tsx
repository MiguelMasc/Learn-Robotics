import Link from "next/link";
import { Shell } from "@/components/atlas/site-shell";
export default function NotFound() {
  return (
    <Shell>
      <div className="shell prose-page">
        <h1>A little off the map.</h1>
        <p className="lead">
          This page is not available. There is still plenty to explore.
        </p>
        <Link href="/#explore" className="button primary">
          Back to the map →
        </Link>
      </div>
    </Shell>
  );
}
