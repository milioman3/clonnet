import React from "react";
import { apiEntity } from "../apiConfig";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
import Separator from "../components/Separator/Separator";


const Homepage = () => {
  return (
    <>
      <Banner />
      <Separator height={"30px"} />
      <Carousel
        entity={apiEntity.popularMovies}
        title={"Peliculas populares"}
      />
      <Separator height={"20px"} />
      <Carousel
        entity={apiEntity.topRatedMovies}
        title="Peliculas mejor valoradas"
      />
      <Separator height={"20px"} />
      <Carousel entity={apiEntity.popularTv} title="Series populares" />
      <Separator height={"20px"} />
      <Carousel entity={apiEntity.topRatedTv} title="Series mejor valoradas" />
      <footer>
        
      </footer>
    </>
  );
};

export default Homepage;