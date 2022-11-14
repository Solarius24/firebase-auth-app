import React from "react";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import SignUp from "./SignUp";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard/>}></Route>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>}/>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}
