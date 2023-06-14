

const MenuItem = ({ item }) => {

    const { image, name, price, recipe } = item;
    return (
        <div className="flex items-start justify-between ">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} width='118px' src={image} alt="" />
            <div className="ml-[32px]">
                <h3 className="text-xl">{name} --------------</h3>
                <p >{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;