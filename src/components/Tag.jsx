
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag,setTag]=useState('');
  
 const {gif , loading , fetchData}=useGif();

  return (
    <div className="w-1/2 bg-blue-400 min-h-[450px] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <p className="text-2xl underline uppercase font-bold"> Random {tag} Gif </p>
      
    {
      loading?(<Spinner/>):<img src={gif} alt="GIF" width="450" />
    }

    <input 
    type="text" 
    name="" 
    id=""
    className='w-10/12 rounded-lg text-center'
    onChange={(event)=>{setTag(event.target.value)}}
    value={tag}
    />

      <button
        onClick={()=>{ fetchData()}}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
  };

export default Tag;












// ---Without Custom Hook 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from './Spinner';


// //const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Tag = () => {

//   const [tag,setTag]=useState('');
//   const [gif, setGif] = useState('');

//   const [loading,setLoading]=useState('false');
 
//   async function fetchData(){
//     setLoading(true)
//     const url = 'https://api.giphy.com/v1/gifs/random?api_key=CdFT8SwSq7I6Y6QsEDWtI3SS5QEuhyop&tag=${tag}'

//     //CdFT8SwSq7I6Y6QsEDWtI3SS5QEuhyop

//     const {data} = await axios.get(url);
//     const res=data.data.images;
//     const imageSource= res.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false)
//     console.log(imageSource )

//   }
//   useEffect(()=>{
//   fetchData () 
//   },[])

//   function clickHandler() {
//     fetchData();
//   }
//   function changeHandler(event){
//     setTag(event.target.value)
//   }

//   return (
//     <div className="w-1/2 bg-blue-400 min-h-[450px] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
//       <p className="text-2xl underline uppercase font-bold"> Random { tag} Gif </p>
      
//     {
//       loading?(<Spinner/>):<img src={gif} alt="GIF" width="450" />
//     }

//     <input 
//     type="text" 
//     name="" 
//     id=""
//     className='w-10/12 rounded-lg text-center'
//     onChange={changeHandler}
//     value={tag}
//     />

//       <button
//         onClick={clickHandler}
//         className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg"
//       >
//         Generate
//       </button>
//     </div>
//   );
//   };

// export default Tag;
