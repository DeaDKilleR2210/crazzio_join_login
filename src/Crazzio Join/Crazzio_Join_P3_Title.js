import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import JoinAbout from "./Crazzio_Join_P4_About";


const JoinTitle = () =>{

    const [enteredtitle, setEnteredtitle] = useState("")

    const onchangetitle = (event) =>{
        setEnteredtitle(event.target.value)
    }

    const ForwardButton = () =>{
        document.getElementById("Join_Title").style.display = "none"
        document.getElementById("JoinAbout").style.display = "block"
    }

    return(
        
        <div>
            <div  id="Join_Title" className="bg-gradient-to-b from-transparent to-gray-800 h-screen py-6 md:py-0 xl:py-8 overflow-scroll no-scrollbar">
                
                <div id="topWebName" class="absolute -mt-4 ">
                    <p class="z-50 mx-auto font-serif text-4xl font-bold text-center text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="w-120 shadow-2xl p-20 mx-auto bg-white space-y-3 rounded-lg">
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="bg-gray-900 rounded-full h-16 shadow-lg w-16 p-2 float-right cursor-pointer hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>

                    {/*Headings and Inputs*/}
                    <div id="Join_Title" className="">
                        <p className="text-4xl text-gray-900 font-semibold">What best title can you give it to yourself?</p>
                        <p className="text-gray-800 text-lg font-medium" >Give yourself a suitable title that describes your work.</p>
                        {/*Input Title*/}
                        <div className="my-6 space-y-2">
                            <input onChange = {onchangetitle} className="w-full bg-gray-100 h-12 outline-none text-xl rounded-md font-normal p-2 " />
                            <p className="text-gray-500">Eg. Python Developer | Web Developer | Data Analyst...</p>
                        </div>
                    </div>
                    

                    {/*Demo Card*/}
                    <div className="py-2">
                        <Freelancer_Democard title = {enteredtitle} />
                    </div>
                </div>
            </div>


            {/*Next Page for about*/}
            <div id="JoinAbout" className="hidden">
                <JoinAbout />
            </div>
        </div>
    )
}

export default JoinTitle