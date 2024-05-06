import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./garden-components/Sign";
import LiveGardens from "./garden-components/LiveGardens";
import GardenDetails from "./garden-components/GardenDetails";
import CreateGarden from "./garden-components/CreateGarden";
import Navbar from "./garden-components/Navbar";
import './App.css';


function App() {
  return (
    <>
      <div>
        <div className=" min-h-screen bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">

          <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Sign />} />
              <Route path="/create" element={< CreateGarden />} />     
              <Route path="/gardens/:gardenName" element={<GardenDetails />} />
              <Route path="/gardens" element={< LiveGardens />} />  
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;