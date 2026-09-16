import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { beginnerTutorialEnabled } from "@/data/site-features";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { RobotLab } from "@/components/tutorials/robot-lab";
import { TutorialChecklist } from "@/components/tutorials/tutorial-checklist";

export const metadata: Metadata = {
  title: "Your First Robot: A Beginner Simulation Tutorial | Learn Robotics",
  description: "Program a two-wheel robot in your browser. A free beginner tutorial with an interactive simulator, step-by-step experiments, downloadable code, and checkpoints.",
};

const straight = `[
  { "left": 0.2, "right": 0.2, "seconds": 5 }
]`;
const turn = `[
  { "left": -0.1, "right": 0.1, "seconds": 1.570796 }
]`;
const square = `[
  { "left": 0.2, "right": 0.2, "seconds": 5 },
  { "left": -0.1, "right": 0.1, "seconds": 1.570796 },
  { "left": 0.2, "right": 0.2, "seconds": 5 },
  { "left": -0.1, "right": 0.1, "seconds": 1.570796 },
  { "left": 0.2, "right": 0.2, "seconds": 5 },
  { "left": -0.1, "right": 0.1, "seconds": 1.570796 },
  { "left": 0.2, "right": 0.2, "seconds": 5 },
  { "left": -0.1, "right": 0.1, "seconds": 1.570796 }
]`;
const sections = [
  ["setup", "1. Get ready"], ["straight", "2. Drive straight"],
  ["turn", "3. Turn in place"], ["square", "4. Make a square"],
  ["experiment", "5. Make it yours"], ["lab", "Robot lab"],
  ["troubleshooting", "Troubleshooting"], ["finish", "Finish & save"],
];
const nextTutorials = [
  { title: "Stop before an obstacle", concept: "Sensing & decisions", description: "Add a simulated distance sensor and an if-statement that stops the robot before a wall. Finish by testing three starting distances." },
  { title: "Follow a line with feedback", concept: "Your first controller", description: "Measure the distance from a line and adjust the wheel speeds to steer back. Compare gentle and aggressive corrections." },
  { title: "Find out why robots drift", concept: "Odometry & measurement", description: "Make one wheel slightly slower, repeat the square, and measure the gap. Use the result to calibrate your next run." },
];

