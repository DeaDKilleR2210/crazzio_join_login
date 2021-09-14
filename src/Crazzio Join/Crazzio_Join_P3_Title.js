import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import JoinAbout from "./Crazzio_Join_P4_About";


const JoinTitle = (props) =>{

    const [enteredtitle, setEnteredtitle] = useState("")

    const onchangetitle = (event) =>{
        setEnteredtitle(event.target.value)
    }

    const infoListObject = {...props.infoObject, title:enteredtitle}

    const ForwardButton = () =>{

        if (enteredtitle.length === 0){
            document.getElementById("title_input").style.backgroundColor = "rgb(252, 165, 165)"
            document.getElementById("title_error").style.display = "block"
            document.getElementById("title_error").innerHTML = "Title cannot have 0 characters"
        }else{
            document.getElementById("Join_Title").style.display = "none"
            document.getElementById("JoinAbout").style.display = "block"
            console.log(infoListObject)
        }

    }

    return(
        
        <div>
            <div  id="Join_Title" className="h-screen py-6 overflow-scroll bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">
                
                <div id="topWebName" class="md:absolute md:-mt-4 ">
                    <p class="z-50 mx-auto font-serif text-6xl md:text-4xl font-bold text-center text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="p-5 mx-2 mt-16 space-y-3 bg-white rounded-lg shadow-2xl md:mx-6 lg:p-20 lg:w-120 lg:mx-auto">
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="hidden float-right p-2 bg-gray-900 rounded-full shadow-lg cursor-pointer md:block w-14 h-14 sm:w-16 sm:h-16 hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>

                    {/*Headings and Inputs*/}
                    <div id="Join_Title" className="space-y-6">
                        <div className="space-y-3">
                            <p className="hidden text-3xl font-semibold text-gray-900 sm:block ">What best title can you give it to yourself?</p>
                        
                            <p className="text-2xl font-semibold text-gray-900 sm:hidden ">Give a title</p>
                            <p className="text-sm font-medium text-gray-800 sm:text-lg" >Give yourself a suitable title that describes your work.</p>
                        </div>
                        {/*Input Title*/}
                        <div className="space-y-2 md:my-6">
                            <input id = "title_input" onChange = {onchangetitle} className="w-full h-10 p-2 text-lg font-normal bg-gray-100 rounded-md shadow-md outline-none md:h-12 " />
                            <p id = "title_error" class="hidden text-sm  text-red-500 transition-all duration-300"></p>
                            <p className="text-sm text-gray-500 md:text-base">Eg. Python Developer | Web Developer | Data Analyst...</p>
                        </div>
                    </div>

                    <div onClick = {ForwardButton} className="p-2 mx-auto bg-gray-900 rounded-full shadow-lg cursor-pointer md:hidden w-14 h-14 hover:bg-gray-800">
                        <img src={next_white} className="w-10 h-10 mt-.5 ml-1" />
                    </div>
                    

                    {/*Demo Card*/}
                    <div className="hidden py-2 md:block">
                        <Freelancer_Democard title = {enteredtitle} Fname = {infoListObject.Fname} Lname = {infoListObject.Lname} username = {infoListObject.username} />
                    </div>
                </div>
            </div>


            {/*Next Page for about*/}
            <div id="JoinAbout" className="hidden">
                <JoinAbout infoObject = {infoListObject} />
            </div>
        </div>
    )
}

export default JoinTitle