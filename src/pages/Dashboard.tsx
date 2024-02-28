import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";

import { FaUser } from "react-icons/fa6";
import { HiTrendingUp } from "react-icons/hi";

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
        <section className="widgetcontainer">
          <WidgetItem 
          percent={40} 
          amount={true}
          value={3400000}
          heading="Revenue"
          color="rgb(0,115,255)"/>
          <WidgetItem 
          percent={40} 
          amount={true}
          value={3400000}
          heading="Revenue"
          color="rgb(0,115,255)"/>
          <WidgetItem 
          percent={40} 
          amount={true}
          value={3400000}
          heading="Revenue"
          color="rgb(0,115,255)"/>
          <WidgetItem 
          percent={40} 
          amount={true}
          value={3400000}
          heading="Revenue"
          color="rgb(0,115,255)"/>
        </section>
      </main>
    </div>
  )
}


interface WidgetItemProps {
  heading:string,
  value: number,
  percent: number,
  color: string,
  amount?: boolean
}
const WidgetItem = ({ 
  heading, 
  value, 
  percent, 
  color, 
  amount }: WidgetItemProps)=>{
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount? `${value}`: value}</h4>
        {
          percent>0? <span className="green"> <HiTrendingUp/> +{percent}%{" "} </span> : <span> <HiTrendingUp/> -{percent}%{" "} </span>
        }
      </div>
    </article>
  )
}