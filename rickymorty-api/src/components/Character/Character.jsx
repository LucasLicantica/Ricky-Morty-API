import { useEffect} from "react";
import "./character.css"
import { useCharacter } from "./hooks/useCharacter";

export function Character() {
  const {getAllCharacter, allCharacter} = useCharacter([])

  //corchetes
  //useEffect y useState Hooks

  useEffect(() => {
    getAllCharacter();
  }, []);
   //useEffect recibe una funcion callback, es decir el codigo a ejecutar
   // recibe cuando se va a ejecutar

  return(
    //parentesis
    <>

    <div className= "Lucas">
    <button className="submit">Docs</button>
    <button className="submit">About</button>
    <button className="Crash">Support us</button>
    </div>
    <h1 className="title">The Rick and Morty API</h1>
    <ul className="caja">
        {allCharacter.map((item,index) => (
           <div className="contenedor">
            <img src={item.image} alt="http://localhost:5173/"/>
            <div>
           <h3>name:{item.name}</h3>
           <p>status:{item.status}</p>
           <p>species:{item.species}</p>
           <p>gender:{item.gender}</p>
           <p>origin:{item.origin.name}</p> 
           <p>location:{item.location.name}</p>
           <li key={index}>
        </li>
        </div>
        </div>
       ))}   
    <footer
    </ul>
    </>
   );
} 