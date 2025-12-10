import { TestBed } from '@angular/core/testing';

import { DragonBall } from './dragon-ball-api-service';

describe('DragonBall', () => {
  let service: DragonBall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonBall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
