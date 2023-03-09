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
  studyCredit?: Maybe<Scalars['Float']>;
  studyRemaining?: Maybe<Scalars['Float']>;
  studyUsed?: Maybe<Scalars['Float']>;
  unpaidUsed?: Maybe<Scalars['Float']>;
  userId: Scalars['String'];
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
  EditAddDays: AddDays;
  EditBalances: Balances;
  EditLeave: Leave;
  EditUser: User;
};


export type MutationAddBalancesArgs = {
  annualCredit?: InputMaybe<Scalars['Float']>;
  familyCredit?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  maternityCredit?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  paternityCredit?: InputMaybe<Scalars['Float']>;
  studyCredit?: InputMaybe<Scalars['Float']>;
  userId: Scalars['String'];
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


export type MutationEditUserArgs = {
  id: Scalars['String'];
  role: Role;
};

export type Query = {
  __typename?: 'Query';
  getAddDays: AddDays;
  getAllAddDays: Array<AddDays>;
  getAllBalances: Array<Balances>;
  getAllLeaves: Array<Leave>;
  getLeave: Leave;
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


export type QueryGetUserArgs = {
  email: Scalars['String'];
};


export type QueryGetUserBalancesArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserLeavesArgs = {
  email: Scalars['String'];
};

/** User Role */
export enum Role {
  Admin = 'ADMIN',
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
  name: Scalars['String'];
  userId: Scalars['String'];
  annualCredit?: InputMaybe<Scalars['Float']>;
  familyCredit?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  maternityCredit?: InputMaybe<Scalars['Float']>;
  studyCredit?: InputMaybe<Scalars['Float']>;
  paternityCredit?: InputMaybe<Scalars['Float']>;
}>;


export type AddBalancesMutation = { __typename?: 'Mutation', AddBalances: { __typename?: 'Balances', id: string } };

export type EditBalancesMutationVariables = Exact<{
  editBalancesId: Scalars['String'];
  annualCredit?: InputMaybe<Scalars['Float']>;
  annualRemaining?: InputMaybe<Scalars['Float']>;
  familyRemaining?: InputMaybe<Scalars['Float']>;
  familyCredit?: InputMaybe<Scalars['Float']>;
  annualUsed?: InputMaybe<Scalars['Float']>;
  familyUsed?: InputMaybe<Scalars['Float']>;
  healthCredit?: InputMaybe<Scalars['Float']>;
  healthRemaining?: InputMaybe<Scalars['Float']>;
  healthUsed?: InputMaybe<Scalars['Float']>;
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
}>;


export type EditBalancesMutation = { __typename?: 'Mutation', EditBalances: { __typename?: 'Balances', id: string } };

export type GetUserBalancesQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserBalancesQuery = { __typename?: 'Query', getUserBalances: { __typename?: 'Balances', annualCredit?: number | null, annualRemaining?: number | null, annualUsed?: number | null, familyCredit?: number | null, familyRemaining?: number | null, familyUsed?: number | null, healthCredit?: number | null, healthRemaining?: number | null, healthUsed?: number | null, id: string, name: string, maternityCredit?: number | null, maternityRemaining?: number | null, maternityUsed?: number | null, paternityCredit?: number | null, paternityRemaining?: number | null, paternityUsed?: number | null, studyCredit?: number | null, studyRemaining?: number | null, studyUsed?: number | null, unpaidUsed?: number | null, userId: string } };

export type GetAllBalancesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBalancesQuery = { __typename?: 'Query', getAllBalances: Array<{ __typename?: 'Balances', annualCredit?: number | null, annualUsed?: number | null, annualRemaining?: number | null, id: string, name: string, healthUsed?: number | null, healthRemaining?: number | null, healthCredit?: number | null, familyUsed?: number | null, familyRemaining?: number | null, familyCredit?: number | null, maternityCredit?: number | null, maternityRemaining?: number | null, maternityUsed?: number | null, paternityCredit?: number | null, paternityRemaining?: number | null, paternityUsed?: number | null, studyCredit?: number | null, studyRemaining?: number | null, studyUsed?: number | null, unpaidUsed?: number | null, userId: string }> };

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


export type GetUnModeratedLeavesQuery = { __typename?: 'Query', getUnModeratedLeaves: Array<{ __typename?: 'Leave', moderatedBy: string, daysRequested: number, endDate: any, id: string, link?: string | null, requestedAt: any, requestedBy: string, requesterNote?: string | null, startDate: any, type: LeaveType }> };

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

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', email?: string | null, id: string, image?: string | null, name?: string | null, role: Role }> };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', email?: string | null, id: string, image?: string | null, name?: string | null, role: Role } };

