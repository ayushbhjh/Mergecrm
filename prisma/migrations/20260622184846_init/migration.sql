/*
  Warnings:

  - The values [Lead_Created,Lead_Updated,Meeting_Scheduled,Follow_Up_Completed,Proposal_Sent,Booking_Confirmed,Lead_Assigned,Note_Added] on the enum `ActivityType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Cold_Calling] on the enum `LeadSource` will be removed. If these variants are still used in the database, this will fail.
  - The values [Meeting_Scheduled,Proposal_Sent,Follow_Up,Tour_Confirmed] on the enum `LeadStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [Google_Meet,Phone_Call,In_Person] on the enum `MeetingType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Cricket_Academy,Sports_School] on the enum `OrganizationType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Under_Review] on the enum `ProposalStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActivityType_new" AS ENUM ('Lead Created', 'Lead Updated', 'Meeting Scheduled', 'Follow-Up Completed', 'Proposal Sent', 'Booking Confirmed', 'Lead Assigned', 'Note Added');
ALTER TABLE "Activity" ALTER COLUMN "type" TYPE "ActivityType_new" USING ("type"::text::"ActivityType_new");
ALTER TYPE "ActivityType" RENAME TO "ActivityType_old";
ALTER TYPE "ActivityType_new" RENAME TO "ActivityType";
DROP TYPE "public"."ActivityType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "LeadSource_new" AS ENUM ('Email', 'LinkedIn', 'Referral', 'Website', 'WhatsApp', 'Cold Calling');
ALTER TABLE "Lead" ALTER COLUMN "leadSource" TYPE "LeadSource_new" USING ("leadSource"::text::"LeadSource_new");
ALTER TYPE "LeadSource" RENAME TO "LeadSource_old";
ALTER TYPE "LeadSource_new" RENAME TO "LeadSource";
DROP TYPE "public"."LeadSource_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "LeadStatus_new" AS ENUM ('New', 'Contacted', 'Interested', 'Meeting Scheduled', 'Proposal Sent', 'Negotiation', 'Follow-Up', 'Tour Confirmed', 'Lost');
ALTER TABLE "public"."Lead" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Lead" ALTER COLUMN "status" TYPE "LeadStatus_new" USING ("status"::text::"LeadStatus_new");
ALTER TYPE "LeadStatus" RENAME TO "LeadStatus_old";
ALTER TYPE "LeadStatus_new" RENAME TO "LeadStatus";
DROP TYPE "public"."LeadStatus_old";
ALTER TABLE "Lead" ALTER COLUMN "status" SET DEFAULT 'New';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "MeetingType_new" AS ENUM ('Zoom', 'Google Meet', 'Phone Call', 'In Person');
ALTER TABLE "Meeting" ALTER COLUMN "meetingType" TYPE "MeetingType_new" USING ("meetingType"::text::"MeetingType_new");
ALTER TYPE "MeetingType" RENAME TO "MeetingType_old";
ALTER TYPE "MeetingType_new" RENAME TO "MeetingType";
DROP TYPE "public"."MeetingType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OrganizationType_new" AS ENUM ('School', 'Cricket Academy', 'Sports School');
ALTER TABLE "Lead" ALTER COLUMN "organizationType" TYPE "OrganizationType_new" USING ("organizationType"::text::"OrganizationType_new");
ALTER TYPE "OrganizationType" RENAME TO "OrganizationType_old";
ALTER TYPE "OrganizationType_new" RENAME TO "OrganizationType";
DROP TYPE "public"."OrganizationType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ProposalStatus_new" AS ENUM ('Sent', 'Under Review', 'Accepted', 'Rejected');
ALTER TABLE "public"."Proposal" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Proposal" ALTER COLUMN "status" TYPE "ProposalStatus_new" USING ("status"::text::"ProposalStatus_new");
ALTER TYPE "ProposalStatus" RENAME TO "ProposalStatus_old";
ALTER TYPE "ProposalStatus_new" RENAME TO "ProposalStatus";
DROP TYPE "public"."ProposalStatus_old";
ALTER TABLE "Proposal" ALTER COLUMN "status" SET DEFAULT 'Sent';
COMMIT;
