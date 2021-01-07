import {Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
  @Entity()
  export class Project extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    name!:string;

    @Field(() => [String])
    @Column("text",{nullable:true})
    image?: string[];


    @Field()
    @Column()
    description!:string;

    @Field()
    @Column()
    link!:string;


    @Field()
    @Column()
    githubLink!:string;


  }