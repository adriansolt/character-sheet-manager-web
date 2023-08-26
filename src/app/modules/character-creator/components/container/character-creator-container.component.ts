import { Component } from '@angular/core';
import { PROFESION } from 'src/app/modules/character-sheet/models/additional-info';

@Component({
  selector: 'app-character-creator-container',
  templateUrl: './character-creator-container.component.html',
  styleUrls: ['./character-creator-container.component.scss'],
})
export class CharacterCreatorContainerComponent {
  profesiones: PROFESION[] = Object.values(PROFESION);
}
