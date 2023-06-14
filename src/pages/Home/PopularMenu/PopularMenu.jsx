import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import Spinner from "../../../components/Shared/Spinner/Spinner";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Menu/Menu/MenuItem";
const PopularMenu = () => {
    const [menu, isLoading] = useMenu();
    // console.log(menu)
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const popularMenu = menu.filter(item => item.category === "popular")
    // console.log(popularMenu);
    return (
        <Container>
            <SectionTitle subHeading='---Check it out---' heading="FROM OUR MENU"></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </Container>
    );
};

export default PopularMenu;