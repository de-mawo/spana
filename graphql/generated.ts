import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddDays = {
  __typename?: 'AddDays';
  approved?: Maybe<Scalars['Boolean']>;
  daysRequested: Scalars['Float'];
  id: Scalars['ID'];
  moderatedBy: Scalars['String'];
  moderatorNote?: Maybe<Scalars['String']>;
  rejected?: Maybe<Scalars['Boolean']>;
  requestedAt: Scalars['DateTime'];
  requestedBy: Scalars['String'];
  requesterEmail: Scalars['String'];
  requesterNote?: Maybe<Scalars['String']>;
  type: LeaveType;
};

export type Balances = {
  __typename?: 'Balances';
  annualCredit?: Maybe<Scalars['Float']>;
  annualRemaining?: Maybe<Scalars['Float']>;
  annualUsed?: Maybe<Scalars['Float']>;
  email: Scalars['String'];
  familyCredit?: Maybe<Scalars['Float']>;
  familyRemaining?: Maybe<Scalars['Float']>;
  familyUsed?: Maybe<Scalars['Float']>;
  healthCredit?: Maybe<Scalars['Float']>;
  healthRemaining?: Maybe<Scalars['Float']>;
  healthUsed?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  maternityCredit?: Maybe<Scalars['Float']>;
  maternityRemaining?: Maybe<Scalars['Float']>;
  maternityUsed?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  paternityCredit?: Maybe<Scalars['Float']>;
  paternityRemaining?: Maybe<Scalars['Float']>;
  paternityUsed?: Maybe<Scalars['Float']>;
  period: Scalars['String'];
  studyCredit?: Maybe<Scalars['Float']>;
  studyRemaining?: Maybe<Scalars['Float']>;
  studyUsed?: Maybe<Scalars['Float']>;
  unpaidUsed?: Maybe<Scalars['Float']>;
};

export type Leave = {
  __typename?: 'Leave';
  approved?: Maybe<Scalars['Boolean']>;
  daysRequested: Scalars['Float'];
  endDate: Scalars['DateTime'];
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  moderatedBy: Scalars['String'];
  moderatorNote?: Maybe<Scalars['String']>;
  rejected?: Maybe<Scalars['Boolean']>;
  requestedAt: Scalars['DateTime'];
  requestedBy: Scalars['String'];
  requesterEmail: Scalars['String'];
  requesterNote?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  type: LeaveType;
};

/** Leave Types */
export enum LeaveType {
  Annual = 'ANNUAL',
  Family = 'FAMILY',
  Health = 'HEALTH',
  Maternity = 'MATERNITY',
  Paternity = 'PATERNITY',
  Study = 'STUDY',
  Unpaid = 'UNPAID'
}

export type Mutation = {
  __typename?: 'Mutation';
  AddBalances: Balances;
  AddDays: AddDays;
  AddLeave: Leave;
  AddProfile: Profile;
  EditAddDays: AddDays;
  EditBalances: Balances;
  EditLeave: Leave;
  EditProfile: Profile;
  EditUser: User;
};


export type MutationAddBalancesArgs = {
  annualCredit?: InputMaybe<Scalars['Float']>;
  email: Scalars['String'];
  familyCredit?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  maternityCredit?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  paternityCredit?: InputMaybe<Scalars['Float']>;
  period: Scalars['String'];
  studyCredit?: InputMaybe<Scalars['Float']>;
};


export type MutationAddDaysArgs = {
  daysRequested: Scalars['Float'];
  requestedBy: Scalars['String'];
  requesterEmail: Scalars['String'];
  requesterNote?: InputMaybe<Scalars['String']>;
  type: LeaveType;
};


export type MutationAddLeaveArgs = {
  daysRequested: Scalars['Float'];
  endDate: Scalars['String'];
  link?: InputMaybe<Scalars['String']>;
  requestedBy: Scalars['String'];
  requesterEmail: Scalars['String'];
  requesterNote?: InputMaybe<Scalars['String']>;
  startDate: Scalars['String'];
  type: LeaveType;
};


