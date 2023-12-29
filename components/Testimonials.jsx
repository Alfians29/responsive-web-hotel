'use client';

// swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper modules
import { Pagination } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// components
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const testimonialData = [
  {
    img: '/testimonials/img-1.png',
    message:
      'Mauris in dignissim tortor, ut auctor turpis. Phasellus sagittis viverra velit, vel pellentesque odio luctus sit amet. Aenean nulla neque, tempor ac dui ut, volutpat ultrices elit. Vestibulum elementum pulvinar laoreet. Aliquam ullamcorper, ligula non interdum eleifend, tortor velit posuere nunc, id hendrerit massa orci lacinia velit. Nulla facilisi. Nunc tristique felis, sagittis interdum sodales. In malesuada felis mauris, sagittis lobortis risus accumsan non.',
    personName: 'Trafalgar Law',
    location: 'Indonesia',
  },
  {
    img: '/testimonials/img-2.png',
    message:
      'Donec ac neque vel ex vehicula molestie ut ut tellus. Aliquam erat volutpat. Duis pretium faucibus sapien, eget dapibus sem interdum in. Donec neque justo, faucibus hendrerit neque in, aliquam finibus lorem. Suspendisse nec massa viverra, viverra sem ac, congue diam. In venenatis, augue in sollicitudin volutpat, urna ipsum accumsan justo, quis semper tortor orci eget lorem. Sed vitae fermentum eros. Fusce a accumsan erat, a bibendum erat.',
    personName: 'Portgas D. Ace',
    location: 'Greece',
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='bg-soft_green xl:h-[880px]'
    >
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='container mx-auto'
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className='xl:h-[680px] overflow-hidden'
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt=''
                    className='hidden xl:flex'
                  />
                  <div className='flex-1 bg-white/20 text-white p-12'>
                    <p className='text-lg leading-9 mb-8'>{slide.message}</p>
                    <p className='text-xl font-bold'>{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
