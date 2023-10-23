
import { useForm } from 'react-hook-form';
import Heading from '../../../Components/Heading/Heading';

import { AuthContext } from '../../../provider/AuthProvider';

import Swal from 'sweetalert2';
import { useContext } from 'react';
import axios from 'axios';

const AddReview = () => {
    const {user} = useContext(AuthContext);
 
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
            console.log(data)
          
                const {name, review, rating } = data;
                const newReview = {name, rating, review, image: user?.photoURL}
                console.log('newreview', newReview);
            console.log('add', newReview);
            axios.post('http://localhost:5000/addreview', newReview)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your review are saved!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    
        }
    return (
        <div className="w-full">
      <Heading
        heading={"ADD  Review"}
        subHeading={"Show your review"}
      ></Heading>
      <div className="mx-28">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span  className="label-text">Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder='name'
                className="input input-bordered w-full "
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Rating*</span>
              </label>
              <input
                {...register("rating", { required: true })}
                type="number"
                placeholder="Rating"
                className="input input-bordered w-full "
              />
              {errors.rating && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Review*</span>
            </label>
            <textarea
              {...register("review", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Review"
            ></textarea>
            {errors.review && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <input 
      
            className="btn btn-secondary w-full mt-6"
            type="submit"
            value="Add review"
          />
        </form>
      </div>
    </div>
    );
};

export default AddReview;