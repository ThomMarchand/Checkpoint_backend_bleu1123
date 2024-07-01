import { Resolver, Query, Arg, Mutation } from "type-graphql";

import { Country, CountryInput } from "../entities/Country";

@Resolver()
export default class CountryResolver {
  @Query(() => [Country])
  async getCountries() {
    const countries = await Country.find();

    return countries;
  }

  @Query(() => [Country])
  async findCountryByRegion(@Arg("regionId") regionId: number) {
    const countries = await Country.find({
      relations: { region: true },
      where: {
        region: {
          id: regionId,
        },
      },
    });

    return countries;
  }

  @Mutation(() => Country)
  async createCounty(@Arg("data") data: CountryInput) {
    const newCountry = new Country();

    Object.assign(newCountry, data);

    return await newCountry.save();
  }
}
