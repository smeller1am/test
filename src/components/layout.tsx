import Heading from "./heading";
import GeneralSlider from "./generalSlider";
import Overlay from "./overlay";
import {useEffect, useState} from "react";

function Layout() {
    const [activeSlide, setActiveSlide] = useState<number>(1)
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="container">
            <div className="wrapper">
                <Heading/>
                <Overlay isMobile={isMobile} active={activeSlide} setActive={setActiveSlide}/>
                <GeneralSlider isMobile={isMobile} active={activeSlide} setActive={setActiveSlide}/>
            </div>
        </div>
    );
}

export default Layout;
