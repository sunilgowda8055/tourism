// import React, { useRef, useState } from "react";
// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import SwipetCardsection from "./swiper/SwipetCardsection";

function swiper() {
  return (
    <div className="swiper-modul">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -100,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwipetCardsection
            alt="somthing"
            img="https://images.unsplash.com/photo-1524613032530-449a5d94c285?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="somt"
            img="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img2"
            img="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vc3QlMjB2aXN1YXRpYWJsZSUyMHBsYWNlfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img2"
            img="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vc3QlMjB2aXN1YXRpYWJsZSUyMHBsYWNlfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img4"
            img="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vc3QlMjB2aXN1YXRpYWJsZSUyMHBsYWNlfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img9"
            img="https://images.unsplash.com/photo-1646052962044-73d0f5b5a18f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxtb3N0JTIwdmlzdWF0aWFibGUlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img5"
            img="https://images.unsplash.com/photo-1616166831783-f239fea49bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxtb3N0JTIwdmlzdWF0aWFibGUlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img7"
            img="https://images.unsplash.com/photo-1592345279419-959d784e8aad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxtb3N0JTIwdmlzdWF0aWFibGUlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img8"
            img="https://images.unsplash.com/photo-1523544261025-3159599b1fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vc3QlMjB2aXNpdGFibGUlMjBwbGFjZXMlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipetCardsection
            alt="img8"
            img="https://images.unsplash.com/photo-1523544261025-3159599b1fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vc3QlMjB2aXNpdGFibGUlMjBwbGFjZXMlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default swiper;