export type MutationAddProfileArgs = {
  email: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationEditAddDaysArgs = {
  approved?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  moderatedBy: Scalars['String'];
  moderatorNote?: InputMaybe<Scalars['String']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEditBalancesArgs = {
  annualCredit?: InputMaybe<Scalars['Float']>;
  annualRemaining?: InputMaybe<Scalars['Float']>;
  annualUsed?: InputMaybe<Scalars['Float']>;
  familyCredit?: InputMaybe<Scalars['Float']>;
  familyRemaining?: InputMaybe<Scalars['Float']>;
  familyUsed?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  healthRemaining?: InputMaybe<Scalars['Float']>;
  healthUsed?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  maternityCredit?: InputMaybe<Scalars['Float']>;
  maternityRemaining?: InputMaybe<Scalars['Float']>;
  maternityUsed?: InputMaybe<Scalars['Float']>;
  paternityCredit?: InputMaybe<Scalars['Float']>;
  paternityRemaining?: InputMaybe<Scalars['Float']>;
  paternityUsed?: InputMaybe<Scalars['Float']>;
  studyCredit?: InputMaybe<Scalars['Float']>;
  studyRemaining?: InputMaybe<Scalars['Float']>;
  studyUsed?: InputMaybe<Scalars['Float']>;
  unpaidUsed?: InputMaybe<Scalars['Float']>;
};


export type MutationEditLeaveArgs = {
  approved?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  moderatedBy: Scalars['String'];
  moderatorNote?: InputMaybe<Scalars['String']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEditProfileArgs = {
  email: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationEditUserArgs = {
  email: Scalars['String'];
  role: Role;
};

export type Profile = {
  __typename?: 'Profile';
  email: Scalars['String'];
  id: Scalars['ID'];
  jobTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAddDays: AddDays;
  getAllAddDays: Array<AddDays>;
  getAllBalances: Array<Balances>;
  getAllLeaves: Array<Leave>;
  getLeave: Leave;
  getProfile: Profile;
  getProfiles: Array<Profile>;
  getUnModeratedLeaves: Array<Leave>;
  getUser: User;
  getUserBalances: Balances;
  getUserLeaves: Array<Leave>;
  getUsers: Array<User>;
};


export type QueryGetAddDaysArgs = {
  id: Scalars['String'];
};


export type QueryGetLeaveArgs = {
  id: Scalars['String'];
};


export type QueryGetProfileArgs = {
  email: Scalars['String'];
};


export type QueryGetUserArgs = {
  email: Scalars['String'];
};


export type QueryGetUserBalancesArgs = {
  email: Scalars['String'];
};


export type QueryGetUserLeavesArgs = {
  email: Scalars['String'];
};

/** User Role */
export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role: Role;
};

export type AddBalancesMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  period: Scalars['String'];
  paternityCredit?: InputMaybe<Scalars['Float']>;
  maternityCredit?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  familyCredit?: InputMaybe<Scalars['Float']>;
  annualCredit?: InputMaybe<Scalars['Float']>;
  studyCredit?: InputMaybe<Scalars['Float']>;
}>;


export type AddBalancesMutation = { __typename?: 'Mutation', AddBalances: { __typename?: 'Balances', annualRemaining?: number | null, familyRemaining?: number | null, healthRemaining?: number | null, maternityRemaining?: number | null, paternityRemaining?: number | null, id: string, studyRemaining?: number | null, unpaidUsed?: number | null } };

export type EditBalancesMutationVariables = Exact<{
  editBalancesId: Scalars['String'];
  annualCredit?: InputMaybe<Scalars['Float']>;
  annualRemaining?: InputMaybe<Scalars['Float']>;
  annualUsed?: InputMaybe<Scalars['Float']>;
  familyCredit?: InputMaybe<Scalars['Float']>;
  familyRemaining?: InputMaybe<Scalars['Float']>;
  familyUsed?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  healthRemaining?: InputMaybe<Scalars['Float']>;
  healthUsed?: InputMaybe<Scalars['Float']>;
  unpaidUsed?: InputMaybe<Scalars['Float']>;
  studyUsed?: InputMaybe<Scalars['Float']>;
  studyRemaining?: InputMaybe<Scalars['Float']>;
  studyCredit?: InputMaybe<Scalars['Float']>;
  paternityUsed?: InputMaybe<Scalars['Float']>;
  paternityRemaining?: InputMaybe<Scalars['Float']>;
  paternityCredit?: InputMaybe<Scalars['Float']>;
  maternityUsed?: InputMaybe<Scalars['Float']>;
  maternityRemaining?: InputMaybe<Scalars['Float']>;
  maternityCredit?: InputMaybe<Scalars['Float']>;
}>;


export type EditBalancesMutation = { __typename?: 'Mutation', EditBalances: { __typename?: 'Balances', id: string, annualRemaining?: number | null, familyRemaining?: number | null, healthRemaining?: number | null, maternityRemaining?: number | null, paternityRemaining?: number | null, period: string, studyRemaining?: number | null, unpaidUsed?: number | null } };

export type GetUserBalancesQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserBalancesQuery = { __typename?: 'Query', getUserBalances: { __typename?: 'Balances', annualCredit?: number | null, annualRemaining?: number | null, annualUsed?: number | null, email: string, familyCredit?: number | null, familyRemaining?: number | null, familyUsed?: number | null, healthCredit?: number | null, healthRemaining?: number | null, healthUsed?: number | null, id: string, maternityCredit?: number | null, maternityRemaining?: number | null, maternityUsed?: number | null, name: string, paternityCredit?: number | null, paternityRemaining?: number | null, paternityUsed?: number | null, period: string, studyCredit?: number | null, studyRemaining?: number | null, studyUsed?: number | null, unpaidUsed?: number | null } };

export type GetAllBalancesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBalancesQuery = { __typename?: 'Query', getAllBalances: Array<{ __typename?: 'Balances', annualCredit?: number | null, annualRemaining?: number | null, annualUsed?: number | null, email: string, familyCredit?: number | null, familyRemaining?: number | null, familyUsed?: number | null, healthCredit?: number | null, healthRemaining?: number | null, healthUsed?: number | null, id: string, maternityCredit?: number | null, maternityRemaining?: number | null, maternityUsed?: number | null, name: string, paternityCredit?: number | null, paternityRemaining?: number | null, paternityUsed?: number | null, period: string, studyCredit?: number | null, studyRemaining?: number | null, studyUsed?: number | null, unpaidUsed?: number | null }> };

export type GetLeaveQueryVariables = Exact<{
  getLeaveId: Scalars['String'];
}>;


export type GetLeaveQuery = { __typename?: 'Query', getLeave: { __typename?: 'Leave', approved?: boolean | null, daysRequested: number, endDate: any, id: string, link?: string | null, moderatedBy: string, moderatorNote?: string | null, rejected?: boolean | null, requestedAt: any, requestedBy: string, requesterEmail: string, requesterNote?: string | null, startDate: any, type: LeaveType } };

export type GetUserLeavesQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserLeavesQuery = { __typename?: 'Query', getUserLeaves: Array<{ __typename?: 'Leave', id: string, link?: string | null, endDate: any, daysRequested: number, approved?: boolean | null, startDate: any, type: LeaveType, rejected?: boolean | null, moderatorNote?: string | null, moderatedBy: string, requestedAt: any }> };

export type GetAllLeavesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLeavesQuery = { __typename?: 'Query', getAllLeaves: Array<{ __typename?: 'Leave', approved?: boolean | null, daysRequested: number, endDate: any, id: string, link?: string | null, moderatedBy: string, moderatorNote?: string | null, rejected?: boolean | null, requestedAt: any, requestedBy: string, requesterEmail: string, requesterNote?: string | null, startDate: any, type: LeaveType }> };

export type GetUnModeratedLeavesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnModeratedLeavesQuery = { __typename?: 'Query', getUnModeratedLeaves: Array<{ __typename?: 'Leave', approved?: boolean | null, daysRequested: number, endDate: any, id: string, link?: string | null, moderatedBy: string, moderatorNote?: string | null, rejected?: boolean | null, requestedAt: any, requestedBy: string, requesterEmail: string, requesterNote?: string | null, startDate: any, type: LeaveType }> };

export type AddLeaveMutationVariables = Exact<{
  daysRequested: Scalars['Float'];
  endDate: Scalars['String'];
  requestedBy: Scalars['String'];
  requesterEmail: Scalars['String'];
  startDate: Scalars['String'];
  type: LeaveType;
  link?: InputMaybe<Scalars['String']>;
  requesterNote?: InputMaybe<Scalars['String']>;
}>;


export type AddLeaveMutation = { __typename?: 'Mutation', AddLeave: { __typename?: 'Leave', id: string } };

export type EditLeaveMutationVariables = Exact<{
  editLeaveId: Scalars['String'];
  moderatedBy: Scalars['String'];
  approved?: InputMaybe<Scalars['Boolean']>;
  moderatorNote?: InputMaybe<Scalars['String']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
}>;


export type EditLeaveMutation = { __typename?: 'Mutation', EditLeave: { __typename?: 'Leave', approved?: boolean | null, moderatedBy: string, moderatorNote?: string | null, rejected?: boolean | null } };

export type GetProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesQuery = { __typename?: 'Query', getProfiles: Array<{ __typename?: 'Profile', email: string, id: string, jobTitle?: string | null, phone?: string | null }> };

export type GetProfileQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'Profile', email: string, id: string, jobTitle?: string | null, phone?: string | null } };

