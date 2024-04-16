import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="max-w-6xl container mx-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
