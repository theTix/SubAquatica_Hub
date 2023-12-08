import React from 'react';
import '../styles/third-section.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { reviews } from '../data/reviews.js';
import StarRating from './StarRating.jsx';
import seaHorse from "../assets/sea-horse2.png";
import { motion } from 'framer-motion';

const ThirdSection = () => {
  return (
    <div className='section--three' id='reviews'>
        <div className="section--three--title">
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                Reviews
            </motion.h2>
        </div>
        <motion.div 
            className="section--three--text"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
        >
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="section--three--slide">
                                <div className="section--three--rating">
                                    <h3 className='section--three--name'>{review.name}</h3>
                                    <StarRating rating={review.stars} />
                                </div>
                                <p className='section--three--comment'>{review.content}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <img className='section--three--background--img' src={seaHorse} alt="" />
        </motion.div>
    </div>
  )
}

export default ThirdSection