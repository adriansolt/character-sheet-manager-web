import { Component, Input } from '@angular/core';

@Component({
  selector: 'character-sheet-attribute',
  templateUrl: './character-sheet-attribute.component.html',
  styleUrls: ['./character-sheet-attribute.component.scss']
})
export class CharacterSheetAttributeComponent {
  @Input () name: string = '';

}
