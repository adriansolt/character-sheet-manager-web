import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetAdditionalInfoComponent } from './character-sheet-additional-info.component';

describe('CharacterSheetAdditionalInfoComponent', () => {
  let component: CharacterSheetAdditionalInfoComponent;
  let fixture: ComponentFixture<CharacterSheetAdditionalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetAdditionalInfoComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
