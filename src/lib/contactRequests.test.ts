import { describe, expect, it } from 'vitest';
import { contactRequestSchema } from './contactRequests';

describe('contactRequestSchema', () => {
  it('accepts a valid individual request', () => {
    const result = contactRequestSchema.safeParse({
      requesterType: 'individual',
      serviceType: 'consulting',
      fullName: 'John Doe',
      email: 'john@example.com',
      organizationName: '',
      requestBody: 'Hello, I would like to discuss a small project scope.',
    });

    expect(result.success).toBe(true);
  });

  it('requires organizationName when requesterType is organization', () => {
    const result = contactRequestSchema.safeParse({
      requesterType: 'organization',
      serviceType: 'web_development',
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      organizationName: '',
      requestBody: 'We want to rebuild our landing page and improve SEO.',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.organizationName?.[0]).toMatch(/required/i);
    }
  });
});

