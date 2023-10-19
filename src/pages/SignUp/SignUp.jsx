
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { registerUser, googleLogInUser,  githubLogInUser} = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    registerUser(data.email, data.password)
    .then(result => {
      const googleLoggedinUser = result.user;
      console.log(googleLoggedinUser)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleLoginByGoogle = () => {
    googleLogInUser()
    .then(result => {
      const googleLoggedinUser = result.user;
      console.log(googleLoggedinUser)
    })
    .catch(error => {
      console.Console(error);
    })
  }
  const handleLoginByGithub = () => {
    githubLogInUser()
    .then(result => {
      const googleLoggedinUser = result.user;
      console.log(googleLoggedinUser)
    })
    .catch(error => {
      console.Console(error);
    })
  }
  return (
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
            <input
              {...register("confirmpassword", { required: true })}
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
            />
            {errors.confirmpassword && (
              <span className="text-red-500">Confirm Password is required</span>
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
        <div className="divider mt-0 mb-0 px-6">or</div>
        <p className="px-6 pt-6 pb-2 ">
          <button onClick={handleLoginByGoogle} className="btn btn-outline btn-warning w-full mb-0">
            SignUp By Google
          </button>
        </p>
        <p className="px-6 pb-8 ">
          <button onClick={handleLoginByGithub} className="btn btn-outline btn-warning w-full mt-0">
            SignUp By GitHub
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
