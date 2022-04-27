function HomeWorkComponent (props){
    const {tarea}=props;
    return(<tr >
              <td>{tarea} </td>
              <td> <input type="checkbox" /></td>
           </tr>

     )
    
}
 

export default HomeWorkComponent
