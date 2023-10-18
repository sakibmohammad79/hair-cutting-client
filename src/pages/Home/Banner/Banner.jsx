const Banner = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/5jcGcVm1/pexels-cottonbro-studio-3998421.jpg')] bg-cover bg-center h-screen brightness-90">
            <div className="flex-col pt-60 justify-center items-center text-center text-white space-y-3">
                <img className="mx-auto" src="https://i.postimg.cc/kMt8BWF2/logo-1.webp" alt="" />
                <h1 className="text-6xl font-bold">HAIRCUT & SHAVES</h1>
                <h3 className="text-3xl font-semibold">Enjoy & relax in a luxury barber shop environment Top Cut Hair Style with Fancy Tradition</h3>
                <button className="btn bg-[#D9842F] border-none text-white font-bold">BOOK NOW</button>
            </div>
        </div>
    );
};

export default Banner;