import { useState } from "react"
//import { AddCategory } from "./components/AddCategory.jsx";
import {AddCategories, GifGrid} from "./components"



export const GifExpertApp = () => {
    {/*  esto no se debe hacer
    if (true) {
        const [categoria, setCategoria]= useState(['One Punch', 'thor'])
    } */}
    const [categories, setCategories] = useState(['One Punch']);
       const onAddCategory = (newCategory)=>{

        if (categories.includes(newCategory)) return;
        //categories.push(newCategory);
           setCategories([ newCategory,...categories, ]);
           // otra forma de hacerlo
           //setCategories(newCategory =>['jose',...cat]);   
       }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategories 
                //setCategories={setCategories}
                // on es un evento 
                onNewCategory={(value)=>onAddCategory(value)}
            />
              
            {/* Listado de Gif */}

            {/** se debe proporcionar una key */}

             {categories.map((category) => (
                     <GifGrid key={category} category={category}/>

                     )
                )
            }
            {/*<li>abc</li>*/}



                {/* titulo */}
        </>
    )
}



