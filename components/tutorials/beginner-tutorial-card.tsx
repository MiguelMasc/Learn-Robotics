import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

export function BeginnerTutorialCard() {
  return (
    <article className="flex flex-col rounded-lg border border-emerald-300 bg-emerald-50 p-6">
      <div className="flex items-center gap-2 text-sm font-bold text-emerald-900"><Bot className="size-5" aria-hidden="true" /> Complete beginner tutorial</div>
      <h3 className="mt-4 text-xl font-bold">Program your first simulated robot</h3>
      <p className="mt-3 flex-1 leading-7 text-zinc-700">Drive straight, turn, and trace a square in an interactive lab. Follow every step and measure your result.</p>
      <p className="mt-4 text-sm font-semibold text-emerald-900">30–45 min estimate · Free · No installation</p>
      <Link href="/tutorials/first-robot" className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-amber-300 px-4 text-sm font-bold text-zinc-950 hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
        Start the tutorial <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
