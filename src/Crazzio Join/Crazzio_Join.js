import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import JoinUsername from "./Crazzio_Join_P2_username";

const App = () => {
    

        const ForwardButton = () =>{
            document.getElementById("Join_Screen").style.display = "none"
            document.getElementById("JoinUsername").style.display = "block"
            
        }

        const [FnameValue, setFnameValue] = useState("")
        const [LnameValue, setLnameValue] = useState("")
        const [EmailValue, setEmailValue] = useState("")
        const [OTPValue, setOTPValue] = useState("")
        const [PSWDValue, setPSWDValue] = useState("")
        const [ConfirmPSWDValue, setConfirmPSWDValue] = useState("")
        

        const showPSWD = () =>{
            var showpassword =  document.getElementById("PSWD")
            
            if (showpassword.type == "password"){
                showpassword.type = "text"
                showpassword.innerHTML = "Hide Password"
            } else{
                showpassword.type = "password"
                showpassword.innerHTML = "Show Password"

            }
        }

        const showConfirmPSWD = () =>{
            var showCpassword =  document.getElementById("CPSWD")

            if (showCpassword.type == "password"){
                showCpassword.type = "text"
                showCpassword.innerHTML = "Hide Password"

            } else{
                showCpassword.type = "password"
                showCpassword.innerHTML = "Show Password"
            }
        }

        const inputFname = (event) =>{
            setFnameValue(event.target.value)
        }

        const inputLname = (event) =>{
            setLnameValue(event.target.value)
        }

        const inputEmail = (event) =>{
            setEmailValue(event.target.value)
        }

        const inputOTP = (event) =>{
            setOTPValue(event.target.value)
        }


        const inputPSWD = (event) =>{
            setPSWDValue(event.target.value)
            document.getElementById("PSWD").style.borderColor = "rgb(55, 65, 81)"
            document.getElementById("CPSWD").style.borderColor = "rgb(55, 65, 81)"
            document.getElementById("PSWDerror").style.display = "none"
            document.getElementById("ConfirmPSWDerror").style.display = "none"
        }


        const inputConfirmPSWD = (event) =>{
            setConfirmPSWDValue(event.target.value)
        }
        
        const infoListObject = {Fname: FnameValue,
            Lname: LnameValue,
            Email: EmailValue,
            Password: PSWDValue }

        const JoinButtonFunction = (event) =>{
            
            if (PSWDValue.length<8){
                console.log("Passwords must be at least 8 characters in length")
                document.getElementById("PSWDerror").innerHTML = "Passwords must be at least" + "<br>" + "8 characters in length"
                document.getElementById("PSWDerror").style.display = "block"
                document.getElementById("PSWD").style.borderColor = "rgb(239, 68, 68)"

            }
            /*Can't contail only numbers*/
            else if (PSWDValue != ConfirmPSWDValue) {
                console.log("Password and Confirm password don't match")
                setPSWDValue("")

                document.getElementById("PSWDerror").innerHTML = "Password not matching"
                document.getElementById("ConfirmPSWDerror").innerHTML = "Password not matching"
                document.getElementById("PSWDerror").style.display = "block"
                document.getElementById("ConfirmPSWDerror").style.display = "block"
                document.getElementById("PSWD").style.borderColor = "rgb(239, 68, 68)"
                document.getElementById("CPSWD").style.borderColor = "rgb(239, 68, 68)"
            }

            else {
                ForwardButton()
                console.log(infoListObject)
                
            }
        }
        return(
            <div >
                <div id="Join_Screen" className="h-screen overflow-scroll sm:py-6 bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">

                    <div class="z-50 h-full sm:h-auto py-0 bg-black bg-opacity-80 shadow-2xl  sm:mx-16 sm:rounded-lg xl:grid xl:grid-cols-2 ">
                        
                        {/*Website name*/}
                        <div class="p-4 xl:inline-block xl:mt-72 my-2 2xl:mt-72 max-w-max mx-auto">
                            <p class="z-50 mx-auto font-serif text-5xl font-bold text-center text-gray-300 uppercase max-w-max md:text-8xl 2xl:text-9xl "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-4xl crazzio_com_hover">.com</span></p>
                        </div>

                        <div className="xl:inline-block">
                            {/*Form above xl*/}
                            <form className="xl:my-10">
                                <div>
                                    <div class="mx-auto max-w-max">
                                        <input onChange={inputFname}  placeholder="First name" class="block rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                                        <input onChange={inputLname} placeholder="Last name" class="block mt-5 rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                                    </div>

                                    <div class="py-8 mx-auto max-w-max ">
                                        <input onChange={inputEmail} placeholder="E-mail/Phone no." class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                                    </div>

                                    {/*<div class="mx-auto mt max-w-max ">
                                        <input onChange={inputOTP} placeholder="OTP" class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                                    </div>*/}

                                    
                                    <div class="mx-auto max-w-max">
                                        <input id="PSWD" onChange={inputPSWD} type="password" placeholder="New Password" class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                                        <div>
                                            <p onClick={showPSWD} class="inline-block float-left text-sm cursor-pointer hover:text-blue-600 text-gray-500">Show Password</p>
                                            <p id = "PSWDerror" class="hidden float-right text-sm  text-red-500"></p>
                                        </div>
                                    </div>

                                    <div class="mx-auto mt-12 max-w-max">
                                        <input id="CPSWD" onChange={inputConfirmPSWD} type="password" placeholder="Confirm Password" class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                                        <div>
                                            <p onClick={showConfirmPSWD} class="inline-block float-left text-sm cursor-pointer hover:text-blue-600 text-gray-500">Show Password</p>
                                            <p id = "ConfirmPSWDerror" class=" hidden float-right text-sm  text-red-500"></p>
                                        </div>
                                    </div>

                                    {/*Evenhandler div to change to next screen */}
                                    <div  onClick={JoinButtonFunction} class="p-3 px-10 mx-auto mt-10 transition-all duration-300 ease-in-out bg-gray-800 shadow-xl max-w-max rounded-xl hover:bg-gray-500 cursor-pointer"><p class="text-xl font-extrabold text-center text-gray-100 uppercase ">Join</p></div>
                                    <p class="mt-3 text-gray-300 font-bold text-center">OR</p>
                                    
                                    <div class="py-3">
                                        <div class="p-3 px-10 mx-auto transition-all duration-300 ease-in-out bg-indigo-700  shadow-xl max-w-max rounded-xl hover:bg-indigo-500"><p class="text-xl font-extrabold text-center uppercase cursor-pointer">Join with Facebook</p></div>
                                        <div class="p-3 px-10 mx-auto mt-4 transition-all duration-300 ease-in-out bg-red-600 shadow-xl max-w-max rounded-xl hover:bg-red-500"><p class="text-xl font-extrabold text-center uppercase cursor-pointer">Join with Google</p></div>
                                    </div>

                                    <p class="py-3 font-bold text-center text-gray-300 hover:text-green-500"><a href="crazzio_login.htm">Already have a Crazzio Account? Login.</a></p>
                                </div>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>


                <div id="JoinUsername" className="hidden" >
                    <JoinUsername infoObject={infoListObject} />
                </div>
            </div>
        )
    }

export default App