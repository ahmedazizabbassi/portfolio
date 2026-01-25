import React from 'react';

export default function ExperiencePage() {
  const experiences = [
    {
      company: 'Softylines',
      location: 'Sousse, Tunisia',
      positions: [
        {
          title: 'Software Developer',
          period: 'September 2023 – January 2026',
          responsibilities: [
            'Designed and implemented backend modules handling authentication, data validation, and business logic for production web applications.',
            'Built and maintained RESTful APIs consumed by frontend applications and third-party services.',
            'Designed and optimized MySQL database schemas, writing complex queries and improving data consistency.',
            'Refactored legacy code to improve readability, maintainability, and performance.',
            'Debugged production issues and implemented long-term fixes following clean-code practices.',
          ],
        },
        {
          title: 'Supervisor and Web Development Mentor',
          period: 'September 2024 – October 2024',
          responsibilities: [
            'Supervised and supported incoming work-study software development trainees.',
            'Monitored and evaluated trainees\' progress along a structured MERN stack learning roadmap.',
            'Designed, curated, and facilitated coding challenges to reinforce core programming concepts and promote critical thinking.',
            'Provided technical assistance and personalized guidance to help overcome roadblocks.',
            'Regularly reported progress, challenges, and outcomes to senior supervisors and stakeholders.',
          ],
        },
      ],
    },
    {
      company: 'Softy Skills',
      location: 'Sousse, Tunisia',
      positions: [
        {
          title: 'Software Development Instructor',
          period: 'July 2024 – July 2025',
          responsibilities: [
            'Instructed students in software development concepts and practical coding skills.',
          ],
        },
      ],
    },
    {
      company: 'Google Summer of Code (GSoC)',
      location: 'Remote',
      positions: [
        {
          title: 'Open Source Contributor (Drupal Association)',
          period: 'June 2023 – August 2023',
          responsibilities: [
            'Designed and developed a custom Drupal module in PHP, extending core functionality to improve developer workflows.',
            'Worked within a large open-source codebase, following Drupal coding standards and review processes.',
            'Collaborated with international mentors and contributors through GitHub issues and code reviews.',
            'Documented the module and supported long-term maintainability.',
          ],
        },
      ],
    },
    {
      company: 'Galois Center',
      location: 'Nabeul, Tunisia',
      positions: [
        {
          title: 'Web Developer (PHP)',
          period: 'January 2022 – June 2022',
          responsibilities: [
            'Designed and developed a custom ERP system from scratch using PHP and MySQL, covering core business workflows.',
            'Implemented user authentication, role-based access control, and CRUD modules.',
            'Designed relational database schemas and ensured data integrity across multiple modules.',
            'Built server-side logic to handle business rules and data processing.',
          ],
        },
      ],
    },
    {
      company: 'Freelance',
      location: 'Nabeul, Tunisia',
      positions: [
        {
          title: 'Python ML Developer',
          period: 'September 2020 – August 2021',
          responsibilities: [
            'Worked on Machine Learning projects using Python.',
          ],
        },
      ],
    },
  ];

  return (
    <main className="mx-auto min-h-[85vh] max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Professional Experience
        </h1>
      </header>

      <div className="flex flex-col gap-6 sm:gap-8">
        {experiences.map((experience) => (
          <section
            key={experience.company}
            className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 shadow-sm dark:border-white/15 dark:bg-white/[0.03] sm:p-7"
          >
            <div className="mb-5">
              <h2 className="text-xl font-bold sm:text-2xl">
                {experience.company}
              </h2>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70 sm:text-base">
                {experience.location}
              </p>
            </div>

            <div className="space-y-6">
              {experience.positions.map((position, positionIndex) => (
                <div
                  key={`${position.title}-${position.period}`}
                  className={[
                    positionIndex < experience.positions.length - 1
                      ? 'border-b border-black/10 pb-6 dark:border-white/15'
                      : '',
                  ].join(' ')}
                >
                  <h3 className="text-base font-semibold sm:text-lg">
                    {position.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                    {position.period}
                  </p>

                  <ul className="mt-4 space-y-3">
                    {position.responsibilities.map((responsibility) => (
                      <li key={`${position.title}-${responsibility}`} className="relative pl-6 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60"
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
