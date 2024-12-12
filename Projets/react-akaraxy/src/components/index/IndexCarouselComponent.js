import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../../assets/images/ICONS/arrow L.svg";
import rightArrow from "../../assets/images/ICONS/arrow R.svg";
import card from "../../assets/images/INDEX/TESTIMONIALS.webp";
import "./index-carousel.css";

const CarouselComponent = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);
    const carouselTrackRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to scroll left
    const scrollLeft = () => {
        if (carouselTrackRef.current) {
            carouselTrackRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    // Function to scroll right
    const scrollRight = () => {
        if (carouselTrackRef.current) {
            carouselTrackRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    // Dummy data for carousel items
    const carouselItems = [
        { id: 1, src: card, alt: "Testimonial 1" },
        { id: 2, src: card, alt: "Testimonial 2" },
        { id: 3, src: card, alt: "Testimonial 3" },
    ];

    return (
        <div className="carousel">
            <button className="carousel-button left" onClick={scrollLeft} aria-label="Scroll left">
                <img src={leftArrow} alt="Scroll left" />
            </button>
            <div className="carousel-track" ref={carouselTrackRef}>
                {carouselItems.map((item) => (
                    <img key={item.id} src={item.src} alt={item.alt} className="carousel-item" />
                ))}
            </div>
            <button className="carousel-button right" onClick={scrollRight} aria-label="Scroll right">
                <img src={rightArrow} alt="Scroll right" />
            </button>
        </div>
    );
};

export default CarouselComponent;
