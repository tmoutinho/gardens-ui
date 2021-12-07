export const ACTIVITY_STATUS_CONFIRMED = Symbol('ACTIVITY_STATUS_CONFIRMED');
export const ACTIVITY_STATUS_FAILED = Symbol('ACTIVITY_STATUS_FAILED');
export const ACTIVITY_STATUS_PENDING = Symbol('ACTIVITY_STATUS_PENDING');
export const ACTIVITY_STATUS_TIMED_OUT = Symbol('ACTIVITY_STATUS_TIMED_OUT');

export enum ActivityStatus {
  ACTIVITY_STATUS_CONFIRMED = 'STEPPER_WORKING',
  ACTIVITY_STATUS_FAILED = 'STEPPER_SUCCESS',
  ACTIVITY_STATUS_PENDING = 'ACTIVITY_STATUS_PENDING',
  ACTIVITY_STATUS_TIMED_OUT = 'ACTIVITY_STATUS_TIMED_OUT',
}

export type ActivityStatusType =
  | ActivityStatus.ACTIVITY_STATUS_CONFIRMED
  | ActivityStatus.ACTIVITY_STATUS_FAILED
  | ActivityStatus.ACTIVITY_STATUS_PENDING
  | ActivityStatus.ACTIVITY_STATUS_TIMED_OUT;