export type AddProfileMutationVariables = Exact<{
  email: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
}>;


export type AddProfileMutation = { __typename?: 'Mutation', AddProfile: { __typename?: 'Profile', jobTitle?: string | null, phone?: string | null } };

export type EditProfileMutationVariables = Exact<{
  email: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', EditProfile: { __typename?: 'Profile', jobTitle?: string | null, phone?: string | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', email?: string | null, id: string, image?: string | null, name?: string | null, role: Role }> };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', email?: string | null, id: string, image?: string | null, name?: string | null, role: Role } };

export type EditUserMutationVariables = Exact<{
  email: Scalars['String'];
  role: Role;
}>;


export type EditUserMutation = { __typename?: 'Mutation', EditUser: { __typename?: 'User', role: Role, email?: string | null } };


export const AddBalancesDocument = gql`
    mutation AddBalances($email: String!, $name: String!, $period: String!, $paternityCredit: Float, $maternityCredit: Float, $healthCredit: Float, $familyCredit: Float, $annualCredit: Float, $studyCredit: Float) {
  AddBalances(
    email: $email
    name: $name
    period: $period
    paternityCredit: $paternityCredit
    maternityCredit: $maternityCredit
    healthCredit: $healthCredit
    familyCredit: $familyCredit
    annualCredit: $annualCredit
    studyCredit: $studyCredit
  ) {
    annualRemaining
    familyRemaining
    healthRemaining
    maternityRemaining
    paternityRemaining
    id
    studyRemaining
    unpaidUsed
  }
}
    `;

