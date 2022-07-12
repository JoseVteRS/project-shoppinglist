import { ApplicationConflictException } from "../../application/errors/application-conflict.exception.js";
import { DomainFormatException } from "../../domain/errors/domain-format.exception.js"
import { InfrastructureFormatException} from "../../infrastructura/errors/infratructure-format.exception.js"

export const errorMiddleware = (error, _, res, __) => {
  if (
    error instanceof DomainFormatException ||
    error instanceof InfrastructureFormatException
  )
    return res.status(400).send({errorMesage: error.message});

  if (error instanceof ApplicationConflictException)
    return res.status(409).send({errorMesage: error.message});

  console.log(error);
  return res.status(500).send({errorMesage: `Error interno del servidor: ${error.message}`});
};