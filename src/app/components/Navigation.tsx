'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/leadership', label: 'Leadership & Volunteering' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-black/10 bg-[rgba(var(--background-start-rgb),0.8)] backdrop-blur dark:border-white/15">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
        >
          Aziz
        </Link>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-controls={menuId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] p-2 transition hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] md:hidden"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
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

        <ul className="hidden items-center justify-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    'rounded-xl px-3 py-2 text-sm font-medium transition',
                    'hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60',
                    'dark:hover:bg-white/[0.06]',
                    isActive ? 'text-[var(--link)]' : 'text-[rgb(var(--foreground-rgb))]',
                  ].join(' ')}
                >
                  <span className={isActive ? 'border-b-2 border-[var(--link)] pb-0.5' : ''}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id={menuId}
        className={[
          'md:hidden',
          isOpen ? 'block' : 'hidden',
        ].join(' ')}
      >
        <ul className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  className={[
                    'block rounded-xl px-3 py-2 text-sm font-medium transition',
                    'hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60',
                    'dark:hover:bg-white/[0.06]',
                    isActive ? 'text-[var(--link)]' : 'text-[rgb(var(--foreground-rgb))]',
                  ].join(' ')}
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
