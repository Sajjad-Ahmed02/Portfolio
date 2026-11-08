import Container from "./Container";

/**
 * Editorial section header: an oversized serif numeral in the left margin,
 * a large serif title, and an optional one-line introduction.
 */
export default function Section({ id, index, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line">
      <Container className="py-16 sm:py-24">
        <header className="grid grid-cols-12 gap-x-6 gap-y-4">
          <div className="col-span-12 md:col-span-3">
            <span className="font-serif text-5xl italic leading-none text-quiet sm:text-6xl" aria-hidden="true">
              {index}
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-4xl tracking-[-0.02em] text-ink sm:text-5xl">{title}</h2>
            {intro ? (
              <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-muted">{intro}</p>
            ) : null}
          </div>
        </header>

        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}
