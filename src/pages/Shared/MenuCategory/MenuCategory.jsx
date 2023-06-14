import { useNavigate } from "react-router-dom";
import BannerTitle from "../../../components/Shared/BannerTitle/BannerTitle";
import MenuItem from "../../Menu/Menu/MenuItem";



const MenuCategory = ({ items, heading, paragraph, img }) => {
    // console.log(item);
    const navigate = useNavigate();
    return (
        <>
            {heading && <BannerTitle heading={heading} paragraph={paragraph} img={img} height="572px"></BannerTitle>}

            <div className="container w-[90%] mx-auto lg:grid grid-cols-2 gap-6">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="text-center mt-6">
                <button onClick={() => navigate(`/order/${heading ? heading : 'offered'}`)} className="btn border-0 bg-transparent border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </>
    );
};

export default MenuCategory;