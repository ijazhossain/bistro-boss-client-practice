import BannerTitle from "../../../components/Shared/BannerTitle/BannerTitle";
import img from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import imgDessert from '../../../assets/menu/dessert-bg.jpeg'
import imgPizza from '../../../assets/menu/pizza-bg.jpg'
import imgSalad from '../../../assets/menu/salad-bg.jpg'
import imgSoup from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu);
    const todaysOffer = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    // console.log(todaysOffer, dessert, pizza, salad, soup);

    return (
        <>
            {/* Todays offer */}
            <div>
                <BannerTitle heading='Our Menu' paragraph='Would you like to try a dish' img={img} height="572px"></BannerTitle>
                <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>

                <MenuCategory
                    items={todaysOffer}
                ></MenuCategory>



            </div>
            {/* Dessert */}
            <div className="mt-11">


                <MenuCategory
                    items={dessert}
                    heading="desert"
                    paragraph="Desserts are delightful culinary creations that come in various shapes, sizes, and flavors, designed to satisfy your sweet tooth and bring a smile to your face. From decadent chocolate cakes to creamy fruit tarts, desserts are a delicious finale to any meal or a delightful treat enjoyed on their own. They can be rich, indulgent, and sinfully sweet, or light, refreshing, and fruit-filled. Whether you're a fan of gooey brownies, velvety ice creams, or crispy cookies, desserts are the perfect way to indulge your taste buds and celebrate life's little pleasures. So go ahead, dive into a world of sugary bliss and savor the joy of desserts!"
                    img={imgDessert}
                ></MenuCategory>


            </div>
            {/* pizza */}
            <div className="mt-11">
                <MenuCategory
                    heading='pizza'
                    items={pizza}
                    img={imgPizza}
                    paragraph="
                        We serve mouthwatering pizzas that are sure to satisfy your cravings. Our pizzas are made with love and expertise, combining a crispy yet chewy crust with a medley of delicious toppings. From classic Margherita with fresh tomatoes and basil to adventurous combinations like BBQ chicken and pineapple, our pizzas offer a delightful explosion of flavors. Each slice is generously covered with melted cheese that stretches as you take a bite, making every bite a cheesy delight. Whether you're a fan of traditional favorites or seeking unique and bold flavors, our pizzas are crafted to please every palate. So come on over and experience the joy of our delectable pizzas that will leave you wanting more!"
                ></MenuCategory>

            </div >
            {/* salad */}
            < div className="mt-11" >

                <MenuCategory
                    heading='salad' paragraph="
                We take pride in serving fresh and vibrant salads that are a celebration of healthy and delicious ingredients. Our salads are a symphony of crisp, colorful vegetables, tossed with care and creativity. From refreshing greens like spinach and arugula to crunchy additions like cucumbers and bell peppers, our salads are packed with nutrients and flavor. We offer a variety of dressings, from zesty vinaigrettes to creamy options, allowing you to customize your salad to your taste. Whether you prefer a simple garden salad or crave a more complex blend of ingredients like grilled chicken, avocado, and feta cheese, our salads are crafted to satisfy both your appetite and your desire for a nourishing meal. So join us and embark on a journey of freshness and vitality with our delightful selection of salads."
                    img={imgSalad}
                    items={salad}
                ></MenuCategory>
            </div >
            {/* Soup */}
            < div className="mt-11" >
                <BannerTitle height="572px"></BannerTitle>

                <MenuCategory
                    heading='soup'
                    paragraph="
                 Welcome to our restaurant, where we take pride in serving comforting and delicious soups that warm your soul. Our soups are crafted with the finest ingredients and simmered to perfection, creating a delightful harmony of flavors. From hearty vegetable soups bursting with fresh, seasonal produce to creamy, velvety bisques that melt in your mouth, we offer a diverse range of options to satisfy every taste. Each spoonful is a taste of comfort, whether you're seeking a bowl of chicken noodle soup to soothe a cold or a bowl of spicy chili to awaken your taste buds. So sit back, relax, and let our soups envelop you in a blanket of warmth and satisfaction"
                    img={imgSoup}

                    items={soup}
                ></MenuCategory>
            </div >
        </>
    );
};

export default Menu;