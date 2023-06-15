import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import styles from "../style";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-start items-center">
      <div className="flex justify-center flex-col px-10 py-12 rounded-lg max-w-500 md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <h1 className="block text-3xl text-gray-200 font-bold py-3">
          SignUp
        </h1>
        {error && <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert"><p className="font-bold">{error}</p></div>}
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-xl max-h-screen mx-auto my-8"
        >
         <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="d-grid gap-2">
            <button className={`my-4 py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} type="submit">
              SignUp
            </button>
          </div>
        </form>
      
      <div className="text-l text-gray-200 mb-2 py-3 text-center">
        Already have an account? <Link to="/login" className="text-cyan-300">Log In</Link>
      </div>
      </div>
    </div>
  );
};

export default Signup;
