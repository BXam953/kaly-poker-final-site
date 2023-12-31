"use client";

import { useState, useRef } from "react";
import Pay from "./stake/stakeHome";
import { FaCircleXmark } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";


export default function Home(){

  const [pop, setPop] = useState(false);
  const [videoEnd, setVideoEnd] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const videoRef = useRef(null);

  function handlePlayer(){
    videoRef.current.play();
    setVideoStarted(true);
  }

  return (
    <main className=" h-screen w-screen overflow-x-hidden">
      <div className="h-screen w-screen">

      <video ref={videoRef} width={100} height="auto" className="absolute h-screen w-screen object-cover" poster="https://res.cloudinary.com/dc3igtkil/image/upload/v1692029259/video_wzmvra.png" src="https://res.cloudinary.com/dc3igtkil/video/upload/v1692002744/video1_jcdqnm.mp4" onEnded={() => {setVideoEnd(true)}} playsInline></video>
      { !videoStarted && 
      <div className="h-screen w-screen flex justify-center items-center text-center ">
      <button className="absolute text-red-600 font-bold text-2xl pt-20" onClick={handlePlayer}>ENTER</button>
      </div>
      }
      {videoEnd && (
        <div>
        {
        pop ?
        <div className="h-screen w-screen justify-center flex flex-col absolute">  
        <button onClick={() => {setPop(false);}} className=" mt-20 ml-10"><FaCircleXmark size={40}/></button>
        <Pay />
        </div>
        : 
        <div className=" flex justify-between absolute">
          <Pay />
        </div>
       }      
        </div>
      )}
      </div>

    </main>
  )
}
