import { Action } from '@ngrx/store';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultAuthState = {
  authorized: false,
  username: ''
};

interface AuthState {
  authorized: boolean;
  username: string;
}

function authReducer(state: AuthState = defaultAuthState, action: Action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        authorized: true,
        username: action.payload
      });

    case LOGOUT:
      return Object.assign({}, state, {
        authorized: false,
        username: ''
      });

    default:
      return state;
  }
}

export { authReducer, AuthState, LOGIN, LOGOUT };
