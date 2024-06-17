import { Leave as TLeave } from "../api/leave/Leave";

export const LEAVE_TITLE_FIELD = "id";

export const LeaveTitle = (record: TLeave): string => {
  return record.id?.toString() || String(record.id);
};
