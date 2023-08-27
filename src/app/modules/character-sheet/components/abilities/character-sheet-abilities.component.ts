import { Component, Input } from '@angular/core';
import {
  HABILIDAD_BASICA,
  HABILIDAD_PROFESIONAL,
  Habilidad,
} from '../../models/ability';
import { listaCaracteristicas } from '../characteristics/character-sheet-characteristics.component';
import { CULTURA } from '../../models/additional-info';

export const habilidadesBasicas: Habilidad[] = [
  {
    nombre: HABILIDAD_BASICA.Aguante,
    caracteristica1: listaCaracteristicas.CON,
    caracteristica2: listaCaracteristicas.CON,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva]
  },
  {
    nombre: HABILIDAD_BASICA.Atletismo,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.DES,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva],
    escoger1: [CULTURA.Primitiva],
    escoger2: [CULTURA.Nomada]
  },
  {
    nombre: HABILIDAD_BASICA.Bailar,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_BASICA.Cantar,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_BASICA.Conducir,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Civilizada, CULTURA.Nomada],
    escoger2: [CULTURA.Nomada]
  },
  {
    nombre: HABILIDAD_BASICA.ConocimientoLocal,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
    culturas: [CULTURA.Barbara, CULTURA.Civilizada, CULTURA.Nomada, CULTURA.Primitiva]
  },
  {
    nombre: HABILIDAD_BASICA.Costumbres,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_BASICA.Engañar,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_BASICA.Evadir,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Primitiva]
  },
  {
    nombre: HABILIDAD_BASICA.Influencia,
    caracteristica1: listaCaracteristicas.CAR,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_BASICA.LenguaMaterna,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_BASICA.ManejoBotes,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.CON,
    culturas: [CULTURA.Barbara, CULTURA.Primitiva, CULTURA.Nomada],
    escoger1: [CULTURA.Primitiva, CULTURA.Barbara],
    escoger2: [CULTURA.Nomada]
  },
  {
    nombre: HABILIDAD_BASICA.Montar,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Barbara, CULTURA.Nomada],
    escoger1: [CULTURA.Barbara],
    escoger2: [CULTURA.Nomada]
  },
  {
    nombre: HABILIDAD_BASICA.Musculo,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.TAM,
    culturas: [CULTURA.Barbara, CULTURA.Primitiva]
  },
  {
    nombre: HABILIDAD_BASICA.Nadar,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.CON,
    culturas: [CULTURA.Nomada, CULTURA.Primitiva],
    escoger1: [CULTURA.Primitiva],
    escoger2: [CULTURA.Nomada]
  },
  {
    nombre: HABILIDAD_BASICA.Ocultar,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_BASICA.Pelea,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.DES,
  },
  {
    nombre: HABILIDAD_BASICA.Percepcion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva]
  },
  {
    nombre: HABILIDAD_BASICA.Perspicacia,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_BASICA.PrimerosAuxilios,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.INT,
    culturas: [CULTURA.Barbara, CULTURA.Nomada]
  },
  {
    nombre: HABILIDAD_BASICA.Sigilo,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.INT,
    culturas: [CULTURA.Nomada, CULTURA.Primitiva]
  },
  {
    nombre: HABILIDAD_BASICA.Voluntad,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_BASICA.Combate,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.DES,
    culturas: [CULTURA.Barbara, CULTURA.Civilizada, CULTURA.Nomada, CULTURA.Primitiva],
  },
];

export const habilidadesProfesionales: Habilidad[] = [
  {
    nombre: HABILIDAD_PROFESIONAL.Acrobacias,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.DES,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Actuar,
    caracteristica1: listaCaracteristicas.CAR,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Arte,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada],
    especializacion: true,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Artesania,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.INT,
    culturas: [
      CULTURA.Barbara,
      CULTURA.Civilizada,
      CULTURA.Nomada,
      CULTURA.Primitiva,
    ],
    especializacion: true,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Burocracia,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Callejeo,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Ciencia,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Comerciar,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Cortesia,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Cultura,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
    culturas: [CULTURA.Nomada],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Curacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Disfraz,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Enseñar,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Exhortacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Falsificacion,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.ForzarCerraduras,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.DES,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Idioma,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [CULTURA.Civilizada, CULTURA.Nomada],
    especializacion: true,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Ingenieria,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Investigacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Invocacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Juego,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.JuegoManos,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Acrobacias,
    caracteristica1: listaCaracteristicas.FUE,
    caracteristica2: listaCaracteristicas.DES,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.LeerEscribir,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.MagiaComun,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.MagiaComun,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Manipulacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Mecanismos,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.DES,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Meditacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CON,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Misticismo,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CON,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Musica,
    caracteristica1: listaCaracteristicas.DES,
    caracteristica2: listaCaracteristicas.CAR,
    culturas: [
      CULTURA.Barbara,
      CULTURA.Civilizada,
      CULTURA.Nomada,
      CULTURA.Primitiva,
    ],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Navegacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CON,
    culturas: [CULTURA.Barbara],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Oratoria,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Orientacion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Politica,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Rastrear,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CON,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Saber,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.INT,
    culturas: [
      CULTURA.Barbara,
      CULTURA.Civilizada,
      CULTURA.Nomada,
      CULTURA.Primitiva,
    ],
    especializacion: true,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Seduccion,
    caracteristica1: listaCaracteristicas.INT,
    caracteristica2: listaCaracteristicas.CAR,
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Superviviencia,
    caracteristica1: listaCaracteristicas.CON,
    caracteristica2: listaCaracteristicas.POD,
    culturas: [CULTURA.Barbara, CULTURA.Nomada, CULTURA.Primitiva],
  },
  {
    nombre: HABILIDAD_PROFESIONAL.Trance,
    caracteristica1: listaCaracteristicas.POD,
    caracteristica2: listaCaracteristicas.CON,
  },
];

@Component({
  selector: 'character-sheet-abilities',
  templateUrl: './character-sheet-abilities.component.html',
  styleUrls: ['./character-sheet-abilities.component.scss'],
})
export class CharacterSheetAbilitiesComponent {
  @Input() abilities: Habilidad[];

  displayedColumns = [
    'nombre',
    'base',
    'culture',
    'puntosCultura',
    'profession',
    'puntosProfesion',
    'puntosEdad',
    'puntosExp',
    'puntosPifia',
    'puntosEntrenamiento',
    'total',
  ];

  getTotal(ability: Habilidad): number {
    return (
      Number(ability.caracteristica1.valor.actual ?? 0) +
      Number(ability.caracteristica2.valor.actual ?? 0) +
      Number(ability.puntosCultura ?? 0) +
      Number(ability.puntosProfesion ?? 0) +
      Number(ability.puntosEdad ?? 0) +
      Number(ability.puntosExp ?? 0) +
      Number(ability.puntosPifia ?? 0) +
      Number(ability.puntosEntrenamiento ?? 0)
    );
  }
}
