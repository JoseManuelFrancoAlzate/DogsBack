const { createDogs, getDogsById,getAllDogs,searchDogsByName } = require("../controllers/dogsControllers")



const getDogsHandler = async (req,res)=>{
const {name} = req.query
try {
 const results = name ? await searchDogsByName(name) : await getAllDogs()  

res.status(200).json(results)
} catch (error) {
    res.status(400).json({error:error.message})
}
}


const getIdDogsHandler= async(req,res)=>{
    const {id} = req.params

    const source = isNaN(id) ? "add" : "api";

    try {
       const dogs= await getDogsById(id, source);
        res.status(200).json(dogs);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}
const getCreateDogsHandler = async (req,res)=>{
    try {
        const {image, name,height,  weight,lifeSpan, temperamentId} = req.body
 
  const newDog = await createDogs(image, name,height, weight,lifeSpan, temperamentId )
 
  res.status(200).json(newDog) 
  
    } catch (error) {
       res.status(400).json({error: error.message = "No se creo el personaje"})
    }
}

module.exports =  {
    getDogsHandler,
    getIdDogsHandler,
    getCreateDogsHandler
}