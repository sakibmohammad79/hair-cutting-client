import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUpload } from "react-icons/fa";

import Swal from "sweetalert2";


const ManageServices = () => {
    const {data: services = [], refetch} = useQuery({
        queryKey: ['service'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/service')
            return res.json();
        }
    })

    //user delete
  const handleDelete = (service) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/service/${service._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Service has been deleted.", "success");
            }
          });
      }
    });
  };
    return (
        <div className="w-full px-12">
            {/* <Heading heading={'All Services'} subHeading={'manage all services'}> </Heading> */}
            <div className="overflow-x-auto bg-slate-200 p-6 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Index
              </th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Manage</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div>{service.name}</div>
                </td>
                <td>
                    {service.price}
                </td>
                <th>
                  <button onClick={()=>handleDelete(service)} className=" text-red-500"><FaTrashAlt size={20}></FaTrashAlt></button>
                </th>
                <th>
                  <button className=" text-red-500"><FaUpload size={20}></FaUpload></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageServices;