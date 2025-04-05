import { GiftGridItems } from "./GiftGridItems";
import capitalizarPalabras from "../helpers/Capitalizador";
import { useFetchGift } from "../Hooks/useFetchGift";
const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGift(category);

  return (
    <>
      <hr />
      <p style={{ color: "white" }}>
        {loading ? (
          <>
            <h2
              className="text-center text-center card animate__animated animate__flipInX"
              style={{ color: "#00ffff" }}
            >
              Realizando la búsqueda de <i>"{capitalizarPalabras(category)}"</i>
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <div
                class="spinner-border  spinner-border-sm felx justfy-center"
                role="status"
                style={{
                  width: "3rem",
                  height: "3rem",
                  color: "#c481f1",
                }}
              >
                <span class="visually-hidden">Cargando...</span>
              </div>
            </div>
          </>
        ) : (
          <h2
            className="text-center card animate__animated animate__flipInX"
            style={{ color: "#00ffff" }}
          >
            Aquí tiene el resultado de la búsqueda de{" "}
            <i>"{capitalizarPalabras(category)}"</i>
          </h2>
        )}
      </p>
      <div className="container-fliuid">
        <div className="row">
          {images.map((img) => (
            <GiftGridItems {...img} key={img.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default GiftGrid;
