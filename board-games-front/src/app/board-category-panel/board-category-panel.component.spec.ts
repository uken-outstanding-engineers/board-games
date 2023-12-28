import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCategoryPanelComponent } from './board-category-panel.component';

describe('BoardCategoryPanelComponent', () => {
  let component: BoardCategoryPanelComponent;
  let fixture: ComponentFixture<BoardCategoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCategoryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
