import { z } from "zod";
import {
  followUpTypes,
  leadSources,
  leadStatuses,
  meetingTypes,
  organizationTypes,
  paymentStatuses,
  priorities,
  proposalStatuses,
  userRoles,
} from "@/lib/constants";

const idRegex = /^MCT-\d{6}$/;
const optionalDate = z.preprocess((value) => (value === "" || value == null ? undefined : value), z.coerce.date().optional());

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(2),
  role: z.enum(userRoles),
});

export const leadSchema = z.object({
  leadId: z.string().regex(idRegex),
  schoolName: z.string().min(2),
  organizationType: z.enum(organizationTypes),
  contactPerson: z.string().min(2),
  designation: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  state: z.string().min(2),
  city: z.string().min(2),
  website: z.string().url().optional().or(z.literal("")),
  studentStrength: z.coerce.number().int().min(0),
  leadSource: z.enum(leadSources),
  assignedToId: z.string().optional().or(z.literal("")),
  status: z.enum(leadStatuses),
  priority: z.enum(priorities),
  estimatedDealValue: z.coerce.number().min(0),
  expectedCloseDate: z.coerce.date(),
  lastContactDate: optionalDate,
  nextFollowUpDate: optionalDate,
  notes: z.string().optional(),
});

export const followUpSchema = z.object({
  leadId: z.string().min(1),
  assignedUserId: z.string().min(1),
  followUpDate: z.coerce.date(),
  reminderTime: z.string().min(1),
  type: z.enum(followUpTypes),
  notes: z.string().optional(),
});

export const meetingSchema = z.object({
  leadId: z.string().min(1),
  meetingDate: z.coerce.date(),
  meetingTime: z.string().min(1),
  meetingType: z.enum(meetingTypes),
  agenda: z.string().min(2),
  outcome: z.string().optional(),
});

export const proposalSchema = z.object({
  leadId: z.string().min(1),
  proposalAmount: z.coerce.number().min(0),
  proposalDate: z.coerce.date(),
  status: z.enum(proposalStatuses),
  attachmentUrl: z.string().url().optional().or(z.literal("")),
});

export const bookingSchema = z.object({
  schoolName: z.string().min(2),
  contactPerson: z.string().min(2),
  assignedSalesPersonId: z.string().min(1),
  tourType: z.string().min(2),
  numberOfStudents: z.coerce.number().int().min(1),
  packageAmount: z.coerce.number().min(0),
  advancePayment: z.coerce.number().min(0),
  remainingPayment: z.coerce.number().min(0),
  paymentStatus: z.enum(paymentStatuses),
  tourDate: z.coerce.date(),
  bookingDate: z.coerce.date(),
});

export const reportFilterSchema = z.object({
  state: z.string().optional(),
  city: z.string().optional(),
  assignedUserId: z.string().optional(),
  status: z.enum(leadStatuses).optional(),
  leadSource: z.enum(leadSources).optional(),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
});
