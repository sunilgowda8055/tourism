import React from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";

function Scroll() {
  return (
    <div>
      <div id="scroll" className="container mt-5">
        <div className="card  border rounded-5 p-4">
          {/* <h1 className="text-center">most visiting places</h1> */}
          <div className="d-flex  justify-content-end icons">
            <span>
              <ArrowLeftCircle size={30} color="red" />
            </span>
            <span>
              <ArrowRightCircle size={30} color="red" />
            </span>
          </div>
          <div className="row">
            <div className="col-12 col-sm col-md-3 col-lg-6 d-none d-md-block">
              <img
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTN-WOd6aYoo1Jb3fCFJy2t_uenLxAkqy3ebEu9qOl4sFhxNCFmSZs_yVoM2m6n1aIVTYhuerkwZzYrADHop9Npub63owcVlDXQJoWKQw"
                alt="som"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              />
            </div>
            <div className="col-12 col-sm col-md-6 col-lg-6">
              <div className="text-center">
                <h1>Lakshadweep</h1>
                <h5 className="text-light">
                  Lakshadweep Union territory of India
                </h5>
                <p className="text-light text-start p-3">
                  The name Lakshadweep means "one lakh islands" (Lakṣadvīpa; one
                  hundred thousand islands) in Malayalam and Sanskrit, though
                  the Lakshadweep Islands (previously known as Laccadive
                  Islands) are just one part of the archipelago of no more than
                  a hundred islands. Jeseri is the primary as well as the widely
                  spoken native language in the territory.[5][6] The islands
                  form the smallest union territory of India and their total
                  surface area is approximately 32 km2 (12 sq mi).
                </p>
                {/* <img
                src="https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Scroll;
