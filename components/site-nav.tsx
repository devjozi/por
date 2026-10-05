import Link from "next/link";

export default function SiteNav() {
  return (
    <header>
      <nav
        aria-label="Primary navigation"
        style={{
          width: "min(68rem, calc(100% - 2rem))",
          margin: "0 auto",
          minHeight: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link href="/" aria-label="Home">
          Joseph Omoruwou
        </Link>
        <a
          href="https://github.com/devjozi/por"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </nav>
    </header>
  );
}
