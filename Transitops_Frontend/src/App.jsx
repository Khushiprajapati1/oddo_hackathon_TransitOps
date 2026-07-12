import {
  BrowserRouter,
  Routes,
  Route
}
  from "react-router-dom";


import Layout from "./components/layout/Layout";


import Dashboard from "./pages/Dashboard";
import Trips from "./pages/Trips";
import Maintenance from "./pages/maintenance";


function App() {


import { Routes, Route } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";

function App() {
  return (

    <BrowserRouter>


      <Layout>


        <Routes>


          <Route
            path="/"
            element={<Dashboard />}
          />


          <Route
            path="/vehicles"
            element={
              <h1 className="p-6 text-3xl">
                Vehicles Page
              </h1>
            }
          />



          <Route
            path="/drivers"
            element={
              <h1 className="p-6 text-3xl">
                Drivers Page
              </h1>
            }
          />


          <Route
            path="/trips"
            element={<Trips />}
          />


          <Route
            path="/maintenance"
            element={<Maintenance />}
          />



        </Routes>


      </Layout>


    </BrowserRouter>

  )

}

    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>

import { Routes, Route } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import DriverManagement from "./pages/DriverManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/drivers" element={<DriverManagement />} />
    </Routes>
  );
}

export default App;

export default App;