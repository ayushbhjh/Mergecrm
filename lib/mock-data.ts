import { addDays, subDays } from "date-fns";
import type { DashboardMetric } from "@/lib/types";

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Total Leads", value: "248", delta: "+12% MoM", tone: "primary" },
  { label: "New Leads", value: "38", delta: "+8 today", tone: "accent" },
  { label: "Contacted Leads", value: "62", delta: "+4 today" },
  { label: "Interested Leads", value: "44", delta: "+3 today", tone: "success" },
  { label: "Meetings Scheduled", value: "21", delta: "+5 this week" },
  { label: "Proposal Sent", value: "18", delta: "7 pending review" },
  { label: "Negotiation", value: "12", delta: "4 hot deals", tone: "warning" },
  { label: "Tours Confirmed", value: "9", delta: "2 confirmed today", tone: "success" },
  { label: "Lost Leads", value: "14", delta: "Needs reactivation", tone: "muted" },
  { label: "Revenue Pipeline", value: "₹86.4L", delta: "+18% MoM", tone: "primary" },
  { label: "Revenue Closed", value: "₹31.2L", delta: "From 9 tours", tone: "success" },
  { label: "Follow-Ups Due Today", value: "16", delta: "6 overdue", tone: "warning" },
];

export const salesFunnelData = [
  { stage: "New", value: 38 },
  { stage: "Contacted", value: 62 },
  { stage: "Interested", value: 44 },
  { stage: "Meeting", value: 21 },
  { stage: "Proposal", value: 18 },
  { stage: "Negotiation", value: 12 },
  { stage: "Tour Confirmed", value: 9 },
];

export const revenueData = [
  { month: "Jan", revenue: 14 },
  { month: "Feb", revenue: 18 },
  { month: "Mar", revenue: 15 },
  { month: "Apr", revenue: 20 },
  { month: "May", revenue: 24 },
  { month: "Jun", revenue: 31 },
];

export const teamPerformanceData = [
  {
    name: "Ayush Kumar",
    assigned: 74,
    contacted: 58,
    meetings: 18,
    proposals: 14,
    tours: 7,
    revenue: 16.8,
    conversion: 9.5,
  },
  {
    name: "Siddhi",
    assigned: 66,
    contacted: 49,
    meetings: 15,
    proposals: 11,
    tours: 5,
    revenue: 9.8,
    conversion: 7.6,
  },
  {
    name: "Rishu",
    assigned: 58,
    contacted: 46,
    meetings: 13,
    proposals: 9,
    tours: 4,
    revenue: 4.6,
    conversion: 6.9,
  },
];

export const leadSourceData = [
  { name: "Email", value: 15 },
  { name: "LinkedIn", value: 24 },
  { name: "Referral", value: 41 },
  { name: "Website", value: 28 },
  { name: "WhatsApp", value: 46 },
  { name: "Cold Calling", value: 31 },
];

export const leadStatusData = [
  { name: "New", value: 38 },
  { name: "Contacted", value: 62 },
  { name: "Interested", value: 44 },
  { name: "Meeting Scheduled", value: 21 },
  { name: "Proposal Sent", value: 18 },
  { name: "Negotiation", value: 12 },
  { name: "Follow-Up", value: 30 },
  { name: "Tour Confirmed", value: 9 },
  { name: "Lost", value: 14 },
];

export const recentActivity = [
  {
    id: "1",
    title: "Proposal sent to Delhi Public School",
    description: "₹2.4L package proposal shared by Siddhi.",
    createdAt: subDays(new Date(), 0),
  },
  {
    id: "2",
    title: "Meeting scheduled with DPS Indirapuram",
    description: "Zoom meeting fixed for tomorrow at 11:00 AM.",
    createdAt: subDays(new Date(), 0),
  },
  {
    id: "3",
    title: "Follow-up completed",
    description: "Rishu followed up on cricket academy inquiry.",
    createdAt: subDays(new Date(), 1),
  },
  {
    id: "4",
    title: "Tour booking confirmed",
    description: "Dehradun Cricket Tour booked for 48 students.",
    createdAt: subDays(new Date(), 2),
  },
];

export const overdueFollowUps = [
  {
    id: "MCT-000112",
    schoolName: "Delhi Public School",
    owner: "Siddhi",
    dueDate: subDays(new Date(), 1),
  },
  {
    id: "MCT-000126",
    schoolName: "Ryan International",
    owner: "Rishu",
    dueDate: subDays(new Date(), 2),
  },
];

export const pipelineColumns = [
  "New",
  "Contacted",
  "Interested",
  "Meeting Scheduled",
  "Proposal Sent",
  "Negotiation",
  "Tour Confirmed",
  "Lost",
] as const;
