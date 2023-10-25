import { useForm } from "react-hook-form";
import Heading from "../../../Components/Heading/Heading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const imageHostingSecret = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
console.log('imageSecret', imageHostingSecret);

const AddService = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingSecret}`

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('image', data.image[0]);
    fetch(imageHostingUrl, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imageHostingData => {
      //console.log(imageHostingData);
      if(imageHostingData.success === true){
        const {name, price, details} = data;
        const newService = {name, price: parseFloat(price), details, image: imageHostingData?.data?.display_url}
        console.log('newService', newService);
        axiosSecure.post('/service', newService)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New Service has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };
  return (
    <div className="w-full">
      <Heading
        heading={"ADD  Service"}
        subHeading={"Show your product"}
      ></Heading>
      <div className="mx-28">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Service Details</span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
            {errors.details && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <input
          {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          /><br></br>
          {errors.image && <span className="text-red-500">This field is required</span>}
          <br></br>
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
