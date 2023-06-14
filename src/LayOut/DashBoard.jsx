import { FaBars, FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    // const isAdmin = false;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn mt-12 me-8 text-white bg-[#d1a054]  ms-auto lg:hidden">
                    <FaBars></FaBars>
                </label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content bg-[#D1A054] h-full">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    ADMIN HOME </NavLink></li>
                                <li><NavLink to="/dashboard/addItem">
                                    <FaUtensils></FaUtensils>
                                    ADD ITEMS</NavLink></li>
                                <li><NavLink to="/dashboard/manageItem">
                                    <FaWallet></FaWallet>
                                    MANAGE ITEMS</NavLink></li>
                                <li><NavLink to="/dashboard/myCart">
                                    <FaBook></FaBook>

                                    MANGE BOOKINGS
                                </NavLink>

                                </li>
                                <li><NavLink to="/dashboard/allUsers">
                                    <FaUser></FaUser>

                                    ALL USERS
                                </NavLink>


                                </li>
                                <li><NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    <div className="badge badge-secondary">+{cart.length}</div>
                                </NavLink>

                                </li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home </NavLink></li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/history">
                                    <FaWallet></FaWallet>
                                    Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    <div className="badge badge-secondary">+{cart.length}</div>
                                </NavLink>

                                </li>
                            </>
                    }

                    <li className="divider"></li>
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/menu">

                        Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order now</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;