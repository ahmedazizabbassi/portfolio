import Image from "next/image";
 
const SOCIAL_LINKS = [
  {
    label: "Drupal profile",
    href: `https://drupal.org/u/${process.env.DRUPAL_USERNAME}`,
    iconSrc: "/social/water-outline.svg",
    iconAlt: "Drupal",
  },
  {
    label: "GitLab profile",
    href: `https://gitlab.com/${process.env.GITLAB_USERNAME}`,
    iconSrc: "/social/logo-gitlab.svg",
    iconAlt: "GitLab",
  },
  {
    label: "GitHub profile",
    href: `https://github.com/${process.env.GITHUB_USERNAME}`,
    iconSrc: "/social/logo-github.svg",
    iconAlt: "GitHub",
  },
  {
    label: "Twitter profile",
    href: `https://twitter.com/${process.env.TWITTER_USERNAME}`,
    iconSrc: "/social/logo-twitter.svg",
    iconAlt: "Twitter",
  },
  {
    label: "LinkedIn profile",
    href: `https://linkedin.com/in/${process.env.LINKEDIN_USERNAME}`,
    iconSrc: "/social/logo-linkedin.svg",
    iconAlt: "LinkedIn",
  },
] as const;
 
const socialItemClassName =
  "flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]";


export default function HomePage() {
    return (
      <main className="mx-auto flex min-h-[85vh] w-full max-w-5xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="mx-auto grid w-full items-start gap-8 md:grid-cols-[auto,1fr] md:gap-10">
          <div className="flex justify-center md:block">
            <Image
              src="/photo_2026-01-16 08.45.24.jpeg"
              alt="my avatar"
              width={320}
              height={320}
              priority
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 240px"
              className="h-auto w-36 rounded-2xl border border-black/10 shadow-sm dark:border-white/15 sm:w-44 md:w-48 lg:w-60"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="mx-auto max-w-prose md:mx-0">
              <p className="text-base leading-relaxed text-black/80 dark:text-white/80 sm:text-lg">
                Hello, my name is Ahmed Aziz Abbassi.
              </p>

              <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                <h1 className="text-sm font-bold capitalize leading-tight tracking-tigh text-nowrap sm:text-3xl lg:text-4xl">
                  <span aria-hidden="true" className="mr-1">
                    ⏳
                  </span>{" "}
                  <strong>hacker</strong> & <strong>cyber security researcher</strong>
                </h1>

                <p className="text-xl font-semibold capitalize leading-snug tracking-tight text-black/85 dark:text-white/85 sm:text-2xl">
                  <span aria-hidden="true" className="mr-1">
                    🎯
                  </span>{" "}
                  software developer
                </p>

                <p className="text-xl font-semibold capitalize leading-snug tracking-tight text-black/85 dark:text-white/85 sm:text-2xl">
                  <span aria-hidden="true" className="mr-1">
                    🎯
                  </span>{" "}
                  open source contributor @&nbsp;
                  <a
                    href="https://drupal.org"
                    className="underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  >
                    Drupal
                  </a>.
                </p>

                <div className="pt-3">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-amber-500/[0.12] via-fuchsia-500/[0.10] to-sky-500/[0.10] p-4 shadow-sm dark:border-white/15 dark:from-amber-400/[0.16] dark:via-fuchsia-400/[0.12] dark:to-sky-400/[0.12] sm:p-5 lg:p-6">
                    <div className="flex items-center gap-2">
                      <div
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/10 backdrop-blur dark:bg-black/20 dark:ring-white/15"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5 text-amber-700 dark:text-amber-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 5h8M9 5V3h6v2M7 6h10v3a5 5 0 0 1-4 4.9V16h3v2H8v-2h3v-2.1A5 5 0 0 1 7 9V6ZM6 7H4a2 2 0 0 0 2 2m12-2h2a2 2 0 0 1-2 2"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold tracking-tight sm:text-base">
                        Highlights
                      </p>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/70 dark:text-white/70 sm:text-base">
                      <li className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-black/50 dark:bg-white/50"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-black/80 dark:text-white/80">
                            Athletics
                          </p>
                          <p className="text-black/70 dark:text-white/70">
                            Tunisia National Champion (2018) — 4×100m relay. I also
                            train as a track athlete and play football regularly.
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-black/50 dark:bg-white/50"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-black/80 dark:text-white/80">
                            Academics
                          </p>
                          <p className="text-black/70 dark:text-white/70">
                            Ranked 3rd nationally in the Tunisian Baccalaureate
                            (2022) with a grade of&nbsp;<span className="font-semibold text-black/80 dark:text-white/80">
                              18.35/20
                            </span>.
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                      <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                        4×100m relay
                      </span>
                      <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                        Track & football
                      </span>
                      <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                        Baccalaureate (3rd nationally)
                      </span>
                      <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                        18.35/20
                      </span>
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-300/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ul className="mx-auto mt-10 grid w-full max-w-xs grid-cols-3 place-items-center gap-3 sm:mt-12 sm:max-w-none sm:grid-cols-5 sm:gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label} className="h-10 w-10">
              <a aria-label={link.label} href={link.href} className={socialItemClassName}>
                <Image
                  src={link.iconSrc}
                  alt={link.iconAlt}
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
}
