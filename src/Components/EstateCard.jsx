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
    <div className="max-w-6xl container mx-auto bg-green-500">
      <div className="max-w-xs rounded-md shadow-md bg-red-500 dark:text-gray-800 mb-10">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {estate_title}
            </h2>
            <p className="dark:text-gray-800">{segment_name}</p>
            <p>{description}</p>
            <p>{status}</p>
            <p>Price: {price}</p>
            <div className="flex justify-between">
              {facilities.map((facilities) => (
                <a
                  key={facilities}
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-1 text-[#23BE0A]"
                >
                  {facilities}
                </a>
              ))}
            </div>
            <p>Area: {area} sq ft</p>
            <p>Location: {location}</p>
          </div>
          <button
            type="button"
            className="flex btn-primary btn items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            <Link to={`/estates-details/${id}`}>View Property</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
