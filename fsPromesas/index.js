const {mkdir}=require('node:fs/promises');

const makeDirectory=async()=>{
     try {
           const data=await mkdir("./prueba")
           console.log(`🚀 ~ makeDirectory ~ data:`, data)
     } catch (error) {
          console.log(`🚀 ~ makeDirectory ~ error:`, error)
          
     }
    
}

makeDirectory()