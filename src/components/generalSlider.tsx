import {EffectFade, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperProps, SwiperRef, SwiperSlide} from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import Slider from "./slider";
import {useEffect, useRef} from "react";
import {type Swiper as SwiperClass} from "swiper/types";



const sliderMock = [
    [
        {
            name: "2015",
            text: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        },
        {
            name: "2016",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2017",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
        {
            name: "2017",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
    ],
    [
        {
            name: "2010",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2011",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deserunt doloribus error est"
        },
        {
            name: "2012",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
        {
            name: "2013",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
    ],
    [
        {
            name: "2014",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
        {
            name: "2015",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2016",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2017",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
    ],
    [
        {
            name: "2014",
            text: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        },
        {
            name: "2015",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2016",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
        {
            name: "2017",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
    ],
    [
        {
            name: "2014",
            text: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        },
        {
            name: "2015",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2016",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
        {
            name: "2017",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
    ],
    [
        {
            name: "2014",
            text: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        },
        {
            name: "2015",
            text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
        },
        {
            name: "2016",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
        {
            name: "2017",
            text: "ТКомпания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
        },
    ],

]

interface GeneralSliderProps {
    active: number
    setActive: (arg: number) => void
    isMobile: boolean
}


function GeneralSlider(props: GeneralSliderProps) {
    const {active, setActive, isMobile} = props
    console.log('isMobile', isMobile)
    const swiperRef = useRef<SwiperType | null>(null);
    useEffect(() => {
        swiperRef.current?.swiper.slideTo(active -  1);
    }, [active]);
    return (
        <div className='generalSlider'>
            <div className="generalSlider__actions">
                <div className="generalSlider__pagination"></div>
                <div className="generalSlider__arrows">
                    <div className="generalSlider__arrows-prev">
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <div className="generalSlider__arrows-next">
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    direction={"horizontal"}
                    simulateTouch={false}
                    allowTouchMove={false}
                    effect={'fade'}
                    _slideClass={'generalSlider__slide'}
                    speed={1000}
                    modules={[Navigation, EffectFade, Pagination]}
                    onSlideChange={(e: SwiperClass) => {
                        setActive(e.activeIndex + 1)
                    }}
                    navigation={{
                        nextEl: '.generalSlider__arrows-next',
                        prevEl: '.generalSlider__arrows-prev'
                    }}
                    pagination={{
                        el: '.generalSlider__pagination',
                        type: 'fraction',
                        formatFractionCurrent: (el: string) => ('0' + (+el)),
                        formatFractionTotal: (el: string) => ('0' + (+el))
                    }}
                >
                    {sliderMock.map((el) => (
                        <SwiperSlide className="generalSlider__slide">
                            <Slider isMobile={isMobile} el={el} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
        ;
}

export default GeneralSlider

