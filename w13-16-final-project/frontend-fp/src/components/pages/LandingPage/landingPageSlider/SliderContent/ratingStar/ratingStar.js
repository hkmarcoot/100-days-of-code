import{ useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import styles from './style.module.css'

function RatingStar(rate) {
//   const [rating, setRating] = useState(0) // initial rating value
  const rateToUse= rate;
    const rating =(rateToUse.rate) *20;
    //20 per star
  // Catch Rating value
//   const handleRating = (rate) => {
//     setRating(rate)
//     // other logic
//   }


  return (
    <div className={styles.StarRatingContainer} data-testid="starRatingContainerTesting">
      <Rating className={styles.StarsItself} ratingValue={rating} /* Available Props */ />
    </div>
  )
}

export default  RatingStar
//  <div className='App'>
//       <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
//     </div>