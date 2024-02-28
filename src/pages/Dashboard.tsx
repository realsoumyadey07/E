import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";

import { FaUser } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input 
          type="text" placeholder="Search for data, users docs" />
          <FaRegBell/>
          <FaUser/>
        </div>
      </main>
    </div>
  )
}
