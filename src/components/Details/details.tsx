import { Tv } from "../../types";
import StarRating from "../StarRating/StarRating";


const Details = ({tv}: Tv) => {
   return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
         <h3 className="font-bold text-xl mb-2">{tv.name}</h3>
         <div className="px-6 py-4 ">
            <StarRating rating={tv.vote_average} />
         </div>
         <p className="text-gray-700 text-base">{tv.overview}</p>
      </div>
   );
};

export default Details;
