// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; 

// import slide_image_1 from '../../images/home/user-five.png';
// import slide_image_2 from '../../images/home/user-five.png';
// import slide_image_3 from '../../images/home/user-five.png';
// import slide_image_4 from '../../images/home/user-five.png';
// import slide_image_5 from '../../images/home/user-one.png';
// import slide_image_6 from '../../images/home/user-five.png';
// import slide_image_7 from '../../images/home/user-five.png';

// const PicSlides= () => {
//   return (
//     <div style={{backgroundColor:"white", height:"100vh"}} className="pic-container">
//       <h1 className="pic-heading">Bussiness Operations</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={6}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default PicSlides;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slides.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; 

import slide_image_1 from '../../images/slides/businessOperations1.webp';
import slide_image_2 from '../../images/slides/businessOperations0.webp';
import slide_image_3 from '../../images/slides/businessOperations2.webp';
import slide_image_4 from '../../images/slides/businessOperations3.webp';
import slide_image_5 from '../../images/slides/businessOperations5.webp';
import slide_image_6 from '../../images/slides/businessOperations7.webp';
import slide_image_7 from '../../images/slides/businessOperations6.webp';

const PicSlides = () => {
  // Array containing user data (image, name, role)
  const slidesData = [
    { image: slide_image_1, name: 'Emily Johnson', role: 'Operations Manager' },
    { image: slide_image_2, name: 'Jane Smith', role: 'Business Analyst' },
    { image: slide_image_3, name: 'Michael Brown', role: 'Chief Executive Officer' },
    { image: slide_image_4, name: 'John Doe', role: 'Marketing Specialist' },
    { image: slide_image_5, name: 'Chris Lee', role: 'Product Manager' },
    { image: slide_image_6, name: 'Sam White', role: 'Project Coordinator' },
    { image: slide_image_7, name: 'David Green', role: 'Sales Executive' },
  ];

  return (
    <div className="pic-container">
      <h1 className="pic-heading">Our Teams</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={6}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={`slide_image_${index}`} className="slide-image" />
              <div className="overlay-text">
                <h3>{slide.name}</h3>
                <p>{slide.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default PicSlides;
