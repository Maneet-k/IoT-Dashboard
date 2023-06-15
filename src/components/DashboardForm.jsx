import { useState } from 'react'
import styles from "../style";
import { Link, useNavigate } from "react-router-dom";
import DashboardNavbar from './DashboardNavbar';
import Footer from "./Footer";

const DashboardForm = () => {
    const navigate = useNavigate();
    const [dashboardName, setDashboardName] = useState("");
    const [deviceName, setDeviceName] = useState("");
    const [sensorName, setSensorName] = useState([""]);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/dashboard?dashboardName=${dashboardName}&deviceName=${deviceName}&sensorName=${sensorName}`);
    };
    const handleChange = (event, index) => {
        const { value } = event.target;
        const updatedSensorNames = [...sensorName];
        updatedSensorNames[index] = value;
        setSensorName(updatedSensorNames);
    };
    const handleAddSensor = () => {
        setSensorName([...sensorName, ""]);
    };


    return (
        <div className='bg-primary w-full'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxwidth}`}>
                    <DashboardNavbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} h-fit`}>
                <div className={`${styles.boxwidth}`}>
                    <div className='flex justify-center flex-col px-10 py-12 rounded-[20px]  max-w-[500px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
                        <form onSubmit={handleSubmit} className="max-w-screen-xl h-fit mx-auto">
                            <div className="mb-4">
                                <label htmlFor="dashboardName" className="block text-xl text-gray-200 font-bold mb-2 py-3">
                                    Dashboard Name:
                                </label>
                                <input
                                    type="text"
                                    id="dashboardName"
                                    value={dashboardName}
                                    onChange={(e) => setDashboardName(e.target.value)}
                                    className="shadow appearance-none border rounded w-96 py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="deviceName" className="block text-xl text-gray-200 font-bold mb-2 py-3">
                                    Device Name:
                                </label>
                                <input
                                    type="text"
                                    id="deviceName"
                                    value={deviceName}
                                    onChange={(e) => setDeviceName(e.target.value)}
                                    className="shadow appearance-none border rounded w-96 py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <label htmlFor={"sensorName"} className="block text-xl text-gray-200 font-bold mb-2 py-3">
                                Sensor Name:
                            </label>
                            {sensorName.map((sensor, index) => (
                                <div className="mb-4" key={index}>
                                    <input
                                        type="text"
                                        id={`sensorName${index}`}
                                        value={sensor}
                                        onChange={(e) => handleChange(e, index)}
                                        className="shadow appearance-none border rounded w-96 py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                className={`my-10 py-2 px-4 font-poppins font-medium text-[22px] text-primary shadow-white bg-gray-500 rounded-[50px] outline-none ${styles}`}
                                onClick={handleAddSensor}
                            >
                                +
                            </button>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
                                >Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxwidth}`}>
        <Footer/>
      </div>
    </div>
        </div>
    );
}

export default DashboardForm