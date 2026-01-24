-- Contact requests table (raw SQL migration)
-- Intended for Supabase Postgres.

create extension if not exists pgcrypto;

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  requester_type text not null
    check (requester_type in ('individual', 'organization')),

  service_type text not null
    check (service_type in ('consulting', 'web_development', 'security', 'training', 'other')),

  full_name text not null,
  email text not null,
  organization_name text,

  request_body text not null,

  meta jsonb not null default '{}'::jsonb
);

-- Enable RLS so only server-side (service role) writes by default.
alter table public.contact_requests enable row level security;

-- Allow inserts from the public (anon) role, but keep reads locked down.
-- This lets you use the publishable/anon key (e.g. from server route) without exposing any data.
drop policy if exists "Allow public insert" on public.contact_requests;
create policy "Allow public insert"
  on public.contact_requests
  for insert
  to anon
  with check (true);

-- Note: no SELECT policy is created.
