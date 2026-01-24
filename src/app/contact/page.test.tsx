import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from './page';

describe('ContactPage', () => {
  it('shows organization field only when organization is selected', async () => {
    render(<ContactPage />);

    expect(screen.queryByLabelText(/organization name/i)).toBeNull();

    await userEvent.click(screen.getByRole('button', { name: /organization/i }));
    expect(screen.getByLabelText(/organization name/i)).toBeInTheDocument();
  });

  it('submits the form and shows success', async () => {
    const fetchMock = vi.fn(async () => {
      return new Response(JSON.stringify({ ok: true, id: '123' }), { status: 200 });
    });
    // @ts-expect-error - test environment mock
    global.fetch = fetchMock;

    render(<ContactPage />);

    await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/^email$/i), 'john@example.com');
    await userEvent.type(
      screen.getByLabelText(/request details/i),
      'Hello, I would like to discuss a small project scope.',
    );

    await userEvent.click(screen.getByRole('button', { name: /send request/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const [, fetchInit] = fetchMock.mock.calls[0];
    expect(fetchInit?.method).toBe('POST');
    expect(fetchInit?.headers).toMatchObject({ 'content-type': 'application/json' });

    const body = JSON.parse(fetchInit.body as string);
    expect(body.requesterType).toBe('individual');
    expect(body.fullName).toBe('John Doe');
    expect(body.email).toBe('john@example.com');

    expect(await screen.findByText(/your request was sent/i)).toBeInTheDocument();
  });
});

