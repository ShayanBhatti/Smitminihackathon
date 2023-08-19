import Button from "../Button";
import Header from "./Header";
import Image from "next/image";
export default function Dashboard() {
 const date = new Date();
 const line = document.getElementById("");
const remove = () => {
document.getElementById("");
}
const edit = () =>{
  console.log("Return");
}

 return (
    <>
     <Header/>
       <h2>Dashboard</h2>
      
    <div className="dashboard-container">
      <div className="dashboard-content">
        <input placeholder="Placeholder" type="text"name="Title" id="title" maxLength={50}  minLength={5}/>
        <hr />
        <textarea
          placeholder="What is in your Mind ?"
          name=""
          id=""
          cols="30"
          rows="10"
          minLength={100}
          maxLength={3000}
        ></textarea>
        <br />
        <Button title="Publish Blog" />
      <hr />
      
    </div>
    <h4>My Blog</h4>
 <div className="dashboard-container dashboard-content" id="hello">
  <Image id="imgj" src="/shayan.jpg" width={20} height={20} />
  <p className="blog">  labore porro consectetur doloremque, sint quibusdam amet quam hic, velit ducimus maxime repellat, possimus distinctio voluptas! Culpa voluptatum eaque alias temporibus beatae eligendi doloribus. Natus, eaque qui vero nihil explicabo incidunt quia molestias? Provident consectetur expedita culpa ut in repudiandae et dolores, alias unde accusantium. </p>
   <Button title="Remove"  click={remove()}/> <Button className="button" title="edit" click={edit()} />
      
0 </div>
</div>


    </>  );

}
