import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./sliderContent.module.css";
import RatingStar from "./ratingStar/ratingStar";
import travelData from "../../../../../travelData"
import {Link} from "react-router-dom";
import {useState,useEffect} from"react";


function SliderContent(){

// const renderData=data
// const [sliderContent, setSliderContent] = useState(travelData);
// if(sliderContent === []){
//     setSliderContent(travelData)
// }else{
//     setSliderContent(renderData)
// }
const [dataIwant, setDataIwant] = useState(travelData);



 async function fetchData() {
   const response = await fetch("https://xpeerience.herokuapp.com/events");
   const dataget = await response.json();
   //   console.log(data)
   //   setMapRes(data.payload.responseResources);
   setDataIwant(dataget);
 }
 
useEffect(() => {
 fetchData();
}, []);
// console.log(dataIwant)
// console.log(data)



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        loazyLoad:false,
    };

    return(<>
    <div className={styles.slideContainer} data-testid="slideContainertesting">
        
        
            <Slider {...settings} className={styles.slideMain} >
            {dataIwant.map((input)=>{
                return (

                  <div key={input.id}>
                      
                    {/* {console.log(input.title)} */}
                    <Link
                      to="/event"
                      className={styles.linkstyle}
                      //changing the input to id 
                      state={{ input:  {input}}}
                    >
                      <div className={styles.tileContainer}>
                        <div className={styles.tile}>
                          <div>
                            <img
                              className={styles.imgContainer}
                              src={input.image}
                              alt={input.title}
                            />
                          </div>
                          <p className={styles.title}>{input.title}</p>
                          <p className={styles.countryTitle}>
                            {input.location}
                          </p>

                          <div className={styles.ratingNDateContainer}>
                            <RatingStar rate={input.star_rating} />
                            <p className={styles.tileDate}>{input.date}</p>
                          </div>

                          <div className={styles.paragraphContainer}>
                            <p className={styles.paragraphDesc}>
                              {input.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
            })}
        
           
        </Slider>
        </div>
    </>
    )
}
    

export default SliderContent;