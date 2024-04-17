import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="">
      <div className="h-20">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-393px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Root;
