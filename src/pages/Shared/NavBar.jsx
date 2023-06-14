import { Link } from 'react-router-dom';
import './NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='fixed z-10 bg-black bg-opacity-30 w-full text-white'>

            <div className="container w-[90%] mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>

                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/order/salad'>Order</Link></li>
                            <li><Link to='/dashboard/cart'>
                                <FaShoppingCart></FaShoppingCart>
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </Link></li>
                        </ul>
                    </div>
                    <a className="normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>

                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/order/salad'>Order</Link></li>
                        <li><Link to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>

                            <div className="badge badge-secondary">+{cart.length}</div>
                        </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user ? <Link to='/login' className="btn">Login</Link>
                        :
                        <>
                            <span className='mr-4'>{user.displayName}</span>
                            <Link onClick={handleLogOut} className="btn">Logout</Link>
                        </>}
                </div>
            </div>

        </div>


    );
};

export default NavBar;