import { ApplicationConflictException } from "./application-conflict.exception.js";


export class ProductIdAlreadyInUse extends ApplicationConflictException {
    constructor(){
        super(`El ID de producto ya está en uso`)
    }
}