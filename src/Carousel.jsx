import Arrow from "./assets/right-arrow.svg";
import "./Carousel.css";
import { useState } from "react";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length-1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length-1 : slide - 1);
    }

    return (
        <>
        <img src={Arrow} className="arrow arrow-left" onClick={prevSlide}/>
        <div className="carousel">
            <div className="test" style={{ width: "100%", height: "100%", display: "flex", overflow:"hidden"}}>
            {data.map(url => (
                <img key={url} src={url.src} className="slide" style={{
                    translate: `${-100 * slide}%`}} />
            ))}
            </div>
            {/* {data.map((item, idx) => {
            return <img src={item.src} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
            })} */}
    
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button key={idx}
                    onClick={() => setSlide(idx)}
                    className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
        <img src={Arrow} className="arrow arrow-right" onClick={nextSlide}/>
        </>
    )
}
