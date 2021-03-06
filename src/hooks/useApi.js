import React, { useEffect, useState } from 'react';
import {createServices, apiEntity, apiLanguage, apiQuality} from '../apiConfig';
import { randomIndex } from '../utils/utils';


const useApi = (entity, lang = apiLanguage.spanish, pagination= 1) => {
  const [values, setValues] = useState([]);
  const [loading, setLoading]= useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);

  const getData = async () => {
    setLoading(true);
    setError(null);
    
    const res = await createServices.tryGet(entity, lang, page);
    console.log(res)
    if (res.length === 0) {
      setError("Error al cargar datos");
      
    } else {
      setValues(res);
      
      
    }
    setLoading(false);


  };

  useEffect (()=> {
    getData();
  },[page]);

  const nextPage = () => {};
  const previusPage = () => {};

  const [randomValue, setRandomValue] = useState(null);
  const [randomImg, setRandomImg] = useState(null);

  const getRandomValue = () => {
    if (values.length === 0) {
      return;
    } else {
      const selectedValue = values[randomIndex(0, values.length - 1)];
      setRandomValue(selectedValue);
      const backgroundImage = createServices.tryGetImg(
        selectedValue.backdrop_path,
        apiQuality.backdropLarge
      );
      setRandomImg(backgroundImage);
    }
  };

  useEffect(() => {
    getRandomValue();
  }, [values]);

  return [values, loading, error, randomValue, randomImg];
};



export default useApi