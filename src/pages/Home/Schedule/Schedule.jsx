

const Schedule = () => {
    return (
        <div className=" bg-[#F1E7DF] p-20">
            <div className="bg-[#FFFFFF] md:grid grid-cols-2 justify-center items-center gap-8">
            <div>
                <img src="https://i.postimg.cc/DfCTMfjF/img-99.webp" alt="" />
                <h3></h3>
            </div>
            <div className="pl-12">
                <h4 className="text-2xl text-orange-500 font-bold">CALL NOW - (189 983 837 1)</h4>
                <h2 className="text-5xl font-bold">WORKING HOURS</h2>
                <div className="grid grid-cols-2 mt-4 text-lg ">
                    <div className="space-y-2">
                        <p>SATUREDAY</p>
                        <p>SUNDAY</p>
                        <p>TUESDAY</p>
                        <p>WEDNESDAY</p>
                        <p>THURSDAY</p>
                        <p>FRIDAY</p>
                        <p>MONDAY</p>
                    </div>
                    <div className="space-y-2">
                        <p>09.00AM-11.00PM</p>
                        <p>09.00AM-11.00PM</p>
                        <p>09.00AM-11.00PM</p>
                        <p>09.00AM-11.00PM</p>
                        <p>09.00AM-11.00PM</p>
                        <p>09.00AM-11.00PM</p>
                        <p className="text-red-500">Closed</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Schedule;