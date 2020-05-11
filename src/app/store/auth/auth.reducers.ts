import User from 'src/app/shared/interfaces/User';
import * as authActions from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export function reducer(state: State = initialState, action: authActions.All) {
  switch (action.type) {
    case authActions.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case authActions.NOT_AUTHENTICATED:
      return initialState;
    case authActions.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
