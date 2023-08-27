export class Caracteristica {
    nombre: NOMBRE_CARACTERISTICA;
    valor: Valor;
}

class Valor {
    inicial: number;
    actual: number;
    max: number;
    min: number
}

export enum NOMBRE_CARACTERISTICA {
    Fuerza = 'Fuerza',
    Constitucion = 'Constitución',
    Tamano = 'Tamaño',
    Destreza = 'Destreza',
    Inteligencia = 'Inteligencia',
    Poder = 'Poder',
    Carisma = 'Carisma'
}