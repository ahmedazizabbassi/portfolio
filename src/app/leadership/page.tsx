import React from 'react';

export default function LeadershipPage() {
  const leadershipItems = [
    {
      title: 'Google Summer of Code Mentor',
      period: '2024, 2025',
      description: 'Mentored new contributors in the open-source community, helping them navigate the GSoC program and contribute effectively to open-source projects.',
    },
    {
      title: 'Supervisor and Web Development Mentor',
      period: 'September 2024 – October 2024',
      organization: 'Softylines',
      description: 'Supervised and supported incoming work-study software development trainees. Monitored and evaluated trainees\' progress along a structured MERN stack learning roadmap. Designed, curated, and facilitated coding challenges to reinforce core programming concepts and promote critical thinking.',
    },
    {
      title: 'Software Development Instructor',
      period: 'July 2024 – July 2025',
      organization: 'Softy Skills',
      description: 'Instructed students in software development concepts and practical coding skills.',
    },
    {
      title: 'SecuriNets Club',
      description: 'Active Member - Contributing to cybersecurity awareness and education initiatives.',
    },
    {
      title: 'Athletic Club Nabeul',
      description: 'Active Member - Participating in community athletic activities and events.',
    },
  ];

  return (
    <main className="mx-auto min-h-[85vh] max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Leadership & Volunteering
        </h1>
      </header>

      <div className="flex flex-col gap-6 sm:gap-8">
        {leadershipItems.map((item) => (
          <section
            key={[item.title, item.organization ?? '', item.period ?? ''].join('|')}
            className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 shadow-sm dark:border-white/15 dark:bg-white/[0.03] sm:p-7"
          >
            <h2 className="text-xl font-bold sm:text-2xl">
              {item.title}
            </h2>

            {item.organization && (
              <p className="mt-1 text-sm font-medium text-black/70 dark:text-white/70 sm:text-base">
                {item.organization}
              </p>
            )}

            {item.period && (
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {item.period}
              </p>
            )}

            <p className="mt-4 leading-relaxed">
              {item.description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
