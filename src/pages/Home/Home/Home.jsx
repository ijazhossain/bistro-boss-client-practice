import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import BannerTitle from '../../../components/Shared/BannerTitle/BannerTitle';
import PopularMenu from '../PopularMenu/PopularMenu';
import img from '../../../assets/home/chef-service.jpg'
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <SwiperSlider></SwiperSlider>
            <BannerTitle img={img} heading='Bistro Boss' paragraph="The Bistro Boss is a vibrant and cozy restaurant located in the heart of the city, offering a diverse menu of mouthwatering dishes crafted by talented chefs. With a focus on quality ingredients and visually stunning presentations, our restaurant caters to all palates, whether you're craving classic comfort food or innovative culinary creations. Our attentive waitstaff provides exceptional service, going the extra mile to accommodate dietary preferences or restrictions. Join us for a delightful dining experience that will leave you with lasting memories."></BannerTitle>
            <PopularMenu></PopularMenu>


        </>
    );
};

export default Home;