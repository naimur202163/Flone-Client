import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { aboutData } from './AboutData';



const AboutSlider = () => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <div className="px-[1.3rem] md:px-[3rem] lg:px-[5rem] my-[4.8rem]">
            <Slider {...settings}>
                {aboutData.map(item => (
                    <div className="mx-auto items-center justify-center content-center">
                        <div className="flex justify-center">
                            <img className="p-[3rem] fill-cyan-500 hover:fill-cyan-700" src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>

        </div>

    );
};

export default AboutSlider;