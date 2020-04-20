export enum AuthActionTypes {
  REGISTER_REQUESTED = '[Auth] REGISTER Requested',
  REGISTER_COMPLETED = '[Auth] REGISTER Completed',
  REGISTER_FAILED = '[Auth] REGISTER Failed',

  UPDATE_PROFILE = '[Auth] Update profile',
  UPDATE_PROFILE_SUCCESS = '[Auth] Update profile success',

  LOGIN_REQUESTED = '[Auth] LOGIN Requested',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed',

  SAVE_USER = '[Auth] Save user',
  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  CHECK_USER_ROLE = '[Auth] Check user role',
  UPDATE_USER_ROLE = '[Auth] Update user role',

  GET_USER = '[Auth] GET User',

  AUTH_ERROR = '[Auth] Error'
}
