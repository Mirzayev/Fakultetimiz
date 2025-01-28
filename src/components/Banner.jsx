import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import tatu2 from "../assets/images/Tatu2.jpg";
import tatu1 from '../assets/images/Tatu3.jpg'
import tatu4 from '../assets/images/Tatu4.jpg'
import tatu6 from '../assets/images/Tatu6.jpg'

export default function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quae!",
            description: "Temurbek Mirzayev",
            background: tatu2,
        },
        {
            title: "Discover the opportunities at TATU for your bright future.",
            description: "Empowering the next generation of leaders.",
            background: tatu1,
        },
        {
            title: "Advancing technology, shaping tomorrow.",
            description: "Innovating education for the digital age.",
            background: tatu4,
        },
        {
            title: "Experience excellence at TATU.",
            description: "Pioneering breakthroughs in technology.",
            background: tatu6,
        },
    ];

    return (
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full flex items-center justify-center text-center"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Content */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                            <div className="relative z-10 max-w-xl p-8 text-white">
                                <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-sm md:text-lg">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === activeIndex ? "bg-white" : "bg-gray-500/50"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
