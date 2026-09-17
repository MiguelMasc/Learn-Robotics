import Link from "next/link";
import { Shell } from "@/components/atlas/site-shell";
export default function NotFound() {
  return (
    <Shell>
      <div className="shell prose-page">
        <h1>Page not found.</h1>
        <Link href="/#explore" className="button primary">
          Back to the map →
        </Link>
      </div>
    </Shell>
  );
}
