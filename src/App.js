import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePool from "./elements/CreatePool";
import Footer from "./elements/Footer";
import Navbar from './elements/Navbar'
import Pools from "./elements/Pools";
import Swap from "./elements/Swap";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path="/" element={<Swap />} />
            <Route path="/add-liquidity" element={<Pools />} />
            <Route path="/create-pool" element={<CreatePool />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
