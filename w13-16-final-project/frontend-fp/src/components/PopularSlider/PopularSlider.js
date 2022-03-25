import React from "react";
import Slider from "react-slick";
import styles from "./PopularSlider.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState, useEffect} from"react";
import Catergories from "../../categoriesData.js"
import {Link} from "react-router-dom";

function PopularSlider ({handleCategoryClick}) {
  
  const [dataIwant, setDataIwant] = useState(Catergories);
//   console.log(dataIwant)
  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
return (

 
      <div className={styles.wholePopularContainer}>
          <h2 className={styles.PopularSliderHeader}> Popular Categories </h2>
          <div className={styles.PopularSliderContainer}> 
          <Slider className={styles.PopularSliderContent} {...settings}>
          {dataIwant.map((input)=>{
          return (
      <div className={styles.CenterContainer}
      key={input.id}
      onClick={(e) => handleCategoryClick(e)}
      >
       
      <div className={styles.PopularSliderContent1}>
            <h3 className={styles.PopularSliderImageTitle}>{input.category_name}</h3>
            <img
              src={input.image} alt={input.category_name}/>
        </div>

            </div>
                );
          })}
       </Slider>
  
            </div>
            </div>
           
        
        
          
)
            }
       



        

export default PopularSlider;