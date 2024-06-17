import { Module } from "@nestjs/common";
import { LeavePolicyModuleBase } from "./base/leavePolicy.module.base";
import { LeavePolicyService } from "./leavePolicy.service";
import { LeavePolicyController } from "./leavePolicy.controller";
import { LeavePolicyResolver } from "./leavePolicy.resolver";

@Module({
  imports: [LeavePolicyModuleBase],
  controllers: [LeavePolicyController],
  providers: [LeavePolicyService, LeavePolicyResolver],
  exports: [LeavePolicyService],
})
export class LeavePolicyModule {}
