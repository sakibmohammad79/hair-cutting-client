
const Heading = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 m-auto mb-12 pt-20 space-y-4 text-center">
            <h3 className="text-5xl font-bold">{heading}</h3>
            <p className="text-orange-500 font-semibold">{subHeading}</p>
            <div className="divider"></div>
        </div>
    );
};

export default Heading;