import { listaCaracteristicas } from '../components/characteristics/character-sheet-characteristics.component';
import { CULTURA, PROFESION } from './additional-info';
import { Caracteristica } from './characteristic';

export class Habilidad {
  nombre: HABILIDAD_BASICA | HABILIDAD_PROFESIONAL;
  caracteristica1: Caracteristica;
  caracteristica2: Caracteristica;
  puntosEdad?: number;
  puntosPifia?: number;
  puntosEntrenamiento?: number;
  puntosExp?: number;
  culturas?: CULTURA[];
  puntosCultura?: number;
  profesiones?: PROFESION[];
  puntosProfesion?: number;
  especializacion?: boolean;
  escoger1?: CULTURA[];
  escoger2?: CULTURA[];
}

export enum HABILIDAD_BASICA {
  Aguante = 'Aguante',
  Atletismo = 'Atletismo',
  Bailar = 'Bailar',
  Cantar = 'Cantar',
  Conducir = 'Conducir',
  ConocimientoLocal = 'Con. local',
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

export enum HABILIDAD_PROFESIONAL {
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
