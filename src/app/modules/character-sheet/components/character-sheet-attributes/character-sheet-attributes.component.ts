import { Component } from '@angular/core';
import { Attribute } from '../../models/attribute';

@Component({
  selector: 'character-sheet-attributes',
  templateUrl: './character-sheet-attributes.component.html',
  styleUrls: ['./character-sheet-attributes.component.scss'],
})
export class CharacterSheetAttributesComponent {
  attributeList: Attribute[] = [
    {
      name: 'FUERZA',
    },
    {
      name: 'CONSTITUCIÓN',
    },
    {
      name: 'TAMAÑO',
    },
    {
      name: 'DESTREZA',
    },
    {
      name: 'INTELIGENCIA',
    },
    {
      name: 'PODER',
    },
    {
      name: 'CARISMA',
    },
  ];
}
