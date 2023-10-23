import { useQuery } from "@tanstack/react-query";


const ServiceOrderList = () => {
  const { data: orders = [] } = useQuery({
    queryKey: ["orderList"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/orderlist");
      return res.json();
    },
  });
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
              <th>Pay With</th>
              <th>Status</th>
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
                <td>Credit Card</td>
                <td>
                  <select defaultValue="pending" className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>
                      pending
                    </option>
                    <option>On going</option>
                    <option>Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceOrderList;
