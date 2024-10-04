import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";

interface OverlayProps {
    active: number
    setActive: (arg: number) => void
    isMobile: boolean
}

const iconsMock = [1, 2, 3, 4, 5, 6]
const numberMock = [
    {
        start: 1990,
        end: 2000
    },
    {
        start: 2000,
        end: 2007
    },
    {
        start: 2007,
        end: 2009
    },
    {
        start: 2009,
        end: 2015
    },
    {
        start: 2015,
        end: 2019
    },
    {
        start: 2019,
        end: 2024
    },

]

function Overlay(props: OverlayProps) {
    const {active, setActive, isMobile} = props
    const [prev, setPrev] = useState(numberMock[active - 1].start)
    const [next, setNext] = useState(numberMock[active - 1].end)
    const prevNumberRef = useRef<number>();
    const nextNumberRef = useRef<number>();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isComplete, setIsComplete] = useState(true);


    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        }
    }, [isFirstLoad]);
    useGSAP(() => {
        gsap.to('.circle-container', {
            rotate: (360 - (360 / 6 * active)),
            onComplete: () => setIsComplete(true),
            onStart: () => setIsComplete(false)
        });
        setPrev(numberMock[active - 1].start)
        setNext(numberMock[active - 1].end)
        prevNumberRef.current = prev;
        nextNumberRef.current = next;
    }, [active]);

    return (

        <div className="overlay">
            {!isMobile && <div
                className={clsx("circle-container", `circle-container--${active}`, isComplete && 'circle-container--complete')}>
                {iconsMock.map((el) => (
                    <div className={clsx("icon", el === active && "active")} onClick={() => setActive(el)}>
                        <span>{el}<p>Наука</p></span></div>
                ))}
            </div>}

            <div className="overlay__left">
                <CountUp duration={isFirstLoad ? 0 : 1} separator='' end={prev} start={prevNumberRef.current}/>
            </div>
            <div className="overlay__right">
                <CountUp duration={isFirstLoad ? 0 : 1} separator='' end={next} start={nextNumberRef.current}/>
            </div>
        </div>
    );
}

export default Overlay;
