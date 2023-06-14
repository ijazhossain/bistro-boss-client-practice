import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user)
    const [axiosSecure] = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user?.email}`)
            // console.log(res);
            return res.data
        }
    })

    return [cart, refetch]
}
export default useCart;

// const res = await fetch(`http://localhost:5001/cart?${user?.email}`, {
//     method: 'GET',
//     headers: {
//         authorization: `BEARER ${localStorage.getItem('bistro-access-token')}`
//     }