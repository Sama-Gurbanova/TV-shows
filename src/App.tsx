import axios from 'axios';
import './App.css'
import Details from './components/Details/details'
import List from './components/List/List';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from './configs/tmdb';
import Header from "./layouts/Header/header"
import { useEffect, useState } from 'react';
import { Tv } from './types';



function App() {
  const [currentTv, setCurrentTv] = useState<Tv | null>(null);
  const [tv, setTv] = useState<Tv[]>([]);


  async function fetchPopulars() {
    const res = await axios(`${BASE_URL}/popular?api_key=${API_KEY}`) 
    setCurrentTv(res.data.results[0])
  }

  async function fetchRecommendations(tv_id: number) {
    const res = await axios (`${BASE_URL}/${tv_id}/recommendations?api_key=${API_KEY}`);
    setTv(res.data.results);
  }


  const selectTv = ({tv: tv}) => {
    setCurrentTv(tv);
  }


  const searchTv = async (query: string) => {
    try {
      const res = await axios(`https://api.themoviedb.org/3/search/tv/?api_key=${API_KEY}&query=${query}`);
    if (res.data.results.length > 0) {
      setCurrentTv(res.data.results[0]);
    }
    }
    catch(error) {
      console.error(error);
    }
  }



  useEffect(() => {
    fetchPopulars();
    console.log("ComponentDidMount");
  },[]);

  useEffect(() => {
    fetchRecommendations(currentTv?.id || 0);
    console.log("ComponentDidUpdate");
  }, [currentTv]);

   useEffect(() =>{
    return () => {
      console.log("ComponentWillUnmount");
    };
   },[]);

  return (
    <div className='p-4 ' style={{
      backgroundImage: `url(${IMAGE_BASE_URL}${currentTv?.backdrop_path})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      color:"white",
      height:"100vh",
    }}>
      <Header onSearch={searchTv} />
       
       <div className='m-4  border border-solid rounded-lg h-96 p-4'>
        
        {/*Details*/}
        {currentTv && <Details tv={currentTv}/>}

        {/* List */}
        {tv.length > 0 &&  <List changeTV={selectTv}  tv={tv}/>}

       </div>
    </div>
  )
} 
 
export default App; 
