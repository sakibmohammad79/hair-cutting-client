const AllServicesCard = ({ service }) => {
  const { name, image, details, price } = service;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[220px] w-[350px]"
          src={image}
          alt="service"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mt-0 mb-0 font-bold">{name}</h2>
        <p className="mt-0 mb-0 font-semibold">{details.slice(0, 75)}</p>
        <p className="mt-0 mb-0 font-semibold">Price: <span className="text-orange-500 font-bold text-lg">${price}</span></p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning text-white mt-0 mb-0">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
