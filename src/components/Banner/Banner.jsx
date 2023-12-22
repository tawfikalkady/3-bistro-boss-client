import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../src/assets/home/01.jpg";
import img2 from "../../../src/assets/home/02.jpg";
import img3 from "../../../src/assets/home/03.png";
import img4 from "../../../src/assets/home/04.jpg";
import img5 from "../../../src/assets/home/05.png";
import img6 from "../../../src/assets/home/06.png";

const Banner = () => {
    return (
        <Carousel className="text-center" autoPlay="true" infiniteLoop="true" centerMode="false">
            <div>
                <img src={img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;