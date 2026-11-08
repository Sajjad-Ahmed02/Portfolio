import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import { projects } from "../../data/projects";

const EXTERNAL = /^https?:\/\//i;

export default function Projects() {
  return (
    <Section
      id="work"
      index="01"
      title="Selected work"
      intro="Three projects that shipped, scaled, or taught me something expensive."
    >
      <div className="border-b border-line">
        {projects.map((project, i) => {
          const primary = project.links[0];

          const media = (
            <div className="media-lift overflow-hidden border border-line bg-paper2 group-hover:border-line2">
              <img
                src={project.image}
                alt={project.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="media-zoom aspect-[4/3] w-full object-cover"
              />
            </div>
          );

          return (
            <Reveal key={project.id}>
              <article className="group grid grid-cols-12 items-start gap-x-6 gap-y-8 border-t border-line py-12 sm:py-14">
                <div className="col-span-12 md:col-span-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className="font-serif text-xl italic leading-none text-muted"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-3xl tracking-[-0.01em] text-ink sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[14px] leading-[1.7] text-muted">
                    {project.description}
                  </p>
                  <p className="mt-5 max-w-[46ch] border-l-2 border-accent pl-4 font-serif text-[16px] italic leading-snug text-ink">
                    {project.outcome}
                  </p>
                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    {project.stack.join(" · ")}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
                    {project.links.map((link) => (
                      <ArrowLink key={`${link.label}-${link.url}`} href={link.url}>
                        {link.label}
                      </ArrowLink>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-7">
                  {primary ? (
                    <a
                      href={primary.url}
                      aria-label={`${project.name} — ${primary.label}`}
                      className="block"
                      {...(EXTERNAL.test(primary.url)
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {media}
                    </a>
                  ) : (
                    media
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
