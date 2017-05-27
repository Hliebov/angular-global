import { authReducer, AuthState } from './reducers/auth.reducer';

interface AppState {
  authReducer: AuthState;
}

const reducerDef = {
  auth: authReducer
};

export { reducerDef, AppState };
