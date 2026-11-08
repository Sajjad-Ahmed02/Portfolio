import { useState } from "react";
import Container from "../ui/Container";
import { profile } from "../../data/profile";

export default function Nav({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-dark fixed inset-x-0 top-0 z-50 border-b border-paper/15 bg-ink">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-[20px] leading-none tracking-[-0.01em] text-paper">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="u-link text-[13px] text-paper/65 transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-[13px] font-medium text-paper md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-paper/15 bg-ink px-6 pb-6 pt-3 md:hidden">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-paper/10 py-3 font-serif text-xl text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="u-link mt-5 inline-block text-[13px] text-paper/65"
          >
            {profile.email}
          </a>
        </div>
      )}
    </header>
  );
}
