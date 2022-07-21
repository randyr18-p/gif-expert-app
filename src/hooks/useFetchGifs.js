import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

// esto es un custom Hook
// aqui () puedo recibir un objeto o las propiedades que yo desee 
// en le funcional components recibo las props ()
export const useFetchGifs = (category) => {

    const [images, setImages]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    const getImages = async()=>{
       const newImages = await getGifs(category);
       setImages(newImages);
       setIsLoading(false)
    } 
    useEffect(()=>{
        getImages();
    },[])

    return {
        images:images,
        isLoading: isLoading
    }
}

