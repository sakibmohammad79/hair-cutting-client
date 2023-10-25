import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ServiceOrderList = () => {
  const { data: orders = [], refetch } = useQuery({
    queryKey: ["orderList"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/orderlist");
      return res.json();
    },
  });
  const handleDelete = (order) => {
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
        fetch(`http://localhost:5000/orderlist/${order._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "One order has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full px-12 mt-5">
      {/* <Heading heading={'All Order'} subHeading={'Please submit status'}> </Heading> */}
      <div className="overflow-x-auto bg-slate-200 p-6 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <div>{order.customerName}</div>
                </td>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>
                  <select defaultValue="pending" className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>
                      pending
                    </option>
                    <option>On going</option>
                    <option>Done</option>
                  </select>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(order)}
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

export default ServiceOrderList;
