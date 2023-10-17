import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HairMaster from "../HairMaster/HairMaster";
import News from "../News/News";
import Review from "../Review/Review";
import Schedule from "../Schedule/Schedule";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Schedule></Schedule>
            <HairMaster></HairMaster>
            <Gallery></Gallery>
            <Review></Review>
            <News></News>
        </div>
    );
};

export default Home;