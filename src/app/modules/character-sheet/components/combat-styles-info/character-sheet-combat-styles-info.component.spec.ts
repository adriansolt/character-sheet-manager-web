import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetCombatStylesInfoComponent } from './character-sheet-combat-styles-info.component';

describe('CharacterSheetCombatStylesInfoComponent', () => {
  let component: CharacterSheetCombatStylesInfoComponent;
  let fixture: ComponentFixture<CharacterSheetCombatStylesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetCombatStylesInfoComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetCombatStylesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
