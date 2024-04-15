import React from "react";

function SwipetCardsection({ alt, img }) {
  return (
    <div>
      <div className=" container">
        <div className="row">
          <div className="col col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <div className="card rounded-4 swiper-card">
              <img
                alt={alt}
                src={img}
                height="70%"
                width="100%"
                className="rounded-top-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwipetCardsection;
