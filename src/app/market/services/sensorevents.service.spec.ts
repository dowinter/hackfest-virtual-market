import { TestBed } from '@angular/core/testing';

import { SensoreventsService } from './sensorevents.service';

describe('SensoreventsService', () => {
  let service: SensoreventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensoreventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
