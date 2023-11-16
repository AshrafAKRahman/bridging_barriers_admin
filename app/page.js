"use client";
import { useState } from "react";
import { UserAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { signIn } = UserAuth();
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogInData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(logInData);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userEmail = logInData.email.trim();
    const isValidEmail = (email) => {
      return email.includes("@");
    };
    if (userEmail === "") {
      console.log("email field is empty");
      alert("Please enter your email");
      return;
    } else if (!isValidEmail(userEmail)) {
      console.log("email is invaild");
      alert("Please enter a valid Email address");
      return;
    } else {
      try {
        await signIn(logInData.email, logInData.password);
        router.push("/pages/loggedIn");
      } catch (error) {
        console.log(error, "Error here");
      }
    }
  };

  return (
    <form
      className="w-screen h-screen bg-white flex justify-center items-center"
      onSubmit={handleSignIn}
    >
      <div className="w-5/6 h-2/3 flex flex-col items-center text-center z-10 ">
        <div className="emailLabel mt-8 md:mt-14 ">
          <label className="text-white ipad:text-4xl" htmlFor="inline-emai">
            Enter your email and password
          </label>
        </div>
        <div className="emailInput mt-5 ipad:mt-16 ipad:w-full ">
          <input
            className="bg-gray-200 w-full px-2 py-2 text-center text-gray-700 border border-black md:py-4 md:px-4  ipad:w-3/4 "
            id="email"
            type="email"
            name="email"
            value={logInData.email}
            onChange={handleChange}
            placeholder="Email..."
          />
        </div>
        <div className="emailInput mt-5 ipad:w-full ">
          <input
            className="bg-gray-200 w-full px-2 py-2 text-center text-gray-700 border border-black md:py-4 md:px-4  ipad:w-3/4 "
            id="password"
            type="password"
            name="password"
            value={logInData.password}
            onChange={handleChange}
            placeholder="password..."
          />
        </div>
      </div>
      <button
        className="bg-gray-600 text-white"
        type="submit"
        onClick={handleSignIn}
      >
        Login
      </button>
    </form>
  );
};

export default Home;

{
  /* <div className="userBox h-1/3 w-1/3 bg-gray-300 flex flex-col">
    <div className="inputName w-full h-1/2 flex justify-between">
      <label>Enter Your email</label>
      <input
        id="email"
        type="email"
        value={logInData.email}
        onChange={handleChange}
        placeholder="email"
      />
    </div>
    <div className="inputPassword w-full h-1/2 flex justify-between">
      <label>Enter your password</label>
      <input
        id="password"
        type="password"
        value={logInData.password}
        onChange={handleChange}
        placeholder="password"
      />
    </div> */
}
