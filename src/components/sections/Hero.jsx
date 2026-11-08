import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section id="top">
      <Container className="pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-muted sm:text-[14px]">
                {profile.name} — {profile.role}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.9rem,9vw,6.75rem)] font-normal leading-[0.98] tracking-[-0.03em] text-ink">
                Software that
                <br />
                <em className="italic">
                  earns its keep<span className="not-italic text-accent">.</span>
                </em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-10 max-w-xl text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                {profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                <a href="#work" className="u-link text-[15px] font-medium text-ink">
                  Selected work <span aria-hidden="true" className="text-accent">↓</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="u-link text-[15px] text-muted transition-colors hover:text-ink"
                >
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240} className="col-span-12 md:col-span-4">
            <figure>
              <div className="overflow-hidden border border-line bg-paper2">
                <img
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  width={900}
                  height={1125}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                <span>{profile.name}</span>
                <span>{profile.portrait.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <dl className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
            <div className="bg-paper px-5 py-4">
              <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                Status
              </dt>
              <dd className="mt-1.5 flex items-center gap-2 text-[13px] text-ink">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {profile.availability}
              </dd>
            </div>
            <div className="bg-paper px-5 py-4">
              <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                Currently
              </dt>
              <dd className="mt-1.5 text-[13px] text-ink">{profile.currently}</dd>
            </div>
            <div className="bg-paper px-5 py-4">
              <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                Based in
              </dt>
              <dd className="mt-1.5 text-[13px] text-ink">{profile.based}</dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
