import {useState} from 'react'
import {close, logo, menu} from '../assets';
import { navLinks } from '../constants/index.js';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar text-white'>
      <img src={logo} alt="logo" className='w-[110px] h-[64px] mr-80' style={{backgroundImage: "radial-gradient(#f5f6f7,#d7d7d9,black)"}}/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>{
          return (<li key={nav.id} className={`font-poppins font-normal cursor-pointer text=[16px] ${
            active === nav.title ? "text-cyan-300" : "text-dimWhite"
          } hover:text-cyan-300 ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'} ${index===0 ? 'ml-80' : 'ml-0'}`} onClick={() => setActive(nav.title)}><a href={`#${nav.id}`}>{nav.title}</a></li>)
        })}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)}></img>
      </div>

      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-cyan-300" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar