import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from '../components/DashboardTable';


export default function Dashboard() {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users docs" />
          <FaRegBell />
          <FaUser />
        </div>
        <section className="widgetcontainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            value={230000}
            heading="Transaction"
            color="rgb(255, 196, 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(75, 0 , 255)"
          />
        </section>
        <section className="graphContainer">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* graph here */}
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190, 456, 123, 567,789, 890]}
              data_2={[200, 424, 293, 105, 386, 187, 458, 467,134,245,256,345]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0, 115, 255)"
              bgColor_2="rgb(53, 162, 235, 0.8)"
              
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i, index) => (
                <CategoryItem
                  key={index}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* chart */}
            <DoughnutChart 
            labels={["Feamale", "Male"]} 
            data={[12, 19]} 
            bgColor={["hsl(340, 82%, 56%", "rgba(53, 162, 235, 0.8)"]}/>
            <p>
              <BiMaleFemale/>
            </p>
          </div>
          {/* table */}
                <DashboardTable data={data.transaction}/>
        </section>
      </main>
    </div>
  );
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            {" "}
            <HiTrendingUp /> +{percent}%{" "}
          </span>
        ) : (
          <span className="brown">
            {" "}
            <HiTrendingDown /> {percent}%{" "}
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255, 255, 255) 0
        )`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
  return (
    <div className="category-item">
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            background: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}</span>
    </div>
  );
};
