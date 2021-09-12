import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import JoinWork from "./Crazzio_Join_P5_work";
import { LanguagesList } from "./LanguagesList";



const JoinAbout = () =>{

    const [enteredcountry, setEnteredcountry] = useState("")
    const [enteredstate, setEnteredstate] = useState("")
    const [enteredcity, setEnteredcity] = useState("")
    const [selectedlang, setSelectedlang] = useState("")
    const [selectedlang_mode, setSelectedlang_mode] = useState("")
    const [selectedlang_speaking, setSelectedlang_speaking] = useState("")
    const [enteredDegree, setEnteredDegree] = useState("")
    const [enteredcollege, setEnteredcollege] = useState("")
    
    const onchangecountry = (event) =>{
        setEnteredcountry(event.target.value)
    }

    const onchangestate = (event) =>{
        setEnteredstate(event.target.value)
    }

    const onchangecity = (event) =>{
        setEnteredcity(event.target.value)
    }

    const onchangelang = (event) =>{
        setSelectedlang(event.target.value)
    }

    const onchangelang_mode = (event) =>{
        setSelectedlang_mode(event.target.value)
    }

    const onchangelang_speaking = (event) =>{
        setSelectedlang_speaking(event.target.value)
    }

    const onchangedegree = (event) =>{
        setEnteredDegree(event.target.value)
    }

    const onchangecollege = (event) =>{
        setEnteredcollege(event.target.value)
    }


    const ForwardButton = () =>{
        document.getElementById("Join_About").style.display = "none"
        document.getElementById("JoinWork").style.display = "block"
    }
    
    const Languages = LanguagesList.map((lang) =>
        <option className="text-lg bg-gray-100 font-medium text-gray-700" key={LanguagesList.indexOf(lang)} >{lang}</option>
    )

    const NoOflangs = ["Language 1", "Language 2", "Language 3"]
    

    const LangList = NoOflangs.map((language) =>
        <div className="space-x-8 space-y-1 flex">
            
            <p className="text-gray-800 font-medium text-lg mt-3">{language}</p>
            
            <select onChange={onchangelang} id="lang1" name="lang1" className="max-w-max bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none font-normal p-2">
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Choose a language</option>
                {/*Languages list*/}
                {Languages}
            </select>

            {/*native language or non native*/}
            <select onChange={onchangelang_mode} id="lang1" name="lang1" className="max-w-max bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none font-normal p-2">
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Native Language</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Non-native Language</option>                                                                        
            </select>

            {/*Eloquent or */}
            <select onChange={onchangelang_speaking} id="lang1" name="lang1" className="max-w-max bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none font-normal p-2">
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Choose Level of speaking/writing</option>
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >No proficiency</option>
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Elementary proficiency</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Limited working proficiency.</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Professional working proficiency</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Full professional proficiency</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Native / bilingual proficiency</option>                                                                                                                                           
            </select>
        </div>
     )

    return(
        <div>
            <div id="Join_About" className="bg-gradient-to-b from-transparent to-gray-800 h-screen py-6 md:py-0 xl:py-8 overflow-scroll no-scrollbar">
                
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
                        <p className="text-4xl text-gray-900 font-semibold">Tell us something about yourself</p>
                        
                        {/*Specialisation */}
                        <div className="my-6 space-y-4 flex flex-col">
                            <label for="specialization" className="text-gray-800 text-2xl font-semibold">Where do you live ?</label>
                            <div className="flex flex-row space-x-20">
                                <input onChange={onchangecountry} placeholder="Select your country" className=" bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md border-b-2 border-gray-200  font-normal p-2 " />
                                <input onChange={onchangestate} placeholder="Select your state" className=" bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md border-b-2 border-gray-200  font-normal p-2 " />
                                <input onChange={onchangecity} placeholder="Select your city" className=" bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md border-b-2 border-gray-200  font-normal p-2 " />
                            </div>
                        </div>

                        {/*Languages*/}
                        <div className="my-6 space-y-4 flex flex-col">
                            <div className="">
                                <p for="specialization" className="text-gray-800 text-2xl font-semibold">Languages</p>
                                {/*Add language button*/}
                                <div className="flex space-x-2 bg-gray-200 hover:bg-gray-300 max-w-max py-0 px-2 cursor-pointer float-right  -mt-7">
                                    <p className="font-extrabold text-gray-800 text-3xl -mt-1.5 ">+</p>
                                </div>
                            </div>
                            {/*Language Dropdown*/}
                            <div className=" bg-gray-300 p-3 space-y-4">
                                {LangList}
                            </div>
                        </div>

                        {/*Degree*/}
                        <div className="my-6 space-y-4 flex flex-col" >
                            <div className="">
                                <p  className="text-gray-800 text-2xl font-semibold">Education</p>
                                {/*Add Education button*/}
                                <div className="flex space-x-2 bg-gray-200 hover:bg-gray-300 max-w-max py-0 px-2 cursor-pointer float-right -mt-7">
                                    <p className="font-extrabold text-gray-800 text-3xl -mt-1.5 ">+</p>
                                </div>
                            </div>
                            <div className="space-x-8 flex">
                                <input onChange={onchangedegree} placeholder="What Degree/s do you have?" type="text" className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                                <input onChange={onchangecollege} placeholder="Name of college or university" className="w-full bg-gray-100 placeholder-gray-500 h-12 outline-none text-lg rounded-md rounded-b-none border-b-2 border-gray-200  font-normal p-2 " />
                            </div>
                        </div>
                    </div>
                    

                    {/*Demo Card*/}
                    <div className="py-2 mt-16 ">
                        <Freelancer_Democard country = {enteredcountry} city = {enteredcity} Time = {Date()} lang = {selectedlang} lang_mode = {selectedlang_mode} lang_speaking = {selectedlang_speaking} degree = {enteredDegree} />
                    </div>
                </div>
            </div>

            {/*Next Page for about*/}
            <div id="JoinWork" className="hidden">
                <JoinWork />
            </div>
        </div>
    )
}

export default JoinAbout