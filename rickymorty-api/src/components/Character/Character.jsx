import { useEffect} from "react";
import "./character.css"
import { useCharacter } from "./hooks/useCharacter";

export function Character() {
  const {getAllCharacter, Character} = useCharacter([])

  //corchetes
  //useEffect y useState Hooks

  useEffect(() => {
    getAllCharacter;
  }, []);
   //useEffect recibe una funcion callback, es decir el codigo a ejecutar
   // recibe cuando se va a ejecutar

  return(
    //parentesis

    <ul>
        {character.map((item,index) => (
           <li key={index}>
           <h3>{item.name}</h3>
           <p>{item.status}</p>
           <img src={item.image} alt="" />
        </li>
       ))}   
    </ul>
   );
} 