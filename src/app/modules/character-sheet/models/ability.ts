import { CHARACTERISTIC_LIST } from '../components/characteristics/character-sheet-characteristics.component';
import { Characteristic } from './characteristic';

export class Ability {
  name: BASIC_ABILITY | PROFESSIONAL_ABILITY;
  characteristic1: Characteristic;
  characteristic2: Characteristic;
  agePoints?: number;
  fumblePoints?: number;
  trainingPoints?: number;
  experiencePoints?: number;
  culturePoints?: number;
  professionPoints?: number;
}

export enum BASIC_ABILITY {
  Aguante = 'Aguante',
  Atletismo = 'Atletismo',
  Bailar = 'Bailar',
  Cantar = 'Cantar',
  Conducir = 'Conducir',
  ConocimientoLocal = 'Conocimiento local',
  Costumbres = 'Costumbres',
  Engañar = 'Engañar',
  Evadir = 'Evadir',
  Influencia = 'Influencia',
  LenguaMaterna = 'Lengua materna',
  ManejoBotes = 'Manejo de botes',
  Montar = 'Montar',
  Musculo = 'Músculo',
  Nadar = 'Nadar',
  Ocultar = 'Ocultar',
  Pelea = 'Pelea',
  Percepcion = 'Percepción',
  Perspicacia = 'Perspicacia',
  PrimerosAuxilios = 'Primeros auxilios',
  Sigilo = 'Sigilo',
  Voluntad = 'Voluntad',
  Combate = 'Combate',
}

export enum PROFESSIONAL_ABILITY {
  Acrobacias = 'Acrobacias',
  Actuar = 'Actuar',
  Arte = 'Arte',
  Artesania = 'Artesanía',
  Atadura = 'Atadura',
  Burocracia = 'Burocracia',
  Callejeo = 'Callejeo',
  Ciencia = 'Ciencia',
  Comerciar = 'Comerciar',
  Cortesia = 'Cortesía',
  Cultura = 'Cultura ',
  Curacion = 'Curación',
  CuracionAnimal = 'Curación (animal)',
  Devocion = 'Devoción',
  Disfraz = 'Disfraz',
  Enseñar = 'Enseñar',
  Exhortacion = 'Exhortación',
  Falsificacion = 'Falsificación',
  ForzarCerraduras = 'Forzar cerraduras',
  Idioma = 'Idioma',
  Ingenieria = 'Ingeniería',
  Investigacion = 'Investigación',
  Invocacion = 'Invocación',
  Juego = 'Juego',
  JuegoManos = 'Juego de manos',
  LeerEscribir = 'Leer/escribir',
  MagiaComun = 'Magia Común',
  Manipulacion = 'Manipulación',
  Mecanismos = 'Mecanismos',
  Meditacion = 'Meditación',
  Misticismo = 'Misticismo',
  Musica = 'Música',
  Navegacion = 'Navegación',
  Oratoria = 'Oratoria',
  Orientacion = 'Orientación',
  Politica = 'Política',
  Rastrear = 'Rastrear',
  Saber = 'Saber',
  Seduccion = 'Seducción',
  Superviviencia = 'Superviviencia',
  Trance = 'Trance',
}

export const BASIC_ABILITY_LIST: Ability[] = [
  {
    name: BASIC_ABILITY.Aguante,
    characteristic1: CHARACTERISTIC_LIST.CON,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: BASIC_ABILITY.Atletismo,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
  {
    name: BASIC_ABILITY.Bailar,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: BASIC_ABILITY.Cantar,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: BASIC_ABILITY.Conducir,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: BASIC_ABILITY.ConocimientoLocal,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: BASIC_ABILITY.Costumbres,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: BASIC_ABILITY.Engañar,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: BASIC_ABILITY.Evadir,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: BASIC_ABILITY.Influencia,
    characteristic1: CHARACTERISTIC_LIST.CAR,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: BASIC_ABILITY.LenguaMaterna,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: BASIC_ABILITY.ManejoBotes,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: BASIC_ABILITY.Montar,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: BASIC_ABILITY.Musculo,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.TAM,
  },
  {
    name: BASIC_ABILITY.Nadar,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: BASIC_ABILITY.Ocultar,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: BASIC_ABILITY.Pelea,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
  {
    name: BASIC_ABILITY.Percepcion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: BASIC_ABILITY.Perspicacia,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: BASIC_ABILITY.PrimerosAuxilios,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: BASIC_ABILITY.Sigilo,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: BASIC_ABILITY.Voluntad,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: BASIC_ABILITY.Combate,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
];

export const PROFESSIONAL_ABILITY_LIST: Ability[] = [
  {
    name: PROFESSIONAL_ABILITY.Acrobacias,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
  {
    name: PROFESSIONAL_ABILITY.Actuar,
    characteristic1: CHARACTERISTIC_LIST.CAR,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Arte,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Artesania,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.Burocracia,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.Callejeo,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Ciencia,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.Comerciar,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Cortesia,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Cultura,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.Curacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: PROFESSIONAL_ABILITY.Disfraz,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Enseñar,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Exhortacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Falsificacion,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.ForzarCerraduras,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
  {
    name: PROFESSIONAL_ABILITY.Idioma,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Ingenieria,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },  
  {
    name: PROFESSIONAL_ABILITY.Investigacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: PROFESSIONAL_ABILITY.Invocacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.Juego,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: PROFESSIONAL_ABILITY.JuegoManos,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Acrobacias,
    characteristic1: CHARACTERISTIC_LIST.FUE,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
  {
    name: PROFESSIONAL_ABILITY.LeerEscribir,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
    {
    name: PROFESSIONAL_ABILITY.MagiaComun,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.MagiaComun,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Manipulacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: PROFESSIONAL_ABILITY.Mecanismos,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.DES,
  },
  {
    name: PROFESSIONAL_ABILITY.Meditacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: PROFESSIONAL_ABILITY.Misticismo,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: PROFESSIONAL_ABILITY.Musica,
    characteristic1: CHARACTERISTIC_LIST.DES,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Navegacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: PROFESSIONAL_ABILITY.Oratoria,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Orientacion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: PROFESSIONAL_ABILITY.Politica,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Rastrear,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
  {
    name: PROFESSIONAL_ABILITY.Saber,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.INT,
  },
  {
    name: PROFESSIONAL_ABILITY.Seduccion,
    characteristic1: CHARACTERISTIC_LIST.INT,
    characteristic2: CHARACTERISTIC_LIST.CAR,
  },
  {
    name: PROFESSIONAL_ABILITY.Superviviencia,
    characteristic1: CHARACTERISTIC_LIST.CON,
    characteristic2: CHARACTERISTIC_LIST.POD,
  },
  {
    name: PROFESSIONAL_ABILITY.Trance,
    characteristic1: CHARACTERISTIC_LIST.POD,
    characteristic2: CHARACTERISTIC_LIST.CON,
  },
];
