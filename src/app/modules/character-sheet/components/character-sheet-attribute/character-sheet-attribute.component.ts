import { Component, Input } from '@angular/core';
import { Attribute } from '../../models/attribute';

@Component({
  selector: 'character-sheet-attribute',
  templateUrl: './character-sheet-attribute.component.html',
  styleUrls: ['./character-sheet-attribute.component.scss']
})
export class CharacterSheetAttributeComponent {
  @Input () attribute: Attribute;

}
