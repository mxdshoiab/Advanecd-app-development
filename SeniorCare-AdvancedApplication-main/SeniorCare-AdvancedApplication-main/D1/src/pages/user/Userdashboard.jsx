import React from 'react'
//import './style.css'
import Sidebar from '../../components/Sidebar';
const Userdashboard = () => {
    return (

       
        <div className="containe flex flex-col w-full max-h-full xl:h-screen xl:overflow-auto ">
            <div><Sidebar/></div>
          {/* ====== Header & Nav Bar satrted here ========= */}
          <div className=" header flex justify-between items-center py-5 px-10 w-full"> 
            {/* ===== logo & Search Bar ======= */}
            {/* <div className="search-input flex items-center space-x-10">
              <div className="logo flex items-center space-x-5">             
                <i className="fa-solid fa-bars cursor-pointer hidden md:block" />
                <p className=" hidden xl:block text-lg font-semibold cursor-pointer">Senior Care</p>
              </div>
              <div className="relative flex items-center ">
                <input type="text" placeholder=" search " className=" focus:outline-none border-1 border-gray-200 rounded-full  md:w-80 xl:w-96 bg-white py-2 px-4 block text-sm shadow shadow-gray-50" />
                <i className="fa-solid fa-magnifying-glass absolute right-5 text-gray-500 text-sm" />
              </div>
            </div> */}
            <div className='text-xl font-semibold justify-center items-center font-serif'>SENIOR CARE</div>
            {/* ========= right site heder option ====== */}
            <div className="right-head sm:flex sm:items-center  hidden sm:block">
              <div className="space-x-3 border-r-2 mr-5 p-2 ">
                <i className="fa-solid fa-moon lg:text-lg text-slate-700 cursor-pointer" />
                <i className="fa-solid fa-circle-plus lg:text-2xl cursor-pointer" />
                <i className="fa-solid fa-bell lg:text-lg text-slate-700 cursor-pointer" />
              </div>
              {/* <div className=" sm:flex sm:items-center space-x-5  hidden sm:block">
                <img src="https://source.unsplash.com/random/100x100" alt="phone" className=" h-8 w-8 rounded-full" />
                <p className="text-md font-semibold cursor-pointer">Aybüke C.</p>
              </div> */}
            </div>
          </div>
          {/* =======Head Section End Here */}
          {/* =====Main content Started ===== */}
          <div className=" main-content px-5 flex w-full h-full mt-10">
            {/* =====left site mini bar====== */}
            <div className=" hidden sm:block flex flex-col  space-y-8 mt-24 w-1/12 h-screen">
              <i className="fa-solid fa-house text-2xl p-1 hover:bg-gray-500 cursor-pointer w-14 rounded-full text-center" />
              <i className="fa-brands fa-atlassian text-2xl p-1 hover:bg-gray-500 cursor-pointer w-14 rounded-full text-center" />
              <i className="fa-regular fa-calendar text-2xl p-1 hover:bg-gray-500 cursor-pointer w-14 rounded-full text-center" />
            </div>
            {/* ======= Left site mini bar end here ===== */}
            {/* =======Midddle Site start here ======== */}
            <div className=" md:w-full lg:max-h-screen xl:max-h-fit project-section rounded-2xl px-8 py-8">
              {/* ====Head Section ====== */}
              <div className="flex justify-between">
                <p className="lg:text-xl text-semibold">Services</p>
                {/* <p className="lg:text-xl text-semibold">December,12</p> */}
              </div>
              {/*======== Heading part-2 ====== */}
              <div className="flex justify-between mt-4">
                <div className=" flex  space-x-2 lg:space-x-4">
                  <div>
                    <h4 className=" lg:text-xl font-semibold">4</h4>
                    <p className="  text-xs lg:text-sm text-gray-500">In Progress</p>
                  </div>
                  <div>
                    <h4 className="lg:text-xl font-semibold">2</h4>
                    <p className="text-xs lg:text-sm text-gray-500">Upcoming</p>
                  </div>
                  <div>
                    <h4 className="lg:text-xl font-semibold">6</h4>
                    <p className="text-xs lg:text-sm text-gray-500">Total Services Availed</p>
                  </div>
                </div>
                <div className="space-x-4">
                  <i className="icon ion-md-list lg:text-2xl font-semibold" />
                  <i className="icon ion-md-grid lg:text-2xl font-semibold" />
                </div>
              </div>
              {/* ====== Left-site hedeing part end here ==== */}
              {/* =========Six boxes start herer ===== */}
              <div className=" lg:overflow-auto xl:overflow-hidden  grid   md:grid-cols-2 xl:grid-cols-3 gap-4 grid-rows-2 mt-16 rap-d">
                {/* ======Box-1======== */}
                <div className="box bg-orange-200 lg:40 xl:h-48 rounded-3xl ">
                  <div className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      {/* <p className="text-sm">December</p> */}
                      <i className="fa-solid fa-ellipsis-vertical text-sm cursor-pointer" />
                    </div>
                    <div className="text-center mt-3 space-y-1">
                      <h4 className="text-sm font-semibold">Hygiene and Hydration</h4>
                      <p className="text-xs">2020 December 10, Tuesday</p><br/>
                      <p className="text-xs">Experience tailored hygiene and bathing assistance for seniors, providing dignified and compassionate care in the comfort of home. </p>
                    </div>

                  </div>
                </div>
                {/* ======box-2 Start here ===== */}
                <div className="box bg-blue-200 xl:h-48 rounded-3xl ">
                  <div className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      {/* <p className="text-sm">December 10, 2020</p> */}
                      <i className="fa-solid fa-ellipsis-vertical text-sm cursor-pointer" />
                    </div>
                    <div className="text-center mt-3 space-y-1">
                      <h4 className="text-sm font-semibold">Dressing And Grooming</h4>
                      <p className="text-xs">2020 December 10, Tuesday</p><br/>
                      <p className="text-xs">Empower your loved ones with our specialized dressing and grooming home care service tailored for seniors.</p>
                    </div>
                    
                  </div>
                </div>
                {/* ========== Box-3 Start-here===== */}
                <div className="box bg-sky-200 xl:h-48 rounded-3xl ">
                  <div className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      {/* <p className="text-sm">December 10, 2020</p> */}
                      <i className="fa-solid fa-ellipsis-vertical text-sm cursor-pointer" />
                    </div>
                    <div className="text-center mt-3 space-y-1">
                      <h4 className="text-sm font-semibold">Errands and Outing</h4>
                      <p className="text-xs">2020 December 17, Thursday</p><br/>
                      <p className="text-xs">Let us handle errands and outings for your elderly loved ones with our dedicated home care service. </p>
                    </div>
                    
                  </div>
                </div>
                {/* ==========Box-4- Start-here===== */}
                <div className="box bg-pink-200 xl:h-48 rounded-3xl ">
                  <div className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      {/* <p className="text-sm">December 10, 2020</p> */}
                      <i className="fa-solid fa-ellipsis-vertical text-sm cursor-pointer" />
                    </div>
                    <div className="text-center mt-3 space-y-1">
                      <h4 className="text-sm font-semibold">Errands and Outing</h4>
                      <p className="text-xs">2020 December 17, Thursday</p><br/>
                      <p className="text-xs">Let us handle errands and outings for your elderly loved ones with our dedicated home care service. </p>
                    </div>
                    
                  </div>
                </div>
                {/* ===========box-5-satarted here======= */}
                <div className="box bg-green-200 xl:h-48 rounded-3xl ">
                  <div className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      {/* <p className="text-sm">December 10, 2020</p> */}
                      <i className="fa-solid fa-ellipsis-vertical text-sm cursor-pointer" />
                    </div>
                    <div className="text-center mt-3 space-y-1">
                      <h4 className="text-sm font-semibold">Errands and Outing</h4>
                      <p className="text-xs">2020 December 17, Thursday</p><br/>
                      <p className="text-xs">Let us handle errands and outings for your elderly loved ones with our dedicated home care service. </p>
                    </div>
                    
                  </div>
                </div>
                {/* ======== box-6-statrted-here===== */}
                <div className="box bg-purple-200 xl:h-48 rounded-3xl ">
                  <div className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      {/* <p className="text-sm">December 10, 2020</p> */}
                      <i className="fa-solid fa-ellipsis-vertical text-sm cursor-pointer" />
                    </div>
                    <div className="text-center mt-3 space-y-1">
                      <h4 className="text-sm font-semibold">Errands and Outing</h4>
                      <p className="text-xs">2020 December 17, Thursday</p><br/>
                      <p className="text-xs">Let us handle errands and outings for your elderly loved ones with our dedicated home care service. </p>
                    </div>
                  </div>
                </div>
                {/* Box-section-end-here======= */}
              </div>
            </div>
            {/* =======Midddle Site End  here ======== */}
            {/* ========right site start here ======= */}
            <div className=" hidden md:block w-3/12 max-h-fit project-section ml-5 rounded-2xl flex flex-col">
              <p className="md:text-sm lg:text-xl py-5 px-4 lg:font-semibold">COMMUNITY</p>
              {/* ====== cilnet-messages-1===== */}
              <div className=" mt-2 border-t">
                <div className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                      <img src="https://source.unsplash.com/random/100x100" className="h-5 w-5 bg-center rounded-full" />
                      <p className="md:text-xs lg:text-sm font-semibold">Stephanie</p>
                    </div>
                    <i className="fa-solid fa-star md:text-xs lg:text-sm" />
                  </div>
                  <div className="px-5">
                    <p className="text-xs mt-2"> The outings are well planned and executed without anything going wrong</p>
                    <h4 className="text-xs text-right">Dec, 12</h4>
                  </div>
                </div>
              </div>
              {/* ========clinet-message-2 ====== */}
              <div className=" mt-2 border-t">
                <div className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                      <img src="https://source.unsplash.com/random/150x100" className="h-5 w-5 bg-center rounded-full" />
                      <p className="md:text-xs lg:text-sm font-semibold">Mark</p>
                    </div>
                    <i className="fa-solid fa-star md:text-xs lg:text-sm" />
                  </div>
                  <div className="px-5">
                    <p className="text-xs mt-2">Haven't seen my parents this happy since I've moved out.</p>
                    <h4 className="text-xs text-right">Dec, 12</h4>
                  </div>
                </div>
              </div>
              {/* =======clinent-messages-3====== */}
              <div className=" mt-2 border-t">
                <div className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                      <img src="https://source.unsplash.com/random/120x100" className="h-5 w-5 bg-center rounded-full" />
                      <p className="md:text-xs lg:text-sm font-semibold">David</p>
                    </div>
                    <i className="fa-solid fa-star md:text-xs lg:text-sm" />
                  </div>
                  <div className="px-5">
                    <p className="text-xs mt-2"> Awesome! 🤩 I love it. We can schedule an outing for the next weekend</p>
                    <h4 className="text-xs text-right">Dec, 12</h4>
                  </div>
                </div>
              </div>
              {/* =======Client-messages-4 */}
              <div className=" mt-2 border-t">
                <div className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                      <img src="https://source.unsplash.com/random/160x100" className="h-5 w-5 bg-center rounded-full" />
                      <p className="md:text-xs lg:text-sm font-semibold">Jessica</p>
                    </div>
                    <i className="fa-solid fa-star md:text-xs lg:text-sm" />
                  </div>
                  <div className="px-5">
                    <p className="text-xs mt-2"> I am really impressed! Can't wait to see have my next appointment.</p>
                    <h4 className="text-xs text-right">Dec, 12</h4>
                  </div>
                </div>
              </div>             
            </div>
          </div>         
        </div>
      );
}

export default Userdashboard
