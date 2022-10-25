import React, { useContext, useState } from "react";
import { CardComponent } from "../components/CardComponent";
import { ModalComponent } from "../components/ModalComponent";
import { CharactersContext } from "../context/CharactersContext";

export const HomeScreen = () => {
  const { baseURI, characters, pagination, setPagination } = useContext(CharactersContext);

  const [openModal, setOpenModal] = useState({ open: false, id: "" });

  const handlePagination = (e) => {
    if(e.target.outerText === 'Next'){
      pagination >= 1 && pagination < 32 && setPagination(pagination + 1);
    }else{
      pagination > 1 && pagination <= 32 && setPagination(pagination - 1);
    }
  };
  return (
    <div className="">
      {characters.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-end space-around flex-wrap">
          <div className="pt-5 px-5 mx-5 no-seleccionable">
            <span style={{cursor:'pointer',padding:'4px 10px', margin:'0 5px', backgroundColor:'green', borderRadius:'15px', color:'white'}}onClick={handlePagination} >Previous</span> <span>1</span> <span>...</span>
            <span style={{backgroundColor:'green', padding:'4px 10px', borderRadius:'60px', color:'white', margin:'0 10px'}}>{pagination}</span>
            <span>...</span> <span>32</span> <span style={{cursor:'pointer',padding:'4px 10px', margin:'0 5px', backgroundColor:'green', borderRadius:'15px', color:'white'}} onClick={handlePagination}>Next</span>
          </div>
          <div className="d-flex justify-content-center space-around flex-wrap">
            <CardComponent
              characters={characters}
              setOpenModal={setOpenModal}
            />
          </div>
        </div>
      )}

      {openModal.open && (
        <ModalComponent
          baseURI={baseURI}
          open={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};
