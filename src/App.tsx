import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(()=> import("./pages/Dashboard"));
const Products = lazy(()=> import("./pages/Products"));
const Transaction = lazy(()=> import("./pages/Transaction"));
const Customers = lazy(()=> import("./pages/Customers"));
const NewProduct = lazy(()=> import("./pages/management/NewProduct"));
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(()=> import("./pages/management/TransactionManagement"));
const BarChart = lazy(()=> import("./pages/charts/BarCharts"));
const LineChart = lazy(()=> import("./pages/charts/LineCharts"));
const PieChart = lazy(()=> import("./pages/charts/PieCharts"));
const Stopwatch = lazy(()=> import("./pages/apps/Stopwatch"));
const Coupon = lazy(()=> import("./pages/apps/Coupon"));
const Toss = lazy(()=> import("./pages/apps/Toss"));


export default function App() {
  return (
    <Router>

      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Link to="/admin/dashboard"><button>Visit Dashboard</button></Link>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/products" element={<Products/>} />
        <Route path="/admin/transaction" element={<Transaction/>} />
        <Route path="/admin/customers" element={<Customers/>} />

        {/* charts */}

        <Route path="/admin/chart/bar" element={<BarChart/>}/>
        <Route path="/admin/chart/pie" element={<PieChart/>}/>
        <Route path="/admin/chart/line" element={<LineChart/>}/>
        {/* apps */}
        <Route path="/admin/apps/stopwatch" element={<Stopwatch/>}/>
        <Route path="/admin/apps/coupon" element={<Coupon/>}/>
        <Route path="/admin/apps/toss" element={<Toss/>}/>

        {/* managment */}
        <Route path="/admin/product/new" element={<NewProduct/>}/>
        <Route path="/admin/product/:id" element={<ProductManagement/>}/>
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}
