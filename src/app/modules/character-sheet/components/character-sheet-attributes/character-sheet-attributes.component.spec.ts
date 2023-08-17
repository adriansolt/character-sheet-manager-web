import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetAttributesComponent } from './character-sheet-attributes.component';

describe('CharacterSheetAttributesComponent', () => {
  let component: CharacterSheetAttributesComponent;
  let fixture: ComponentFixture<CharacterSheetAttributesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetAttributesComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
