import React, { useState } from "react";
import capitalizarPalabras from "../helpers/Capitalizador";
// import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, categorias }) => {
  const [inputValue, setinputValue] = useState("");
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("Introduce datos validos");
      setinputValue("");
    } else if (categorias.includes(capitalizarPalabras(inputValue))) {
      alert(
        `el criterio de búsqueda ${capitalizarPalabras(
          inputValue
        )} ya esta en el stack`
      );
      setinputValue("");
    } else if (/\d/.test(inputValue)) {
      alert("No se permiten números en este campo.");
      setinputValue("");
    } else {
      setCategories([capitalizarPalabras(inputValue)]);
      setinputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex">
        <div className="input-group flex input-gift">
          <input
            type="text"
            name="teto"
            value={inputValue}
            onChange={handleChange}
            placeholder="Escribe aqui..."
            autoComplete="off"
            className="form-control"
            style={{
              background: "#ffabff",
              border: "1px solid #393e78",
            }}
          />
          <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>
        {/*  <button type="submit" className="btn btn-primary mx-2">
          <i className="bi bi-plus-circle"></i>
        </button> */}
      </form>
    </>
  );
}; /* AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categorias: PropTypes.func.isRequired,
};
 */
