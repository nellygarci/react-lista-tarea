/* llamarlo */
import React, {useState,} from "react";
import ListHomeWorkComponent from "./ListHomeWorkComponent";

/* destructurar el useState */
const HooksComponent = () =>{
    const [estado, setEstado] = useState (false);
    


    /* funciones */ 
    

    
/*
    const disminuir = () => {
        setCuenta(cuenta-1);
    };

    const reset = () => {
        setCuenta(cuenta*0);
    };
    */
/* usar el usEffect */
  /*  useEffect (() => {
    
    
    }, [estado]);*/

    return (
        <div>
           <button onClick={()=> setEstado(true)}> Mostrar la lista de tareas</button>
           {estado===true ? (<ListHomeWorkComponent/>):

           ("")  } 

<button onClick={()=> setEstado(true)}> Mostrar tareas Realizadas</button>
           {estado===true ? (<ListHomeWorkComponent/>):

           ("")  } 


<button onClick={()=> setEstado(true)}> Mostrar tareas Pendientes</button>
           {estado===true ? (<ListHomeWorkComponent/>):

           ("")  }          



       </div>
    );
};

    export default HooksComponent;


    
