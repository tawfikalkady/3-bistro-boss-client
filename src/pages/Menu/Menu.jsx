import { Helmet } from "react-helmet-async";
import Cover from "../../components/Covered/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../components/MenuCategory/MenuCategory";

const Menu = () => {

    const {menu} = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soup = menu.filter(item => item.category == 'soup');
    const salad = menu.filter(item => item.category == 'salad');
    const offered = menu.filter(item => item.category == 'offered');

    return (
        <div>
            <Helmet>
                <title>Menu - Bisto Boss</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Todays Offer" />
            {/* offered  */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
            items={dessert}
            coverImg={dessertImg}
            title="dessert"
            >
            </MenuCategory>

            <MenuCategory
            items={pizza}
            coverImg={pizzaImg}
            title="pizza"
            >
            </MenuCategory>
            <MenuCategory
            items={dessert}
            coverImg={dessertImg}
            title="dessert"
            >
            </MenuCategory>

            <MenuCategory
            items={pizza}
            coverImg={pizzaImg}
            title="pizza"
            >
            </MenuCategory>
            <MenuCategory
            items={salad}
            coverImg={saladImg}
            title="salad"
            >
            </MenuCategory>
            <MenuCategory
            items={soup}
            coverImg={soupImg}
            title="soup"
            >
            </MenuCategory>
            
        </div>
    );
};

export default Menu;