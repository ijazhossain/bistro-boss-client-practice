import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const [axiosSecure] = useAxiosSecure()
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    const imageUrl = imgData.data.display_url;
                    // console.log(imageUrl);
                    const { category, description, price, recipeName } = data;
                    const newItem = { category, recipe: description, price: parseFloat(price), name: recipeName, image: imageUrl }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new data', data.data);
                            if (data.data.insertedId) {
                                reset;
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })


                }
            })

    };
    return (
        <div className="w-[90%] ml-8">
            <SectionTitle subHeading="---What's new?---" heading="ADD AN ITEM">Add Items</SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="form-control w-full ">

                    <label className="label">
                        <span className="label-text">Recipe name*</span>

                    </label>
                    <input {...register("recipeName", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>

                        </label>
                        <select {...register("category", { required: true })} defaultValue="Pick One" className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>PIZZA</option>
                            <option>SOUP</option>
                            <option>SALAD</option>
                            <option>DRINKS</option>
                            <option>Dish</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>

                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>

                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image*</span>

                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />

                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />





            </form>
        </div>
    );
};

export default AddItems;