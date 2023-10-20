import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HairMaster from "../HairMaster/HairMaster";
import News from "../News/News";
import Price from "../Price/Price";
import Review from "../Review/Review";
import Schedule from "../Schedule/Schedule";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HairCutting || Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Schedule></Schedule>
      <HairMaster></HairMaster>
      <Gallery></Gallery>
      <News></News>
      <Price></Price>
      <Review></Review>
    </div>
  );
};

export default Home;
