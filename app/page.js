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
    <div className="login h-screen bg-gray-300 w-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSignIn}>
        <div className="userBox h-1/3 w-1/3 bg-gray-300 flex flex-col"></div>
      </form>
    </div>
  );
};

export default Home;
