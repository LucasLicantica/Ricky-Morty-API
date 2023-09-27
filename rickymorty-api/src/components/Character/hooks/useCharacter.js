


export function useCharacter() {
    const [ allCharacter, setCharacter]= useState([]);
    const getAllCharacter = () => {
       const data = fetch("https://rickandmortyapi.com/api/character")
       .then((res) => res.json())
       .then((data) => setCharacter(data.results));
     return data;
   }
   
   return{
       getAllCharacter,
       allCharacter
   }

}