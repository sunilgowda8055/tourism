import React from "react";
import img from "../../image/something-lost.png";

function Error() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={img} alt="img" />
        <h1>Oops, looks like the page is lost.</h1>
        <h5>This is not a fault, just an accident that was not intentional.</h5>
      </div>
    </>
  );
}

export default Error;
