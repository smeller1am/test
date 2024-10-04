import {Navigation, Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderProps {
    el: {
        name: string,
        text: string
    }[]
    isMobile: boolean
}

function Slider(props: SliderProps) {
    const {isMobile, el} = props
    return (
        <div className='slider'>
            {/*<GeneralSliderActions />*/}
            <div className="slider__arrows">
                <div className="slider__arrows-prev">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2"/>
                    </svg>
                </div>
                <div className="slider__arrows-next">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2"/>
                    </svg>

                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={80}
                slidesPerView={3}
                direction={"horizontal"}
                navigation={!isMobile ? {
                    nextEl: '.slider__arrows-next',
                    prevEl:
                        '.slider__arrows-prev'
                } : false}
                breakpoints={{
                    992: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                    }
                }}
                pagination={
                    !isMobile
                        ? {
                            type: 'fraction',
                            el: '.slider__pagination',
                        }
                        : {
                            type: 'bullets',
                        }
                }
                onSwiper={
                    (swiper: any) => console.log(swiper)
                }
                onSlideChange={
                    () => console.log('slide change')
                }
            >
                {
                    Object.values(el).map((el) => (
                        <SwiperSlide className="slider__slide">
                            <p className="slider__title">{el.name} </p>
                            <p className="slider__text">{el.text}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
        ;
}

export default Slider

