import * as auth from './auth/auth.reducers';

export interface AppState {
  auth: auth.State;
}
export const reducers = {
  auth: auth.reducer,
};
