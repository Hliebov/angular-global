import {
    authReducer,
    defaultAuthState,
    LOGIN,
    LOGOUT
} from './auth.reducer';

describe('authReducer', () => {
    it('should LOGIN', () => {
        expect(authReducer({} as any, {type: LOGIN, payload: 'payload'}))
            .toEqual({
                authorized: true,
                username: 'payload'
            });
    });
    it('should LOGOUT', () => {
        expect(authReducer({} as any, {type: LOGOUT}))
            .toEqual({
                authorized: false,
                username: ''
            });
    });
    it('should return state', () => {
        expect(authReducer({} as any, {type: ''}))
            .toEqual({});
    });
    it('should return default state', () => {
        expect(authReducer(undefined, {type: ''}))
            .toEqual(defaultAuthState);
    });
});
