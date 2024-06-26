/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LeaveService } from "../leave.service";
import { LeaveCreateInput } from "./LeaveCreateInput";
import { Leave } from "./Leave";
import { LeaveFindManyArgs } from "./LeaveFindManyArgs";
import { LeaveWhereUniqueInput } from "./LeaveWhereUniqueInput";
import { LeaveUpdateInput } from "./LeaveUpdateInput";

export class LeaveControllerBase {
  constructor(protected readonly service: LeaveService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Leave })
  async createLeave(@common.Body() data: LeaveCreateInput): Promise<Leave> {
    return await this.service.createLeave({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Leave] })
  @ApiNestedQuery(LeaveFindManyArgs)
  async leaves(@common.Req() request: Request): Promise<Leave[]> {
    const args = plainToClass(LeaveFindManyArgs, request.query);
    return this.service.leaves({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Leave })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async leave(
    @common.Param() params: LeaveWhereUniqueInput
  ): Promise<Leave | null> {
    const result = await this.service.leave({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Leave })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLeave(
    @common.Param() params: LeaveWhereUniqueInput,
    @common.Body() data: LeaveUpdateInput
  ): Promise<Leave | null> {
    try {
      return await this.service.updateLeave({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Leave })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLeave(
    @common.Param() params: LeaveWhereUniqueInput
  ): Promise<Leave | null> {
    try {
      return await this.service.deleteLeave({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
