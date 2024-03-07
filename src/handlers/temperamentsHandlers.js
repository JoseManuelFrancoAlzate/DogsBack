const {findAllTemperaments} = require('../controllers/temperamentsControllers')



const getTemperamentsHandler = async (req,res)=>{
try {
    
    const allTemperaments = await findAllTemperaments()

    res.status(201).json(allTemperaments)

} catch (error) {
    res.status(500).json({error:error.message})
}
}



module.exports =  {getTemperamentsHandler}