import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeavePolicyService } from "./leavePolicy.service";
import { LeavePolicyControllerBase } from "./base/leavePolicy.controller.base";

@swagger.ApiTags("leavePolicies")
@common.Controller("leavePolicies")
export class LeavePolicyController extends LeavePolicyControllerBase {
  constructor(protected readonly service: LeavePolicyService) {
    super(service);
  }
}
