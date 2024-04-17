// import { useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";

const EstateDetails = () => {
  // const estates = useLoaderData();
  // const { segment_name, description, price, image } = estates;
  const { id, estate_title } = useParams();
  console.log(estate_title);
  console.log(id);
  return (
    <>
      {/* <img
        src="https://capricathemes.com/opencart/OPC09/OPC090220/image/cache/catalog/main-banner-1-1903x680.jpg"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[680px]">
        <div className=" flex justify-center items-center bg-white">
          <img src={estates.image} alt="" />
        </div>

        <div className=" bg-black text-white flex items-center">
          <div className=" bg-black h-auto md:h-[90%] md:-ml-24  p-4">
            <h1 className="text-5xl font-bold mb-8">{estates.segment_name}</h1>
            <p>{estates.description}</p>
            <p>
              GKB Optical online store brings in the best assortment of
              sunglasses. You can get a sunglass based on your lifestyle,
              fashion and requirements.{" "}
            </p>

            <h1 className="text-4xl font-bold my-4">${estates.price}</h1>
            <br />
            <button className="btn">Buy it now!</button>
          </div>
        </div>
      </div> */}
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl mt-20">{id}</h2>
          <p>{estate_title}</p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default EstateDetails;
