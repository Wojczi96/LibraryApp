import { Type } from "./typeEnum.enum";


export interface Book {
    title: string,
    author: string,
    year: number,
    image: string,
    rate: number,
    type: Type
}