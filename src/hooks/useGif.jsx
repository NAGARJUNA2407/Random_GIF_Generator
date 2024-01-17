import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const randomMemeUrl = 'https://api.giphy.com/v1/gifs/random?api_key=CdFT8SwSq7I6Y6QsEDWtI3SS5QEuhyop&tag'
// const tagMemeUrl = 'https://api.giphy.com/v1/gifs/random?api_key=CdFT8SwSq7I6Y6QsEDWtI3SS5QEuhyop&tag=${tag}'


const randomMemeUrl = 'https://api.giphy.com/v1/gifs/random?api_key=CdFT8SwSq7I6Y6QsEDWtI3SS5QEuhyop&tag'

const tagMemeUrl = 'https://api.giphy.com/v1/gifs/random?api_key=CdFT8SwSq7I6Y6QsEDWtI3SS5QEuhyop&tag=${tag}'

const useGif = (tag) => {
   
    const [gif, setGif] = useState('');
  
    const [loading,setLoading]=useState('false');
   
    async function fetchData(){
      setLoading(true)
      const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
      const res=data.data.images;
      const imageSource= res.downsized_large.url;
      setGif(imageSource);
      setLoading(false)
      console.log(imageSource )
  
    }
    useEffect(()=>{
    fetchData ('car') 
    },[])

    return {gif , loading , fetchData}
  
 
}

export default useGif
