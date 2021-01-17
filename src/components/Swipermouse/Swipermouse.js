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
        // style={{ height: "100vh", marginTop: "0px" , zIndex: '9'  }}
        className="main__swiper"
      >
        <SwiperSlide className="slide_item one_i  ">
             <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
             <div className="tpx-one-desc">
  <h5 >A webstore with serverside renderering and admin panel to add products.</h5>
             </div>
     

        </SwiperSlide>
        {/* <SwiperSlide className="slide_item three">           
        
         <Slidesmain imagewatch={woman} contain/>
</SwiperSlide> */}
        <SwiperSlide className="slide_item two_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
           <div className="tpx-two-desc">
            <h5 >
              Schedule made with excel display and sorted in reactapp for clients readability.
              Takes care of variation in numbers , mulitpliple rides and details updated daily.
            </h5></div>
        </SwiperSlide>

        <SwiperSlide className="slide_item three_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
            <div className="tpx-three-desc">
             <h5 >
              This is an application of Maximilian Schwarzmüller.
              I have completed all his courses by that way i am keeping my  coding style coherent to his.
            </h5>
            </div>
        </SwiperSlide>
         
        <SwiperSlide className="slide_item four_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
          <div className="tpx-four-desc">
         <h5 >
              A different style with bootstrap. 
              Gives the users opportunity to create profiles, share experiences and collaberate.
              ! This is a course app. Altough i can assure you, there is not a single line of code unkown for me.
            </h5>
          </div>
         
        </SwiperSlide>
                 
        <SwiperSlide className="slide_item ff_i">
          <div className="background-image_i">
            <img src={backimg} alt="bluebck"/>
          </div>
          <div className="tpx-ff-desc">
         <h5 >
            A shop in progress. 
            Back end api's are ready. 
            Continue styling....
            </h5>
          </div>
         
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Swipermouse;
