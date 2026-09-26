"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type Theme = "light" | "dark" | "system";

const themeOptions: { value: Theme; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function ThemeIcon({ theme }: { theme: Theme }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {theme === "light" && (
        <>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </>
      )}
      {theme === "dark" && (
        <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
      )}
      {theme === "system" && (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </>
      )}
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const menuId = useId();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/leadership", label: "Leadership & Volunteering" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isThemeMenuOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!themeMenuRef.current?.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsThemeMenuOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isThemeMenuOpen]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (selectedTheme: Theme) => {
      const isDark =
        selectedTheme === "dark" ||
        (selectedTheme === "system" && mediaQuery.matches);
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme(theme);
    if (theme !== "system") return;

    const handleSystemThemeChange = () => applyTheme("system");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const handleThemeChange = (nextTheme: Theme) => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    setIsThemeMenuOpen(false);
  };

  const activeThemeLabel = themeOptions.find(
    (option) => option.value === theme,
  )?.label;

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-black/10 bg-[rgba(var(--background-start-rgb),0.8)] backdrop-blur dark:border-white/15">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
        >
          Aziz
        </Link>

        <ul className="hidden items-center justify-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    "hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
                    "dark:hover:bg-white/[0.06]",
                    isActive
                      ? "text-[var(--link)]"
                      : "text-[rgb(var(--foreground-rgb))]",
                  ].join(" ")}
                >
                  <span
                    className={
                      isActive ? "border-b-2 border-[var(--link)] pb-0.5" : ""
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

                <div className="flex items-center gap-2">
          <div ref={themeMenuRef} className="relative">
            <button
              type="button"
              aria-label="Color theme"
              aria-haspopup="menu"
              aria-expanded={isThemeMenuOpen}
              onClick={() => setIsThemeMenuOpen((value) => !value)}
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-transparent px-3 py-2 text-xs font-medium transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:hover:bg-white/[0.06]"
            >
              <ThemeIcon theme={theme} />
              <span className="hidden sm:inline">{activeThemeLabel}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {isThemeMenuOpen && (
              <div
                role="menu"
                aria-label="Color theme options"
                className="absolute right-0 top-[calc(100%+0.5rem)] z-10 min-w-36 rounded-2xl border border-black/10 bg-white/95 p-1.5 shadow-lg shadow-black/10 backdrop-blur dark:border-white/15 dark:bg-neutral-950/95 dark:shadow-black/30"
              >
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === option.value}
                    onClick={() => handleThemeChange(option.value)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-medium transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:hover:bg-white/[0.08]"
                  >
                    <ThemeIcon theme={option.value} />
                    <span className="flex-1">{option.label}</span>
                    {theme === option.value && (
                      <span aria-hidden="true" className="text-[var(--link)]">
                        &#10003;
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] p-2 transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] md:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={["md:hidden", isOpen ? "block" : "hidden"].join(" ")}
      >
        <ul className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  className={[
                    "block rounded-xl px-3 py-2 text-sm font-medium transition",
                    "hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
                    "dark:hover:bg-white/[0.06]",
                    isActive
                      ? "text-[var(--link)]"
                      : "text-[rgb(var(--foreground-rgb))]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
