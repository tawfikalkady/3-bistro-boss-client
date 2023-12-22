import { Link } from "react-router-dom";
import Cover from "../Covered/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {
                title ? <Cover img={coverImg} title={title}></Cover> : ""
            }
            <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn mt-3 btn-outline text-black border-0 border-b-4 border-b-white">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;