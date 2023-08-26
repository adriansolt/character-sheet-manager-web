import { Component } from '@angular/core';
import { CHARACTERISTIC } from '../../models/characteristic';

export const CHARACTERISTIC_LIST = {
  FUE: {
    name: CHARACTERISTIC.Fuerza,
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  CON: {
    name: CHARACTERISTIC.Constitucion,
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  TAM: {
    name: CHARACTERISTIC.Tamano,
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  DES: {
    name: CHARACTERISTIC.Destreza,
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  INT: {
    name: CHARACTERISTIC.Inteligencia,
    value: {
      initial: 10,
      current: 10,
      min: 8,
      max: 18,
    },
  },
  POD: {
    name: CHARACTERISTIC.Poder,
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },
  CAR: {
    name: CHARACTERISTIC.Carisma,
    value: {
      initial: 10,
      current: 10,
      min: 3,
      max: 18,
    },
  },

}

@Component({
  selector: 'character-sheet-characteristics',
  templateUrl: './character-sheet-characteristics.component.html',
  styleUrls: ['./character-sheet-characteristics.component.scss'],
})
export class CharacterSheetCharacteristicsComponent {
  displayedColumns: string[] = ['characteristic', 'initial', 'current'];
  dataSource = Object.values(CHARACTERISTIC_LIST);
}
