import React, { useEffect, useState } from 'react';
import { createServices } from '../../apiConfig';
import styles from "./Card.module.css";

const Card = ({title, imgPath}) => {

  const [img, setImg] = useState(null);

  useEffect(()=>{
    const url = createServices.tryGetImg(imgPath);
    setImg(url);
  }, [imgPath]);

  return (
    <div>
        <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={styles.card}>
        <h1 className={styles.card_title}
        >{title}</h1>
        </div>
        
    </div>
  )
}

export default Card