import Navbar from "../../components/Navbar/Navbar";
import bgIcon from "../../assets/images/Home/LandingSection/bg-icon.png";
import bgImage from "../../assets/images/Home/LandingSection/background-image.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        id="landing"
        className="bg-[#B8875F] h-[80vh] flex flex-col justify-center items-center sm:items-start relative section-min-height"
      >
        <div className="absolute top-0 right-0 h-full translate-x-1/2 sm:translate-x-0">
          <img src={bgImage} alt="Background image" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center z-10 px-10 lg:w-2/3">
          <div className="relative">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-noto-serif-display text-center uppercase font-medium text-white mt-5">
              Belle <br /> Chevelure
            </h1>
            <div className="w-1/2 absolute top-0 left-0 right-0 -z-10 mx-auto">
              <img src={bgIcon} alt="Background logo" />
            </div>
            <hr className="mt-10 lg:mt-20" />
          </div>
          <p className="font-montserrat text-white uppercase text-xl lg:text-2xl xl:text-3xl mt-6 text-center">
            From Inner Radiance to Outer Elegance
          </p>
          <Button text="make an appointment" link="/" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
