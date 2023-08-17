import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetAttributeComponent } from './character-sheet-attribute.component';

describe('CharacterSheetAttributeComponent', () => {
  let component: CharacterSheetAttributeComponent;
  let fixture: ComponentFixture<CharacterSheetAttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetAttributeComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
