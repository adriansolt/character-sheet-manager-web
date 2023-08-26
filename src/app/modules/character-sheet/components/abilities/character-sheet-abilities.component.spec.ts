import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetAbilitiesComponent } from './character-sheet-abilities.component';

describe('CharacterSheetAbilitiesComponent', () => {
  let component: CharacterSheetAbilitiesComponent;
  let fixture: ComponentFixture<CharacterSheetAbilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetAbilitiesComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
