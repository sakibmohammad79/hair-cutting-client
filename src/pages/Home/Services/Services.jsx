
import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
import useService from "../../../Hook/useService";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [data] = useService();
  console.log(data);
  return (
    <div>
        <Heading heading={'SERVICES OFFERED'} subHeading={'DETAILED PRICE LIST'}></Heading>
      <div className="md:grid grid-cols-4 gap-8 justify-center items-center mx-28 mb-16">
        {data.slice(0, 4).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to="/allservices"><p className="text-center mb-20"><button className="btn btn-warning text-white">BOOKING NOW</button></p></Link>
    </div>
  );
};

export default Services;
