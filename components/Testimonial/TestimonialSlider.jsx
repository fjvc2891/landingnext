import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote: "Muy buen servicio, recomendado",
    name: "Tecnoquimicas",
    location: "Pasto",
    image: "/image/user.jpg",
  },
  {
    quote: "Excelente servicio y calidad",
    name: "Empresa",
    location: "Bogotá",
    image: "/image/user2.jpg",
  },
  {
    quote: "Innovación en cada producto",
    name: "Empresa",
    location: "Medellín",
    image: "/image/user3.jpg",
  },
];

const TestimonialSlider = ({ pagination }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        pagination={pagination}
        modules={[Pagination]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;