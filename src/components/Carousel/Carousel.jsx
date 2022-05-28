import React from 'react';
import Slider from 'react-slick';
import Card from '../Card/Card';
import { settingsSlider } from './settings';
import useApi from '../../hooks/useApi';
import styles from './Carousel.module.css'

import Separator from '../Separator/Separator';

const Carousel = ({entity, title}) => {

    const [movies, loading, error] = useApi(entity);

  return (
    <>
     <Separator height={"20px"} />
    <div> 
      <h2 className={ styles.carousel_title}
      
      > {title} </h2>
    </div>
    <Slider {...settingsSlider}>
        {loading ? (<h1>Loading...</h1>)
         : (
            movies.map((movie) => (
                <Card key={movie.id} title={movie.title || movie.name } imgPath={movie.backdrop_path || movie.poster_path} />        
            ))
        )}
        
        
    </Slider>

    
    
    </>
  )
}

export default Carousel