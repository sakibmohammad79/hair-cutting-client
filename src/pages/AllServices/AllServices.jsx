import Heading from "../../Components/Heading/Heading";
import useService from "../../Hook/useService";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
    const [data] = useService();
    return (
        <div className="py-20">
        <Heading heading={'SERVICES OFFERED'} subHeading={'DETAILED PRICE LIST'}></Heading>
      <div className=" md:grid grid-cols-2 gap-8 justify-center items-center mx-20 mb-16">
        {data.map((service) => (
          <AllServicesCard key={service._id} service={service}></AllServicesCard>
        ))}
      </div>
    </div>
    );
};

export default AllServices;