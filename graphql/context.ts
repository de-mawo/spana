// graphql/context.ts
import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';


export async function createContext({ req, res }: { req: NextApiRequest, res: NextApiResponse }) {
  const session = await getServerSession(req, res, authOptions)
// console.log("Soshiona baba bang", session);

  // if the user is not logged in, return an empty object
  if (!session || typeof session === 'undefined') return {}

  const { user } = session

  return {
    user,
  }
}