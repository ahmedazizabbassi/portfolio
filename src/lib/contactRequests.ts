import { z } from 'zod';
import { getSupabaseAdminClient } from './supabaseAdmin';

export const requesterTypes = ['individual', 'organization'] as const;
export const serviceTypes = [
  'consulting',
  'web_development',
  'security',
  'training',
  'other',
] as const;

export const contactRequestSchema = z
  .object({
    requesterType: z.enum(requesterTypes),
    serviceType: z.enum(serviceTypes),
    fullName: z.string().trim().min(2, 'Full name is required.'),
    email: z.string().trim().email('Please enter a valid email address.'),
    organizationName: z.string().trim().optional().or(z.literal('')),
    requestBody: z
      .string()
      .trim()
      .min(20, 'Please provide more details (at least 20 characters).')
      .max(5000, 'Please keep the request under 5000 characters.'),
  })
  .superRefine((data, ctx) => {
    if (data.requesterType === 'organization') {
      const org = (data.organizationName ?? '').trim();
      if (!org) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Organization name is required for organizations.',
          path: ['organizationName'],
        });
      }
    }
  });

export type ContactRequestInput = z.infer<typeof contactRequestSchema>;

export async function createContactRequest(args: {
  input: ContactRequestInput;
  meta?: Record<string, unknown>;
}) {
  const supabase = getSupabaseAdminClient();
  const { input, meta } = args;

  const payload = {
    requester_type: input.requesterType,
    service_type: input.serviceType,
    full_name: input.fullName.trim(),
    email: input.email.trim().toLowerCase(),
    organization_name:
      input.requesterType === 'organization'
        ? (input.organizationName ?? '').trim()
        : null,
    request_body: input.requestBody.trim(),
    meta: meta ?? {},
  };

  const { data, error } = await supabase
    .from('contact_requests')
    .insert(payload)
    .select('id')
    .single();

  if (error) {
    throw new Error(`Failed to save contact request: ${error.message}`);
  }

  return data;
}

