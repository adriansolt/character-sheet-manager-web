import { Component } from '@angular/core';
import {
  BASIC_ABILITY_LIST,
  PROFESSIONAL_ABILITY_LIST,
} from '../../models/ability';

@Component({
  selector: 'character-sheet-container',
  templateUrl: './character-sheet-container.component.html',
  styleUrls: ['./character-sheet-container.component.scss'],
})
export class CharacterSheetContainerComponent {
  basicAbilities = BASIC_ABILITY_LIST;
  professionalAbilities = PROFESSIONAL_ABILITY_LIST;
}
