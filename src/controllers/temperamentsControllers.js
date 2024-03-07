const {Temperaments} = require('../db')
const axios = require("axios")


const findAllTemperaments = async()=>{
    const temperaments = await Temperaments.findAll()
    return temperaments
}


module.exports ={findAllTemperaments}