import React from "react";

export const CardComponent = ({ characters, setOpenModal }) => {
  const handleOnClick = (e, id) => {
    e.preventDefault();
    setOpenModal({open:e.isTrusted, id: id});
  };

  return (
    <>
      {characters.map((character) => (
        <div className="card m-5 shadow" style={{ width: "16rem" }} key={character.id}>
          <img src={character.image} className="card-img-top" alt="" />
          <div className="card-body p-2 pt-3 pb-2">
            <h5 className="card-title"> {character.name} </h5>
          </div>
          <a
            className="btn btn-success rounded-0 rounded-bottom"
            onClick={(e)=>handleOnClick(e,character.id)}
          >
            ver más
          </a>
        </div>
      ))}
    </>
  );
};
