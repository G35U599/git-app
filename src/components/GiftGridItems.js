import React from "react";

export const GiftGridItems = ({ id, title, url }) => {
  /* console.log({ id, title, url }); */
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="card animate__animated animate__backInLeft mx-auto my-3 border-thin border-primary"
          style={{ background: "#393e78" }}
        >
          <img src={url} alt={title} style={{ height: "300px" }} />
          <p className="text-center mt-3" style={{ color: "#ffabff" }}>
            {title}
          </p>
        </div>
      </div>
    </>
  );
};
