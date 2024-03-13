import { TestBed } from '@angular/core/testing';

import { AuthenticateUserLoginService } from './authenticate-user-login.service';

describe('AuthenticateUserLoginService', () => {
  let service: AuthenticateUserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateUserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
