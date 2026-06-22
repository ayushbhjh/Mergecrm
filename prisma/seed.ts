import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const roleSeeds = [
    {
      name: "Admin",
      slug: "admin",
      description: "Full access to Merge CRM.",
      permissions: [
        "users:read",
        "users:write",
        "leads:read",
        "leads:write",
        "reports:read",
        "analytics:read",
        "bookings:read",
        "bookings:write",
      ],
      isSystem: true,
    },
    {
      name: "Manager",
      slug: "manager",
      description: "Team and pipeline oversight.",
      permissions: ["users:read", "leads:read", "leads:write", "reports:read", "analytics:read", "bookings:read"],
      isSystem: true,
    },
    {
      name: "Sales Executive",
      slug: "sales-executive",
      description: "Owns assigned leads and follow-ups.",
      permissions: ["leads:read", "leads:write", "bookings:read"],
      isSystem: true,
    },
  ];

  for (const role of roleSeeds) {
    await prisma.role.upsert({
      where: { slug: role.slug },
      update: role,
      create: role,
    });
  }

  const adminRole = await prisma.role.findUnique({ where: { slug: "admin" } });
  const salesRole = await prisma.role.findUnique({ where: { slug: "sales-executive" } });

  const passwordHash = await bcrypt.hash("Password@123", 12);

  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "ayush@mergecrickettours.com" },
      update: {},
      create: {
        name: "Ayush Kumar",
        email: "ayush@mergecrickettours.com",
        passwordHash,
        role: "ADMIN",
        roleId: adminRole?.id,
        title: "Founder & Admin",
        department: "Leadership",
        phone: "+91-99999-00001",
      },
    }),
    prisma.user.upsert({
      where: { email: "siddhi@mergecrickettours.com" },
      update: {},
      create: {
        name: "Siddhi",
        email: "siddhi@mergecrickettours.com",
        passwordHash,
        role: "SALES_EXECUTIVE",
        roleId: salesRole?.id,
        title: "Business Development",
        department: "Sales",
        phone: "+91-99999-00002",
      },
    }),
    prisma.user.upsert({
      where: { email: "rishu@mergecrickettours.com" },
      update: {},
      create: {
        name: "Rishu",
        email: "rishu@mergecrickettours.com",
        passwordHash,
        role: "SALES_EXECUTIVE",
        roleId: salesRole?.id,
        title: "Business Development",
        department: "Sales",
        phone: "+91-99999-00003",
      },
    }),
  ]);

  const lead = await prisma.lead.upsert({
    where: { leadId: "MCT-000001" },
    update: {},
    create: {
      leadId: "MCT-000001",
      schoolName: "Delhi Public School, Dehradun",
      organizationType: "School",
      contactPerson: "Ms. Kavita Sharma",
      designation: "Principal",
      email: "principal@dpsdehradun.edu.in",
      phone: "+91-98765-43210",
      state: "Uttarakhand",
      city: "Dehradun",
      website: "https://dpsdehradun.edu.in",
      studentStrength: 1800,
      leadSource: "Referral",
      status: "Interested",
      priority: "High",
      estimatedDealValue: "480000",
      expectedCloseDate: new Date("2026-07-15"),
      lastContactDate: new Date(),
      nextFollowUpDate: new Date("2026-06-24"),
      notes: "Warm referral from existing parent network.",
      assignedToId: users[1].id,
      createdById: users[0].id,
    },
  });

  await prisma.followUp.create({
    data: {
      leadId: lead.id,
      assignedUserId: users[1].id,
      followUpDate: new Date("2026-06-24T10:00:00.000Z"),
      reminderTime: "10:00",
      type: "Call",
      notes: "Call the principal about itinerary options.",
    },
  });

  await prisma.meeting.create({
    data: {
      leadId: lead.id,
      ownerId: users[2].id,
      meetingDate: new Date("2026-06-26T05:30:00.000Z"),
      meetingTime: "11:00 AM",
      meetingType: "Zoom",
      agenda: "Tour package walkthrough and logistics discussion.",
      outcome: "Scheduled",
    },
  });

  await prisma.proposal.create({
    data: {
      leadId: lead.id,
      ownerId: users[1].id,
      proposalAmount: "480000",
      proposalDate: new Date(),
      status: "Sent",
      attachmentUrl: "https://example.com/proposals/mct-000001.pdf",
    },
  });

  await prisma.booking.create({
    data: {
      leadId: lead.id,
      schoolName: "Delhi Public School, Dehradun",
      contactPerson: "Ms. Kavita Sharma",
      assignedSalesPersonId: users[1].id,
      tourType: "Dehradun Cricket Tour",
      numberOfStudents: 48,
      packageAmount: "480000",
      advancePayment: "150000",
      remainingPayment: "330000",
      paymentStatus: "Partial",
      tourDate: new Date("2026-08-10"),
      bookingDate: new Date(),
    },
  });

  await prisma.notification.createMany({
    data: [
      {
        userId: users[0].id,
        title: "Lead conversion milestone reached",
        body: "Delhi Public School moved to proposal sent.",
        type: "lead",
      },
      {
        userId: users[1].id,
        title: "Follow-up due today",
        body: "You have 3 overdue follow-ups in the pipeline.",
        type: "follow-up",
      },
      {
        userId: users[2].id,
        title: "Booking confirmed",
        body: "The tour for 48 students is now partially paid.",
        type: "booking",
      },
    ],
  });

  await prisma.activity.createMany({
    data: [
      {
        type: "Lead_Created",
        title: "Lead created",
        description: "Delhi Public School lead was created by Ayush.",
        userId: users[0].id,
        leadId: lead.id,
      },
      {
        type: "Meeting_Scheduled",
        title: "Meeting scheduled",
        description: "Zoom meeting scheduled with the school principal.",
        userId: users[2].id,
        leadId: lead.id,
      },
      {
        type: "Proposal_Sent",
        title: "Proposal sent",
        description: "A tour proposal worth ₹4.8L was shared.",
        userId: users[1].id,
        leadId: lead.id,
      },
      {
        type: "Booking_Confirmed",
        title: "Booking confirmed",
        description: "Partial advance payment captured.",
        userId: users[1].id,
        leadId: lead.id,
      },
    ],
  });

  console.log("Seed completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
