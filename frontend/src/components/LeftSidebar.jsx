import React, { useContext } from 'react'
import {assets} from "./../assets/assets.js"
import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import Avatar from 'react-avatar';
import { IoAddSharp } from "react-icons/io5";
import {NavLink} from "react-router-dom"
import {AppContext} from "./../context/AppContext.jsx"


const LeftSidebar = () => {

  const {userName} = useContext(AppContext);
  console.log(userName);

  return (
    <div className = 'w-[25%]'>
      <div className="top border border-black p-5 border-l-4  rounded-lg">
        <div className='flex justify-center p-3'>
        <img src={assets.logo} alt="Logo" width={100} className='rounded-lg'/>
        </div>

        <div className="profile-icon flex gap-3 items-center justify-start mt-3 font-semibold text-lg">
        <Avatar name={userName} size="50" className='rounded-full' textSizeRatio={3}/>
        <div className="name">{userName}</div>
        </div>

        <div className='flex items-cente justify-start gap-3 my-2 text-lg font-bold py-1.5 rounded-lg px-4'>
          <FaHome size={24} color="#333"/>
          <NavLink to="/" className="ml-2">Home</NavLink> 
        </div>
        <div className='flex items-cente justify-start gap-3 my-2 text-lg font-bold py-1.5 rounded-lg px-4'>
          <MdExplore size={24} color="#333"/>
          <NavLink to="/" className="ml-2">Explore</NavLink> 
        </div>
        <div className='flex items-cente justify-start gap-3 my-2 text-lg font-bold py-1.5 rounded-lg px-4'>
          <RiLogoutBoxLine size={24} color="#333"/>
          <span className="ml-2">Log-Out</span> 
        </div>
      </div>

      {/* <div className="bottom border border-black p-5 border-l-4  rounded-lg mt-5">
        <div className="suggestion flex justify-between items-center border p-3 my-1.5">
          <div className="name font-semibold">
            Albert Einstein
          </div>
          <div className="follow">
            <button className='bg-sky-400 rounded-xl px-3 py-1 text-white font-semibold text-sm flex gap-1 items-center'>Follow
                <IoAddSharp size={20}/>
                </button>
          </div>
        </div>
        <div className="suggestion flex justify-between items-center border p-3 my-1.5">
          <div className="name font-semibold">
            Albert Einstein
          </div>
          <div className="follow">
          <button className='bg-sky-400 rounded-xl px-3 py-1 text-white font-semibold text-sm flex gap-1 items-center'>Follow
                <IoAddSharp size={20}/>
                </button>
          </div>
        </div>
        <div className="suggestion flex justify-between items-center border p-3 my-1.5">
          <div className="name font-semibold">
            Albert Einstein
          </div>
          <div className="follow">
          <button className='bg-sky-400 rounded-xl px-3 py-1 text-white font-semibold text-sm flex gap-1 items-center'>Follow
                <IoAddSharp size={20}/>
                </button>
          </div>
        </div>
        <div className="suggestion flex justify-between items-center border p-3 my-1.5">
          <div className="name font-semibold">
            Albert Einstein
          </div>
          <div className="follow">
          <button className='bg-sky-400 rounded-xl px-3 py-1 text-white font-semibold text-sm flex gap-1 items-center'>Follow
                <IoAddSharp size={20}/>
                </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default LeftSidebar
