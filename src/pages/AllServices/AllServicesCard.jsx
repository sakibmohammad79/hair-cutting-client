import axios from "axios";
import Swal from "sweetalert2";
import useService from "../../Hook/useService";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const AllServicesCard = ({ service }) => {
  const {user} = useContext(AuthContext);
  const [, refetch] = useService();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/"

  const { name, image, details, price, _id } = service;

  const handleServiceAdd = () => {
    if(user && user.email){
      const addService = {name, price, image, details, serviceId: _id, email: user.email, customerName: user.displayName }
      axios.post('http://localhost:5000/cart', addService)
    .then(res => {
      console.log(res.data);
      if(res.data && res.data.insertedId){
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your service are booked!',
              showConfirmButton: false,
              timer: 1500
            })
      }
    })
    }
    else{
      Swal.fire({
        title: 'Please Login First!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }

  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[220px] w-[350px]"
          src={image}
          alt="service"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mt-0 mb-0 font-bold">{name}</h2>
        <p className="mt-0 mb-0 font-semibold">{details.slice(0, 75)}</p>
        <p className="mt-0 mb-0 font-semibold">Price: <span className="text-orange-500 font-bold text-lg">${price}</span></p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleServiceAdd(service)} className="btn btn-warning text-white mt-0 mb-0">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
