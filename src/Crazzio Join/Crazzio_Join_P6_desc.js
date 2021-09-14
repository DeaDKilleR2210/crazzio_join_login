import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import { LanguagesList } from "./LanguagesList";
import { map } from "async";
import JoinPortfolio from "./Crazzio_Join_P7_Portfolio";


const Joindesc = () =>{

    const [enteredtitle, setEnteredtitle] = useState("")

    const onchangetitle = (event) =>{
        setEnteredtitle(event.target.value)
    }

    const ForwardButton = () =>{
        document.getElementById("Join_desc").style.display = "none"
        document.getElementById("JoinPortfolio").style.display = "block"
    }

    const Languages = LanguagesList.map((lang) =>
        <option className="text-lg font-medium text-gray-700 bg-gray-100" key={LanguagesList.indexOf(lang)} >{lang}</option>
    )
    return(
        <div>
            <div id="Join_desc" className="h-screen py-6 overflow-scroll bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">
                
                <div id="topWebName" class="my-10">
                    <p class="z-50 mx-auto font-serif text-6xl font-bold text-center lg:text-left text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="p-5 mx-2 my-16 space-y-3 bg-white rounded-lg shadow-2xl md:mx-6 lg:p-10 lg:mx-10 xl:w-120 xl:mx-auto">
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="hidden float-right p-2 bg-gray-900 rounded-full shadow-lg cursor-pointer md:block w-14 h-14 sm:w-16 sm:h-16 hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>

                    {/*Headings and Inputs*/}
                    <div className="space-y-16">
                        <div className="space-y-3">
                            <p className="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">Ah! Finally the last step</p>
                            <p className="text-sm font-medium text-gray-800 sm:text-base md:text-lg" >Express your work, yourself, your thinking, your way of doing work and stuff related to these in your job description .</p>
                        </div>
                        
                        
                        <input type="text" onChange = {onchangetitle} type="text" className="w-full p-2 text-base font-normal placeholder-gray-500 bg-gray-100 border-4 border-gray-200 border-dashed rounded-md outline-none h-96 " />

                        
                    </div>
                    
                    <div onClick = {ForwardButton} className="p-2 mx-auto bg-gray-900 rounded-full shadow-lg cursor-pointer md:hidden w-14 h-14 hover:bg-gray-800">
                        <img src={next_white} className="w-10 h-10 mt-.5 ml-1" />
                    </div>  

                    {/*Demo Card*/}
                    <div className="hidden py-2 md:block ">
                        <Freelancer_Democard title = {enteredtitle} />
                    </div>
                </div>
            </div>
            
            {/*Next Page for about*/}
            <div id="JoinPortfolio" className="hidden">
                <JoinPortfolio />
            </div>
        </div>
    )
}

export default Joindesc