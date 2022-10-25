import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Fade } from "@mui/material";
import { CharactersContext } from "../context/CharactersContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "50vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const styleSelected = {
  display:'flex',
  flexDirection:'column',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export const ModalComponent = ({ ...props }) => {
  const [character, setCharacter] = useState([]);
  const {baseURI} = useContext(CharactersContext);
  useEffect(() => {
    if (!props.seleccionarPersonajes) {
      fetch(baseURI + "/character/" + props.open.id)
        .then((e) => e.json())
        .then((e) => setCharacter(e));
    }
    return () => {};
  }, [props.charactersId]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open.open}
      onClose={() => props.setOpenModal({open: false})}
      BackdropComponent={Backdrop}
    >
       { !props.seleccionarPersonajes ?
      <Fade in={props.open.open}>
       <Box sx={style} className="d-flex flex-row">
          <Typography
            id="transition-modal-title"
            variant="h6"
            className="w-100"
            component="h2"
          >
            <img
              src={character.image}
              alt=""
              className="w-100 h-100 object-cover"
              style={{ objectFit: "cover" }}
            />
          </Typography>
          <Box
            id="transition-modal-description"
            className="w-100 m-0 p-5"
            sx={{ mt: 2 }}
          >
            <h3>{character.name}</h3>
            <p>
              <span>
                {" "}
                <strong>Especie:</strong> {character.species}
              </span>
              <br />
              <span>
                {" "}
                <strong>Estado:</strong> {character.status}
              </span>
              <br />
              <span>
                {" "}
                <strong>Genero:</strong> {character.gender}
              </span>{" "}
            </p>
          </Box>
        </Box>
      </Fade>
        :
        <Fade in={props.open.open}>
            <Box sx={styleSelected} className="d-flex flex-column overflow-auto">
          {
            props.charactersSelected.map((character,i)=>(
              <Box
              id="transition-modal-description"
              key={i}
            >
                <img src={character.image} alt="" />
              </Box>
            ))
          }
        </Box>
      </Fade>

        }
    </Modal>
  );
};
