import React, { useEffect, useState } from "react";
import githubLogo from "../../assets/githubLogo.webp"
import { Link,useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
export default function Github() {

    const data = useLoaderData([]);
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //         fetch("https://api.github.com/users/nit0002")
    //         .then(response => response.json())
    //         .then((data ) => {
    //             console.log(data);
    //             setData(data);
    //         }) 
    // },[])
    return (
        <div className="py-16  ">
            {/* <div>
                Github Follower : {data.followers}
            </div> */}
            <div className="flex justify-center item-center  gap-8 m-6">
              
                        <img className=" object-contain rounded-md"
                        src={data.avatar_url}
                        width={100}
                        alt="user profile"
                          />
                        <strong className="mt-6">Github Following : {data.following} </strong>
                        <strong className="mt-6">Github Followers : {data.followers} </strong>
            </div>
            <div className="text-center">
                        <p className="m-4" >This is my github Profile</p> 
                        <Link 
                         to="https://github.com/nit0002"
                         className="hover:underline hover:text-orange-700 m-4 "
                         >Click here for Github</Link>
            </div>
           
           
        </div>
    );
}

export const githubinfoloader = async() =>{
    const response = await fetch('https://api.github.com/users/nit0002')
    return response.json()
}

