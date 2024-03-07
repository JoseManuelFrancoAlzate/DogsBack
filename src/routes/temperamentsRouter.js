const {Router} = require("express")

const {getTemperamentsHandler} = require('../handlers/temperamentsHandlers')

const TemperamentsRouter = Router();

TemperamentsRouter.get("/",getTemperamentsHandler)



module.exports =  TemperamentsRouter 