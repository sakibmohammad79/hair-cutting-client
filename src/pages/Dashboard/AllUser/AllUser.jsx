import { useQuery } from "@tanstack/react-query";
import Heading from "../../../Components/Heading/Heading";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alluser");
      return res.json();
    },
  });

const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/admin/user/${user._id}`,{
        method: "PATCH",
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire(`${user.name} is an admin now`);
        }
    })
}
  return (
    <div className="w-full px-24">
      <Heading
        heading={"All User"}
        subHeading={"manage the all user"}
      ></Heading>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Index
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Manage</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div>{user.name}</div>
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    <button onClick={()=>handleMakeAdmin(user)}>{user.role === 'admin'? <span className="font-semibold text-orange-500">ADMIN</span> : <FaUserAlt size={20}></FaUserAlt>}</button>
                </td>
                <th>
                  <button className=" text-red-500"><FaTrashAlt size={20}></FaTrashAlt></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
