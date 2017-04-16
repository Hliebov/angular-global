import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';

import * as Cookies from 'cookies-js';

@Injectable()
class AuthorizedHttpService extends Http {
  constructor (backend: XHRBackend, options: RequestOptions) {
    let header = document.cookie;
    options.headers.set('myAuthorization', Cookies.get('token'));
    super(backend, options);
  }
}

export { AuthorizedHttpService };
