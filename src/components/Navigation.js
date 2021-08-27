import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/movie_app/">Home</Link>
      <Link to="/movie_app/about">About</Link>
    </div>
  );
}

export default Navigation;
