import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorInfoDialogComponent } from './character-creator-info-dialog.component';

describe('CharacterCreatorInfoDialogComponent', () => {
  let component: CharacterCreatorInfoDialogComponent;
  let fixture: ComponentFixture<CharacterCreatorInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCreatorInfoDialogComponent]
    });
    fixture = TestBed.createComponent(CharacterCreatorInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
