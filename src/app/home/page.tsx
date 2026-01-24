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
