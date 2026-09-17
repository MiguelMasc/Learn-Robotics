import Link from "next/link";
import { ArrowUpRight, CircuitBoard, Bot, Gauge, Wrench } from "lucide-react";
import builds from "@/data/builds.json";
const icons = [Bot, CircuitBoard, Wrench, Gauge];
export function BuildCard({ build }: { build: (typeof builds)[number] }) {
  const Icon = icons[builds.findIndex((b) => b.id === build.id)] ?? Bot;
  return (
    <Link className={`build-card ${build.kind}`} href={`/projects/${build.id}`}>
      <div className="build-card-art">
        <Icon strokeWidth={1.1} size={86} />
        <span className="art-grid" />
      </div>
      <div className="build-card-body">
        <h3>
          {build.title}
          <ArrowUpRight size={21} />
        </h3>
      </div>
    </Link>
  );
}
