import Heading from "../../../Components/Heading/Heading";


const HairMaster = () => {
    return (
        <div>
            <Heading heading={"OUR BARBER"} subHeading={"GET YOUR BEARD"}></Heading>
            <div className="flex justify-center items-center gap-8">
                <div className="relative">
                <img className="h-[490px]" src="https://i.postimg.cc/vZYSQs2h/img-37.webp" alt="" />
                <div className="bg-black w-full px-2 py-4 text-white absolute bottom-0">
                <h3 className="text-2xl font-bold">THOMAS LAUNGE</h3>
                <p className="font-semibold">Owner - Barber - Off Tues & Weds</p>
                </div>
                </div>
                <div className="relative">
                <img className="h-[490px]" src="https://i.postimg.cc/rs2Q7XtS/img-38.webp" alt="" />
                <div className="bg-black w-full px-2 py-4 text-white absolute bottom-0">
                <h3 className="text-2xl font-bold">THOMAS LAUNGE</h3>
                <p className="font-semibold">Owner - Barber - Off Tues & Weds</p>
                </div>
                </div>
                <div className="relative">
                <img className="h-[490px]" src="https://i.postimg.cc/RV9gRmmm/img-39.webp" alt="" />
                <div className="bg-black w-full px-2 py-4 text-white absolute bottom-0">
                <h3 className="text-2xl font-bold">THOMAS LAUNGE</h3>
                <p className="font-semibold">Owner - Barber - Off Tues & Weds</p>
                </div>
                </div>
                {/* <img className="h-[490px]" src="https://i.postimg.cc/rs2Q7XtS/img-38.webp" alt="" />
                <img className="h-[490px]" src="https://i.postimg.cc/RV9gRmmm/img-39.webp" alt="" /> */}
            </div>
        </div>
    );
};

export default HairMaster;