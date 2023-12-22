
const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <div className="flex space-x-4">
            <img className="w-[100px]" src={image} alt="Item" />
            <div>
                <h3>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yello-500">${price}</p>
        </div>
    );
};

export default MenuItem;