export type EditUserMutationVariables = Exact<{
  editUserId: Scalars['String'];
  role: Role;
}>;


export type EditUserMutation = { __typename?: 'Mutation', EditUser: { __typename?: 'User', id: string, role: Role, name?: string | null } };


export const AddBalancesDocument = gql`
    mutation AddBalances($name: String!, $userId: String!, $annualCredit: Float, $familyCredit: Float, $healthCredit: Float, $maternityCredit: Float, $studyCredit: Float, $paternityCredit: Float) {
  AddBalances(
    name: $name
    userId: $userId
    annualCredit: $annualCredit
    familyCredit: $familyCredit
    healthCredit: $healthCredit
    maternityCredit: $maternityCredit
    studyCredit: $studyCredit
    paternityCredit: $paternityCredit
  ) {
    id
  }
}
    `;

export function useAddBalancesMutation() {
  return Urql.useMutation<AddBalancesMutation, AddBalancesMutationVariables>(AddBalancesDocument);
};
export const EditBalancesDocument = gql`
    mutation EditBalances($editBalancesId: String!, $annualCredit: Float, $annualRemaining: Float, $familyRemaining: Float, $familyCredit: Float, $annualUsed: Float, $familyUsed: Float, $healthCredit: Float, $healthRemaining: Float, $healthUsed: Float, $maternityCredit: Float, $maternityRemaining: Float, $maternityUsed: Float, $paternityCredit: Float, $paternityRemaining: Float, $paternityUsed: Float, $studyCredit: Float, $studyRemaining: Float, $studyUsed: Float, $unpaidUsed: Float) {
  EditBalances(
    id: $editBalancesId
    annualCredit: $annualCredit
    annualRemaining: $annualRemaining
    familyRemaining: $familyRemaining
    familyCredit: $familyCredit
    annualUsed: $annualUsed
    familyUsed: $familyUsed
    healthCredit: $healthCredit
    healthRemaining: $healthRemaining
    healthUsed: $healthUsed
    maternityCredit: $maternityCredit
    maternityRemaining: $maternityRemaining
    maternityUsed: $maternityUsed
    paternityCredit: $paternityCredit
    paternityRemaining: $paternityRemaining
    paternityUsed: $paternityUsed
    studyCredit: $studyCredit
    studyRemaining: $studyRemaining
    studyUsed: $studyUsed
    unpaidUsed: $unpaidUsed
  ) {
    id
  }
}
    `;

export function useEditBalancesMutation() {
  return Urql.useMutation<EditBalancesMutation, EditBalancesMutationVariables>(EditBalancesDocument);
};
export const GetUserBalancesDocument = gql`
    query getUserBalances($userId: String!) {
  getUserBalances(userId: $userId) {
    annualCredit
    annualRemaining
    annualUsed
    familyCredit
    familyRemaining
    familyUsed
    healthCredit
    healthRemaining
    healthUsed
    id
    name
    maternityCredit
    maternityRemaining
    maternityUsed
    paternityCredit
    paternityRemaining
    paternityUsed
    studyCredit
    studyRemaining
    studyUsed
    unpaidUsed
    userId
  }
}
    `;

export function useGetUserBalancesQuery(options: Omit<Urql.UseQueryArgs<GetUserBalancesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserBalancesQuery, GetUserBalancesQueryVariables>({ query: GetUserBalancesDocument, ...options });
};
export const GetAllBalancesDocument = gql`
    query getAllBalances {
  getAllBalances {
    annualCredit
    annualUsed
    annualRemaining
    id
    name
    healthUsed
    healthRemaining
    healthCredit
    familyUsed
    familyRemaining
    familyCredit
    maternityCredit
    maternityRemaining
    maternityUsed
    paternityCredit
    paternityRemaining
    paternityUsed
    studyCredit
    studyRemaining
    studyUsed
    unpaidUsed
    userId
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
    query getUnModeratedLeaves {
  getUnModeratedLeaves {
    moderatedBy
    daysRequested
    endDate
    id
    link
    requestedAt
    requestedBy
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
    mutation EditUser($editUserId: String!, $role: Role!) {
  EditUser(id: $editUserId, role: $role) {
    id
    role
    name
  }
}
    `;

export function useEditUserMutation() {
  return Urql.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument);
};