import { Outlet } from "react-router-dom";
//components
import Navbar from "./Navbar";
function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default HomeLayout;
