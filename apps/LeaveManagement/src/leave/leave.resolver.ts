import * as graphql from "@nestjs/graphql";
import { LeaveResolverBase } from "./base/leave.resolver.base";
import { Leave } from "./base/Leave";
import { LeaveService } from "./leave.service";

@graphql.Resolver(() => Leave)
export class LeaveResolver extends LeaveResolverBase {
  constructor(protected readonly service: LeaveService) {
    super(service);
  }
}
