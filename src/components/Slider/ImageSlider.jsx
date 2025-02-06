import '../Slider/css/slider.scss'
import { useEffect, useState } from 'react'

const ImageSlider = ({images}) => {

    const [current, setCurrent] = useState(0);

    const numSlides = images.length - 1;

    const handlePrev = () => {
        setCurrent(current - 1);
        if(current < 1)
            setCurrent(numSlides);
    }

    const handleNext = () => {
        setCurrent(current + 1)
        if(current === numSlides)
            setCurrent(0)
    }

    useEffect(() => {
        let slider = setInterval(() => {
          handleNext();
        }, 2000);
        return () => clearInterval(slider);
    }, [current]);

    // let interval;
    // let times = 0;

    // const autoSlider = () => {
    //     setAutoplay(!autoplay)
    //     if (!autoplay) {
    //         clearInterval(interval);
    //         // liberar nuestro inervalId de la variable
    //         interval = null;
    //     }

    //     interval = setInterval(()=>{
    //         times++;
    //         setCurrent(times)
    //         console.log('Current: ',current, times, numSlides)
    //         if(times === 10){
    //             times = 0;
    //             setCurrent(0)
    //         }
    //     }, 2000);
    // }

    return (
        <>
            <div className='slider'>
                <div className='button-left'>
                    <button onClick={handlePrev}>{`<<<`}</button>
                </div>
                <div className='container-slide'>
                    {
                        images.map((slide,index)=>(
                            <img className={`slide ${index === current ? 'current' : 'hide'} `} src={slide} key={index} /> 
                        ))
                    }
                </div>
                <div className='button-right'>
                    <button onClick={handleNext}>{`>>>`}</button>
                </div>
            </div>
            <div>
                <span>Slide {current + 1} </span>
                {/* <button onClick={autoSlider}>play</button> */}
            </div>
        </>
    )
}

export default ImageSlider