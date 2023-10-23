import useCart from "../../../Hook/useCart";

const MyCart = () => {
  const [mycart] = useCart();
  return (
    <div className="w-full px-24">
      <div className="overflow-x-auto">
        <table className="table">
 
          <thead>
            <tr>
              <th>
                Index
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                mycart.map((cart ,index) =>  <tr key={cart._id}>
                    <th>
                      {index +1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
             
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        
        
                    </td>
                    <td>
                     {cart.name}
                      
                    </td>
                    <td>{cart.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
