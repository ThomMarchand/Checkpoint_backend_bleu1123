import { buildSchemaSync } from "type-graphql";
import { Country } from "./entities/Country";
import Region from "./entities/Region";

export default buildSchemaSync({
  resolvers: [Country, Region],
});
