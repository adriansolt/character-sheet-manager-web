import { Component } from '@angular/core';
import { CLASE_SOCIAL, COMPLEXIÓN, CULTURA, PROFESIÓN } from '../../models/additional-info';

@Component({
  selector: 'character-sheet-additional-info',
  templateUrl: './character-sheet-additional-info.component.html',
  styleUrls: ['./character-sheet-additional-info.component.scss']
})
export class CharacterSheetAdditionalInfoComponent {
  complexiones: COMPLEXIÓN[] = Object.values(COMPLEXIÓN) as COMPLEXIÓN[];
  culturas: CULTURA[] = Object.values(CULTURA) as CULTURA[];
  profesiones: PROFESIÓN[] = Object.values(PROFESIÓN) as PROFESIÓN[];
  clases_sociales: CLASE_SOCIAL[] = Object.values(CLASE_SOCIAL) as CLASE_SOCIAL[];
}
