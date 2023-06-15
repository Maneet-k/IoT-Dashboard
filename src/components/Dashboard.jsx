import { useEffect, useState } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2'
import axios from 'axios';
import DashboardNavbar from './DashboardNavbar';
import Footer from './Footer';
import 'chart.js/auto';
import styles from '../style';

const Dashboard = () => {
  // get query params - dashboardName, deviceName and sensorName
  const [chartType, setChartType] = useState('line');
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datta, setDatta] = useState({});
  const chartOptions = [
    { label: 'Histogram', value: 'bar' },
    { label: 'Time Line Graph', value: 'line' },
    { label: 'Pie Chart', value: 'pie' },
    // Add more chart options as needed
  ];

  const [charts, setChart] = useState([]);

  useEffect(() => {
    // get query params from url URLSearchParams
    const params = new URLSearchParams(window.location.search);
    const dashboardName = params.get('dashboardName');
    const deviceName = params.get('deviceName');
    const sensorStringName = params.get('sensorName');
    const sensorName= sensorStringName.split(",")
    setDatta({ "dashboardName": dashboardName, "deviceName": deviceName, "sensorName": sensorName });
    console.log(datta.dashboardName, datta.deviceName, datta.sensorName);
    fetchData({ dashboardName, deviceName, sensorName });
  }, [values, charts]);

  async function fetchData({ dashboardName, deviceName, sensorName }) {
    try {
      const response = await axios.get(`http://localhost:8000`)
      setValues(response.data.values)
      console.log(response.data.values)
    } catch (error) {
      console.error(error);
    }
    setChart([{
      labels: values.map((obj) => obj[1]),
      datasets: [{
        label: dashboardName,
        data: values.map((obj) => obj[2]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],

      }]
    }, {
      labels: values.map((obj) => obj[1]),
      datasets: [{
        label: dashboardName,
        data: values.map((obj) => obj[3]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],

      }]
    }, {
      labels: values.map((obj) => obj[1]),
      datasets: [{
        label: dashboardName,
        data: values.map((obj) => obj[4]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],

      }]
    }, {
      labels: values.map((obj) => obj[1]),
      datasets: [{
        label: dashboardName,
        data: values.map((obj) => obj[5]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],

      }]
    }, {
      labels: values.map((obj) => obj[1]),
      datasets: [{
        label: dashboardName,
        data: values.map((obj) => obj[6]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],

      }]
    }]);
    setLoading(false);
  }

  return (
    <div className="bg-primary w-full h-full overflow-hidden">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxwidth} mb-8`}>
              <DashboardNavbar />
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxwidth}`}>
              <h1 className="flex-1 font-poppins font-semibold text-5xl text-white leading-24">
                <span className="text-gradient">IoT Dashboard</span>{" "}
              </h1>
              <h1 className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Dashboard Name: {datta.dashboardName}
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Device Name: {datta.deviceName}
              </p>

                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <div style={{ width: 600 }}>
                    <div className="text-white">

                      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Sensors Used: {datta.sensorName}
                      </p>
                      {/* Chart Type */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                <div className="grid grid-cols-2 gap-8 w-full">
                  {charts.map((chart,index) => (
                    <div key={index} className="mb-6 w-auto">
                      Chart
                      <h2 className={`${styles.paragraph} max-w-[470px] `}>
                        Sensor Name:{datta.sensorName[index]}
                      </h2>
                      <div className="mb-4">
                        <label
                          htmlFor="chartType"
                          className="block text-xl text-gray-200 font-bold mb-2 py-3"
                        >
                          Chart Type:
                        </label>
                        <select
                          id="chartType" key={index}
                          value={chartType}
                          onChange={(e) => setChartType(e.target.value)}
                          className="shadow appearance-none border rounded w-96 py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select a chart type</option>
                          {chartOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex justify-center px-10 w-[550px] h-[400px] feedback-card flex-col rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                        {chartType === "bar" && <Bar data={chart} />}
                        {chartType === "line" && <Line data={chart} />}
                        {chartType === "pie" && <Pie data={chart} />}
                      </div>
                    </div>)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxwidth}`}>
              <Footer/>
            </div>
          </div>
        </>
      )}
    </div>
  );

}

export default Dashboard