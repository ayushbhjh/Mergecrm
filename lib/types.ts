export type UserRole = "ADMIN" | "MANAGER" | "SALES_EXECUTIVE";

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Interested"
  | "Meeting_Scheduled"
  | "Proposal_Sent"
  | "Negotiation"
  | "Follow_Up"
  | "Tour_Confirmed"
  | "Lost";

export type OrganizationType = "School" | "Cricket_Academy" | "Sports_School";

export type LeadSource = "Email" | "LinkedIn" | "Referral" | "Website" | "WhatsApp" | "Cold Calling";

export type Priority = "High" | "Medium" | "Low";

export type FollowUpType = "Call" | "WhatsApp" | "Email" | "Meeting";

export type MeetingType = "Zoom" | "Google_Meet" | "Phone_Call" | "In_Person";

export type ProposalStatus = "Sent" | "Under_Review" | "Accepted" | "Rejected";

export type PaymentStatus = "Pending" | "Partial" | "Paid";

export type DashboardMetric = {
  label: string;
  value: string;
  delta?: string;
  tone?: "primary" | "accent" | "success" | "warning" | "muted";
};
