import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { skillGroups, certification } from "../../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      intro="The tools I reach for, and the standards I hold them to."
    >
      <Reveal>
        <dl className="border-b border-line">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:gap-8"
            >
              <dt className="w-44 shrink-0 font-serif text-lg text-ink">{group.label}</dt>
              <dd className="text-[13.5px] leading-[1.7] text-muted">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-2 text-[13px] text-muted">
          <span className="text-[10.5px] font-medium uppercase tracking-[0.16em]">
            Certification
          </span>
          <span className="text-quiet" aria-hidden="true">
            /
          </span>
          <span>{certification}</span>
        </p>
      </Reveal>
    </Section>
  );
}
