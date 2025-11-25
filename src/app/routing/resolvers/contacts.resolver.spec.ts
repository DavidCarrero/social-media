import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { contactsResolver } from './contacts.resolver';

describe('contactsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => contactsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
