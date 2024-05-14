import React from 'react'
import Template from '../components/Template';
import Spinner from "../components/Spinner"
import {useState,useEffect} from 'react';

function Home() {

    const url ="https://fakestoreapi.com/products";
    const [loading,setloading] = useState(false);
    const [posts,setposts] = useState([]);
    

    async function gettingData(){
        console.log("call aayi")
        setloading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setposts(data);
            
        } 
        catch (error) {
            console.log("error aaye h bhai");
            setposts([]);
        }
        setloading(false);
    }

    useEffect( ()=>{
        gettingData();
    },[] );

  return (
    
    <div >
        {
            loading ? ( <Spinner/> ) : (
                posts.length > 0 ? (  
                    <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                     max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                        {    posts.map( (post) => ( <Template key={post.id} post={post}  /> ) )         }
                    </div>
                  ) : 
                ( 
                    <div className="flex justify-center items-center">
                    <p>No Data Found</p>
                    </div> 
                )
            )


        }
    </div>
  )
}

export default Home