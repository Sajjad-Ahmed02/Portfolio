import { useEffect, useRef, useState } from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { socialIcons, MailIcon } from "../ui/SocialIcons";
import { profile } from "../../data/profile";

const EXTERNAL = /^https?:\/\//i;

const channels = [
  ...profile.links,
  {
    label: "Email",
    handle: profile.email,
    url: `mailto:${profile.email}`,
    icon: "mail",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard permission denied — the mailto link is right there anyway
    }
  };

  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal>
        <p className="max-w-[20ch] font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
          Tell me what you're building<span className="text-accent">.</span>
        </p>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-muted">
          I'm currently {profile.availability.toLowerCase()}. Email is the fastest way to reach me;
          I read everything and usually reply within two days.
        </p>

        <div className="mt-9 flex flex-wrap items-baseline gap-x-8 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="u-link font-serif text-[clamp(1.25rem,5.5vw,1.875rem)] text-ink transition-colors hover:text-accent"
          >
            {profile.email} <span aria-hidden="true" className="text-accent">↗</span>
          </a>
          <button
            type="button"
            onClick={onCopy}
            aria-live="polite"
            className="u-link text-[11px] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            {copied ? "Copied" : "Copy address"}
          </button>
        </div>

        <div className="mt-14">
          <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">
            Elsewhere
          </p>
          <ul className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => {
              const Icon = socialIcons[channel.icon] ?? MailIcon;
              const external = EXTERNAL.test(channel.url);

              return (
                <li
                  key={channel.label}
                  className={`bg-paper ${
                    channel.icon === "mail" ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <a
                    href={channel.url}
                    className="group flex h-full items-center gap-3.5 bg-paper px-4 py-4 transition-colors hover:bg-paper2 sm:px-5"
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center border border-line text-ink transition-colors group-hover:border-ink">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                        {channel.label}
                      </span>
                      <span className="block truncate text-[13px] text-ink">{channel.handle}</span>
                    </span>
                    <span aria-hidden="true" className="ml-auto shrink-0 text-[13px] text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
