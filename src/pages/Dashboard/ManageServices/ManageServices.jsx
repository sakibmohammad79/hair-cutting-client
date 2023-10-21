import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import Heading from "../../../Components/Heading/Heading";


const ManageServices = () => {
    const {data: services = []} = useQuery({
        queryKey: ['service'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/service')
            return res.json();
        }
    })
    return (
        <div className="w-full px-24">
            <Heading heading={'All Services'} subHeading={'manage all services'}> </Heading>
            <div className="overflow-x-auto">
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
                  <button className=" text-red-500"><FaTrashAlt size={20}></FaTrashAlt></button>
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