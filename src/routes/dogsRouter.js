const {Router} = require("express")

const {getDogsHandler,
    getIdDogsHandler,
    getCreateDogsHandler} = require('../handlers/dogsHandlers')

const dogsRouter = Router();

dogsRouter.get("/",getDogsHandler)

dogsRouter.get("/:id",getIdDogsHandler)

dogsRouter.post("/", getCreateDogsHandler)

module.exports =  dogsRouter 