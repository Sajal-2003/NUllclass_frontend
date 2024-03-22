import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>User logged in successfully</h1>
      <h5 className="home">
        <a href="/login">Back to LogIn Window</a>
      </h5>
    </>
  );
};

export default Home;
