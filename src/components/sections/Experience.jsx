import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { experience, education } from "../../data/experience";

const entries = [...experience, education];

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      intro="A production internship at Logiciel, and a computer science degree in progress at FAST."
    >
      <div className="border-b border-line">
        {entries.map((job) => (
          <Reveal key={`${job.org}-${job.period}`}>
            <article className="grid grid-cols-12 gap-x-6 gap-y-3 border-t border-line py-9 sm:py-10">
              <p className="col-span-12 font-serif text-lg italic text-muted md:col-span-3">
                {job.period}
              </p>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-serif text-2xl tracking-[-0.01em] text-ink">
                  {job.role}
                  <span className="text-muted"> · {job.org}</span>
                </h3>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                  {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex max-w-2xl gap-3 text-[14px] leading-[1.7] text-muted"
                    >
                      <span aria-hidden="true" className="select-none text-quiet">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
