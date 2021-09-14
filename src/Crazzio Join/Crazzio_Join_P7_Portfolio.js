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
            <div id="Join_Portfolio" className="relative h-screen py-6 overflow-scroll bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">
                
                <div id="topWebName" class="my-10">
                    <p class="z-50 mx-auto font-serif text-6xl font-bold text-center lg:text-left text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div className="p-5 mx-2 my-16 space-y-3 bg-white rounded-lg shadow-2xl md:mx-6 lg:p-10 lg:mx-10 xl:w-114 xl:mx-auto">
                    <div className="">
                        <p className="text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">Well! It's time create your own portfolio</p>
                        <ul className="p-6 space-y-5 list-disc">
                            <li className="text-sm font-medium text-gray-600 sm:text-lg">Showcase all your previous exemplary works in one single directory.</li>
                            <li className="text-sm font-medium text-gray-600 sm:text-lg">The client gets an idea of how much value you are going to bring them by providing ample pieces of your work. It allows the client to have trust in your work.</li>
                            <li className="text-sm font-medium text-gray-600 sm:text-lg">It helps the prospective clients to decide whether or not to give the work to you without much talking on emails.</li>
                            <li className="text-sm font-medium text-gray-600 sm:text-lg">It acts as a promoter of your business and lets you put in your best work to enhance your gig economy career.</li>
                            <li className="text-sm font-medium text-gray-600 sm:text-lg">It prevents a lot of rejection while poaching clients on the internet.</li>
                        </ul>
                    </div>               
                    {/*Next Button*/}
                    <div className="mx-auto space-y-5 max-w-max">
                        <p className="p-2 text-lg font-bold text-center transition-all duration-300 bg-gray-900 cursor-pointer text-gray-50 hover:bg-gray-800">Build your own Portfolio</p>
                        <p className="text-lg font-bold text-center text-gray-600 cursor-pointer">Skip for now</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JoinPortfolio