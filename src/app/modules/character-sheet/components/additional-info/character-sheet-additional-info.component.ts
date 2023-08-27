import { Component } from '@angular/core';
import { CLASE_SOCIAL_BARBARA, COMPLEXIÓN, CULTURA, PROFESION } from '../../models/additional-info';

@Component({
  selector: 'character-sheet-additional-info',
  templateUrl: './character-sheet-additional-info.component.html',
  styleUrls: ['./character-sheet-additional-info.component.scss']
})
export class CharacterSheetAdditionalInfoComponent {
  complexiones: COMPLEXIÓN[] = Object.values(COMPLEXIÓN) as COMPLEXIÓN[];
  culturas: CULTURA[] = Object.values(CULTURA) as CULTURA[];
  profesiones: PROFESION[] = Object.values(PROFESION) as PROFESION[];
  clases_sociales: CLASE_SOCIAL_BARBARA[] = Object.values(CLASE_SOCIAL_BARBARA);
}
