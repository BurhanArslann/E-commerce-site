import { useState } from "react"

function Data (){
    const  [products, setProducts] = useState("")

    async function dataTransfer(){
        try{
        const resp = await fetch("https://api.escuelajs.co/api/v1/products")
        const api = await resp.json()
       setProducts(api)
       
   
    }catch(error){
        console.error("error",error)
    }

    }
   dataTransfer()
}

export default Data