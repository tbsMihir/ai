import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeavePolicyServiceBase } from "./base/leavePolicy.service.base";

@Injectable()
export class LeavePolicyService extends LeavePolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
