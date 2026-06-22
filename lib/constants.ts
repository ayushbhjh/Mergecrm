export const APP_NAME = "Merge CRM";
export const APP_TAGLINE = "Manage Schools. Close Tours. Grow Revenue.";
export const DEFAULT_TOUR_TYPE = "Dehradun Cricket Tour";

export const organizationTypes = [
  "School",
  "Cricket_Academy",
  "Sports_School",
] as const;

export const leadSources = [
  "Email",
  "LinkedIn",
  "Referral",
  "Website",
  "WhatsApp",
  "Cold Calling",
] as const;

export const leadStatuses = [
  "New",
  "Contacted",
  "Interested",
  "Meeting_Scheduled",
  "Proposal_Sent",
  "Negotiation",
  "Follow_Up",
  "Tour_Confirmed",
  "Lost",
] as const;

export const followUpTypes = ["Call", "WhatsApp", "Email", "Meeting"] as const;

export const meetingTypes = ["Zoom", "Google_Meet", "Phone_Call", "In_Person"] as const;

export const proposalStatuses = ["Sent", "Under_Review", "Accepted", "Rejected"] as const;

export const paymentStatuses = ["Pending", "Partial", "Paid"] as const;

export const priorities = ["High", "Medium", "Low"] as const;

export const userRoles = ["ADMIN", "MANAGER", "SALES_EXECUTIVE"] as const;

export const pipelineStages = [
  "New",
  "Contacted",
  "Interested",
  "Meeting_Scheduled",
  "Proposal_Sent",
  "Negotiation",
  "Tour_Confirmed",
  "Lost",
] as const;
