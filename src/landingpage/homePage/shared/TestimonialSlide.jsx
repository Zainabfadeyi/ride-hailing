import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  SlideContainer,
  ImageWrapper,
  Content,
  Name,
  Testimonial,
  NavigationButton,
} from "./style"; // Ensure these styles are correct for your setup
import { variants } from "./variants";
import { TESTIMONIALS } from "../Testimonials";

const TestimonialSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(currentSlide === TESTIMONIALS.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(currentSlide === 0 ? TESTIMONIALS.length - 1 : currentSlide - 1);
  };

  return (
    <SlideContainer>
      <motion.div
        key={currentSlide}
        variants={variants}
        animate="animate"
        initial="initial"
        exit="exit"
        custom={direction}
      >
        <ImageWrapper>
          <img
            src={TESTIMONIALS[currentSlide].image}  // Use relative or absolute paths to the images if necessary
            alt={TESTIMONIALS[currentSlide].name}
            width={TESTIMONIALS[currentSlide].image.width}
            height={TESTIMONIALS[currentSlide].image.height}
          />
        </ImageWrapper>
        <Content>
          <div>
            <Name>{TESTIMONIALS[currentSlide].name}</Name>
            <Testimonial>{TESTIMONIALS[currentSlide].testimonial}</Testimonial>
          </div>
        </Content>
      </motion.div>

      <NavigationButton className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </NavigationButton>
      <NavigationButton className="next" onClick={nextSlide}>
        <FaChevronRight />
      </NavigationButton>
    </SlideContainer>
  );
};

export default TestimonialSlide;
