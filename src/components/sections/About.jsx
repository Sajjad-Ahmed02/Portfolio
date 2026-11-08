import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/profile";

export default function About() {
  return (
    <Section id="about" index="03" title="About">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <Reveal className="col-span-12 md:col-span-7">
          {profile.about.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 24)}
              className={
                i === 0
                  ? "max-w-[62ch] text-[17px] leading-[1.7] text-ink"
                  : "mt-5 max-w-[62ch] text-[15px] leading-[1.75] text-muted"
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-6 font-serif text-lg italic text-muted">
            — {profile.name.split(" ")[0]}
          </p>
        </Reveal>

        <Reveal delay={100} className="col-span-12 md:col-span-4 md:col-start-9">
          <dl className="border-t border-line">
            {profile.aside.map((row) => (
              <div key={row.label} className="border-b border-line py-4">
                <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                  {row.label}
                </dt>
                <dd className="mt-1.5 text-[13.5px] leading-relaxed text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
