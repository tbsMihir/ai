import { Module } from "@nestjs/common";
import { LeaveModuleBase } from "./base/leave.module.base";
import { LeaveService } from "./leave.service";
import { LeaveController } from "./leave.controller";
import { LeaveResolver } from "./leave.resolver";

@Module({
  imports: [LeaveModuleBase],
  controllers: [LeaveController],
  providers: [LeaveService, LeaveResolver],
  exports: [LeaveService],
})
export class LeaveModule {}
