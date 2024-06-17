import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeaveService } from "./leave.service";
import { LeaveControllerBase } from "./base/leave.controller.base";

@swagger.ApiTags("leaves")
@common.Controller("leaves")
export class LeaveController extends LeaveControllerBase {
  constructor(protected readonly service: LeaveService) {
    super(service);
  }
}