export function useAddBalancesMutation() {
  return Urql.useMutation<AddBalancesMutation, AddBalancesMutationVariables>(AddBalancesDocument);
};
export const EditBalancesDocument = gql`
    mutation EditBalances($editBalancesId: String!, $annualCredit: Float, $annualRemaining: Float, $annualUsed: Float, $familyCredit: Float, $familyRemaining: Float, $familyUsed: Float, $healthCredit: Float, $healthRemaining: Float, $healthUsed: Float, $unpaidUsed: Float, $studyUsed: Float, $studyRemaining: Float, $studyCredit: Float, $paternityUsed: Float, $paternityRemaining: Float, $paternityCredit: Float, $maternityUsed: Float, $maternityRemaining: Float, $maternityCredit: Float) {
  EditBalances(
    id: $editBalancesId
    annualCredit: $annualCredit
    annualRemaining: $annualRemaining
    annualUsed: $annualUsed
    familyCredit: $familyCredit
    familyRemaining: $familyRemaining
    familyUsed: $familyUsed
    healthCredit: $healthCredit
    healthRemaining: $healthRemaining
    healthUsed: $healthUsed
    unpaidUsed: $unpaidUsed
    studyUsed: $studyUsed
    studyRemaining: $studyRemaining
    studyCredit: $studyCredit
    paternityUsed: $paternityUsed
    paternityRemaining: $paternityRemaining
    paternityCredit: $paternityCredit
    maternityUsed: $maternityUsed
    maternityRemaining: $maternityRemaining
    maternityCredit: $maternityCredit
  ) {
    id
    annualRemaining
    familyRemaining
    healthRemaining
    maternityRemaining
    paternityRemaining
    period
    studyRemaining
    unpaidUsed
  }
}
    `;

