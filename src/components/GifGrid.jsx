import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifs";

// useEffect se utiliza para disparar efectos secundarios

export const GifGrid = ({ category }) => {
    

     const {images,isLoading}= useFetchGifs(category)


  // const [counter, setCounter] = useState(10)


  return (
    <>
        <h3>{category}</h3>

        {
             isLoading && (<h2>cargando...</h2>)
        }
        <div className="card-grid">

        {     images.map((image) => (
              <GifItem 
                   key={image.id}
                   {...image}
              
              />
              ))        
        }
            {/*image.map(image => (
               <li key={image.id}>{image.title}</li>
            )) */}
            
        </div>

        
  
    </>
  )
}
