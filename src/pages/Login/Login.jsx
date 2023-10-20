import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";



const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [disabled, setDesabled] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
  } = useForm()

  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    console.log(data)
    loginUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.log(error);
    })

  }

  const handleCaptchaValidate = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      toast("Captcha Matched");
      setDesabled(false);
    } else {
      toast("Captcha Does Not Match");
      setDesabled(true);
    }
  };


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div>
      <Helmet>
        <title>HairCutting || Login</title>
      </Helmet>
      <div className="hero bg-base-200 pt-40 pb-24">
      <div className="card  w-4/12  shadow-md bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            {...register("password", { required: true })}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleCaptchaValidate}
              // ref={loginRef}
              type="captcha"
              placeholder="Captcha"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              disabled={disabled}
              className="btn btn-warning text-white"
              type="submit"
              value="Please Login"
            />
          </div>
          <p className="text-center mb-0">
            Are You New Here?
            <Link to="/signup">
              <span className="text-orange-500 font-semibold"> SignUp</span>
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
