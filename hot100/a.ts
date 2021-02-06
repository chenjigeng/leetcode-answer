type t = 'A' | 'B'

type H = {
    A: string;
    B: number;
}

type IT<T extends t = t> = T extends t ? {
    type: T;
    H: H[T]
} : any;

type h = {
    type: 'A',
    H: string;
} & {
    type: 'B',
    H: number;
}

const p: IT = {
    type: 'A',
    H: 's'
}