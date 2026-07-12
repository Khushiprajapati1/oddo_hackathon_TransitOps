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


export default App;