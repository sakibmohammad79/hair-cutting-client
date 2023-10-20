
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext} from "../../provider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const password = React.useRef({});
  
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();
  password.current = watch('password', '');
  const from = location.state?.from?.pathname || '/';
  const onSubmit = (data) => {
    registerUser(data.email, data.password)
    .then(result => {
      const googleLoggedinUser = result.user;
      console.log(googleLoggedinUser)
      navigate(from, { replace: true });

      //update user profile
      updateUserProfile(data.name, data.photoURL)
      .then(result => {
        console.log(result)
        const saveUser = {name: data.name, email: data.email}
        // fetch("http://localhost:5000/user", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(saveUser),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       if (data.insertedId) {
        //         reset();
        //         navigate(from);
        //       }
        //     });
        axios.post('http://localhost:5000/user', saveUser)
        .then(res => {
          if(res.data.insertedId){
            reset();
            navigate(from, {replace: true});
          }
        })
        
      })
      .catch(error => {
        console.log(error);
      })

    })
    .catch(error => {
      console.log(error);
    })
  }
 
  return (
    <div>
      <Helmet>
        <title>HairCutting || SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 pt-40 pb-24">
      <div className="card  w-4/12  shadow-md bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            {errors.name && errors.name.type === "maxLength" && (
              <span className="text-red-500">
                Name must be under 20 characters
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true, minLength: 6, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\S]/
            })}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-500">
                Password must be at least 6 characters long
              </span>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <span className="text-red-500">
                password at least one uppercase letter, one lowercase letter, one digit, and one special character
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password.current || 'Passwords do not match'
                    })} placeholder="Confirm password" className="input input-bordered" />
                    {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
              </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              placeholder="photoURL"
              className="input input-bordered"
              required
            />
            {errors.confirmpassword && (
              <span className="text-red-500">photoURL is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-warning text-white"
              type="submit"
              value="Create An Acount"
            />
          </div>
          <p className="text-center mb-0">
            Already have an acount?
            <Link to="/login">
              <span className="text-orange-500 font-semibold">login</span>
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
