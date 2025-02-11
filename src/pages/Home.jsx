import Activities from "../components/Activities";
import OurImpact from "../components/OurImpact";
import SwiperSlider from "../components/SwiperSlider";
import VolunteerPostHome from "../components/VolunteerPostHome";

const Home = () => {
  return (
    <>
      <SwiperSlider></SwiperSlider>
      <div className="container mx-auto">
        <VolunteerPostHome></VolunteerPostHome>
        <OurImpact></OurImpact>
        <Activities></Activities>
      </div>
    </>
  );
};

export default Home;
