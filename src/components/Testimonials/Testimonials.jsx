import SectionTitle from "../SectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5555/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section>
            <SectionTitle
                subHeading="What our Client Say"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoplay="true">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="m-24 justify-center items-center flex flex-col">
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;