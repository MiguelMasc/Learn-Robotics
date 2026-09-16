import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Shell } from "@/components/atlas/site-shell";
import { Atlas } from "@/components/atlas/atlas";
export default function Page() {
  return (
    <Shell>
      <section className="hero shell">
        <div className="hero-copy">
          <h1>
            Find your way
            <br />
            into <span>robotics.</span>
          </h1>
          <p>
            A robot brings a lot of ideas together. Explore the subjects behind
            it, follow your curiosity, and find something worth building.
          </p>
          <a className="button primary" href="#explore">
            Explore the map <ArrowDown size={18} />
          </a>
        </div>
        <div className="hero-photo">
          <Image
            src="/images/robotics-learning-hero.png"
            alt="A small wheeled robot on a workshop bench surrounded by electronics and tools"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        </div>
      </section>
      <section className="explore-section" id="explore">
        <div className="shell">
          <div className="section-heading">
            <h2>Make your own connections.</h2>
          </div>
          <Atlas />
          <noscript>
            <p className="small-note">
              The interactive map uses JavaScript. You can also open a subject
              directly:
            </p>
            <div className="related-links">
              <Link href="/topics/mechanical-design">Mechanical design →</Link>
              <Link href="/topics/electronics-sensing">
                Electronics & sensing →
              </Link>
              <Link href="/topics/programming">Programming →</Link>
              <Link href="/topics/motion-control">Motion & control →</Link>
            </div>
          </noscript>
          <p className="map-footnote">
            Choose a subject and expand its topics. Drag to pan; pinch or use
            the controls to zoom. Solid lines connect related subjects; dashed
            lines reveal their topics.
          </p>
        </div>
      </section>
      <section className="shell home-build">
        <div>
          <h2>
            Ideas become clearer
            <br />
            when you build.
          </h2>
          <p>
            See these subjects come together in practical experiments and small
            robots.
          </p>
          <Link className="text-link" href="/projects">
            Explore the build guides <ArrowRight size={18} />
          </Link>
        </div>
        <Link className="featured-build" href="/projects/line-following-robot">
          <div className="build-illustration" aria-hidden="true">
            <div className="track-line" />
            <BotDrawing />
          </div>
          <div className="featured-build-copy">
            <h3>
              A robot that follows a line <ArrowRight size={20} />
            </h3>
            <p>A publisher-documented guide to line following.</p>
          </div>
        </Link>
      </section>
    </Shell>
  );
}
function BotDrawing() {
  return (
    <svg viewBox="0 0 160 150" className="bot-drawing">
      <rect x="25" y="46" width="20" height="60" rx="8" fill="#382e25" />
      <rect x="115" y="46" width="20" height="60" rx="8" fill="#382e25" />
      <rect
        x="40"
        y="22"
        width="80"
        height="104"
        rx="25"
        fill="#eab94c"
        stroke="#382e25"
        strokeWidth="3"
      />
      <rect x="58" y="51" width="44" height="34" rx="5" fill="#839678" />
      <circle cx="66" cy="33" r="5" fill="#fff7df" />
      <circle cx="94" cy="33" r="5" fill="#fff7df" />
      <path
        d="M68 85v18m24-18v18M58 62H48m54 12h10"
        stroke="#382e25"
        strokeWidth="3"
      />
    </svg>
  );
}
