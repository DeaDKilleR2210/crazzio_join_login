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
        <option className="text-lg bg-gray-100 font-medium text-gray-700" key={LanguagesList.indexOf(lang)} >{lang}</option>
    )
    return(
        <div>
            <div id="Join_desc" className="bg-gradient-to-b from-transparent to-gray-800 h-screen py-6 md:py-0 xl:py-8 overflow-scroll no-scrollbar">
                
                <div id="topWebName" class="absolute -mt-4 ">
                    <p class="z-50 mx-auto font-serif text-4xl font-bold text-center text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="w-120 shadow-2xl p-20 mx-auto bg-white  rounded-lg">
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="bg-gray-900 rounded-full h-16 -mt-3 shadow-lg w-16 p-2 float-right cursor-pointer hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>

                    {/*Headings and Inputs*/}
                    <div className="space-y-16">
                        <div>
                            <p className="text-4xl text-gray-900 font-semibold">Ah! Finally the last step</p>
                            <p className="text-gray-800 text-lg font-medium" >Express your work, yourself, your thinking, your way of doing work and stuff related to these in your job description .</p>
                        </div>
                        
                        <input type="text" onChange = {onchangetitle} type="text" className="w-full bg-gray-100 border-4  placeholder-gray-500 h-96 outline-none text-base rounded-md  border-gray-200 border-dashed  font-normal p-2 " />

                        
                    </div>
                    

                    {/*Demo Card*/}
                    <div className="py-2 mt-16 ">
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