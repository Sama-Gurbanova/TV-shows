import { Tv } from "../../types";
import Item from "../Item/Item";



const fetchedTvshows: TV [] = [
   {
      title: 'Monster',
      description: 'The story of the Menéndez brothers, who were convicted in 1996 of murdering their parents José and Mary Louise “Kitty” Menéndez.',
      rating: 4.4 ,
      releaseDate: ' September 19, 2024', 
      image:''
   },

   {
      title: 'The Good Doctor',
      description: 'Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospitals surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.', 
      rating: 4.6 ,
      releaseDate: 'May 21, 2024',
      image:''
   },
];



const List = ({tv, changeTV}) => {
   return (
      <div className="flex overflow-x-scroll items-center justify-between gap-x-4 p-6">
         {
           tv.map((TV: Tv , index: number) => (
            <Item 
              key= {index} 
              title= {TV.title}
              description={TV.overview}
              rating={TV.vote_average}
              releaseDate={TV.release_date}
              image={TV.backdrop_path}
              changeTV= {() => changeTV(tv)}
            />
           ))
         }
      </div>
   )
}

export default List; 