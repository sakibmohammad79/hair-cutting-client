import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

const useService = () => {
    const {user, loading} = useContext(AuthContext)
    const {data=[], refetch} = useQuery({
        queryKey: ["servicesData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/service')
            return res.json();
        }
    })
    return [data, refetch]
}
export default useService;