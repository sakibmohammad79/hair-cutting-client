import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hook/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [mycart, refetch] = useCart();

  const totalPrice = mycart.reduce((sum, currentValue) => sum + currentValue.price, 0)
  console.log(totalPrice);

  const handleDelete = (cart) => {
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
        fetch(`http://localhost:5000/cart/${cart._id}`, {
          method: "DELETE",
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
      <div className="flex justify-center items-center gap-8 text-center mb-6">
      <h3 className="text-3xl font-bold">My Total Service: {mycart.length}</h3>
      <h3 className="text-3xl font-bold">Total Price: {totalPrice}</h3>
      <Link to="/dashboard/payment">
        <button className="btn btn-secondary btn-sm">Pay</button>
      </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mycart.map((cart, index) => (
              <tr key={cart._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src={cart.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{cart.name}</td>
                <td>{cart.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(cart)}
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

export default MyCart;
