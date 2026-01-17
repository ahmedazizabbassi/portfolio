import React from 'react';
import styles from '../page.module.css';

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
    <main className={styles.main}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <h1 className={styles.headline} style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Projects
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                padding: '1.5rem',
                border: '1px solid rgba(var(--card-border-rgb), 0.3)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <h2 className={styles.headline} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {project.title}
              </h2>
              <p style={{ color: 'rgba(var(--foreground-rgb), 0.6)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                {project.tech}
              </p>
              <p style={{ lineHeight: '1.6' }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
