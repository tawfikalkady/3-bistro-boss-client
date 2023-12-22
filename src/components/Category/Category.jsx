import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide4.jpg"
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading="Fromm 10:00am to 11:00pm"
                heading="Order Online"
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className='text-3xl text-white drop-shadow-sm uppercase text-center -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h3 className='text-3xl text-white drop-shadow-sm uppercase text-center -mt-12'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h3 className='text-3xl text-white drop-shadow-sm uppercase text-center -mt-12'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h3 className='text-3xl text-white drop-shadow-sm uppercase text-center -mt-12'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h3 className='text-3xl text-white drop-shadow-sm uppercase text-center -mt-12'>Salads2</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;