import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedGamesComponent } from './liked-games.component';

describe('LikedGamesComponent', () => {
  let component: LikedGamesComponent;
  let fixture: ComponentFixture<LikedGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
