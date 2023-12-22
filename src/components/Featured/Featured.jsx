import SectionTitle from "../SectionTitle/SectionTitle";
import FeaturedImg from '../../assets/home/featured.jpg';
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-30 items-center justify-center py-8 px-16 md:gap-x-6">
                <div>
                    <img src={FeaturedImg} alt="img" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where I can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit quibusdam nisi id aliquam dolorem corrupti, ipsa officiis ex, assumenda veritatis non pariatur reiciendis ad amet dolore quam eos temporibus? Ad molestias nam tempora blanditiis numquam ab eum est magni explicabo quis natus quibusdam voluptatem corrupti quaerat, velit officia quas.</p>
                    <button className="btn mt-3 btn-outline text-white border-0 border-b-4 border-b-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;