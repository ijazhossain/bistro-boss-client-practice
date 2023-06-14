import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const SingleCategory = ({ item }) => {
    // console.log(item);
    const [, refetch] = useCart();
    const { user } = useContext(AuthContext);
    const { image, name, recipe, price } = item;
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        // console.log(item);
        if (user && user?.email) {
            const selectedItem = {
                email: user.email,
                menuId: item._id,
                name,
                image,
                price
            }
            axios.post("http://localhost:5001/cart", selectedItem)
                .then(data => {
                    // console.log(data);
                    if (data.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login First',
                text: "Do you want to login?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-xl text-center">{name}</h2>
                    <p className="mb-5">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className="btn hover:bg-black border-0 border-b-4 border-[#BB8506] hover:border-b-4 hover:border-[#BB8506] text-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SingleCategory;