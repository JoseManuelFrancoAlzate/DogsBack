const {Dog, Temperaments} = require('../db')
const axios = require("axios")

const cleanArray = (arr)=>{
    return arr.map((elem)=>{
         return {
             id: elem.id,
             image: elem.image,
             name: elem.name,
             heigh: elem.heigh, 
             weight: elem.weight,
             temperament: elem.temperament,
             imperial: elem.imperial,
             metric:elem.metric,
             reference_img: elem.reference_image_id,
             created: false

         } 
     }) 
 }

 const cleanDbsArray = (arr)=>{
    return arr.map((elem)=>{
         return {
             id: elem.id,
             image: elem.image,
             name: elem.name,
             heigh: elem.heigh, 
             weight: elem.weight,
             temperament: elem.Temperaments[0].name,
             imperial: elem.imperial,
             metric:elem.metric,
             createdDb: elem.createdDb
             

         }
     })
 }



const createDogs = async(image, name,height,  weight,lifeSpan, temperamentId)=>{
    const newDogs = await Dog.create({image, name,height, weight,lifeSpan})
    await newDogs.addTemperaments(temperamentId)
    
    console.log(newDogs)

    return newDogs
    }


    
const getDogsById = async (id, source)=>{
    const dogs =  
    source === "api" 
    ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
     : await Dog.findByPk(id,{include: Temperaments})


    return dogs;
}



/*
const getDogsById= async(id)=>{
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)
    const breed = {
        id: data.id,
        name: data.name,
        temperament: data.temperament,
        lifespan:data.life_span,
        weight: data.weight.metric,
        height: data.height.metric,
        image: data.image 
    }

    return breed
}

*/
//tiene que traer todas las razas de perros que allan en el Api y en la BSD

const getAllDogs =  async ()=>{
//BUSCAR EN LA BSD
const allDogsDbsRaw = await Dog.findAll({include: Temperaments})
    //BUSCAR EN LA API
    const allDogsApiRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data
   const allDogsApi= cleanArray(allDogsApiRaw)
   const allDogsDbs= cleanDbsArray(allDogsDbsRaw)

    return    [...allDogsDbs, ...allDogsApi]

}
//debo traer la imagen de cada uno de los perros segun su ID

const searchDogsByName = async(name)=>{
    let arrayEspacio=  name.split(' ')

    let convertirString = arrayEspacio[0].toString()
    let convertirStringDos= arrayEspacio[1] === undefined ? 'No existe' :  arrayEspacio[1].toString()
    
    
    function mayusPrime(element){
        
    
    
    let palabraM = element.toUpperCase()
    let primeraLetra = palabraM[0]
        
    let minuscula = element.toLowerCase().slice(1)
        
        
    
    
    return primeraLetra + minuscula
    
    }
    
   mayusPrime(convertirStringDos)
    
   mayusPrime(convertirString) + ' ' + mayusPrime(convertirStringDos)

   
const allDogsDbs = await Dog.findAll({
    include: Temperaments,

})
const allDogsApiRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data
const allDogsApi= cleanArray(allDogsApiRaw)

const filteredApi = allDogsApi.filter((dogs)=> dogs.name ===  mayusPrime(convertirString) + ' ' + mayusPrime(convertirStringDos) || dogs.name ===  mayusPrime(convertirString)
) 

return [...filteredApi,...allDogsDbs]
}  

module.exports = {createDogs, getDogsById, getAllDogs, searchDogsByName};  


//si el string tiene una palabra muestramela, pero si tiene dos muestramela 