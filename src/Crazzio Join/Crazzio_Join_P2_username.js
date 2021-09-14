import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import JoinTitle from "./Crazzio_Join_P3_Title";


const JoinUsername = (props) =>{

    const [enteredusername, setEnteredusername] = useState("")

    const onchangetitle = (event) =>{
        setEnteredusername(event.target.value)
        
    }
    
    const infoListObject = {...props.infoObject, username:enteredusername}
    const ForwardButton = () =>{
        if (enteredusername.length === 0){
            document.getElementById("uname_input").style.backgroundColor = "rgb(252, 165, 165)"
            document.getElementById("uname_error").style.display = "block"
            document.getElementById("uname_error").innerHTML = "Username cannot have 0 characters"
        }else{
            document.getElementById("Join_Username").style.display = "none"
            document.getElementById("JoinTitle").style.display = "block"
            console.log(infoListObject)
        }
    }

    

    return(
        
        <div>
            <div  id="Join_Username" className="justify-center h-screen overflow-scroll bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">
                
                <div id="topWebName" class="my-10">
                    <p class="z-50 mx-auto font-serif text-6xl font-bold text-center text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="py-10 mx-2 space-y-6 bg-white rounded-lg shadow-2xl md:mx-auto md:max-w-max md:mt-20 sm:mx-5 sm:p-10 md:p-20 md:h-auto lg:p-20 md:w-110">
                    
                    <p className="text-2xl font-semibold text-center text-gray-900 md:text-3xl lg:text-4xl">Give yourself a username</p>
                    <div className="mx-auto max-w-max" >
                        <input id = "uname_input" placeholder="Eg. aka1230, yoobro, DeadKiller" type="text" onChange = {onchangetitle} className="h-12 p-2 text-lg font-normal placeholder-gray-300 transition-all duration-300 bg-gray-100 rounded-md shadow-md outline-none md:w-100 " />
                        <p id = "uname_error" class="hidden text-sm  text-red-500 transition-all duration-300"></p>
                    </div>
                    
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="w-16 h-16 p-2 mx-auto bg-gray-900 rounded-full shadow-lg cursor-pointer hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>
                </div>
            </div>


            {/*Next Page for about*/}
            <div id="JoinTitle" className="hidden">
                <JoinTitle infoObject={infoListObject} />
            </div>
        </div>
    )
}

export default JoinUsername