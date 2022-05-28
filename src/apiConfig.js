import axios from "axios";


export const API = {

    urlBase: 'https://api.themoviedb.org/3',
    apiKey: '?api_key=8a3ec2b6f0f3d0fcb694d25b4883c3a4',
    entity: {
        topRatedMovies: "/movie/top_rated",
        topRatedTv: "/tv/top_rated",
        popularMovies: "/movie/popular",
        popularTv: "/tv/popular",
        movieById: "/movie/",
        tvById: "/tv/",
      },
    language:{
        en: "&language=en-US",
        es: "&language=en-ES",
    },
    pagination: "&page=",
    imageUrl: "https://image.tmdb.org/t/p/",
    quality:{
        posterSmall:"/w200",
        posterMedium: "/w300",
        posterLarge: "/w500",
        backdropSmall: "/w300",
        backdropMedium: "/w780",
        backdropLarge: "/w1280",
    }
};

export const apiLanguage ={
    english : "en",
    spanish : "es",
}
export const apiQuality = {
    posterSmall:"/w200",
        posterMedium: "posterMedium",
        posterLarge: "posterLarge",
        backdropSmall: "backdropSmall",
        backdropMedium: "backdropMedium",
        backdropLarge: "backdropLarge",
}

export const apiEntity = {
    topRatedMovies: "topRatedMovies",
    topRatedTv: "topRatedTv",
    popularMovies: "popularMovies",
    popularTv: "popularTv",
    movieById: "movieById",
    tvById: "tvById",
  };

export const createServices = {
    tryGet: async (entity, lang = 'es', page = 1)=>{ 
        console.log(entity)
        const url = `${API.urlBase}${API.entity[entity]}${API.apiKey}${API.language[lang]}${API.pagination}${page}`;
        

        try{
            const response = await axios(url);
            return response.data.results;
        }catch (error){
            return [];
        }
        
        
    },
    tryGetById: async(entity, id, lang ='es')=>{ 
        
        const url = `${API.urlBase}${API.entity[entity]}/${id}${API.apiKey}${API.language[lang]}`;

        try{
            const response = await axios(url);
            return response;
        }catch (error){
            return error;
        }
        
        
    },
    tryGetImg: (path, quality = apiQuality.posterLarge) => {
        return `${API.imageUrl}${API.quality[quality]}${path}`;
      },
};



/*
services.get(API.entity.topRatedMovies, "en", 1);
    
    personalizar mensajes
*/



/*

https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
*/