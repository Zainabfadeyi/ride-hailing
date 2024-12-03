"use client";
import React, { useState } from "react";
// import { SideWrapper } from "../../shared/wrapper";
import {
  UsersContainer,
  UserCardsContainer,
  UserCard,
  UserInfo,
} from "./style";


import USERONE from "../../images/home/doorstep.jpg";
import USERTWO from "../../images/home/user-two.png";
import USERFOUR from "../../images/home/uber.jpg";
import USERFIVE from "../../images/home/user-five.png";
import USERSIX from "../../images/home/rental.jpg";
import USERSEVEN from "../../images/assets/hero.webp";


import { cardVariants, infoVariants } from "./variants";
import TestimonialSlide from "./shared/TestimonialSlide";

// import TestimonialSlide from "../shared/testimonial-slides";

export const TESTIMONIALS = [
  {
    image: USERONE,
    name: "Amanda Mitchell",
    testimonial: 
    "QuickLift has made getting my food delivered so much easier! The service is fast and reliable, and the drivers are always polite. I love how I can track my delivery in real-time, and my meals always arrive hot and fresh. Highly recommend for anyone looking for a hassle-free delivery experience!"
},
  {
    image: USERTWO,
    name: "Michael Smith",
    testimonial:
    "I used QuickLift during a trip to a new city, and it was a lifesaver! The app was easy to navigate, and I felt safe the entire time. The driver arrived quickly, and the vehicle was clean and comfortable. I highly recommend this app to anyone!"
  },
  
  {
    image: USERFOUR,
    name: "Michael Brown",
    testimonial:
    "As a driver, QuickLift has been a game-changer for me. Their cars are well-maintained, reliable, and comfortable, making it easy for me to offer a great experience to my passengers. I’m thankful for the support and quality service QuickLift provides, and it’s helped me grow my business as an Uber driver!"
},
  {
    image: USERFIVE,
    name: "Emily Davis",
    testimonial:
    "As a frequent traveler, I rely on QuickLift to get me where I need to go. The app is incredibly intuitive, and I love how I can track my driver in real-time. The experience is always smooth, and I’ve never had any problems with the rides. Definitely a 5-star service!"
  },
  {
    image: USERSIX,
    name: "David Johnson",
    testimonial:
    "I was initially skeptical about renting a scooter, but QuickLift made it so easy and fun! The scooters are in great condition, and I love how convenient they are for zipping around the city. It’s a fast, eco-friendly way to get around, and I’ll definitely be using it again!"
},
  {
    image: USERSEVEN,
    name: "Sarah A",
    testimonial:
  "What I love about QuickLift is the flexibility. Whether I need a quick ride across town or a longer trip to the airport, I can count on them to get me there on time. The drivers are courteous, and the rides are affordable. It’s made my life so much easier!"
  },
];


const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(TESTIMONIALS[0].name);

  const handleHover = (item) => {
    setActiveItem(item);
  };

  return (
    <article role="main">

      <div>
        <section aria-labelledby="user-testimonial">
          <UsersContainer>
            <p className="slide-heading">What Our Users Say</p>
            <UserCardsContainer>
              {TESTIMONIALS.map((item) => (
                <UserCard
                  variants={cardVariants}
                  animate={activeItem === item.name ? "hover" : "initial"}
                  onHoverStart={() => handleHover(item.name)}
                  key={item.name}
                >
                 <img 
                    src={item.image} // Make sure `item.image` contains the correct image URL or import reference.
                    alt={item.name}
                    width={item.image.width} // Ensure the `item.image.width` is a valid number or provide a default value.
                    height={item.image.height} // Ensure the `item.image.height` is a valid number or provide a default value.
                    />

                  <UserInfo
                    variants={infoVariants}
                    animate={activeItem === item.name ? "hover" : "initial"}
                  >
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.testimonial}</p>
                    </div>
                  </UserInfo>
                </UserCard>
              ))}
            </UserCardsContainer>
            <TestimonialSlide />
          </UsersContainer>
        </section>
      </div>
    </article>
  );
};

export default Testimonials;
