import { GetUnModeratedLeavesQuery } from "./graphql/generated";

export type Requests = GetUnModeratedLeavesQuery["getUnModeratedLeaves"][0]

type Events = {
  name: string;
  date: string;
  employee: string;
}

type User = {
  id: string;
  name: string;
  surname: string;
  role: string;
  job_title: string;
  email: string;
  avatar: string;
};

type AllLeaveBalances = {
  name: string;
  annual_credit: number | null;
  annual_taken: number | null;
  annual_remaining: number | null;
  health_credit: number | null;
  health_taken: number | null;
  health_remaining: number | null;
  study_credit: number | null;
  study_taken: number | null;
  study_remaining: number | null;
  maternity_credit: number | null;
  maternity_taken: number | null;
  maternity_remaining: number | null;
  family_credit: number | null;
  family_taken: number | null;
  family_remaining: number | null;
  paternity_credit: number | null;
  paternity_taken: number | null;
  paternity_remaining: number | null;
  unpaid_taken: number | null;
};

