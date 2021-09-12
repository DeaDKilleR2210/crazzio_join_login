import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import JoinWork from "./Crazzio_Join_P5_work";
import { LanguagesList } from "./LanguagesList";
import Portfolio from "../Files/portfolio-1.jpg"


const JoinPortfolio = () =>{

    

    return(
        <div>
            <div id="Join_Portfolio" className="bg-gradient-to-b from-transparent to-gray-800 h-screen py-6 md:py-0 relative xl:py-8 overflow-scroll no-scrollbar">
                
                <div id="topWebName" class="absolute -mt-4 ">
                    <p class="z-50 mx-auto font-serif text-4xl font-bold text-center text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div className="w-114 p-20 mx-auto bg-white space-y-20">
                    <div className="">
                        <p className="text-4xl text-gray-900 font-semibold">Well! It's time create your own portfolio</p>
                        <ul className="space-y-5 list-disc p-6">
                            <li className="text-lg text-gray-600 font-medium">Showcase all your previous exemplary works in one single directory.</li>
                            <li className="text-lg text-gray-600 font-medium">The client gets an idea of how much value you are going to bring them by providing ample pieces of your work. It allows the client to have trust in your work.</li>
                            <li className="text-lg text-gray-600 font-medium">It helps the prospective clients to decide whether or not to give the work to you without much talking on emails.</li>
                            <li className="text-lg text-gray-600 font-medium">It acts as a promoter of your business and lets you put in your best work to enhance your gig economy career.</li>
                            <li className="text-lg text-gray-600 font-medium">It prevents a lot of rejection while poaching clients on the internet.</li>
                        </ul>
                    </div>               
                    {/*Next Button*/}
                    <div className=" mx-auto max-w-max space-y-5">
                        <p className="font-bold cursor-pointer transition-all duration-300 text-lg text-gray-50 text-center hover:bg-gray-800 bg-gray-900 p-2">Build your own Portfolio</p>
                        <p className="font-bold cursor-pointer text-lg text-gray-600 text-center">Skip for now</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JoinPortfolio