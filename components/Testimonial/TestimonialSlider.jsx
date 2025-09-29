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
    name: "Megatecnologia S.A.S",
    location: "Cali",
    image: "/image/mega.jpg",
  },  
  {
    quote: "Excelente servicio y calidad",
    name: "Vitalmedica S.A.S",
    location: "Cali",
    image: "/image/vitalmedical.jpg",
  },  
    {
    quote: "Excelente servicio y calidad",
    name: "Mueses ascesoria y consultoria en calidad",
    location: "Pasto",
    image: "/image/mueses.png",
  },  
      {
    quote: "Excelente servicio y calidad",
    name: "Lavrestak",
    location: "Guayaquil, Ecuador",
    image: "/image/labrestak.jpg",
  },  
        {
    quote: "Excelente servicio y calidad",
    name: "Atzilut S.A.S",
    location: "Quito, Ecuador",
    image: "/image/atzilut.jpg",
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