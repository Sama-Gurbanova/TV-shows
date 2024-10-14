 import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface StarRatingProps {
   rating: number;
}


const StarRating = ({rating= 10} : StarRatingProps) => {
  const getStars = () => {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
         {Array(fullStars).fill(<BsStarFill className= "text-yellow-500" />)}
         {hasHalfStar && <BsStarHalf className="text-yellow-500" />}
         {Array(emptyStars).fill(<BsStar className= "text-yellow-500"/>)}
      </>   
     )
  }
   
  return ( 
    <div style={{alignItems:'center'}} className='flex item-center gap-x-4'>
      {getStars()} <span className='ml-2 '> {(rating / 2).toFixed(1)} / 5 </span>
    </div>
  )
   
}

export default StarRating; 