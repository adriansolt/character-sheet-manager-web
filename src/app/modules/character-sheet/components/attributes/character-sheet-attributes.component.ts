import { Component } from '@angular/core';
import { Attribute } from '../../models/attribute';

const ATTRIBUTE_LIST: Attribute[] = [
  {
    name: 'Fuerza',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Constitución',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Tamaño',
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  {
    name: 'Destreza',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Inteligencia',
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  {
    name: 'Poder',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Carisma',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
];

@Component({
  selector: 'character-sheet-attributes',
  templateUrl: './character-sheet-attributes.component.html',
  styleUrls: ['./character-sheet-attributes.component.scss'],
})
export class CharacterSheetAttributesComponent {
  displayedColumns: string[] = ['attribute', 'initial', 'current'];
  dataSource = ATTRIBUTE_LIST;
}
