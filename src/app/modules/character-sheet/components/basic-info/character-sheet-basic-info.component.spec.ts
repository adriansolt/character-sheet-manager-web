import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetBasicInfoComponent } from './character-sheet-basic-info.component';

describe('CharacterSheetBasicInfoComponent', () => {
  let component: CharacterSheetBasicInfoComponent;
  let fixture: ComponentFixture<CharacterSheetBasicInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetBasicInfoComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
