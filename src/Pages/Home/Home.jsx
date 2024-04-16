import EstateCard from "../../Components/EstateCard";
import Slider from "../../Components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estates={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
