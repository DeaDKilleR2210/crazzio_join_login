import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import Joindesc from "./Crazzio_Join_P6_desc";


const JoinWork = () =>{

    const [enteredspecs, setEnteredspecs] = useState("")
    const [enteredPresentJob, setEnteredPresentJob] = useState("")
    const [enteredPresentJobYears, setEnteredPresentJobYears] = useState("")
    const [enteredPrevJobs, setEnteredPrevJobs] = useState("")
    const [enteredPrevJobsYears, setEnteredPrevJobsYears] = useState("")

    const onchangespecs = (event) =>{
        setEnteredspecs(event.target.value)
    }

    const onchangePresentJob = (event) =>{
        setEnteredPresentJob(event.target.value)
    }

    const onchangePresentJobYears = (event) =>{
        setEnteredPresentJobYears(event.target.value)
    }

    const onchangePrevJobs = (event) =>{
        setEnteredPrevJobs(event.target.value)
    }

    const onchangePrevJobsYears = (event) =>{
        setEnteredPrevJobsYears(event.target.value)
    }



    const ForwardButton = () =>{
        document.getElementById("Join_Work").style.display = "none"
        document.getElementById("Joindesc").style.display = "block"
    }

    return(
        <div>
            <div id="Join_Work" className="bg-gradient-to-b from-transparent to-gray-800 h-screen py-6 md:py-0 xl:py-8 overflow-scroll no-scrollbar">
                
                <div id="topWebName" class="absolute -mt-4 ">
                    <p class="z-50 mx-auto font-serif text-4xl font-bold text-center text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="w-120 shadow-2xl p-20 mx-auto bg-white  rounded-lg">
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="bg-gray-900 rounded-full h-16 shadow-lg w-16 p-2 float-right cursor-pointer hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>

                    {/*Headings and Inputs*/}
                    <div className="space-y-16">
                        <p className="text-4xl text-gray-900 font-semibold">Tell us something about your work</p>
                        
                        {/*Specialisation */}
                        <div className="my-6 space-y-1 flex flex-col">
                            <label for="specialization" className="text-gray-800 text-2xl font-semibold">What are your other specializations ?</label>
                            {/*Specs dropdown*/}
                            <div>
                                <input placeholder="Eg. Python, Java, JavaScript..." type="text" className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                                <select id="specialization" name="specialization" className="w-full bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none rounded-t-none font-normal p-2">
                                    <option className="text-lg bg-gray-100 font-medium text-gray-700  ">Search or Choose from specializations</option>
                                    <option className="text-lg bg-gray-100 font-medium text-gray-700  ">Web Developer</option>
                                    <option className="text-lg bg-gray-100 font-medium text-gray-700  ">Web Developer</option>
                                    <option className="text-lg bg-gray-100 font-medium text-gray-700  ">Web Developer</option>
                                    <option className="text-lg bg-gray-100 font-medium text-gray-700  ">Web Developer</option>
                                    <option className="text-lg bg-gray-100 font-medium text-gray-700  ">Web Developer</option>
                                </select>
                            </div>
                        </div>

                        {/*Present work status*/}
                        <div>
                            <div className="">
                                <p  className="text-gray-800 text-2xl font-semibold">Tell us about your present job</p>
                            </div>
                            <div className="space-x-8 flex">
                                <input placeholder="Eg. Freelancer, Senior Web Developer at Microsoft..." type="text" className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                                <input placeholder="For how long you have been working here(in years)?" type="number" min="0"  className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                            </div>
                        </div>

                        {/*Work History*/}
                        <div className="my-6 space-y-4 flex flex-col">
                            <div className="">
                                <p  className="text-gray-800 text-2xl font-semibold">Tell us about your previous jobs</p>
                                {/*Add Prev Jobs button*/}
                                <div className="flex space-x-2 bg-gray-200 hover:bg-gray-300 max-w-max py-0 px-2 cursor-pointer float-right -mt-7">
                                    <p className="font-extrabold text-gray-800 text-3xl -mt-1.5 ">+</p>
                                </div>
                            </div>

                            <div className="space-x-8 flex">
                                <input placeholder="Eg. Senior Web Developer at Microsoft..." type="text"  className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                                <input placeholder="For how long you worked there(in years)?" type="number" min="0"  className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                            </div>
                        </div>
                    </div>
                    

                    {/*Demo Card*/}
                    <div className="py-2 mt-16">
                        <Freelancer_Democard  />
                    </div>
                </div>
            </div>

            {/*Next Page for about*/}
            
            {/*Next Page for about*/}
            <div id="Joindesc" className="hidden">
                <Joindesc />
            </div>
        </div>
    )
}

export default JoinWork