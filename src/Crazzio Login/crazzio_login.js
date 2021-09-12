import React, {Component} from "react"
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import V3 from "../Files/V3.mp4"




class App extends Component{
    render(){
        return(
            <div className="overflow-hidden ">
                <video src={V3} loop muted autoPlay="true" className="absolute object-fill w-screen h-screen" />

                <div class="z-50 p-5 bg-black bg-opacity-80 shadow-2xl mt-44 mx-16 relative  rounded-lg lg:grid lg:grid-cols-2 hidden">
                    <div class="p-4 inline-block mt-44 2xl:mt-36 max-w-max mx-auto">
                        <p class="z-50 mx-auto font-serif  font-bold text-center text-gray-300 uppercase max-w-max 2xl:text-9xl md:text-7xl xl:text-8xl"><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-4xl crazzio_com_hover">.com</span></p>
                    </div>

                    <div className="inline-block">    
                        <div class="py-10 mx-auto max-w-max">
                            <input placeholder="E-mail/Phone no." class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                        </div>

                        <div class="mx-auto max-w-max">
                            <input type="password" placeholder="Password" class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                            <div>
                                <p class="inline-block float-left text-sm cursor-pointer text-gray-500 hover:text-blue-600">Show Password</p>
                                <p class="inline-block float-right text-sm cursor-pointer text-gray-500 hover:text-blue-600">Forgot Password?</p>
                            </div>
                        </div>
                        
                        <div class="p-3 px-10 mx-auto mt-10 transition-all duration-300 ease-in-out bg-gray-800 shadow-xl max-w-max rounded-xl hover:bg-gray-500"><p class="text-xl font-extrabold text-center text-gray-100 uppercase cursor-pointer">Login</p></div>
                        <p class="mt-3 font-bold text-center text-gray-300">OR</p>
                        
                        
                        <div class="py-3">
                            <div class="p-3 px-10 mx-auto transition-all duration-300 ease-in-out bg-indigo-700  shadow-xl max-w-max rounded-xl hover:bg-indigo-500"><p class="text-xl font-extrabold text-center uppercase cursor-pointer">Login with Facebook</p></div>
                            <div class="p-3 px-10 mx-auto mt-4 transition-all duration-300 ease-in-out bg-red-600 shadow-xl max-w-max rounded-xl hover:bg-red-500"><p class="text-xl font-extrabold text-center uppercase cursor-pointer">Login with Google</p></div>
                        </div>

                        <p class="py-3 font-bold text-center hover:text-green-500 text-gray-300"><a href="crazzio_join.htm">Dont't have a Crazzio Account? Join now for Free.</a></p>
                    </div>
                </div>


                <div class="z-50 p-5 bg-black bg-opacity-80 shadow-2xl my-10 mx-10 relative rounded-lg lg:hidden">
                    <div class="p-4 my-2 max-w-max mx-auto">
                        <p class="z-50 mx-auto font-serif text-6xl font-bold text-center text-gray-300 uppercase max-w-max md:text-7xl "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-4xl crazzio_com_hover">.com</span></p>
                    </div>

                    <div className="my-2">
                        
                        <div class="py-8 mx-auto max-w-max ">
                            <input placeholder="E-mail/Phone no." class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />
                        </div>

                        <div class="mx-auto mt-4 max-w-max">
                            <input type="password" placeholder="Password" class="rounded-b-md text-xl text-gray-100 focus:rounded-none  placeholder-gray-400 transition-all duration-500 py-2 px-1 ease-out bg-transparent border-b-2 border-gray-700 outline-none md:w-80  focus:text-gray-100 focus:placeholder-gray-500 lg:w-96" />

                            <div>
                                <p class="inline-block float-left text-sm cursor-pointer hover:text-blue-600 text-gray-500">Show Password</p>
                                <p class="inline-block float-right text-sm cursor-pointer text-gray-500 hover:text-blue-600">Forgot Password?</p>
                            </div>
                        </div>

                        <div class="p-3 px-10 mx-auto mt-10 transition-all duration-300 ease-in-out bg-gray-800 shadow-xl max-w-max rounded-xl hover:bg-gray-500"><p class="text-xl font-extrabold text-center text-gray-100 uppercase cursor-pointer">Join</p></div>
                        <p class="mt-3 font-bold text-center text-gray-300">OR</p>
                        
                        <div class="py-3">
                            <div class="p-3 px-10 mx-auto transition-all duration-300 ease-in-out bg-indigo-700 shadow-xl max-w-max rounded-xl hover:bg-indigo-500"><p class="text-xl font-extrabold text-center uppercase cursor-pointer">Join with Facebook</p></div>
                            <div class="p-3 px-10 mx-auto mt-4 transition-all duration-300 ease-in-out bg-red-600 shadow-xl max-w-max rounded-xl hover:bg-red-500"><p class="text-xl font-extrabold text-center uppercase cursor-pointer">Join with Google</p></div>
                        </div>

                        <p class="py-3 font-bold text-center text-gray-300 hover:text-green-500"><a href="crazzio_login.htm">Dont't have a Crazzio Account? Join now for Free.</a></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
