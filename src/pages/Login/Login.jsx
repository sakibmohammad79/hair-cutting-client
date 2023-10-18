import { Link } from "react-router-dom";

const Login = () => {
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
            <div className="form-control mt-6">
              <input className="btn btn-warning text-white" type="submit" value="Please Login" />
            </div>
            <p className="text-center mb-0">Are You New Here?<Link to='/signup'><span className="text-orange-500 font-semibold"> SignUp</span></Link></p>
          </form>
          <div className="divider mt-0 mb-0 px-6">or</div>
          <p className="px-6 pt-6 pb-2 "><button className="btn btn-outline btn-warning w-full mb-0">SignUp By Google</button></p>
          <p className="px-6 pb-12 "><button className="btn btn-outline btn-warning w-full mt-0">SignUp By GitHub</button></p>
        </div>
    </div>
  );
};

export default Login;
