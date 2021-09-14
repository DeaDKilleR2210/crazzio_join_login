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
        if (enteredspecs.length === 0){
            document.getElementById("specs_error").style.display = "block"
            document.getElementById("specs_error").innerHTML = "Provide atleast any one specialization"
        }
        else{
            document.getElementById("Join_Work").style.display = "none"
            document.getElementById("Joindesc").style.display = "block"
        }
    }

    return(
        <div>
            <div id="Join_Work" className="h-screen py-6 overflow-scroll bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">
                
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
                            <p className="hidden text-3xl font-semibold text-gray-900 sm:block ">Tell us something about your work</p>
                            <p className="text-3xl font-semibold text-gray-900 sm:hidden ">About yourself</p>
                        </div>
                        
                        {/*Specialisation */}
                        <div className="flex flex-col my-6 space-y-1">
                            <label for="specialization" className="text-lg font-semibold text-gray-800 md:text-2xl">What are your other specializations ?</label>
                            {/*Specs dropdown*/}
                            <div>
                                <input onChange={onchangespecs} placeholder="Eg. Python, Java, JavaScript..." type="text" className="w-full h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md rounded-b-none outline-none " />
                                <select id="specialization" name="specialization" className="w-full h-12 p-2 text-lg font-normal bg-gray-100 rounded-md rounded-t-none outline-none focus:rounded-b-none">
                                    <option className="text-lg font-medium text-gray-700 bg-gray-100 ">Search or Choose from specializations</option>
                                    <option className="text-lg font-medium text-gray-700 bg-gray-100 ">Web Developer</option>
                                    <option className="text-lg font-medium text-gray-700 bg-gray-100 ">Web Developer</option>
                                    <option className="text-lg font-medium text-gray-700 bg-gray-100 ">Web Developer</option>
                                    <option className="text-lg font-medium text-gray-700 bg-gray-100 ">Web Developer</option>
                                    <option className="text-lg font-medium text-gray-700 bg-gray-100 ">Web Developer</option>
                                </select>
                            </div>
                            <p id = "specs_error" class="hidden text-sm  text-red-500 transition-all duration-300"></p>
                        </div>

                        {/*Present work status*/}
                        <div>
                            <div className="">
                                <p  className="text-lg font-semibold text-gray-800 md:text-2xl">Tell us about your present job</p>
                            </div>
                            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
                                <input placeholder="Eg. Freelancer, Senior Web Developer at Microsoft..." type="text" className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none lg:w-full " />
                                <input placeholder="For how long you have been working here(in years)?" type="number" min="0"  className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none lg:w-full " />
                            </div>
                        </div>

                        {/*Work History*/}
                        <div className="my-6 space-y-4 ">
                            <div className="">
                                <p  className="text-lg font-semibold text-gray-800 md:text-2xl">Tell us about your previous jobs</p>
                                {/*Add Prev Jobs button*/}
                                <div className="flex float-right px-2 py-0 space-x-2 bg-gray-200 cursor-pointer hover:bg-gray-300 max-w-max -mt-7">
                                    <p className="font-extrabold text-gray-800 text-3xl -mt-1.5 ">+</p>
                                </div>
                            </div>

                            <div className="flex flex-col my-6 space-y-4 lg:space-x-8 lg:space-y-0 lg:flex-row">
                                <input placeholder="Eg. Senior Web Developer at Microsoft..." type="text"  className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none lg:w-full" />
                                <input placeholder="For how long you worked there(in years)?" type="number" min="0"  className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none lg:w-full " />
                            </div>
                        </div>
                    </div>

                    <div onClick = {ForwardButton} className="p-2 mx-auto bg-gray-900 rounded-full shadow-lg cursor-pointer md:hidden w-14 h-14 hover:bg-gray-800">
                        <img src={next_white} className="w-10 h-10 mt-.5 ml-1" />
                    </div>             

                    {/*Demo Card*/}
                    <div className="hidden py-2 md:block ">
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