export function useEditBalancesMutation() {
  return Urql.useMutation<EditBalancesMutation, EditBalancesMutationVariables>(EditBalancesDocument);
};
export const GetUserBalancesDocument = gql`
    query GetUserBalances($email: String!) {
  getUserBalances(email: $email) {
    annualCredit
    annualRemaining
    annualUsed
    email
    familyCredit
    familyRemaining
    familyUsed
    healthCredit
    healthRemaining
    healthUsed
    id
    maternityCredit
    maternityRemaining
    maternityUsed
    name
    paternityCredit
    paternityRemaining
    paternityUsed
    period
    studyCredit
    studyRemaining
    studyUsed
    unpaidUsed
  }
}
    `;

export function useGetUserBalancesQuery(options: Omit<Urql.UseQueryArgs<GetUserBalancesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserBalancesQuery, GetUserBalancesQueryVariables>({ query: GetUserBalancesDocument, ...options });
};
export const GetAllBalancesDocument = gql`
    query GetAllBalances {
  getAllBalances {
    annualCredit
    annualRemaining
    annualUsed
    email
    familyCredit
    familyRemaining
    familyUsed
    healthCredit
    healthRemaining
    healthUsed
    id
    maternityCredit
    maternityRemaining
    maternityUsed
    name
    paternityCredit
    paternityRemaining
    paternityUsed
    period
    studyCredit
    studyRemaining
    studyUsed
    unpaidUsed
  }
}
    `;

export function useGetAllBalancesQuery(options?: Omit<Urql.UseQueryArgs<GetAllBalancesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllBalancesQuery, GetAllBalancesQueryVariables>({ query: GetAllBalancesDocument, ...options });
};
export const GetLeaveDocument = gql`
    query getLeave($getLeaveId: String!) {
  getLeave(id: $getLeaveId) {
    approved
    daysRequested
    endDate
    id
    link
    moderatedBy
    moderatorNote
    rejected
    requestedAt
    requestedBy
    requesterEmail
    requesterNote
    startDate
    type
  }
}
    `;

export function useGetLeaveQuery(options: Omit<Urql.UseQueryArgs<GetLeaveQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLeaveQuery, GetLeaveQueryVariables>({ query: GetLeaveDocument, ...options });
};
export const GetUserLeavesDocument = gql`
    query GetUserLeaves($email: String!) {
  getUserLeaves(email: $email) {
    id
    link
    endDate
    daysRequested
    approved
    startDate
    type
    rejected
    moderatorNote
    moderatedBy
    requestedAt
  }
}
    `;

export function useGetUserLeavesQuery(options: Omit<Urql.UseQueryArgs<GetUserLeavesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserLeavesQuery, GetUserLeavesQueryVariables>({ query: GetUserLeavesDocument, ...options });
};
export const GetAllLeavesDocument = gql`
    query getAllLeaves {
  getAllLeaves {
    approved
    daysRequested
    endDate
    id
    link
    moderatedBy
    moderatorNote
    rejected
    requestedAt
    requestedBy
    requesterEmail
    requesterNote
    startDate
    type
  }
}
    `;

