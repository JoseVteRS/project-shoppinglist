import {Router} from "express";

const router = Router();

router.get('/api/get', (req, res, next)=> {
    res.status(200).send({message: 'Hello world shoppinglist'})
})

