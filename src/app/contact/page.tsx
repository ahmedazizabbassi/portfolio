'use client';

import { useMemo, useState } from 'react';
import { requesterTypes, serviceTypes } from '@/lib/contactRequests';

type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'error'; message: string };

const serviceTypeLabels: Record<(typeof serviceTypes)[number], string> = {
  consulting: 'Consulting',
  web_development: 'Web development',
  security: 'Security assessment',
  training: 'Training / mentoring',
  other: 'Other',
};

export default function ContactPage() {
  const isDev = process.env.NODE_ENV === 'development';
  const [requesterType, setRequesterType] = useState<(typeof requesterTypes)[number]>('individual');
  const [serviceType, setServiceType] = useState<(typeof serviceTypes)[number]>('consulting');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [requestBody, setRequestBody] = useState('');

  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [lastRequestId, setLastRequestId] = useState<string | null>(null);

  const isOrg = requesterType === 'organization';
  const canSubmit = useMemo(() => {
    if (!fullName.trim() || !email.trim() || !requestBody.trim()) return false;
    if (isOrg && !organizationName.trim()) return false;
    return true;
  }, [email, fullName, isOrg, organizationName, requestBody]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState({ status: 'submitting' });
    setFieldErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          requesterType,
          serviceType,
          fullName,
          email,
          organizationName,
          requestBody,
        }),
      });

      const payload = (await res.json().catch(() => null)) as any;

      if (!res.ok) {
        if (payload?.issues?.fieldErrors) {
          setFieldErrors(payload.issues.fieldErrors);
        }
        setSubmitState({
          status: 'error',
          message: payload?.error ?? 'Something went wrong. Please try again.',
        });
        return;
      }

      setLastRequestId(payload?.id ?? null);
      setSubmitState({ status: 'success' });
      setFullName('');
      setEmail('');
      setOrganizationName('');
      setRequestBody('');
      setRequesterType('individual');
      setServiceType('consulting');
    } catch (err) {
      setSubmitState({
        status: 'error',
        message: err instanceof Error ? err.message : 'Network error. Please try again.',
      });
    }
  }

  return (
    <main className="mx-auto min-h-[85vh] max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 dark:text-white/70 sm:text-base">
          I don&apos;t publish my personal contact info publicly. Use this form and your request will be saved securely so
          I can reply to you.
        </p>
        {isDev ? (
          <div className="mt-4 rounded-xl border border-black/10 bg-black/[0.02] p-4 text-xs text-black/70 dark:border-white/15 dark:bg-white/[0.03] dark:text-white/70">
            <p>
              <strong>Dev mode:</strong> this form submits to <code>/api/contact</code>. If you want private inserts,
              set <code>SUPABASE_SERVICE_ROLE_KEY</code> on the server. Otherwise, the migration enables an anon insert
              policy.
            </p>
          </div>
        ) : null}
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 shadow-sm dark:border-white/15 dark:bg-white/[0.03] sm:p-7"
        >
          <fieldset className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="block text-sm font-medium">You are</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {requesterTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setRequesterType(t)}
                      className={[
                        'rounded-xl px-3 py-2 text-sm font-medium transition',
                        'border border-black/10 bg-black/[0.02] hover:bg-black/[0.05]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60',
                        'dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]',
                        requesterType === t ? 'text-[var(--link)]' : 'text-[rgb(var(--foreground-rgb))]',
                      ].join(' ')}
                      aria-pressed={requesterType === t}
                    >
                      {t === 'individual' ? 'Personal (Individual)' : 'Organization'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium">
                  Service type
                </label>
                <select
                  id="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as any)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[rgba(var(--background-start-rgb),0.35)] px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500/60 dark:border-white/15"
                >
                  {serviceTypes.map((t) => (
                    <option key={t} value={t}>
                      {serviceTypeLabels[t]}
                    </option>
                  ))}
                </select>
                {fieldErrors.serviceType?.length ? (
                  <p className="mt-1 text-sm text-red-500">{fieldErrors.serviceType.join(' ')}</p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[rgba(var(--background-start-rgb),0.35)] px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500/60 dark:border-white/15"
                  placeholder="Your name"
                  required
                />
                {fieldErrors.fullName?.length ? (
                  <p className="mt-1 text-sm text-red-500">{fieldErrors.fullName.join(' ')}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[rgba(var(--background-start-rgb),0.35)] px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500/60 dark:border-white/15"
                  placeholder="you@domain.com"
                  required
                />
                {fieldErrors.email?.length ? (
                  <p className="mt-1 text-sm text-red-500">{fieldErrors.email.join(' ')}</p>
                ) : null}
              </div>
            </div>

            {isOrg ? (
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium">
                  Organization name
                </label>
                <input
                  id="organizationName"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[rgba(var(--background-start-rgb),0.35)] px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500/60 dark:border-white/15"
                  placeholder="Company / Org"
                  required
                />
                {fieldErrors.organizationName?.length ? (
                  <p className="mt-1 text-sm text-red-500">{fieldErrors.organizationName.join(' ')}</p>
                ) : null}
              </div>
            ) : null}

            <div>
              <label htmlFor="requestBody" className="block text-sm font-medium">
                Request details
              </label>
              <textarea
                id="requestBody"
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                rows={7}
                className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-[rgba(var(--background-start-rgb),0.35)] px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500/60 dark:border-white/15"
                placeholder="What do you need? Timeline, scope, links, constraints…"
                required
              />
              <div className="mt-2 flex items-center justify-between text-xs text-black/60 dark:text-white/60">
                <span>{fieldErrors.requestBody?.length ? 'Please fix the field above.' : 'Minimum 20 characters.'}</span>
                <span>{requestBody.trim().length}/5000</span>
              </div>
              {fieldErrors.requestBody?.length ? (
                <p className="mt-1 text-sm text-red-500">{fieldErrors.requestBody.join(' ')}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!canSubmit || submitState.status === 'submitting'}
                className={[
                  'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition',
                  'bg-[var(--link)] text-white hover:opacity-90',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60',
                ].join(' ')}
              >
                {submitState.status === 'submitting' ? 'Sending…' : 'Send request'}
              </button>

              {submitState.status === 'success' ? (
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Thanks — your request was sent.
                </p>
              ) : null}
              {submitState.status === 'error' ? (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  {isDev ? submitState.message : 'Something went wrong. Please try again.'}
                </p>
              ) : null}
            </div>

            {isDev && submitState.status === 'success' && lastRequestId ? (
              <p className="text-xs text-black/60 dark:text-white/60">
                Saved id: <code>{lastRequestId}</code>
              </p>
            ) : null}
          </fieldset>
        </form>

        <aside className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 shadow-sm dark:border-white/15 dark:bg-white/[0.03] sm:p-7">
          <h2 className="text-lg font-semibold">What to include</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-black/70 dark:text-white/70">
            <li className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60"
              />
              <span> A quick summary of what you want to build / improve.</span>
            </li>
            <li className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60"
              />
              <span> Timeline and constraints (budget, stack, hosting, etc).</span>
            </li>
            <li className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60"
              />
              <span> Links (repo, website, docs) if relevant.</span>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-black/10 bg-black/[0.02] p-4 text-xs text-black/70 dark:border-white/15 dark:bg-white/[0.03] dark:text-white/70">
            <p>
              <strong>Privacy:</strong> your message is stored in my private database for follow-up. I don&apos;t publish
              emails or phone numbers on this website.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

