export interface Attribute {
    name: string;
    value: Value;
}

interface Value {
    initial: number;
    current: number;
    max: number;
    min: number
}