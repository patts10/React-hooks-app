import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="ml-5">
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/about" element={<AboutScreen />}></Route>
            <Route exact path="/login" element={<LoginScreen />}></Route>

            <Route path="*" element={<Navigate to={"/"} />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};
