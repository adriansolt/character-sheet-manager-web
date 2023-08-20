import { Component } from '@angular/core';
import { Characteristic } from '../../models/characteristic';

const CHARACTERISTICS_LIST: Characteristic[] = [
  {
    name: 'Puntos de acción',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Modif. Daño',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Modif. exp.',
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  {
    name: 'Ritmo curación',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Bonif. iniciativa',
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  {
    name: 'Puntos de suerte',
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  {
    name: 'Tasa de movimiento (m)',
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
  displayedColumns: string[] = ['characteristic', 'initial', 'current'];
  dataSource = CHARACTERISTICS_LIST;
}
