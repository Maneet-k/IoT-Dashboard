import styles from "../style";
import { useState } from "react";
import { signInWithGoogle } from '../Firebase';
import { useNavigate, Link } from "react-router-dom";

const IotIntro = (onloggedIn) => {
  return (
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">IoT Dashboard</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        An IoT dashboard is the user interface within an IoT platform that enables users to monitor and interact with connected devices though graphs, charts and other tools and UI elements. Dashboards allow you to manage every aspect of your connected devices as well as gain perspective on your environment through visualization of your device data.
        </p>
        <button className={`my-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        <Link to="/login">Sign In</Link>
        </button>
      </div>
  )
}

export default IotIntro