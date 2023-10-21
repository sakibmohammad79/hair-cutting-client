import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/admin/user/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`${user.name} is an admin now`);
        }
      });
  };

  //user delete
  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/user/${user._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full px-24">
      
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Manage</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div>{user.name}</div>
                </td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleMakeAdmin(user)}>
                    {user.role === "admin" ? (
                      <span className="font-semibold text-orange-500">
                        ADMIN
                      </span>
                    ) : (
                      <FaUserAlt size={20}></FaUserAlt>
                    )}
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className=" text-red-500"
                  >
                    <FaTrashAlt size={20}></FaTrashAlt>
                  </button>
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
