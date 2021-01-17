/* eslint-disable no-restricted-globals */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "swiper/components/mousewheel/mousewheel.scss";
 
import backimg from "../../static/images/backimg.png"
 

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";
 

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const Swipermouse = (props) => {
  return (
    <main>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        direction="vertical"
        spaceBetween={0}
        speed={520}
        sensitivity={12}
        mousewheel={true}
        onSlideChange={(swiper) =>  props.setIndexback(swiper.activeIndex)}
        // ={(swiper) => setActiveIndex(swiper.activeIndex.toString())}
        // onSwiper={(swiper) => console.log("")}
        // scrollbar={{ draggable: true }}
        // pagination={{ clickable: true }}
        style={{ height: "100vh", marginTop: "0px" , zIndex: '9'  }}
      >
        <SwiperSlide className="slide_item one_i  ">
             <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
       <h5 className="tpx-one-desc">A webstore with serverside renderering and admin panel to add products.</h5>

        </SwiperSlide>
        {/* <SwiperSlide className="slide_item three">           
        
         <Slidesmain imagewatch={woman} contain/>
</SwiperSlide> */}
        <SwiperSlide className="slide_item two_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
            <h5 className="tpx-two-desc">
              Schedule made with excel display and sorted in reactapp for clients readability.
              Takes care of variation in numbers , mulitpliple rides and details updated daily.
            </h5>
        </SwiperSlide>

        <SwiperSlide className="slide_item three_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
             <h5 className="tpx-three-desc">
              This is an application of Maximilian Schwarzmüller.
              I have completed all his courses by that way i am keeping my  coding style coherent to his.
            </h5>
        </SwiperSlide>
         
        <SwiperSlide className="slide_item four_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
            <h5 className="tpx-four-desc">
              A different style with bootstrap. 
              Gives the users opportunity to create profiles, share experiences and collaberate.
              ! This is a course app. Altough i can assure you, there is not a single line of code unkown for me.
            </h5>
        </SwiperSlide>
            <SwiperSlide className="slide_item five_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
            <h5 className="tpx-four-desc">
            Still ongoing project.
            Products and shop api are ready to be integredated with the frontend.
            Front end design, includes filters and based on color price or name.
            Makes use of the mongoose querries.
            Coming soon..
            </h5>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Swipermouse;
