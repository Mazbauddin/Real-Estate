import { Link } from "react-router-dom";

const EstateCard = ({ estates }) => {
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    id,
    image,
  } = estates;
  return (
    <div
      className="max-w-7xl container mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div className="max-w-[400px] rounded-md shadow-md mb-10 relative mx-5 lg:mx-0">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <p className="absolute top-3 left-5 bg-[#33a5f1] w-[70px] text-center text-white cursor-pointer rounded-md">
          {status}
        </p>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide text-[#e5958e] cursor-pointer">
              {estate_title}
            </h2>
            <p className="dark:text-gray-800">{segment_name}</p>
            <p>{description}</p>

            <p className="text-blue-400 font-bold">$ {price}</p>
            <div className="flex justify-between">
              {facilities.map((facilities) => (
                <a
                  key={facilities}
                  rel="noopener noreferrer"
                  href="#"
                  className=" py-1 text-[#e5958e]"
                >
                  # {facilities}
                </a>
              ))}
            </div>
            <p className="">Area: {area} sq ft</p>
            <p>Location: {location}</p>
          </div>
          <button type="button" className="btn_wave btn1 rounded-md">
            <Link to={`/estates-details/${id}`}>View Property</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
