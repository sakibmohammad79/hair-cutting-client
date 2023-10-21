import { FaBars, FaBook, FaCalendarAlt, FaHome, FaMap, FaShoppingCart, FaShuttleVan, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn bg-rose-600 text-white drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full  bg-rose-600  text-white">
        {
        isAdmin?
        <>
            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/manageservices'><FaBars></FaBars> Manage Services </NavLink></li>
            <li><NavLink to='/'><FaBook></FaBook> Order list</NavLink></li>
            <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add Services</NavLink></li>
            <li><NavLink to='/dashboard/alluser'><FaUser></FaUser> All Users</NavLink></li>
            </> 
        :
        <>
            <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
            
            <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment</NavLink></li>
            <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
            <li><NavLink to='/dashboard/mycart'><div className="indicator">
            <span className="indicator-item badge badge-secondary">+0</span>
            <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
            </div>
            My Cart
            </NavLink></li>
            <li><NavLink to='/'><FaCalendarAlt></FaCalendarAlt>Add Reivew</NavLink></li>
            </>
        }
        <div className="divider"></div>
          <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/allservices"><FaMap></FaMap>Service</NavLink></li>
          <li><NavLink to="/order/salad"><FaShuttleVan></FaShuttleVan>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
