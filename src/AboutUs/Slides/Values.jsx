import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './values.css'; // Assuming you have your styles in this file
import slide_image_1 from '../../images/home/user-five.png';
import slide_image_2 from '../../images/home/user-five.png';
import slide_image_3 from '../../images/home/user-five.png';


const Values = () => {
  // Data for the sections
  const sections = [
    {
      id: 1,
      title: 'Great people over complex processes',
      content: 'We believe that the better people we have, the fewer processes we need. Some rules help us move faster and avoid mistakes, but realise that most processes quickly become outdated. We empower our teams with the freedom to make decisions — keeping bureaucracy to a minimum.',
      imageUrl: slide_image_1
    },
    {
      id: 2,
      title: 'We challenge each other but mean well',
      content: 'The best solutions are found through intense but respectful debate. Seek out people that can prove your argument wrong, not simply confirm your beliefs. Great ideas can come from anyone, regardless of their title. Give honest feedback to help people grow, but make sure they know you’re on their side.',
      imageUrl: slide_image_2
    },
    {
      id: 3,
      title: 'Customer first',
      content: "We’re missionaries, not mercenaries. We optimise for a positive impact on the world, not profits or personal gains next quarter. That means always starting from a customer's needs and working backwards to solutions.",
      imageUrl: slide_image_3
    },
    {
        id: 4,
        title: 'Extreme pragmatism',
        content: "We discard most opportunities to focus on what matters. Not everything should be AB tested, so we balance common sense and data to make the right decisions. We don’t fool ourselves that we’re perfect and consider critical feedback seriously.",
        imageUrl: slide_image_3
      },
      {
        id: 5,
        title: 'Work hard. Work smart.',
        content: " To solve large challenges with modest resources, working smart isn’t enough. Our people take pride in pushing themselves to achieve extraordinary things but know their true limits and when to take a break. We never put in hours just for the sake of hours. What matters is impact, and if you find a shortcut to success, go for it!",
        imageUrl: slide_image_3
      },


  ];

  return (
    <div className='value-wrapper'>
          <div className='values-notes'>
            <h1>What makes us — us.</h1>
            <p>We want to work with collaborative and pragmatic people who enjoy seeing and helping those around them succeed.</p>
        </div>
    <div className="value-container">
      
      <Swiper
        spaceBetween={50} // Adjusts space between sections
        slidesPerView={1} // One section per view
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination (dots)
        modules={[Navigation, Pagination]} // Include Navigation and Pagination modules
        className="mySwiper"
      >
        {sections.map((section) => (
          <SwiperSlide key={section.id}>
            <div className="section">
              <div className="image-text-container">
                <div className='section-image-cover'>
                <img src={section.imageUrl} alt={section.title} className="section-image" />
                </div>
                <div className="text-content">
                    <h3>Our Values</h3>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Values;
