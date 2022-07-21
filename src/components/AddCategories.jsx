import React, { useState } from 'react'

export const AddCategories = ({onNewCategory}) => {

    const[inputValue, setInputValue]=  useState('One Punch')

    const onInputChange = ({target})=>{
       // console.log(target.value)
        // recibimos el valor que vamos escribiendo con el event.target.value
       //setInputValue(event.target.value)
       setInputValue(target.value)
    }

    const onSubmit = (event)=>{
           event.preventDefault();
           if(inputValue.trim().length <= 1) return // menor o igual <=
           //setCategories(categories=> [inputValue, ...categories])
           onNewCategory(inputValue.trim())
           setInputValue('');
    }
    return (
        // el fragment se utiliza  cuando hay dos elementos iguales y necesitan un pageBreakInside
        // pero si hay un solo elemento y ese el padre y los demas son sus hijos no se utiliza <>fragment
        // un formulario hace un Fullrefresh del navegador por defecto 
        <form onSubmit={onSubmit}>    
            <input
               type="text"
               placeholder ="Buscar Gif"
               value={inputValue}
               onChange={onInputChange}
            />
        </form>
    )
}
