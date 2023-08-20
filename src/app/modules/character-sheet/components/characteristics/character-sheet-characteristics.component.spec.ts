import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetCharacteristicsComponent } from './character-sheet-characteristics.component';

describe('CharacterSheetCharacteristicsComponent', () => {
  let component: CharacterSheetCharacteristicsComponent;
  let fixture: ComponentFixture<CharacterSheetCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetCharacteristicsComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
