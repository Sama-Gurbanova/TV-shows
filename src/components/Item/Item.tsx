import { IMAGE_BASE_URL } from "../../configs/tmdb";
import StarRating from "../StarRating/StarRating";

interface ItemProps {
   image: string;
   title: string;
   description: string;
   rating: number;
   releaseDate: string;
}

const Item = ({
   image,
   title,
   description,
   releaseDate,
   changeTV
 }: ItemProps) => {
   return (
      <div 
      onClick={changeTV}
      style={{
      minWidth: '400px', 
      height:'500px',
      backgroundImage: `url(${IMAGE_BASE_URL}${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
      }} className="border border-solid rounded cursor-pointer overflow-hidden shadow-lg  mx-4 p-4 ">
         <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-gray-700 text-base">{description}</p>
            <p className="text-gray-500 text-sm">Release date:{releaseDate}</p>
         </div>

         <div className="px-6 py-4">
            <StarRating rating={4.5} />
         </div>
      </div>
   );
}

export default Item;