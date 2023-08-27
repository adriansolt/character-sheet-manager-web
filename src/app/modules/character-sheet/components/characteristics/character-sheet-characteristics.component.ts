import { Component } from '@angular/core';
import { NOMBRE_CARACTERISTICA } from '../../models/characteristic';

export const listaCaracteristicas = {
  FUE: {
    nombre: NOMBRE_CARACTERISTICA.Fuerza,
    valor: {
      inicial: 10,
      actual: 10,
      min: 3,
      max: 18,
    },
  },
  CON: {
    nombre: NOMBRE_CARACTERISTICA.Constitucion,
    valor: {
      inicial: 10,
      actual: 10,
      min: 3,
      max: 18,
    },
  },
  TAM: {
    nombre: NOMBRE_CARACTERISTICA.Tamano,
    valor: {
      inicial: 10,
      actual: 10,
      min: 8,
      max: 18,
    },
  },
  DES: {
    nombre: NOMBRE_CARACTERISTICA.Destreza,
    valor: {
      inicial: 10,
      actual: 10,
      min: 3,
      max: 18,
    },
  },
  INT: {
    nombre: NOMBRE_CARACTERISTICA.Inteligencia,
    valor: {
      inicial: 10,
      actual: 10,
      min: 8,
      max: 18,
    },
  },
  POD: {
    nombre: NOMBRE_CARACTERISTICA.Poder,
    valor: {
      inicial: 10,
      actual: 10,
      min: 3,
      max: 18,
    },
  },
  CAR: {
    nombre: NOMBRE_CARACTERISTICA.Carisma,
    valor: {
      inicial: 10,
      actual: 10,
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
  dataSource = Object.values(listaCaracteristicas);
}
