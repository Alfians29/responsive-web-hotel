'use client';

// swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper modules
import { Autoplay } from 'swiper/modules';

// swiper styles
import 'swiper/css';

// components
import { Button } from './ui/button';
import Image from 'next/image';

const recommendationData = [
  {
    name: 'Crystal Haven Inn',
    Image: '/recommendation/hotel-1.png',
    location: 'Barcelona, Spain',
    desc: 'Mauris pharetra et ultrices neque ornare aenean euismod elementum. Mauris commodo quis imperdiet massa tincidunt. Tortor at risus viverra adipiscing at in tellus.',
    price: 425,
    testimonial: {
      message:
        'Sodales neque sodales ut etiam sit amet nisl purus. Condimentum mattis pellentesque id nibh tortor id. Lectus quam id leo in vitae turpis massa.',
      personName: 'Vinsmoke Sanji',
    },
  },
  {
    name: 'Sunset Oasis Resort',
    Image: '/recommendation/hotel-2.png',
    location: 'Bali, Indonesia',
    desc: 'Ac turpis egestas maecenas pharetra convallis posuere. Turpis massa sed elementum tempus egestas sed. Enim sit amet venenatis urna cursus eget. Velit egestas dui id ornare.',
    price: 350,
    testimonial: {
      message:
        'Rhoncus est pellentesque elit ullamcorper dignissim. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Vitae turpis massa sed elementum.',
      personName: 'Monkey D. Luffy',
    },
  },
  {
    name: 'Serenity Suites Retreat',
    Image: '/recommendation/hotel-3.png',
    location: 'Cape Town, South Africa',
    desc: 'Volutpat ac tincidunt vitae semper quis. Purus ut faucibus pulvinar elementum integer. Nisl suscipit adipiscing bibendum est ultricies. Enim nunc faucibus a pellentesque sit amet.',
    price: 275,
    testimonial: {
      message:
        'Leo vel fringilla est ullamcorper eget nulla facilisi. Pellentesque massa placerat duis ultricies lacus sed turpis. Nulla facilisi eu facilisis sed odio morbi.',
      personName: 'Roronoa Zoro',
    },
  },
];

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative'
    >
      {/* slider */}
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0'>
                  {/* text */}
                  <div className='max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0'>
                    <h2 className='h2 mb-4'>{hotel.name}</h2>
                    <p className='text-soft_green text-sm mb-6'>{hotel.location}</p>
                    <p className='mb-[60px]'>{hotel.desc}</p>
                    <div className='flex items-center gap-x-[50px]'>
                      <Button variant='accent' className='px-[44px]'>
                        Book Now
                      </Button>
                      <div className='text-black'>
                        <span className='font-bold text-2xl'>${hotel.price}</span>
                        <span className='text-sm'>/Night</span>
                      </div>
                    </div>
                  </div>
                  {/* image & testimonial */}
                  <div className='order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]'>
                    <div>
                      <Image
                        src={hotel.Image}
                        width={905}
                        height={528}
                        quality={100}
                        alt=''
                        className='xl:rounded-tl-[20px] xl:rounded-bl-[20px]'
                      />
                      <div className='bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10'>
                        <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>
                          {hotel.testimonial.message}
                        </p>
                        <p className='text-xl font-bold'>{hotel.testimonial.personName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      {/* pattern */}
      <Image
        src={'/recommendation/pattern.svg'}
        width={240}
        height={240}
        alt=''
        className='hidden xl:flex absolute left-[135px] -bottom-[120px]'
      />
    </motion.section>
  );
};

export default Recommendation;
