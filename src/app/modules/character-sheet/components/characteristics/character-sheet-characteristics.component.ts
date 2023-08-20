import { Component } from '@angular/core';
import { Characteristic } from '../../models/characteristic';

const CHARACTERISTICS_LIST: Characteristic[] = [
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
  selector: 'character-sheet-characteristics',
  templateUrl: './character-sheet-characteristics.component.html',
  styleUrls: ['./character-sheet-characteristics.component.scss'],
})
export class CharacterSheetCharacteristicsComponent {
  displayedColumns: string[] = ['characteristic', 'initial', 'current'];
  dataSource = CHARACTERISTICS_LIST;
}
