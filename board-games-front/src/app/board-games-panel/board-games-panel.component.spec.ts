import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGamesPanelComponent } from './board-games-panel.component';

describe('BoardGamesPanelComponent', () => {
  let component: BoardGamesPanelComponent;
  let fixture: ComponentFixture<BoardGamesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGamesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardGamesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
