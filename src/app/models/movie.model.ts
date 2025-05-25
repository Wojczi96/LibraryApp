import { Type } from "./typeEnum.enum";

export interface Movie {
    title: string,
    year: number,
    image: string,
    rate: number,
    type: Type
}