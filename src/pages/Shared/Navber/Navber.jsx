import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Navber = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut = () => {
      logOut()
      .then(result => console.log(result))
      .then(error => {
        console.log(error);
      })
    }
  const navItem = (
    <>
      <li className=' uppercase'>
        <Link>Home</Link>
      </li>
      <li className=' uppercase'>
        <Link to='/allservices'>Services</Link>
      </li>
      <li className=' uppercase'>
        <Link>Contact</Link>
      </li>
      <li className=' uppercase'>
        <Link to='dashboard'>Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="h-[90px] md:px-8 navbar fixed opacity-80 bg-black text-orange-500 font-semibold z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl w-48 h-auto"><img src={logo} alt="My Logo"/></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
      <img className='w-[50px] rounded-full mr-2 md:mr-4' src={user?.photoURL} alt="" />
      {
        user?
        <button onClick={handleSignOut} className="btn bg-[#D9842F] border-none text-white font-bold">SignOut</button>
        :
        <Link to='/login'><button className="btn bg-[#D9842F] border-none text-white font-bold">LOGIN</button></Link>
      }
      </div>
    </div>
  );
};

export default Navber;
