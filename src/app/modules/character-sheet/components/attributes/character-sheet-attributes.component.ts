import { Component } from '@angular/core';
import { Attribute } from '../../models/attribute';

const ATTRIBUTE_LIST: Attribute[] = [
  {
    nombre: 'Puntos de acción',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    nombre: 'Modif. Daño',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    nombre: 'Modif. exp.',
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  {
    nombre: 'Ritmo curación',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    nombre: 'Bonif. iniciativa',
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  {
    nombre: 'Puntos de suerte',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    nombre: 'Tasa de movimiento (m)',
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
  styleUrls: ['./character-sheet-attributes.component.scss']
})
export class CharacterSheetAttributesComponent {
  displayedColumns: string[] = ['attribute', 'initial', 'current'];
  dataSource = ATTRIBUTE_LIST;
}
