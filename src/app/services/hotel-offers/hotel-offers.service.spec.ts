import { TestBed } from '@angular/core/testing';

import { HotelOffersService } from './hotel-offers.service';

describe('HotelOffersService', () => {
  let service: HotelOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
