import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
