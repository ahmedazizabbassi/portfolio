import Image from "next/image";
import React from 'react';


export default function HomePage() {
    return (
      <main className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
          <div className="shrink-0">
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
            <p className="text-base leading-relaxed sm:text-lg">
              Hello, my name is Ahmed Aziz Abbassi.
            </p>

            <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
              <h1 className="text-xl font-bold capitalize leading-snug sm:text-2xl">
                <span aria-hidden="true" className="mr-1">⏳</span>{" "}
                <strong>hacker</strong> & <strong>cyber security researcher</strong>
              </h1>
              <h2 className="text-xl font-bold capitalize leading-snug sm:text-2xl">
                <span aria-hidden="true" className="mr-1">🎯</span>{" "}
                software developer
              </h2>
              <h2 className="text-xl font-bold capitalize leading-snug sm:text-2xl">
                <span aria-hidden="true" className="mr-1">🎯</span>{" "}
                open source contributor @&nbsp;
                <a
                  href="https://drupal.org"
                  className="underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  Drupal.
                </a>
              </h2>
              <div className="pt-3">
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-amber-500/[0.12] via-fuchsia-500/[0.10] to-sky-500/[0.10] p-4 shadow-sm dark:border-white/15 dark:from-amber-400/[0.16] dark:via-fuchsia-400/[0.12] dark:to-sky-400/[0.12] sm:p-5">
                  <div className="flex items-start gap-3">
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

                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight sm:text-base">
                        Featured achievement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-black/70 dark:text-white/70 sm:text-base">
                        Tunisia National Champion (2018) — 4×100m relay. I also train as a track athlete and play football regularly.
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                          2018
                        </span>
                        <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                          4×100m relay
                        </span>
                        <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/15 dark:bg-black/20 dark:text-white/70">
                          Track & football
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-300/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ul className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-5">
          <li className="h-10 w-10">
            <a
              aria-label="Drupal profile"
              href={`https://drupal.org/u/${process.env.DRUPAL_USERNAME}`}
              className="flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <Image
                src="/social/water-outline.svg"
                alt="Drupal Logo"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
          </li>
          <li className="h-10 w-10">
            <a
              aria-label="GitLab profile"
              href={`https://gitlab.com/${process.env.GITLAB_USERNAME}`}
              className="flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <Image src="/social/logo-gitlab.svg" alt="GitLab" width={20} height={20} className="dark:invert" />
            </a>
          </li>
          <li className="h-10 w-10">
            <a
              aria-label="GitHub profile"
              href={`https://github.com/${process.env.GITHUB_USERNAME}`}
              className="flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <Image src="/social/logo-github.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
            </a>
          </li>
          <li className="h-10 w-10">
            <a
              aria-label="Twitter profile"
              href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
              className="flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <Image src="/social/logo-twitter.svg" alt="Twitter" width={20} height={20} className="dark:invert" />
            </a>
          </li>
          <li className="h-10 w-10">
            <a
              aria-label="LinkedIn profile"
              href={`https://linkedin.com/in/${process.env.LINKEDIN_USERNAME}`}
              className="flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <Image src="/social/logo-linkedin.svg" alt="LinkedIn" width={20} height={20} className="dark:invert" />
            </a>
          </li>
        </ul>
      </main>
  );
}
