import HomeWorkComponent from "./HomeWorkComponent";

function ListHomeWorkComponent() {
 return (<div className="BodyWork">
            <table className="table">
             <tr>
               <th> tareas </th>
               <th> check </th>
             </tr>
             <HomeWorkComponent tarea="1.- Crear carpeta ´Components´"/> 
             <HomeWorkComponent tarea="2.- Crear archivo en carpeta components"/>
             <HomeWorkComponent tarea ="3.- Escribirlo con UpperCamelCase"/>
             <HomeWorkComponent tarea ="4.- Colocarle nombre relacionado a la acción"/>
             <HomeWorkComponent tarea ="5.- Ingresar al archivo"/>
             <HomeWorkComponent tarea ="6.- Colocar Function + el nombre del archivo + () + llaves"/>
             <HomeWorkComponent tarea ="7.- Escribir función"/>
             <HomeWorkComponent tarea ="8.- Luego de cerrar la llave escribir Export default NombreComponente"/>
           </table>
      </div>
 );
}
export default ListHomeWorkComponent;

