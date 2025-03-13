import Banner from "../../components/screens/home/Banner/Banner";
import "./HomeScreen.scss";
import Benefits from "../../components/screens/home/Benefits/Benefits";
import TestimonySingle from "../../components/screens/home/TestimonySingle/TestimonySingle";
import FAQ from "../../components/screens/home/FAQ/FAQ";
import CascadeTemplate from "../../components/screens/home/CascadeTemplate/CascadeTemplate";
import Try from "../../components/screens/home/Try/Try";

const HomeScreen = () => {
  return (
    <div className="pg-home">
      <Banner />
      <TestimonySingle />
      <CascadeTemplate />
      <Benefits />
      <FAQ />
      <Try />
    </div>
  );
};

export default HomeScreen;
