import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";

@Entity()
@ObjectType()
export default class Region extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Country, (country) => country.region)
  country: Country[];
}

@InputType()
export class RegionInput {
  @Field()
  name: string;
}
