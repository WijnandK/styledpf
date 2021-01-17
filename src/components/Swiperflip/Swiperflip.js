import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,  EffectCoverflow, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Image from "../Image/Image";
 
// import sjvg from "../../static/images/sjvg.png";
  
    

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]);

const Swiperflip = (props) => {
  return (
    <Swiper 
       effect= 'coverflow'
      spaceBetween={0}
     
    
        centeredSlides={true}
         slidesPerView="auto"
        grabCursor={true}
        autoplay={{delay: 1600, disableOnInteraction: false}}
         //   pagination={{ clickable: true }}

    >
      <SwiperSlide className="swipe_item_a">
         <div className="swipe_item_image">
   <Image imageUrl={props.imageone}/>
         </div>
     

      </SwiperSlide> 
      <SwiperSlide className="swipe_item_b">
            <div className="swipe_item_image">
   <Image imageUrl={props.imagetwo}/>
         </div>
      
      </SwiperSlide>
      <SwiperSlide className="swipe_item_c">
            <div className="swipe_item_image">
    <Image imageUrl={props.imagethree}  />
         </div>
     
      </SwiperSlide>
      <SwiperSlide className="swipe_item_d">
           <Image imageUrl={props.imagefour}  />
      </SwiperSlide>
    

      <SwiperSlide className="swipe_item_f"> 
             <Image imageUrl={props.imagefive}  />
      </SwiperSlide>

      <SwiperSlide className="swipe_item_ff">
          <Image imageUrl={props.imagesix}  />
      </SwiperSlide>
       
     
     
    </Swiper>
  );
};

export default Swiperflip