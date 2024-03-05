import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
export default function ProductManagement() {
  const [name, setName] = useState<string>("Puma Shoes");
  const [stock, setStock] = useState<number>(2000);
  const [price, setPrice] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const changeImageHandle = (e:ChangeEvent<HTMLInputElement>)=>{
     const file:File | undefined = e.target.files?.[0];
     const reader: FileReader = new FileReader();
     if(file){
          reader.readAsDataURL(file);
          reader.onloadend =()=>{
               if(typeof reader.result==="string") {
                setPhoto(reader.result);
              }
          }
     }
  }
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="product-management">
        <section>
          <strong>Id - dehfaqedfgraegg</strong>
          <img src={photo} alt="" />
          <p>{name}</p>
          {
            stock && stock > 0? (
              <span className="green">Available</span>
            ): <span className="red">Not Available</span>
          }
        </section>
        <article>
          <form>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input 
               required
               type="text"
               value={name} 
               onChange={(e)=>setName(e.target.value)}
               placeholder="Name" />
            </div>
            <div>
              <label>Price</label>
              <input 
               required
               type="number"
               placeholder="Price"
               value={price} 
               onChange={(e)=>setPrice(Number(e.target.value))} />
            </div>
            <div>
              <label>Stock</label>
              <input 
               required
               type="number"
               placeholder="Stock"
               value={stock} 
               onChange={(e)=>setStock(Number(e.target.value))} />
            </div>
            <div>
              <label>Photo</label>
              <input 
               required
               type="file" 
               onChange={changeImageHandle} />
            </div>
            {
               photo && <img src={photo} alt="New Image"/>
            }
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
}
