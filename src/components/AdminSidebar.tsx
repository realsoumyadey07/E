import { IconType } from "react-icons"
import { Location } from "react-router-dom"

export default function AdminSidebar() {
  return (
    <aside>
     <h2>Logo.</h2>
     <div>
        <h5>Dashboard</h5>  
        <ul>

        </ul>
     </div>
    </aside>
  )
}

interface LiProps {
     url: string,
     text: string,
     location: Location,
     icon: IconType
}
const Li=({}: LiProps)=>{
     return (
          <li>
               
          </li>
     )
}