import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";


const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[]=[
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asjdfhgsdf",
    quantity: 4,
    price: 20000,
  },
]   
export default function TransactionManagement() {
  const [order, setOrder]= useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 Block street",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    pinCode: 83457634,
    status: "Processing",
    subtotal: 456745,
    discount: 345,
    shippingCharges: 0,
    tax: 3445,
    total: 34657+43+456-345,
    orderItems,
    _id: "ejrgfajdf"
  });
  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status
  } = order;


  const updateHandler =()=>{
    setOrder((prev)=>({
      ...prev,status:prev.status === "Processing" ? "Shipped" : "Delivered"
    }))
  }
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="product-management">
        <section>
          <h2>Order Items</h2>
          {
            order.orderItems.map(i=>(
              <ProductCard 
              key={i._id}
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}/>
            ))
          }
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Nmae: {name}</p>
          <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>
            Status:
            <span
            className={
              status === "Delivered"? "purple": status === "Shipped" ? "green": "red"
            }>{status}</span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);
