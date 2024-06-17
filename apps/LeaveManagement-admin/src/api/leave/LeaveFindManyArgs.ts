import { LeaveWhereInput } from "./LeaveWhereInput";
import { LeaveOrderByInput } from "./LeaveOrderByInput";

export type LeaveFindManyArgs = {
  where?: LeaveWhereInput;
  orderBy?: Array<LeaveOrderByInput>;
  skip?: number;
  take?: number;
};
