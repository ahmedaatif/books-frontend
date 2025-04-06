import { BookRequestInterface } from "./book-request.interface";

export interface BookResponseInterface extends BookRequestInterface {
    id: string;
}