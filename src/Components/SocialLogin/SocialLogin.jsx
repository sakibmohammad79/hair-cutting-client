import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  const { googleLogInUser, githubLogInUser } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleLoginByGoogle = () => {
    googleLogInUser()
      .then((result) => {
        const googleLoggedinUser = result.user;
        console.log("googleUser", googleLoggedinUser);

        const saveUser = {
          name: googleLoggedinUser?.displayName,
          email: googleLoggedinUser?.email,
        };
        axios.post("http://localhost:5000/user", saveUser)
        .then((res) => {
          console.log("social saveuser", res);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleLoginByGithub = () => {
    githubLogInUser()
      .then((result) => {
        const githubLoggedinUser = result.user;
        console.log(githubLoggedinUser);

        const saveUser = {
          name: githubLoggedinUser?.displayName,
          email: githubLoggedinUser?.email,
        };
        axios.post("http://localhost:5000/user", saveUser).
        then((res) => {
          console.log(res);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider mt-0 mb-0 px-6">or</div>
      <p className="px-6 pt-6 pb-2 ">
        <button
          onClick={handleLoginByGoogle}
          className="btn btn-outline btn-warning w-full mb-0"
        >
          <FaFacebook size={24} /> SignUp By Google
        </button>
      </p>
      <p className="px-6 pb-12 ">
        <button
          onClick={handleLoginByGithub}
          className="btn btn-outline btn-warning w-full mt-0"
        >
          <FaGithub size={24} /> SignUp By GitHub
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
