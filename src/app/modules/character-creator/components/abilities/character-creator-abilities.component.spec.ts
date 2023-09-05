import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorAbilitiesComponent } from './character-creator-abilities.component';

describe('CharacterCreatorAbilitiesComponent', () => {
  let component: CharacterCreatorAbilitiesComponent;
  let fixture: ComponentFixture<CharacterCreatorAbilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCreatorAbilitiesComponent]
    });
    fixture = TestBed.createComponent(CharacterCreatorAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