export default function FirstRobotTutorial() {
  if (!beginnerTutorialEnabled) notFound();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <a href="#lesson" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:p-4">Skip to tutorial</a>
      <Header />
      <main id="lesson">
        <section className="border-b border-emerald-200 bg-emerald-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <Link href="/projects" className="text-sm font-semibold text-emerald-900 underline underline-offset-4">All projects</Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-wide text-emerald-800">Tutorial 01 · Start here</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Your first robot starts with two wheels.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">Program a robot to drive straight, turn, and trace a square. You&apos;ll work in a simulator, predict what should happen, and check what actually happened.</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-emerald-900" aria-label="Tutorial requirements">
              <li>30–45 minutes, estimated</li><li>Free · No hardware</li><li>No coding experience needed</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#setup" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-amber-300 px-5 font-semibold hover:bg-amber-200">Begin the tutorial <ArrowDown className="size-4" aria-hidden="true" /></a>
              <a href="/tutorials/first-robot.html" download className="inline-flex min-h-12 items-center gap-2 rounded-md border border-emerald-300 bg-white px-5 font-semibold hover:bg-emerald-100"><Download className="size-4" aria-hidden="true" /> Download the simulator</a>
            </div>
            <p className="mt-4 text-sm text-zinc-600">Your finish line: a one-meter square, a saved command sequence, and an explanation of how the robot turns.</p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Tutorial sections" className="flex flex-wrap gap-x-5 gap-y-3 border-y border-zinc-200 py-5 text-sm font-semibold">
            {sections.map(([id, label]) => <a key={id} href={`#${id}`} className="text-emerald-900 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-900">{label}</a>)}
          </nav>
          <div className="mx-auto mt-12 max-w-3xl space-y-14">
            <LessonStep id="setup" title="1. Get ready: meet your robot">
              <p>You need a browser with JavaScript enabled and the ability to edit a few numbers. Everything runs on this page. You don&apos;t need an account, a robot kit, Python, or ROS.</p>
              <p>Our robot has a left wheel and a right wheel, spaced 0.20 meters apart. A <strong>command</strong> tells each wheel how fast to move and for how long. Positive speeds move a wheel forward; negative speeds move it backward.</p>
              <p>You can <a href="/tutorials/first-robot.html" target="_blank" rel="noreferrer" className="font-semibold text-emerald-900 underline">open the lab in a separate tab</a> to keep your experiment alongside these instructions.</p>
              <p>The robot starts at <strong>x = 0, y = 0, heading = 0°</strong>, pointing right. The x coordinate measures rightward distance; y measures upward distance. Heading is its direction, measured counterclockwise: 90° points up, 180° left, and 270° down.</p>
              <Checkpoint>Open the lab below. Find the yellow robot at the black origin dot and the three measurements under the grid. Each small grid square is 0.25 meters wide.</Checkpoint>
            </LessonStep>
            <LessonStep id="straight" title="2. Drive straight for one meter">
              <p>Copy this entire list into <strong>Motion commands</strong> in the lab, or select <strong>Load straight</strong>. Then select <strong>Run from start</strong>.</p>
              <CodeBlock code={straight} />
              <p>The square brackets hold a sequence of commands. Each pair of curly braces holds one command. <code>left</code> and <code>right</code> are wheel speeds in meters per second; <code>seconds</code> is how long to keep those speeds. The list is JSON: keep the double quotes and punctuation as shown.</p>
              <p><strong>Predict first:</strong> both wheels move at 0.2 meters per second for 5 seconds. Distance = speed × time, so 0.2 × 5 = 1 meter. Equal wheel speeds keep the robot pointing in the same direction.</p>
              <Checkpoint>After about 5 seconds, the green trail is straight. Read x = 1.00 m, y = 0.00 m, heading = 0.0°. These measurements are relative to the starting point.</Checkpoint>
            </LessonStep>
            <LessonStep id="turn" title="3. Turn without moving forward">
              <p>Replace the list with the command below, or select <strong>Load turn</strong>. Run it from the start. One wheel goes backward while the other goes forward at the same speed.</p>
              <CodeBlock code={turn} />
              <p><strong>Predict first:</strong> the robot should rotate left in place. Its center stays at the origin because the wheel speeds cancel out in the forward direction.</p>
              <details className="rounded-lg border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-zinc-900">Why 1.570796 seconds? The optional math</summary>
                <div className="mt-4 space-y-3">
                  <p>Forward speed is the average wheel speed: (left + right) ÷ 2. Turn rate is (right − left) ÷ wheel spacing.</p>
                  <p>Here, (0.1 − (−0.1)) ÷ 0.2 = 1 radian per second. A quarter turn is π ÷ 2 radians, approximately 1.570796. At that turn rate, it takes about 1.57 seconds to rotate 90°.</p>
                  <p>The lab uses this ideal <a href="https://www.roboticsbook.org/S52_diffdrive_actions.html" className="text-emerald-900 underline">differential-drive motion model</a>. You can finish this tutorial before learning its derivation.</p>
                </div>
              </details>
              <Checkpoint>x and y stay at 0.00 m and heading becomes 90.0°. There is no long trail because the robot&apos;s center has not traveled.</Checkpoint>
            </LessonStep>
            <LessonStep id="square" title="4. Combine commands into a square">
              <p>A program runs commands in order. To make a square, drive one meter, turn left 90°, and repeat that pair four times. The final turn restores the starting direction.</p>
              <details className="rounded-lg border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-zinc-900">Show the complete eight-command program</summary>
                <CodeBlock code={square} />
              </details>
              <p>Try writing the sequence yourself, then compare it with the program above. Separate commands with commas, but leave out the comma after the last command. You can also select <strong>Load square</strong> to use the reference solution.</p>
              <p>Run the program and keep the lab visible. It takes about 26 seconds. The dashed square is your target. Each straight segment changes the robot&apos;s position; each turn changes its heading.</p>
              <Checkpoint>Trace all four sides and finish within 0.02 m of the origin, facing about 0° again. Check the final distance in the status message as well as the shape of the trail: returning home alone does not prove you made a square.</Checkpoint>
            </LessonStep>
          </div>

          <section id="lab" aria-labelledby="lab-title" className="mt-14 scroll-mt-36">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div><p className="text-sm font-bold uppercase tracking-wide text-emerald-800">Experiment here</p><h2 id="lab-title" className="mt-2 text-3xl font-black">Your robot lab</h2></div>
              <a href="/tutorials/first-robot.html" target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-900 underline underline-offset-4">Open lab in a new tab</a>
            </div>
            <RobotLab />
            <nav aria-label="Return to an exercise" className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-emerald-900">
              {[['straight', 'Straight exercise'], ['turn', 'Turn exercise'], ['square', 'Square exercise'], ['experiment', 'Change one command']].map(([id, label]) => <a key={id} href={`#${id}`} className="underline underline-offset-4">{label}</a>)}
            </nav>
            <p className="mt-3 text-sm leading-6 text-zinc-600">Run always resets the position first. Stop freezes a run; Reset position clears the trail and keeps your commands. Loading an example replaces your edits. Copy your commands before leaving or refreshing; only the checklist below is saved automatically.</p>
          </section>

          <div className="mx-auto mt-14 max-w-3xl space-y-14">
            <LessonStep id="experiment" title="5. Change one thing, then explain it">
              <p>Load the square and change only the <strong>first</strong> straight command from 5 seconds to 2.5 seconds. Before running it, write down your prediction.</p>
              <p>The first side is now 0.2 × 2.5 = 0.5 meters. The other three sides remain one meter long, so the path no longer closes. This is how to debug a robot: change one input, measure its effect, and compare with your prediction.</p>
              <Checkpoint>The robot finishes near x = −0.50 m, y = 0.00 m, with a heading of 0°. Its distance from the start is about 0.50 m. Restore the first duration to 5 to close the square again.</Checkpoint>
              <p><strong>One more challenge:</strong> change every straight duration to 2.5 seconds. Predict the size of the new square. <em>Answer:</em> each side is 0.5 meters, and it still closes because all four sides are equal.</p>
              <p>This is <strong>open-loop control</strong>: the robot follows timed instructions without using measurements to correct itself. A real robot can slip or have unequal wheel speeds. Later, you can add sensors and feedback so it checks its motion as it goes.</p>
            </LessonStep>
            <LessonStep id="troubleshooting" title="If something looks wrong">
              <div className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white px-5">
                {[
                  ["The command list shows an error", "Use double quotes around left, right, and seconds. Put commas between commands, remove any trailing comma, and enter numbers without units or quotes. Start with Load straight if you want a clean example."],
                  ["The robot curves when I expected a straight line", "Compare left and right in that command. Unequal wheel speeds create a turn. Set both to 0.2 to go straight."],
                  ["The robot turns the wrong way", "For a left turn in place, left is −0.1 and right is +0.1. Swapping their signs makes a right turn."],
                  ["The square does not close", "Count eight commands: four straight segments and four quarter turns, alternating. Use 5 seconds for each straight and 1.570796 for each turn, with the speeds shown above."],
                  ["The robot leaves the picture", "The grid is a fixed view, not a physical boundary. Check the numeric position below it. Use Reset position and shorter commands to bring your experiment back into view."],
                  ["The animation pauses or takes longer than expected", "Background tabs can slow the animation. Keep the lab visible during a run. The simulated durations and final measurements remain the same."],
                  ["The embedded lab does not load", "Use Open lab in a new tab or download the HTML file. Enable JavaScript if your browser blocks scripts. The downloaded simulator needs no network connection."],
                ].map(([problem, solution]) => <details key={problem} className="py-4"><summary className="cursor-pointer font-bold text-zinc-900">{problem}</summary><p className="mt-3">{solution}</p></details>)}
              </div>
            </LessonStep>
            <LessonStep id="finish" title="Finish, save, and show your work">
              <p>Save a screenshot of your square and copy your final command list into a text file. Add three sentences: what you predicted, what you measured, and why opposite wheel speeds make the robot turn in place.</p>
              <TutorialChecklist />
              <h3 className="text-xl font-bold text-zinc-950">Keep an editable version on your computer</h3>
              <ol className="list-decimal space-y-3 pl-6">
                <li><a href="/tutorials/first-robot.html" download className="font-semibold text-emerald-900 underline">Download first-robot.html</a>. It contains the interface and all the JavaScript; there are no extra files or packages.</li>
                <li>Open the downloaded file in a browser to run it offline. On a phone or tablet, use the online lab if your device previews HTML without running scripts.</li>
                <li>To keep your own program as the default, open the file in a plain-text or code editor. Search for <code>STARTER_COMMANDS</code> near the comment <code>START HERE</code>.</li>
                <li>Replace the list after <code>=</code> with your command list, keeping the final semicolon. Save as <code>first-robot.html</code>, not <code>first-robot.html.txt</code>, then refresh the file in the browser.</li>
                <li>Run again to confirm the saved program produces the same path. The download begins with the straight example; it does not automatically include edits you made in the online lab.</li>
              </ol>
              <p>Inside the file, <code>advance</code> calculates the next robot position, <code>draw</code> updates the diagram, and <code>tick</code> runs the command sequence over time. These are useful places to explore when you are ready to learn JavaScript.</p>
            </LessonStep>
          </div>

          <section aria-labelledby="next-title" className="mt-16 border-t border-zinc-200 pt-10">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">Ideas for your next build</p>
            <h2 id="next-title" className="mt-3 text-3xl font-black">Give your robot a reason to react.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-600">These suggested follow-up tutorials are not published yet. Each adds one new idea to the robot you just programmed.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {nextTutorials.map((tutorial) => <article key={tutorial.title} className="rounded-lg border border-zinc-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-wide text-emerald-800">{tutorial.concept}</p><h3 className="mt-3 text-xl font-bold">{tutorial.title}</h3><p className="mt-3 leading-7 text-zinc-600">{tutorial.description}</p></article>)}
            </div>
            <Link href="/curriculum" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-emerald-900 underline underline-offset-4">Explore the learning path <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function LessonStep({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-36"><h2 id={`${id}-title`} className="text-2xl font-black text-zinc-950 sm:text-3xl">{title}</h2><div className="mt-5 space-y-5 text-base leading-8 text-zinc-700">{children}</div></section>;
}
function CodeBlock({ code }: { code: string }) {
  return <pre tabIndex={0} aria-label="Robot motion command example" className="my-4 overflow-x-auto rounded-lg bg-zinc-950 p-5 text-sm leading-7 text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"><code>{code}</code></pre>;
}
function Checkpoint({ children }: { children: React.ReactNode }) {
  return <div className="border-l-4 border-emerald-700 bg-emerald-50 px-5 py-4"><p className="text-sm font-bold uppercase tracking-wide text-emerald-900">Check your result</p><p className="mt-1">{children}</p><a href="#lab" className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-emerald-900 underline underline-offset-4">Try this in the robot lab →</a></div>;
}
