import { LeavePolicy as TLeavePolicy } from "../api/leavePolicy/LeavePolicy";

export const LEAVEPOLICY_TITLE_FIELD = "id";

export const LeavePolicyTitle = (record: TLeavePolicy): string => {
  return record.id?.toString() || String(record.id);
};
