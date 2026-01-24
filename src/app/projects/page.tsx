import React from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Environmage Drupal Module',
      tech: 'PHP, Drupal',
      description: 'A custom Drupal module developed during Google Summer of Code 2023. Extends core Drupal functionality to improve developer workflows. Built following Drupal coding standards and best practices, with comprehensive documentation for long-term maintainability.',
    },
    {
      title: 'GSoC Scrapper',
      tech: 'Python, Web Scraping',
      description: 'A web scraping tool designed to extract and process data from Google Summer of Code program information. Automates data collection and provides structured output for analysis and tracking.',
    },
    {
      title: 'Sage ERP',
      tech: 'PHP, HTML, CSS, MySQL, JavaScript',
      description: 'A custom Enterprise Resource Planning system developed from scratch. Features user authentication, role-based access control, and comprehensive CRUD modules. Includes relational database design with data integrity across multiple business workflow modules.',
    },
  ];

  return (
    <main className="mx-auto min-h-[85vh] max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
      </header>

      <div className="flex flex-col gap-6 sm:gap-8">
        {projects.map((project) => (
          <section
            key={project.title}
            className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 shadow-sm dark:border-white/15 dark:bg-white/[0.03] sm:p-7"
          >
            <h2 className="text-xl font-bold sm:text-2xl">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60 sm:text-base">
              {project.tech}
            </p>
            <p className="mt-4 leading-relaxed">
              {project.description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
