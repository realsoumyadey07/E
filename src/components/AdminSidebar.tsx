import { Link, Location, useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

export default function AdminSidebar() {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );
const resizeHandler = ()=>{
  setPhoneActive(window.innerWidth<1100)
}
useEffect(()=>{
  window.addEventListener("resize", resizeHandler);
  return ()=>{
    window.removeEventListener("resize",resizeHandler);
  }
})
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <DiveOne location={location} />
        <DiveTwo location={location} />
        <DiveThree
          location={location}
          phoneActive={phoneActive}
          setShowModal={setShowModal}
        />
      </aside>
    </>
  );
}

const DiveOne = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <Li
          url="/admin/dashboard"
          text="Dashboard"
          location={location}
          Icon={RiDashboardFill}
        />
        <Li
          url="/admin/products"
          text="Product"
          location={location}
          Icon={RiShoppingBag3Fill}
        />
        <Li
          url="/admin/transaction"
          text="Transaction"
          location={location}
          Icon={AiFillFileText}
        />
        <Li
          url="/admin/customers"
          text="Customer"
          location={location}
          Icon={IoIosPeople}
        />
      </ul>
    </div>
  );
};

const DiveTwo = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Carts</h5>
      <ul>
        <Li
          url="/admin/chart/bar"
          text="Bar"
          location={location}
          Icon={FaChartBar}
        />
        <Li
          url="/admin/chart/pie"
          text="Pie"
          location={location}
          Icon={FaChartPie}
        />
        <Li
          url="/admin/chart/line"
          text="Line"
          location={location}
          Icon={FaChartLine}
        />
      </ul>
    </div>
  );
};
const DiveThree = ({
  location,
  phoneActive,
  setShowModal,
}: {
  location: Location;
  phoneActive: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <Li
          url="/admin/apps/stopwatch"
          text="Stopwatch"
          location={location}
          Icon={FaStopwatch}
        />
        <Li
          url="/admin/apps/coupon"
          text="Coupon"
          location={location}
          Icon={RiCoupon3Fill}
        />
        <Li
          url="/admin/apps/toss"
          text="Toss"
          location={location}
          Icon={FaGamepad}
        />
      </ul>
      {phoneActive && (
        <button id="close-sidebar" onClick={() => setShowModal(false)}>
          Close
        </button>
      )}
    </div>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        background: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url)
            ? "rgba(0, 0, 0, 0.5)"
            : "black",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};
