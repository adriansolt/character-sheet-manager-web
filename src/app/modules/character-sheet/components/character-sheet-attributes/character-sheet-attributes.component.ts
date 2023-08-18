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
      value: {
        initial: 10,
        current: 10,
        min: 3,
        max: 18,
      },
    },
    {
      name: 'CONSTITUCIÓN',
      value: {
        initial: 10,
        current: 10,
        min: 3,
        max: 18,
      },
    },
    {
      name: 'TAMAÑO',
      value: {
        initial: 10,
        current: 10,
        min: 8,
        max: 18,
      },
    },
    {
      name: 'DESTREZA',
      value: {
        initial: 10,
        current: 10,
        min: 3,
        max: 18,
      },
    },
    {
      name: 'INTELIGENCIA',
      value: {
        initial: 10,
        current: 10,
        min: 8,
        max: 18,
      },
    },
    {
      name: 'PODER',
      value: {
        initial: 10,
        current: 10,
        min: 3,
        max: 18,
      },
    },
    {
      name: 'CARISMA',
      value: {
        initial: 10,
        current: 10,
        min: 3,
        max: 18,
      },
    },
  ];
}
