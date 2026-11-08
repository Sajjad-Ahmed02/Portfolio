const EXTERNAL = /^https?:\/\//i;

/**
 * Understated text link: underline draws in on hover, accent arrow.
 * Outbound links open in a new tab.
 */
export default function ArrowLink({ href, className = "", children }) {
  const external = EXTERNAL.test(href);

  return (
    <a
      href={href}
      className={`u-link inline-flex items-baseline gap-1.5 text-[13px] font-medium text-ink ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <span aria-hidden="true" className="text-accent">
        ↗
      </span>
    </a>
  );
}
