export class Characteristic {
    name: CHARACTERISTIC;
    value: Value;
}

class Value {
    initial: number;
    current: number;
    max: number;
    min: number
}

export enum CHARACTERISTIC {
    Fuerza = 'Fuerza',
    Constitucion = 'Constitución',
    Tamano = 'Tamaño',
    Destreza = 'Destreza',
    Inteligencia = 'Inteligencia',
    Poder = 'Poder',
    Carisma = 'Carisma'
}