import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetContainerComponent } from './character-sheet-container.component';

describe('CharacterSheetContainerComponent', () => {
  let component: CharacterSheetContainerComponent;
  let fixture: ComponentFixture<CharacterSheetContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetContainerComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
