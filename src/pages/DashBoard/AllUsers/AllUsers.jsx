import { FaTrash, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleUserRoll = (user) => {
        // console.log(user);
        axios.patch(`http://localhost:5001/users/admin/${user?._id}`)
            .then(res => {
                // console.log(res.data.modifiedCount);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5001/users/admin/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }
    return (
        <div className="w-[90%] mx-auto pt-12">
            <SectionTitle heading="Manage All Users" subHeading="---How many??---"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    {user.name}

                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role ? 'admin' : <button onClick={() => handleUserRoll(user)} className="btn btn-ghost btn-lg bg-orange-500 text-white"><FaUserShield className=""></FaUserShield></button>}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg bg-[#B91C1C] text-white"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;