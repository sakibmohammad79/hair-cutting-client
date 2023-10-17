const AboutUs = () => {
  return (
    <div  className="bg-[#0A0B0B]">
      <div className="md:grid grid-cols-2 justify-center items-center gap-16 py-24">
        <div className="flex gap-6">
          <img className="pt-3 pb-3"  src="https://i.postimg.cc/RZb0BVpc/img-34.webp" alt="" />
          <img  src="https://i.postimg.cc/Y0bHzbJ1/img-34-2.webp" alt="" />
        </div>
        <div className="space-y-4 mr-6">
            <h6 className="text-orange-500 font-semibold">Established 1989</h6>
            <h3 className="text-5xl font-bold text-white">Gentlemans Barbershop is the #1 barber shop</h3>
            <p className="font-semibold text-white">Etiam semper nibh orci, ac tincidunt consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Duis bibendum Etiam semper nibh orci, ac tincidunt mi consecteture a. in quis tortor ex. Morbi cursus sed</p>
            <button className="btn bg-[#D9842F] border-none text-white font-bold">Aobut Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
