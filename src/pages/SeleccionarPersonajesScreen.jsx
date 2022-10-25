import React, { useContext, useEffect, useState } from "react";
import { ModalComponent } from "../components/ModalComponent";
import { CharactersContext } from "../context/CharactersContext";

export const SeleccionarPersonajesScreen = () => {
  const { baseURI, characters } = useContext(CharactersContext);
  const [charactersId, setCharactersId] = useState([])
  const [charactersSelected, setCharactersSelected] = useState([]);
  const [open, setOpen] = useState({open:false})

  let newCharacter = [];

  const seleccionarTodos = async(e) => {
    for (let index = 0; index < e.target.form.length; index++) {
      if(e.target.form[index].type === 'checkbox'){
          if(e.target.checked === true){
            e.target.form[index].checked = true
            if(characters[index] !== undefined){
              newCharacter.push(characters[index])
            }
          }
          if(e.target.checked === false){
            e.target.form[index].checked = false
          }
        }
      }
      setCharactersSelected(newCharacter)
  }

  const handleCheck = (e, id) => {
    if (e === true) {
      setCharactersId([...charactersId, id]);
    } 
    if(e === false) {
      newCharacter = charactersSelected.filter(
        (character) => character.id !== id
      )
      setCharactersSelected(newCharacter)
    }
  };

  // Se utiliza el useEffect para la seleccion individual.
  useEffect(() => {
    if(charactersId.length !== 0) {
      charactersId.forEach((character)=>{
        fetch(baseURI + '/character/' + character).then(e=>e.json()).then(e=>setCharactersSelected([...charactersSelected,e]))
      })
    }
    return () => {}
  }, [charactersId])


  return (
    <form>
      <div className="d-flex align-items-center m-4 justify-content-between">
        <div>
          <input type="checkbox" onClick={(e)=>seleccionarTodos(e)}/>
          <label className="p-2">
            Seleccionar Todos
          </label>
        </div>
        <input type='button' className="btn btn-success" disabled={charactersId.length !== 0 || charactersSelected.length !== 0 ? false : true} onClick={()=>setOpen({open:true})} value="Ver personajes seleccionados" />
      </div>
      {characters.map((character, i) => (
        <div className="m-2" style={{ height: "160px" }} key={i}>
          <input
            type="checkbox"
            className="m-3"
            onChange={(e) => handleCheck(e.target.checked, character.id)}
          />
          <img style={{ width: "160px" }} src={character.image} alt="" />
          <span className="m-3">
            <strong>{character.name}</strong>
          </span>
        </div>
      ))}
      {
        <ModalComponent open={open} setOpenModal={setOpen} seleccionarPersonajes={true} charactersSelected={charactersSelected} charactersId={charactersId} />
      }
    </form>
  );
};
