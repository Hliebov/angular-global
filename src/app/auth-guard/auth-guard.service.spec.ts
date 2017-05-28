import { AuthGuard } from './auth-guard.service';
import { LOGIN } from '../reducers/auth.reducer';

describe('AuthGuard', () => {
  let sut,
    mockStore,
    mockRouter;
  beforeEach(() => {
    mockStore = {
      dispatch: jasmine.createSpy('dispatch')
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    sut = new AuthGuard(mockRouter, mockStore);
  });

  describe('canActivate', () => {
    it('should  return false', () => {
      expect(sut.canActivate()).toBeFalsy();
    });
    it('should navigate to login', () => {
      sut.canActivate();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
    it('should  return true', () => {
      localStorage.setItem('userName', 'name');
      expect(sut.canActivate()).toBeTruthy();
    });
    it('should dispatch login event', () => {
      sut.canActivate();
      expect(mockStore.dispatch)
        .toHaveBeenCalledWith({type: LOGIN, payload: 'name'});
    });
  });

});
