import React from "react";
import { Data } from "../data";
function PopularLoction() {
  return (
    <div className="bg-light p-5">
      <div className="container ">
        <div className="text-center">
          <h1>Popular Location To Explore</h1>
          <p>
            Explore Hidden Paradises with Tour Crown - Your Passport to
            Unforgettable Adventures.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {Data.map((e) => {
            return (
              <li key={e.id} className="popular-location-list-item">
                <div
                  class="card bg-dark text-white m-2 border-0 "
                  style={{ height: "20rem", overflow: "hidden" }}
                >
                  <img
                    src={e.image}
                    class="card-img "
                    style={{ opacity: 0.5, height: "100%" }}
                    alt={e.title}
                  />
                  <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h3>{e.place}</h3>
                    <span>{e.title}</span>
                    <h6>Last updated 3 mins ago</h6>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularLoction;