export function useGetAllLeavesQuery(options?: Omit<Urql.UseQueryArgs<GetAllLeavesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllLeavesQuery, GetAllLeavesQueryVariables>({ query: GetAllLeavesDocument, ...options });
};
export const GetUnModeratedLeavesDocument = gql`
    query GetUnModeratedLeaves {
  getUnModeratedLeaves {
    approved
    daysRequested
    endDate
    id
    link
    moderatedBy
    moderatorNote
    rejected
    requestedAt
    requestedBy
    requesterEmail
    requesterNote
    startDate
    type
  }
}
    `;

export function useGetUnModeratedLeavesQuery(options?: Omit<Urql.UseQueryArgs<GetUnModeratedLeavesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUnModeratedLeavesQuery, GetUnModeratedLeavesQueryVariables>({ query: GetUnModeratedLeavesDocument, ...options });
};
export const AddLeaveDocument = gql`
    mutation AddLeave($daysRequested: Float!, $endDate: String!, $requestedBy: String!, $requesterEmail: String!, $startDate: String!, $type: LeaveType!, $link: String, $requesterNote: String) {
  AddLeave(
    daysRequested: $daysRequested
    endDate: $endDate
    requestedBy: $requestedBy
    requesterEmail: $requesterEmail
    startDate: $startDate
    type: $type
    link: $link
    requesterNote: $requesterNote
  ) {
    id
  }
}
    `;

export function useAddLeaveMutation() {
  return Urql.useMutation<AddLeaveMutation, AddLeaveMutationVariables>(AddLeaveDocument);
};
export const EditLeaveDocument = gql`
    mutation EditLeave($editLeaveId: String!, $moderatedBy: String!, $approved: Boolean, $moderatorNote: String, $rejected: Boolean) {
  EditLeave(
    id: $editLeaveId
    moderatedBy: $moderatedBy
    approved: $approved
    moderatorNote: $moderatorNote
    rejected: $rejected
  ) {
    approved
    moderatedBy
    moderatorNote
    rejected
  }
}
    `;

export function useEditLeaveMutation() {
  return Urql.useMutation<EditLeaveMutation, EditLeaveMutationVariables>(EditLeaveDocument);
};
export const GetProfilesDocument = gql`
    query GetProfiles {
  getProfiles {
    email
    id
    jobTitle
    phone
  }
}
    `;

export function useGetProfilesQuery(options?: Omit<Urql.UseQueryArgs<GetProfilesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProfilesQuery, GetProfilesQueryVariables>({ query: GetProfilesDocument, ...options });
};
export const GetProfileDocument = gql`
    query GetProfile($email: String!) {
  getProfile(email: $email) {
    email
    id
    jobTitle
    phone
  }
}
    `;

export function useGetProfileQuery(options: Omit<Urql.UseQueryArgs<GetProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProfileQuery, GetProfileQueryVariables>({ query: GetProfileDocument, ...options });
};
export const AddProfileDocument = gql`
    mutation AddProfile($email: String!, $jobTitle: String, $phone: String) {
  AddProfile(email: $email, jobTitle: $jobTitle, phone: $phone) {
    jobTitle
    phone
  }
}
    `;

export function useAddProfileMutation() {
  return Urql.useMutation<AddProfileMutation, AddProfileMutationVariables>(AddProfileDocument);
};
export const EditProfileDocument = gql`
    mutation EditProfile($email: String!, $jobTitle: String, $phone: String) {
  EditProfile(email: $email, jobTitle: $jobTitle, phone: $phone) {
    jobTitle
    phone
  }
}
    `;

export function useEditProfileMutation() {
  return Urql.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument);
};
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    email
    id
    image
    name
    role
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({ query: GetUsersDocument, ...options });
};
export const GetUserDocument = gql`
    query getUser($email: String!) {
  getUser(email: $email) {
    email
    id
    image
    name
    role
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const EditUserDocument = gql`
    mutation EditUser($email: String!, $role: Role!) {
  EditUser(email: $email, role: $role) {
    role
    email
  }
}
    `;

export function useEditUserMutation() {
  return Urql.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument);
};