import EstateCard from "../../Components/EstateCard";
import Features from "../../Components/Features/Features";
import Slider from "../../Components/Slider";
import { useLoaderData } from "react-router-dom";
import Team from "../../Components/Team/Team";
import Testimonial from "../../Components/Testimonial/Testimonial";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";

const Home = () => {
  const estates = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div className="max-w-6xl container mx-auto mt-20">
        <h2 className="text-center mb-10 text-5xl font-bold">
          Varied property selection <br /> in Our Site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 grow gap-10">
          {estates.map((estate) => (
            <EstateCard key={estate.id} estates={estate}></EstateCard>
          ))}
        </div>
      </div>

      <div className="features">
        <Features></Features>
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div>
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
};

export default Home;
