import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaFacebook, FaGithub } from 'react-icons/fa';


const SocialLogin = () => {
    const { googleLogInUser,  githubLogInUser } = useContext(AuthContext);

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
        <div>
            <div className="divider mt-0 mb-0 px-6">or</div>
        <p className="px-6 pt-6 pb-2 ">
          <button onClick={handleLoginByGoogle} className="btn btn-outline btn-warning w-full mb-0">
            <FaFacebook size={24}/> SignUp By Google
          </button>
        </p>
        <p className="px-6 pb-12 ">
          <button onClick={handleLoginByGithub} className="btn btn-outline btn-warning w-full mt-0">
            <FaGithub size={24}/> SignUp By GitHub
          </button>
        </p>
        </div>
    );
};

export default SocialLogin;