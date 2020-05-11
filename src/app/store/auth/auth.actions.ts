import { Action } from '@ngrx/store';

export const GET_STATE = '[Auth] Get state';
export const AUTHENTICATED = '[Auth] Authenticated';
export const NOT_AUTHENTICATED = '[Auth] Not authenticated';
export const SIGN_UP = '[Auth] Sign up';
export const SIGN_IN = '[Auth] Sign in';
export const SIGN_OUT = '[Auth] Sign out';
export const AUTH_ERROR = '[Auth] Auth error';

export class GetState implements Action {
  readonly type = GET_STATE;
  constructor(public payload?: any) {
    console.log('GetState');
  }
}
export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload: any) {}
}
export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}
export class SignUp implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: any) {}
}
export class SignIn implements Action {
  readonly type = SIGN_IN;
  constructor(public payload: any) {}
}
export class SignOut implements Action {
  readonly type = SIGN_OUT;
  constructor(public payload: any) {}
}
export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public payload: any) {}
}

export type All =
  | GetState
  | Authenticated
  | NotAuthenticated
  | SignUp
  | SignIn
  | SignOut
  | AuthError;
