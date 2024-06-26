/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeaveWhereInput } from "./LeaveWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LeaveListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LeaveWhereInput,
  })
  @ValidateNested()
  @Type(() => LeaveWhereInput)
  @IsOptional()
  @Field(() => LeaveWhereInput, {
    nullable: true,
  })
  every?: LeaveWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeaveWhereInput,
  })
  @ValidateNested()
  @Type(() => LeaveWhereInput)
  @IsOptional()
  @Field(() => LeaveWhereInput, {
    nullable: true,
  })
  some?: LeaveWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeaveWhereInput,
  })
  @ValidateNested()
  @Type(() => LeaveWhereInput)
  @IsOptional()
  @Field(() => LeaveWhereInput, {
    nullable: true,
  })
  none?: LeaveWhereInput;
}
export { LeaveListRelationFilter as LeaveListRelationFilter };
