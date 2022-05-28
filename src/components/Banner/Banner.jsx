import React, { useEffect } from "react";
import { apiEntity } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import Navbar from "../Navbar/Navbar";
import Separator from "../Separator/Separator";
import styles from "./Banner.module.css";


const Banner = () => {
  const [movie, loading, error, randomMovie, backImg] = useApi(
    apiEntity.popularMovies
  );

    
  return (

    <div>
      <header>
        <Navbar/> 
      </header>
    <div
      className={`${styles.banner_container}`}
      style={
        loading
          ? { backgroundImage: "none" }
          : {
              backgroundImage: `url(${backImg})`,
            }
      }
    >
      <div className={styles.banner_gradient}>
        <Separator height={"200px"} />

        <div className={styles.banner_title}>
          <h1>{loading ? "Loading..." : randomMovie?.title}</h1>
        </div>
        <Separator height={"20px"} />

        <div className={styles.banner_description}>
          <h2>{loading ? "Loading..." : randomMovie?.overview}</h2>
        </div>
        <div className={styles.banner_buttons}>
          <button
            className={styles.banner_button}
          >
           
           <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/store-app-store-google-google-play-logo-play-png-logo-symbol-17.png" alt="" className= {styles.banner_logo} />  Reproducir
          </button>
          <button className={styles.banner_button}> <img src="https://icones.pro/wp-content/uploads/2021/05/icone-d-information-grise.png" alt="" className={styles.banner_logo} /> Más información</button>
        </div>
       
      </div>
      <Separator height={"40px"} />
    </div>
    </div>
  );
};

export default Banner;