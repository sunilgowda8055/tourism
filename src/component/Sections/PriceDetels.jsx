import React from "react";
import { Data } from "../data";
import { Heart } from "react-bootstrap-icons";
function PriceDetels() {
  return (
    <div className="container">
      <div className=" text-center m-5">
        <h1>Heavenly Journeys</h1>
        <p>Experience Blissful Travels with Tour Crown's Heavenly Packages.</p>
      </div>
      <div className="row">
        {Data.map((e) => {
          return (
            <div
              key={e.id}
              className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
            >
              <li>
                <div
                  className="card  text-white m-2"
                  style={{ height: "26rem", overflow: "hidden" }}
                >
                  <img
                    src={e.image}
                    className="card-img "
                    style={{ height: "200px" }}
                    alt={e.title}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make
                    </p>
                    <p>{e.place}</p>
                    <div className="d-flex flex-row justify-content-between">
                      <p to="#" className="btn btn-primary  opacity-75">
                        Request book
                      </p>
                      <p className="btn btn-warning  opacity-50">
                        <Heart color="red" size="20" />
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PriceDetels;
