function HomeWorkComponent (props){
    const {tarea}=props;
    
    let actividad = "Pendiente";
    
    
    
    
    return(<tr>
              <td>{tarea} </td>
         <td> <input type="checkbox" /></td>      
          {/* <td> <p  onClick{()=> actividad("Realizada")}> {actividad} </p>   </td>*/ }    
           </tr>

     )
    
}
 

export default HomeWorkComponent
