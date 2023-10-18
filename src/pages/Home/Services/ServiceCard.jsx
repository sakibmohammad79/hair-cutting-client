import Heading from "../../../Components/Heading/Heading";


const ServiceCard = ({service}) => {
    const {name, image, details} = service;
    return (
        <div>
            <div className="text-center">
                <img className="rounded-full h-[200px] mx-auto mb-4 hover:border-4 border-orange-500" src={image} alt="" />
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className=" font-semibold">{details.slice(0, 85)}</p>
            </div>
            
        </div>
    );
};

export default ServiceCard;