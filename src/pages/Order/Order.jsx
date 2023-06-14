import BannerTitle from "../../components/Shared/BannerTitle/BannerTitle";
import orderBg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Order.css'
import SingleCategory from "../Shared/MenuCategory/SingleCategory";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'desert', 'offered'];
    const { category } = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    // console.log(menu);
    const todaysOffer = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    return (
        <div>
            <BannerTitle img={orderBg} heading="ORDER" paragraph="Would you like to try a dish" ></BannerTitle>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Popular</Tab>
                </TabList>

                <TabPanel>
                    <div className="container w-[90%] mx-auto grid lg:grid-cols-3 gap-y-8 gap-x-6">
                        {
                            salad.map(item => <SingleCategory
                                key={item._id}
                                item={item}></SingleCategory>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="container w-[90%] mx-auto grid lg:grid-cols-3 gap-y-8 gap-x-6">
                        {
                            pizza.map(item => <SingleCategory
                                key={item._id}
                                item={item}></SingleCategory>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="container w-[90%] mx-auto grid lg:grid-cols-3 gap-y-8 gap-x-6">
                        {
                            soup.map(item => <SingleCategory
                                key={item._id}
                                item={item}></SingleCategory>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="container w-[90%] mx-auto grid lg:grid-cols-3 gap-y-8 gap-x-6">
                        {
                            dessert.map(item => <SingleCategory
                                key={item._id}
                                item={item}></SingleCategory>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="container w-[90%] mx-auto grid lg:grid-cols-3 gap-y-8 gap-x-6">
                        {
                            todaysOffer.map(item => <SingleCategory
                                key={item._id}
                                item={item}></SingleCategory>
                            )
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;