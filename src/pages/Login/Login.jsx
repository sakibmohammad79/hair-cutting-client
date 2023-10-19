import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDesabled] = useState(true);
  const loginRef = useRef();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaValidate = () => {
    const user_captcha_value = loginRef.current.value;
    console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value) == true) {
      toast("Captcha Matched");
      setDesabled(false);
    } else {
      toast("Captcha Does Not Match");
      setDesabled(true)
    }
  };
  return (
    <div className="hero bg-base-200 pt-40 pb-24">
      <div className="card  w-4/12  shadow-md bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              // onBlur={handleCaptchaValidate}
              ref={loginRef}
              type="captcha"
              placeholder="Captcha"
              className="input input-bordered"
              required
            />
          </div>
          {/* <button className="btn btn-xs mt-2">Validate</button> */}
          <div className="form-control mt-6">
            <input
              onClick={handleCaptchaValidate}
              // disabled={disabled}
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
        <div className="divider mt-0 mb-0 px-6">or</div>
        <p className="px-6 pt-6 pb-2 ">
          <button className="btn btn-outline btn-warning w-full mb-0">
            SignUp By Google
          </button>
        </p>
        <p className="px-6 pb-12 ">
          <button className="btn btn-outline btn-warning w-full mt-0">
            SignUp By GitHub
          </button>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
