// Hero.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    image: 'https://i.ibb.co/HNJGHTG/download.jpg',
    title: 'For Everything',
    subtitle: 'and Everyone',
    description: 'This is a description for the first slide.',
  },
  {
    image: 'https://i.ibb.co/kQdXTqk/download.jpg',
    title: 'Second Slide Title',
    subtitle: 'Second Slide Subtitle',
    description: 'This is a description for the second slide.',
  },
  {
    image: 'https://i.ibb.co/CnhkX3t/download.jpg',
    title: 'Third Slide Title',
    subtitle: 'Third Slide Subtitle',
    description: 'This is a description for the third slide.',
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${slide.image})` }}
                role="img"
                aria-label={`${slide.title} - ${slide.subtitle}`}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 z-10">
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <h3 className="text-2xl mb-4">{slide.subtitle}</h3>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
