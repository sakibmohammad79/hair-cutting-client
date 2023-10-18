import { useQuery } from "@tanstack/react-query"

const useService = () => {
    const {data=[]} = useQuery({
        queryKey: ["servicesData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/service')
            return res.json();
        }
    })
    return [data]
}
export default useService;