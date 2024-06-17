import * as graphql from "@nestjs/graphql";
import { LeavePolicyResolverBase } from "./base/leavePolicy.resolver.base";
import { LeavePolicy } from "./base/LeavePolicy";
import { LeavePolicyService } from "./leavePolicy.service";

@graphql.Resolver(() => LeavePolicy)
export class LeavePolicyResolver extends LeavePolicyResolverBase {
  constructor(protected readonly service: LeavePolicyService) {
    super(service);
  }
}
