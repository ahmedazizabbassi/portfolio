import React from 'react';
import styles from '../page.module.css';

export default function ExperiencePage() {
  const experiences = [
    {
      company: 'Softylines',
      location: 'Sousse, Tunisia',
      positions: [
        {
          title: 'Software Developer',
          period: 'September 2023 – Present',
          responsibilities: [
            'Designed and implemented Laravel-based backend modules handling authentication, data validation, and business logic for production web applications.',
            'Built and maintained RESTful APIs consumed by frontend applications and third-party services.',
            'Designed and optimized MySQL database schemas, writing complex queries and improving data consistency.',
            'Refactored legacy PHP code to improve readability, maintainability, and performance.',
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
    <main className={styles.main}>
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <h1 className={styles.headline} style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Professional Experience
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((experience, companyIndex) => (
            <div
              key={companyIndex}
              className={styles.card}
              style={{
                padding: '2rem',
                border: '1px solid rgba(var(--card-border-rgb), 0.3)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 className={styles.headline} style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>
                  {experience.company}
                </h2>
                <p style={{ color: 'rgba(var(--foreground-rgb), 0.7)', fontSize: '1rem' }}>
                  {experience.location}
                </p>
              </div>
              {experience.positions.map((position, positionIndex) => (
                <div
                  key={positionIndex}
                  style={{
                    marginBottom: positionIndex < experience.positions.length - 1 ? '2rem' : '0',
                    paddingBottom: positionIndex < experience.positions.length - 1 ? '2rem' : '0',
                    borderBottom: positionIndex < experience.positions.length - 1
                      ? '1px solid rgba(var(--card-border-rgb), 0.2)'
                      : 'none',
                  }}
                >
                  <h3 className={styles.headline} style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                    {position.title}
                  </h3>
                  <p style={{ color: 'rgba(var(--foreground-rgb), 0.6)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    {position.period}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {position.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        style={{
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          marginBottom: '0.75rem',
                          lineHeight: '1.6',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: '0',
                            top: '0.5em',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'rgb(var(--foreground-rgb))',
                            opacity: 0.6,
                          }}
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
