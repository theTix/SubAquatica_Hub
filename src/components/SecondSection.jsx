import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import "../styles/second-section.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { offersAll } from '../data/offers.js';
import { motion } from 'framer-motion';


const SecondSection = () => {
    const [ slidesPerView, setSlidesPerView ] = useState(3);
    const [ paragraphContent, setParagraphContent ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 850) {
                setSlidesPerView(1);
            } else if(window.innerWidth < 1250) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showContent = (offerId) => {
        setParagraphContent(offerId === paragraphContent ? null : offerId)
    }

  return (
    <motion.div 
        className='section--two' 
        id='section--two--offers'
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
    >
         <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                offersAll.map((offer) => (
                    <SwiperSlide key={offer.id}>
                        <div 
                            className={`card--content ${paragraphContent === offer.id ? 'selected' : ''}`}
                            onClick={() => showContent(offer.id)}
                        >
                            <img src={offer.img} alt={offer.title} />
                            <h2>{offer.title}</h2>
                            <p style={{ display: paragraphContent === offer.id ? 'block' : 'none' }}>{offer.content}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </motion.div>
  )
}

export default SecondSection;