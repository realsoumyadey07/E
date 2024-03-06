import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";


export default function BarCharts() {
  return (
     <div className="adminContainer">
     {/* sidebar */}
     <AdminSidebar />
     <main className="chart-container">
          <h1>Bar Charts</h1>
          <section>
            <BarChart 
            data_1={[300, 144, 433, 655, 144, 433, 655, 556, 778, 455, 990, 456]}
            data_2={[300, 144, 433,300, 144, 433, 655, 655, 237, 755, 190, 709]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%, 30%)`}
            bgColor_2={`hsl(360,90%, 90%)`}
            />
            <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
          </section>
          <section>
            <BarChart 
            data_1={[300, 144, 433, 655, 144, 433, 655, 556, 778, 455, 990, 456]}
            data_2={[]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%, 30%)`}
            bgColor_2=''
            horizontal
            />
            <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
          </section>
     </main>
    </div>
  )
}
