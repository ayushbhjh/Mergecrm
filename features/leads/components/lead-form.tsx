"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { toast } from "sonner";
import { leadSchema } from "@/lib/validators";
import { leadSources, leadStatuses, organizationTypes, priorities } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type LeadValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [isPending, setIsPending] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      leadId: "MCT-000002",
      schoolName: "",
      organizationType: "School",
      contactPerson: "",
      designation: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      website: "",
      studentStrength: 0,
      leadSource: "Referral",
      assignedToId: "",
      status: "New",
      priority: "Medium",
      estimatedDealValue: 0,
      expectedCloseDate: new Date().toISOString().slice(0, 10) as any,
      lastContactDate: "" as any,
      nextFollowUpDate: "" as any,
      notes: "",
    },
  });

  async function onSubmit(values: LeadValues) {
    setIsPending(true);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setIsPending(false);
    if (!response.ok) {
      toast.error("Unable to create lead");
      return;
    }
    toast.success("Lead created");
    reset();
  }

  return (
    <form className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" onSubmit={handleSubmit(onSubmit)}>
      <Field label="Lead ID" error={errors.leadId?.message}><Input {...register("leadId")} /></Field>
      <Field label="School Name" error={errors.schoolName?.message}><Input {...register("schoolName")} /></Field>
      <Field label="Organization Type" error={errors.organizationType?.message}>
        <Select {...register("organizationType")}>{organizationTypes.map((item) => <option key={item} value={item}>{item.replace(/_/g, " ")}</option>)}</Select>
      </Field>
      <Field label="Contact Person" error={errors.contactPerson?.message}><Input {...register("contactPerson")} /></Field>
      <Field label="Designation" error={errors.designation?.message}><Input {...register("designation")} /></Field>
      <Field label="Email" error={errors.email?.message}><Input type="email" {...register("email")} /></Field>
      <Field label="Phone" error={errors.phone?.message}><Input {...register("phone")} /></Field>
      <Field label="State" error={errors.state?.message}><Input {...register("state")} /></Field>
      <Field label="City" error={errors.city?.message}><Input {...register("city")} /></Field>
      <Field label="Website" error={errors.website?.message}><Input {...register("website")} /></Field>
      <Field label="Student Strength" error={errors.studentStrength?.message}><Input type="number" {...register("studentStrength")} /></Field>
      <Field label="Lead Source" error={errors.leadSource?.message}>
        <Select {...register("leadSource")}>{leadSources.map((item) => <option key={item} value={item}>{item.replace(/_/g, " ")}</option>)}</Select>
      </Field>
      <Field label="Assigned To" error={errors.assignedToId?.message}>
        <Select {...register("assignedToId")}>
          <option value="">Unassigned</option>
        </Select>
      </Field>
      <Field label="Status" error={errors.status?.message}>
        <Select {...register("status")}>{leadStatuses.map((item) => <option key={item} value={item}>{item.replace(/_/g, " ")}</option>)}</Select>
      </Field>
      <Field label="Priority" error={errors.priority?.message}>
        <Select {...register("priority")}>{priorities.map((item) => <option key={item} value={item}>{item}</option>)}</Select>
      </Field>
      <Field label="Estimated Deal Value" error={errors.estimatedDealValue?.message}><Input type="number" {...register("estimatedDealValue")} /></Field>
      <Field label="Expected Close Date" error={errors.expectedCloseDate?.message}><Input type="date" {...register("expectedCloseDate")} /></Field>
      <Field label="Last Contact Date" error={errors.lastContactDate?.message}><Input type="date" {...register("lastContactDate")} /></Field>
      <Field label="Next Follow-Up Date" error={errors.nextFollowUpDate?.message}><Input type="date" {...register("nextFollowUpDate")} /></Field>
      <div className="md:col-span-2 xl:col-span-3">
        <Field label="Notes" error={errors.notes?.message}><Textarea rows={4} {...register("notes")} /></Field>
      </div>
      <div className="md:col-span-2 xl:col-span-3">
        <Button type="submit" disabled={isPending}>{isPending ? "Saving..." : "Create Lead"}</Button>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
