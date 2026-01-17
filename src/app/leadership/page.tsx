import React from 'react';
import styles from '../page.module.css';

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
    <main className={styles.main}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <h1 className={styles.headline} style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Leadership & Volunteering
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {leadershipItems.map((item, index) => (
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
                {item.title}
              </h2>
              {item.organization && (
                <p style={{ color: 'rgba(var(--foreground-rgb), 0.7)', marginBottom: '0.25rem', fontSize: '0.95rem', fontWeight: '500' }}>
                  {item.organization}
                </p>
              )}
              {item.period && (
                <p style={{ color: 'rgba(var(--foreground-rgb), 0.6)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  {item.period}
                </p>
              )}
              <p style={{ lineHeight: '1.6' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
