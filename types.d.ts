type Requests = {
  id: string;
  requestedBy: string;
  type: string;
  startDate: string;
  endDate: string;
  days_taken: number;
  status: string;
  Note: string;
};

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