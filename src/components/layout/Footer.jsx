import Container from "../ui/Container";
import { formatTime, useNow } from "../../hooks/useNow";
import { profile } from "../../data/profile";

export default function Footer() {
  const now = useNow(15000);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-2 py-8 text-[12px] text-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <p>
          © {year} {profile.name}
        </p>
        <p>Set in Newsreader &amp; Poppins. Built with React, Vite and Tailwind.</p>
        <p className="tabular-nums">
          {profile.location.split(",")[0]} · {formatTime(now, profile.timezone)} {profile.tzShort}
        </p>
      </Container>
    </footer>
  );
}
