import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Region, { RegionInput } from "../entities/Region";

@Resolver()
export default class RegionResolver {
  @Query(() => [Region])
  async getRegions() {
    const regions = await Region.find();

    return regions;
  }

  @Mutation(() => Region)
  async createRegion(@Arg("data") data: RegionInput) {
    const newRegion = new Region();

    Object.assign(newRegion, data);

    return await newRegion.save();
  }
}
