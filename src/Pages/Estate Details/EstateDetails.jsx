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

      {/* banner area */}
      <div
        className="hero min-h-screen mt-20"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* details card */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* details card end */}
      {/* hell */}

      {/* hell */}

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
