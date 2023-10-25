import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const { data: mycart = [], refetch } = useQuery({
    queryKey: ["mycart", user?.email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [mycart, refetch];
};

export default useCart;