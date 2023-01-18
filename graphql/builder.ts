import SchemaBuilder from "@pothos/core";
import  PrismaPlugin  from "@pothos/plugin-prisma";
import { DateResolver } from 'graphql-scalars'
import type PrismaTypes from "@pothos/plugin-prisma/generated";


import prisma from "../lib/prismadb";


export const builder = new SchemaBuilder<{
    Scalars: {
      Date: { Input: Date; Output: Date };
    };
    PrismaTypes: PrismaTypes;
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
builder.addScalarType('Date', DateResolver, {})