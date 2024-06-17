import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaveServiceBase } from "./base/leave.service.base";

@Injectable()
export class LeaveService extends LeaveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
