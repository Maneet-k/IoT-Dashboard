import {useState} from 'react'
import { logo } from '../assets';
import { useUserAuth } from "./UserAuthContext";

const DashboardNavbar = () => {
  const { logOut } = useUserAuth();

  const onLogout = () => {
    logOut();
  }
  return (
    <nav className='w-full flex py-6 items-center navbar text-white justify-between'>
      <img src={logo} alt="logo" className='w-[110px] h-[64px] mr-96' style={{backgroundImage: "radial-gradient(#f5f6f7,#d7d7d9,black)"}}/>
      <button className='font-poppins font-normal cursor-pointer text-[16px] text-cyan-300 hover:text-cyan-300 mr-0 ml-96' onClick={onLogout}>LogOut</button>
    </nav>
  )
}

export default DashboardNavbar