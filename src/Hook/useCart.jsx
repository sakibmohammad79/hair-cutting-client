import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useCart = () => {
  const { user } = useContext(AuthContext)

  const { data: mycart = [] } = useQuery({
    queryKey: ["mycart", user?.email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
      return res.json();
    },
  });
  return [mycart];
};

export default useCart;