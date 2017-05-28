import { AuthorizedHttpService } from './authorizedHttp.service';
import * as Cookies from 'cookies-js';

describe('AuthorizedHttpService', () => {
    let sut,
        mockBackend,
        mockOptions;
    beforeEach(() => {
        mockOptions = {
            headers: {
                set: jasmine.createSpy('set')
            }
        };

        sut = new AuthorizedHttpService(mockBackend, mockOptions);
    });
    describe('constructor', () => {
       it('should set options', () => {
           expect(mockOptions.headers.set)
               .toHaveBeenCalledWith('myAuthorization', Cookies.get('token'));
       });
    });
});
