import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import db from "./db";
import CountryResolver from "./resolvers/country.resolver";
import RegionResolver from "./resolvers/region.resolver";

const port = 4000;

buildSchema({
  resolvers: [CountryResolver, RegionResolver],
}).then(async (schema) => {
  await db.initialize();

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, { listen: { port } });

  console.log(`graphql server listening on ${url}`);
});
