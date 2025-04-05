import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import GiftGrid from "./GiftGrid";

const GifExpertApp = () => {
  const [categorias, setcategoria] = useState([]);

  return (
    <>
      <h1 className="fw-bold " style={{ color: "#c481f1" }}>
        GiftExpertApp
      </h1>
      <AddCategory setCategories={setcategoria} categorias={categorias} />
      <hr />

      {categorias.map((category, index) => (
        <div>
          <GiftGrid key={category} category={category} />
        </div>
      ))}
    </>
  );
};

export default GifExpertApp;
