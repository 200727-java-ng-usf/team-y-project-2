import { TestBed } from '@angular/core/testing';

import { GoogleMapsConnectionService } from './google-maps-connection.service';

describe('GoogleMapsConnectionService', () => {
  let service: GoogleMapsConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapsConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
