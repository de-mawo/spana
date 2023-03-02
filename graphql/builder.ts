import SchemaBuilder from "@pothos/core";
import  PrismaPlugin  from "@pothos/plugin-prisma";
import { DateTimeResolver } from 'graphql-scalars'
import type PrismaTypes from '@pothos/plugin-prisma/generated'


import prisma from "../lib/prismadb";
import { createContext } from "./context";


export const builder = new SchemaBuilder<{   
    PrismaTypes: PrismaTypes;
    Context: ReturnType<typeof createContext>;
    Scalars: {
      DateTime: { Input: Date; Output: Date };
    };
  }>({
    plugins: [PrismaPlugin],
    prisma: {
      client: prisma,
    },
  });

  // in GraphQL the Query type and Mutation type can each only be called once. So we call it here and will add fields to them on the go 
builder.queryType();
builder.mutationType();

// This is where we've created the new date scalar
builder.addScalarType('DateTime', DateTimeResolver, {})